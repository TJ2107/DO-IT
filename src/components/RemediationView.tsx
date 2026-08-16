import React, { useState } from 'react';
import { ErreurRemediation, Utilisateur } from '../types';
import { loadAllErrors, markErrorResolved, clearResolvedErrors } from '../utils/remediationStorage';
import { 
  Target, CheckCircle2, AlertTriangle, RotateCcw, 
  Sparkles, BookOpen, Trash2, HeartHandshake, Check, ArrowRight 
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface RemediationViewProps {
  user: Utilisateur;
  onUpdateUser: (updated: Utilisateur) => void;
  onOpenCourse?: (coursId: string) => void;
}

export const RemediationView: React.FC<RemediationViewProps> = ({
  user,
  onUpdateUser,
  onOpenCourse,
}) => {
  const [errors, setErrors] = useState<ErreurRemediation[]>(loadAllErrors);
  const [filter, setFilter] = useState<'all' | 'unresolved' | 'resolved'>('unresolved');
  const [activeRetryId, setActiveRetryId] = useState<string | null>(null);

  const unresolvedCount = errors.filter((e) => !e.resolu).length;
  const resolvedCount = errors.filter((e) => e.resolu).length;

  const filteredErrors = errors.filter((e) => {
    if (filter === 'unresolved') return !e.resolu;
    if (filter === 'resolved') return e.resolu;
    return true;
  });

  const handleResolve = (id: string) => {
    const updated = markErrorResolved(id);
    setErrors(updated);
    setActiveRetryId(null);

    // Give user +20 XP for fixing their mistake
    const newXp = user.xp + 20;
    const newLvl = Math.max(user.niveauGlobal, Math.floor(newXp / 1000) + 1);
    onUpdateUser({
      ...user,
      xp: newXp,
      niveauGlobal: newLvl
    });

    try {
      confetti({ particleCount: 35, spread: 50, origin: { y: 0.8 } });
    } catch {}
  };

  const handleClearResolved = () => {
    const updated = clearResolvedErrors();
    setErrors(updated);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-950 via-slate-900 to-blue-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-black uppercase tracking-wider border border-amber-400/30">
            <Target className="w-3.5 h-3.5" />
            <span>Pédagogie Positive & Dédramatisation de l'Erreur</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black">
            Carnet d'Erreurs & Remédiation Ciblée
          </h1>
          <p className="text-sm text-slate-300 max-w-xl">
            L'erreur est le tremplin principal de l'assimilation. Retravaillez sereinement les notions où vous avez hésité avec l'aide personnalisée de votre professeur.
          </p>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 shrink-0">
          <div className="text-center px-2">
            <span className="text-2xl font-black text-amber-400 block">
              {unresolvedCount}
            </span>
            <span className="text-[10px] uppercase font-bold text-slate-300">
              À retravailler
            </span>
          </div>
          <div className="w-px h-8 bg-white/20" />
          <div className="text-center px-2">
            <span className="text-2xl font-black text-emerald-400 block">
              {resolvedCount}
            </span>
            <span className="text-[10px] uppercase font-bold text-slate-300">
              Résolues (+20 XP)
            </span>
          </div>
        </div>
      </div>

      {/* Action Filters Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setFilter('unresolved')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              filter === 'unresolved'
                ? 'bg-blue-900 text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            ⚠️ À retravailler ({unresolvedCount})
          </button>
          <button
            onClick={() => setFilter('resolved')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              filter === 'resolved'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            ✅ Résolues ({resolvedCount})
          </button>
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              filter === 'all'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            Toutes ({errors.length})
          </button>
        </div>

        {resolvedCount > 0 && (
          <button
            onClick={handleClearResolved}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-500 hover:text-red-600 transition cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Nettoyer les résolues</span>
          </button>
        )}
      </div>

      {/* List of remediation items */}
      <div className="space-y-4">
        {filteredErrors.length > 0 ? (
          filteredErrors.map((err) => {
            const isRetrying = activeRetryId === err.id;
            return (
              <div
                key={err.id}
                className={`bg-white rounded-3xl p-6 sm:p-7 border transition-all ${
                  err.resolu
                    ? 'border-emerald-200 bg-emerald-50/30'
                    : 'border-slate-200 shadow-sm hover:border-amber-400'
                }`}
              >
                {/* Top header */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md ${
                      err.resolu ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-900'
                    }`}>
                      {err.resolu ? '✅ Notion Assimilée' : '⚡ Entraînement en cours'}
                    </span>
                    <span className="text-xs font-bold text-slate-600">
                      {err.coursTitre} • {err.chapitreTitre}
                    </span>
                  </div>

                  <span className="text-[11px] text-slate-400 font-mono">
                    Enregistré le {err.dateErreur}
                  </span>
                </div>

                {/* Question */}
                <div className="py-4 space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    « {err.question} »
                  </h3>

                  {/* Bad choice vs Good answer */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-950 space-y-0.5">
                      <span className="font-bold text-[11px] text-red-800 uppercase block">
                        ❌ Réponse initiale choisie :
                      </span>
                      <p className="font-semibold">{err.reponseChoisie}</p>
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-0.5">
                      <span className="font-bold text-[11px] text-emerald-800 uppercase block">
                        🎯 Réponse correcte attendue :
                      </span>
                      <p className="font-semibold">{err.bonneReponse}</p>
                    </div>
                  </div>

                  {/* Professor Remediation Advice */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-4 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-black text-blue-950">
                      <span className="text-base">👨‍🏫</span>
                      <span>Explication & Conseil du Professeur Référent :</span>
                    </div>
                    <p className="text-xs sm:text-sm text-blue-900 leading-relaxed">
                      {err.explicationProfesseur}
                    </p>
                  </div>
                </div>

                {/* Bottom resolution actions */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
                  <span className="text-xs text-slate-500 italic">
                    {err.resolu ? 'Notion validée avec succès.' : 'Avez-vous bien assimilé cette explication ?'}
                  </span>

                  {!err.resolu ? (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleResolve(err.id)}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold transition shadow-xs cursor-pointer"
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span>J'ai compris ! Valider (+20 XP)</span>
                      </button>
                    </div>
                  ) : (
                    <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" /> Validé
                    </span>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 space-y-3">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center text-2xl mx-auto">
              🎉
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Aucune erreur en attente dans cette vue !
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Toutes les notions travaillées ont été validées. Continuez vos leçons ou lancez un examen certifiant.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
