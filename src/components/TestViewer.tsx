import React, { useState, useEffect } from 'react';
import { Cours, Utilisateur, Exercice, Certification, TypeQuestion } from '../types';
import { createCertificationRecord, formatNiveau } from '../utils/storage';
import { recordError } from '../utils/remediationStorage';
import { createExerciseExplanationNote, createChapterCourseNote } from '../utils/notesStorage';
import { createCertificationReadyNotification, addNotificationToUser } from '../utils/notificationService';
import { 
  Award, Clock, CheckCircle2, AlertTriangle, ArrowLeft, ArrowRight, 
  RotateCcw, Sparkles, ShieldCheck, Download, HelpCircle, Check, X, BookmarkCheck, FileText 
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface TestViewerProps {
  course: Cours;
  user: Utilisateur;
  onUpdateUser: (updated: Utilisateur) => void;
  onViewCertification: (cert: Certification) => void;
  onBackToCourse: () => void;
}

export const TestViewer: React.FC<TestViewerProps> = ({
  course,
  user,
  onUpdateUser,
  onViewCertification,
  onBackToCourse,
}) => {
  // Collect all questions from the course
  const questions: Exercice[] = course.chapitres.flatMap((ch) => ch.exercices);

  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [timeLeftSec, setTimeLeftSec] = useState(15 * 60); // 15 minutes
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [noteToast, setNoteToast] = useState<string | null>(null);
  const [testResult, setTestResult] = useState<{
    score: number;
    scorePercent: number;
    passed: boolean;
    pointsObtenus: number;
    pointsTotal: number;
    certification?: Certification;
  } | null>(null);

  const triggerNoteToast = (msg: string) => {
    setNoteToast(msg);
    setTimeout(() => setNoteToast(null), 3500);
  };

  const handleSaveQuestionNote = (q: Exercice) => {
    const bonneReponse = q.reponsesCorrectes.map((i) => q.reponsesPossibles[i]).join(' OU ');
    createExerciseExplanationNote(
      course.id,
      course.titre,
      'examen_final',
      'Examen Certifiant',
      q.question,
      bonneReponse,
      q.explication
    );
    triggerNoteToast(`📌 Explication de la question enregistrée dans vos Notes !`);
  };

  const handleGenerateExamReviewNote = () => {
    // Collect all missed or key questions into a single note
    const summaryList = questions.map((q, idx) => {
      const bonneRep = q.reponsesCorrectes.map((i) => q.reponsesPossibles[i]).join(' OU ');
      return `Q${idx + 1}. ${q.question}\n   ✅ Réponse : ${bonneRep}\n   💡 Explication : ${q.explication}\n`;
    }).join('\n');

    const noteContent = `🏆 CARNET DE RÉVISION POST-EXAMEN\n` +
      `----------------------------------------\n` +
      `📚 Cours : ${course.titre}\n` +
      `📊 Score obtenu : ${testResult?.scorePercent || 0}%\n` +
      `----------------------------------------\n` +
      `📝 CORRECTION & NOTIONS DU TEST :\n\n${summaryList}`;

    const newNote = {
      id: `note_exam_review_${course.id}_${Date.now()}`,
      userId: user.id,
      coursId: course.id,
      coursTitre: course.titre,
      chapitreId: 'examen_final',
      chapitreTitre: 'Révision Examen Final',
      contenu: noteContent,
      dateCreation: new Date().toLocaleDateString('fr-FR'),
      dateMaj: new Date().toLocaleDateString('fr-FR'),
      tags: ['Examen', 'Révision', 'Synthese']
    };

    const { saveNote } = require('../utils/notesStorage');
    saveNote(newNote);
    triggerNoteToast(`📚 Carnet de révision complet de l'examen enregistré dans vos Notes !`);
  };

  // Timer effect
  useEffect(() => {
    if (isSubmitted || timeLeftSec <= 0) return;

    const timer = setInterval(() => {
      setTimeLeftSec((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isSubmitted, timeLeftSec]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (questionId: string, optionIdx: number) => {
    if (isSubmitted) return;
    setUserAnswers((prev) => ({ ...prev, [questionId]: optionIdx }));
  };

  const handleSubmitTest = () => {
    let scoreObtenu = 0;
    let scoreMax = 0;

    questions.forEach((q) => {
      scoreMax += q.points;
      const userAns = userAnswers[q.id];
      if (userAns !== undefined && q.reponsesCorrectes.includes(userAns)) {
        scoreObtenu += q.points;
      } else {
        // Record missed exam question in remediation notebook
        const chosenText = userAns !== undefined ? (q.reponsesPossibles[userAns] || 'Non renseigné') : 'Non répondu';
        const correctText = q.reponsesCorrectes.map((idx) => q.reponsesPossibles[idx]).join(' OU ');
        recordError({
          userId: user.id,
          coursId: course.id,
          coursTitre: course.titre,
          chapitreId: 'examen_final',
          chapitreTitre: 'Examen Certifiant Final',
          questionId: q.id,
          question: q.question,
          reponseChoisie: chosenText,
          bonneReponse: correctText,
          explicationProfesseur: q.explication || "Cette notion est un prérequis fondamental pour la certification. Prenez le temps de revoir les cours correspondants."
        });
      }
    });

    const scoreRatio = scoreMax > 0 ? scoreObtenu / scoreMax : 0;
    const scorePercent = Math.round(scoreRatio * 100);
    const passed = scoreRatio >= course.scoreMinValidation;

    let newCert: Certification | undefined;

    if (passed) {
      newCert = createCertificationRecord(user, course, scoreRatio);

      // Check if user already has this certification
      const existingCertIdx = user.certifications.findIndex((c) => c.coursId === course.id);
      let updatedCerts = [...user.certifications];

      if (existingCertIdx >= 0) {
        // Update with better score if applicable
        if (scoreRatio > updatedCerts[existingCertIdx].score) {
          updatedCerts[existingCertIdx] = newCert;
        } else {
          newCert = updatedCerts[existingCertIdx];
        }
      } else {
        updatedCerts.push(newCert);
      }

      // Compute XP gain (up to +1000 XP)
      const earnedXp = Math.round(scoreRatio * 1000);
      const newXp = user.xp + earnedXp;
      const newLevel = Math.max(user.niveauGlobal, Math.floor(newXp / 1000) + 1);

      // Mark course as 100% finished
      const updatedSuivis = user.coursSuivis.includes(course.id)
        ? user.coursSuivis
        : [...user.coursSuivis, course.id];
      const updatedTermines = user.coursTermines.includes(course.id)
        ? user.coursTermines
        : [...user.coursTermines, course.id];

      // Create a certification available notification
      const notif = createCertificationReadyNotification(
        course.titre,
        newCert.mention || 'Validé',
        scoreRatio,
        course.id
      );

      const baseUpdatedUser: Utilisateur = {
        ...user,
        xp: newXp,
        niveauGlobal: newLevel,
        coursSuivis: updatedSuivis,
        coursTermines: updatedTermines,
        certifications: updatedCerts,
        progressionParCours: {
          ...user.progressionParCours,
          [course.id]: 100,
        },
      };

      const finalUpdatedUser = addNotificationToUser(baseUpdatedUser, notif);

      onUpdateUser(finalUpdatedUser);

      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
      });
    }

    setTestResult({
      score: scoreRatio,
      scorePercent,
      passed,
      pointsObtenus: scoreObtenu,
      pointsTotal: scoreMax,
      certification: newCert,
    });
    setIsSubmitted(true);
  };

  const handleRetakeTest = () => {
    setUserAnswers({});
    setIsSubmitted(false);
    setTestResult(null);
    setTimeLeftSec(15 * 60);
    setCurrentQIndex(0);
  };

  const currentQ = questions[currentQIndex];
  const totalQ = questions.length;
  const answeredCount = Object.keys(userAnswers).length;
  const progressPercent = Math.round(((currentQIndex + 1) / totalQ) * 100);

  if (totalQ === 0) {
    return (
      <div className="bg-white rounded-2xl p-8 text-center border border-slate-200">
        <p className="text-slate-600">Aucune question disponible pour ce test.</p>
        <button
          onClick={onBackToCourse}
          className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-xl text-xs font-bold"
        >
          Retour au cours
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Toast banner */}
      {noteToast && (
        <div className="bg-emerald-900 text-white p-3.5 rounded-2xl shadow-lg border border-emerald-700 text-xs sm:text-sm font-bold flex items-center justify-between animate-in fade-in duration-200">
          <div className="flex items-center gap-2">
            <span className="text-lg">📝</span>
            <span>{noteToast}</span>
          </div>
        </div>
      )}

      {/* Top Bar with Timer & Course Info */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToCourse}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition cursor-pointer"
            title="Revenir au cours"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-blue-900 uppercase">
                Examen Sanctionnant
              </span>
              <span className="text-[11px] bg-amber-100 text-amber-900 font-bold px-2 py-0.5 rounded-full border border-amber-300">
                Seuil : 70% min
              </span>
            </div>
            <h2 className="text-lg font-black text-slate-900">
              {course.titre}
            </h2>
          </div>
        </div>

        {/* Timer */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-xl font-mono font-bold text-sm shadow-inner">
            <Clock className={`w-4 h-4 ${timeLeftSec < 180 ? 'text-rose-400 animate-ping' : 'text-amber-400'}`} />
            <span className={timeLeftSec < 180 ? 'text-rose-300' : 'text-white'}>
              {formatTime(timeLeftSec)}
            </span>
          </div>

          <div className="text-right text-xs">
            <span className="font-bold text-slate-700">{answeredCount}/{totalQ}</span>
            <span className="text-slate-400"> répondues</span>
          </div>
        </div>
      </div>

      {/* Main Test Body */}
      {!isSubmitted ? (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          {/* Question Index Progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold text-slate-600">
              <span>Question {currentQIndex + 1} sur {totalQ}</span>
              <span>Progression du test : {progressPercent}%</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-700 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Quick Jump Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {questions.map((q, idx) => {
              const isAnswered = userAnswers[q.id] !== undefined;
              const isCurrent = idx === currentQIndex;

              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentQIndex(idx)}
                  className={`w-7 h-7 rounded-lg text-xs font-bold transition flex items-center justify-center cursor-pointer ${
                    isCurrent
                      ? 'bg-blue-900 text-white ring-2 ring-blue-950'
                      : isAnswered
                      ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          {/* Current Question Card */}
          <div className="pt-4 space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-semibold">
                Type : {currentQ.type === TypeQuestion.CODE ? 'Code Interactif' : currentQ.type === TypeQuestion.CHIFFREE ? 'Calcul Numérique' : 'QCM'}
              </span>
              <span className="font-mono font-bold text-slate-700">
                Valeur : {currentQ.points} points
              </span>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
              {currentQ.question}
            </h3>

            {/* Answer Options */}
            <div className="space-y-2.5 pt-2">
              {currentQ.reponsesPossibles.map((opt, oIdx) => {
                const isSelected = userAnswers[currentQ.id] === oIdx;

                return (
                  <button
                    key={oIdx}
                    onClick={() => handleSelectOption(currentQ.id, oIdx)}
                    className={`w-full text-left p-4 rounded-xl text-xs sm:text-sm border transition flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-blue-50 border-blue-600 text-blue-950 font-bold ring-2 ring-blue-600'
                        : 'bg-slate-50/50 hover:bg-slate-100 border-slate-200 text-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                        isSelected ? 'bg-blue-900 text-white' : 'bg-slate-200 text-slate-700'
                      }`}>
                        {String.fromCharCode(65 + oIdx)}
                      </span>
                      <span>{opt}</span>
                    </div>
                    {isSelected && (
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigation & Submit Action */}
          <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
            <button
              disabled={currentQIndex === 0}
              onClick={() => setCurrentQIndex(currentQIndex - 1)}
              className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs sm:text-sm font-bold hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Précédente</span>
            </button>

            {currentQIndex < totalQ - 1 ? (
              <button
                onClick={() => setCurrentQIndex(currentQIndex + 1)}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 transition cursor-pointer"
              >
                <span>Suivante</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmitTest}
                className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md transition cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-200" />
                <span>Finaliser & Soumettre le Test</span>
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Results Card */
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-lg space-y-6 animate-in fade-in zoom-in duration-200">
          {testResult?.passed ? (
            <div className="bg-gradient-to-br from-amber-500 via-amber-600 to-yellow-600 text-white p-6 rounded-2xl shadow-md text-center space-y-3">
              <div className="inline-flex p-3 bg-white/20 rounded-2xl backdrop-blur-xs text-3xl">
                🏆
              </div>
              <h3 className="text-2xl font-black tracking-tight">
                Félicitations ! Examen Réussi
              </h3>
              <p className="text-sm text-amber-100 max-w-lg mx-auto">
                Vous avez validé avec succès les compétences professionnelles de la formation <strong>{course.titre}</strong>.
              </p>
              <div className="flex items-center justify-center gap-6 pt-2">
                <div>
                  <div className="text-3xl font-black">{testResult.scorePercent}%</div>
                  <div className="text-xs text-amber-200">Score officiel</div>
                </div>
                <div className="h-8 w-px bg-amber-400/40" />
                <div>
                  <div className="text-3xl font-black">+{Math.round(testResult.score * 1000)} XP</div>
                  <div className="text-xs text-amber-200">Expérience gagnée</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-rose-50 border border-rose-200 text-rose-900 p-6 rounded-2xl text-center space-y-2">
              <AlertTriangle className="w-8 h-8 text-rose-600 mx-auto" />
              <h3 className="text-xl font-black">Seuil de validation non atteint</h3>
              <p className="text-xs sm:text-sm text-rose-700">
                Votre score est de <strong>{testResult?.scorePercent}%</strong> (minimum requis : 70%). Vous pouvez réviser les chapitres et retenter l'examen.
              </p>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {testResult?.certification && (
              <button
                onClick={() => onViewCertification(testResult.certification!)}
                className="px-6 py-3 bg-blue-900 hover:bg-blue-950 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md flex items-center gap-2 transition cursor-pointer"
              >
                <Award className="w-4 h-4 text-amber-400" />
                <span>Consulter & Télécharger mon Diplôme</span>
              </button>
            )}

            <button
              onClick={handleGenerateExamReviewNote}
              className="px-5 py-3 bg-amber-100 hover:bg-amber-200 text-amber-950 text-xs sm:text-sm font-bold rounded-xl border border-amber-300 flex items-center gap-2 transition cursor-pointer"
              title="Créer une fiche de révision globale avec toutes les questions et explications de l'examen"
            >
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>📚 Générer Carnet de Révision d'Examen</span>
            </button>

            <button
              onClick={handleRetakeTest}
              className="px-5 py-3 bg-white hover:bg-slate-100 text-slate-800 text-xs sm:text-sm font-bold rounded-xl border border-slate-300 flex items-center gap-2 transition cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retenter l'examen</span>
            </button>

            <button
              onClick={onBackToCourse}
              className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-bold rounded-xl transition cursor-pointer"
            >
              Retourner aux cours
            </button>
          </div>

          {/* Question by Question Detailed Correction */}
          <div className="pt-6 border-t border-slate-200 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Correction détaillée question par question
              </h4>
              <button
                onClick={handleGenerateExamReviewNote}
                className="text-xs font-bold text-blue-900 hover:text-blue-950 underline flex items-center gap-1 cursor-pointer"
              >
                <BookmarkCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>Tout ajouter à mes Notes</span>
              </button>
            </div>

            <div className="space-y-3">
              {questions.map((q, idx) => {
                const userAns = userAnswers[q.id];
                const isCorrect = userAns !== undefined && q.reponsesCorrectes.includes(userAns);

                return (
                  <div
                    key={q.id}
                    className={`p-4 rounded-xl border text-xs sm:text-sm space-y-2 ${
                      isCorrect ? 'bg-emerald-50/70 border-emerald-200' : 'bg-rose-50/70 border-rose-200'
                    }`}
                  >
                    <div className="flex items-center justify-between font-bold">
                      <span className="text-slate-800">Q{idx + 1}. {q.question}</span>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                          isCorrect ? 'bg-emerald-200 text-emerald-900' : 'bg-rose-200 text-rose-900'
                        }`}>
                          {isCorrect ? `+${q.points} pts` : '0 pt'}
                        </span>
                        <button
                          onClick={() => handleSaveQuestionNote(q)}
                          className="px-2 py-1 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 rounded text-[11px] font-bold flex items-center gap-1 transition cursor-pointer"
                          title="Enregistrer cette question et son explication dans mes Notes"
                        >
                          <BookmarkCheck className="w-3 h-3 text-blue-600" />
                          <span>Note</span>
                        </button>
                      </div>
                    </div>

                    <div className="text-xs space-y-1 text-slate-600">
                      <div>
                        Votre réponse :{' '}
                        <strong>
                          {userAns !== undefined ? q.reponsesPossibles[userAns] : 'Aucune réponse'}
                        </strong>{' '}
                        {isCorrect ? '✅' : '❌'}
                      </div>
                      {!isCorrect && (
                        <div className="text-emerald-800">
                          Bonne réponse :{' '}
                          <strong>{q.reponsesPossibles[q.reponsesCorrectes[0]]}</strong>
                        </div>
                      )}
                      <p className="text-slate-500 pt-1 italic">
                        💡 {q.explication}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
