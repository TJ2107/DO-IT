import React, { useRef } from 'react';
import { Certification } from '../types';
import { formatNiveau } from '../utils/storage';
import { Download, Printer, Share2, ShieldCheck, X, CheckCircle } from 'lucide-react';

interface CertificateModalProps {
  certification: Certification;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certification,
  onClose,
}) => {
  const [copied, setCopied] = React.useState(false);
  const certRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(
      `${window.location.origin}?verify=${certification.numeroVerification}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-3xl w-full shadow-2xl overflow-hidden border border-slate-200 my-8 animate-in fade-in zoom-in duration-200">
        {/* Modal Toolbar (Non-printable) */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2 text-sm font-bold">
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            <span>Diplôme Officiel Vérifiable DO IT</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copied ? 'Lien copié !' : 'Partager'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-lg flex items-center gap-1.5 transition cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimer / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg text-lg font-bold"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Official Printable Certificate Canvas */}
        <div className="p-6 sm:p-10 bg-amber-50/30">
          <div
            ref={certRef}
            id="printable-diplome"
            className="bg-white border-8 border-double border-blue-950 p-8 sm:p-12 text-center relative shadow-sm rounded-xl space-y-6"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            {/* Corner Decorative Ornaments */}
            <div className="absolute top-3 left-3 text-amber-600 font-serif text-2xl select-none">❖</div>
            <div className="absolute top-3 right-3 text-amber-600 font-serif text-2xl select-none">❖</div>
            <div className="absolute bottom-3 left-3 text-amber-600 font-serif text-2xl select-none">❖</div>
            <div className="absolute bottom-3 right-3 text-amber-600 font-serif text-2xl select-none">❖</div>

            {/* Header / Seal */}
            <div className="space-y-2">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-tr from-blue-900 to-indigo-950 text-amber-300 flex items-center justify-center text-2xl font-bold shadow-md ring-4 ring-amber-300/60">
                🎓
              </div>
              <div className="text-xs uppercase tracking-[0.25em] font-sans font-black text-blue-950">
                DO IT • Plateforme Éducative Industrielle & Technique
              </div>
              <h1 className="text-2xl sm:text-4xl font-black text-blue-950 tracking-tight pt-1">
                CERTIFICAT DE RÉUSSITE
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 font-sans italic">
                Attestation officielle de compétences techniques sanctionnée par examen
              </p>
            </div>

            {/* Recipient */}
            <div className="py-2 space-y-1">
              <div className="text-xs font-sans text-slate-500 uppercase tracking-widest">
                Ce diplôme est décerné avec honneurs à
              </div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 border-b-2 border-amber-300 pb-2 inline-block px-8">
                {certification.userName}
              </div>
            </div>

            {/* Achievement details */}
            <div className="space-y-2 text-slate-800 text-sm sm:text-base max-w-xl mx-auto font-sans leading-relaxed">
              <p>
                Pour avoir validé avec succès l'ensemble des modules théoriques et pratiques du cours professionnel :
              </p>
              <div className="text-lg sm:text-xl font-black text-blue-900 font-serif">
                « {certification.coursTitre} »
              </div>
              <div className="text-xs sm:text-sm text-slate-600">
                Domaine : <strong>{certification.domaineNom}</strong> • Niveau : <strong>{formatNiveau(certification.niveau)}</strong>
              </div>
              <div className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 py-1.5 px-4 rounded-full inline-block mt-2">
                Score d'Examen : {Math.round(certification.score * 100)}% • Mention : {certification.mention || 'Très Bien'}
              </div>
            </div>

            {/* Verification & Signatures */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left font-sans text-xs text-slate-600 items-end">
              <div>
                <div className="text-[10px] text-slate-400 uppercase">Délivré le</div>
                <div className="font-bold text-slate-900">{certification.dateObtention}</div>
                <div className="text-[10px] text-slate-400 uppercase mt-1">Valable jusqu'au</div>
                <div className="font-bold text-slate-900">{certification.dateExpiration}</div>
              </div>

              {/* QR representation */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-slate-950 p-1 rounded-lg flex items-center justify-center text-[8px] text-white font-mono leading-none">
                  [ QR CODE DE VÉRIFICATION ]
                </div>
                <div className="text-[9px] text-slate-400 mt-1">doit-platform.fr/verify</div>
              </div>

              <div className="text-right">
                <div className="font-serif italic text-blue-900 text-base font-bold">
                  Comité Technique DO IT
                </div>
                <div className="text-[10px] text-slate-500">Direction Pédagogique</div>
                <div className="inline-block mt-1 px-2 py-0.5 bg-amber-100 text-amber-900 font-mono text-[10px] font-bold rounded border border-amber-300">
                  {certification.numeroVerification}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
