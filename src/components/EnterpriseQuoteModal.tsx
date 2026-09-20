import React, { useState } from 'react';
import { DevisEntreprise } from '../types';
import { 
  Printer, 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  Building2, 
  FileText, 
  Copy, 
  Check, 
  Calendar, 
  Download, 
  Signature
} from 'lucide-react';

interface EnterpriseQuoteModalProps {
  devis: DevisEntreprise;
  onClose: () => void;
  onAcceptAndSign?: () => void;
}

export const EnterpriseQuoteModal: React.FC<EnterpriseQuoteModalProps> = ({
  devis,
  onClose,
  onAcceptAndSign
}) => {
  const [copied, setCopied] = useState(false);
  const [isSigned, setIsSigned] = useState(devis.statut === 'Signé' || devis.statut === 'Facturé');

  const handlePrint = () => {
    window.print();
  };

  const handleCopyRef = () => {
    navigator.clipboard.writeText(devis.numeroDevis);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSign = () => {
    setIsSigned(true);
    if (onAcceptAndSign) onAcceptAndSign();
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
            <span>Fermer le devis</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyRef}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-medium transition cursor-pointer"
              title="Copier la référence du devis"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Réf. Copiée !' : devis.numeroDevis}</span>
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition shadow-sm cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimer / Télécharger PDF</span>
            </button>
            {!isSigned && onAcceptAndSign && (
              <button
                onClick={handleSign}
                className="flex items-center gap-1.5 px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition shadow-sm cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Valider le devis</span>
              </button>
            )}
          </div>
        </div>

        {/* Paper Document */}
        <div className="p-8 sm:p-12 text-slate-900 bg-white space-y-8 font-sans print:p-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 border-b-2 border-slate-900 pb-6">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-blue-900 flex items-center justify-center text-amber-400 font-black text-xl">
                  DO
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-black tracking-tight text-blue-950">
                    DO IT ACADEMY B2B
                  </h1>
                  <p className="text-[11px] font-bold text-amber-600 tracking-wider uppercase">
                    Organisme de Formation Continue Industrielle & Technique
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 max-w-sm pt-2 leading-relaxed">
                DO IT FORMATION SAS • 14 Rue des Métiers de l'Industrie, 75011 Paris<br />
                Déclaration d'activité : n° 11 75 84920 75 (Ne vaut pas agrément de l'État)<br />
                SIRET : 849 203 184 00029 • N° TVA : FR 38 849203184<br />
                Contact B2B : entreprise@doit.edu • +33 (0)1 89 20 44 00
              </p>
            </div>

            <div className="text-left sm:text-right space-y-1">
              <div className="inline-block bg-blue-50 border border-blue-200 px-3 py-1 rounded-xl">
                <span className="text-xs font-black text-blue-900 tracking-wider uppercase">
                  DEVIS PROFORMA B2B
                </span>
              </div>
              <p className="text-lg font-mono font-black text-slate-900">
                {devis.numeroDevis}
              </p>
              <div className="text-xs text-slate-500 space-y-0.5">
                <p>Émis le : <strong className="text-slate-700">{devis.dateEmission}</strong></p>
                <p>Validité jusqu'au : <strong className="text-slate-700">{devis.dateValidite}</strong></p>
              </div>
              <div className="pt-2 flex sm:justify-end">
                <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold ${
                  isSigned
                    ? 'bg-emerald-100 border border-emerald-300 text-emerald-800'
                    : 'bg-amber-100 border border-amber-300 text-amber-800'
                }`}>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {isSigned ? 'Validé & Bon pour Accord' : 'En attente de signature'}
                </span>
              </div>
            </div>
          </div>

          {/* Client Details Box */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-slate-50 p-5 rounded-2xl border border-slate-200 text-xs">
            <div className="space-y-1">
              <span className="font-black text-slate-400 uppercase tracking-wider text-[10px] block">
                Entreprise Cliente (Donneur d'Ordre) :
              </span>
              <p className="text-sm font-bold text-slate-900">{devis.entreprise.raisonSociale}</p>
              <p className="text-slate-600 font-mono text-[11px]">SIRET : {devis.entreprise.siret} • TVA : {devis.entreprise.numeroTva}</p>
              <p className="text-slate-600">{devis.entreprise.adresse}, {devis.entreprise.codePostal} {devis.entreprise.ville} ({devis.entreprise.pays})</p>
              {devis.entreprise.opcoRattachement && (
                <p className="text-blue-900 font-bold mt-1">Rattachement OPCO : {devis.entreprise.opcoRattachement}</p>
              )}
            </div>
            <div className="space-y-1 sm:text-right">
              <span className="font-black text-slate-400 uppercase tracking-wider text-[10px] block">
                Interlocuteur RH / Direction Formation :
              </span>
              <p className="text-sm font-bold text-slate-900">{devis.entreprise.contactRHNom}</p>
              <p className="text-slate-700">{devis.entreprise.contactRHEmail}</p>
              <p className="text-slate-700">{devis.entreprise.contactRHTel}</p>
              <p className="text-slate-500 text-[11px] pt-1">
                Délai d'accès : <strong>{devis.delaiRealisation}</strong>
              </p>
            </div>
          </div>

          {/* Line Items Table */}
          <div className="space-y-3">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-900 text-slate-900 font-black uppercase text-[10px] tracking-wider">
                  <th className="py-3 px-2">Désignation de la prestation de formation</th>
                  <th className="py-3 px-2 text-center">Effectif</th>
                  <th className="py-3 px-2 text-right">Tarif Unitaire HT</th>
                  <th className="py-3 px-2 text-right">Total Brut HT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="py-4 px-2">
                    <p className="font-bold text-slate-900 text-sm">{devis.formationTitre}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Filière : {devis.domaineNom} • 15 Chapitres complets, devoirs notés, synthèses flash et délivrance du Brevet Professionnel SHA-256
                    </p>
                  </td>
                  <td className="py-4 px-2 text-center font-bold text-slate-900 font-mono">
                    {devis.effectifApprenants}
                  </td>
                  <td className="py-4 px-2 text-right font-mono font-medium">
                    {devis.prixUnitaireHT.toFixed(2)} €
                  </td>
                  <td className="py-4 px-2 text-right font-mono font-bold text-slate-900">
                    {(devis.prixUnitaireHT * devis.effectifApprenants).toFixed(2)} €
                  </td>
                </tr>

                {devis.optionsIncluses.map((opt, idx) => (
                  <tr key={idx} className="bg-slate-50/50">
                    <td className="py-3 px-2">
                      <p className="font-bold text-blue-900 text-xs flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                        {opt.nom}
                      </p>
                      <p className="text-[10px] text-slate-500">{opt.description}</p>
                    </td>
                    <td className="py-3 px-2 text-center font-bold text-slate-600">Inclus</td>
                    <td className="py-3 px-2 text-right font-mono font-medium">{opt.montantHT.toFixed(2)} €</td>
                    <td className="py-3 px-2 text-right font-mono font-bold text-slate-900">{opt.montantHT.toFixed(2)} €</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pricing Totals & Discounts Calculation */}
          <div className="flex justify-end pt-2">
            <div className="w-full sm:w-80 space-y-2 text-xs">
              <div className="flex justify-between text-slate-600 py-1 border-b border-slate-200">
                <span>Total Brut HT :</span>
                <span className="font-mono">
                  {(devis.prixUnitaireHT * devis.effectifApprenants + devis.optionsIncluses.reduce((acc, o) => acc + o.montantHT, 0)).toFixed(2)} €
                </span>
              </div>

              {devis.tauxRemise > 0 && (
                <div className="flex justify-between text-emerald-700 font-bold py-1 border-b border-slate-200">
                  <span>Remise Volume Entreprise (-{devis.tauxRemise}%) :</span>
                  <span className="font-mono">-{devis.montantRemiseHT.toFixed(2)} €</span>
                </div>
              )}

              <div className="flex justify-between text-slate-900 font-bold py-1 border-b border-slate-200">
                <span>Sous-total Net HT :</span>
                <span className="font-mono">{devis.montantTotalHT.toFixed(2)} €</span>
              </div>

              <div className="flex justify-between text-slate-600 py-1 border-b border-slate-200">
                <span>TVA (Formation professionnelle) :</span>
                <span className="font-mono">
                  {devis.tauxTVA === 0 ? '0.00 € (Exonérée Art. 261-4-4° CGI)' : `${devis.montantTVA.toFixed(2)} € (${devis.tauxTVA}%)`}
                </span>
              </div>

              <div className="flex justify-between text-slate-900 font-black text-sm py-2.5 bg-slate-900 text-white px-3.5 rounded-xl">
                <span>Total Net à Payer (TTC) :</span>
                <span className="font-mono text-amber-400">{devis.montantTotalTTC.toFixed(2)} €</span>
              </div>
            </div>
          </div>

          {/* Legal Notes & Payment Terms */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-[11px] text-slate-600 space-y-1">
            <p><strong>Modalités de paiement :</strong> {devis.modalitesPaiement}</p>
            <p><strong>Éligibilité Financement :</strong> Action de formation entrant dans le champ d'application de l'article L. 6313-1 du Code du travail. Facturation compatible prise en charge OPCO / Plan de Développement des Compétences.</p>
          </div>

          {/* Signature & Bon pour Accord Box */}
          <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
            <div className="space-y-2 text-xs">
              <span className="font-black text-slate-900 block">Pour DO IT ACADEMY</span>
              <p className="text-[11px] text-slate-500">Direction des Formations B2B</p>
              <div className="border border-slate-200 rounded-xl p-3 bg-slate-50 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
                <div className="text-[10px] text-slate-600">
                  <p className="font-bold text-slate-900">Signature Électronique Certifiée</p>
                  <p className="font-mono">Horodatage : {devis.dateEmission} • SHA256 Scellé</p>
                </div>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <span className="font-black text-slate-900 block">
                Pour l'Entreprise Cliente (Mention « Bon pour accord »)
              </span>
              <p className="text-[11px] text-slate-500">Nom, fonction et signature du représentant légal</p>
              <div className="border-2 border-dashed border-slate-300 rounded-xl p-4 min-h-[100px] flex flex-col justify-between bg-slate-50/50">
                {isSigned ? (
                  <div className="text-center py-2 space-y-1">
                    <span className="inline-flex items-center gap-1 text-emerald-700 font-bold text-xs bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-300">
                      <CheckCircle2 className="w-4 h-4" />
                      Signé et validé par {devis.entreprise.contactRHNom}
                    </span>
                    <p className="text-[10px] text-slate-500 font-mono">Signé le {new Date().toLocaleDateString('fr-FR')}</p>
                  </div>
                ) : (
                  <div className="text-center text-slate-400 text-xs py-4">
                    Cadre réservé à la signature du donneur d'ordre
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[9px] text-slate-400 font-mono">
            <span>DO IT ACADEMY • Solutions Entreprises & Industrie 4.0</span>
            <span>Document contractuel n° {devis.numeroDevis} • Page 1/1</span>
          </div>
        </div>
      </div>
    </div>
  );
};
