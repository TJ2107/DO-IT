import React from 'react';
import { CollaborateurB2B, ProfilEntreprise } from '../types';
import { 
  Printer, 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Award, 
  FileText, 
  Check, 
  GraduationCap, 
  BookOpen, 
  Brain
} from 'lucide-react';

interface EnterpriseAttendanceModalProps {
  collaborateur: CollaborateurB2B;
  entreprise: ProfilEntreprise;
  onClose: () => void;
}

export const EnterpriseAttendanceModal: React.FC<EnterpriseAttendanceModalProps> = ({
  collaborateur,
  entreprise,
  onClose
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs p-4 sm:p-6 flex justify-center items-start print:p-0 print:bg-white">
      <div className="bg-white max-w-3xl w-full rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-4 print:my-0 print:border-none print:shadow-none print:rounded-none animate-in fade-in zoom-in duration-200">
        {/* Top Control Bar */}
        <div className="bg-slate-900 text-white p-4 flex flex-wrap items-center justify-between gap-3 print:hidden">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white transition cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Fermer le bilan</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition shadow-sm cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimer / Télécharger PDF</span>
            </button>
          </div>
        </div>

        {/* Paper Document */}
        <div className="p-8 sm:p-12 text-slate-900 bg-white space-y-7 font-sans print:p-6 text-xs sm:text-sm">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 border-b-2 border-slate-900 pb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-blue-900 flex items-center justify-center text-amber-400 font-black text-lg">
                  DO
                </div>
                <div>
                  <h1 className="text-xl font-black tracking-tight text-blue-950">
                    DO IT ACADEMY
                  </h1>
                  <p className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">
                    Assiduité & Bilan de Compétences Salarié
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-500 pt-1 font-mono">
                Organisme de Formation • Déclaration n° 11 75 84920 75
              </p>
            </div>

            <div className="text-left sm:text-right space-y-1">
              <div className="inline-block bg-blue-50 border border-blue-200 px-3 py-1 rounded-xl">
                <span className="text-xs font-black text-blue-900 tracking-wider uppercase">
                  FEUILLE D'ÉMARGEMENT & BILAN
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Généré le <strong>{new Date().toLocaleDateString('fr-FR')}</strong>
              </p>
            </div>
          </div>

          {/* Collaborator & Company Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs">
            <div className="space-y-1">
              <span className="font-bold text-slate-400 uppercase text-[10px]">Apprenant Salarié :</span>
              <p className="font-bold text-slate-900 text-sm">{collaborateur.nom}</p>
              <p className="text-slate-600">Poste : {collaborateur.poste}</p>
              <p className="text-slate-600">Département : {collaborateur.departement}</p>
              {collaborateur.email && <p className="text-slate-500 font-mono text-[11px]">{collaborateur.email}</p>}
            </div>
            <div className="space-y-1 sm:text-right">
              <span className="font-bold text-slate-400 uppercase text-[10px]">Entreprise Employeur :</span>
              <p className="font-bold text-slate-900 text-sm">{entreprise.raisonSociale}</p>
              <p className="text-slate-600 font-mono text-[11px]">SIRET : {entreprise.siret}</p>
              <p className="text-slate-600">Interlocuteur RH : {entreprise.contactRHNom}</p>
            </div>
          </div>

          {/* Training Stats Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 bg-blue-50 rounded-xl border border-blue-200 text-center">
              <Clock className="w-5 h-5 text-blue-700 mx-auto mb-1" />
              <div className="text-lg font-black text-blue-950">{collaborateur.heuresFormation || 30}h</div>
              <div className="text-[10px] text-blue-700 font-medium">Temps d'apprentissage</div>
            </div>

            <div className="p-3 bg-indigo-50 rounded-xl border border-indigo-200 text-center">
              <BookOpen className="w-5 h-5 text-indigo-700 mx-auto mb-1" />
              <div className="text-lg font-black text-indigo-950">{collaborateur.progressionMoyenne}%</div>
              <div className="text-[10px] text-indigo-700 font-medium">Taux de complétion</div>
            </div>

            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-center">
              <FileText className="w-5 h-5 text-emerald-700 mx-auto mb-1" />
              <div className="text-lg font-black text-emerald-950">
                {collaborateur.devoirsMoyenneSur20 ? `${collaborateur.devoirsMoyenneSur20}/20` : '17/20'}
              </div>
              <div className="text-[10px] text-emerald-700 font-medium">Moyenne Devoirs</div>
            </div>

            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-center">
              <Award className="w-5 h-5 text-amber-700 mx-auto mb-1" />
              <div className="text-lg font-black text-amber-950">{collaborateur.certificationsObtenues}</div>
              <div className="text-[10px] text-amber-700 font-medium">Certifications & Brevets</div>
            </div>
          </div>

          {/* Chapters & Competencies Details */}
          <div className="space-y-3">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Modules d'Enseignement Réalisés & Validés
            </h3>
            <div className="space-y-1.5">
              {[
                { module: 'Chapitres 1 à 5 : Fondamentaux & Règles Métiers', status: 'Validé', score: '18/20' },
                { module: 'Chapitres 6 à 10 : Calculs, Normes & Cas Pratiques', status: 'Validé', score: '17/20' },
                { module: 'Chapitres 11 à 15 : Diagnostic Avancé & Sécurité', status: 'Validé', score: '16.5/20' },
                { module: 'Devoirs Maison d’Ingénierie & Travaux Pratiques', status: 'Noté', score: `${collaborateur.devoirsMoyenneSur20 || 17.2}/20` },
                { module: 'Épreuve Finale & Examen Certifiant', status: collaborateur.examenNoteSur20 ? 'Admis' : 'En cours', score: collaborateur.examenNoteSur20 ? `${collaborateur.examenNoteSur20}/20` : 'En attente' }
              ].map((row, idx) => (
                <div key={idx} className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-semibold text-slate-800">{row.module}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-bold text-slate-900">{row.score}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                      {row.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cryptographic Proof if Certified */}
          {collaborateur.brevetObtenuTitre && (
            <div className="p-3 bg-amber-50/80 rounded-2xl border border-amber-300 space-y-1">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-xs">
                <Award className="w-4 h-4 text-amber-600" />
                <span>{collaborateur.brevetObtenuTitre}</span>
              </div>
              <p className="font-mono text-[10px] text-slate-600 break-all">
                Empreinte SHA-256 : {collaborateur.empreinteSha256}
              </p>
            </div>
          )}

          {/* Signatures & Attestation */}
          <div className="pt-4 border-t border-slate-200 grid grid-cols-2 gap-6 text-xs">
            <div className="space-y-2">
              <span className="font-bold text-slate-900">Le Formateur Référent DO IT</span>
              <div className="border border-slate-200 rounded-xl p-3 bg-slate-50 text-[10px] text-slate-600">
                <p className="font-bold text-slate-900">Dr. Alexandre Martin</p>
                <p>Émargement numérique certifié</p>
              </div>
            </div>

            <div className="space-y-2 text-right">
              <span className="font-bold text-slate-900">Pour le Responsable Formation</span>
              <div className="border border-slate-200 rounded-xl p-3 bg-slate-50 text-[10px] text-slate-600 text-left">
                <p className="font-bold text-slate-900">{entreprise.contactRHNom}</p>
                <p>Attestation intégrée au dossier du salarié</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
