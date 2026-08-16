import React, { useState } from 'react';
import { Cours, DevoirMaison, SoumissionDevoir, Utilisateur } from '../types';
import { FileText, CheckCircle, AlertCircle, Sparkles, Trophy, ArrowRight, RotateCcw, Clock, BookOpen, GraduationCap, Award } from 'lucide-react';
import { saveUser } from '../utils/storage';

interface HomeworkViewerProps {
  cours: Cours;
  utilisateur: Utilisateur;
  onUpdateUser: (user: Utilisateur) => void;
  onNavigateToCollectiveCorrection: () => void;
  onBackToCourse: () => void;
}

export const HomeworkViewer: React.FC<HomeworkViewerProps> = ({
  cours,
  utilisateur,
  onUpdateUser,
  onNavigateToCollectiveCorrection,
  onBackToCourse
}) => {
  const devoirs = cours.devoirs || [];
  const [selectedDevoirId, setSelectedDevoirId] = useState<string>(devoirs[0]?.id || '');
  
  const currentDevoir = devoirs.find(d => d.id === selectedDevoirId) || devoirs[0];
  const submissionKey = currentDevoir ? `${cours.id}_${currentDevoir.id}` : '';
  const existingSubmission: SoumissionDevoir | undefined = utilisateur.devoirsRendus?.[submissionKey];

  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState<boolean>(!!existingSubmission);
  const [currentResult, setCurrentResult] = useState<SoumissionDevoir | null>(existingSubmission || null);

  if (!currentDevoir) {
    return (
      <div className="max-w-4xl mx-auto p-8 text-center bg-white rounded-2xl border border-slate-200 shadow-xs">
        <FileText className="w-12 h-12 text-slate-400 mx-auto mb-3" />
        <h3 className="text-xl font-bold text-slate-800">Aucun devoir disponible pour ce cours</h3>
        <p className="text-slate-500 mt-2">Les devoirs et examens sont accessibles au fil des chapitres.</p>
        <button
          onClick={onBackToCourse}
          className="mt-6 px-6 py-2.5 bg-blue-900 text-white rounded-xl font-medium hover:bg-blue-800 transition-colors"
        >
          Retourner au cours
        </button>
      </div>
    );
  }

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    if (submitted) return;
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
    setCurrentResult(null);
  };

  const handleSubmit = () => {
    let totalPointsEarned = 0;
    const reponsesDetaillees: Record<string, { reponse: any; pointsObtenus: number; correct: boolean }> = {};

    currentDevoir.questions.forEach(q => {
      const selectedIndex = answers[q.id];
      const isCorrect = selectedIndex === q.reponseCorrecteIndex;
      const points = isCorrect ? q.points : 0;
      totalPointsEarned += points;

      reponsesDetaillees[q.id] = {
        reponse: selectedIndex,
        pointsObtenus: points,
        correct: isCorrect
      };
    });

    const noteSur20 = Math.round((totalPointsEarned / currentDevoir.noteMax) * 20 * 10) / 10;
    const isValide = noteSur20 >= 10;

    let appreciation = 'Travail rigoureux et maîtrisé. Excellente assimilation des concepts.';
    if (noteSur20 >= 16) {
      appreciation = 'Félicitations ! Démonstration exemplaire des compétences techniques et méthodologiques.';
    } else if (noteSur20 >= 12) {
      appreciation = 'Bon devoir. Les principes clés sont acquis, veillez à soigner les détails de calculs.';
    } else if (noteSur20 >= 10) {
      appreciation = 'Devoir validé de justesse. Une révision des fiches de synthèse est fortement recommandée.';
    } else {
      appreciation = 'Résultat insuffisant. Prenez le temps de revoir les chapitres 1 à 5 avant de vous représenter.';
    }

    const nouvelleSoumission: SoumissionDevoir = {
      devoirId: currentDevoir.id,
      coursId: cours.id,
      dateRendu: new Date().toISOString(),
      noteSur20,
      noteMax: 20,
      pointsObtenus: totalPointsEarned,
      pointsTotal: currentDevoir.noteMax,
      reponses: reponsesDetaillees,
      appreciationProfesseur: appreciation,
      valide: isValide
    };

    const updatedUser: Utilisateur = {
      ...utilisateur,
      devoirsRendus: {
        ...(utilisateur.devoirsRendus || {}),
        [submissionKey]: nouvelleSoumission
      },
      pointsExperience: utilisateur.pointsExperience + (isValide ? 150 : 50)
    };

    setCurrentResult(nouvelleSoumission);
    setSubmitted(true);
    onUpdateUser(updatedUser);
    saveUser(updatedUser);
  };

  const allQuestionsAnswered = currentDevoir.questions.every(q => answers[q.id] !== undefined);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      {/* Header & Sub-Navigation */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
            <GraduationCap className="w-4 h-4" />
            <span>Devoir Maison Certifiant • {cours.titre}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onBackToCourse}
              className="text-xs text-slate-300 hover:text-white px-3 py-1.5 rounded-lg border border-slate-700 hover:bg-slate-800 transition-colors flex items-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5" />
              Retour au cours
            </button>
            <button
              onClick={onNavigateToCollectiveCorrection}
              className="text-xs bg-amber-400 text-slate-950 font-bold px-3 py-1.5 rounded-lg hover:bg-amber-300 transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <Trophy className="w-3.5 h-3.5" />
              Correction d’ensemble
            </button>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
          {currentDevoir.titre}
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          {currentDevoir.description}
        </p>

        {/* Badges Bar */}
        <div className="flex flex-wrap items-center gap-4 mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-300">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>Durée estimée : <strong>{currentDevoir.dureeEstimeeMin} min</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-emerald-400" />
            <span>Barème : <strong>/{currentDevoir.noteMax} pts</strong> (Coeff. {currentDevoir.coefficient})</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-blue-400" />
            <span>Périmètre : <strong>{currentDevoir.chapitresCouverts}</strong></span>
          </div>
        </div>
      </div>

      {/* Multiple Devoirs Tabs if more than 1 */}
      {devoirs.length > 1 && (
        <div className="flex gap-2 border-b border-slate-200 pb-2 overflow-x-auto">
          {devoirs.map((dev) => {
            const key = `${cours.id}_${dev.id}`;
            const isDone = !!utilisateur.devoirsRendus?.[key];
            const isSelected = dev.id === currentDevoir.id;
            return (
              <button
                key={dev.id}
                onClick={() => {
                  setSelectedDevoirId(dev.id);
                  const sub = utilisateur.devoirsRendus?.[key];
                  if (sub) {
                    setCurrentResult(sub);
                    setSubmitted(true);
                  } else {
                    handleReset();
                  }
                }}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all ${
                  isSelected
                    ? 'bg-blue-900 text-white shadow-sm'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                <span>Devoir n°{dev.numero}</span>
                {isDone && (
                  <CheckCircle className={`w-4 h-4 ${isSelected ? 'text-emerald-400' : 'text-emerald-600'}`} />
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Case Study Context (Mise en situation) */}
      <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-6 relative">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-300 flex items-center justify-center text-amber-700 shrink-0 mt-0.5">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-amber-950 mb-1">
              Mise en Situation Professionnelle
            </h3>
            <p className="text-sm text-amber-900/90 leading-relaxed">
              {currentDevoir.miseEnSituation}
            </p>
          </div>
        </div>
      </div>

      {/* Submitted Banner / Grade Display */}
      {submitted && currentResult && (
        <div className={`p-6 rounded-2xl border ${
          currentResult.valide
            ? 'bg-emerald-50/90 border-emerald-300 text-emerald-950'
            : 'bg-rose-50/90 border-rose-300 text-rose-950'
        }`}>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-2xl shadow-sm ${
                currentResult.valide ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
              }`}>
                {currentResult.noteSur20}/20
              </div>
              <div>
                <h4 className="text-lg font-bold">
                  {currentResult.valide ? '✅ Devoir Validé avec Succès !' : '⚠️ Devoir Non Validé'}
                </h4>
                <p className="text-sm mt-0.5 opacity-90">
                  {currentResult.appreciationProfesseur}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleReset}
                className="px-4 py-2 text-xs font-semibold bg-white rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Refaire le devoir
              </button>
              <button
                onClick={onNavigateToCollectiveCorrection}
                className="px-4 py-2 text-xs font-bold bg-blue-900 text-white rounded-xl hover:bg-blue-800 transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
              >
                <span>Voir la correction d'ensemble</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Questions List */}
      <div className="space-y-6">
        {currentDevoir.questions.map((q, qIndex) => {
          const selectedOption = answers[q.id];
          const isCorrect = selectedOption === q.reponseCorrecteIndex;

          return (
            <div
              key={q.id}
              className={`bg-white rounded-2xl border p-6 sm:p-7 shadow-xs transition-all ${
                submitted
                  ? isCorrect
                    ? 'border-emerald-300 ring-1 ring-emerald-200'
                    : 'border-rose-300 ring-1 ring-rose-200'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              {/* Question Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-900 font-bold text-xs flex items-center justify-center shrink-0">
                    Q{qIndex + 1}
                  </span>
                  <h4 className="text-base font-bold text-slate-900">
                    {q.titre}
                  </h4>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 shrink-0">
                  {q.points} points
                </span>
              </div>

              <p className="text-slate-800 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                {q.enonce}
              </p>

              {/* Options */}
              {q.options && (
                <div className="space-y-2.5 mb-6">
                  {q.options.map((option, optIdx) => {
                    const isOptionSelected = selectedOption === optIdx;
                    const isTheCorrectOne = q.reponseCorrecteIndex === optIdx;

                    let optionStyle = 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700';
                    if (isOptionSelected && !submitted) {
                      optionStyle = 'border-blue-600 bg-blue-50/70 text-blue-950 ring-2 ring-blue-500/20 font-semibold';
                    } else if (submitted) {
                      if (isTheCorrectOne) {
                        optionStyle = 'border-emerald-500 bg-emerald-50/90 text-emerald-950 ring-2 ring-emerald-500/20 font-bold';
                      } else if (isOptionSelected && !isTheCorrectOne) {
                        optionStyle = 'border-rose-400 bg-rose-50/80 text-rose-950 line-through opacity-75';
                      } else {
                        optionStyle = 'border-slate-200 opacity-50';
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        type="button"
                        disabled={submitted}
                        onClick={() => handleSelectOption(q.id, optIdx)}
                        className={`w-full text-left p-4 rounded-xl border text-sm flex items-start gap-3 transition-all cursor-pointer ${optionStyle}`}
                      >
                        <span className={`w-5 h-5 rounded-full border text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 ${
                          isOptionSelected
                            ? submitted && isTheCorrectOne
                              ? 'bg-emerald-600 text-white border-emerald-600'
                              : 'bg-blue-900 text-white border-blue-900'
                            : 'border-slate-300 text-slate-600 bg-white'
                        }`}>
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span className="flex-1 leading-snug">{option}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Detailed Solution (Visible after submission) */}
              {submitted && (
                <div className="mt-6 pt-5 border-t border-slate-200/80 space-y-4">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase tracking-wider mb-2">
                      <Sparkles className="w-4 h-4 text-amber-500" />
                      <span>Correction & Explication Détaillée du Professeur</span>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed font-sans">
                      {q.solutionDetaillee}
                    </p>
                  </div>

                  {q.baremeDetail && q.baremeDetail.length > 0 && (
                    <div className="bg-amber-50/50 border border-amber-200/60 rounded-xl p-3.5">
                      <span className="text-xs font-bold text-amber-900 block mb-1.5">
                        Barème & Critères d'Évaluation :
                      </span>
                      <ul className="text-xs text-amber-950 space-y-1">
                        {q.baremeDetail.map((crit, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                            <span>{crit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Submit Action Bar */}
      {!submitted && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-wrap items-center justify-between gap-4 shadow-sm sticky bottom-4 z-20">
          <div className="text-sm text-slate-600">
            {allQuestionsAnswered ? (
              <span className="text-emerald-700 font-semibold flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Toutes les questions ont reçu une réponse. Prêt à soumettre.
              </span>
            ) : (
              <span className="text-slate-500 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-500" />
                Veuillez répondre à toutes les questions avant d’envoyer votre copie.
              </span>
            )}
          </div>

          <button
            disabled={!allQuestionsAnswered}
            onClick={handleSubmit}
            className={`px-8 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-all cursor-pointer shadow-md ${
              allQuestionsAnswered
                ? 'bg-blue-900 text-white hover:bg-blue-800 hover:shadow-lg scale-100 hover:scale-[1.02]'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            <span>Soumettre la copie au professeur</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
