import { Domaine, NiveauDifficulte, TypeQuestion, Cours } from '../../types';

export const COURSE_ELECTRICITE: Cours = {
  id: 'elec_101',
  domaine: Domaine.ELECTRICITE,
  domaineNom: 'Électricité',
  icon: '⚡',
  titre: "Électricité Industrielle & Électrotechnique Fondamentale",
  description: 'Cursus complet de 15 chapitres avec calculs fondamentaux, lois de Kirchhoff, triphasé, transformateurs, moteurs asynchrones, régimes de neutre et sécurité NF C 18-510.',
  niveau: NiveauDifficulte.DEBUTANT,
  dureeHeures: 45,
  colorClass: 'from-amber-500 to-yellow-600',
  titreBrevet: "Brevet Professionnel d'Électrotechnique & Électricité Industrielle",
  objectifs: [
    'Maîtriser les grandeurs physiques fondamentales (U, I, R, P, S, Q, cos φ)',
    'Résoudre des réseaux électriques continus et alternatifs triphasés',
    'Dimensionner et protéger les moteurs électriques et transformateurs industriels',
    'Mettre en œuvre les schémas de liaison à la terre (TT, TN, IT) et respecter la norme NF C 18-510',
    'Diagnostiquer méthodiquement les pannes et réaliser des mesures sous habilitation'
  ],
  competences: [
    "Loi d'Ohm & Lois de Kirchhoff",
    'Puissances Active, Réactive & Facteur de puissance',
    'Réseaux Triphasés Équilibrés',
    'Moteurs Asynchrones & Démarrage',
    'Schémas de Liaison à la Terre (SLT)',
    'Sécurité & Habilitation NF C 18-510',
    'Diagnostic et Maintenance Réseau'
  ],
  preRequis: ['Mathématiques de base (équations du 1er degré, trigonométrie élémentaire)'],
  certifiant: true,
  scoreMinValidation: 0.7,
  dureeValiditeMois: 36,
  devoirs: [
    {
      id: 'elec_dev_1',
      numero: 1,
      titre: 'Devoir n°1 : Étude de Réseau Continu & Dimensionnement Résistif',
      chapitresCouverts: 'Chapitres 1 à 5',
      dureeEstimeeMin: 45,
      noteMax: 20,
      coefficient: 2,
      description: 'Calcul d’un pont diviseur de tension industriel alimentant un capteur de pression et bilan des pertes par effet Joule.',
      miseEnSituation: 'Dans une armoire de distribution 24 V DC, un transmetteur de pression nécessite une tension de référence de 8 V obtenue par pont diviseur résistif. Vous devez dimensionner les résistances et calculer l’échauffement thermique.',
      questions: [
        {
          id: 'q1',
          titre: 'Calcul de la résistance équivalente et du pont diviseur',
          enonce: 'Une tension continue de 24 V alimente deux résistances en série R1 = 80 Ω et R2 = 40 Ω. Quelle est la tension U2 prélevée aux bornes de R2 ?',
          points: 7,
          type: 'calcul',
          options: ['6 V', '8 V', '12 V', '16 V'],
          reponseCorrecteIndex: 1,
          solutionDetaillee: 'Formule du pont diviseur : U2 = E × (R2 / (R1 + R2)) = 24 × (40 / 120) = 24 × (1/3) = 8.0 V.',
          baremeDetail: [
            'Formule du pont diviseur : 3 pts',
            'Application numérique exacte : 2 pts',
            'Précision de l’unité (Volts) : 2 pts'
          ]
        },
        {
          id: 'q2',
          titre: 'Bilan de puissance et dissipation thermique',
          enonce: 'Quelle est la puissance thermique totale dissipée par effet Joule dans l’ensemble du circuit (R1 + R2) sous 24 V ?',
          points: 7,
          type: 'calcul',
          options: ['4.8 W', '2.4 W', '9.6 W', '0.2 W'],
          reponseCorrecteIndex: 0,
          solutionDetaillee: 'Courant total : I = U / Req = 24 / 120 = 0.2 A. Puissance totale P = U × I = 24 × 0.2 = 4.8 W (ou P = U² / Req = 576 / 120 = 4.8 W).',
          baremeDetail: [
            'Calcul du courant de branche I = 0.2 A : 3 pts',
            'Calcul de la puissance totale P = 4.8 W : 4 pts'
          ]
        },
        {
          id: 'q3',
          titre: 'Choix sécuritaire de la puissance des composants',
          enonce: 'La résistance R1 (80 Ω) dissipe P1 = R1 × I² = 80 × (0.2)² = 3.2 W. Quel calibre de puissance commercial standard devez-vous sélectionner au minimum pour garantir une marge thermique sécurisée de 50% ?',
          points: 6,
          type: 'cas_pratique',
          options: ['Résistance 1/4 W (0.25 W)', 'Résistance 2 W', 'Résistance 5 W céramique vitrifiée', 'Résistance 100 W radiateur'],
          reponseCorrecteIndex: 2,
          solutionDetaillee: 'Avec 3.2 W dissipés, un modèle 5 W offre la marge minimale nécessaire (3.2 × 1.5 = 4.8 W < 5 W) pour éviter toute surchauffe.',
          baremeDetail: [
            'Raisonnement sur la marge de sécurité thermique : 3 pts',
            'Sélection du boîtier 5 W adapté : 3 pts'
          ]
        }
      ]
    },
    {
      id: 'elec_dev_2',
      numero: 2,
      titre: 'Devoir n°2 : Dimensionnement Triphasé & Compensation Réactive',
      chapitresCouverts: 'Chapitres 6 à 10',
      dureeEstimeeMin: 60,
      noteMax: 20,
      coefficient: 2,
      description: 'Boucherot triphasé, calcul du courant en ligne d’un atelier mécanique et dimensionnement de la batterie de condensateurs pour relever le cos φ.',
      miseEnSituation: 'Un atelier industriel est alimenté en triphasé 400 V / 50 Hz. Il absorbe une puissance active totale P = 45 kW avec un facteur de puissance cos φ = 0.72 arrière. Le gestionnaire d’énergie exige de relever le cos φ à 0.95 pour éliminer les pénalités tarifaires.',
      questions: [
        {
          id: 'q1',
          titre: 'Calcul du courant en ligne initial',
          enonce: 'Quelle est la valeur du courant efficace en ligne I1 absorbé par l’atelier avant compensation ? (U = 400 V)',
          points: 7,
          type: 'calcul',
          options: ['90.2 A', '65.0 A', '125.4 A', '45.0 A'],
          reponseCorrecteIndex: 0,
          solutionDetaillee: 'Formule : P = √3 × U × I × cos φ => I = P / (√3 × U × cos φ) = 45 000 / (1.732 × 400 × 0.72) = 45 000 / 498.8 = 90.2 A.',
          baremeDetail: [
            'Formule de la puissance active triphasée : 3 pts',
            'Calcul exact du dénominateur : 2 pts',
            'Résultat I = 90.2 A : 2 pts'
          ]
        },
        {
          id: 'q2',
          titre: 'Calcul de la puissance réactive des condensateurs',
          enonce: 'Pour passer de tan φ1 = 0.964 (cos φ = 0.72) à tan φ2 = 0.329 (cos φ = 0.95), quelle puissance réactive Qc la batterie de condensateurs doit-elle fournir ?',
          points: 7,
          type: 'calcul',
          options: ['28.6 kvar', '14.2 kvar', '45.0 kvar', '8.5 kvar'],
          reponseCorrecteIndex: 0,
          solutionDetaillee: 'Qc = P × (tan φ1 - tan φ2) = 45 kW × (0.964 - 0.329) = 45 × 0.635 = 28.58 kvar ≈ 28.6 kvar.',
          baremeDetail: [
            'Formule de compensation Qc = P(tan φ1 - tan φ2) : 3 pts',
            'Application et résultat 28.6 kvar : 4 pts'
          ]
        },
        {
          id: 'q3',
          titre: 'Bénéfice sur la réduction de l’intensité en ligne',
          enonce: 'Après compensation à cos φ = 0.95, le nouveau courant en ligne devient I2 = 45 000 / (√3 × 400 × 0.95) = 68.4 A. Quel est le gain en pourcentage sur les pertes par effet Joule dans les câbles d’alimentation (proportionnelles à I²) ?',
          points: 6,
          type: 'cas_pratique',
          options: ['Gain de 42.5% de réduction des pertes', 'Gain de 15% seulement', 'Pertes inchangées', 'Gain de 80%'],
          reponseCorrecteIndex: 0,
          solutionDetaillee: 'Rapport des pertes = (I2 / I1)² = (68.4 / 90.2)² = (0.758)² = 0.575 => Réduction de 1 - 0.575 = 42.5% des pertes thermiques dans les conducteurs.',
          baremeDetail: [
            'Raisonnement sur la proportionnalité I² : 3 pts',
            'Calcul exact du pourcentage de réduction (42.5%) : 3 pts'
          ]
        }
      ]
    },
    {
      id: 'elec_dev_3',
      numero: 3,
      titre: 'Devoir n°3 : Schémas de Neutre, Protection DDR & Diagnostic de Défaut',
      chapitresCouverts: 'Chapitres 11 à 15',
      dureeEstimeeMin: 60,
      noteMax: 20,
      coefficient: 2,
      description: 'Étude d’un défaut d’isolement franc dans un régime TT, calcul de la tension de contact et choix du dispositif différentiel résiduel (DDR).',
      miseEnSituation: 'Sur une installation tertiaire en régime TT alimentée en 230 V / 400 V, la prise de terre des masses a une résistance Ra = 25 Ω. Un défaut franc d’isolement survient sur un convoyeur métallique.',
      questions: [
        {
          id: 'q1',
          titre: 'Calcul de la tension de contact présumée',
          enonce: 'Si le neutre du transformateur a une résistance Rn = 10 Ω et que la masse du récepteur a Ra = 25 Ω, quelle est la tension de contact Uc qui apparaît sur la carcasse lors du défaut avant déclenchement ?',
          points: 7,
          type: 'calcul',
          options: ['164.3 V', '230.0 V', '50.0 V', '12.0 V'],
          reponseCorrecteIndex: 0,
          solutionDetaillee: 'Courant de défaut Id = V / (Ra + Rn) = 230 / (25 + 10) = 230 / 35 = 6.57 A. Tension de contact Uc = Ra × Id = 25 × 6.57 = 164.3 V. Cette tension est très supérieure à la tension limite de sécurité Ul (50 V en local sec).',
          baremeDetail: [
            'Calcul du courant de boucle Id : 3 pts',
            'Calcul de la tension de contact Uc = 164.3 V : 3 pts',
            'Comparaison avec Ul (50 V) : 1 pt'
          ]
        },
        {
          id: 'q2',
          titre: 'Sensibilité maximale du différentiel DDR',
          enonce: 'Selon la norme NF C 15-100 en régime TT, la condition de coupure automatique exige Ra × IΔn ≤ Ul (avec Ul = 50 V). Pour Ra = 25 Ω, quelle est la sensibilité différentielle IΔn maximale admissible ?',
          points: 7,
          type: 'cas_pratique',
          options: ['IΔn ≤ 2 A (un DDR 300 mA ou 500 mA convient parfaitement)', 'IΔn ≤ 30 mA obligatoirement', 'IΔn ≤ 10 A', 'Pas de DDR nécessaire'],
          reponseCorrecteIndex: 0,
          solutionDetaillee: 'IΔn_max = Ul / Ra = 50 / 25 = 2.0 A. Tout DDR de calibre résiduel inférieur ou égal à 2 A (ex: 300 mA ou 500 mA) assure la protection contre les contacts indirects.',
          baremeDetail: [
            'Formule normative Ra × IΔn ≤ Ul : 3 pts',
            'Calcul de la valeur limite IΔn = 2 A : 4 pts'
          ]
        },
        {
          id: 'q3',
          titre: 'Procédure de consignation électrique en 5 étapes',
          enonce: 'Avant toute intervention de maintenance sur l’armoire, quelle est la 4ème étape obligatoire de la consignation selon la norme NF C 18-510 ?',
          points: 6,
          type: 'cas_pratique',
          options: [
            'Vérification d’Absence de Tension (VAT) immédiatement suivie de la mise à la terre et en court-circuit (MALT/CC)',
            'Remise sous tension pour tester',
            'Nettoyage de l’armoire à l’eau',
            'Appel au chef de chantier sans couper le courant'
          ],
          reponseCorrecteIndex: 0,
          solutionDetaillee: 'Les 5 étapes de la consignation sont : 1. Séparation, 2. Condamnation, 3. Identification, 4. Vérification d’Absence de Tension (VAT), 5. Mise à la terre et en court-circuit (MALT/CC).',
          baremeDetail: [
            'Identification de la VAT : 3 pts',
            'Connaissance de l’ordre des 5 étapes NF C 18-510 : 3 pts'
          ]
        }
      ]
    }
  ],
  chapitres: [
    {
      id: 'elec_ch1',
      titre: '1. Grandeurs Fondamentales & Loi d’Ohm',
      dureeEstimeeMin: 35,
      description: 'Tension, intensité, résistance, puissance continue et loi d’Ohm.',
      pointsCles: ['U = R × I', 'P = U × I = R × I²', 'Analogie hydraulique pression/débit'],
      formuleCle: 'U = R × I',
      astuceTerrain: 'Vérifier toujours la tension nominale aux bornes avant d’accuser un récepteur.',
      contenuHtml: `<p>Définitions physiques, unités internationales (Volt, Ampère, Ohm, Watt) et relation fondamentale d'Ohm.</p>`,
      exercices: [{
        id: 'elec_ch1_ex1',
        type: TypeQuestion.QCM,
        question: "Quelle tension U mesure-t-on aux bornes d'une résistance de 12 Ω traversée par un courant de 2.5 A ?",
        reponsesPossibles: ['30 V', '4.8 V', '14.5 V', '48 V'],
        reponsesCorrectes: [0],
        explication: "U = R × I = 12 × 2.5 = 30 V.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'elec_ch2',
      titre: '2. Lois de Kirchhoff & Associations de Résistances',
      dureeEstimeeMin: 40,
      description: 'Loi des nœuds, loi des mailles, résistances en série et en parallèle, ponts diviseurs.',
      pointsCles: ['Σ I_entrants = Σ I_sortants', 'Σ U_mailles = 0', 'Série Req=R1+R2, Parallèle 1/Req=1/R1+1/R2'],
      formuleCle: 'Req_serie = R1 + R2 | Req_para = (R1 × R2) / (R1 + R2)',
      contenuHtml: `<p>Étude des circuits maillés et des ponts diviseurs de tension et de courant.</p>`,
      exercices: [{
        id: 'elec_ch2_ex1',
        type: TypeQuestion.CHIFFREE,
        question: "Deux résistances de 60 Ω et 30 Ω sont branchées en parallèle. Quelle est la résistance équivalente Req ?",
        reponsesPossibles: ['20 Ω', '90 Ω', '45 Ω', '15 Ω'],
        reponsesCorrectes: [0],
        explication: "Req = (60 × 30) / (60 + 30) = 1800 / 90 = 20 Ω.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'elec_ch3',
      titre: '3. Puissance, Énergie & Effet Joule Industriel',
      dureeEstimeeMin: 35,
      description: 'Pertes par effet Joule, calcul de consommation en kWh et dimensionnement des câbles.',
      pointsCles: ['W = P × t', '1 kWh = 3.6 × 10⁶ Joules', 'Échauffement thermique dans les armoires'],
      formuleCle: 'P = R × I²',
      contenuHtml: `<p>Analyse de la dissipation thermique et optimisation de l'efficacité énergétique.</p>`,
      exercices: [{
        id: 'elec_ch3_ex1',
        type: TypeQuestion.QCM,
        question: "Combien d'énergie en kWh consomme un appareil de 1 500 W fonctionnant pendant 4 heures ?",
        reponsesPossibles: ['6 kWh', '375 kWh', '6 000 kWh', '1.5 kWh'],
        reponsesCorrectes: [0],
        explication: "E = P × t = 1.5 kW × 4 h = 6 kWh.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'elec_ch4',
      titre: '4. Mesures Sécurisées au Multimètre (CAT III / IV)',
      dureeEstimeeMin: 40,
      description: 'Voltmètre en dérivation, ampèremètre en série, pince ampèremétrique et catégories de surtension.',
      pointsCles: ['Voltmètre : Parallèle (haute impédance)', 'Ampèremètre : Série', 'Ohmmètre : Hors tension impératif'],
      formuleCle: 'VAT : Vérification d\'Absence de Tension sur les 3 phases et le neutre.',
      contenuHtml: `<p>Règles d'or pour la manipulation d'appareils de mesure sans risque d'arc électrique.</p>`,
      exercices: [{
        id: 'elec_ch4_ex1',
        type: TypeQuestion.QCM,
        question: "Quel est le risque majeur si l'on branche un ampèremètre en parallèle directement sur les bornes 230 V ?",
        reponsesPossibles: ['Court-circuit direct et risque d\'arc électrique (Arc Flash)', 'La mesure sera simplement inversée', 'Aucun risque', 'La tension va chuter à 12 V'],
        reponsesCorrectes: [0],
        explication: "L'ampèremètre ayant une impédance interne quasi nulle, le brancher en parallèle provoque un court-circuit franc.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'elec_ch5',
      titre: '5. Courant Alternatif Sinusoïdal & Valeurs Efficaces',
      dureeEstimeeMin: 40,
      description: 'Fréquence (50 Hz), période T, valeur crête Umax, valeur efficace Ueff et déphasage.',
      pointsCles: ['Ueff = Umax / √2 ≈ 0.707 × Umax', 'T = 1 / f (20 ms en 50 Hz)', 'Vecteurs de Fresnel'],
      formuleCle: 'Ueff = Umax / √2 = 230 V (Umax ≈ 325 V)',
      contenuHtml: `<p>Comportement des signaux alternatifs sinusoïdaux et représentation vectorielle.</p>`,
      exercices: [{
        id: 'elec_ch5_ex1',
        type: TypeQuestion.CHIFFREE,
        question: "Pour une tension alternative sinusoïdale de 230 V efficace, quelle est la valeur crête Umax ?",
        reponsesPossibles: ['325 V', '230 V', '400 V', '162 V'],
        reponsesCorrectes: [0],
        explication: "Umax = Ueff × √2 = 230 × 1.414 = 325.2 V.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'elec_ch6',
      titre: '6. Puissances Active (P), Réactive (Q), Apparente (S) & Cos φ',
      dureeEstimeeMin: 45,
      description: 'Triangle des puissances de Boucherot, facteur de puissance et pénalités réactives.',
      pointsCles: ['P en Watts (W)', 'Q en Voltampères Réactifs (var)', 'S en Voltampères (VA)', 'S² = P² + Q²'],
      formuleCle: 'S = √(P² + Q²) = U × I | P = S × cos φ',
      contenuHtml: `<p>Analyse complète du triangle des puissances et méthode de relèvement du cos φ par condensateurs.</p>`,
      exercices: [{
        id: 'elec_ch6_ex1',
        type: TypeQuestion.QCM,
        question: "Quelle est l'unité de la puissance réactive Q ?",
        reponsesPossibles: ['var (Voltampère réactif)', 'Watt (W)', 'Voltampère (VA)', 'Joule (J)'],
        reponsesCorrectes: [0],
        explication: "La puissance réactive s'exprime en var (ou kvar pour les installations industrielles).",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'elec_ch7',
      titre: '7. Électromagnétisme, Bobines & Induction de Faraday',
      dureeEstimeeMin: 40,
      description: 'Loi de Lenz-Faraday, champ magnétique B, inductance L et force électromotrice induite.',
      pointsCles: ['e = - dΦ/dt', 'Énergie magnétique : Em = 1/2 × L × I²', 'Phénomène de surtension à la coupure'],
      formuleCle: 'e = - L × (di/dt)',
      contenuHtml: `<p>Principes d'induction magnétique au cœur des moteurs, relais et transformateurs.</p>`,
      exercices: [{
        id: 'elec_ch7_ex1',
        type: TypeQuestion.QCM,
        question: "Que se passe-t-il lors de l'ouverture brutale d'un circuit comportant une forte inductance sans diode de roue libre ?",
        reponsesPossibles: ['Une forte surtension inductive se produit aux bornes du commutateur', 'Le courant s\'annule instantanément sans tension', 'La bobine se refroidit immédiatement', 'La fréquence augmente à 1000 Hz'],
        reponsesCorrectes: [0],
        explication: "La bobine s'oppose à la variation de courant en générant une surtension e = -L(di/dt) provoquant un arc électrique.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'elec_ch8',
      titre: '8. Transformateurs Électriques & Rendement Industriel',
      dureeEstimeeMin: 45,
      description: 'Rapport de transformation m = N2/N1 = U2/U1, essais à vide et en court-circuit, pertes fer et cuivre.',
      pointsCles: ['m = U2/U1 = I1/I2 = N2/N1', 'Pertes Fer (hystérésis + Foucault)', 'Pertes Cuivre (effet Joule)'],
      formuleCle: 'm = U2 / U1 | η = P2 / (P2 + P_fer + P_joule)',
      contenuHtml: `<p>Modélisation et dimensionnement des transformateurs monophasés et triphasés HTA/BT.</p>`,
      exercices: [{
        id: 'elec_ch8_ex1',
        type: TypeQuestion.CHIFFREE,
        question: "Un transformateur parfait abaisse la tension de 400 V à 24 V. Quel est son rapport de transformation m ?",
        reponsesPossibles: ['0.06', '16.67', '0.60', '0.024'],
        reponsesCorrectes: [0],
        explication: "m = U2 / U1 = 24 / 400 = 0.06 (soit 6/100).",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'elec_ch9',
      titre: '9. Réseaux Triphasés Équilibrés : Étoile (Y) & Triangle (Δ)',
      dureeEstimeeMin: 45,
      description: 'Tensions simples (V = 230 V) et composées (U = 400 V), relation U = V × √3, courants de ligne et de phase.',
      pointsCles: ['U = √3 × V (400 V = √3 × 230 V)', 'Couplage Étoile : I_ligne = I_phase, U = √3 × V', 'Couplage Triangle : U_phase = U_ligne, I_ligne = √3 × I_phase'],
      formuleCle: 'P_tri = √3 × U × I × cos φ',
      contenuHtml: `<p>Maîtrise des réseaux triphasés industriels et choix du couplage selon la plaque signalétique.</p>`,
      exercices: [{
        id: 'elec_ch9_ex1',
        type: TypeQuestion.QCM,
        question: "Sur un réseau triphasé 230V/400V, quelle est la tension mesurée entre deux phases (tension composée U) ?",
        reponsesPossibles: ['400 V', '230 V', '690 V', '0 V'],
        reponsesCorrectes: [0],
        explication: "La tension composée entre deux conducteurs de phase est de 400 V (V × √3 = 230 × 1.732 = 400 V).",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'elec_ch10',
      titre: '10. Moteurs Asynchrones Triphasés (MAS) & Démarrage',
      dureeEstimeeMin: 50,
      description: 'Stator, rotor à cage d’écureuil, glissement g, vitesse de synchronisme Ns = 60×f / p et procédés de démarrage (direct, étoile-triangle, progressif).',
      pointsCles: ['Ns = (60 × f) / p (tr/min)', 'Glissement g = (Ns - N) / Ns', 'Courant de démarrage Id = 4 à 8 In en direct'],
      formuleCle: 'g = (Ns - N) / Ns | P_utile = C × Ω',
      contenuHtml: `<p>Étude électromécanique du moteur asynchrone, plaque signalétique et protections thermiques.</p>`,
      exercices: [{
        id: 'elec_ch10_ex1',
        type: TypeQuestion.CHIFFREE,
        question: "Pour un moteur à 2 paires de pôles (p=2) sous f=50 Hz, quelle est la vitesse de synchronisme Ns en tr/min ?",
        reponsesPossibles: ['1 500 tr/min', '3 000 tr/min', '1 000 tr/min', '750 tr/min'],
        reponsesCorrectes: [0],
        explication: "Ns = (60 × f) / p = (60 × 50) / 2 = 3 000 / 2 = 1 500 tr/min.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'elec_ch11',
      titre: '11. Schémas de Liaison à la Terre (SLT / Régimes TT, TN, IT)',
      dureeEstimeeMin: 45,
      description: 'Protection contre les contacts indirects, boucle de défaut, régime TT (DDR obligatoire), régime TN (surintensité) et IT (continuité de service avec CPI).',
      pointsCles: ['TT : Neutre à la terre, masses à la terre (DDR requis)', 'TN (TNS/TNC) : Masses au neutre (défaut = court-circuit)', 'IT : Neutre isolé, 1er défaut toléré'],
      formuleCle: 'Ra × IΔn ≤ 50 V (Condition de sécurité en TT)',
      contenuHtml: `<p>Comparatif normatif NF C 15-100 des trois régimes de neutre et applications industrielles.</p>`,
      exercices: [{
        id: 'elec_ch11_ex1',
        type: TypeQuestion.QCM,
        question: "Quel régime de neutre est privilégié dans les hôpitaux et les usines à feu continu pour maintenir l'alimentation au premier défaut d'isolement ?",
        reponsesPossibles: ['Régime IT (Neutre isolé ou impédant avec Contrôleur Permanent d\'Isolement)', 'Régime TT', 'Régime TN-C', 'Régime monophasé sans terre'],
        reponsesCorrectes: [0],
        explication: "Le régime IT n'engendre pas de déclenchement au premier défaut franc, garantissant la continuité absolue du service.",
        points: 5,
        difficulte: NiveauDifficulte.AVANCE
      }]
    },
    {
      id: 'elec_ch12',
      titre: '12. Appareillage de Protection & Sélectivité (DDR, Disjoncteurs, Fusibles)',
      dureeEstimeeMin: 45,
      description: 'Courbes de déclenchement (B, C, D), pouvoir de coupure Icu, fusibles aM / gG, différentiels type AC, A, B et sélectivité ampèremétrique et chronométrique.',
      pointsCles: ['Courbe C (Standard), Courbe D (Moteurs avec fort appel)', 'Fusibles aM (Accompagnement Moteur)', 'Sélectivité totale'],
      formuleCle: 'Icu ≥ Icc_max (Pouvoir de coupure supérieur au court-circuit présumé)',
      contenuHtml: `<p>Sélection coordonnée des protections thermomagnétiques et différentielles.</p>`,
      exercices: [{
        id: 'elec_ch12_ex1',
        type: TypeQuestion.QCM,
        question: "Quelle courbe de disjoncteur magnétothermique est recommandée pour la protection de moteurs ayant un fort courant d'appel au démarrage ?",
        reponsesPossibles: ['Courbe D (seuil magnétique haut : 10 à 14 In)', 'Courbe B (seuil bas : 3 à 5 In)', 'Courbe Z (ultra-rapide pour semi-conducteurs)', 'Courbe A'],
        reponsesCorrectes: [0],
        explication: "La courbe D tolère les fortes pointes de courant transitoires lors du démarrage des moteurs sans déclencher intempestivement.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'elec_ch13',
      titre: '13. Sécurité Électrique & Norme NF C 18-510 (Habilitations B1, B2, BR, BC)',
      dureeEstimeeMin: 50,
      description: 'Zone d’environnement, EPI (gants isolants, écran facial d’arc flash), les 5 étapes de la consignation et titres d’habilitation.',
      pointsCles: ['Consignation en 5 étapes', 'B1V / B2V (Exécutant/Chargé de travaux sous tension/voisinage)', 'BC (Chargé de consignation)', 'BR (Chargé d\'intervention BT générale)'],
      formuleCle: 'Consignation : 1. Séparer 2. Condamner 3. Identifier 4. VAT 5. MALT/CC',
      contenuHtml: `<p>Réglementation stricte du travail hors tension et au voisinage des pièces nues sous tension.</p>`,
      exercices: [{
        id: 'elec_ch13_ex1',
        type: TypeQuestion.QCM,
        question: "Quel symbole d'habilitation désigne le 'Chargé de Consignation' habilité à consigner une installation électrique BT ?",
        reponsesPossibles: ['BC', 'B1V', 'B0', 'H0V'],
        reponsesCorrectes: [0],
        explication: "L'habilitation BC est spécifiquement dédiée au Chargé de Consignation en basse tension.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'elec_ch14',
      titre: '14. Variateurs de Vitesse Électroniques (VFD / Onduleurs)',
      dureeEstimeeMin: 45,
      description: 'Principe de redressement / filtrage / ondulation MLI (Modulation de Largeur d’Impulsion), loi U/f constante et contrôle vectoriel de flux.',
      pointsCles: ['Loi scalaire U/f = constante', 'Onduleur à IGBT avec découpage PWM', 'Freinage par injection de courant continu et résistance de freinage'],
      formuleCle: 'f variable => Ns = (60 × f) / p réglable de 0 à la vitesse nominale',
      contenuHtml: `<p>Fonctionnement des convertisseurs de fréquence statiques pour le pilotage précis des moteurs.</p>`,
      exercices: [{
        id: 'elec_ch14_ex1',
        type: TypeQuestion.QCM,
        question: "Dans un variateur de vitesse VFD standard à loi U/f, pourquoi conserve-t-on le rapport U/f constant jusqu'à 50 Hz ?",
        reponsesPossibles: ['Pour maintenir le flux magnétique statorique et le couple nominal constants', 'Pour diviser la facture d\'électricité par deux', 'Pour supprimer la terre', 'Pour empêcher le moteur de tourner trop vite'],
        reponsesCorrectes: [0],
        explication: "Garder U/f constant permet de conserver le flux magnétique nominal dans le fer du moteur et donc son couple maximal disponible.",
        points: 5,
        difficulte: NiveauDifficulte.AVANCE
      }]
    },
    {
      id: 'elec_ch15',
      titre: '15. Diagnostic Méthodique de Pannes & Maintenance Réseau',
      dureeEstimeeMin: 50,
      description: 'Arbre des causes, méthode des tiers / dichotomie, recherche d’échauffement par thermographie infrarouge et contrôle d’isolement au mégohmmètre (500 V / 1 000 V DC).',
      pointsCles: ['Contrôle d\'isolement > 0.5 MΩ (NF C 15-100)', 'Détection de déséquilibre de phase', 'Thermographie des connexions desserrées'],
      formuleCle: 'R_isolement ≥ 1 000 Ω/V (ex: ≥ 500 kΩ sous 500 V DC)',
      contenuHtml: `<p>Démarche rigoureuse du technicien pour isoler, analyser et remédier aux défaillances industrielles.</p>`,
      exercices: [{
        id: 'elec_ch15_ex1',
        type: TypeQuestion.QCM,
        question: "Selon la norme NF C 15-100, quelle est la valeur minimale de résistance d'isolement exigée pour une installation BT sous 500 V DC ?",
        reponsesPossibles: ['≥ 0.5 MΩ (500 000 Ω)', '≥ 10 Ω', '≥ 100 Ω', 'Exactement 0 Ω'],
        reponsesCorrectes: [0],
        explication: "La résistance d'isolement mesurée entre conducteurs actifs et terre doit être supérieure ou égale à 0.5 MΩ (500 kΩ).",
        points: 5,
        difficulte: NiveauDifficulte.EXPERT
      }]
    }
  ]
};
