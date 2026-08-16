import React from 'react';
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
  BookMarked
} from 'lucide-react';

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

  const tabs = [
    { id: 'catalogue', label: 'Catalogue', icon: BookOpen, badge: '12 Domaines' },
    { id: 'cours', label: '15 Chapitres', icon: GraduationCap, extra: activeCourseTitle ? 'En cours' : undefined },
    { id: 'devoirs', label: 'Devoirs Maison', icon: FileText, badge: 'Noté' },
    { id: 'correction-ensemble', label: 'Correction d’Ensemble', icon: Trophy, badge: 'Bilan' },
    { id: 'brevet', label: 'Certificat Officiel', icon: Award, highlight: true, badge: 'Sécurisé' },
    { id: 'test', label: 'Examen & Test', icon: CheckCircle2, pulse: hasActiveTest },
    { id: 'flashcards', label: 'Flashcards', icon: Layers },
    { id: 'glossaire', label: 'Glossaire', icon: BookMarked },
    { id: 'remediation', label: 'Carnet d’Erreurs', icon: Brain },
    { id: 'sandbox', label: 'Simulateurs', icon: Terminal },
    { id: 'certifs', label: 'Certifications', icon: Award },
    { id: 'entreprise', label: 'B2B Entreprise', icon: Building2 },
    { id: 'verifier', label: 'Vérification', icon: ShieldCheck },
    ...(isAdmin ? [{ id: 'admin', label: 'Admin Académique', icon: ShieldCheck, badge: 'Console' }] : []),
  ];

  return (
    <div className="bg-white border-b border-slate-200 sticky top-[105px] md:top-[115px] z-30 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-1.5 overflow-x-auto py-2 scrollbar-none">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`nav-tab-${tab.id}`}
                onClick={() => onSelectTab(tab.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-medium text-xs whitespace-nowrap transition-all duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-blue-900 text-white shadow-sm font-bold ring-1 ring-blue-950'
                    : tab.highlight
                    ? 'bg-amber-50 text-amber-900 border border-amber-300 hover:bg-amber-100 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : tab.highlight ? 'text-amber-600' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className={`text-[9px] px-1.5 py-0.5 rounded-md font-bold uppercase tracking-wider ${
                    isActive 
                      ? 'bg-blue-800 text-blue-100 border border-blue-700' 
                      : tab.highlight
                      ? 'bg-amber-200/80 text-amber-900'
                      : 'bg-slate-100 text-slate-600'
                  }`}>
                    {tab.badge}
                  </span>
                )}
                {tab.pulse && (
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
