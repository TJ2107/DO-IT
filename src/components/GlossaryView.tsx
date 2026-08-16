import React, { useState, useMemo } from 'react';
import { GLOSSARY_DATA } from '../data/glossaryData';
import { TermeGlossaire, Domaine } from '../types';
import { 
  Search, BookOpen, Sparkles, Filter, Copy, 
  Check, ArrowRight, ExternalLink, Lightbulb, ShieldCheck, Tag 
} from 'lucide-react';

export const GlossaryView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDomaine, setSelectedDomaine] = useState<number | 'all'>('all');
  const [selectedTerm, setSelectedTerm] = useState<TermeGlossaire | null>(GLOSSARY_DATA[0]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredTerms = useMemo(() => {
    return GLOSSARY_DATA.filter((term) => {
      const matchDomaine = selectedDomaine === 'all' || term.domaine === selectedDomaine;
      const matchSearch =
        searchTerm === '' ||
        term.terme.toLowerCase().includes(searchTerm.toLowerCase()) ||
        term.definitionCourte.toLowerCase().includes(searchTerm.toLowerCase()) ||
        term.definitionComplete.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (term.formule && term.formule.toLowerCase().includes(searchTerm.toLowerCase())) ||
        term.motsCles.some((k) => k.toLowerCase().includes(searchTerm.toLowerCase()));

      return matchDomaine && matchSearch;
    });
  }, [searchTerm, selectedDomaine]);

  const handleCopyFormula = (formula: string, id: string) => {
    navigator.clipboard.writeText(formula);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-black uppercase tracking-wider border border-blue-400/30">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Encyclopédie Technique & Normative</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black">
            Glossaire & Dictionnaire Technique
          </h1>
          <p className="text-sm text-slate-300 max-w-xl">
            Recherchez instantanément les définitions, formules maîtresse, lois physiques et normes industrielles en 1 clic.
          </p>
        </div>

        {/* Quick Search Input */}
        <div className="w-full md:w-80 relative">
          <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Chercher (ex: Kirchhoff, MTBF, CIDR, RGPD...)"
            className="w-full pl-11 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-amber-400 focus:bg-white/20 transition"
          />
        </div>
      </div>

      {/* Domain Filter Buttons */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => setSelectedDomaine('all')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition shrink-0 cursor-pointer ${
            selectedDomaine === 'all'
              ? 'bg-blue-900 text-white shadow-xs'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          Tous les Domaines ({GLOSSARY_DATA.length})
        </button>

        {[
          { id: Domaine.ELECTRICITE, label: '⚡ Électricité' },
          { id: Domaine.ELECTRONIQUE, label: '🔬 Électronique' },
          { id: Domaine.MECANIQUE, label: '⚙️ Mécanique' },
          { id: Domaine.INFORMATIQUE_FONDAMENTALE, label: '💻 IT & Réseaux' },
          { id: Domaine.COMPLIANCE_REGLEMENTAIRE, label: '📜 Compliance' },
          { id: Domaine.HSE, label: '🦺 HSE' },
          { id: Domaine.AUTOMATISME_INDUSTRIEL, label: '🤖 Automatisme' },
          { id: Domaine.MAINTENANCE_INDUSTRIELLE, label: '🛠️ Maintenance' },
          { id: Domaine.GESTION_PROJET, label: '📊 Gestion de Projet' },
          { id: Domaine.LEADERSHIP_TECHNIQUE, label: '👥 Leadership' },
        ].map((d) => (
          <button
            key={d.id}
            onClick={() => setSelectedDomaine(d.id)}
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

      {/* Main 2-Column Split: Term List + Rich Definition Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Search results / list */}
        <div className="lg:col-span-5 space-y-2 max-h-[600px] overflow-y-auto pr-1">
          {filteredTerms.length > 0 ? (
            filteredTerms.map((t) => {
              const isSelected = selectedTerm?.id === t.id;
              return (
                <div
                  key={t.id}
                  onClick={() => setSelectedTerm(t)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-blue-50 border-blue-600 shadow-sm ring-1 ring-blue-600'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-black text-blue-900 uppercase">
                      {t.domaineNom}
                    </span>
                    {t.normeOuReference && (
                      <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono font-medium">
                        {t.normeOuReference}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{t.terme}</h3>
                  <p className="text-xs text-slate-600 line-clamp-2 mt-1">
                    {t.definitionCourte}
                  </p>
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 text-xs">
              Aucun terme technique ne correspond à « {searchTerm} ».
            </div>
          )}
        </div>

        {/* Right Column: Detailed Term Card */}
        <div className="lg:col-span-7">
          {selectedTerm ? (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-6 sticky top-24">
              {/* Header Meta */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs font-black uppercase text-blue-900 tracking-wider">
                    {selectedTerm.domaineNom}
                  </span>
                  <h2 className="text-2xl font-black text-slate-900 mt-1">
                    {selectedTerm.terme}
                  </h2>
                </div>

                {selectedTerm.normeOuReference && (
                  <div className="bg-blue-50 border border-blue-200 text-blue-900 px-3 py-1.5 rounded-xl text-xs font-mono font-bold">
                    🏛️ {selectedTerm.normeOuReference}
                  </div>
                )}
              </div>

              {/* Short summary definition */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Définition synthétique :
                </span>
                <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                  {selectedTerm.definitionCourte}
                </p>
              </div>

              {/* Complete explanation */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                  Explication approfondie :
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                  {selectedTerm.definitionComplete}
                </p>
              </div>

              {/* Key Formula (if available) */}
              {selectedTerm.formule && (
                <div className="bg-blue-900 text-white rounded-2xl p-5 space-y-2 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-black uppercase text-amber-400 tracking-wider">
                      Formule mathématique ou relation clé
                    </span>
                    <button
                      onClick={() => handleCopyFormula(selectedTerm.formule!, selectedTerm.id)}
                      className="flex items-center gap-1 text-xs text-blue-200 hover:text-white bg-white/10 px-2.5 py-1 rounded-lg transition cursor-pointer"
                    >
                      {copiedId === selectedTerm.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Copié !</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copier la formule</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="font-mono text-base font-bold text-white bg-black/30 p-3 rounded-xl">
                    {selectedTerm.formule}
                  </div>
                </div>
              )}

              {/* Practical field example */}
              {selectedTerm.exemplePratique && (
                <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900">
                    <Lightbulb className="w-4 h-4 text-amber-600" />
                    <span>Application concrète sur le terrain :</span>
                  </div>
                  <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                    {selectedTerm.exemplePratique}
                  </p>
                </div>
              )}

              {/* Tags / Keywords */}
              <div className="pt-2 flex flex-wrap items-center gap-1.5 text-xs">
                <span className="text-slate-400 font-bold mr-1">Mots-clés :</span>
                {selectedTerm.motsCles.map((kw) => (
                  <span
                    key={kw}
                    className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg font-medium text-[11px]"
                  >
                    #{kw}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center p-12 bg-white rounded-3xl border border-slate-200 text-slate-400 text-sm">
              Sélectionnez un terme dans la liste pour afficher sa fiche complète.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
