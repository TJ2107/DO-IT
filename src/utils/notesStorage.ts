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

export function createChapterCourseNote(coursTitre: string, coursId: string, chapitre: any, domaineNom?: string): NoteApprenant[] {
  const pts = (chapitre.pointsCles && chapitre.pointsCles.length > 0)
    ? chapitre.pointsCles.map((p: string) => `  • ${p}`).join('\n')
    : '  • Assimilation des concepts fondamentaux du chapitre';

  const noteContent = `🎓 FICHE DE COURS & SYNTHÈSE\n` +
    `----------------------------------------\n` +
    `📚 Cours : ${coursTitre}\n` +
    `📌 Chapitre : ${chapitre.titre}\n` +
    (chapitre.formuleCle ? `💡 Formule / Règle d'or : ${chapitre.formuleCle}\n` : '') +
    (chapitre.astuceTerrain ? `🛠️ Astuce de terrain : ${chapitre.astuceTerrain}\n` : '') +
    (chapitre.conseilProfesseur ? `👨‍🏫 Conseil du Professeur : ${chapitre.conseilProfesseur}\n` : '') +
    `----------------------------------------\n` +
    `✅ POINTS CLÉS À ASSIMILER :\n${pts}\n\n` +
    `📝 NOTES PERSONNELLES :\n- `;

  const newNote: NoteApprenant = {
    id: `note_auto_${coursId}_${chapitre.id}_${Date.now()}`,
    userId: 'user_123',
    coursId,
    coursTitre,
    chapitreId: chapitre.id,
    chapitreTitre: chapitre.titre,
    contenu: noteContent,
    dateCreation: new Date().toLocaleDateString('fr-FR'),
    dateMaj: new Date().toLocaleDateString('fr-FR'),
    tags: [domaineNom || 'Synthese', 'Cours', 'Formules']
  };

  return saveNote(newNote);
}

export function createExerciseExplanationNote(
  coursId: string,
  coursTitre: string,
  chapitreId: string,
  chapitreTitre: string,
  question: string,
  bonneReponse: string,
  explication: string
): NoteApprenant[] {
  const noteContent = `💡 NOTE D'EXERCICE & EXPLICATION PÉDAGOGIQUE\n` +
    `----------------------------------------\n` +
    `❓ Question : ${question}\n` +
    `✅ Bonne réponse : ${bonneReponse}\n` +
    `----------------------------------------\n` +
    `📘 Explication du Professeur :\n${explication}\n\n` +
    `📌 Mémoire d'assimilation : À relire avant l'examen.`;

  const newNote: NoteApprenant = {
    id: `note_ex_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    userId: 'user_123',
    coursId,
    coursTitre,
    chapitreId,
    chapitreTitre,
    contenu: noteContent,
    dateCreation: new Date().toLocaleDateString('fr-FR'),
    dateMaj: new Date().toLocaleDateString('fr-FR'),
    tags: ['Exercice', 'Explication', 'Correction']
  };

  return saveNote(newNote);
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


