import React, { useState } from 'react';
import { Chapitre } from '../types';
import { Sparkles, ArrowRight, RotateCcw, Check, BookOpen } from 'lucide-react';

interface PreviousChapterRecapProps {
  previousChapter: Chapitre;
  currentChapter: Chapitre;
  onGoToPreviousChapter?: () => void;
  onDismiss?: () => void;
}

export const PreviousChapterRecap: React.FC<PreviousChapterRecapProps> = ({
  previousChapter,
  currentChapter,
  onGoToPreviousChapter,
  onDismiss,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [acknowledged, setAcknowledged] = useState<boolean>(false);

  return (
    <div className="bg-gradient-to-r from-amber-50/90 via-orange-50/70 to-blue-50/90 border border-amber-200/90 rounded-2xl p-5 shadow-xs transition-all mb-6">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-xl shrink-0">
            👨‍🏫
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-amber-800 bg-amber-200/70 px-2 py-0.5 rounded-md">
                Rappel Pédagogique du Cours Précédent
              </span>
              <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                • Pour apprendre à votre rythme et consolider vos acquis
              </span>
            </div>
            <h4 className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">
              Avant de commencer « {currentChapter.titre} », faisons le point !
            </h4>
          </div>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs font-bold text-amber-900/80 hover:text-amber-950 bg-amber-100/80 hover:bg-amber-200/80 px-2.5 py-1 rounded-lg transition cursor-pointer"
        >
          {isExpanded ? 'Masquer le rappel' : 'Afficher le rappel'}
        </button>
      </div>

      {isExpanded && (
        <div className="mt-4 pt-3 border-t border-amber-200/70 space-y-3">
          <div className="bg-white/80 rounded-xl p-3.5 border border-amber-200/60 text-xs sm:text-sm text-slate-700 space-y-2">
            <div className="font-semibold text-slate-900 flex items-center gap-2">
              <span className="text-amber-600 font-bold">✓ Ce que vous avez vu au chapitre précédent :</span>
              <span className="text-slate-600 italic font-normal">« {previousChapter.titre} »</span>
            </div>
            <p className="leading-relaxed text-slate-600">
              {currentChapter.rappelPrecedent || 
                `Vous avez posé les bases de ${previousChapter.titre}. Vous avez compris les notions fondamentales et validé les premiers exercices d'application.`}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <div className="flex items-center gap-2">
              {onGoToPreviousChapter && (
                <button
                  onClick={onGoToPreviousChapter}
                  className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-amber-600" />
                  <span>Revoir le chapitre précédent</span>
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              {!acknowledged ? (
                <button
                  onClick={() => {
                    setAcknowledged(true);
                    if (onDismiss) onDismiss();
                  }}
                  className="flex items-center gap-1.5 text-xs font-bold text-amber-950 bg-amber-300 hover:bg-amber-400 px-3.5 py-1.5 rounded-lg transition cursor-pointer shadow-2xs"
                >
                  <Check className="w-3.5 h-3.5 font-bold" />
                  <span>C'est bien clair dans mon esprit, avançons !</span>
                </button>
              ) : (
                <span className="text-xs font-bold text-emerald-700 flex items-center gap-1 bg-emerald-100/80 px-3 py-1 rounded-lg">
                  <Check className="w-3.5 h-3.5" />
                  <span>Prêt pour le nouveau cours !</span>
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
