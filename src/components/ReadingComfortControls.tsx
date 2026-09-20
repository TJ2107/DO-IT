import React, { useState } from 'react';
import { Sun, Moon, Type, Eye, ZoomIn, ZoomOut, RotateCcw, Sliders, Check, Sparkles } from 'lucide-react';
import { ReadingPreferences } from '../types';
import { FONT_SCALE_PRESETS, saveReadingPreferences } from '../utils/readingPreferences';

interface ReadingComfortControlsProps {
  preferences: ReadingPreferences;
  onChangePreferences: (prefs: ReadingPreferences) => void;
  compact?: boolean;
}

export const ReadingComfortControls: React.FC<ReadingComfortControlsProps> = ({
  preferences,
  onChangePreferences,
  compact = false,
}) => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const currentPercent = preferences.fontScalePercent || 100;

  const updatePreferences = (newPrefs: ReadingPreferences) => {
    onChangePreferences(newPrefs);
    saveReadingPreferences(newPrefs);
  };

  const handleDecreaseFont = () => {
    // Find next lower preset or step -15%
    const currentIdx = FONT_SCALE_PRESETS.findIndex(p => p.percent >= currentPercent);
    if (currentIdx > 0) {
      const targetPreset = FONT_SCALE_PRESETS[currentIdx - 1];
      updatePreferences({
        ...preferences,
        fontScalePercent: targetPreset.percent,
        fontSize: targetPreset.key as any,
      });
    } else if (currentPercent > 80) {
      updatePreferences({
        ...preferences,
        fontScalePercent: Math.max(75, currentPercent - 15),
      });
    }
  };

  const handleIncreaseFont = () => {
    // Find next higher preset or step +15%
    const currentIdx = FONT_SCALE_PRESETS.findIndex(p => p.percent > currentPercent);
    if (currentIdx !== -1) {
      const targetPreset = FONT_SCALE_PRESETS[currentIdx];
      updatePreferences({
        ...preferences,
        fontScalePercent: targetPreset.percent,
        fontSize: targetPreset.key as any,
      });
    } else if (currentPercent < 200) {
      updatePreferences({
        ...preferences,
        fontScalePercent: Math.min(200, currentPercent + 15),
      });
    }
  };

  const handleSelectPreset = (percent: number, key: string) => {
    updatePreferences({
      ...preferences,
      fontScalePercent: percent,
      fontSize: key as any,
    });
  };

  const handleReset = () => {
    updatePreferences({
      ...preferences,
      fontScalePercent: 100,
      fontSize: 'base',
      lineSpacing: 'relaxed',
      fontFamily: 'sans',
      theme: 'light',
    });
  };

  const handleSetTheme = (theme: ReadingPreferences['theme']) => {
    updatePreferences({ ...preferences, theme });
  };

  const handleSetLineSpacing = (lineSpacing: 'normal' | 'relaxed' | 'loose') => {
    updatePreferences({ ...preferences, lineSpacing });
  };

  const handleSetFontFamily = (fontFamily: 'sans' | 'serif' | 'opendyslexic') => {
    updatePreferences({ ...preferences, fontFamily });
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden transition-all text-xs">
      {/* Primary Bar */}
      <div className="p-3 sm:p-3.5 flex flex-wrap items-center justify-between gap-3">
        {/* Label & Indicator */}
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-blue-50 text-blue-900 border border-blue-100 flex items-center justify-center">
            <Eye className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-black text-slate-900 uppercase tracking-wider text-[11px]">
                Confort & Taille de Texte
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-900">
                {currentPercent}%
              </span>
            </div>
            <p className="text-[10px] text-slate-500 hidden sm:block">
              Agrandissez ou réduisez la police pour une lecture détendue
            </p>
          </div>
        </div>

        {/* Controls Group */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Zoom / Font Stepper */}
          <div className="flex items-center bg-slate-100 border border-slate-200 rounded-xl p-0.5 shadow-2xs">
            <button
              onClick={handleDecreaseFont}
              disabled={currentPercent <= 80}
              className="px-2.5 py-1.5 text-slate-800 hover:text-blue-900 hover:bg-white active:bg-slate-200 font-black disabled:opacity-30 rounded-lg transition cursor-pointer flex items-center gap-1"
              title="Réduire la taille des textes (-15%)"
            >
              <ZoomOut className="w-3.5 h-3.5" />
              <span>A-</span>
            </button>

            <button
              onClick={handleReset}
              className="px-2 py-1 text-[11px] font-mono font-bold text-slate-700 hover:text-blue-900 hover:bg-white rounded-md transition cursor-pointer"
              title="Réinitialiser à 100% (Taille standard)"
            >
              {currentPercent}%
            </button>

            <button
              onClick={handleIncreaseFont}
              disabled={currentPercent >= 200}
              className="px-2.5 py-1.5 text-slate-800 hover:text-blue-900 hover:bg-white active:bg-slate-200 font-black disabled:opacity-30 rounded-lg transition cursor-pointer flex items-center gap-1"
              title="Agrandir la taille des textes (+15%)"
            >
              <span>A+</span>
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Quick Presets for Large Screen */}
          <div className="hidden md:flex items-center gap-1 bg-slate-100 p-0.5 rounded-xl border border-slate-200">
            {[
              { label: 'Normal', percent: 100, key: 'base' },
              { label: 'Confort (+15%)', percent: 115, key: 'lg' },
              { label: 'Grand (+30%)', percent: 130, key: 'xl' },
              { label: 'Maxi (+50%)', percent: 150, key: '2xl' },
            ].map((p) => {
              const isSelected = currentPercent === p.percent;
              return (
                <button
                  key={p.percent}
                  onClick={() => handleSelectPreset(p.percent, p.key)}
                  className={`px-2 py-1 rounded-lg text-[10px] font-bold transition cursor-pointer ${
                    isSelected
                      ? 'bg-blue-900 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  {p.label}
                </button>
              );
            })}
          </div>

          {/* Theme Quick Switcher */}
          <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-xl border border-slate-200">
            <button
              onClick={() => handleSetTheme('light')}
              className={`px-2 py-1 rounded-lg text-[11px] font-bold transition cursor-pointer flex items-center gap-1 ${
                preferences.theme === 'light'
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Mode Jour / Fond Blanc Lumineux"
            >
              <Sun className="w-3 h-3 text-amber-500" />
              <span className="hidden sm:inline">Clair</span>
            </button>

            <button
              onClick={() => handleSetTheme('sepia')}
              className={`px-2 py-1 rounded-lg text-[11px] font-bold transition cursor-pointer flex items-center gap-1 ${
                preferences.theme === 'sepia'
                  ? 'bg-[#fcf5e5] text-[#5f4b32] shadow-2xs border border-[#e8d5b5]'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Mode Sépia / Papier Chaud Anti-Fatigue"
            >
              <span>📜</span>
              <span className="hidden sm:inline">Sépia</span>
            </button>

            <button
              onClick={() => handleSetTheme('dark')}
              className={`px-2 py-1 rounded-lg text-[11px] font-bold transition cursor-pointer flex items-center gap-1 ${
                preferences.theme === 'dark'
                  ? 'bg-slate-900 text-amber-300 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Mode Sombre / Nuit"
            >
              <Moon className="w-3 h-3" />
              <span className="hidden sm:inline">Nuit</span>
            </button>
          </div>

          {/* Toggle Advanced accessibility settings */}
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className={`p-2 rounded-xl border transition cursor-pointer flex items-center gap-1 font-bold ${
              showAdvanced
                ? 'bg-blue-900 text-white border-blue-900'
                : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
            }`}
            title="Options avancées (Interligne, Police Dyslexie, Contraste)"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span className="text-[11px] hidden sm:inline">Options</span>
          </button>
        </div>
      </div>

      {/* Advanced Accessibility & Typography Drawer */}
      {showAdvanced && (
        <div className="bg-slate-50 p-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          {/* Font Family Selection */}
          <div className="space-y-1.5">
            <span className="font-bold text-slate-800 uppercase tracking-wider text-[10px] flex items-center gap-1">
              <Type className="w-3.5 h-3.5 text-blue-900" />
              Police de Caractères
            </span>
            <div className="flex flex-col gap-1">
              <button
                onClick={() => handleSetFontFamily('sans')}
                className={`px-3 py-1.5 rounded-xl text-left font-sans transition flex items-center justify-between cursor-pointer ${
                  (preferences.fontFamily || 'sans') === 'sans'
                    ? 'bg-blue-900 text-white font-bold'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span>Sans-Serif (Standard Moderne)</span>
                {(preferences.fontFamily || 'sans') === 'sans' && <Check className="w-3 h-3" />}
              </button>

              <button
                onClick={() => handleSetFontFamily('serif')}
                className={`px-3 py-1.5 rounded-xl text-left font-serif transition flex items-center justify-between cursor-pointer ${
                  preferences.fontFamily === 'serif'
                    ? 'bg-blue-900 text-white font-bold'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span>Serif Roman (Style Livre)</span>
                {preferences.fontFamily === 'serif' && <Check className="w-3 h-3" />}
              </button>

              <button
                onClick={() => handleSetFontFamily('opendyslexic')}
                className={`px-3 py-1.5 rounded-xl text-left tracking-wide transition flex items-center justify-between cursor-pointer ${
                  preferences.fontFamily === 'opendyslexic'
                    ? 'bg-blue-900 text-white font-bold'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span>Haute Lisibilité / Dyslexie</span>
                {preferences.fontFamily === 'opendyslexic' && <Check className="w-3 h-3" />}
              </button>
            </div>
          </div>

          {/* Line Spacing */}
          <div className="space-y-1.5">
            <span className="font-bold text-slate-800 uppercase tracking-wider text-[10px] flex items-center gap-1">
              <span>↕️</span>
              Interligne & Espacement
            </span>
            <div className="flex flex-col gap-1">
              <button
                onClick={() => handleSetLineSpacing('normal')}
                className={`px-3 py-1.5 rounded-xl text-left transition flex items-center justify-between cursor-pointer ${
                  preferences.lineSpacing === 'normal'
                    ? 'bg-blue-900 text-white font-bold'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span>Standard (1.5)</span>
                {preferences.lineSpacing === 'normal' && <Check className="w-3 h-3" />}
              </button>

              <button
                onClick={() => handleSetLineSpacing('relaxed')}
                className={`px-3 py-1.5 rounded-xl text-left transition flex items-center justify-between cursor-pointer ${
                  (preferences.lineSpacing || 'relaxed') === 'relaxed'
                    ? 'bg-blue-900 text-white font-bold'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span>Aéré Recommandé (1.8)</span>
                {(preferences.lineSpacing || 'relaxed') === 'relaxed' && <Check className="w-3 h-3" />}
              </button>

              <button
                onClick={() => handleSetLineSpacing('loose')}
                className={`px-3 py-1.5 rounded-xl text-left transition flex items-center justify-between cursor-pointer ${
                  preferences.lineSpacing === 'loose'
                    ? 'bg-blue-900 text-white font-bold'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span>Maxi Espace / Confort (2.2)</span>
                {preferences.lineSpacing === 'loose' && <Check className="w-3 h-3" />}
              </button>
            </div>
          </div>

          {/* Accessibility Themes & Reset */}
          <div className="space-y-1.5 flex flex-col justify-between">
            <div className="space-y-1.5">
              <span className="font-bold text-slate-800 uppercase tracking-wider text-[10px] flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                Contraste Élevé
              </span>
              <button
                onClick={() => handleSetTheme(preferences.theme === 'high-contrast' ? 'light' : 'high-contrast')}
                className={`w-full px-3 py-1.5 rounded-xl text-left transition flex items-center justify-between cursor-pointer font-bold ${
                  preferences.theme === 'high-contrast'
                    ? 'bg-black text-yellow-400 border-2 border-yellow-400'
                    : 'bg-white text-slate-800 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span>Contraste Élevé (Noir & Jaune)</span>
                {preferences.theme === 'high-contrast' && <Check className="w-3 h-3" />}
              </button>
            </div>

            <button
              onClick={handleReset}
              className="mt-2 w-full px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold rounded-xl transition flex items-center justify-center gap-1.5 cursor-pointer text-[11px]"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Réinitialiser les réglages par défaut</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

