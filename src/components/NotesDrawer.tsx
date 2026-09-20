import React, { useState, useEffect } from 'react';
import { NoteApprenant, Cours, Chapitre } from '../types';
import { loadAllNotes, saveNote, deleteNote, exportNotesAsText } from '../utils/notesStorage';
import { 
  BookOpen, Plus, Trash2, Download, Save, Sparkles, Tag, 
  X, Copy, Check, FileText, Share2, Lightbulb 
} from 'lucide-react';

interface NotesDrawerProps {
  course?: Cours;
  currentChapter?: Chapitre;
  isOpen: boolean;
  onClose: () => void;
}

export const NotesDrawer: React.FC<NotesDrawerProps> = ({
  course,
  currentChapter,
  isOpen,
  onClose,
}) => {
  const [notes, setNotes] = useState<NoteApprenant[]>(loadAllNotes);
  const [activeNoteId, setActiveNoteId] = useState<string | null>(null);
  const [content, setContent] = useState<string>('');
  const [tagInput, setTagInput] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [noteZoom, setNoteZoom] = useState<number>(100);

  const handleZoomNote = (delta: number) => {
    setNoteZoom(prev => Math.min(180, Math.max(80, prev + delta)));
  };

  // Initialize or find note for current chapter if available
  useEffect(() => {
    if (course && currentChapter) {
      const existing = notes.find(
        (n) => n.coursId === course.id && n.chapitreId === currentChapter.id
      );
      if (existing) {
        setActiveNoteId(existing.id);
        setContent(existing.contenu);
        setTags(existing.tags || []);
      } else {
        // Prepare template note
        setActiveNoteId('new');
        setContent('');
        setTags([course.domaineNom]);
      }
    }
  }, [course, currentChapter, notes.length]);

  if (!isOpen) return null;

  const handleSelectNote = (n: NoteApprenant) => {
    setActiveNoteId(n.id);
    setContent(n.contenu);
    setTags(n.tags || []);
  };

  const handleCreateNew = () => {
    setActiveNoteId('new');
    setContent('');
    setTags(course ? [course.domaineNom] : ['Révision']);
  };

  const handleSave = () => {
    if (!content.trim()) return;

    const noteToSave: NoteApprenant = {
      id: activeNoteId === 'new' ? `note_${Date.now()}` : activeNoteId || `note_${Date.now()}`,
      userId: 'user_123',
      coursId: course?.id || 'general',
      coursTitre: course?.titre || 'Notes Générales',
      chapitreId: currentChapter?.id || 'gen_ch',
      chapitreTitre: currentChapter?.titre || 'Synthèse Personnelle',
      contenu: content,
      dateCreation: new Date().toLocaleDateString('fr-FR'),
      dateMaj: new Date().toLocaleDateString('fr-FR'),
      tags: tags
    };

    const updated = saveNote(noteToSave);
    setNotes(updated);
    setActiveNoteId(noteToSave.id);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  const handleDelete = (id: string) => {
    const updated = deleteNote(id);
    setNotes(updated);
    if (activeNoteId === id) {
      handleCreateNew();
    }
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const handleRemoveTag = (t: string) => {
    setTags(tags.filter((tag) => tag !== t));
  };

  const handleInsertFormula = () => {
    if (currentChapter?.formuleCle) {
      setContent((prev) => `${prev}\n📌 Formule clé : ${currentChapter.formuleCle}\n`);
    } else {
      setContent((prev) => `${prev}\n📌 Formule : \n`);
    }
  };

  const handleInsertKeyPoint = () => {
    if (currentChapter?.pointsCles && currentChapter.pointsCles.length > 0) {
      const pts = currentChapter.pointsCles.map((p) => `• ${p}`).join('\n');
      setContent((prev) => `${prev}\n💡 Points clés du cours :\n${pts}\n`);
    }
  };

  const handleDownloadAll = () => {
    const textData = exportNotesAsText(notes);
    const blob = new Blob([textData], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Mes_Notes_DO_IT_${new Date().toISOString().slice(0, 10)}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/50 backdrop-blur-2xs animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-xl h-full shadow-2xl flex flex-col border-l border-slate-200 animate-in slide-in-from-right duration-300"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-blue-950 flex items-center justify-center text-xl font-bold">
              📝
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>Bloc-Notes & Fiches Personnelles</span>
              </h3>
              <p className="text-xs text-blue-200">
                Vos synthèses et réflexions sauvegardées automatiquement
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action bar */}
        <div className="bg-slate-50 p-3 border-b border-slate-200 flex items-center justify-between gap-2 overflow-x-auto text-xs">
          <button
            onClick={handleCreateNew}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-900 hover:bg-blue-950 text-white font-bold transition shrink-0 cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Nouvelle Note</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadAll}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 font-semibold transition shrink-0 cursor-pointer"
              title="Télécharger toutes mes notes au format .txt"
            >
              <Download className="w-3.5 h-3.5 text-blue-700" />
              <span>Exporter mes notes (.txt)</span>
            </button>
          </div>
        </div>

        {/* Main Content: Notes List & Active Note Editor */}
        <div className="flex-1 flex flex-col overflow-y-auto p-5 space-y-4">
          {/* Quick Helpers from current chapter */}
          {course && currentChapter && (
            <div className="bg-blue-50/80 border border-blue-200 rounded-xl p-3 text-xs space-y-2">
              <span className="font-bold text-blue-900 block">
                📌 Contexte actuel : « {currentChapter.titre} »
              </span>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={handleInsertFormula}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-blue-200 text-blue-900 font-semibold hover:bg-blue-100 transition cursor-pointer"
                >
                  <Lightbulb className="w-3 h-3 text-amber-600" />
                  <span>Insérer formule du cours</span>
                </button>
                <button
                  onClick={handleInsertKeyPoint}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-blue-200 text-blue-900 font-semibold hover:bg-blue-100 transition cursor-pointer"
                >
                  <Sparkles className="w-3 h-3 text-blue-600" />
                  <span>Insérer points clés</span>
                </button>
              </div>
            </div>
          )}

          {/* Textarea Editor */}
          <div className="flex-1 flex flex-col space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700 uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <span>Contenu de votre note :</span>
                <div className="flex items-center bg-slate-100 rounded-lg p-0.5 border border-slate-200">
                  <button
                    type="button"
                    onClick={() => handleZoomNote(-15)}
                    className="px-1.5 py-0.5 hover:bg-slate-200 rounded text-[10px] font-bold text-slate-700 transition cursor-pointer"
                    title="Diminuer la taille"
                  >
                    A-
                  </button>
                  <span className="px-1 text-[10px] font-mono text-slate-500 font-bold">{noteZoom}%</span>
                  <button
                    type="button"
                    onClick={() => handleZoomNote(15)}
                    className="px-1.5 py-0.5 hover:bg-slate-200 rounded text-[10px] font-bold text-slate-700 transition cursor-pointer"
                    title="Agrandir la taille"
                  >
                    A+
                  </button>
                </div>
              </div>
              <span className="text-[11px] text-slate-400 font-normal">
                {content.length} caractères
              </span>
            </div>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              style={{ fontSize: `${noteZoom}%` }}
              placeholder="Écrivez vos formules, remarques d'apprentissage, moyens mnémotechniques et questions pour vos futures révisions..."
              className="w-full flex-1 min-h-[220px] p-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:bg-white transition leading-relaxed resize-none font-sans"
            />
          </div>

          {/* Tags management */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
              Étiquettes & Mots-clés :
            </span>
            <div className="flex flex-wrap items-center gap-1.5">
              {tags.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1 text-[11px] bg-slate-100 border border-slate-300 text-slate-800 px-2 py-0.5 rounded-md font-medium"
                >
                  <span>#{t}</span>
                  <button
                    onClick={() => handleRemoveTag(t)}
                    className="text-slate-400 hover:text-red-600 cursor-pointer"
                  >
                    ×
                  </button>
                </span>
              ))}

              <div className="inline-flex items-center gap-1">
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddTag();
                    }
                  }}
                  placeholder="+ Ajouter étiquette"
                  className="px-2 py-0.5 text-xs bg-white border border-slate-200 rounded-md w-32 focus:outline-hidden focus:ring-1 focus:ring-blue-600"
                />
                <button
                  onClick={handleAddTag}
                  className="p-1 bg-slate-200 hover:bg-slate-300 rounded text-xs font-bold cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Existing notes history list */}
          <div className="space-y-2 pt-3 border-t border-slate-200">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
              Mes notes enregistrées ({notes.length}) :
            </span>
            <div className="max-h-40 overflow-y-auto space-y-1.5">
              {notes.map((n) => {
                const isSelected = n.id === activeNoteId;
                return (
                  <div
                    key={n.id}
                    onClick={() => handleSelectNote(n)}
                    className={`p-2.5 rounded-xl border text-xs flex items-center justify-between cursor-pointer transition ${
                      isSelected
                        ? 'bg-blue-50 border-blue-400 text-blue-950 font-semibold'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="truncate pr-2">
                      <span className="font-bold text-slate-900 block truncate">
                        {n.coursTitre} - {n.chapitreTitre}
                      </span>
                      <span className="text-[11px] text-slate-500 truncate block">
                        {n.contenu.slice(0, 50)}...
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="text-[10px] text-slate-400">{n.dateMaj}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(n.id);
                        }}
                        className="p-1 text-slate-400 hover:text-red-600 rounded cursor-pointer"
                        title="Supprimer cette note"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer save actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            {savedSuccess ? (
              <span className="text-emerald-700 font-bold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Note enregistrée avec succès !
              </span>
            ) : (
              'Sauvegarde locale sécurisée'
            )}
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-3.5 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-200 rounded-xl transition cursor-pointer"
            >
              Fermer
            </button>
            <button
              onClick={handleSave}
              className="px-5 py-2 text-xs font-bold text-white bg-blue-900 hover:bg-blue-950 rounded-xl shadow-xs transition flex items-center gap-1.5 cursor-pointer"
            >
              <Save className="w-4 h-4 text-amber-400" />
              <span>Enregistrer ma note</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
