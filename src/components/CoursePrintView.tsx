import React from 'react';
import { Cours, Chapitre } from '../types';
import { Printer, Download, ArrowLeft, Check, Award, BookOpen } from 'lucide-react';

interface CoursePrintViewProps {
  course: Cours;
  chapter?: Chapitre;
  onClose: () => void;
}

export const CoursePrintView: React.FC<CoursePrintViewProps> = ({
  course,
  chapter,
  onClose,
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs p-4 sm:p-6 flex justify-center">
      <div className="bg-white max-w-4xl w-full rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-slate-200 print:border-none print:shadow-none print:rounded-none print:m-0 print:p-0">
        {/* Print Bar - Hidden when printing */}
        <div className="bg-slate-900 text-white p-4 flex items-center justify-between print:hidden">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white transition cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Fermer l'aperçu d'impression</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400">
              Prêt pour impression / Export PDF
            </span>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition shadow-sm cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimer / Enregistrer en PDF</span>
            </button>
          </div>
        </div>

        {/* Printable Document Paper Area */}
        <div className="p-8 sm:p-12 text-slate-900 space-y-8 bg-white print:p-0">
          {/* Header Banner */}
          <div className="border-b-2 border-slate-900 pb-6 flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-blue-900 mb-1">
                <span>DO IT CERTIFICATION PLATFORM</span>
                <span>•</span>
                <span>FICHE DE COURS & SYNTHÈSE OFFICIELLE</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
                {course.titre}
              </h1>
              <p className="text-sm text-slate-600 mt-1 font-medium">
                Domaine : {course.domaineNom} • Niveau : {course.niveau === 1 ? 'Débutant' : course.niveau === 2 ? 'Intermédiaire' : 'Avancé'}
              </p>
            </div>
            <div className="text-right shrink-0">
              <span className="text-4xl">{course.icon}</span>
              <span className="block text-[10px] text-slate-400 font-mono mt-1">
                Réf: {course.id.toUpperCase()}
              </span>
            </div>
          </div>

          {/* Chapter Specific or Full Course Overview */}
          {chapter ? (
            <div className="space-y-6">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-2">
                <span className="text-xs font-bold text-blue-900 uppercase tracking-wider block">
                  Chapitre sélectionné :
                </span>
                <h2 className="text-xl font-bold text-slate-900">
                  {chapter.titre}
                </h2>
                <p className="text-xs text-slate-600">
                  Durée estimée : {chapter.dureeEstimeeMin} minutes • {chapter.description}
                </p>
              </div>

              {/* Key formulas */}
              {chapter.formuleCle && (
                <div className="border-2 border-blue-900 rounded-2xl p-5 bg-blue-50/50 space-y-1">
                  <span className="text-xs font-black uppercase text-blue-950 block">
                    Formule & Règle d'or à retenir :
                  </span>
                  <div className="font-mono text-base font-bold text-blue-950 bg-white p-3 rounded-xl border border-blue-200">
                    {chapter.formuleCle}
                  </div>
                </div>
              )}

              {/* Points clés */}
              {chapter.pointsCles && (
                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                    Points Clés & Synthèse d'assimilation :
                  </h3>
                  <ul className="space-y-2">
                    {chapter.pointsCles.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <span className="text-blue-900 font-bold">✓</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Chapter Content text */}
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Contenu du cours :
                </h3>
                <div
                  className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-800 leading-relaxed space-y-3"
                  dangerouslySetInnerHTML={{ __html: chapter.contenuHtml }}
                />
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <h2 className="text-lg font-bold text-slate-900">
                Plan complet du Cursus ({course.chapitres.length} Chapitres)
              </h2>
              <div className="space-y-4">
                {course.chapitres.map((ch, idx) => (
                  <div key={ch.id} className="border border-slate-200 rounded-xl p-4 space-y-1">
                    <div className="flex items-center justify-between text-xs font-bold text-blue-900">
                      <span>Chapitre {idx + 1}</span>
                      <span className="font-mono text-slate-500">{ch.dureeEstimeeMin} min</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{ch.titre}</h3>
                    <p className="text-xs text-slate-600">{ch.description}</p>
                    {ch.formuleCle && (
                      <p className="text-xs font-mono font-bold text-blue-950 bg-slate-50 p-2 rounded-lg mt-2">
                        {ch.formuleCle}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer note */}
          <div className="pt-8 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-400 font-mono">
            <span>DO IT Éducation Technique • Certification Industrielle</span>
            <span>Document imprimé le {new Date().toLocaleDateString('fr-FR')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
