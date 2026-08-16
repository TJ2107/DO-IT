export enum Domaine {
  ELECTRICITE = 1,
  ELECTRONIQUE = 2,
  MECANIQUE = 3,
  INFORMATIQUE_FONDAMENTALE = 4,
  INFORMATIQUE = 4,
  PROGRAMMATION = 5,
  COMPTABILITE = 6,
  COMPLIANCE_REGLEMENTAIRE = 7,
  COMPLIANCE = 7,
  HSE = 8, // Hygiène Sécurité Environnement
  AUTOMATISME_INDUSTRIEL = 9,
  AUTOMATISME = 9,
  MAINTENANCE_INDUSTRIELLE = 10,
  MAINTENANCE = 10,
  GESTION_PROJET = 11,
  LEADERSHIP_TECHNIQUE = 12,
  LEADERSHIP = 12,
}

export enum NiveauDifficulte {
  DEBUTANT = 1,
  INTERMEDIAIRE = 2,
  AVANCE = 3,
  EXPERT = 4,
}

export enum TypeQuestion {
  QCM = 1,
  VRAI_FAUX = 2,
  CHIFFREE = 3,
  ASSOCIATION = 4,
  ORDRE = 5,
  CODE = 6,
  SCHEMA = 7,
  CAS_PRATIQUE = 8,
}

export enum StatutModule {
  NON_COMMENCE = 0,
  EN_COURS = 1,
  TERMINE = 2,
  CERTIFIE = 3,
}

export interface Exercice {
  id: string;
  type: TypeQuestion;
  question: string;
  reponsesPossibles: string[];
  reponsesCorrectes: number[];
  explication: string;
  points: number;
  difficulte: NiveauDifficulte;
  codeSnippet?: string;
  schemaUrl?: string;
  associationPairs?: { left: string; right: string }[];
}

export interface NoteApprenant {
  id: string;
  userId: string;
  coursId: string;
  coursTitre: string;
  chapitreId: string;
  chapitreTitre: string;
  contenu: string;
  dateCreation: string;
  dateMaj: string;
  tags?: string[];
}

export interface FlashcardItem {
  id: string;
  coursId: string;
  domaine: Domaine;
  domaineNom: string;
  chapitreTitre: string;
  recto: string; // Question or Concept
  verso: string; // Explication / Réponse
  formule?: string;
  astuce?: string;
  maitrise: 'non_vu' | 'difficile' | 'moyen' | 'facile';
  derniereRevision?: string;
}

export interface TermeGlossaire {
  id: string;
  terme: string;
  domaine: Domaine;
  domaineNom: string;
  definitionCourte: string;
  definitionComplete: string;
  formule?: string;
  exemplePratique?: string;
  normeOuReference?: string;
  motsCles: string[];
}

export interface ErreurRemediation {
  id: string;
  userId: string;
  coursId: string;
  coursTitre: string;
  chapitreId: string;
  chapitreTitre: string;
  questionId: string;
  question: string;
  reponseChoisie: string;
  bonneReponse: string;
  explicationProfesseur: string;
  dateErreur: string;
  resolu: boolean;
  tentatives: number;
}

export interface ReadingPreferences {
  fontSize: 'sm' | 'base' | 'lg' | 'xl';
  theme: 'light' | 'sepia' | 'dark';
  audioSpeed: number; // 0.8 to 1.5
}

export interface DevoirQuestion {
  id: string;
  titre: string;
  enonce: string;
  points: number;
  type: 'calcul' | 'analyse_schema' | 'qcm_justifie' | 'cas_pratique';
  options?: string[];
  reponseCorrecteIndex?: number;
  formuleOuAstuce?: string;
  solutionDetaillee: string;
  baremeDetail: string[];
}

export interface DevoirMaison {
  id: string;
  numero: number;
  titre: string;
  description: string;
  chapitresCouverts: string; // ex: "Chapitres 1 à 5"
  dureeEstimeeMin: number;
  miseEnSituation: string;
  documentJoint?: string;
  questions: DevoirQuestion[];
  noteMax: number; // 20
  coefficient: number; // 2
}

export interface SoumissionDevoir {
  devoirId: string;
  coursId: string;
  userId?: string;
  dateSoumission?: string;
  dateRendu?: string;
  reponses: Record<string, any>;
  noteSur20: number;
  noteMax?: number;
  pointsObtenus?: number;
  pointsTotal?: number;
  appreciationProfesseur: string;
  pointsForts?: string[];
  pointsAmelioration?: string[];
  corrigeCompletConsulte?: boolean;
  valide?: boolean;
}

export interface BrevetProfessionnel {
  id: string;
  numeroOfficiel: string; // ex: BREVET-FR-ELEC-2026-98421
  numeroEnregistrement?: string;
  intituleBrevet: string;
  titreBrevet?: string;
  domaine: Domaine;
  domaineNom: string;
  specialite?: string;
  coursId: string;
  coursTitre: string;
  userId: string;
  userName: string;
  nomApprenant?: string;
  dateDelivrance: string;
  dateObtention?: string;
  mention: 'Très Bien avec Félicitations du Jury' | 'Très Bien' | 'Bien' | 'Assez Bien' | 'Admis' | string;
  noteGlobaleSur20: number;
  moyennePonderee?: number;
  releveNotes?: {
    noteExercicesSur20: number; // Moyenne des 15 chapitres
    noteDevoirsSur20: number; // Moyenne des devoirs
    noteExamenSur20: number; // Épreuve finale sanctionnante
    detailsChapitres: { chapitreTitre: string; noteSur20: number }[];
    detailsDevoirs: { devoirTitre: string; noteSur20: number }[];
  };
  competencesValidees?: string[];
  signaturePresidentJury?: string;
  signatureDirecteurAcademie?: string;
  empreinteSha256?: string;
  empreinteCryptographique?: string;
  valide: boolean;
}

export interface BilanCorrectionEnsemble {
  coursId: string;
  coursTitre: string;
  userId?: string;
  dateEvaluation: string;
  noteExercicesSur20: number;
  scoreExercicesSur20?: number;
  noteDevoirsSur20: number | null;
  scoreDevoirsSur20?: number | null;
  noteExamenSur20: number | null;
  scoreExamenSur20?: number | null;
  noteFinaleSur20: number;
  moyennePondereeSur20?: number;
  admis: boolean;
  mention: string;
  appreciationGlobaleJury?: string;
  appreciationGlobale?: string;
  competencesValidees?: { nom: string; taux: number; statut: 'Acquis' | 'En consolidation' | 'Non acquis' }[];
  competencesEvaluees?: { nom: string; validee: boolean; description?: string; taux?: number; pourcentage?: number }[];
  recommandationsRemediation?: string[];
  brevetEligible?: boolean;
}

export interface Chapitre {
  id: string;
  titre: string;
  dureeEstimeeMin: number;
  description: string;
  contenuHtml: string;
  medias?: string[];
  exercices: Exercice[];
  // Professor & Healthy Learning Enhancements
  pointsCles?: string[]; // Flash-mémoire / info-bulle de synthèse
  rappelPrecedent?: string; // Rappel bienveillant du chapitre précédent
  conseilProfesseur?: string; // Conseil du professeur pour assimiler sans stress
  formuleCle?: string; // Formule ou règle d'or à retenir
  astuceTerrain?: string; // Exemple ou astuce pratique
}

export interface Cours {
  id: string;
  domaine: Domaine;
  domaineNom: string;
  icon: string;
  titre: string;
  description: string;
  niveau: NiveauDifficulte;
  dureeHeures: number;
  objectifs: string[];
  competences: string[];
  chapitres: Chapitre[];
  devoirs?: DevoirMaison[];
  titreBrevet?: string;
  preRequis: string[];
  certifiant: boolean;
  scoreMinValidation: number; // e.g. 0.70 (70%)
  dureeValiditeMois: number;
  colorClass: string;
}

export interface Certification {
  id: string;
  nom: string;
  domaine: Domaine;
  domaineNom: string;
  niveau: NiveauDifficulte;
  dateObtention: string;
  dateExpiration: string;
  score: number; // 0 to 1
  numeroVerification: string; // Hash unique e.g. DOIT-7A3B9F2E1D8C4B6A
  userId: string;
  userName: string;
  coursId: string;
  coursTitre: string;
  valide: boolean;
  mention?: string;
}

export interface TentativeTest {
  id: string;
  userId: string;
  coursId: string;
  dateDebut: string;
  dateFin?: string;
  reponses: Record<string, number | string>;
  score: number;
  reussi: boolean;
  tempsPriseSec: number;
  certification?: Certification;
}

export interface Badge {
  id: string;
  titre: string;
  description: string;
  icon: string;
  obtenu: boolean;
  dateObtention?: string;
  categorie: 'progression' | 'excellence' | 'vitesse' | 'specialite';
}

export interface Utilisateur {
  id: string;
  nom: string;
  email: string;
  role: 'etudiant' | 'formateur' | 'entreprise' | 'admin';
  niveauGlobal: number;
  xp: number;
  pointsExperience?: number;
  streakJours: number;
  coursSuivis: string[]; // coursIds
  coursTermines: string[]; // coursIds
  chapitresTermines: string[]; // chapitreIds
  certifications: Certification[];
  brevetsObtenus?: BrevetProfessionnel[];
  devoirsRendus?: Record<string, SoumissionDevoir>;
  progressionParCours: Record<string, number>; // 0 to 100
  badges: Badge[];
  tempsApprentissageMinutes: number;
}

export interface CollaborateurB2B {
  id: string;
  nom: string;
  poste: string;
  departement: string;
  coursAssignes: string[];
  certificationsObtenues: number;
  progressionMoyenne: number;
  scoreMoyen: number;
  statut: 'Actif' | 'En attente' | 'Certifié';
}
