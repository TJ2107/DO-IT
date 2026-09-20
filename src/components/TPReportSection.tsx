import React, { useState } from 'react';
import { Cours, RapportTP, Utilisateur } from '../types';
import { 
  FileUp, 
  FileText, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  UploadCloud, 
  Trash2, 
  Send, 
  Sparkles, 
  Award, 
  Check, 
  ChevronRight, 
  UserCheck, 
  ShieldCheck,
  FileCheck,
  Download
} from 'lucide-react';
import { saveTPSubmission, getStoredTPSubmissions } from '../utils/tpStorage';
import { saveUser } from '../utils/storage';

interface TPReportSectionProps {
  cours: Cours;
  utilisateur: Utilisateur;
  onUpdateUser: (user: Utilisateur) => void;
}

export const TPReportSection: React.FC<TPReportSectionProps> = ({
  cours,
  utilisateur,
  onUpdateUser,
}) => {
  // Check if there is already a submission for this course
  const existingSubmissions = getStoredTPSubmissions().filter(
    s => s.coursId === cours.id && (s.apprenantId === utilisateur.id || s.apprenantEmail === utilisateur.email)
  );
  
  const currentSubmission: RapportTP | undefined = existingSubmissions[0];

  const [titreTP, setTitreTP] = useState(
    currentSubmission?.titreTP || `TP Pratique & Laboratoire : Travaux d'Application ${cours.titre}`
  );
  const [contenuRapport, setContenuRapport] = useState(
    currentSubmission?.contenuRapport || ''
  );
  const [selectedFile, setSelectedFile] = useState<{ name: string; size: string } | null>(
    currentSubmission?.nomFichier 
      ? { name: currentSubmission.nomFichier, size: currentSubmission.tailleFichier || '2.1 MB' }
      : null
  );
  const [isDragOver, setIsDragOver] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successToast, setSuccessToast] = useState(false);

  const handleInsertTemplate = () => {
    const template = `1. OBJECTIFS DU TRAVAIL PRATIQUE (TP) :
- Mise en application réelle des concepts du cours "${cours.titre}".
- Réalisation des montages / configurations expérimentales.
- Vérification des lois physiques et dimensionnements théoriques.

2. MATÉRIEL UTILISÉ & SÉCURITÉ :
- Équipements de protection individuelle (EPI) conformes aux normes.
- Instruments de mesure étalonnés (Multimètre RMS, Oscilloscope numérique, Logiciels de simulation).

3. RELEVÉ DE MESURES & PROTOCOLE EXPÉRIMENTAL :
- Mesure n°1 (Condition à vide) : U = ... V, I = ... A.
- Mesure n°2 (Condition en charge nominale) : Rendement mesuré = ... %, Échauffement = ... °C.
- Calculs comparatifs entre valeurs théoriques et réelles.

4. ANALYSE CRITIQUE & OBSERVATIONS :
- Écart mesuré inférieur à 4.5% par rapport aux prévisions de calculs.
- Stabilité du montage vérifiée pendant le cycle d'essai de 30 minutes.

5. CONCLUSION & RECOMMANDATIONS PROFESSIONNELLES :
- Le système répond parfaitement au cahier des charges technique et aux normes de sécurité en vigueur.`;
    setContenuRapport(template);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const sizeMb = (file.size / (1024 * 1024)).toFixed(2);
      setSelectedFile({
        name: file.name,
        size: `${sizeMb} MB`,
      });
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      const sizeMb = (file.size / (1024 * 1024)).toFixed(2);
      setSelectedFile({
        name: file.name,
        size: `${sizeMb} MB`,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contenuRapport.trim() && !selectedFile) {
      alert('Veuillez rédiger votre rapport ou joindre un fichier de compte-rendu de TP.');
      return;
    }

    setIsSubmitting(true);

    const submissionId = currentSubmission?.id || `tp_sub_${cours.id}_${Date.now()}`;
    const newSubmission: RapportTP = {
      id: submissionId,
      coursId: cours.id,
      coursTitre: cours.titre,
      titreTP: titreTP,
      objectifs: cours.objectifs ? cours.objectifs.slice(0, 3) : ['Validation expérimentale'],
      apprenantId: utilisateur.id,
      apprenantNom: utilisateur.nom,
      apprenantEmail: utilisateur.email,
      dateSoumission: new Date().toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      nomFichier: selectedFile?.name,
      tailleFichier: selectedFile?.size,
      contenuRapport: contenuRapport,
      statut: 'en_attente',
      criteresNotation: [
        { critere: 'Conformité du protocole expérimental et sécurité', bareme: 5, note: 0 },
        { critere: 'Justesse des mesures, calculs et relevés techniques', bareme: 5, note: 0 },
        { critere: 'Analyse critique des résultats et interprétations', bareme: 5, note: 0 },
        { critere: 'Qualité rédactionnelle, schémas et conclusion', bareme: 5, note: 0 },
      ],
    };

    saveTPSubmission(newSubmission);

    const updatedUser: Utilisateur = {
      ...utilisateur,
      rapportsTP: {
        ...(utilisateur.rapportsTP || {}),
        [cours.id]: newSubmission,
      },
      xp: (utilisateur.xp || 0) + 100,
    };

    onUpdateUser(updatedUser);
    saveUser(updatedUser);

    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessToast(true);
      setTimeout(() => setSuccessToast(false), 4000);
    }, 600);
  };

  return (
    <div className="space-y-8 animate-in fade-in">
      {/* Toast Notification */}
      {successToast && (
        <div className="p-4 rounded-2xl bg-emerald-900 border border-emerald-500 text-white flex items-center justify-between shadow-xl">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span className="text-sm font-bold">
              Votre rapport de Travaux Pratiques a été transmis avec succès au Formateur référent !
            </span>
          </div>
          <span className="text-xs text-emerald-300 font-mono">Statut : En attente de correction</span>
        </div>
      )}

      {/* Intro Header */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 border border-blue-900/50 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <span className="px-3.5 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Module Travaux Pratiques & Laboratoire
          </span>
          <span className="text-xs text-slate-400 font-medium">
            Filière : {cours.domaineNom}
          </span>
        </div>

        <h2 className="text-xl sm:text-2xl font-black text-white">
          Dépôt de Rapport de TP & Correction Manuelle
        </h2>
        <p className="text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
          Rédigez votre compte-rendu de laboratoire ou joignez votre fichier (PDF, schéma, calculs ou code).
          Un formateur qualifié de l'académie évaluera personnellement votre travail avec une grille critériée sur 20 et des conseils individualisés.
        </p>
      </div>

      {/* Submission Status if already submitted */}
      {currentSubmission && (
        <div className={`p-6 sm:p-7 rounded-3xl border ${
          currentSubmission.statut === 'corrige'
            ? 'bg-emerald-50/90 border-emerald-300 text-emerald-950'
            : 'bg-amber-50/90 border-amber-300 text-amber-950'
        }`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-black/10">
            <div className="flex items-center gap-3">
              {currentSubmission.statut === 'corrige' ? (
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-xl font-black shadow-sm">
                  {currentSubmission.noteSur20}/20
                </div>
              ) : (
                <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-xl font-black shadow-sm animate-pulse">
                  <Clock className="w-6 h-6" />
                </div>
              )}
              <div>
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  {currentSubmission.statut === 'corrige' ? (
                    <>
                      <UserCheck className="w-5 h-5 text-emerald-600" />
                      Rapport Noté & Validé par le Formateur
                    </>
                  ) : (
                    <>
                      <Clock className="w-5 h-5 text-amber-600" />
                      Rapport Soumis • En Attente de Correction Manuelle
                    </>
                  )}
                </h3>
                <p className="text-xs text-slate-600 mt-0.5">
                  Soumis le {currentSubmission.dateSoumission} • Candidat : {currentSubmission.apprenantNom}
                </p>
              </div>
            </div>

            <span className={`text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider ${
              currentSubmission.statut === 'corrige'
                ? 'bg-emerald-200/80 text-emerald-900 border border-emerald-400'
                : 'bg-amber-200/80 text-amber-900 border border-amber-400'
            }`}>
              {currentSubmission.statut === 'corrige' ? 'Correction Validée' : 'En attente formateur'}
            </span>
          </div>

          {/* Formateur Feedback & Rubric */}
          {currentSubmission.statut === 'corrige' && (
            <div className="pt-4 space-y-4">
              <div className="bg-white p-5 rounded-2xl border border-emerald-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-emerald-900 uppercase tracking-wider flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-amber-500" />
                    Appréciation Détaillée du Formateur :
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    Évalué par : <strong>{currentSubmission.nomFormateur}</strong> ({currentSubmission.dateCorrection})
                  </span>
                </div>
                <p className="text-sm text-slate-800 leading-relaxed font-sans italic bg-slate-50 p-4 rounded-xl border border-slate-200">
                  "{currentSubmission.appreciationFormateur}"
                </p>
              </div>

              {/* Rubric details */}
              {currentSubmission.criteresNotation && (
                <div className="bg-white p-5 rounded-2xl border border-emerald-200 space-y-3">
                  <span className="text-xs font-black text-slate-900 uppercase tracking-wider block">
                    Grille d'Évaluation Critériée :
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentSubmission.criteresNotation.map((crit, idx) => (
                      <div key={idx} className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs">
                        <div className="flex justify-between items-center font-bold text-slate-900 mb-1">
                          <span>{crit.critere}</span>
                          <span className="font-mono text-blue-900">{crit.note}/{crit.bareme} pts</span>
                        </div>
                        {crit.commentaire && (
                          <p className="text-[11px] text-slate-600 italic">
                            💬 {crit.commentaire}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* TP Submission Form */}
      <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-blue-900" />
            Rapport Technique de TP à Soumettre
          </h3>
          <button
            type="button"
            onClick={handleInsertTemplate}
            className="text-xs font-bold text-blue-900 hover:text-blue-700 bg-blue-50 px-3 py-1.5 rounded-xl border border-blue-200 transition cursor-pointer flex items-center gap-1.5 self-start sm:self-auto"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Insérer le modèle officiel de rapport
          </button>
        </div>

        {/* TP Subject Title */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            Intitulé du Travail Pratique (TP) :
          </label>
          <input
            type="text"
            value={titreTP}
            onChange={(e) => setTitreTP(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900"
            placeholder="Ex: TP Câblage et Essai en Charge..."
            required
          />
        </div>

        {/* File Drag and Drop / Upload Box */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            Fichier Joint (PDF, Rapport Word, Schéma de câblage, Code ou Photos de mesures) :
          </label>
          <div
            onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
            onDragLeave={() => setIsDragOver(false)}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-2xl p-6 text-center transition-all cursor-pointer ${
              isDragOver 
                ? 'border-blue-600 bg-blue-50/60' 
                : selectedFile 
                ? 'border-emerald-400 bg-emerald-50/40' 
                : 'border-slate-300 hover:border-slate-400 bg-slate-50/50'
            }`}
          >
            {selectedFile ? (
              <div className="flex items-center justify-between bg-white p-3.5 rounded-xl border border-emerald-200 shadow-2xs max-w-lg mx-auto">
                <div className="flex items-center gap-3 text-left overflow-hidden">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <p className="text-xs font-bold text-slate-900 truncate">{selectedFile.name}</p>
                    <p className="text-[10px] text-slate-500 font-mono">{selectedFile.size} • Fichier prêt pour transmission</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedFile(null)}
                  className="text-slate-400 hover:text-rose-600 p-1.5 rounded-lg transition"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <label className="cursor-pointer block">
                <UploadCloud className="w-10 h-10 text-slate-400 mx-auto mb-2" />
                <p className="text-xs font-bold text-slate-800">
                  Glissez-déposez votre document ici ou <span className="text-blue-600 underline">parcourez vos fichiers</span>
                </p>
                <p className="text-[11px] text-slate-500 mt-1">
                  Formats acceptés : PDF, DOCX, ZIP, PNG, JPG (Max 25 Mo)
                </p>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".pdf,.doc,.docx,.zip,.png,.jpg,.jpeg,.txt"
                />
              </label>
            )}
          </div>
        </div>

        {/* Written Report Text Area */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Compte-Rendu Écrit & Synthèse de Laboratoire :
            </label>
            <span className="text-[11px] text-slate-500">
              {contenuRapport.length} caractères
            </span>
          </div>
          <textarea
            rows={10}
            value={contenuRapport}
            onChange={(e) => setContenuRapport(e.target.value)}
            className="w-full px-4 py-3 rounded-2xl border border-slate-300 font-mono text-xs text-slate-900 leading-relaxed focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900"
            placeholder="Détaillez ici vos relevés de mesures, vos observations expérimentales, vos calculs d'écarts et vos conclusions..."
          />
        </div>

        {/* Submit Actions */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Votre travail sera horodaté et sécurisé dans votre dossier académique DO IT.</span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <span>Transmission en cours...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Soumettre le Rapport au Formateur</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
