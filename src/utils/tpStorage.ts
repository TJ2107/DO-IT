import { RapportTP, Utilisateur } from '../types';

const TP_STORAGE_KEY = 'doit_tp_submissions_v1';

// Initial empty TP submissions list for production
const SAMPLE_TP_SUBMISSIONS: RapportTP[] = [];

export function getStoredTPSubmissions(): RapportTP[] {
  try {
    const data = localStorage.getItem(TP_STORAGE_KEY);
    if (!data) {
      localStorage.setItem(TP_STORAGE_KEY, JSON.stringify(SAMPLE_TP_SUBMISSIONS));
      return SAMPLE_TP_SUBMISSIONS;
    }
    return JSON.parse(data);
  } catch (e) {
    console.error('Failed to parse TP submissions', e);
    return SAMPLE_TP_SUBMISSIONS;
  }
}


export function saveTPSubmission(submission: RapportTP): RapportTP[] {
  try {
    const list = getStoredTPSubmissions();
    const index = list.findIndex(item => item.id === submission.id);
    let updated: RapportTP[];
    if (index >= 0) {
      updated = [...list];
      updated[index] = submission;
    } else {
      updated = [submission, ...list];
    }
    localStorage.setItem(TP_STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (e) {
    console.error('Failed to save TP submission', e);
    return [];
  }
}

export function gradeTPSubmission(
  submissionId: string,
  gradeSur20: number,
  appreciation: string,
  formateurName: string,
  criteres?: { critere: string; bareme: number; note: number; commentaire?: string }[]
): RapportTP | null {
  const list = getStoredTPSubmissions();
  const index = list.findIndex(s => s.id === submissionId);
  if (index === -1) return null;

  const updated: RapportTP = {
    ...list[index],
    statut: 'corrige',
    noteSur20: gradeSur20,
    appreciationFormateur: appreciation,
    nomFormateur: formateurName || 'Formateur Académique DO IT',
    dateCorrection: new Date().toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }),
    criteresNotation: criteres || list[index].criteresNotation
  };

  list[index] = updated;
  try {
    localStorage.setItem(TP_STORAGE_KEY, JSON.stringify(list));
  } catch (e) {
    console.error(e);
  }

  return updated;
}
