import React, { useState, useRef, useEffect } from 'react';
import { Utilisateur } from '../types';
import { 
  BookOpen, 
  GraduationCap, 
  FileText, 
  Trophy, 
  Award, 
  CheckCircle2, 
  Building2, 
  Terminal, 
  ShieldCheck,
  Brain,
  Layers,
  BookMarked,
  ChevronLeft,
  ChevronRight,
  Menu,
  Sparkles,
  LayoutGrid,
  Check
} from 'lucide-react';

export interface TabDefinition {
  id: string;
  label: string;
  category: 'cours' | 'evaluations' | 'revision' | 'pro';
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  highlight?: boolean;
  pulse?: boolean;
  description: string;
}

interface NavigationTabsProps {
  activeTab: string;
  onSelectTab: (tabId: string) => void;
  activeCourseTitle?: string;
  hasActiveTest?: boolean;
  user?: Utilisateur;
}

export const NavigationTabs: React.FC<NavigationTabsProps> = ({
  activeTab,
  onSelectTab,
  activeCourseTitle,
  hasActiveTest,
  user,
}) => {
  const isAdmin = user?.role === 'admin' || user?.email?.toLowerCase() === 'cyber.kan587@gmail.com';
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'cours' | 'evaluations' | 'revision' | 'pro'>('all');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // All organized sheets in logical order
  const allTabs: TabDefinition[] = [
    // 1. Parcours & Cours
    { 
      id: 'catalogue', 
      label: '1. Catalogue Métiers', 
      category: 'cours',
      icon: BookOpen, 
      badge: '13 Domaines',
      description: 'Explorez et choisissez parmi les 13 cursus industriels et techniques'
    },
    { 
      id: 'cours', 
      label: '2. 15 Chapitres', 
      category: 'cours',
      icon: GraduationCap, 
      badge: activeCourseTitle ? 'En cours' : undefined,
      description: 'Cours complets, résumés, formules, conseils de professeur et astuces'
    },

    // 2. Évaluations & Titres
    { 
      id: 'devoirs', 
      label: '3. Devoirs Notés', 
      category: 'evaluations',
      icon: FileText, 
      badge: 'Noté /20',
      description: 'Cas pratiques, devoirs maison et calculs d’ingénierie notés'
    },
    { 
      id: 'correction-ensemble', 
      label: '4. Correction d’Ensemble', 
      category: 'evaluations',
      icon: Trophy, 
      badge: 'Bilan',
      description: 'Synthèse pédagogique globale, moyennes pondérées et délibération'
    },
    { 
      id: 'brevet', 
      label: '5. Brevet Officiel', 
      category: 'evaluations',
      icon: Award, 
      highlight: true, 
      badge: 'Sécurisé SHA-256',
      description: 'Diplôme d’État & Brevet Professionnel haute sécurité imprimable'
    },
    { 
      id: 'test', 
      label: '6. Examen Final', 
      category: 'evaluations',
      icon: CheckCircle2, 
      pulse: hasActiveTest,
      badge: hasActiveTest ? 'En cours' : 'Certifiant',
      description: 'Évaluation sommative chronométrée pour valider le titre'
    },

    // 3. Révision & Pratique
    { 
      id: 'flashcards', 
      label: '7. Flashcards', 
      category: 'revision',
      icon: Layers, 
      badge: 'Répétition',
      description: 'Mémorisation active et rapide des formules et notions clés'
    },
    { 
      id: 'glossaire', 
      label: '8. Glossaire', 
      category: 'revision',
      icon: BookMarked, 
      badge: 'Lexique',
      description: 'Encyclopédie technique, formules et normes industrielles'
    },
    { 
      id: 'remediation', 
      label: '9. Carnet d’Erreurs', 
      category: 'revision',
      icon: Brain, 
      badge: 'Remédiation',
      description: 'Historique des points faibles et exercices ciblés'
    },
    { 
      id: 'sandbox', 
      label: '10. Simulateurs TP', 
      category: 'revision',
      icon: Terminal, 
      badge: 'Laboratoire',
      description: 'Bacs à sable interactifs : Kirchhoff, Grafcet, Python, MTBF'
    },

    // 4. Validation & Espace Pro
    { 
      id: 'certifs', 
      label: '11. Mes Certifications', 
      category: 'pro',
      icon: Award, 
      badge: `${user?.certifications?.length || 0} Titres`,
      description: 'Vos certificats d’aptitude professionnelle validés'
    },
    { 
      id: 'entreprise', 
      label: '12. Espace Entreprise', 
      category: 'pro',
      icon: Building2, 
      badge: 'B2B',
      description: 'Formation d’équipe, devis, facturation et plans de développement'
    },
    { 
      id: 'verifier', 
      label: '13. Vérification SHA-256', 
      category: 'pro',
      icon: ShieldCheck, 
      badge: 'Public',
      description: 'Vérificateur d’authenticité pour recruteurs et employeurs'
    },
    ...(isAdmin ? [{ 
      id: 'admin', 
      label: '14. Console Académique', 
      category: 'pro' as const,
      icon: ShieldCheck, 
      badge: 'Admin',
      description: 'Tableau de bord de gestion des apprenants et statistiques'
    }] : []),
  ];

  const categories = [
    { id: 'all', label: 'Toutes les feuilles (13+)', icon: LayoutGrid },
    { id: 'cours', label: '📚 1. Parcours & Cours', icon: GraduationCap },
    { id: 'evaluations', label: '📝 2. Évaluations & Brevet', icon: Award },
    { id: 'revision', label: '💡 3. Révision & Ateliers', icon: Brain },
    { id: 'pro', label: '🏛️ 4. Espace Pro & Certifs', icon: Building2 },
  ];

  const filteredTabs = selectedCategory === 'all'
    ? allTabs
    : allTabs.filter(t => t.category === selectedCategory);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [filteredTabs]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -260 : 260;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setTimeout(checkScroll, 300);
    }
  };

  const activeTabDef = allTabs.find(t => t.id === activeTab) || allTabs[0];

  return (
    <nav aria-label="Navigation principale" className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm transition-all duration-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Top bar: Category Selector + Mobile Quick Jump Dropdown */}
        <div className="flex items-center justify-between gap-2 pt-2.5 pb-1 border-b border-slate-100">
          {/* Category Filter Pills (Desktop & Tablet) */}
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-none py-0.5 text-xs">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as any)}
                  className={`px-2.5 py-1 rounded-lg font-bold transition-all text-[11px] sm:text-xs whitespace-nowrap cursor-pointer flex items-center gap-1 ${
                    isSelected
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Course Badge & Mobile Selector button */}
          <div className="flex items-center gap-2 shrink-0">
            {activeCourseTitle && (
              <span className="hidden xl:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-[11px] font-bold truncate max-w-[260px]">
                <Sparkles className="w-3 h-3 text-amber-500 shrink-0" />
                <span className="truncate">{activeCourseTitle}</span>
              </span>
            )}

            {/* Mobile Sheet Switcher Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-50 text-blue-900 border border-blue-200 font-bold text-xs"
              aria-label="Sélectionner une feuille"
            >
              <Menu className="w-3.5 h-3.5" />
              <span>Feuilles ({allTabs.length})</span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel for Quick Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-3 border-b border-slate-200 bg-slate-50 rounded-xl p-3 my-2 shadow-inner animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="text-xs font-black text-slate-500 uppercase tracking-wider mb-2">
              Accès direct aux feuilles pédagogiques :
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-72 overflow-y-auto pr-1">
              {allTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      onSelectTab(tab.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-between p-2 rounded-xl text-left text-xs font-semibold transition cursor-pointer ${
                      isActive
                        ? 'bg-blue-900 text-white font-bold shadow-xs'
                        : 'bg-white hover:bg-slate-100 text-slate-800 border border-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-500'}`} />
                      <span>{tab.label}</span>
                    </div>
                    {isActive ? (
                      <Check className="w-4 h-4 text-amber-400 shrink-0" />
                    ) : (
                      tab.badge && (
                        <span className="text-[10px] px-1.5 py-0.5 bg-slate-100 text-slate-600 rounded">
                          {tab.badge}
                        </span>
                      )
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Main Horizontal Tab Carousel with left/right indicators */}
        <div className="relative flex items-center py-2">
          {/* Scroll Left Button */}
          {canScrollLeft && (
            <button
              onClick={() => handleScroll('left')}
              className="hidden md:flex absolute left-0 z-10 w-7 h-7 -ml-2 rounded-full bg-white/95 border border-slate-300 shadow-md items-center justify-center text-slate-700 hover:text-blue-900 hover:bg-white transition cursor-pointer"
              aria-label="Faire défiler vers la gauche"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          )}

          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex space-x-2 overflow-x-auto py-1 scrollbar-none w-full scroll-smooth"
          >
            {filteredTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`nav-tab-${tab.id}`}
                  onClick={() => onSelectTab(tab.id)}
                  title={tab.description}
                  className={`group relative flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-blue-900 text-white font-bold shadow-sm ring-2 ring-blue-950/20 scale-[1.02]'
                      : tab.highlight
                      ? 'bg-amber-50 text-amber-950 border border-amber-300 hover:bg-amber-100 font-semibold'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-950 border border-slate-200/80 font-medium'
                  }`}
                >
                  <Icon className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                    isActive ? 'text-amber-400' : tab.highlight ? 'text-amber-600' : 'text-slate-500'
                  }`} />
                  
                  <span className="tracking-tight">{tab.label}</span>

                  {tab.badge && (
                    <span className={`text-[9px] px-1.5 py-0.5 rounded-md font-bold uppercase tracking-wider transition-colors ${
                      isActive 
                        ? 'bg-blue-800 text-blue-100 border border-blue-700' 
                        : tab.highlight
                        ? 'bg-amber-200 text-amber-900'
                        : 'bg-white text-slate-600 border border-slate-200'
                    }`}>
                      {tab.badge}
                    </span>
                  )}

                  {tab.pulse && (
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping ml-0.5" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Scroll Right Button */}
          {canScrollRight && (
            <button
              onClick={() => handleScroll('right')}
              className="hidden md:flex absolute right-0 z-10 w-7 h-7 -mr-2 rounded-full bg-white/95 border border-slate-300 shadow-md items-center justify-center text-slate-700 hover:text-blue-900 hover:bg-white transition cursor-pointer"
              aria-label="Faire défiler vers la droite"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
