import React, { useState } from 'react';
import { ConventionFormation } from '../types';
import { 
  Printer, 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  Building2, 
  FileText, 
  Signature, 
  Stamp, 
  Check, 
  Copy,
  Scale
} from 'lucide-react';

interface EnterpriseConventionModalProps {
  convention: ConventionFormation;
  onClose: () => void;
  onSignConvention?: () => void;
}

export const EnterpriseConventionModal: React.FC<EnterpriseConventionModalProps> = ({
  convention,
  onClose,
  onSignConvention
}) => {
  const [isSigned, setIsSigned] = useState(convention.signatures.entrepriseSigne);
  const [copied, setCopied] = useState(false);
  const [signataireNom, setSignataireNom] = useState(
    convention.signatures.nomSignataireEntreprise || convention.entreprise.contactRHNom || 'Direction Générale'
  );

  const handlePrint = () => {
    window.print();
  };

  const handleCopyRef = () => {
    navigator.clipboard.writeText(convention.numeroConvention);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSign = () => {
    setIsSigned(true);
    if (onSignConvention) onSignConvention();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs p-4 sm:p-6 flex justify-center items-start print:p-0 print:bg-white">
      <div className="bg-white max-w-4xl w-full rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-4 print:my-0 print:border-none print:shadow-none print:rounded-none animate-in fade-in zoom-in duration-200">
        {/* Top Control Bar */}
        <div className="bg-slate-900 text-white p-4 flex flex-wrap items-center justify-between gap-3 print:hidden">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white transition cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Fermer la convention</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyRef}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-medium transition cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copié !' : convention.numeroConvention}</span>
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition shadow-sm cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimer / Télécharger PDF</span>
            </button>
            {!isSigned && (
              <button
                onClick={handleSign}
                className="flex items-center gap-1.5 px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition shadow-sm cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Signer la Convention</span>
              </button>
            )}
          </div>
        </div>

        {/* Paper Document */}
        <div className="p-8 sm:p-12 text-slate-900 bg-white space-y-7 font-sans print:p-6 text-xs sm:text-sm">
          {/* Header */}
          <div className="text-center space-y-2 border-b-2 border-slate-900 pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-blue-900 text-xs font-black uppercase tracking-wider">
              <Scale className="w-3.5 h-3.5" />
              Cadre Réglementaire Formation Professionnelle Continue
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-950 uppercase tracking-tight">
              Convention de Formation Professionnelle
            </h1>
            <p className="text-xs text-slate-500 font-mono">
              Numéro d'enregistrement contractuel : <strong>{convention.numeroConvention}</strong> • Date : {convention.dateCreation}
            </p>
            <p className="text-[11px] text-slate-500 italic max-w-2xl mx-auto">
              Établie en application des dispositions du Livre III de la Sixième partie du Code du travail relative à la formation professionnelle continue (Articles L. 6353-1 et suivants).
            </p>
          </div>

          {/* Parties Identification */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-slate-50 p-5 rounded-2xl border border-slate-200">
            <div className="space-y-1.5 text-xs">
              <span className="font-black text-blue-900 uppercase tracking-wider text-[10px] block">
                1. L'Organisme de Formation :
              </span>
              <p className="font-bold text-slate-900 text-sm">{convention.organisme.nom}</p>
              <p className="text-slate-600 leading-relaxed">
                Adresse : {convention.organisme.adresse}<br />
                SIRET : {convention.organisme.siret}<br />
                Déclaration d'activité enregistrée sous le n° <strong>{convention.organisme.declarationActivite}</strong> auprès du Préfet de région.
              </p>
              <p className="text-slate-500 text-[11px]">Représenté par : <strong>{convention.organisme.representant}</strong></p>
            </div>

            <div className="space-y-1.5 text-xs">
              <span className="font-black text-blue-900 uppercase tracking-wider text-[10px] block">
                2. L'Entreprise Bénéficiaire :
              </span>
              <p className="font-bold text-slate-900 text-sm">{convention.entreprise.raisonSociale}</p>
              <p className="text-slate-600 leading-relaxed">
                Adresse : {convention.entreprise.adresse}, {convention.entreprise.codePostal} {convention.entreprise.ville}<br />
                SIRET : {convention.entreprise.siret} • N° TVA : {convention.entreprise.numeroTva}
              </p>
              <p className="text-slate-500 text-[11px]">
                Interlocuteur RH : <strong>{convention.entreprise.contactRHNom}</strong> ({convention.entreprise.contactRHEmail})
              </p>
              {convention.entreprise.opcoRattachement && (
                <span className="inline-block bg-emerald-50 border border-emerald-300 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded mt-1">
                  Prise en charge OPCO : {convention.entreprise.opcoRattachement}
                </span>
              )}
            </div>
          </div>

          {/* Legal Articles */}
          <div className="space-y-4 text-xs text-slate-700 leading-relaxed">
            <div className="space-y-1">
              <h3 className="font-bold text-slate-900 uppercase text-xs">Article 1 — Objet de la convention</h3>
              <p>
                L'Organisme s'engage à dispenser aux salariés désignés par l'Entreprise l'action de formation intitulée : <strong className="text-slate-900">{convention.objetFormation}</strong>. Cette formation vise l'acquisition et le renforcement des compétences opérationnelles conformément au programme pédagogique homologué.
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="font-bold text-slate-900 uppercase text-xs">Article 2 — Effectif et durée de l'action</h3>
              <p>
                La formation s'adresse à un effectif de <strong>{convention.effectifConcerne} stagiaire(s)</strong> pour un volume de <strong>{convention.dureeHeuresParStagiaire} heures</strong> par apprenant. La formation est dispensée selon les modalités : <em>{convention.modalitesPedagogiques}</em>.
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="font-bold text-slate-900 uppercase text-xs">Article 3 — Programme & Compétences visées</h3>
              <ul className="list-disc list-inside space-y-0.5 pl-2 text-slate-600">
                {convention.programmeSynthese.map((item, idx) => (
                  <li key={idx}><strong>{item}</strong></li>
                ))}
              </ul>
            </div>

            <div className="space-y-1">
              <h3 className="font-bold text-slate-900 uppercase text-xs">Article 4 — Modalités d'évaluation et sanction de la formation</h3>
              <p>
                L'assiduité est attestée par un suivi numérique des connexions, l'exécution des 15 chapitres d'étude et le rendu des devoirs notés. La formation est sanctionnée par l'examen officiel de certification et la délivrance du <strong>Brevet Professionnel Supérieur sécurisé par empreinte cryptographique SHA-256</strong>.
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="font-bold text-slate-900 uppercase text-xs">Article 5 — Dispositions financières & Prise en charge</h3>
              <p>
                Le coût total pédagogique de l'action s'élève à <strong>{convention.coutTotalHT.toFixed(2)} € HT</strong> (Exonération de TVA selon article 261-4-4° du Code Général des Impôts). Le règlement s'effectue selon les conditions fixées au devis n° {convention.numeroConvention.replace('CONV-', 'DEV-')}.
              </p>
            </div>
          </div>

          {/* Signatures Block */}
          <div className="pt-6 border-t-2 border-slate-900 grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
            {/* Organisme Signature */}
            <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <div className="flex items-center justify-between">
                <span className="font-black text-slate-900 text-xs uppercase">Pour l'Organisme DO IT</span>
                <span className="text-[10px] text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded">Signé</span>
              </div>
              <div className="text-xs text-slate-600">
                <p className="font-bold text-slate-900">{convention.organisme.representant}</p>
                <p className="text-[11px] text-slate-500">Direction Académique et Pédagogique</p>
              </div>
              <div className="border border-emerald-300 bg-emerald-50/60 p-2.5 rounded-xl flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <div className="text-[10px] text-emerald-950 font-mono">
                  Certificat Qualiopi & Signature Validée
                </div>
              </div>
            </div>

            {/* Entreprise Signature */}
            <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <div className="flex items-center justify-between">
                <span className="font-black text-slate-900 text-xs uppercase">Pour l'Entreprise Donneur d'Ordre</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                  isSigned ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                }`}>
                  {isSigned ? 'Convention Paraphée' : 'En attente de signature'}
                </span>
              </div>

              {isSigned ? (
                <div className="space-y-2">
                  <div className="text-xs text-slate-600">
                    <p className="font-bold text-slate-900">{signataireNom}</p>
                    <p className="text-[11px] text-slate-500">Pour le compte de {convention.entreprise.raisonSociale}</p>
                  </div>
                  <div className="border border-emerald-300 bg-emerald-50/60 p-2.5 rounded-xl flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <div className="text-[10px] text-emerald-950 font-mono">
                      Signé électroniquement le {new Date().toLocaleDateString('fr-FR')}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <input
                    type="text"
                    value={signataireNom}
                    onChange={(e) => setSignataireNom(e.target.value)}
                    placeholder="Nom du signataire habilité"
                    className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white"
                  />
                  <button
                    onClick={handleSign}
                    className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-xs transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Signature className="w-4 h-4" />
                    <span>Apposer la Signature Électronique</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Footer Note */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[9px] text-slate-400 font-mono">
            <span>DO IT ACADEMY • Convention de Formation Professionnelle Continue</span>
            <span>Contrat Réf. {convention.numeroConvention} • Page 1/1</span>
          </div>
        </div>
      </div>
    </div>
  );
};
