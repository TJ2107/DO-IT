import React, { useState, useEffect } from 'react';
import { Clock, Coffee, Sparkles, Play, Pause, RotateCcw, Volume2, ShieldCheck, Heart } from 'lucide-react';

export type PaceMode = 'serenite' | 'pomodoro' | 'libre';

interface LearningPaceControlProps {
  currentChapterMin: number;
}

export const LearningPaceControl: React.FC<LearningPaceControlProps> = ({ currentChapterMin }) => {
  const [mode, setMode] = useState<PaceMode>('pomodoro');
  const [seconds, setSeconds] = useState<number>(25 * 60);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [breakReminder, setBreakReminder] = useState<boolean>(false);

  useEffect(() => {
    let interval: any = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    } else if (seconds === 0 && isActive) {
      setBreakReminder(true);
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const handleSelectMode = (newMode: PaceMode) => {
    setMode(newMode);
    setIsActive(false);
    setBreakReminder(false);
    if (newMode === 'pomodoro') {
      setSeconds(25 * 60);
    } else if (newMode === 'serenite') {
      setSeconds((currentChapterMin || 30) * 60);
    }
  };

  const toggleTimer = () => {
    setIsActive(!isActive);
    if (breakReminder) setBreakReminder(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setBreakReminder(false);
    setSeconds(mode === 'pomodoro' ? 25 * 60 : (currentChapterMin || 30) * 60);
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remSecs = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remSecs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className="w-4 h-4 text-rose-500" />
          <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
            Mon Rythme d'Apprentissage
          </span>
        </div>
        <span className="text-[11px] bg-slate-100 text-slate-600 font-mono px-2 py-0.5 rounded font-bold">
          {mode === 'serenite' ? '🌿 Zen' : mode === 'pomodoro' ? '⏱️ Pomodoro 25m' : '🚀 Libre'}
        </span>
      </div>

      {/* Mode Selection Pills */}
      <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 rounded-xl text-[11px] font-bold">
        <button
          onClick={() => handleSelectMode('pomodoro')}
          className={`py-1.5 rounded-lg transition cursor-pointer text-center ${
            mode === 'pomodoro' ? 'bg-white text-blue-900 shadow-2xs font-extrabold' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Pomodoro
        </button>
        <button
          onClick={() => handleSelectMode('serenite')}
          className={`py-1.5 rounded-lg transition cursor-pointer text-center ${
            mode === 'serenite' ? 'bg-white text-blue-900 shadow-2xs font-extrabold' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Sérénité
        </button>
        <button
          onClick={() => handleSelectMode('libre')}
          className={`py-1.5 rounded-lg transition cursor-pointer text-center ${
            mode === 'libre' ? 'bg-white text-blue-900 shadow-2xs font-extrabold' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          À mon rythme
        </button>
      </div>

      {/* Timer Controls if Pomodoro or Sérénité */}
      {mode !== 'libre' ? (
        <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className={`w-4 h-4 ${isActive ? 'text-blue-600 animate-spin' : 'text-slate-400'}`} />
            <span className="font-mono text-base font-black text-slate-800">
              {formatTime(seconds)}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={toggleTimer}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1 cursor-pointer ${
                isActive
                  ? 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                  : 'bg-blue-900 text-white hover:bg-blue-950 shadow-2xs'
              }`}
            >
              {isActive ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isActive ? 'Pause' : 'Démarrer'}</span>
            </button>
            <button
              onClick={resetTimer}
              title="Réinitialiser le chrono"
              className="p-1 text-slate-400 hover:text-slate-600 rounded cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      ) : (
        <div className="text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-xl text-center leading-relaxed">
          Prenez tout votre temps. Aucun compte à rebours, apprenez selon vos disponibilités.
        </div>
      )}

      {/* Mindful Break Reminder Banner if triggered */}
      {breakReminder && (
        <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-3 text-xs text-emerald-950 space-y-1 animate-bounce">
          <div className="font-bold flex items-center gap-1.5 text-emerald-900">
            <Coffee className="w-4 h-4 text-emerald-700" />
            <span>Pause Bien-être Recommandée (5 min)</span>
          </div>
          <p className="text-[11px] text-emerald-800">
            Excellent travail ! Prenez quelques minutes pour détendre vos yeux, vous étirer et boire un verre d'eau avant de poursuivre.
          </p>
        </div>
      )}
    </div>
  );
};
