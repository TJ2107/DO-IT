import React, { useState } from 'react';
import { 
  BookOpen, 
  FileText, 
  HelpCircle, 
  CheckCircle2, 
  Award, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  GraduationCap, 
  Bot, 
  Flame, 
  Download, 
  X,
  Compass,
  Play
} from 'lucide-react';

interface OnboardingGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreCatalogue?: () => void;
}

interface StepData {
  stepNumber: number;
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  icon: React.ReactNode;
  description: string;
  keyPoints: { icon: string; title: string; desc: string }[];
  tip: string;
  visualPreview: {
    tag: string;
    headline: string;
    items: string[];
    accentBg: string;
  };
}

export const OnboardingGuideModal: React.FC<OnboardingGuideModalProps> = ({
  isOpen,
  onClose,
  onExploreCatalogue
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  if (!isOpen) return null;

  const steps: StepData[] = [
    {
      stepNumber: 1,
      title: "1. Choisissez votre Cursus Technique",
      subtitle: "Explorez les 13 domaines industriels certifiants",
      badge: "Étape 1 : Catalogue",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
      icon: <BookOpen className="w-7 h-7 text-blue-600" />,
      description: "Parcourez notre catalogue structuré : Électricité industrielle, Automatisme PLC, Dessin DAO, Soudage, Mécanique, etc. Chaque formation est découpée en 15 chapitres progressifs.",
      keyPoints: [
        { icon: "📚", title: "13 Métiers Clés", desc: "Formations rédigées par des ingénieurs et formateurs de terrain." },
        { icon: "🎯", title: "Objectifs Clairs", desc: "Prérequis, compétences visées et durée estimée pour chaque module." },
        { icon: "💾", title: "Mode Hors-Ligne (PWA)", desc: "Téléchargez vos cours pour réviser sans connexion internet sur vos chantiers." }
      ],
      tip: "Astuce : Cliquez sur « Commencer » sur n'importe quel cours pour ouvrir le lecteur interactif.",
      visualPreview: {
        tag: "Catalogue Métiers",
        headline: "15 Chapitres par Cursus",
        items: [
          "Électricité & Schémas BT/HT",
          "Automatisme & Programmation PLC",
          "Dessin Industriel & Cotation ISO",
          "Soudage TIG/MIG & Métallurgie"
        ],
        accentBg: "from-blue-900 to-indigo-950 text-white"
      }
    },
    {
      stepNumber: 2,
      title: "2. Suivez les 15 Chapitres Structurés",
      subtitle: "Cours complets, résumés flash & assistance IA",
      badge: "Étape 2 : Apprentissage",
      badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
      icon: <GraduationCap className="w-7 h-7 text-indigo-600" />,
      description: "Dans le lecteur de cours, étudiez le texte enrichi, écoutez les cours via la synthèse vocale, et consultez le résumé flash en 3 points de chaque chapitre.",
      keyPoints: [
        { icon: "🤖", title: "Professeur Mentor IA", desc: "Posez vos questions techniques en direct pour des explications sur-mesure." },
        { icon: "🎧", title: "Lecteur Audio Intégré", desc: "Écoutez les leçons les mains libres lors de vos déplacements." },
        { icon: "📖", title: "Recap Précédent & Lexique", desc: "Réactivez vos prérequis et accédez aux définitions techniques." }
      ],
      tip: "Astuce : Ajustez la taille de police et l'interligne via le menu « Confort de lecture » en haut à droite.",
      visualPreview: {
        tag: "Lecteur de Cours",
        headline: "Pédagogie Active",
        items: [
          "✅ Contenu théorique & formules illustrées",
          "⚡ Flashcards interactives de mémorisation",
          "📝 Prise de notes privée persistante",
          "🤖 Assistant IA disponible 24/7"
        ],
        accentBg: "from-indigo-900 to-slate-900 text-white"
      }
    },
    {
      stepNumber: 3,
      title: "3. Validez les Devoirs Maison & TP",
      subtitle: "Entraînez-vous avec des devoirs notés sur 20",
      badge: "Étape 3 : Entraînement",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
      icon: <FileText className="w-7 h-7 text-amber-600" />,
      description: "Chaque chapitre propose un devoir maison pratique. Répondez aux questions, soumettez votre copie et découvrez immédiatement votre note sur 20 accompagnée du corrigé type.",
      keyPoints: [
        { icon: "📝", title: "Notation Instantanée /20", desc: "Correction automatisée avec barème rigoureux et commentaires détaillés." },
        { icon: "👥", title: "Correction d'Ensemble", desc: "Comparez votre copie avec la correction collective et les meilleures réponses." },
        { icon: "🔧", title: "Fiches & Comptes-rendus TP", desc: "Rédigez vos protocoles de travaux pratiques réels d'atelier." }
      ],
      tip: "Astuce : Visez au moins 14/20 pour débloquer les badges d'excellence et consolider votre moyenne !",
      visualPreview: {
        tag: "Évaluation Continue",
        headline: "Devoirs & TP d'Atelier",
        items: [
          "Exercice 1 : Calculs de charges & dimensionnement",
          "Exercice 2 : Analyse de schéma & diagnostic",
          "Barème officiel : 20 points",
          "Corrigé détaillé pas à pas"
        ],
        accentBg: "from-amber-950 to-slate-900 text-white"
      }
    },
    {
      stepNumber: 4,
      title: "4. Passez l'Examen Final & Obtenez votre Brevet",
      subtitle: "Attestation certifiée avec empreinte cryptographique SHA-256",
      badge: "Étape 4 : Certification",
      badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
      icon: <Award className="w-7 h-7 text-emerald-600" />,
      description: "Une fois les chapitres complétés, passez l'examen final chronométré. En obtenant la moyenne (≥ 10/20), vous décrochez votre Brevet Professionnel officiel.",
      keyPoints: [
        { icon: "🛡️", title: "Brevet Sécurisé SHA-256", desc: "Chaque diplôme génère un hash cryptographique infalsifiable." },
        { icon: "🔍", title: "Vérificateur Public QR Code", desc: "Les recruteurs et employeurs peuvent vérifier l'authenticité en direct." },
        { icon: "🖨️", title: "Export PDF & Impression", desc: "Téléchargez votre diplôme prêt à imprimer en haute définition." }
      ],
      tip: "Astuce : Vous pouvez partager votre lien de vérification sur votre CV et profil LinkedIn.",
      visualPreview: {
        tag: "Brevet Professionnel d'État",
        headline: "Certification Reconnue",
        items: [
          "🎓 Mention & Score officiel /20",
          "🔐 Sceau cryptographique unique",
          "📄 Conforme aux exigences professionnelles",
          "🚀 Valorisation immédiate sur le marché"
        ],
        accentBg: "from-emerald-950 to-slate-900 text-white"
      }
    }
  ];

  const current = steps[currentStep];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      onClose();
      if (onExploreCatalogue) {
        onExploreCatalogue();
      }
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col my-auto max-h-[92vh]">
        {/* Modal Top Header */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 p-5 sm:p-6 text-white relative">
          <button
            onClick={onClose}
            aria-label="Fermer le guide"
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="flex items-center gap-1.5 bg-amber-400/20 text-amber-300 border border-amber-400/30 px-2.5 py-0.5 rounded-full text-xs font-bold">
              <Compass className="w-3.5 h-3.5" />
              Guide de Démarrage Rapide
            </span>
            <span className="text-xs text-blue-200">
              Étape {currentStep + 1} sur {steps.length}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-2">
            Bienvenue sur DO IT
          </h3>
          <p className="text-xs sm:text-sm text-blue-100/90 mt-1 max-w-lg">
            Découvrez en 4 étapes simples comment progresser, apprendre et décrocher votre Brevet Professionnel.
          </p>

          {/* Stepper Progress Indicator */}
          <div className="grid grid-cols-4 gap-2 mt-4 pt-3 border-t border-white/15">
            {steps.map((s, idx) => (
              <button
                key={s.stepNumber}
                onClick={() => setCurrentStep(idx)}
                className={`text-left p-1.5 sm:p-2 rounded-xl transition cursor-pointer ${
                  currentStep === idx
                    ? 'bg-white/20 ring-2 ring-amber-400 text-white'
                    : currentStep > idx
                    ? 'bg-emerald-500/20 text-emerald-200'
                    : 'bg-white/5 text-slate-400 hover:bg-white/10'
                }`}
              >
                <div className="text-[10px] font-bold uppercase tracking-wider flex items-center justify-between">
                  <span>Étape {s.stepNumber}</span>
                  {currentStep > idx && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
                </div>
                <div className="text-[11px] font-semibold truncate hidden sm:block">
                  {idx === 0 ? 'Catalogue' : idx === 1 ? 'Cours' : idx === 2 ? 'Devoirs' : 'Brevet'}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 flex-1 text-slate-800">
          {/* Step Main Banner */}
          <div className="flex items-start gap-3.5">
            <div className="p-3 rounded-2xl bg-blue-50 border border-blue-100 flex-shrink-0">
              {current.icon}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md border ${current.badgeColor}`}>
                  {current.badge}
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
                {current.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                {current.description}
              </p>
            </div>
          </div>

          {/* Visual Preview Box */}
          <div className={`rounded-2xl p-4 bg-gradient-to-br ${current.visualPreview.accentBg} shadow-md border border-slate-700/30`}>
            <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-3">
              <span className="text-[10px] uppercase tracking-wider font-extrabold text-amber-400 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                {current.visualPreview.tag}
              </span>
              <span className="text-[10px] text-slate-300 font-mono">DO IT • Plateforme Pro</span>
            </div>
            <div className="text-sm font-bold text-white mb-2">
              {current.visualPreview.headline}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {current.visualPreview.items.map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/10 rounded-lg px-2.5 py-1.5 text-xs text-slate-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                  <span className="truncate">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Points List */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {current.keyPoints.map((kp, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition">
                <div className="text-lg mb-1">{kp.icon}</div>
                <div className="text-xs font-bold text-slate-900">{kp.title}</div>
                <div className="text-[11px] text-slate-600 mt-0.5 leading-snug">{kp.desc}</div>
              </div>
            ))}
          </div>

          {/* Helpful Tip Banner */}
          <div className="p-3 bg-amber-50/80 border border-amber-200/90 rounded-xl flex items-start gap-2.5 text-xs text-amber-900">
            <span className="text-base">💡</span>
            <span className="font-medium">{current.tip}</span>
          </div>
        </div>

        {/* Modal Bottom Footer Navigation */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
          <div>
            {currentStep > 0 ? (
              <button
                onClick={handlePrev}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-200 transition flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Précédent</span>
              </button>
            ) : (
              <button
                onClick={onClose}
                className="px-3 py-2 text-xs font-medium text-slate-500 hover:text-slate-800 transition cursor-pointer"
              >
                Passer le guide
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            {/* Step Dots */}
            <div className="flex items-center gap-1.5 mr-2">
              {steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentStep(i)}
                  aria-label={`Aller à l'étape ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentStep === i ? 'w-5 bg-blue-900' : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="px-5 py-2.5 bg-gradient-to-r from-blue-900 to-indigo-900 hover:from-blue-800 hover:to-indigo-800 text-white rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition flex items-center gap-2 cursor-pointer"
            >
              {currentStep < steps.length - 1 ? (
                <>
                  <span>Suivant</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-white" />
                  <span>Démarrer ma Formation</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
