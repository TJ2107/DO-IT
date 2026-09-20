import { Utilisateur, Badge, CollaborateurB2B, Certification, Domaine, NiveauDifficulte, ProfilEntreprise, NotificationItem } from '../types';

export const INITIAL_NOTIFICATIONS: NotificationItem[] = [];

export const INITIAL_BADGES: Badge[] = [
  {
    id: 'badge_streak_7',
    titre: '🔥 Flamme de la Rigueur',
    description: 'A étudié pendant 7 jours consécutifs sur la plateforme DO IT.',
    icon: '🔥',
    obtenu: false,
    categorie: 'progression',
  },
  {
    id: 'badge_first_course',
    titre: '⚡ Premier Pas Technologique',
    description: 'A validé son tout premier module de formation certifiant.',
    icon: '⚡',
    obtenu: false,
    categorie: 'progression',
  },
  {
    id: 'badge_perfect_score',
    titre: '⭐ Maîtrise Parfaite',
    description: 'A obtenu un score de 95% ou plus à un examen sanctionnant.',
    icon: '⭐',
    obtenu: false,
    categorie: 'excellence',
  },
  {
    id: 'badge_multi_domain',
    titre: '🌐 Polyvalence Industrielle',
    description: 'A obtenu des certifications dans au moins 3 domaines distincts.',
    icon: '🌐',
    obtenu: false,
    categorie: 'specialite',
  },
  {
    id: 'badge_electrician_pro',
    titre: '⚡ Électricien Certifié',
    description: 'A réussi l’examen officiel en Électricité avec mention.',
    icon: '💡',
    obtenu: false,
    categorie: 'specialite',
  },
  {
    id: 'badge_speed_master',
    titre: '⏱️ Détection Éclair',
    description: 'A terminé un test technique en moins de 10 minutes avec 100% de réussite.',
    icon: '⏱️',
    obtenu: false,
    categorie: 'vitesse',
  },
];

export const INITIAL_CERTIFICATIONS: Certification[] = [];

export const INITIAL_USER: Utilisateur = {
  id: '',
  nom: '',
  email: '',
  role: 'etudiant',
  niveauGlobal: 1,
  xp: 0,
  pointsExperience: 0,
  streakJours: 0,
  coursSuivis: [],
  coursTermines: [],
  chapitresTermines: [],
  certifications: [],
  brevetsObtenus: [],
  devoirsRendus: {},
  rapportsTP: {},
  notifications: [],
  factures: [],
  progressionParCours: {},
  badges: INITIAL_BADGES,
  tempsApprentissageMinutes: 0,
};

export const MOCK_DEFAULT_ENTREPRISE: ProfilEntreprise = {
  raisonSociale: '',
  siret: '',
  numeroTva: '',
  adresse: '',
  codePostal: '',
  ville: '',
  pays: 'Congo',
  contactRHNom: '',
  contactRHEmail: '',
  contactRHTel: '',
  opcoRattachement: '',
  effectifTotal: 0
};

export const MOCK_B2B_COLLABORATEURS: CollaborateurB2B[] = [];

