import React, { useState, useEffect } from 'react';
import { Certification } from '../types';
import { ShieldCheck, Search, CheckCircle, AlertTriangle, ExternalLink, Award } from 'lucide-react';
import { CertificateModal } from './CertificateModal';

interface VerifyCertificateViewProps {
  certificationsList: Certification[];
}

export const VerifyCertificateView: React.FC<VerifyCertificateViewProps> = ({
  certificationsList,
}) => {
  const [inputCode, setInputCode] = useState('');
  const [searched, setSearched] = useState(false);
  const [foundCert, setFoundCert] = useState<Certification | null>(null);
  const [showFullModal, setShowFullModal] = useState(false);

  // Check URL param if any
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const verifyParam = params.get('verify');
    if (verifyParam) {
      setInputCode(verifyParam);
      handleVerify(verifyParam);
    }
  }, [certificationsList]);

  const handleVerify = (codeToTest?: string) => {
    const code = (codeToTest || inputCode).trim().toUpperCase();
    setSearched(true);

    const match = certificationsList.find(
      (c) => c.numeroVerification.toUpperCase() === code
    );
    setFoundCert(match || null);
  };

  const sampleCodes = certificationsList.slice(0, 3).map((c) => c.numeroVerification);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs text-center space-y-3">
        <div className="w-14 h-14 bg-emerald-50 text-emerald-700 rounded-2xl flex items-center justify-center mx-auto text-2xl shadow-inner border border-emerald-200">
          <ShieldCheck className="w-8 h-8 text-emerald-600" />
        </div>
        <h2 className="text-2xl font-black text-slate-900">
          Vérificateur Officiel d'Authenticité DO IT
        </h2>
        <p className="text-sm text-slate-600 max-w-lg mx-auto">
          Recruteurs, entreprises et institutions : vérifiez instantanément l'authenticité d'un certificat technique délivré par notre plateforme.
        </p>

        {/* Search Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleVerify();
          }}
          className="flex flex-col sm:flex-row gap-2 max-w-xl mx-auto pt-3"
        >
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Ex : DOIT-7A3B9F2E1D8C4B6A"
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 uppercase"
              required
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-900 hover:bg-blue-950 text-white font-bold text-sm rounded-xl shadow-sm transition cursor-pointer"
          >
            Vérifier
          </button>
        </form>

        {/* Quick sample chips */}
        {sampleCodes.length > 0 && (
          <div className="pt-2 text-xs text-slate-500 flex flex-wrap items-center justify-center gap-1.5">
            <span>Tester avec un certificat actif :</span>
            {sampleCodes.map((sc) => (
              <button
                key={sc}
                onClick={() => {
                  setInputCode(sc);
                  handleVerify(sc);
                }}
                className="font-mono text-[11px] bg-slate-100 hover:bg-slate-200 text-blue-900 px-2 py-0.5 rounded border border-slate-300 transition cursor-pointer font-bold"
              >
                {sc}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Verification Result */}
      {searched && (
        <div className="animate-in fade-in zoom-in duration-200">
          {foundCert ? (
            <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-emerald-500 shadow-lg space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-100 text-emerald-800 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">
                      Statut : Certificat Officiel & Authentique
                    </span>
                    <h3 className="text-lg font-black text-slate-900">
                      Diplôme validé dans le registre central DO IT
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setShowFullModal(true)}
                  className="text-xs font-bold text-blue-700 hover:underline flex items-center gap-1"
                >
                  <span>Afficher le diplôme</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <div className="text-slate-500 text-xs">Titulaire du diplôme</div>
                  <div className="font-bold text-slate-900 text-base">{foundCert.userName}</div>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <div className="text-slate-500 text-xs">Formation certifiée</div>
                  <div className="font-bold text-slate-900 text-base">{foundCert.coursTitre}</div>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <div className="text-slate-500 text-xs">Domaine technique</div>
                  <div className="font-bold text-slate-900">{foundCert.domaineNom}</div>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <div className="text-slate-500 text-xs">Résultat de l'examen</div>
                  <div className="font-bold text-emerald-700">
                    {Math.round(foundCert.score * 100)}% ({foundCert.mention || 'Validé'})
                  </div>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <div className="text-slate-500 text-xs">Date d'obtention</div>
                  <div className="font-bold text-slate-800">{foundCert.dateObtention}</div>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <div className="text-slate-500 text-xs">Validité jusqu'au</div>
                  <div className="font-bold text-slate-800">{foundCert.dateExpiration}</div>
                </div>
              </div>

              <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200 text-xs text-emerald-950 flex items-center justify-between">
                <span className="font-mono font-bold">
                  Clé Hash SHA-256 : {foundCert.numeroVerification}
                </span>
                <span className="font-bold text-emerald-700">✓ Signature cryptographique intègre</span>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-rose-400 shadow-md text-center space-y-3">
              <AlertTriangle className="w-10 h-10 text-rose-500 mx-auto" />
              <h3 className="text-lg font-black text-slate-900">
                Certificat non trouvé ou invalide
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                Le numéro de vérification saisi ne correspond à aucun diplôme enregistré sur notre registre central. Veuillez vérifier le code et réessayer.
              </p>
            </div>
          )}
        </div>
      )}

      {showFullModal && foundCert && (
        <CertificateModal
          certification={foundCert}
          onClose={() => setShowFullModal(false)}
        />
      )}
    </div>
  );
};
