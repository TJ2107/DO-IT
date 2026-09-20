import React, { useRef } from 'react';
import { Cours, Utilisateur, BrevetProfessionnel } from '../types';
import { Award, Printer, ShieldCheck, CheckCircle2, Download, ArrowLeft, GraduationCap, Sparkles, Calendar, BookOpen } from 'lucide-react';

interface BrevetViewProps {
  cours: Cours;
  utilisateur: Utilisateur;
  onBackToCourse: () => void;
  onSelectOtherCourse?: (courseId: string) => void;
}

export const BrevetView: React.FC<BrevetViewProps> = ({
  cours,
  utilisateur,
  onBackToCourse,
  onSelectOtherCourse
}) => {
  const brevetRef = useRef<HTMLDivElement>(null);
  const [showDemoPreview, setShowDemoPreview] = React.useState<boolean>(false);
  const userBrevets: BrevetProfessionnel[] = utilisateur.brevetsObtenus || [];
  const existingBrevet = userBrevets.find(b => b.coursId === cours.id) || userBrevets[0];

  const handlePrint = () => {
    window.print();
  };

  const sampleBrevet: BrevetProfessionnel = {
    id: `brevet_demo_${cours.id}`,
    numeroOfficiel: `BP-FR-${cours.domaine}-2026-DEMO`,
    numeroEnregistrement: `BP-FR-${cours.domaine}-2026-DEMO`,
    intituleBrevet: cours.titreBrevet || `Brevet Professionnel Supérieur - ${cours.titre}`,
    titreBrevet: cours.titreBrevet || `Brevet Professionnel Supérieur - ${cours.titre}`,
    domaine: cours.domaine,
    domaineNom: cours.domaineNom,
    specialite: cours.domaineNom,
    coursId: cours.id,
    coursTitre: cours.titre,
    userId: utilisateur.id,
    userName: utilisateur.nom || 'Jean Dupont',
    nomApprenant: utilisateur.nom || 'Jean Dupont',
    dateDelivrance: new Date().toLocaleDateString('fr-FR'),
    dateObtention: new Date().toISOString(),
    mention: 'Très Bien',
    noteGlobaleSur20: 16.8,
    moyennePonderee: 16.8,
    empreinteSha256: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    empreinteCryptographique: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    competencesValidees: cours.competences || [
      'Gouvernance & Conformité des Processus',
      'Calculs & Dimensionnement Industriel',
      'Diagnostic & Résolution de Problèmes',
      'Respect des Normes Européennes et Françaises'
    ],
    valide: true
  };

  const currentBrevet = existingBrevet || (showDemoPreview ? sampleBrevet : null);

  if (!currentBrevet) {
    return (
      <div className="max-w-4xl mx-auto p-6 sm:p-10 text-center bg-white rounded-3xl border border-slate-200 shadow-sm space-y-6 animate-in fade-in duration-300">
        <div className="w-20 h-20 bg-amber-50 border-2 border-amber-300 rounded-full flex items-center justify-center mx-auto text-amber-600 shadow-inner">
          <Award className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Certificat & Brevet Professionnel
          </h2>
          <p className="text-slate-600 max-w-lg mx-auto text-sm sm:text-base">
            Pour obtenir votre Brevet Officiel sécurisé par empreinte SHA-256 pour <strong>{cours.titre}</strong>, complétez les 15 chapitres, les devoirs notés et l'examen final.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={onBackToCourse}
            className="px-6 py-3 bg-blue-900 text-white rounded-xl font-bold hover:bg-blue-800 transition-colors shadow-sm cursor-pointer text-sm"
          >
            Reprendre les 15 Chapitres
          </button>
          <button
            onClick={() => setShowDemoPreview(true)}
            className="px-6 py-3 bg-amber-50 text-amber-900 border border-amber-300 hover:bg-amber-100 rounded-xl font-bold transition-colors cursor-pointer text-sm flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Aperçu du Modèle Officiel de Brevet</span>
          </button>
        </div>
      </div>
    );
  }

  const dateDelivrance = new Date(currentBrevet.dateObtention || currentBrevet.dateDelivrance || new Date()).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8 print:p-0">
      {/* Top Action Bar (hidden in print) */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs print:hidden">
        <button
          onClick={onBackToCourse}
          className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-900 px-3 py-2 rounded-xl hover:bg-slate-100 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Retour au cours</span>
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-5 py-2.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-xs cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Imprimer / Télécharger le Certificat PDF</span>
          </button>
        </div>
      </div>

      {/* Official Certificate Paper Container */}
      <div 
        ref={brevetRef}
        id="brevet-certificate"
        className="bg-[#FCFDF9] text-slate-900 rounded-3xl border-8 border-double border-amber-800/60 p-8 sm:p-14 shadow-2xl relative overflow-hidden font-serif print:border-4 print:p-8 print:shadow-none print:m-0"
      >
        {/* Ornate corner motifs */}
        <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-amber-700/80 pointer-events-none" />
        <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-amber-700/80 pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-amber-700/80 pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-amber-700/80 pointer-events-none" />

        {/* Guilloche decorative background watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
          <Award className="w-[500px] h-[500px] text-amber-900" />
        </div>

        {/* Certificate Header */}
        <div className="text-center space-y-3 relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100/80 border-2 border-amber-600 text-amber-900 mx-auto shadow-inner">
            <Award className="w-8 h-8 text-amber-700" />
          </div>

          <div className="space-y-1">
            <span className="text-xs font-sans uppercase tracking-[0.25em] text-amber-900/80 font-bold block">
              RÉPUBLIQUE FRANÇAISE &bull; HABILITATION PROFESSIONNELLE
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-wide text-slate-950 uppercase font-serif">
              Certificat Professionnel & Brevet Sécurisé
            </h1>
            <p className="text-xs sm:text-sm font-sans uppercase tracking-widest text-slate-600 font-semibold">
              Certification de Qualification Technique & Compétences Métier
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 flex items-center justify-center gap-4 relative z-10">
          <div className="h-px bg-gradient-to-r from-transparent via-amber-700/50 to-transparent flex-1" />
          <div className="w-2.5 h-2.5 rotate-45 bg-amber-700/80" />
          <div className="h-px bg-gradient-to-r from-transparent via-amber-700/50 to-transparent flex-1" />
        </div>

        {/* Body Text */}
        <div className="text-center space-y-6 relative z-10 max-w-2xl mx-auto">
          <p className="text-sm sm:text-base font-sans text-slate-700 italic">
            Le Jury National d'Évaluation Académique et Professionnelle certifie par la présente que :
          </p>

          <div className="py-2 border-b-2 border-amber-900/30 inline-block px-8">
            <span className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 font-sans uppercase">
              {currentBrevet.nomApprenant}
            </span>
          </div>

          <p className="text-sm sm:text-base font-sans text-slate-700 leading-relaxed">
            a satisfait avec succès à l'ensemble des 15 chapitres d'enseignement, aux devoirs de mise en situation pratique ainsi qu'à la soutenance de l'examen terminal sanctionné par la correction d'ensemble du cursus :
          </p>

          <div className="bg-amber-50/60 border border-amber-300/80 rounded-2xl p-5 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-amber-950 font-serif mb-1">
              {currentBrevet.titreBrevet}
            </h2>
            <span className="text-xs font-sans text-slate-600 font-medium">
              Spécialité : {currentBrevet.specialite} &bull; Volume : 15 Chapitres &bull; Référentiel Européen
            </span>
          </div>

          {/* Mention & Grade */}
          <div className="flex items-center justify-center gap-6 font-sans">
            <div className="text-center px-4 py-2 bg-white rounded-xl border border-slate-200">
              <span className="text-[11px] text-slate-500 block uppercase font-semibold">Moyenne Générale</span>
              <span className="text-xl font-bold text-slate-900">{currentBrevet.moyennePonderee}/20</span>
            </div>
            <div className="text-center px-4 py-2 bg-white rounded-xl border border-amber-300 bg-amber-50/50">
              <span className="text-[11px] text-amber-800 block uppercase font-semibold">Distinction</span>
              <span className="text-xl font-bold text-amber-900">Mention {currentBrevet.mention}</span>
            </div>
          </div>
        </div>

        {/* Competencies summary chips */}
        <div className="mt-8 pt-6 border-t border-amber-800/20 relative z-10">
          <span className="text-[11px] font-sans font-bold text-slate-500 uppercase tracking-wider block text-center mb-3">
            Compétences Maîtrisées & Validées par le Jury
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
            {(currentBrevet.competencesValidees || []).map((comp, idx) => (
              <span 
                key={idx}
                className="text-[11px] font-sans bg-emerald-50 text-emerald-900 border border-emerald-300 px-3 py-1 rounded-full font-medium flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                <span>{comp}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Signatures & Seal Section */}
        <div className="mt-12 pt-8 border-t-2 border-amber-900/30 flex flex-wrap items-end justify-between gap-8 relative z-10 font-sans">
          {/* Left : Academic Registry & Date */}
          <div className="space-y-1 text-xs text-slate-600">
            <div className="flex items-center gap-1.5 text-slate-800 font-semibold">
              <Calendar className="w-4 h-4 text-amber-700" />
              <span>Délivré le {dateDelivrance}</span>
            </div>
            <p>Numéro d'enregistrement : <strong className="font-mono text-slate-900">{currentBrevet.numeroEnregistrement || currentBrevet.numeroOfficiel}</strong></p>
            <p className="font-mono text-[10px] text-slate-400 break-all max-w-xs">
              Empreinte SHA-256 : {(currentBrevet.empreinteCryptographique || currentBrevet.empreinteSha256 || 'SHA256-DOIT-SECURITY-VALID').substring(0, 32)}...
            </p>
          </div>

          {/* Center : Official Academic Golden Stamp Seal */}
          <div className="mx-auto w-24 h-24 rounded-full border-4 border-double border-amber-600 bg-gradient-to-br from-amber-200 via-yellow-100 to-amber-300 shadow-md flex flex-col items-center justify-center text-amber-950 font-bold text-[9px] uppercase tracking-tighter text-center leading-tight">
            <ShieldCheck className="w-7 h-7 text-amber-800 mb-0.5" />
            <span>Sceau Officiel</span>
            <span className="text-[7px] text-amber-800 font-normal">Authentifié</span>
          </div>

          {/* Right : President of Jury Signature */}
          <div className="text-right space-y-2">
            <span className="text-xs font-semibold text-slate-600 block">
              Pour le Jury d'Examen & l'Autorité Académique
            </span>
            <div className="italic text-base font-serif text-slate-800 font-bold pr-2">
              Prof. Alain de Montmirail
            </div>
            <span className="text-[10px] text-slate-400 block">
              Président du Conseil Pédagogique
            </span>
          </div>
        </div>
      </div>

      {/* All Brevets Earned by User */}
      {userBrevets.length > 1 && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs print:hidden space-y-4">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" />
            <span>Tous vos Brevets Professionnels Obtenus ({userBrevets.length})</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {userBrevets.map((b) => (
              <div 
                key={b.id}
                className="p-4 rounded-2xl border border-amber-200 bg-amber-50/40 flex items-center justify-between"
              >
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{b.titreBrevet}</h4>
                  <span className="text-xs text-slate-500 block mt-0.5">
                    Mention {b.mention} &bull; {new Date(b.dateObtention).toLocaleDateString('fr-FR')}
                  </span>
                </div>
                <span className="text-xs font-mono font-bold bg-white px-2.5 py-1 rounded-lg border border-slate-200 text-slate-700">
                  {b.moyennePonderee}/20
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
