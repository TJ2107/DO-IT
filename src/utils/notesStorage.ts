import { NoteApprenant } from '../types';

const NOTES_STORAGE_KEY = 'do_it_user_notes_v1';

export function loadAllNotes(): NoteApprenant[] {
  try {
    const saved = localStorage.getItem(NOTES_STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error('Failed to load notes', e);
  }
  return [
    {
      id: 'note_demo_1',
      userId: 'user_123',
      coursId: 'elec_101',
      coursTitre: 'Électricité Industrielle & Réseaux Fondamentaux',
      chapitreId: 'elec_ch_1',
      chapitreTitre: '1. Grandeurs Électriques & Loi d’Ohm',
      contenu: 'Astuce : U = R × I. Toujours penser à la pression hydraulique pour la tension. P = U × I pour dimensionner les disjoncteurs.',
      dateCreation: '16/08/2026',
      dateMaj: '16/08/2026',
      tags: ['Formule', 'Sécurité', 'Ohm']
    }
  ];
}

export function saveNote(note: NoteApprenant): NoteApprenant[] {
  const notes = loadAllNotes();
  const index = notes.findIndex((n) => n.id === note.id || (n.coursId === note.coursId && n.chapitreId === note.chapitreId));
  
  if (index >= 0) {
    notes[index] = { ...note, dateMaj: new Date().toLocaleDateString('fr-FR') };
  } else {
    notes.unshift({
      ...note,
      dateCreation: new Date().toLocaleDateString('fr-FR'),
      dateMaj: new Date().toLocaleDateString('fr-FR')
    });
  }

  try {
    localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
  } catch (e) {
    console.error('Failed to save notes to storage', e);
  }
  return notes;
}

export function getNoteForChapter(coursId: string, chapitreId: string): NoteApprenant | undefined {
  const notes = loadAllNotes();
  return notes.find((n) => n.coursId === coursId && n.chapitreId === chapitreId);
}

export function deleteNote(id: string): NoteApprenant[] {
  const notes = loadAllNotes().filter((n) => n.id !== id);
  try {
    localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
  } catch (e) {
    console.error('Failed to delete note', e);
  }
  return notes;
}

export function exportNotesAsText(notes: NoteApprenant[]): string {
  return notes
    .map(
      (n) =>
        `========================================\n` +
        `COURS: ${n.coursTitre}\n` +
        `CHAPITRE: ${n.chapitreTitre}\n` +
        `DATE: ${n.dateMaj}\n` +
        `TAGS: ${(n.tags || []).join(', ')}\n` +
        `----------------------------------------\n` +
        `${n.contenu}\n\n`
    )
    .join('');
}
