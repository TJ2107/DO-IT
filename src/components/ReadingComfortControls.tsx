import React from 'react';
import { Sun, Moon, Sparkles, Type, Eye } from 'lucide-react';
import { ReadingPreferences } from '../types';

interface ReadingComfortControlsProps {
  preferences: ReadingPreferences;
  onChangePreferences: (prefs: ReadingPreferences) => void;
}

export const ReadingComfortControls: React.FC<ReadingComfortControlsProps> = ({
  preferences,
  onChangePreferences,
}) => {
  const fontSizes: ('sm' | 'base' | 'lg' | 'xl')[] = ['sm', 'base', 'lg', 'xl'];

  const handleDecreaseFont = () => {
    const idx = fontSizes.indexOf(preferences.fontSize);
    if (idx > 0) {
      onChangePreferences({ ...preferences, fontSize: fontSizes[idx - 1] });
    }
  };

  const handleIncreaseFont = () => {
    const idx = fontSizes.indexOf(preferences.fontSize);
    if (idx < fontSizes.length - 1) {
      onChangePreferences({ ...preferences, fontSize: fontSizes[idx + 1] });
    }
  };

  const handleSetTheme = (theme: 'light' | 'sepia' | 'dark') => {
    onChangePreferences({ ...preferences, theme });
  };

  return (
    <div className="bg-white rounded-2xl p-3 border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-3 text-xs">
      <div className="flex items-center gap-2">
        <Eye className="w-4 h-4 text-blue-900" />
        <span className="font-bold text-slate-800 uppercase tracking-wider text-[11px]">
          Confort de Lecture :
        </span>
      </div>

      <div className="flex items-center gap-2">
        {/* Font size control */}
        <div className="flex items-center bg-slate-100 rounded-lg p-0.5">
          <button
            onClick={handleDecreaseFont}
            disabled={preferences.fontSize === 'sm'}
            className="px-2 py-1 text-slate-700 hover:text-slate-950 font-bold disabled:opacity-40 rounded transition cursor-pointer"
            title="Diminuer la police"
          >
            A-
          </button>
          <span className="px-1.5 text-[11px] font-mono text-slate-500 font-semibold uppercase">
            {preferences.fontSize}
          </span>
          <button
            onClick={handleIncreaseFont}
            disabled={preferences.fontSize === 'xl'}
            className="px-2 py-1 text-slate-700 hover:text-slate-950 font-bold disabled:opacity-40 rounded transition cursor-pointer"
            title="Agrandir la police"
          >
            A+
          </button>
        </div>

        {/* Theme pills */}
        <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg">
          <button
            onClick={() => handleSetTheme('light')}
            className={`px-2 py-1 rounded-md text-[11px] font-semibold transition cursor-pointer flex items-center gap-1 ${
              preferences.theme === 'light'
                ? 'bg-white text-slate-900 shadow-2xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sun className="w-3 h-3 text-amber-500" />
            <span>Clair</span>
          </button>

          <button
            onClick={() => handleSetTheme('sepia')}
            className={`px-2 py-1 rounded-md text-[11px] font-semibold transition cursor-pointer flex items-center gap-1 ${
              preferences.theme === 'sepia'
                ? 'bg-[#fbf0d9] text-[#5f4b32] shadow-2xs font-bold border border-[#e8d5b5]'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>📜</span>
            <span>Sépia</span>
          </button>

          <button
            onClick={() => handleSetTheme('dark')}
            className={`px-2 py-1 rounded-md text-[11px] font-semibold transition cursor-pointer flex items-center gap-1 ${
              preferences.theme === 'dark'
                ? 'bg-slate-900 text-amber-300 shadow-2xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Moon className="w-3 h-3" />
            <span>Nuit</span>
          </button>
        </div>
      </div>
    </div>
  );
};
