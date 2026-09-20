import { FlashcardItem, Domaine } from '../types';

export const FLASHCARDS_DATA: FlashcardItem[] = [
  // Électricité
  {
    id: 'fc_elec_1',
    coursId: 'elec_101',
    domaine: Domaine.ELECTRICITE,
    domaineNom: 'Électricité Industrielle',
    chapitreTitre: '1. Grandeurs Électriques & Loi d’Ohm',
    recto: 'Quelle est la formule fondamentale reliant la Tension, la Résistance et l\'Intensité ?',
    verso: 'U = R × I\n(U en Volts, R en Ohms, I en Ampères)',
    formule: 'U = R × I  |  P = U × I',
    astuce: 'Pensez à la pression d\'eau (U) poussant le débit (I) à travers un rétrécissement (R).',
    maitrise: 'non_vu'
  },
  {
    id: 'fc_elec_2',
    coursId: 'elec_101',
    domaine: Domaine.ELECTRICITE,
    domaineNom: 'Électricité Industrielle',
    chapitreTitre: '2. Lois de Kirchhoff',
    recto: 'Que stipule la Loi des Nœuds ?',
    verso: 'La somme algébrique des courants entrant dans un nœud est égale à la somme des courants qui en sortent (conservation de la charge électrique).',
    formule: 'Σ I_entrants = Σ I_sortants',
    astuce: 'Ce qui rentre dans un tuyau doit obligatoirement en ressortir.',
    maitrise: 'non_vu'
  },
  {
    id: 'fc_elec_3',
    coursId: 'elec_101',
    domaine: Domaine.ELECTRICITE,
    domaineNom: 'Électricité Industrielle',
    chapitreTitre: '4. Mesures Sécurisées',
    recto: 'Comment doit-on brancher un Ampèremètre et un Voltmètre ?',
    verso: '• Voltmètre : Toujours en PARALLÈLE (impédance infinie).\n• Ampèremètre : Toujours en SÉRIE (impédance nulle, risque de court-circuit si branché en parallèle !).',
    astuce: 'Le voltmètre regarde à côté, l\'ampèremètre se place sur le chemin.',
    maitrise: 'non_vu'
  },

  // Électronique
  {
    id: 'fc_elec_4',
    coursId: 'elec_201',
    domaine: Domaine.ELECTRONIQUE,
    domaineNom: 'Électronique Appliquée',
    chapitreTitre: '1. Transistors MOSFET',
    recto: 'Comment se commande un transistor MOSFET par rapport à un transistor bipolaire ?',
    verso: 'Le MOSFET se commande en TENSION sur sa grille (Vgs) avec un courant de commande quasi-nul, alors que le bipolaire se commande en COURANT de base (Ib).',
    formule: 'Vgs > Vth pour conduire',
    astuce: 'Grille isolée = condensateur = aucune consommation statique de courant.',
    maitrise: 'non_vu'
  },

  // Mécanique
  {
    id: 'fc_mec_1',
    coursId: 'mec_101',
    domaine: Domaine.MECANIQUE,
    domaineNom: 'Mécanique & RDM',
    chapitreTitre: '1. Statique & Équilibre',
    recto: 'Quelles sont les deux conditions du Principe Fondamental de la Statique (PFS) ?',
    verso: '1) La somme vectorielle des forces extérieures est nulle : Σ F_ext = 0\n2) La somme vectorielle des moments en tout point est nulle : Σ M_A(F) = 0',
    formule: 'Σ F = 0  et  Σ M = 0',
    astuce: 'Pas de translation (forces) et pas de rotation (moments).',
    maitrise: 'non_vu'
  },
  {
    id: 'fc_mec_2',
    coursId: 'mec_101',
    domaine: Domaine.MECANIQUE,
    domaineNom: 'Mécanique & RDM',
    chapitreTitre: '2. Résistance des Matériaux',
    recto: 'Quelle est la différence entre le domaine élastique et le domaine plastique ?',
    verso: '• Domaine élastique (σ < Re) : La déformation est réversible (le matériau reprend sa forme initiale).\n• Domaine plastique (σ > Re) : La déformation est permanente et irréversible.',
    formule: 'σ = E × ε (Loi de Hooke)',
    astuce: 'Re est la frontière élastique à ne jamais dépasser.',
    maitrise: 'non_vu'
  },

  // IT
  {
    id: 'fc_it_1',
    coursId: 'it_101',
    domaine: Domaine.INFORMATIQUE_FONDAMENTALE,
    domaineNom: 'Informatique & Réseaux',
    chapitreTitre: '2. Adressage IP & CIDR',
    recto: 'Combien d\'adresses IP d\'hôtes utilisables offre un sous-réseau avec un masque /24 ?',
    verso: '254 hôtes utilisables.\n(2^(32-24) = 256 adresses - 2 réservées pour le Réseau et le Broadcast).',
    formule: '2^(32 - Masque) - 2',
    astuce: 'Toujours soustraire 2 (adresse réseau .0 et broadcast .255).',
    maitrise: 'non_vu'
  },

  // Maintenance
  {
    id: 'fc_maint_1',
    coursId: 'maint_101',
    domaine: Domaine.MAINTENANCE_INDUSTRIELLE,
    domaineNom: 'Maintenance Industrielle',
    chapitreTitre: '2. Indicateurs MTBF & MTTR',
    recto: 'Quelle est la différence entre MTBF et MTTR ?',
    verso: '• MTBF (Mean Time Between Failures) : Mesure la FIABILITÉ (temps moyen entre deux pannes).\n• MTTR (Mean Time To Repair) : Mesure la MAINTENABILITÉ (temps moyen pour réparer).',
    formule: 'MTBF = TBF / Nb Pannes  |  MTTR = TTR / Nb Pannes',
    astuce: 'MTBF doit être le plus GRAND possible, MTTR le plus PETIT possible.',
    maitrise: 'non_vu'
  },

  // HSE
  {
    id: 'fc_hse_1',
    coursId: 'hse_101',
    domaine: Domaine.HSE,
    domaineNom: 'HSE & Sécurité au Travail',
    chapitreTitre: '1. Consignation Électrique',
    recto: 'Quelles sont les étapes obligatoires d\'une consignation électrique NFC 18-510 ?',
    verso: '1) Séparation (coupure omnipolaire)\n2) Condamnation (cadenassage LOTO)\n3) Identification de l\'ouvrage\n4) Vérification d\'Absence de Tension (VAT)\n5) Mise à la terre et en court-circuit (MALT/CC) si nécessaire.',
    astuce: 'Mnémotechnique : S-C-I-V-M (Séparer, Condamner, Identifier, Vérifier, Mettre à la terre).',
    maitrise: 'non_vu'
  },

  // Leadership & Méthode DESC
  {
    id: 'fc_lead_1',
    coursId: 'lead_101',
    domaine: Domaine.LEADERSHIP_TECHNIQUE,
    domaineNom: 'Leadership & Soft Skills Techniques',
    chapitreTitre: '2. Communication Assertive',
    recto: 'Que signifient les 4 lettres de la méthode DESC pour formuler un feedback constructif ?',
    verso: 'D : Décrire les faits objectifs\nE : Exprimer ses émotions et conséquences\nS : Spécifier des solutions concrètes\nC : Conclure positivement sur les bénéfices mutuels',
    astuce: 'Faits sans jugement -> Ressenti -> Solution -> Gagnant-gagnant.',
    maitrise: 'non_vu'
  },

  // Anglais TOEFL
  {
    id: 'fc_toefl_1',
    coursId: 'toefl_101',
    domaine: Domaine.ANGLAIS_TOEFL,
    domaineNom: 'Anglais TOEFL',
    chapitreTitre: '2. Reading Section - Skimming & Scanning',
    recto: 'What is the main difference between Skimming and Scanning in the TOEFL Reading section?',
    verso: '• Skimming = Reading quickly for the main idea and overall structure (topic sentences).\n• Scanning = Searching rapidly for specific keywords (dates, names, scientific terms).',
    astuce: 'Skimming gives the map, Scanning finds the treasure.',
    maitrise: 'non_vu'
  },
  {
    id: 'fc_toefl_2',
    coursId: 'toefl_101',
    domaine: Domaine.ANGLAIS_TOEFL,
    domaineNom: 'Anglais TOEFL',
    chapitreTitre: '9. Speaking Task 1 - Independent Speaking',
    recto: 'What is the recommended time allocation for Speaking Task 1?',
    verso: '• 15 seconds to prepare\n• 45 seconds to record your speech',
    astuce: 'State your choice immediately in the first 5 seconds.',
    maitrise: 'non_vu'
  },
  {
    id: 'fc_toefl_3',
    coursId: 'toefl_101',
    domaine: Domaine.ANGLAIS_TOEFL,
    domaineNom: 'Anglais TOEFL',
    chapitreTitre: '11. Writing Task 1 - Integrated Essay',
    recto: 'What is the core structure of the TOEFL Integrated Writing essay?',
    verso: 'Contrasting the 3 main points of the reading passage with the 3 counter-arguments presented in the professor\'s lecture (180-220 words in 20 minutes).',
    astuce: 'Never express your personal opinion in Task 1!',
    maitrise: 'non_vu'
  }
];
