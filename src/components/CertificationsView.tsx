import React, { useState } from 'react';
import { Utilisateur, Certification, Badge, FactureRecu } from '../types';
import { CertificateModal } from './CertificateModal';
import { InvoiceModal } from './InvoiceModal';
import { generateInvoiceForUser } from '../utils/invoiceGenerator';
import { formatNiveau } from '../utils/storage';
import { 
  Award, ShieldCheck, Download, Share2, CheckCircle2, 
  ExternalLink, Sparkles, Flame, Trophy, Lock, Receipt, Eye, Printer
} from 'lucide-react';

interface CertificationsViewProps {
  user: Utilisateur;
  onOpenVerifyTab: () => void;
}

export const CertificationsView: React.FC<CertificationsViewProps> = ({
  user,
  onOpenVerifyTab,
}) => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [selectedFacture, setSelectedFacture] = useState<FactureRecu | null>(null);

  const factures = user.factures && user.factures.length > 0 
    ? user.factures 
    : [
        generateInvoiceForUser(user, {
          coursTitre: 'Filière Électricité & Électrotechnique Avancée',
          domaineNom: 'Électricité',
          montantHT: 25000,
          modePaiement: 'Airtel Money (+242 05 337 97 74)',
          referenceTransaction: 'TR-AIRTEL-984210375'
        })
      ];

  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Trophy className="w-4 h-4" />
            Passeport de Compétences Professionnelles
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Vos Diplômes, Certifications & Factures
          </h2>
          <p className="text-sm text-blue-200 max-w-xl">
            Toutes vos certifications obtenues sur DO IT sont protégées par une clé de vérification cryptographique infalsifiable reconnue par les entreprises partenaires.
          </p>
        </div>

        <button
          onClick={onOpenVerifyTab}
          className="px-5 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm rounded-xl shadow-md flex items-center gap-2 transition self-start md:self-auto cursor-pointer"
        >
          <ShieldCheck className="w-4 h-4" />
          <span>Vérifier un code de diplôme</span>
        </button>
      </div>

      {/* Certifications Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" />
            Certificats Obtenus ({user.certifications.length})
          </h3>
        </div>

        {user.certifications.length === 0 ? (
          <div className="bg-white rounded-2xl p-10 text-center border border-slate-200 space-y-3">
            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-2xl">
              🎓
            </div>
            <h4 className="text-base font-bold text-slate-800">
              Aucune certification obtenue pour le moment
            </h4>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Terminez un cours dans le catalogue et réussissez l'examen sanctionnant avec au moins 70% pour débloquer votre premier diplôme officiel.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {user.certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-2xl border border-slate-200 hover:border-amber-400 hover:shadow-md transition p-5 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl p-2 bg-amber-50 border border-amber-200 rounded-xl">
                      🎓
                    </span>
                    <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                      ✓ Valide (Score {Math.round(cert.score * 100)}%)
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold text-blue-900 uppercase block">
                      {cert.domaineNom} • {formatNiveau(cert.niveau)}
                    </span>
                    <h4 className="text-base font-black text-slate-900 leading-snug mt-0.5">
                      {cert.coursTitre}
                    </h4>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs space-y-1">
                    <div className="flex justify-between text-slate-600">
                      <span>Délivré le :</span>
                      <span className="font-semibold text-slate-800">{cert.dateObtention}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Valable jusqu'au :</span>
                      <span className="font-semibold text-slate-800">{cert.dateExpiration}</span>
                    </div>
                    <div className="flex justify-between text-slate-600 pt-1 border-t border-slate-200">
                      <span>N° Vérification :</span>
                      <span className="font-mono font-bold text-blue-900">{cert.numeroVerification}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="w-full py-2.5 px-4 text-xs font-bold text-white bg-blue-900 hover:bg-blue-950 rounded-xl transition flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-amber-400" />
                    <span>Visualiser & Imprimer le Diplôme</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Gamification Badges Section */}
      <div className="space-y-4 pt-4 border-t border-slate-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-500" />
            Badges & Trophées d'Excellence
          </h3>
          <span className="text-xs text-slate-500 font-semibold">
            {user.badges.filter((b) => b.obtenu).length} sur {user.badges.length} débloqués
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3.5">
          {user.badges.map((badge) => {
            return (
              <div
                key={badge.id}
                className={`p-4 rounded-2xl border text-center transition flex flex-col items-center justify-between ${
                  badge.obtenu
                    ? 'bg-amber-50/60 border-amber-200 shadow-xs'
                    : 'bg-slate-50 border-slate-200 opacity-60'
                }`}
              >
                <div className="text-3xl mb-2">
                  {badge.obtenu ? badge.icon : '🔒'}
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold text-slate-900 leading-tight">
                    {badge.titre}
                  </div>
                  <p className="text-[10px] text-slate-500 line-clamp-2">
                    {badge.description}
                  </p>
                </div>
                {badge.obtenu ? (
                  <span className="mt-2 text-[9px] font-bold text-amber-900 bg-amber-200/80 px-2 py-0.5 rounded-full">
                    Obtenu
                  </span>
                ) : (
                  <span className="mt-2 text-[9px] font-semibold text-slate-400">
                    Verrouillé
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mes Factures & Reçus Fiscaux Section */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
              <Receipt className="w-5 h-5 text-blue-900" />
              Mes Reçus de Paiement & Factures Officielles
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Téléchargez et imprimez vos justificatifs fiscaux avec mentions légales, numérotation officielle et détails de transaction Airtel/MTN.
            </p>
          </div>

          <span className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full self-start sm:self-auto">
            {factures.length} document(s) disponible(s)
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50 text-slate-600 text-[10px] uppercase tracking-wider border-b border-slate-200 font-bold">
                <th className="py-3 px-4">N° Facture</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Prestation / Formation</th>
                <th className="py-3 px-4">Mode & Transaction</th>
                <th className="py-3 px-4">Montant TTC</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {factures.map((fac) => (
                <tr key={fac.id} className="hover:bg-slate-50/80 transition">
                  <td className="py-3.5 px-4 font-mono font-bold text-blue-950">
                    {fac.numeroFacture}
                  </td>
                  <td className="py-3.5 px-4 text-slate-600">
                    {fac.dateEmission}
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-slate-900 max-w-xs truncate">
                    {fac.designation}
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="text-slate-800 font-medium">{fac.modePaiement}</div>
                    <div className="font-mono text-[10px] text-slate-500">{fac.referenceTransaction}</div>
                  </td>
                  <td className="py-3.5 px-4 font-mono font-bold text-slate-900">
                    {fac.montantTotal.toLocaleString('fr-FR')} {fac.devise}
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={() => setSelectedFacture(fac)}
                      className="px-3 py-1.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow-xs transition cursor-pointer inline-flex items-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Afficher & Imprimer PDF</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Selected Certificate Modal */}
      {selectedCert && (
        <CertificateModal
          certification={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}

      {/* Selected Invoice Modal */}
      {selectedFacture && (
        <InvoiceModal
          facture={selectedFacture}
          onClose={() => setSelectedFacture(null)}
        />
      )}
    </div>
  );
};
