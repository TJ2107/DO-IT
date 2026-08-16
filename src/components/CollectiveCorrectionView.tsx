import React from 'react';
import { Cours, Utilisateur } from '../types';
import { computeGlobalAssessment, createBrevetRecord } from '../utils/brevetStorage';
import { saveUser } from '../utils/storage';
import { 
  Trophy, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  BookOpen, 
  FileText, 
  Award, 
  GraduationCap, 
  ArrowRight, 
  AlertTriangle,
  RotateCcw,
  Printer
} from 'lucide-react';

interface CollectiveCorrectionViewProps {
  cours: Cours;
  utilisateur: Utilisateur;
  onUpdateUser: (user: Utilisateur) => void;
  onNavigateToBrevet: () => void;
  onNavigateToDevoirs: () => void;
  onNavigateToExamen: () => void;
  onBackToCourse: () => void;
}

export const CollectiveCorrectionView: React.FC<CollectiveCorrectionViewProps> = ({
  cours,
  utilisateur,
  onUpdateUser,
  onNavigateToBrevet,
  onNavigateToDevoirs,
  onNavigateToExamen,
  onBackToCourse
}) => {
  const bilan = computeGlobalAssessment(cours, utilisateur);
  const existingBrevet = (utilisateur.brevetsObtenus || []).find(b => b.coursId === cours.id);

  const handleDelivrerBrevet = () => {
    if (!bilan.admis) return;
    const nouveauBrevet = createBrevetRecord(cours, utilisateur, bilan);
    
    // Avoid duplicate
    const filtrer = (utilisateur.brevetsObtenus || []).filter(b => b.coursId !== cours.id);
    const updatedUser: Utilisateur = {
      ...utilisateur,
      brevetsObtenus: [...filtrer, nouveauBrevet],
      pointsExperience: utilisateur.pointsExperience + 500
    };

    onUpdateUser(updatedUser);
    saveUser(updatedUser);
    onNavigateToBrevet();
  };

  const getMentionColor = (mention: string) => {
    switch (mention) {
      case 'Très Bien':
        return 'text-amber-600 bg-amber-50 border-amber-300';
      case 'Bien':
        return 'text-blue-600 bg-blue-50 border-blue-300';
      case 'Assez Bien':
        return 'text-emerald-600 bg-emerald-50 border-emerald-300';
      case 'Passable':
        return 'text-slate-600 bg-slate-100 border-slate-300';
      default:
        return 'text-rose-600 bg-rose-50 border-rose-300';
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
            <GraduationCap className="w-4 h-4" />
            <span>Bilan Académique & Correction d'Ensemble</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onBackToCourse}
              className="text-xs text-slate-300 hover:text-white px-3 py-1.5 rounded-lg border border-slate-700 hover:bg-slate-800 transition-colors flex items-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5" />
              Retour aux chapitres
            </button>
            {bilan.admis && (
              <button
                onClick={onNavigateToBrevet}
                className="text-xs bg-amber-400 text-slate-950 font-bold px-3 py-1.5 rounded-lg hover:bg-amber-300 transition-colors flex items-center gap-1.5 shadow-xs"
              >
                <Award className="w-3.5 h-3.5" />
                Voir mon Brevet
              </button>
            )}
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
          Correction d'Ensemble & Bilan de Compétences
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          Synthèse globale des 15 chapitres, devoirs de mise en pratique et épreuves terminales pour l'attribution du <strong>{cours.titreBrevet || cours.titre}</strong>.
        </p>

        {/* Global Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-800/80">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <span className="text-xs text-slate-400 block mb-1">Note Globale Pondérée</span>
            <div className="text-2xl sm:text-3xl font-black text-white">
              {bilan.moyennePondereeSur20}<span className="text-sm font-normal text-slate-400">/20</span>
            </div>
            <span className={`inline-block text-[11px] font-bold px-2 py-0.5 rounded-md border mt-2 ${getMentionColor(bilan.mention)}`}>
              Mention {bilan.mention}
            </span>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <span className="text-xs text-slate-400 block mb-1">Exercices Chapitres (25%)</span>
            <div className="text-2xl sm:text-3xl font-black text-white">
              {bilan.scoreExercicesSur20}<span className="text-sm font-normal text-slate-400">/20</span>
            </div>
            <span className="text-[11px] text-slate-400 block mt-2">
              {cours.chapitres.length} chapitres évalués
            </span>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <span className="text-xs text-slate-400 block mb-1">Devoirs Maison (35%)</span>
            <div className="text-2xl sm:text-3xl font-black text-white">
              {bilan.scoreDevoirsSur20 !== null ? `${bilan.scoreDevoirsSur20}/20` : 'En attente'}
            </div>
            <span className="text-[11px] text-slate-400 block mt-2">
              {cours.devoirs?.length || 0} devoir(s) prévu(s)
            </span>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <span className="text-xs text-slate-400 block mb-1">Examen Terminal (40%)</span>
            <div className="text-2xl sm:text-3xl font-black text-white">
              {bilan.scoreExamenSur20 !== null ? `${bilan.scoreExamenSur20}/20` : 'À passer'}
            </div>
            <span className="text-[11px] text-slate-400 block mt-2">
              Épreuve de synthèse
            </span>
          </div>
        </div>
      </div>

      {/* Professor Pedagogical Verdict Card */}
      <div className={`p-6 sm:p-7 rounded-3xl border shadow-sm ${
        bilan.admis
          ? 'bg-gradient-to-br from-emerald-50/90 via-teal-50/50 to-white border-emerald-200'
          : 'bg-gradient-to-br from-amber-50/90 via-orange-50/50 to-white border-amber-200'
      }`}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-2xl shrink-0 shadow-sm ${
              bilan.admis ? 'bg-emerald-600 text-white' : 'bg-amber-600 text-white'
            }`}>
              {bilan.admis ? <Trophy className="w-7 h-7" /> : <AlertTriangle className="w-7 h-7" />}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-bold text-slate-900">
                  {bilan.admis ? 'Admis au Brevet Professionnel' : 'Cursus en cours d’acquisition'}
                </h3>
                <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold border ${
                  bilan.admis
                    ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                    : 'bg-amber-100 text-amber-800 border-amber-300'
                }`}>
                  {bilan.admis ? 'Validé' : 'Seuil 10/20 non atteint'}
                </span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed max-w-2xl font-medium">
                {bilan.appreciationGlobale}
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            {bilan.admis ? (
              <button
                onClick={handleDelivrerBrevet}
                className="w-full sm:w-auto px-6 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-2xl font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Award className="w-5 h-5 text-amber-300" />
                <span>{existingBrevet ? 'Afficher mon Brevet' : 'Délivrer mon Brevet Officiel'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={onNavigateToDevoirs}
                  className="px-4 py-2.5 bg-blue-900 hover:bg-blue-800 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <FileText className="w-4 h-4" />
                  <span>Compléter les devoirs</span>
                </button>
                <button
                  onClick={onNavigateToExamen}
                  className="px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <Trophy className="w-4 h-4" />
                  <span>Passer l'examen final</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Competency Mastery Breakdown */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center font-bold">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Grille des Compétences du Référentiel</h3>
              <p className="text-xs text-slate-500">Évaluation détaillée des acquis professionnels requis pour le brevet</p>
            </div>
          </div>
          <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
            {bilan.competencesEvaluees.filter(c => c.validee).length} / {bilan.competencesEvaluees.length} Acquises
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bilan.competencesEvaluees.map((comp, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl border transition-all ${
                comp.validee
                  ? 'bg-emerald-50/40 border-emerald-200/80'
                  : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-slate-900">{comp.nom}</span>
                <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                  comp.validee
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-slate-200 text-slate-700'
                }`}>
                  {comp.pourcentage ?? comp.taux ?? 80}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    comp.validee ? 'bg-emerald-600' : 'bg-amber-500'
                  }`}
                  style={{ width: `${comp.pourcentage ?? comp.taux ?? 80}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chapters Detailed Performance Table (15 Chapters) */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-900 flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Synthèse Détaillée des 15 Chapitres</h3>
              <p className="text-xs text-slate-500">Résultats des exercices pratiques et fiches de synthèse</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {cours.chapitres.map((chap, index) => {
            const isCompleted = (utilisateur.chapitresTermines || []).includes(chap.id);
            const scorePercent = isCompleted ? 100 : 0;

            return (
              <div
                key={chap.id}
                className="flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50/80 transition-all text-sm"
              >
                <div className="flex items-center gap-3">
                  <span className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 ${
                    isCompleted ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {index + 1}
                  </span>
                  <div>
                    <h4 className="font-semibold text-slate-900 leading-snug">{chap.titre}</h4>
                    <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{chap.description}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    isCompleted
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      : 'bg-amber-50 text-amber-700 border border-amber-200'
                  }`}>
                    {isCompleted ? 'Validé' : 'À compléter'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
