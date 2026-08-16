import React, { useState } from 'react';
import { FLASHCARDS_DATA } from '../data/flashcardsData';
import { FlashcardItem, Domaine, Utilisateur } from '../types';
import { 
  Sparkles, RotateCw, CheckCircle2, AlertCircle, HelpCircle, 
  ChevronLeft, ChevronRight, Zap, Trophy, Filter, ArrowRight 
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface FlashcardsViewProps {
  user: Utilisateur;
  onUpdateUser: (updated: Utilisateur) => void;
  onOpenCourse?: (coursId: string) => void;
}

export const FlashcardsView: React.FC<FlashcardsViewProps> = ({
  user,
  onUpdateUser,
  onOpenCourse,
}) => {
  const [cards, setCards] = useState<FlashcardItem[]>(FLASHCARDS_DATA);
  const [selectedDomaine, setSelectedDomaine] = useState<number | 'all'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [streak, setStreak] = useState(0);

  const filteredCards = selectedDomaine === 'all'
    ? cards
    : cards.filter((c) => c.domaine === selectedDomaine);

  const currentCard: FlashcardItem | undefined = filteredCards[currentIndex] || filteredCards[0];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % (filteredCards.length || 1));
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + filteredCards.length) % (filteredCards.length || 1));
  };

  const handleRate = (rating: 'difficile' | 'moyen' | 'facile') => {
    if (!currentCard) return;

    const updated = cards.map((c) => {
      if (c.id === currentCard.id) {
        return {
          ...c,
          maitrise: rating,
          derniereRevision: new Date().toLocaleDateString('fr-FR')
        };
      }
      return c;
    });

    setCards(updated);

    if (rating === 'facile') {
      setStreak((s) => s + 1);
      // Give user +10 XP
      const currentXp = user?.xp ?? 0;
      const currentLvl = user?.niveauGlobal ?? 1;
      const newXp = currentXp + 10;
      const newLvl = Math.max(currentLvl, Math.floor(newXp / 1000) + 1);
      if (user && onUpdateUser) {
        onUpdateUser({
          ...user,
          xp: newXp,
          niveauGlobal: newLvl
        });
      }

      if (streak + 1 >= 5) {
        try {
          confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 } });
        } catch {}
      }
    } else {
      setStreak(0);
    }

    handleNext();
  };

  const masteredCount = cards.filter((c) => c.maitrise === 'facile').length;
  const inProgressCount = cards.filter((c) => c.maitrise === 'moyen' || c.maitrise === 'difficile').length;

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header & Stats Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-black uppercase tracking-wider border border-amber-400/30">
            <Zap className="w-3.5 h-3.5" />
            <span>Répétition Espacée & Mémorisation Rapide</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black">
            Cartes Mémoire / Flashcards de Révision
          </h1>
          <p className="text-sm text-blue-100 max-w-xl">
            Entraînez-vous 3 minutes par jour pour ancrer les formules clés, définitions fondamentales et réflexes de sécurité.
          </p>
        </div>

        {/* Gamification Stats */}
        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 shrink-0">
          <div className="text-center px-3 border-r border-white/10">
            <span className="text-2xl font-black text-amber-400 block">
              {streak} 🔥
            </span>
            <span className="text-[10px] uppercase font-bold text-blue-200">
              Série en cours
            </span>
          </div>
          <div className="text-center px-3 border-r border-white/10">
            <span className="text-2xl font-black text-emerald-400 block">
              {masteredCount} / {cards.length}
            </span>
            <span className="text-[10px] uppercase font-bold text-blue-200">
              Maîtrisées
            </span>
          </div>
          <div className="text-center px-3">
            <span className="text-2xl font-black text-blue-300 block">
              +{user?.xp ?? 0}
            </span>
            <span className="text-[10px] uppercase font-bold text-blue-200">
              XP Total
            </span>
          </div>
        </div>
      </div>

      {/* Domain Filters */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <span className="text-xs font-bold text-slate-500 flex items-center gap-1 shrink-0 pl-1">
          <Filter className="w-3.5 h-3.5" /> Filtrer :
        </span>
        <button
          onClick={() => {
            setSelectedDomaine('all');
            setCurrentIndex(0);
            setIsFlipped(false);
          }}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition shrink-0 cursor-pointer ${
            selectedDomaine === 'all'
              ? 'bg-blue-900 text-white shadow-xs'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          Tous les Domaines ({cards.length})
        </button>

        {[
          { id: Domaine.ELECTRICITE, label: '⚡ Électricité' },
          { id: Domaine.ELECTRONIQUE, label: '🔬 Électronique' },
          { id: Domaine.MECANIQUE, label: '⚙️ Mécanique' },
          { id: Domaine.INFORMATIQUE_FONDAMENTALE, label: '💻 IT & Réseaux' },
          { id: Domaine.MAINTENANCE_INDUSTRIELLE, label: '🛠️ Maintenance' },
          { id: Domaine.HSE, label: '🦺 HSE' },
          { id: Domaine.LEADERSHIP_TECHNIQUE, label: '👥 Leadership' },
        ].map((d) => (
          <button
            key={d.id}
            onClick={() => {
              setSelectedDomaine(d.id);
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition shrink-0 cursor-pointer ${
              selectedDomaine === d.id
                ? 'bg-blue-900 text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            {d.label}
          </button>
        ))}
      </div>

      {/* Interactive 3D Flip Card Arena */}
      {filteredCards.length > 0 && currentCard ? (
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Card Meta & Navigation */}
          <div className="flex items-center justify-between text-xs text-slate-500 px-2 font-medium">
            <span className="font-bold text-blue-900">
              {currentCard.domaineNom} • {currentCard.chapitreTitre}
            </span>
            <span>
              Carte {currentIndex + 1} sur {filteredCards.length}
            </span>
          </div>

          {/* Flip Container */}
          <div
            onClick={handleFlip}
            className="group cursor-pointer perspective-1000 min-h-[340px] w-full"
          >
            <div
              className={`relative w-full min-h-[340px] rounded-3xl p-8 transition-all duration-300 shadow-lg border flex flex-col justify-between select-none ${
                isFlipped
                  ? 'bg-gradient-to-br from-indigo-900 via-blue-950 to-slate-900 text-white border-indigo-500/40 ring-2 ring-indigo-500/20'
                  : 'bg-white text-slate-900 border-slate-200 hover:border-blue-400 hover:shadow-xl'
              }`}
            >
              {/* Top Card Badge */}
              <div className="flex items-center justify-between">
                <span
                  className={`text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg ${
                    isFlipped
                      ? 'bg-amber-400 text-slate-950'
                      : 'bg-blue-50 text-blue-900 border border-blue-100'
                  }`}
                >
                  {isFlipped ? '💡 VERSO : EXPLICATION & FORMULE' : '❓ RECTO : QUESTION / CONCEPT'}
                </span>

                <div className="flex items-center gap-1.5 text-xs">
                  <RotateCw className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform duration-500" />
                  <span className="font-semibold text-xs opacity-70">
                    {isFlipped ? 'Cliquer pour retourner' : 'Cliquer pour voir la réponse'}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="my-auto py-6 space-y-4 text-center">
                {!isFlipped ? (
                  <h2 className="text-xl sm:text-2xl font-bold leading-snug">
                    {currentCard.recto}
                  </h2>
                ) : (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <p className="text-base sm:text-lg font-medium leading-relaxed whitespace-pre-line text-blue-50">
                      {currentCard.verso}
                    </p>

                    {currentCard.formule && (
                      <div className="bg-white/10 border border-white/20 p-3 rounded-2xl font-mono text-sm font-bold text-amber-300 inline-block">
                        {currentCard.formule}
                      </div>
                    )}

                    {currentCard.astuce && (
                      <p className="text-xs text-blue-200 italic">
                        💡 Astuce : {currentCard.astuce}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Bottom Card Footer */}
              <div className="flex items-center justify-between text-[11px] opacity-75 pt-4 border-t border-slate-100 dark:border-white/10">
                <span>
                  Statut : {currentCard.maitrise === 'facile' ? '✅ Maîtrisé' : currentCard.maitrise === 'moyen' ? '⚡ En cours' : currentCard.maitrise === 'difficile' ? '⚠️ À revoir' : '⚪ Nouveau'}
                </span>
                <span>Astuce : Touchez ou appuyez pour retourner</span>
              </div>
            </div>
          </div>

          {/* Rating Assessment Bar (Appears when flipped) */}
          {isFlipped ? (
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-2 animate-in slide-in-from-bottom-2 duration-200">
              <span className="text-xs font-bold text-slate-700 block text-center">
                Comment avez-vous trouvé cette notion ?
              </span>
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => handleRate('difficile')}
                  className="py-3 px-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 text-xs font-bold transition flex flex-col items-center gap-1 cursor-pointer"
                >
                  <span className="text-base">😣</span>
                  <span>Difficile (À revoir)</span>
                </button>
                <button
                  onClick={() => handleRate('moyen')}
                  className="py-3 px-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 text-xs font-bold transition flex flex-col items-center gap-1 cursor-pointer"
                >
                  <span className="text-base">🤔</span>
                  <span>Moyen (Pas sûr)</span>
                </button>
                <button
                  onClick={() => handleRate('facile')}
                  className="py-3 px-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold transition flex flex-col items-center gap-1 cursor-pointer shadow-xs"
                >
                  <span className="text-base">🎯</span>
                  <span>Facile (+10 XP)</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <button
                onClick={handlePrev}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Précédente</span>
              </button>

              <button
                onClick={handleFlip}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-950 text-white text-xs font-bold transition shadow-sm cursor-pointer"
              >
                <RotateCw className="w-4 h-4 text-amber-400" />
                <span>Voir la Réponse</span>
              </button>

              <button
                onClick={handleNext}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition cursor-pointer"
              >
                <span>Suivante</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-3xl border border-slate-200">
          <p className="text-slate-500 text-sm">
            Aucune flashcard disponible pour ce filtre.
          </p>
        </div>
      )}
    </div>
  );
};
