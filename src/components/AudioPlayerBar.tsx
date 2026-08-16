import React, { useState, useEffect } from 'react';
import { 
  speakText, pauseSpeech, resumeSpeech, stopSpeech, 
  isSpeaking, isPaused, isSpeechSupported 
} from '../utils/speechHelper';
import { 
  Volume2, VolumeX, Play, Pause, Square, 
  RotateCcw, Sparkles, FastForward, Headphones 
} from 'lucide-react';

interface AudioPlayerBarProps {
  contentToRead: string;
  title: string;
}

export const AudioPlayerBar: React.FC<AudioPlayerBarProps> = ({
  contentToRead,
  title,
}) => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [paused, setPaused] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(1.0);
  const [supported, setSupported] = useState<boolean>(true);

  useEffect(() => {
    setSupported(isSpeechSupported());
    return () => {
      stopSpeech();
    };
  }, []);

  // Stop if text content changes
  useEffect(() => {
    stopSpeech();
    setPlaying(false);
    setPaused(false);
  }, [contentToRead]);

  const handlePlay = () => {
    if (paused) {
      resumeSpeech();
      setPaused(false);
      setPlaying(true);
    } else {
      speakText(
        contentToRead,
        speed,
        () => {
          setPlaying(true);
          setPaused(false);
        },
        () => {
          setPlaying(false);
          setPaused(false);
        },
        (err) => {
          console.error('Speech error', err);
          setPlaying(false);
          setPaused(false);
        }
      );
    }
  };

  const handlePause = () => {
    pauseSpeech();
    setPaused(true);
    setPlaying(false);
  };

  const handleStop = () => {
    stopSpeech();
    setPlaying(false);
    setPaused(false);
  };

  const handleChangeSpeed = () => {
    const speeds = [0.85, 1.0, 1.25, 1.5];
    const nextIdx = (speeds.indexOf(speed) + 1) % speeds.length;
    const newSpeed = speeds[nextIdx];
    setSpeed(newSpeed);
    if (playing) {
      // restart with new speed
      speakText(
        contentToRead,
        newSpeed,
        () => {
          setPlaying(true);
          setPaused(false);
        },
        () => {
          setPlaying(false);
          setPaused(false);
        }
      );
    }
  };

  if (!supported) return null;

  return (
    <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white rounded-2xl p-3.5 sm:p-4 border border-blue-900/60 shadow-xs flex flex-wrap items-center justify-between gap-3">
      {/* Left Title & Equalizer visual */}
      <div className="flex items-center gap-3">
        <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg ${
          playing ? 'bg-amber-400 text-slate-950 animate-pulse' : 'bg-blue-900 text-blue-200'
        }`}>
          <Headphones className="w-4 h-4" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-wider bg-blue-800/80 text-blue-200 px-2 py-0.5 rounded">
              Mode Audio & Podcast Professeur
            </span>
            {playing && (
              <span className="flex items-center gap-0.5">
                <span className="w-1 h-3 bg-amber-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                <span className="w-1 h-4 bg-amber-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                <span className="w-1 h-2 bg-amber-400 rounded-full animate-bounce" />
              </span>
            )}
          </div>
          <span className="text-xs text-slate-200 font-bold block truncate max-w-[220px] sm:max-w-md">
            Écouter : {title}
          </span>
        </div>
      </div>

      {/* Audio controls */}
      <div className="flex items-center gap-2 ml-auto">
        <button
          onClick={handleChangeSpeed}
          title="Modifier la vitesse de lecture"
          className="text-xs font-mono font-bold text-blue-200 bg-blue-900/80 hover:bg-blue-800 px-2.5 py-1.5 rounded-lg border border-blue-700/60 transition cursor-pointer"
        >
          {speed}x
        </button>

        {playing ? (
          <button
            onClick={handlePause}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold transition shadow-xs cursor-pointer"
          >
            <Pause className="w-3.5 h-3.5 font-black" />
            <span>Pause</span>
          </button>
        ) : (
          <button
            onClick={handlePlay}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition shadow-xs cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>{paused ? 'Reprendre' : 'Écouter le cours'}</span>
          </button>
        )}

        {(playing || paused) && (
          <button
            onClick={handleStop}
            title="Arrêter l'audio"
            className="p-2 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 rounded-xl transition cursor-pointer"
          >
            <Square className="w-3.5 h-3.5 fill-current" />
          </button>
        )}
      </div>
    </div>
  );
};
