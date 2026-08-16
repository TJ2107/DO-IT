import { Utilisateur, Certification, Cours, NiveauDifficulte, Domaine } from '../types';
import { INITIAL_USER } from '../data/mockUser';

const USER_STORAGE_KEY = 'do_it_user_data_v1';

export function loadUserData(): Utilisateur {
  try {
    const saved = localStorage.getItem(USER_STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch {
    // fallback if parse fails
  }
  return INITIAL_USER;
}

export function saveUserData(user: Utilisateur): void {
  try {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
  } catch (err) {
    console.error('Failed to save user data', err);
  }
}

export const saveUser = saveUserData;

export function generateVerificationHash(userId: string, coursId: string, timestamp: number): string {
  const characters = '0123456789ABCDEF';
  let hash = '';
  const seed = `${userId}-${coursId}-${timestamp}-${Math.random()}`;
  for (let i = 0; i < 16; i++) {
    const charCode = seed.charCodeAt(i % seed.length) + (i * 17) + Math.floor(Math.random() * 10);
    hash += characters[charCode % characters.length];
  }
  return `DOIT-${hash}`;
}

export function calculateMention(score: number): string {
  if (score >= 0.95) return 'Félicitations du Jury (Excellence)';
  if (score >= 0.9) return 'Très Bien';
  if (score >= 0.8) return 'Bien';
  if (score >= 0.7) return 'Assez Bien';
  return 'Validé';
}

export function createCertificationRecord(
  user: Utilisateur,
  cours: Cours,
  score: number
): Certification {
  const now = new Date();
  const expDate = new Date();
  expDate.setFullYear(now.getFullYear() + (cours.dureeValiditeMois ? Math.floor(cours.dureeValiditeMois / 12) : 3));

  const pad = (n: number) => n.toString().padStart(2, '0');
  const formatDate = (d: Date) => `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`;

  const cert: Certification = {
    id: `cert_${cours.id}_${Date.now()}`,
    nom: `Certificat Professionnel - ${cours.titre}`,
    domaine: cours.domaine,
    domaineNom: cours.domaineNom,
    niveau: cours.niveau,
    dateObtention: formatDate(now),
    dateExpiration: formatDate(expDate),
    score,
    numeroVerification: generateVerificationHash(user.id, cours.id, now.getTime()),
    userId: user.id,
    userName: user.nom,
    coursId: cours.id,
    coursTitre: cours.titre,
    valide: true,
    mention: calculateMention(score),
  };

  return cert;
}

export function formatNiveau(niveau: NiveauDifficulte): string {
  switch (niveau) {
    case NiveauDifficulte.DEBUTANT:
      return 'Débutant';
    case NiveauDifficulte.INTERMEDIAIRE:
      return 'Intermédiaire';
    case NiveauDifficulte.AVANCE:
      return 'Avancé';
    case NiveauDifficulte.EXPERT:
      return 'Expert';
    default:
      return 'Tous niveaux';
  }
}
