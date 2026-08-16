import React, { useState } from 'react';
import { Cours, Chapitre } from '../types';
import { PROFESSEUR_INFOS, getProfessorAnswer } from '../utils/professorData';
import { 
  MessageSquare, Sparkles, HelpCircle, HeartHandshake, 
  Send, ChevronDown, ChevronUp, Bot, Lightbulb, Coffee, 
  ShieldCheck, Smile
} from 'lucide-react';

interface ProfessorMentorProps {
  course: Cours;
  currentChapter: Chapitre;
}

export const ProfessorMentor: React.FC<ProfessorMentorProps> = ({
  course,
  currentChapter,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [customQuestion, setCustomQuestion] = useState<string>('');
  const [answer, setAnswer] = useState<string | null>(null);
  const [citationIndex, setCitationIndex] = useState<number>(0);

  const quickPrompts = [
    { id: 'vulgarisation', label: 'Explique-moi simplement', icon: '💡' },
    { id: 'terrain', label: 'Exemple d\'application terrain', icon: '🛠️' },
    { id: 'erreur', label: 'Pièges et erreurs à éviter', icon: '⚠️' },
    { id: 'mnemotechnique', label: 'Astuce pour retenir facilement', icon: '🧠' },
  ];

  const handleSelectQuickPrompt = (promptId: string) => {
    setSelectedTopic(promptId);
    const resp = getProfessorAnswer(promptId, course, currentChapter);
    setAnswer(resp);
  };

  const handleAskCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQuestion.trim()) return;
    const resp = getProfessorAnswer('custom', course, currentChapter, customQuestion);
    setAnswer(resp);
    setSelectedTopic('custom');
  };

  const handleNextCitation = () => {
    setCitationIndex((prev) => (prev + 1) % PROFESSEUR_INFOS.citationsBienveillance.length);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden transition-all">
      {/* Header bar of Professor Widget */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white flex items-center justify-between cursor-pointer hover:bg-opacity-95 transition"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center text-xl font-bold shadow-xs">
            👨‍🏫
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm text-white">
                Professeur Référent DO IT
              </span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Ambiance Bienveillante
              </span>
            </div>
            <p className="text-xs text-blue-200">
              Conseils, vulgarisation & accompagnement sans stress à votre rythme
            </p>
          </div>
        </div>

        <button className="text-blue-200 hover:text-white p-1">
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
      </div>

      {/* Expandable Professor Dialog / Advice */}
      {isOpen && (
        <div className="p-5 space-y-5 bg-slate-50/50">
          {/* Pedagogical Quote */}
          <div className="bg-amber-50/90 border border-amber-200/90 rounded-xl p-3.5 flex items-start justify-between gap-3 text-xs text-amber-950">
            <div className="flex items-start gap-2">
              <span className="text-base">💬</span>
              <p className="italic font-medium leading-relaxed">
                {PROFESSEUR_INFOS.citationsBienveillance[citationIndex]}
              </p>
            </div>
            <button
              onClick={handleNextCitation}
              title="Autre citation du professeur"
              className="text-[11px] text-amber-700 hover:text-amber-900 font-bold bg-amber-200/60 hover:bg-amber-200 px-2 py-1 rounded cursor-pointer shrink-0"
            >
              Autre pensée ✨
            </button>
          </div>

          {/* Quick Guidance Buttons */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
              Besoin d'un coup de pouce sur ce chapitre ?
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {quickPrompts.map((q) => (
                <button
                  key={q.id}
                  onClick={() => handleSelectQuickPrompt(q.id)}
                  className={`p-2.5 rounded-xl border text-xs font-semibold text-left flex items-center gap-2 transition cursor-pointer ${
                    selectedTopic === q.id
                      ? 'bg-blue-900 text-white border-blue-900 shadow-2xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <span className="text-base">{q.icon}</span>
                  <span>{q.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Custom Question input */}
          <form onSubmit={handleAskCustom} className="flex gap-2">
            <input
              type="text"
              value={customQuestion}
              onChange={(e) => setCustomQuestion(e.target.value)}
              placeholder="Posez une question sur cette notion..."
              className="flex-1 px-3.5 py-2 text-xs bg-white border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-600 text-slate-900 placeholder:text-slate-400"
            />
            <button
              type="submit"
              disabled={!customQuestion.trim()}
              className="px-3.5 py-2 bg-blue-900 hover:bg-blue-950 disabled:bg-slate-300 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Demander</span>
            </button>
          </form>

          {/* Professor's Live Answer */}
          {answer && (
            <div className="bg-white border border-blue-200 rounded-2xl p-4 shadow-2xs space-y-2 animate-in fade-in duration-200">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-900">
                <span className="text-base">👨‍🏫</span>
                <span>Réponse du Professeur :</span>
              </div>
              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                {answer}
              </div>
              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setAnswer(null)}
                  className="text-[11px] text-slate-400 hover:text-slate-600 font-semibold"
                >
                  Fermer la réponse
                </button>
              </div>
            </div>
          )}

          {/* Healthy study tip */}
          <div className="flex items-center gap-2 text-[11px] text-slate-500 bg-slate-100/80 p-2.5 rounded-xl">
            <Coffee className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong>Rythme respecté :</strong> N'hésitez pas à faire des pauses régulières. L'assimilation se fait dans le calme et sans précipitation.
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
