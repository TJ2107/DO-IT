// Web Speech API Voice synthesis helper

let currentUtterance: SpeechSynthesisUtterance | null = null;

export function isSpeechSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

export function speakText(
  text: string,
  rate = 1.0,
  onStart?: () => void,
  onEnd?: () => void,
  onError?: (err: any) => void
): void {
  if (!isSpeechSupported()) {
    if (onError) onError(new Error('Speech Synthesis not supported in this browser'));
    return;
  }

  // Cancel any ongoing speech
  stopSpeech();

  // Strip HTML tags for smooth audio reading
  const cleanText = text.replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ').trim();
  if (!cleanText) return;

  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.rate = rate; // 0.8 to 1.5
  utterance.pitch = 1.0;
  utterance.lang = 'fr-FR';

  // Find a French voice if available
  const voices = window.speechSynthesis.getVoices();
  const frenchVoice = voices.find((v) => v.lang.startsWith('fr') || v.lang === 'fr_FR');
  if (frenchVoice) {
    utterance.voice = frenchVoice;
  }

  utterance.onstart = () => {
    if (onStart) onStart();
  };

  utterance.onend = () => {
    currentUtterance = null;
    if (onEnd) onEnd();
  };

  utterance.onerror = (e) => {
    currentUtterance = null;
    if (onError) onError(e);
  };

  currentUtterance = utterance;
  window.speechSynthesis.speak(utterance);
}

export function pauseSpeech(): void {
  if (isSpeechSupported() && window.speechSynthesis.speaking) {
    window.speechSynthesis.pause();
  }
}

export function resumeSpeech(): void {
  if (isSpeechSupported() && window.speechSynthesis.paused) {
    window.speechSynthesis.resume();
  }
}

export function stopSpeech(): void {
  if (isSpeechSupported()) {
    window.speechSynthesis.cancel();
    currentUtterance = null;
  }
}

export function isSpeaking(): boolean {
  return isSpeechSupported() && window.speechSynthesis.speaking && !window.speechSynthesis.paused;
}

export function isPaused(): boolean {
  return isSpeechSupported() && window.speechSynthesis.paused;
}
