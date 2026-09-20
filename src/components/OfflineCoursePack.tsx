import React, { useState } from 'react';
import { Cours, Chapitre } from '../types';
import { 
  Download, 
  Printer, 
  WifiOff, 
  FileCheck, 
  BookOpen, 
  CheckCircle2, 
  HardDrive, 
  Sparkles,
  Layers,
  FileText,
  Share2
} from 'lucide-react';
import { CoursePrintView } from './CoursePrintView';

interface OfflineCoursePackProps {
  course: Cours;
}

export const OfflineCoursePack: React.FC<OfflineCoursePackProps> = ({ course }) => {
  const [showFullPrintView, setShowFullPrintView] = useState(false);
  const [isCachedOffline, setIsCachedOffline] = useState(true);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadOfflinePack = () => {
    // Save course payload to dedicated offline registry
    try {
      localStorage.setItem(`doit_offline_course_${course.id}`, JSON.stringify(course));
      setIsCachedOffline(true);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3500);
    } catch (e) {
      console.error(e);
    }
  };

  const handleExportTextSummary = () => {
    let summaryText = `==========================================================\n`;
    summaryText += `DO IT ACADEMY - FICHE DE RÉVISION & CURSUS HORS-LIGNE\n`;
    summaryText += `FORMATION : ${course.titre}\n`;
    summaryText += `DOMAINE : ${course.domaineNom} • NIVEAU : ${course.niveau === 1 ? 'Débutant' : course.niveau === 2 ? 'Intermédiaire' : 'Avancé'}\n`;
    summaryText += `DOCUMENT EXPORTÉ LE : ${new Date().toLocaleDateString('fr-FR')}\n`;
    summaryText += `==========================================================\n\n`;

    course.chapitres.forEach((ch, idx) => {
      summaryText += `----------------------------------------------------------\n`;
      summaryText += `CHAPITRE ${idx + 1} : ${ch.titre.toUpperCase()}\n`;
      summaryText += `Durée estimée : ${ch.dureeEstimeeMin} min\n`;
      summaryText += `Description : ${ch.description}\n`;
      if (ch.formuleCle) {
        summaryText += `FORMULE CLÉ : ${ch.formuleCle}\n`;
      }
      if (ch.pointsCles && ch.pointsCles.length > 0) {
        summaryText += `POINTS CLÉS :\n`;
        ch.pointsCles.forEach((pt) => {
          summaryText += `  * ${pt}\n`;
        });
      }
      summaryText += `\n`;
    });

    const blob = new Blob([summaryText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `DO_IT_Fiches_Revision_${course.id}_${new Date().toISOString().slice(0, 10)}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
      {/* Print View Modal */}
      {showFullPrintView && (
        <CoursePrintView
          course={course}
          onClose={() => setShowFullPrintView(false)}
        />
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-900 shrink-0">
            <WifiOff className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Téléchargement Hors-Ligne & Fiches PDF du Cours
            </h3>
            <p className="text-xs text-slate-600 mt-0.5">
              Étudiez sans connexion Internet partout où vous êtes (Chantiers, Ateliers, Transports).
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Mode Hors-Ligne Prêt
          </span>
        </div>
      </div>

      {downloadSuccess && (
        <div className="p-4 rounded-2xl bg-emerald-950 border border-emerald-500 text-white flex items-center justify-between shadow-lg animate-in fade-in">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span className="text-xs sm:text-sm font-bold">
              Le pack complet des 15 chapitres de {course.titre} a été synchronisé pour consultation hors-ligne !
            </span>
          </div>
        </div>
      )}

      {/* Grid of Download & Export Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* PDF Book Option */}
        <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50/50 hover:bg-slate-50 transition space-y-3">
          <div className="flex items-center justify-between">
            <span className="w-9 h-9 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center font-bold">
              <Printer className="w-5 h-5" />
            </span>
            <span className="text-[11px] font-mono font-bold text-blue-900 bg-white px-2 py-0.5 rounded-md border border-slate-200">
              15 Chapitres • PDF
            </span>
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Livret Complet du Cours (Format PDF A4)
            </h4>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Générez le fascicule pédagogique officiel regroupant l'ensemble des 15 chapitres, formules clés et points d'assimilation.
            </p>
          </div>
          <button
            onClick={() => setShowFullPrintView(true)}
            className="w-full py-2.5 px-4 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold transition shadow-xs flex items-center justify-center gap-2 cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Ouvrir l'Aperçu & Imprimer / PDF</span>
          </button>
        </div>

        {/* Text Revision Sheet Export */}
        <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50/50 hover:bg-slate-50 transition space-y-3">
          <div className="flex items-center justify-between">
            <span className="w-9 h-9 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
              <FileText className="w-5 h-5" />
            </span>
            <span className="text-[11px] font-mono font-bold text-amber-900 bg-white px-2 py-0.5 rounded-md border border-slate-200">
              Fiches Récap .TXT
            </span>
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Fiches de Révision & Formules Clés
            </h4>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Téléchargez un fichier texte compact contenant les définitions, règles d'or et points de repère pour révision rapide.
            </p>
          </div>
          <button
            onClick={handleExportTextSummary}
            className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition shadow-xs flex items-center justify-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Télécharger les Fiches de Révision</span>
          </button>
        </div>
      </div>

      {/* Offline Storage Status */}
      <div className="bg-slate-900 text-white rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <HardDrive className="w-5 h-5 text-amber-400 shrink-0" />
          <div>
            <p className="text-xs font-bold text-white">Stockage Hors-Ligne dans l'Appareil</p>
            <p className="text-[11px] text-slate-400">
              PWA Service Worker & Indexation Locale activée (0 Mo de données réseau requises après synchronisation).
            </p>
          </div>
        </div>
        <button
          onClick={handleDownloadOfflinePack}
          className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
        >
          <HardDrive className="w-3.5 h-3.5" />
          <span>Synchroniser pour Hors-Ligne</span>
        </button>
      </div>
    </div>
  );
};
