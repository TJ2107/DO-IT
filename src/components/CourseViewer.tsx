import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Cours, Chapitre, Utilisateur, Exercice, ReadingPreferences } from '../types';
import { formatNiveau } from '../utils/storage';
import { 
  BookOpen, CheckCircle, ArrowLeft, ArrowRight, Award, 
  HelpCircle, Sparkles, Check, X, ShieldAlert, Cpu, 
  Play, RefreshCw, FileText, BookmarkCheck, Lightbulb, 
  HeartHandshake, Brain, Clock, Printer, Edit3, Headphones, Eye
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PreviousChapterRecap } from './PreviousChapterRecap';
import { ChapterFlashSummary } from './ChapterFlashSummary';
import { ProfessorMentor } from './ProfessorMentor';
import { LearningPaceControl } from './LearningPaceControl';
import { NotesDrawer } from './NotesDrawer';
import { AudioPlayerBar } from './AudioPlayerBar';
import { ReadingComfortControls } from './ReadingComfortControls';
import { CoursePrintView } from './CoursePrintView';
import { recordError } from '../utils/remediationStorage';

interface CourseViewerProps {
  course: Cours;
  user: Utilisateur;
  onUpdateUser: (updated: Utilisateur) => void;
  onStartExam: (course: Cours) => void;
  onBackToCatalogue: () => void;
  onOpenHomework?: () => void;
  onOpenCollectiveCorrection?: () => void;
  onOpenBrevet?: () => void;
}

export const CourseViewer: React.FC<CourseViewerProps> = ({
  course,
  user,
  onUpdateUser,
  onStartExam,
  onBackToCatalogue,
  onOpenHomework,
  onOpenCollectiveCorrection,
  onOpenBrevet,
}) => {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [exerciseAnswers, setExerciseAnswers] = useState<Record<string, number>>({});
  const [exerciseSubmitted, setExerciseSubmitted] = useState<Record<string, boolean>>({});
  const [isSummaryModalOpen, setIsSummaryModalOpen] = useState<boolean>(false);
  const [showRecapBanner, setShowRecapBanner] = useState<boolean>(true);
  const [isNotesOpen, setIsNotesOpen] = useState<boolean>(false);
  const [isPrintOpen, setIsPrintOpen] = useState<boolean>(false);
  const [readingPrefs, setReadingPrefs] = useState<ReadingPreferences>({
    fontSize: 'base',
    theme: 'light',
    audioSpeed: 1.0
  });

  const currentChapter = course.chapitres[activeChapterIndex] || course.chapitres[0];
  const previousChapter = activeChapterIndex > 0 ? course.chapitres[activeChapterIndex - 1] : null;
  const isChapterCompleted = user.chapitresTermines.includes(currentChapter.id);

  // Compute progress for this course
  const totalChapters = course.chapitres.length;
  const completedInThisCourse = course.chapitres.filter((ch) =>
    user.chapitresTermines.includes(ch.id)
  ).length;
  const courseProgressPercent = Math.round((completedInThisCourse / totalChapters) * 100);

  const handleSelectAnswer = (exerciseId: string, answerIndex: number) => {
    setExerciseAnswers((prev) => ({ ...prev, [exerciseId]: answerIndex }));
  };

  const handleCheckExercise = (exercise: Exercice) => {
    setExerciseSubmitted((prev) => ({ ...prev, [exercise.id]: true }));
    const chosenIdx = exerciseAnswers[exercise.id];
    
    // If incorrect, automatically record in the remediation notebook!
    if (chosenIdx !== undefined && !exercise.reponsesCorrectes.includes(chosenIdx)) {
      const chosenText = exercise.reponsesPossibles[chosenIdx] || 'Option';
      const correctText = exercise.reponsesCorrectes.map((idx) => exercise.reponsesPossibles[idx]).join(' OU ');
      
      recordError({
        userId: user.id,
        coursId: course.id,
        coursTitre: course.titre,
        chapitreId: currentChapter.id,
        chapitreTitre: currentChapter.titre,
        questionId: exercise.id,
        question: exercise.question,
        reponseChoisie: chosenText,
        bonneReponse: correctText,
        explicationProfesseur: exercise.explication || "Prenez le temps de relire la règle de calcul ou la définition correspondante dans le cours."
      });
    }
  };

  const handleSelectChapter = (index: number) => {
    setActiveChapterIndex(index);
    setShowRecapBanner(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCompleteChapter = () => {
    if (!isChapterCompleted) {
      const updatedChapitres = [...user.chapitresTermines, currentChapter.id];
      const newCompletedCount = course.chapitres.filter((ch) =>
        updatedChapitres.includes(ch.id)
      ).length;
      const newProgress = Math.round((newCompletedCount / totalChapters) * 100);

      // Add to followed courses if not there
      const updatedSuivis = user.coursSuivis.includes(course.id)
        ? user.coursSuivis
        : [...user.coursSuivis, course.id];

      // Mark course finished if all chapters done
      const updatedTermines =
        newProgress === 100 && !user.coursTermines.includes(course.id)
          ? [...user.coursTermines, course.id]
          : user.coursTermines;

      onUpdateUser({
        ...user,
        xp: user.xp + 50,
        chapitresTermines: updatedChapitres,
        coursSuivis: updatedSuivis,
        coursTermines: updatedTermines,
        progressionParCours: {
          ...user.progressionParCours,
          [course.id]: newProgress,
        },
      });

      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
      });
    }

    // Open flash summary modal for memory consolidation!
    setIsSummaryModalOpen(true);
  };

  const handleContinueAfterSummary = () => {
    setIsSummaryModalOpen(false);
    if (activeChapterIndex < course.chapitres.length - 1) {
      handleSelectChapter(activeChapterIndex + 1);
    }
  };

  // Font size class helper
  const getFontSizeClass = () => {
    switch (readingPrefs.fontSize) {
      case 'sm':
        return 'text-xs sm:text-sm';
      case 'lg':
        return 'text-base sm:text-lg';
      case 'xl':
        return 'text-lg sm:text-xl';
      default:
        return 'text-sm sm:text-base';
    }
  };

  // Theme container style helper
  const getThemeContainerClass = () => {
    switch (readingPrefs.theme) {
      case 'sepia':
        return 'bg-[#fcf5e5] text-[#4a3b2c] border-[#ebdcc1]';
      case 'dark':
        return 'bg-slate-900 text-slate-100 border-slate-800 shadow-2xl';
      default:
        return 'bg-white text-slate-900 border-slate-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          onClick={onBackToCatalogue}
          className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 px-3.5 py-2 rounded-xl transition cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Retour au catalogue</span>
        </button>

        <div className="flex flex-wrap items-center gap-2">
          {/* Notes Drawer Button */}
          <button
            onClick={() => setIsNotesOpen(true)}
            className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-700 hover:text-blue-900 bg-white hover:bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl transition cursor-pointer"
            title="Ouvrir mon bloc-notes personnel"
          >
            <Edit3 className="w-4 h-4 text-blue-700" />
            <span>Mes Notes</span>
          </button>

          {/* Print / PDF Export Button */}
          <button
            onClick={() => setIsPrintOpen(true)}
            className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-700 hover:text-blue-900 bg-white hover:bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl transition cursor-pointer"
            title="Télécharger / Imprimer la fiche de cours"
          >
            <Printer className="w-4 h-4 text-slate-600" />
            <span className="hidden sm:inline">Export PDF / Imprimer</span>
          </button>

          {/* Summary Flash Tooltip Button */}
          <button
            onClick={() => setIsSummaryModalOpen(true)}
            className="flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-900 hover:text-blue-950 bg-blue-50 hover:bg-blue-100 border border-blue-200 px-3.5 py-2 rounded-xl transition cursor-pointer"
            title="Consulter le résumé et points clés du chapitre"
          >
            <Brain className="w-4 h-4 text-blue-700" />
            <span>Fiche Résumé / Flash-Mémoire</span>
          </button>

          <button
            onClick={() => onStartExam(course)}
            className="flex items-center gap-2 text-xs sm:text-sm font-bold text-white bg-blue-900 hover:bg-blue-950 px-4 py-2 rounded-xl shadow-xs transition cursor-pointer"
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">Passer l'Examen Certifiant</span>
            <span className="sm:hidden">Examen</span>
          </button>
        </div>
      </div>

      {/* Main Course Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left / Sidebar: Chapter Directory & Professor Mentor Controls */}
        <div className="lg:col-span-4 space-y-5">
          {/* Course Card Summary */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl p-2 bg-slate-100 rounded-xl">{course.icon}</span>
              <div>
                <span className="text-[11px] font-bold text-blue-900 uppercase tracking-wider block">
                  {course.domaineNom}
                </span>
                <h3 className="text-base font-black text-slate-900 leading-tight">
                  {course.titre}
                </h3>
              </div>
            </div>

            {/* Course Progress Bar */}
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 mb-4">
              <div className="flex justify-between text-xs font-bold text-slate-700 mb-1.5">
                <span>Progression du cours</span>
                <span className={courseProgressPercent === 100 ? 'text-emerald-600' : 'text-blue-600'}>
                  {courseProgressPercent}% ({completedInThisCourse}/{totalChapters} chapitres)
                </span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${courseProgressPercent}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
            </div>

            {/* Chapters list */}
            <div className="space-y-1.5">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Sommaire du Cours
              </span>
              {course.chapitres.map((chapitre, index) => {
                const isActive = index === activeChapterIndex;
                const isDone = user.chapitresTermines.includes(chapitre.id);

                return (
                  <button
                    key={chapitre.id}
                    onClick={() => handleSelectChapter(index)}
                    className={`w-full text-left p-3 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-between transition cursor-pointer ${
                      isActive
                        ? 'bg-blue-900 text-white shadow-xs font-bold'
                        : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/60'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 ${
                        isActive ? 'bg-blue-800 text-white' : 'bg-slate-200 text-slate-700'
                      }`}>
                        {index + 1}
                      </span>
                      <span className="truncate">{chapitre.titre}</span>
                    </div>

                    {isDone ? (
                      <CheckCircle className={`w-4 h-4 shrink-0 ${isActive ? 'text-emerald-400' : 'text-emerald-600'}`} />
                    ) : (
                      <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono shrink-0 ${
                        isActive ? 'bg-blue-800 text-blue-200' : 'text-slate-400'
                      }`}>
                        {chapitre.dureeEstimeeMin}m
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Quick Actions in Sidebar */}
            <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2">
              <button
                onClick={() => setIsNotesOpen(true)}
                className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 flex items-center justify-center gap-1.5 transition cursor-pointer"
              >
                <Edit3 className="w-3.5 h-3.5 text-blue-700" />
                <span>Prendre Note</span>
              </button>
              <button
                onClick={() => setIsPrintOpen(true)}
                className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 flex items-center justify-center gap-1.5 transition cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5 text-slate-600" />
                <span>Fiche PDF</span>
              </button>
            </div>

            {/* Course objectives list */}
            <div className="mt-5 pt-4 border-t border-slate-100">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                🎯 Objectifs pédagogiques
              </h4>
              <ul className="text-xs text-slate-600 space-y-1.5">
                {course.objectifs.map((obj, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Learning Pace and Healthy Timer Control */}
          <LearningPaceControl currentChapterMin={currentChapter.dureeEstimeeMin} />

          {/* Professor Mentor Widget */}
          <ProfessorMentor course={course} currentChapter={currentChapter} />
        </div>

        {/* Right / Center: Lesson Reader */}
        <div className="lg:col-span-8 space-y-5">
          {/* Audio Speech Synthesis Bar */}
          <AudioPlayerBar
            contentToRead={`${currentChapter.titre}. ${currentChapter.description}. ${currentChapter.contenuHtml.replace(/<[^>]*>?/gm, ' ')}`}
            title={`${currentChapter.titre} (${course.titre})`}
          />

          {/* Reading Comfort & Theme Controls */}
          <ReadingComfortControls
            preferences={readingPrefs}
            onChangePreferences={setReadingPrefs}
          />

          {/* Previous Chapter Recap (Displayed when starting chapter 2+) */}
          {previousChapter && showRecapBanner && (
            <PreviousChapterRecap
              previousChapter={previousChapter}
              currentChapter={currentChapter}
              onGoToPreviousChapter={() => handleSelectChapter(activeChapterIndex - 1)}
              onDismiss={() => setShowRecapBanner(false)}
            />
          )}

          {/* Chapter Content Card with Theme and Font Size */}
          <motion.div
            key={currentChapter.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={`rounded-3xl p-6 sm:p-8 border shadow-xs space-y-6 transition-colors duration-200 ${getThemeContainerClass()}`}
          >
            <div className="border-b border-slate-200/60 pb-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-blue-900 dark:text-blue-300 uppercase tracking-wider">
                    Chapitre {activeChapterIndex + 1} sur {course.chapitres.length}
                  </span>
                  <span className="text-[11px] bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-full font-semibold">
                    🌱 Rythme calme & progressif
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500 font-medium">
                    ⏳ {currentChapter.dureeEstimeeMin} min
                  </span>
                  <button
                    onClick={() => setIsSummaryModalOpen(true)}
                    className="text-xs font-bold text-amber-900 bg-amber-100 hover:bg-amber-200 px-2.5 py-1 rounded-lg transition flex items-center gap-1 cursor-pointer"
                  >
                    <Lightbulb className="w-3.5 h-3.5 text-amber-700" />
                    <span>Points Clés</span>
                  </button>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black mt-2">
                {currentChapter.titre}
              </h2>
              <p className="text-sm opacity-75 mt-1">
                {currentChapter.description}
              </p>
            </div>

            {/* Professor's Kind Chapter Kick-off Note */}
            <div className="bg-blue-50/70 border border-blue-200/80 text-slate-800 rounded-2xl p-4 flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-blue-200 text-blue-900 flex items-center justify-center text-lg font-bold shrink-0">
                👨‍🏫
              </div>
              <div className="text-xs text-slate-700 space-y-1">
                <span className="font-bold text-blue-950 block">
                  Conseil du Professeur pour ce cours :
                </span>
                <p className="italic leading-relaxed">
                  « {currentChapter.conseilProfesseur || "Lisez ce contenu posément. Focalisez-vous sur les principes sous-jacents, réalisez les exercices sans appréhension et consolidez votre apprentissage avec la fiche de synthèse à la fin."} »
                </p>
              </div>
            </div>

            {/* Render formatted HTML content with custom font size */}
            <div
              className={`prose prose-slate max-w-none leading-relaxed space-y-4 ${getFontSizeClass()} ${
                readingPrefs.theme === 'dark' ? 'prose-invert text-slate-200' : ''
              }`}
              dangerouslySetInnerHTML={{ __html: currentChapter.contenuHtml }}
            />

            {/* Interactive Chapter Exercises / Quiz */}
            {currentChapter.exercices && currentChapter.exercices.length > 0 && (
              <div className="mt-8 pt-6 border-t border-slate-200 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-amber-100 text-amber-800 rounded-lg">
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">
                        Exercices d'application directe
                      </h3>
                      <p className="text-xs opacity-75">
                        Auto-évaluation immédiate bienveillante pour valider chaque concept.
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 hidden sm:inline-block">
                    ✓ Droit à l'erreur pédagogique
                  </span>
                </div>

                <div className="space-y-5">
                  {currentChapter.exercices.map((ex, exIdx) => {
                    const isSubmitted = exerciseSubmitted[ex.id];
                    const selectedIdx = exerciseAnswers[ex.id];
                    const isCorrect = isSubmitted && selectedIdx !== undefined && ex.reponsesCorrectes.includes(selectedIdx);

                    return (
                      <div
                        key={ex.id}
                        className="bg-slate-50/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl p-5 space-y-3"
                      >
                        <div className="flex items-center justify-between text-xs opacity-75">
                          <span className="font-bold">
                            Question {exIdx + 1} ({ex.points} pts)
                          </span>
                          <span className="text-[10px] bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded font-mono">
                            Niveau {formatNiveau(ex.difficulte)}
                          </span>
                        </div>

                        <div className="text-sm sm:text-base font-semibold">
                          {ex.question}
                        </div>

                        {/* Options */}
                        <div className="space-y-2 pt-1">
                          {ex.reponsesPossibles.map((rep, rIdx) => {
                            const isSelected = selectedIdx === rIdx;
                            const isRightAnswer = ex.reponsesCorrectes.includes(rIdx);

                            let btnStyle = 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800';

                            if (isSubmitted) {
                              if (isRightAnswer) {
                                btnStyle = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-950 dark:text-emerald-200 font-bold ring-1 ring-emerald-500';
                              } else if (isSelected && !isRightAnswer) {
                                btnStyle = 'bg-rose-50 dark:bg-rose-950/60 border-rose-400 text-rose-900 dark:text-rose-200 line-through';
                              }
                            } else if (isSelected) {
                              btnStyle = 'bg-blue-50 dark:bg-blue-950/60 border-blue-600 text-blue-900 dark:text-blue-200 font-bold ring-1 ring-blue-600';
                            }

                            return (
                              <button
                                key={rIdx}
                                disabled={isSubmitted}
                                onClick={() => handleSelectAnswer(ex.id, rIdx)}
                                className={`w-full text-left p-3 rounded-xl text-xs sm:text-sm border transition flex items-center justify-between cursor-pointer ${btnStyle}`}
                              >
                                <span>{rep}</span>
                                {isSubmitted && isRightAnswer && (
                                  <Check className="w-4 h-4 text-emerald-600 font-black shrink-0 ml-2" />
                                )}
                                {isSubmitted && isSelected && !isRightAnswer && (
                                  <X className="w-4 h-4 text-rose-600 font-black shrink-0 ml-2" />
                                )}
                              </button>
                            );
                          })}
                        </div>

                        {/* Validation & Explanation */}
                        {!isSubmitted ? (
                          <button
                            disabled={selectedIdx === undefined}
                            onClick={() => handleCheckExercise(ex)}
                            className="mt-2 px-4 py-2 text-xs font-bold text-white bg-blue-900 hover:bg-blue-950 disabled:bg-slate-300 disabled:cursor-not-allowed rounded-lg transition cursor-pointer"
                          >
                            Vérifier ma réponse
                          </button>
                        ) : (
                          <div className={`p-3.5 rounded-xl border text-xs leading-relaxed mt-2 ${
                            isCorrect ? 'bg-emerald-50 border-emerald-300 text-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-200' : 'bg-amber-50 border-amber-300 text-amber-900 dark:bg-amber-950/50 dark:text-amber-200'
                          }`}>
                            <div className="font-bold mb-1 flex items-center gap-1">
                              {isCorrect ? '✅ Excellente réponse !' : '💡 Explication pédagogique (Ajoutée à votre carnet de remédiation) :'}
                            </div>
                            <p>{ex.explication}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Chapter Complete Actions */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs opacity-75 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Validation du chapitre : <strong>+50 XP</strong> & Fiche de synthèse</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={handleCompleteChapter}
                  className={`w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition cursor-pointer shadow-sm ${
                    isChapterCompleted
                      ? 'bg-emerald-700 hover:bg-emerald-800 text-white'
                      : 'bg-blue-900 hover:bg-blue-950 text-white'
                  }`}
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>
                    {isChapterCompleted ? 'Revoir la fiche synthèse & Suivant' : 'Terminer ce chapitre & Voir la synthèse'}
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Flash Summary Info-Bulle / Popover Modal */}
      <ChapterFlashSummary
        chapter={currentChapter}
        course={course}
        chapterIndex={activeChapterIndex}
        isOpen={isSummaryModalOpen}
        onClose={() => setIsSummaryModalOpen(false)}
        onContinueToNext={handleContinueAfterSummary}
        hasNextChapter={activeChapterIndex < course.chapitres.length - 1}
      />

      {/* Personal Notes Drawer */}
      <NotesDrawer
        course={course}
        currentChapter={currentChapter}
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
      />

      {/* Printable / PDF Export Sheet */}
      {isPrintOpen && (
        <CoursePrintView
          course={course}
          chapter={currentChapter}
          onClose={() => setIsPrintOpen(false)}
        />
      )}
    </div>
  );
};

