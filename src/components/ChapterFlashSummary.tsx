import React, { useState } from 'react';
import { Chapitre, Cours } from '../types';
import { Sparkles, Check, CheckCircle2, BookmarkCheck, HeartHandshake, ArrowRight, X, Lightbulb, HelpCircle, Brain } from 'lucide-react';
import confetti from 'canvas-confetti';
import { getChapterEnrichedData } from '../utils/professorData';

interface ChapterFlashSummaryProps {
  chapter: Chapitre;
  course: Cours;
  chapterIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onContinueToNext?: () => void;
  hasNextChapter: boolean;
}

export const ChapterFlashSummary: React.FC<ChapterFlashSummaryProps> = ({
  chapter,
  course,
  chapterIndex,
  isOpen,
  onClose,
  onContinueToNext,
  hasNextChapter,
}) => {
  const enriched = getChapterEnrichedData(course, chapterIndex);
  const [checkedPoints, setCheckedPoints] = useState<Record<number, boolean>>({
    0: true,
    1: true,
  });

  if (!isOpen) return null;

  const points = chapter.pointsCles && chapter.pointsCles.length > 0 
    ? chapter.pointsCles 
    : enriched.pointsCles;

  const handleToggleCheck = (index: number) => {
    setCheckedPoints((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const allChecked = points.every((_, i) => checkedPoints[i]);

  const handleCelebrate = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 }
    });
    if (onContinueToNext) {
      onContinueToNext();
    } else {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-xl w-full border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header with Professor Banner */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 transition cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-2xl bg-amber-400 text-blue-950 flex items-center justify-center text-2xl font-black shadow-inner">
              👨‍🏫
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-black uppercase tracking-wider bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded border border-amber-400/30">
                  Info-Bulle Flash-Mémoire • Synthèse
                </span>
                <span className="text-xs text-blue-200 font-mono">
                  Chapitre {chapterIndex + 1}/{course.chapitres.length}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white mt-1">
                Félicitations pour ce chapitre !
              </h3>
            </div>
          </div>
          <p className="text-xs text-blue-200 leading-relaxed">
            Prenez 60 secondes pour fixer durablement ces notions dans votre mémoire avant de passer à l'étape suivante.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-slate-800 text-sm">
          {/* Chapter Title Badge */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center gap-2.5">
            <span className="text-lg">📌</span>
            <div className="truncate">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Chapitre étudié
              </span>
              <span className="font-bold text-slate-900 text-sm truncate block">
                {chapter.titre}
              </span>
            </div>
          </div>

          {/* Active Recall Checklist / Key Points */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <Brain className="w-4 h-4 text-blue-600" />
                <span>Points Clés à Retenir (Cochez pour ancrer) :</span>
              </span>
              <span className="text-[11px] text-slate-500 font-medium">
                {Object.values(checkedPoints).filter(Boolean).length}/{points.length} ancrés
              </span>
            </div>

            <div className="space-y-2">
              {points.map((pt, idx) => {
                const isChecked = !!checkedPoints[idx];
                return (
                  <div
                    key={idx}
                    onClick={() => handleToggleCheck(idx)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                      isChecked
                        ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950 shadow-2xs'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100/80'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition ${
                        isChecked ? 'bg-emerald-600 text-white' : 'border border-slate-300 bg-white'
                      }`}
                    >
                      {isChecked && <Check className="w-3.5 h-3.5 font-black" />}
                    </div>
                    <span className={`text-xs sm:text-sm leading-relaxed ${isChecked ? 'font-semibold' : ''}`}>
                      {pt}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Formula or golden rule if any */}
          {chapter.formuleCle && (
            <div className="bg-amber-50 border border-amber-300 rounded-2xl p-4 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-black text-amber-900 uppercase tracking-wide">
                <Lightbulb className="w-4 h-4 text-amber-600" />
                <span>Règle d'or & Formule Clé :</span>
              </div>
              <div className="font-mono font-bold text-amber-950 bg-white/90 px-3 py-2 rounded-xl border border-amber-200 text-sm sm:text-base text-center">
                {chapter.formuleCle}
              </div>
            </div>
          )}

          {/* Professor's Kind Word & Healthy Learning Reminder */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-4 flex items-start gap-3">
            <span className="text-2xl shrink-0">🌿</span>
            <div className="space-y-1">
              <span className="text-xs font-bold text-blue-900 uppercase tracking-wide block">
                Le mot bienveillant du Professeur :
              </span>
              <p className="text-xs text-slate-700 leading-relaxed italic">
                « {chapter.conseilProfesseur || "Vous avez fait un travail remarquable. N'oubliez pas que la répétition espacée et la sérénité sont les clés de la réussite. Prenez un verre d'eau si nécessaire !"} »
              </p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-50 p-4 sm:p-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition cursor-pointer"
          >
            Revoir le cours
          </button>

          <button
            onClick={handleCelebrate}
            className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-900 hover:bg-blue-950 shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>
              {hasNextChapter ? 'C’est retenu ! Passer au chapitre suivant' : 'Terminer & Voir mes résultats'}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
