import { ReadingPreferences } from '../types';

const STORAGE_KEY = 'doit_reading_preferences_v2';

export const DEFAULT_READING_PREFERENCES: ReadingPreferences = {
  fontSize: 'base',
  fontScalePercent: 100,
  lineSpacing: 'relaxed',
  fontFamily: 'sans',
  theme: 'light',
  audioSpeed: 1.0,
};

export const FONT_SCALE_PRESETS = [
  { label: '85%', percent: 85, key: 'sm', desc: 'Compact' },
  { label: '100%', percent: 100, key: 'base', desc: 'Standard' },
  { label: '115%', percent: 115, key: 'lg', desc: 'Confort +' },
  { label: '130%', percent: 130, key: 'xl', desc: 'Grand' },
  { label: '150%', percent: 150, key: '2xl', desc: 'Très Grand' },
  { label: '175%', percent: 175, key: '2xl', desc: 'Maxi' },
  { label: '200%', percent: 200, key: '2xl', desc: 'Zoom 2x' },
];

export function getSavedReadingPreferences(): ReadingPreferences {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return { ...DEFAULT_READING_PREFERENCES, ...parsed };
    }
  } catch (e) {
    console.error('Error loading reading preferences from localStorage', e);
  }
  return DEFAULT_READING_PREFERENCES;
}

export function saveReadingPreferences(prefs: ReadingPreferences): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  } catch (e) {
    console.error('Error saving reading preferences to localStorage', e);
  }
}

/**
 * Returns Tailwind prose and text utility classes matching the reading preferences
 */
export function getProseFontSizeClass(prefs: ReadingPreferences): string {
  const percent = prefs.fontScalePercent || 100;
  if (percent <= 85) return 'prose-sm text-sm';
  if (percent <= 100) return 'prose-base text-base';
  if (percent <= 120) return 'prose-lg text-lg';
  if (percent <= 140) return 'prose-xl text-xl';
  return 'prose-2xl text-2xl';
}

/**
 * Returns line spacing utility classes
 */
export function getLineSpacingClass(prefs: ReadingPreferences): string {
  switch (prefs.lineSpacing) {
    case 'loose':
      return 'leading-[2.2] tracking-wide';
    case 'relaxed':
      return 'leading-[1.8] tracking-normal';
    default:
      return 'leading-normal tracking-normal';
  }
}

/**
 * Returns font-family styling
 */
export function getFontFamilyClass(prefs: ReadingPreferences): string {
  switch (prefs.fontFamily) {
    case 'serif':
      return 'font-serif';
    case 'opendyslexic':
      return 'font-sans tracking-wider [word-spacing:0.16em]';
    default:
      return 'font-sans';
  }
}

/**
 * Returns theme container classes
 */
export function getReadingThemeClass(theme: ReadingPreferences['theme']): {
  container: string;
  prose: string;
  badge: string;
  accent: string;
} {
  switch (theme) {
    case 'sepia':
      return {
        container: 'bg-[#fcf7ec] text-[#423321] border-[#ebdcc1] shadow-xs',
        prose: 'prose-stone text-[#3c2f1f] selection:bg-[#e7d4b4]',
        badge: 'bg-[#f0e4cc] text-[#543f25] border-[#dfceaf]',
        accent: 'text-[#824f1e] bg-[#f7eedc]',
      };
    case 'dark':
      return {
        container: 'bg-slate-900 text-slate-100 border-slate-800 shadow-2xl',
        prose: 'prose-invert text-slate-200 selection:bg-blue-600',
        badge: 'bg-slate-800 text-blue-300 border-slate-700',
        accent: 'text-amber-400 bg-slate-800',
      };
    case 'high-contrast':
      return {
        container: 'bg-black text-white border-2 border-yellow-400 shadow-2xl',
        prose: 'prose-invert text-white selection:bg-yellow-400 selection:text-black font-semibold',
        badge: 'bg-yellow-400 text-black border-2 border-white font-black',
        accent: 'text-yellow-400 bg-black border border-yellow-400',
      };
    default:
      return {
        container: 'bg-white text-slate-900 border-slate-200 shadow-xs',
        prose: 'prose-slate text-slate-800 selection:bg-blue-200',
        badge: 'bg-blue-50 text-blue-900 border-blue-200',
        accent: 'text-blue-900 bg-blue-50',
      };
  }
}
