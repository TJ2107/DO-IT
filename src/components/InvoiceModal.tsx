import React from 'react';
import { FactureRecu } from '../types';
import { Printer, Download, ArrowLeft, CheckCircle2, ShieldCheck, FileText, QrCode, Copy, Check } from 'lucide-react';

interface InvoiceModalProps {
  facture: FactureRecu;
  onClose: () => void;
}

export const InvoiceModal: React.FC<InvoiceModalProps> = ({ facture, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyRef = () => {
    navigator.clipboard.writeText(facture.numeroFacture);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs p-4 sm:p-6 flex justify-center items-start print:p-0 print:bg-white">
      <div className="bg-white max-w-3xl w-full rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-4 print:my-0 print:border-none print:shadow-none print:rounded-none">
        {/* Actions Bar - Hidden on print */}
        <div className="bg-slate-900 text-white p-4 flex flex-wrap items-center justify-between gap-3 print:hidden">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white transition cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Fermer</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyRef}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-medium transition cursor-pointer"
              title="Copier le numéro de facture"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copié !' : facture.numeroFacture}</span>
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition shadow-sm cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimer / Télécharger PDF</span>
            </button>
          </div>
        </div>

        {/* Invoice Paper Document */}
        <div className="p-8 sm:p-12 text-slate-900 bg-white space-y-8 font-sans print:p-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 border-b-2 border-slate-900 pb-6">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-blue-900 flex items-center justify-center text-amber-400 font-black text-lg">
                  DO
                </div>
                <div>
                  <h1 className="text-xl font-black tracking-tight text-blue-950">
                    DO IT ACADEMY
                  </h1>
                  <p className="text-[10px] font-bold text-amber-600 tracking-wider uppercase">
                    Certification Technique & Industrielle
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 max-w-sm pt-2 leading-relaxed">
                {facture.emetteur.adresse}
                <br />
                {facture.emetteur.contacts}
                <br />
                <span className="font-mono text-[10px] text-slate-500">
                  RCCM : {facture.emetteur.rccm} • NIF : {facture.emetteur.nif}
                </span>
              </p>
            </div>

            <div className="text-left sm:text-right space-y-1">
              <div className="inline-block bg-blue-50 border border-blue-200 px-3 py-1 rounded-xl">
                <span className="text-xs font-black text-blue-900 tracking-wider uppercase">
                  FACTURE OFFICIELLE & REÇU
                </span>
              </div>
              <p className="text-lg font-mono font-black text-slate-900">
                {facture.numeroFacture}
              </p>
              <p className="text-xs text-slate-500">
                Date d'émission : <strong>{facture.dateEmission}</strong>
              </p>
              <div className="pt-2 flex sm:justify-end">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-100 border border-emerald-300 text-emerald-800 text-[11px] font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {facture.statut}
                </span>
              </div>
            </div>
          </div>

          {/* Billing Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-slate-50 p-5 rounded-2xl border border-slate-200 text-xs">
            <div className="space-y-1">
              <span className="font-black text-slate-400 uppercase tracking-wider text-[10px] block">
                Facturé à (Apprenant / Entreprise) :
              </span>
              <p className="text-sm font-bold text-slate-900">{facture.apprenant.nom}</p>
              <p className="text-slate-600">{facture.apprenant.email}</p>
              <p className="text-slate-600">{facture.apprenant.telephone}</p>
              {facture.apprenant.entreprise && (
                <p className="text-blue-900 font-medium">{facture.apprenant.entreprise}</p>
              )}
            </div>
            <div className="space-y-1 sm:text-right">
              <span className="font-black text-slate-400 uppercase tracking-wider text-[10px] block">
                Règlement & Transaction :
              </span>
              <p className="text-slate-700">
                Mode : <strong>{facture.modePaiement}</strong>
              </p>
              <p className="text-slate-700 font-mono text-[11px]">
                Réf. Transaction : <strong>{facture.referenceTransaction}</strong>
              </p>
              <p className="text-slate-500 font-mono text-[10px]">
                SecID : {facture.empreinteSecurite}
              </p>
            </div>
          </div>

          {/* Items Table */}
          <div className="space-y-3">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-900 text-slate-900 font-black uppercase text-[10px] tracking-wider">
                  <th className="py-3 px-2">Désignation de la prestation</th>
                  <th className="py-3 px-2 text-center">Qté</th>
                  <th className="py-3 px-2 text-right">Prix Unitaire</th>
                  <th className="py-3 px-2 text-right">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="py-4 px-2">
                    <p className="font-bold text-slate-900 text-sm">{facture.designation}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Filière : {facture.domaineNom || 'Ingénierie Industrielle & Technique'} • Cursus complet avec évaluation sanctionnante et certificat
                    </p>
                  </td>
                  <td className="py-4 px-2 text-center font-bold">1</td>
                  <td className="py-4 px-2 text-right font-mono font-medium">
                    {facture.montantHT.toLocaleString('fr-FR')} {facture.devise}
                  </td>
                  <td className="py-4 px-2 text-right font-mono font-bold text-slate-900">
                    {facture.montantHT.toLocaleString('fr-FR')} {facture.devise}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Totals Calculation */}
          <div className="flex justify-end pt-2">
            <div className="w-full sm:w-72 space-y-2 text-xs">
              <div className="flex justify-between text-slate-600 py-1 border-b border-slate-200">
                <span>Total Hors Taxes (HT) :</span>
                <span className="font-mono font-medium">{facture.montantHT.toLocaleString('fr-FR')} {facture.devise}</span>
              </div>
              <div className="flex justify-between text-slate-600 py-1 border-b border-slate-200">
                <span>TVA (Formation continue) :</span>
                <span className="font-mono font-medium">0 {facture.devise} (Exonérée)</span>
              </div>
              <div className="flex justify-between text-slate-900 font-black text-sm py-2 bg-slate-100 px-3 rounded-xl">
                <span>Net à Payer (TTC) :</span>
                <span className="font-mono text-blue-900">{facture.montantTotal.toLocaleString('fr-FR')} {facture.devise}</span>
              </div>
            </div>
          </div>

          {/* Official Stamp and Signatures */}
          <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-xs">
                <ShieldCheck className="w-4 h-4 text-amber-500" />
                <span>Document Authentifié Numériquement</span>
              </div>
              <p className="text-[10px] text-slate-500 leading-relaxed font-mono">
                Cette facture tient lieu de reçu officiel de paiement certifié conforme pour justification comptable et remboursement entreprise.
              </p>
            </div>

            {/* Visual Stamp Box */}
            <div className="flex justify-end">
              <div className="border-2 border-emerald-600 rounded-2xl p-3 text-center bg-emerald-50/50 w-52 transform -rotate-1 shadow-xs">
                <span className="text-[9px] font-black uppercase text-emerald-900 tracking-wider block">
                  DIRECTION FINANCIÈRE DO IT
                </span>
                <span className="text-base font-black text-emerald-700 tracking-widest block py-0.5">
                  ✓ ACQUITTÉ
                </span>
                <span className="text-[8px] font-mono text-emerald-800 block">
                  {facture.datePaiement} • BZV
                </span>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[9px] text-slate-400 font-mono">
            <span>DO IT ACADEMY • Tous droits réservés</span>
            <span>Généré le {new Date().toLocaleDateString('fr-FR')} • Page 1/1</span>
          </div>
        </div>
      </div>
    </div>
  );
};
