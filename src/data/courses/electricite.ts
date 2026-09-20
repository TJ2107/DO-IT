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
      description: 'Comprendre la tension, l\'intensité, la résistance, la puissance continue et la relation fondamentale d\'Ohm.',
      pointsCles: [
        'Tension U (Volt) : différence de potentiel électrique motrice (analogie : pression d’eau)',
        'Intensité I (Ampère) : débit d’électrons par seconde dans la section du conducteur (1 A = 1 C/s)',
        'Résistance R (Ohm) : opposition naturelle du matériau au passage du courant (R = ρ × L / S)',
        'Puissance P (Watt) : énergie dissipée ou transformée par seconde (P = U × I = R × I²)'
      ],
      formuleCle: 'U = R × I  |  P = U × I = R × I² = U² / R',
      astuceTerrain: 'Avant de suspecter une panne complexe sur un actionneur, mesurez systématiquement la tension réelle présente à ses bornes en charge.',
      conseilProfesseur: 'Visualisez toujours le circuit électrique comme un circuit hydraulique : la tension est la pression de la pompe, l\'intensité est le débit d\'eau et la résistance est le rétrécissement du tuyau.',
      contenuHtml: `
        <h3>1. Les Quatre Piliers de l'Électricité Continue</h3>
        <p>L'électricité est le déplacement ordonné de porteurs de charges (les électrons libres) à travers un conducteur sous l'effet d'un champ électrique. Pour dimensionner, dépanner et sécuriser toute installation, vous devez maîtriser 4 grandeurs indissociables :</p>
        
        <ul>
          <li><strong>La Tension Électrique ($U$ en Volts - V) :</strong> Elle représente la différence de potentiel (ddp) entre deux points d'un circuit. C'est la force électromotrice qui pousse les électrons. Sans différence de potentiel, aucun courant ne circule.</li>
          <li><strong>L'Intensité du Courant ($I$ en Ampères - A) :</strong> Elle mesure la quantité de charge électrique traversant la section du conducteur par unité de temps ($I = \Delta Q / \Delta t$). $1\text{ A} = 6{,}24 \times 10^{18}$ électrons par seconde.</li>
          <li><strong>La Résistance ($R$ en Ohms - $\Omega$) :</strong> Elle caractérise la difficulté qu'éprouvent les électrons à se mouvoir dans le matériau. Elle dépend de la résistivité $\rho$ ($\Omega\cdot\text{m}$), de la longueur $L$ (m) et de la section $S$ ($\text{m}^2$) selon la formule : $R = \rho \times \frac{L}{S}$.</li>
          <li><strong>La Puissance Électrique ($P$ en Watts - W) :</strong> Elle quantifie le travail produit ou la chaleur dissipée par seconde. $1\text{ Watt} = 1\text{ Joule par seconde}$.</li>
        </ul>

        <h3>2. La Loi d'Ohm Fondamentale</h3>
        <p>Énoncée par Georg Ohm, elle établit la proportionnalité directe entre la tension appliquée et le courant résultant dans un conducteur ohmique à température constante :</p>
        <div class="bg-blue-50 border-l-4 border-blue-900 p-4 rounded-r-xl my-4">
          <p class="font-mono font-bold text-blue-950 text-base">U = R \times I \iff I = \frac{U}{R} \iff R = \frac{U}{I}</p>
        </div>

        <h4>Exemple Concret Résolu en Milieu Industriel :</h4>
        <p>Une électrovanne 24 V DC possède un bobinage interne de résistance $R = 48\ \Omega$.</p>
        <ol>
          <li><strong>Courant absorbé :</strong> $I = \frac{U}{R} = \frac{24\text{ V}}{48\ \Omega} = 0{,}5\text{ A}$ (soit $500\text{ mA}$).</li>
          <li><strong>Puissance dissipée :</strong> $P = U \times I = 24 \times 0{,}5 = 12\text{ W}$ (ou $P = R \times I^2 = 48 \times (0{,}5)^2 = 12\text{ W}$).</li>
          <li><strong>Dimensionnement du câble :</strong> Pour une ligne de 50 m en cuivre ($\rho = 0{,}0175\ \Omega\cdot\text{mm}^2/\text{m}$) de section $1{,}5\text{ mm}^2$, la résistance du câble aller-retour est $R_{\text{ligne}} = 0{,}0175 \times \frac{100}{1{,}5} = 1{,}17\ \Omega$. La chute de tension en ligne sera $\Delta U = R_{\text{ligne}} \times I = 1{,}17 \times 0{,}5 = 0{,}58\text{ V}$ (soit seulement $2{,}4\%$, conforme à la norme NF C 15-100 qui exige $< 5\%$).</li>
        </ol>
      `,
      exercices: [
        {
          id: 'elec_ch1_ex1',
          type: TypeQuestion.QCM,
          question: "Quelle tension U mesure-t-on aux bornes d'une résistance de 12 Ω traversée par un courant continu de 2.5 A ?",
          reponsesPossibles: ['30 V', '4.8 V', '14.5 V', '48 V'],
          reponsesCorrectes: [0],
          explication: "En appliquant la loi d'Ohm : U = R × I = 12 Ω × 2.5 A = 30 V.",
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        },
        {
          id: 'elec_ch1_ex2',
          type: TypeQuestion.CHIFFREE,
          question: "Une résistance de 100 Ω est connectée à une alimentation de 24 V DC. Quelle est la puissance P dissipée en Watts ?",
          reponsesPossibles: ['5.76 W', '2.40 W', '24.0 W', '0.24 W'],
          reponsesCorrectes: [0],
          explication: "P = U² / R = (24 × 24) / 100 = 576 / 100 = 5.76 W.",
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        }
      ]
    },
    {
      id: 'elec_ch2',
      titre: '2. Lois de Kirchhoff & Associations de Résistances',
      dureeEstimeeMin: 40,
      description: 'Loi des nœuds, loi des mailles, groupements série/parallèle et théorèmes de pont diviseur.',
      pointsCles: [
        'Loi des nœuds : la somme algébrique des courants entrant dans un nœud est égale à la somme des courants qui en sortent (conservation de la charge)',
        'Loi des mailles : la somme algébrique des différences de potentiel le long d’une maille fermée est nulle (conservation de l\'énergie)',
        'Résistances en série : s\'additionnent directement (Req = R1 + R2 + ...)',
        'Résistances en parallèle : les admittances s\'additionnent (1/Req = 1/R1 + 1/R2 + ...)'
      ],
      formuleCle: 'Req_{série} = R_1 + R_2  |  Req_{parallèle} = \\frac{R_1 \\times R_2}{R_1 + R_2}  |  U_2 = E \\times \\frac{R_2}{R_1 + R_2}',
      astuceTerrain: 'Pour calculer rapidement deux résistances en parallèle de même valeur (ex: 2 x 100 Ω), divisez simplement la valeur par 2 (= 50 Ω).',
      conseilProfesseur: 'Tracez toujours le sens des flèches de courant et de tension avant d\'écrire votre équation de maille pour ne jamais vous tromper de signe.',
      contenuHtml: `
        <h3>1. Les Deux Lois Fondamentales de Kirchhoff</h3>
        <p>Gustav Kirchhoff a établi deux règles incontournables pour l'analyse des circuits électriques maillés :</p>

        <h4>A. La Loi des Nœuds (Loi des Courants - LCK)</h4>
        <p>Un nœud est un point de jonction reliant au moins 3 conducteurs. En régime permanent, il ne peut y avoir accumulation de charge en un point :</p>
        <div class="bg-blue-50 border-l-4 border-blue-900 p-3 rounded-r-xl my-3">
          <p class="font-mono font-bold text-blue-950 text-sm">\sum I_{\text{entrants}} = \sum I_{\text{sortants}} \iff I_1 + I_2 - I_3 - I_4 = 0</p>
        </div>

        <h4>B. La Loi des Mailles (Loi des Tensions - LVK)</h4>
        <p>Une maille est un contour fermé parcouru dans un sens arbitraire. En faisant le tour complet de la maille, la somme algébrique des tensions rencontrées est égale à zéro :</p>
        <div class="bg-blue-50 border-l-4 border-blue-900 p-3 rounded-r-xl my-3">
          <p class="font-mono font-bold text-blue-950 text-sm">\sum U_{\text{mailles}} = 0 \iff E - U_1 - U_2 = 0 \implies E = U_1 + U_2</p>
        </div>

        <h3>2. Groupement de Résistances & Pont Diviseur</h3>
        <ul>
          <li><strong>En Série :</strong> Traversées par le même courant. $R_{\text{eq}} = R_1 + R_2 + R_3$. La résistance équivalente est toujours supérieure à la plus grande des résistances.</li>
          <li><strong>En Parallèle (Dérivation) :</strong> Soumises à la même tension. $\frac{1}{R_{\text{eq}}} = \frac{1}{R_1} + \frac{1}{R_2}$. Pour deux résistances : $R_{\text{eq}} = \frac{R_1 \times R_2}{R_1 + R_2}$. La résistance équivalente est toujours inférieure à la plus petite des résistances.</li>
          <li><strong>Pont Diviseur de Tension :</strong> Permet d'obtenir une fraction de tension sans transformateur : $U_2 = E \times \frac{R_2}{R_1 + R_2}$.</li>
        </ul>
      `,
      exercices: [
        {
          id: 'elec_ch2_ex1',
          type: TypeQuestion.CHIFFREE,
          question: "Deux résistances de 60 Ω et 30 Ω sont branchées en parallèle. Quelle est la résistance équivalente Req ?",
          reponsesPossibles: ['20 Ω', '90 Ω', '45 Ω', '15 Ω'],
          reponsesCorrectes: [0],
          explication: "Req = (60 × 30) / (60 + 30) = 1800 / 90 = 20 Ω.",
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        },
        {
          id: 'elec_ch2_ex2',
          type: TypeQuestion.QCM,
          question: "Dans un circuit série alimenté en 24 V comprenant R1 = 100 Ω et R2 = 300 Ω, quelle est la tension U2 aux bornes de R2 ?",
          reponsesPossibles: ['18 V', '6 V', '12 V', '24 V'],
          reponsesCorrectes: [0],
          explication: "U2 = 24 × (300 / (100 + 300)) = 24 × (300 / 400) = 24 × 0.75 = 18 V.",
          points: 5,
          difficulte: NiveauDifficulte.INTERMEDIAIRE
        }
      ]
    },
    {
      id: 'elec_ch3',
      titre: '3. Puissance, Énergie & Effet Joule Industriel',
      dureeEstimeeMin: 35,
      description: 'Calcul des pertes thermiques, bilan énergétique, rendement et dimensionnement thermique d\'armoires électriques.',
      pointsCles: [
        'Énergie W (Joule ou kWh) : produit de la puissance par la durée d\'utilisation (W = P × t)',
        '1 kWh = 1 000 W × 3 600 s = 3 600 000 Joules (3.6 MJ)',
        'Effet Joule : dégagement de chaleur inhérent au frottement des électrons (P_perte = R × I²)',
        'Rendement global : η = P_utile / P_absorbée (toujours < 1)'
      ],
      formuleCle: 'W = P \\times t  |  P_{\\text{Joule}} = R \\times I^2  |  \\eta = \\frac{P_{\\text{utile}}}{P_{\\text{absorbée}}}',
      astuceTerrain: 'Une surchauffe anormale sur un bornier (détectable par caméra thermique) provient à 90% d\'un mauvais couple de serrage créant une résistance de contact parasite.',
      conseilProfesseur: 'Ne confondez jamais Puissance (débit instantané en kW) et Énergie (quantité totale consommée en kWh sur la facture).',
      contenuHtml: `
        <h3>1. De la Puissance à l'Énergie Facturée</h3>
        <p>La puissance est la vitesse à laquelle l'énergie est convertie. L'énergie consommée par un appareil s'exprime par l'intégrale temporelle de la puissance :</p>
        <div class="bg-blue-50 border-l-4 border-blue-900 p-3 rounded-r-xl my-3">
          <p class="font-mono font-bold text-blue-950 text-sm">W = P \times t \quad (\text{en Joules si } t \text{ en secondes, en kWh si } P \text{ en kW et } t \text{ en heures})</p>
        </div>

        <h3>2. L'Effet Joule et ses Enjeux Industriels</h3>
        <p>Lorsqu'un courant $I$ traverse un conducteur de résistance $R$, la puissance dissipée sous forme de chaleur irréversible vaut $P_J = R \times I^2$.</p>
        <ul>
          <li><strong>Applications utiles :</strong> Fours à induction, thermoplongeurs, radiateurs, fusibles de protection.</li>
          <li><strong>Pertes néfastes :</strong> Échauffement des bobinages de moteurs, vieillissement prématuré des isolants de câbles, dissipation dans les armoires nécessitant des climatiseurs de tableau.</li>
          <li><strong>Règle de dimensionnement thermique :</strong> Si vous doublez le courant dans une ligne ($I \to 2I$), les pertes par effet Joule sont multipliées par 4 ($2^2 = 4$). D'où l'importance de transporter l'énergie en Haute Tension (HTA/HTB) pour réduire l'intensité et minimiser les pertes en ligne.</li>
        </ul>
      `,
      exercices: [
        {
          id: 'elec_ch3_ex1',
          type: TypeQuestion.QCM,
          question: "Combien d'énergie en kWh consomme une pompe industrielle de 1 500 W fonctionnant à pleine charge pendant 4 heures ?",
          reponsesPossibles: ['6 kWh', '375 kWh', '6 000 kWh', '1.5 kWh'],
          reponsesCorrectes: [0],
          explication: "E = P (kW) × t (h) = 1.5 kW × 4 h = 6.0 kWh.",
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        }
      ]
    },
    {
      id: 'elec_ch4',
      titre: '4. Mesures Sécurisées au Multimètre (CAT III / IV)',
      dureeEstimeeMin: 40,
      description: 'Voltmètre, ampèremètre, pince ampèremétrique, catégories de surtension IEC 61010 et prévention de l\'arc flash.',
      pointsCles: [
        'Voltmètre : Se branche impérativement en PARALLÈLE (dérivation) - impédance interne très élevée (> 10 MΩ)',
        'Ampèremètre : Se branche impérativement en SÉRIE (impédance quasi nulle - risque de court-circuit en parallèle !)',
        'Pince ampèremétrique : Mesure sans interruption de circuit par effet Hall ou transformateur de courant',
        'Catégories de sécurité : CAT III (distribution industrielle 400 V), CAT IV (origine de l\'installation et réseaux extérieurs)'
      ],
      formuleCle: 'VAT : Vérification d\'Absence de Tension normalisée (NF C 18-510) avec testeur dédié avant et après mesure.',
      astuceTerrain: 'N\'utilisez jamais un multimètre standard pour une VAT réglementaire : employez un Détecteur de Tension (DDT/VAT) conforme EN 61243-3 avec autotest.',
      conseilProfesseur: 'La sécurité électrique repose sur des automatismes stricts : vérifiez toujours le calibre et le positionnement des cordons de mesure avant de toucher un conducteur.',
      contenuHtml: `
        <h3>1. Choix et Branchement des Appareils de Mesure</h3>
        <p>Une mauvaise manipulation d'un appareil de mesure en milieu industriel peut engendrer un court-circuit triphasé et un arc électrique dévastateur (Arc Flash) :</p>
        
        <table class="w-full text-xs border border-slate-300 my-4 text-left">
          <thead class="bg-slate-100 font-bold">
            <tr>
              <th class="p-2 border">Grandeur</th>
              <th class="p-2 border">Mode de Branchement</th>
              <th class="p-2 border">Impédance de l'Appareil</th>
              <th class="p-2 border">Danger Principal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-2 border font-bold">Tension (V)</td>
              <td class="p-2 border">En Parallèle sur les bornes</td>
              <td class="p-2 border">Très Haute (~10 MΩ)</td>
              <td class="p-2 border">Sélectionner le mauvais calibre ou cordon en position A</td>
            </tr>
            <tr>
              <td class="p-2 border font-bold">Courant (A)</td>
              <td class="p-2 border">En Série dans la ligne ouverte</td>
              <td class="p-2 border">Quasi nulle (~0.01 Ω)</td>
              <td class="p-2 border font-bold text-red-700">Court-circuit direct si branché en parallèle !</td>
            </tr>
            <tr>
              <td class="p-2 border font-bold">Résistance (Ω)</td>
              <td class="p-2 border">Aux bornes du composant isolé</td>
              <td class="p-2 border">Génère un micro-courant</td>
              <td class="p-2 border font-bold text-red-700">Destruction de l'appareil si circuit sous tension !</td>
            </tr>
          </tbody>
        </table>

        <h3>2. Les Catégories de Surtension IEC 61010</h3>
        <p>Les catégories définissent la capacité d'un appareil à supporter des transitoires de foudre et de commutation :</p>
        <ul>
          <li><strong>CAT II :</strong> Appareils électroménagers et prises monophasées standard.</li>
          <li><strong>CAT III :</strong> Tableaux de distribution industriels, armoires 400 V, moteurs, busbar.</li>
          <li><strong>CAT IV :</strong> Tête d'installation, compteurs d'arrivée d'énergie, lignes aériennes.</li>
        </ul>
      `,
      exercices: [
        {
          id: 'elec_ch4_ex1',
          type: TypeQuestion.QCM,
          question: "Quel est le risque majeur si l'on branche un ampèremètre configuré en 10 A directement en parallèle entre phase et neutre (230 V) ?",
          reponsesPossibles: [
            'Court-circuit direct franc et risque d\'explosion par arc électrique (Arc Flash)',
            'La mesure sera simplement inversée',
            'Aucun risque, le multimètre bloque le courant',
            'La tension va baisser doucement'
          ],
          reponsesCorrectes: [0],
          explication: "L'ampèremètre ayant une impédance interne quasi nulle (shunt de mesure), le relier en parallèle équivaut à placer un fil direct entre phase et neutre, provoquant un court-circuit immédiat.",
          points: 5,
          difficulte: NiveauDifficulte.INTERMEDIAIRE
        }
      ]
    },
    {
      id: 'elec_ch5',
      titre: '5. Courant Alternatif Sinusoïdal & Valeurs Efficaces',
      dureeEstimeeMin: 40,
      description: 'Fréquence, période, pulsation ω, valeur crête Umax, valeur efficace RMS et représentations de Fresnel.',
      pointsCles: [
        'Fréquence f = 50 Hz en Europe/Afrique (période T = 1/f = 20 ms)',
        'Pulsation : ω = 2 × π × f = 314 rad/s (pour 50 Hz)',
        'Valeur Efficace RMS (Root Mean Square) : tension continue équivalente produisant le même échauffement Joule',
        'Relation sinusoïdale pure : Ueff = Umax / √2 ≈ 0.707 × Umax  (Umax = 230 × √2 = 325 V)'
      ],
      formuleCle: 'U_{\\text{eff}} = \\frac{U_{\\text{max}}}{\\sqrt{2}}  |  T = \\frac{1}{f}  |  \\omega = 2 \\times \\pi \\times f',
      astuceTerrain: 'Pour les charges non linéaires (variateurs, alimentations à découpage), utilisez impérativement un multimètre ou une pince « True RMS » (TRMS) pour mesurer la vraie valeur efficace.',
      conseilProfesseur: 'Retenez bien que la tension de 230 V indiquée sur les prises est une valeur efficace. La tension crête réelle oscille entre +325 V et -325 V 50 fois par seconde.',
      contenuHtml: `
        <h3>1. Définition du Signal Sinusoïdal</h3>
        <p>Une tension alternative sinusoïdale s'exprime sous la forme temporelle :</p>
        <div class="bg-blue-50 border-l-4 border-blue-900 p-3 rounded-r-xl my-3">
          <p class="font-mono font-bold text-blue-950 text-sm">u(t) = U_{\\text{max}} \\times \\sin(\\omega t + \\varphi)</p>
        </div>
        <ul>
          <li>$U_{\\text{max}}$ : Tension crête (amplitude maximale en Volts).</li>
          <li>$\omega = 2 \\pi f$ : Pulsation en radians par seconde ($\omega = 314{,}16\\text{ rad/s}$ à 50 Hz).</li>
          <li>$T = \\frac{1}{f}$ : Période temporelle ($T = 20\\text{ ms}$ pour 50 Hz, $16{,}67\\text{ ms}$ pour 60 Hz).</li>
          <li>$\varphi$ : Phase à l'origine (déphasage en radians ou degrés).</li>
        </ul>

        <h3>2. Signification Physique de la Valeur Efficace (RMS)</h3>
        <p>La valeur efficace est la valeur thermique équivalente : une tension alternative $U_{\\text{eff}} = 230\\text{ V}$ produit exactement le même échauffement dans une résistance qu'une tension continue constante de 230 V.</p>
        <p>Pour un signal sinusoïdal parfait : $U_{\\text{eff}} = \\frac{U_{\\text{max}}}{\\sqrt{2}} = 0{,}707 \\times U_{\\text{max}}$. À l'inverse : $U_{\\text{max}} = U_{\\text{eff}} \\times \\sqrt{2} = 230 \\times 1{,}414 = 325{,}2\\text{ V}$.</p>
      `,
      exercices: [
        {
          id: 'elec_ch5_ex1',
          type: TypeQuestion.CHIFFREE,
          question: "Pour une tension alternative sinusoïdale de 230 V efficace, quelle est la valeur crête Umax à 1 décimale près ?",
          reponsesPossibles: ['325.3 V', '230.0 V', '400.0 V', '162.6 V'],
          reponsesCorrectes: [0],
          explication: "Umax = Ueff × √2 = 230 × 1.4142 = 325.27 V ≈ 325.3 V.",
          points: 5,
          difficulte: NiveauDifficulte.INTERMEDIAIRE
        }
      ]
    },
    {
      id: 'elec_ch6',
      titre: '6. Puissances Active (P), Réactive (Q), Apparente (S) & Cos φ',
      dureeEstimeeMin: 45,
      description: 'Triangle des puissances de Boucherot, facteur de puissance, compensation par batterie de condensateurs et pénalités de réseau.',
      pointsCles: [
        'Puissance Active P (Watts - W) : énergie réellement transformée en travail mécanique, thermique ou lumineux (P = U × I × cos φ)',
        'Puissance Réactive Q (Voltampères réactifs - var) : énergie oscillante servant à magnétiser les circuits (moteurs, transformateurs) (Q = U × I × sin φ)',
        'Puissance Apparente S (Voltampères - VA) : puissance totale de dimensionnement des câbles et transformateurs (S = U × I)',
        'Théorème de Pythagore / Boucherot : S² = P² + Q²  =>  S = √(P² + Q²)',
        'Facteur de puissance : cos φ = P / S (doit être ≥ 0.93 - 0.95 en industrie)'
      ],
      formuleCle: 'S = \\sqrt{P^2 + Q^2} = U \\times I  |  P = S \\times \\cos \\varphi  |  Q_C = P \\times (\\tan \\varphi_1 - \\tan \\varphi_2)',
      astuceTerrain: 'Relever le cos φ de 0.75 à 0.95 diminue le courant en ligne de plus de 20%, libérant de la capacité sur votre transformateur sans changer de câble !',
      conseilProfesseur: 'Pensez à la chope de boisson pétillante : le liquide est la puissance active P (utile), la mousse est la puissance réactive Q (nécessaire mais non productive), et la chope entière est la puissance apparente S qu\'il faut dimensionner.',
      contenuHtml: `
        <h3>1. Le Triangle des Puissances de Boucherot</h3>
        <p>En courant alternatif sur charge inductive (moteur, transformateur, ballast), le courant est déphasé en arrière d'un angle $\varphi$ par rapport à la tension :</p>
        
        <ul>
          <li><strong>Puissance Active ($P$ en kW) :</strong> $P = U \times I \times \cos \varphi$ (en monophasé) et $P = \sqrt{3} \times U \times I \times \cos \varphi$ (en triphasé).</li>
          <li><strong>Puissance Réactive ($Q$ en kvar) :</strong> $Q = U \times I \times \sin \varphi$ (en monophasé) et $Q = \sqrt{3} \times U \times I \times \sin \varphi$ (en triphasé).</li>
          <li><strong>Puissance Apparente ($S$ en kVA) :</strong> $S = U \times I$ (en monophasé) et $S = \sqrt{3} \times U \times I$ (en triphasé).</li>
        </ul>

        <div class="bg-blue-50 border-l-4 border-blue-900 p-3 rounded-r-xl my-3">
          <p class="font-mono font-bold text-blue-950 text-sm">S = \sqrt{P^2 + Q^2} \quad \text{et} \quad \cos \varphi = \frac{P}{S}</p>
        </div>

        <h3>2. Dimensionnement de la Batterie de Condensateurs</h3>
        <p>Pour relever le facteur de puissance d'un atelier absorbant une puissance active $P$ d'un $\cos \varphi_1$ initial vers un $\cos \varphi_2$ cible, la puissance réactive capacitive $Q_C$ à installer est :</p>
        <div class="bg-amber-50 border-l-4 border-amber-600 p-3 rounded-r-xl my-3 font-mono font-bold text-amber-950 text-sm">
          Q_C = P \times (\tan \varphi_1 - \tan \varphi_2)
        </div>
      `,
      exercices: [
        {
          id: 'elec_ch6_ex1',
          type: TypeQuestion.QCM,
          question: "Quelle est l'unité officielle de la puissance réactive Q ?",
          reponsesPossibles: ['var (Voltampère réactif)', 'Watt (W)', 'Voltampère (VA)', 'Joule (J)'],
          reponsesCorrectes: [0],
          explication: "La puissance réactive s'exprime en var (ou kvar pour les usines et transformateurs).",
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        },
        {
          id: 'elec_ch6_ex2',
          type: TypeQuestion.CHIFFREE,
          question: "Un récepteur absorbe P = 12 kW et Q = 9 kvar. Quelle est sa puissance apparente S en kVA ?",
          reponsesPossibles: ['15 kVA', '21 kVA', '10.5 kVA', '108 kVA'],
          reponsesCorrectes: [0],
          explication: "S = √(P² + Q²) = √(12² + 9²) = √(144 + 81) = √225 = 15 kVA.",
          points: 5,
          difficulte: NiveauDifficulte.INTERMEDIAIRE
        }
      ]
    },
    {
      id: 'elec_ch7',
      titre: '7. Électromagnétisme, Bobines & Induction de Faraday',
      dureeEstimeeMin: 40,
      description: 'Loi de Faraday, loi de Lenz, inductance propre L, force magnétomotrice et protection contre les surtensions d\'ouverture.',
      pointsCles: [
        'Loi de Faraday : toute variation de flux magnétique à travers un circuit engendre une force électromotrice (f.é.m.) induite e = -dΦ/dt',
        'Loi de Lenz : le courant induit s\'oppose par ses effets à la cause qui lui a donné naissance (signe négatif)',
        'Inductance L (Henry - H) : capacité d\'une bobine à stocker de l\'énergie dans son champ magnétique (Em = 1/2 × L × I²)',
        'Surtension d\'ouverture : la coupure d\'une bobine sans diode de roue libre génère un arc destructeur'
      ],
      formuleCle: 'e = - L \\times \\frac{di}{dt}  |  E_m = \\frac{1}{2} \\times L \\times I^2',
      astuceTerrain: 'Sur toute commande de relais ou électrovanne DC pilotée par transistor ou sortie automate, installez TOUJOURS une diode de roue libre (ou diode transil) en parallèle inverse.',
      conseilProfesseur: 'La bobine a horreur du changement : elle s\'oppose vigoureusement à toute variation rapide du courant qui la traverse.',
      contenuHtml: `
        <h3>1. Phénomène d'Auto-Induction</h3>
        <p>Lorsqu'un courant variable $i(t)$ traverse une bobine de $N$ spires, il crée un champ magnétique propre $B$ et un flux $\Phi = L \times i$.</p>
        <p>Selon les lois de Faraday et Lenz, la bobine génère à ses bornes une tension induite opposée :</p>
        <div class="bg-blue-50 border-l-4 border-blue-900 p-3 rounded-r-xl my-3">
          <p class="font-mono font-bold text-blue-950 text-sm">u_L(t) = L \times \frac{di}{dt}</p>
        </div>

        <h3>2. Conséquence Pratique : La Surtension de Coupure</h3>
        <p>Si l'on ouvre brusquement l'interrupteur d'un circuit contenant une bobine industrielle ($L = 0{,}5\text{ H}$, $I = 2\text{ A}$) en un temps très court ($\Delta t = 1\text{ ms}$) :</p>
        <p class="font-mono text-xs bg-slate-100 p-2.5 rounded-lg">u = - L \times \frac{\Delta I}{\Delta t} = - 0{,}5 \times \frac{-2}{0{,}001} = + 1\,000\text{ Volts !}</p>
        <p>Cette surtension de 1 000 V détruit immédiatement les semi-conducteurs et use prématurément les contacts mécaniques si elle n'est pas écrêtée.</p>
      `,
      exercices: [
        {
          id: 'elec_ch7_ex1',
          type: TypeQuestion.QCM,
          question: "Quel composant économique est impératif pour protéger un transistor commandant une bobine de relais 24 V DC contre les surtensions d'ouverture ?",
          reponsesPossibles: ['Une diode de roue libre en parallèle inverse sur la bobine', 'Une résistance de 1 MΩ en série', 'Un fusible ultra-lent', 'Un potentiomètre'],
          reponsesCorrectes: [0],
          explication: "La diode de roue libre permet au courant emmagasiné dans la bobine de continuer à circuler en boucle fermée lors de l'ouverture, limitant la surtension à 0.7 V.",
          points: 5,
          difficulte: NiveauDifficulte.INTERMEDIAIRE
        }
      ]
    },
    {
      id: 'elec_ch8',
      titre: '8. Transformateurs Électriques & Rendement Industriel',
      dureeEstimeeMin: 45,
      description: 'Rapport de transformation m = U2/U1 = N2/N1, essais à vide, essais en court-circuit, pertes fer (hystérésis/Foucault) et pertes cuivre.',
      pointsCles: [
        'Rapport de transformation : m = U2/U1 = N2/N1 = I1/I2 (en charge)',
        'Pertes Fer (P_fer) : mesurées à l\'essai à vide sous tension nominale (indépendantes de la charge)',
        'Pertes Cuivre (P_joule) : mesurées à l\'essai en court-circuit (proportionnelles au carré du courant I²)',
        'Rendement élevé : généralement entre 95% et 99% sur les transformateurs de distribution HTA/BT'
      ],
      formuleCle: 'm = \\frac{U_{20}}{U_1} = \\frac{N_2}{N_1}  |  \\eta = \\frac{P_2}{P_2 + P_{\\text{fer}} + P_{\\text{joule}}} = \\frac{U_2 I_2 \\cos \\varphi_2}{U_2 I_2 \\cos \\varphi_2 + P_0 + R_s I_2^2}',
      astuceTerrain: 'Le niveau et la couleur de l\'huile diélectrique d\'un transformateur HTA/BT (ainsi que la silice du dessiccateur d\'air) sont les premiers témoins de son état de santé.',
      conseilProfesseur: 'Un transformateur ne modifie jamais la fréquence du réseau ni la puissance (hors pertes) : s\'il abaisse la tension par 10, il multiplie le courant disponible par 10.',
      contenuHtml: `
        <h3>1. Principe de Fonctionnement du Transformateur Monophasé</h3>
        <p>Le transformateur est un convertisseur statique d'énergie qui modifie les valeurs de tension et de courant alternatif à fréquence constante grâce au couplage magnétique mutuel.</p>
        
        <div class="bg-blue-50 border-l-4 border-blue-900 p-3 rounded-r-xl my-3">
          <p class="font-mono font-bold text-blue-950 text-sm">m = \frac{U_{20}}{U_1} = \frac{N_2}{N_1} \approx \frac{I_1}{I_2}</p>
        </div>
        <ul>
          <li>Si $m > 1$ : Transformateur élévateur de tension.</li>
          <li>Si $m < 1$ : Transformateur abaisseur de tension.</li>
          <li>Si $m = 1$ : Transformateur d'isolement (sécurité des personnes ou séparation galvanique).</li>
        </ul>

        <h3>2. Bilan de Puissance & Calcul du Rendement</h3>
        <p>Le rendement s'obtient avec une très haute précision par la méthode des pertes séparées :</p>
        <ol>
          <li><strong>Essai à vide (sous $U_1 = U_{1n}$) :</strong> $P_0 = P_{\text{fer}}$ (pertes par hystérésis magnétique et courants de Foucault dans les tôles d'acier au silicium).</li>
          <li><strong>Essai en court-circuit (sous $I_2 = I_{2n}$) :</strong> $P_{1cc} = P_{\text{joule nominal}}$ (pertes par effet Joule dans les enroulements primaire et secondaire).</li>
        </ol>
      `,
      exercices: [
        {
          id: 'elec_ch8_ex1',
          type: TypeQuestion.CHIFFREE,
          question: "Un transformateur industriel parfait abaisse la tension de 400 V à 24 V. Quel est son rapport de transformation m ?",
          reponsesPossibles: ['0.06', '16.67', '0.60', '0.024'],
          reponsesCorrectes: [0],
          explication: "m = U2 / U1 = 24 / 400 = 0.06 (soit 6/100).",
          points: 5,
          difficulte: NiveauDifficulte.INTERMEDIAIRE
        }
      ]
    },
    {
      id: 'elec_ch9',
      titre: '9. Réseaux Triphasés Équilibrés : Étoile (Y) & Triangle (Δ)',
      dureeEstimeeMin: 45,
      description: 'Tensions simples (V = 230 V), tensions composées (U = 400 V), relation U = V × √3, couplages et puissance triphasée.',
      pointsCles: [
        'Tension simple V : mesurée entre une phase et le neutre (V = 230 V)',
        'Tension composée U : mesurée entre deux phases différentes (U = 400 V = √3 × 230 V)',
        'Couplage Étoile (Y) : Courant de ligne = Courant de phase (I = J), chaque enroulement reçoit V = 230 V',
        'Couplage Triangle (Δ) : Tension d\'enroulement = Tension entre phases (U = 400 V), Courant de ligne I = √3 × J',
        'Puissance active triphasée totale : P = √3 × U × I × cos φ (valable quel que soit le couplage)'
      ],
      formuleCle: 'U = \\sqrt{3} \\times V \\approx 1.732 \\times V  |  P_{\\text{tri}} = \\sqrt{3} \\times U \\times I \\times \\cos \\varphi',
      astuceTerrain: 'Pour coupler un moteur sur réseau 400 V : regardez la plus petite tension de la plaque signalétique. Si la plaque indique "230V/400V", vous devez obligatoirement le coupler en ÉTOILE sous 400 V.',
      conseilProfesseur: 'Le facteur racine de 3 (√3 ≈ 1.732) est la clé de voûte de toute la trigonométrie triphasée. Mémorisez-le parfaitement.',
      contenuHtml: `
        <h3>1. Structure du Réseau Triphasé Standard 230V / 400V</h3>
        <p>Le réseau triphasé est constitué de 3 tensions alternatives sinusoïdales de même amplitude et de même fréquence, déphasées entre elles de $120^\circ$ ($\frac{2\pi}{3}$ radians).</p>
        
        <div class="bg-blue-50 border-l-4 border-blue-900 p-3 rounded-r-xl my-3">
          <p class="font-mono font-bold text-blue-950 text-sm">U = \sqrt{3} \times V \iff 400\text{ V} = 1{,}732 \times 230\text{ V}</p>
        </div>

        <h3>2. Choix du Couplage Statorique des Récepteurs</h3>
        <table class="w-full text-xs border border-slate-300 my-4 text-left">
          <thead class="bg-slate-100 font-bold">
            <tr>
              <th class="p-2 border">Couplage</th>
              <th class="p-2 border">Symbole</th>
              <th class="p-2 border">Tension par Enroulement</th>
              <th class="p-2 border">Courant dans la Ligne</th>
              <th class="p-2 border">Disposition des Barrettes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-2 border font-bold">Étoile</td>
              <td class="p-2 border">Y</td>
              <td class="p-2 border">$V = \frac{U}{\sqrt{3}} = 230\text{ V}$</td>
              <td class="p-2 border">$I = J$</td>
              <td class="p-2 border">1 barrette horizontale reliant W2-U2-V2</td>
            </tr>
            <tr>
              <td class="p-2 border font-bold">Triangle</td>
              <td class="p-2 border">$\Delta$</td>
              <td class="p-2 border">$U = 400\text{ V}$</td>
              <td class="p-2 border">$I = \sqrt{3} \times J$</td>
              <td class="p-2 border">3 barrettes verticales parallèles</td>
            </tr>
          </tbody>
        </table>
      `,
      exercices: [
        {
          id: 'elec_ch9_ex1',
          type: TypeQuestion.QCM,
          question: "Sur un réseau triphasé équilibré 230V/400V, quelle est la tension mesurée entre deux conducteurs de phase distincts (L1 et L2) ?",
          reponsesPossibles: ['400 V', '230 V', '690 V', '0 V'],
          reponsesCorrectes: [0],
          explication: "La tension entre deux phases (tension composée U) est de 400 V (U = V × √3 = 230 × 1.732 ≈ 400 V).",
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        }
      ]
    },
    {
      id: 'elec_ch10',
      titre: '10. Moteurs Asynchrones Triphasés (MAS) & Démarrage',
      dureeEstimeeMin: 50,
      description: 'Champ tournant, glissement g, vitesse de synchronisme Ns, couple moteur, démarrage direct, étoile-triangle et variateurs électroniques.',
      pointsCles: [
        'Vitesse de synchronisme du champ statorique : Ns = (60 × f) / p (tr/min)',
        'Glissement : g = (Ns - N) / Ns (généralement 2% à 6% en charge)',
        'Courant de démarrage direct : Id = 4 à 8 fois le courant nominal In',
        'Couple moteur utile : Pu = C × Ω (avec Ω = 2 × π × N / 60 en rad/s)'
      ],
      formuleCle: 'N_s = \\frac{60 \\times f}{p}  |  g = \\frac{N_s - N}{N_s}  |  P_u = C \\times \\Omega = C \\times \\frac{2 \\pi N}{60}',
      astuceTerrain: 'Si un moteur tourne dans le mauvais sens lors de sa mise en service, il suffit d\'inverser deux des trois phases d\'alimentation au niveau du bornier.',
      conseilProfesseur: 'Le moteur asynchrone est le cheval de trait de l\'industrie mondiale. Comprendre son glissement est essentiel pour appréhender sa régulation de vitesse.',
      contenuHtml: `
        <h3>1. Création du Champ Magnétique Tournant</h3>
        <p>Trois bobinages statoriques décalés de $120^\circ$ dans l'espace et alimentés par un courant triphasé déphasé de $120^\circ$ dans le temps créent un champ magnétique tournant à la vitesse de synchronisme :</p>
        
        <div class="bg-blue-50 border-l-4 border-blue-900 p-3 rounded-r-xl my-3">
          <p class="font-mono font-bold text-blue-950 text-sm">N_s = \frac{60 \times f}{p} \quad (\text{en tr/min, où } p \text{ est le nombre de paires de pôles})</p>
        </div>
        <ul>
          <li>$p = 1$ (2 pôles) : $N_s = \frac{60 \times 50}{1} = 3\,000\text{ tr/min}$.</li>
          <li>$p = 2$ (4 pôles) : $N_s = \frac{60 \times 50}{2} = 1\,500\text{ tr/min}$ (vitesse rotor réelle $N \approx 1\,450\text{ tr/min}$).</li>
          <li>$p = 3$ (6 pôles) : $N_s = \frac{60 \times 50}{3} = 1\,000\text{ tr/min}$.</li>
        </ul>

        <h3>2. Les Procédés de Démarrage Industriels</h3>
        <ol>
          <li><strong>Démarrage Direct :</strong> Simple et économique, couple élevé, mais appel de courant brutal ($Id = 6 \text{ à } 8 In$) perturbant le réseau.</li>
          <li><strong>Démarrage Étoile-Triangle ($Y-\Delta$) :</strong> Réduit le courant de démarrage par 3 ($Id = 2 \text{ à } 2{,}5 In$), mais divise également le couple moteur par 3. Nécessite un moteur dont la tension nominale triangle correspond à celle du réseau.</li>
          <li><strong>Démarreur Progressif / Variateur Électronique (VFD) :</strong> Montée progressive sans à-coups mécanique, contrôle total de la rampe d'accélération et limitation du courant à $1{,}5 \text{ à } 2 In$.</li>
        </ol>
      `,
      exercices: [
        {
          id: 'elec_ch10_ex1',
          type: TypeQuestion.CHIFFREE,
          question: "Pour un moteur asynchrone à 2 paires de pôles (p=2) sous 50 Hz, quelle est la vitesse de synchronisme Ns en tr/min ?",
          reponsesPossibles: ['1 500 tr/min', '3 000 tr/min', '1 000 tr/min', '750 tr/min'],
          reponsesCorrectes: [0],
          explication: "Ns = (60 × f) / p = (60 × 50) / 2 = 3 000 / 2 = 1 500 tr/min.",
          points: 5,
          difficulte: NiveauDifficulte.INTERMEDIAIRE
        }
      ]
    },
    {
      id: 'elec_ch11',
      titre: '11. Schémas de Liaison à la Terre (SLT / Régimes TT, TN, IT)',
      dureeEstimeeMin: 45,
      description: 'Protection contre les contacts indirects, boucle de défaut, régime TT (DDR), régime TN (surintensité) et régime IT (continuité avec CPI).',
      pointsCles: [
        '1ère lettre : Situation du neutre du transformateur (T = Terre, I = Isolé ou impédant)',
        '2ème lettre : Situation des masses métalliques des récepteurs (T = reliées à la Terre, N = reliées au Neutre)',
        'Régime TT : Déconnexion obligatoire par Dispositif Différentiel Résiduel (DDR) car le courant de défaut est faible',
        'Régime TN (TN-S / TN-C) : Le défaut d\'isolement est un court-circuit franc coupé par disjoncteur standard',
        'Régime IT : Indispensable en milieu médical (blocs opératoires) et process continus (1er défaut non dangereux)'
      ],
      formuleCle: 'R_A \\times I_{\\Delta n} \\le U_L \\quad (U_L = 50\\text{ V en local sec, } 25\\text{ V en local humide})',
      astuceTerrain: 'En régime IT, le premier défaut d\'isolement n\'engendre aucune coupure mais déclenche une alarme sonore au niveau du CPI (Contrôleur Permanent d\'Isolement) qu\'il faut localiser avant qu\'un second défaut n\'arrive.',
      conseilProfesseur: 'La sécurité contre les contacts indirects est l\'une des responsabilités majeures de l\'électricien : connaissez le rôle précis de chaque lettre des schémas SLT.',
      contenuHtml: `
        <h3>1. Les Principes des Trois Régimes de Neutre Normatifs</h3>
        <p>La norme NF C 15-100 définit trois schémas de liaison à la terre pour garantir la sécurité des personnes contre les contacts indirects :</p>

        <table class="w-full text-xs border border-slate-300 my-4 text-left">
          <thead class="bg-slate-100 font-bold">
            <tr>
              <th class="p-2 border">Régime</th>
              <th class="p-2 border">Neutre Transfo</th>
              <th class="p-2 border">Masses Métalliques</th>
              <th class="p-2 border">Organe de Coupure au 1er Défaut</th>
              <th class="p-2 border">Domaine Typique</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-2 border font-bold">TT</td>
              <td class="p-2 border">Terre ($R_N$)</td>
              <td class="p-2 border">Terre ($R_A$)</td>
              <td class="p-2 border font-bold text-blue-900">DDR Différentiel obligatoire</td>
              <td class="p-2 border">Résidentiel & petit tertiaire</td>
            </tr>
            <tr>
              <td class="p-2 border font-bold">TN (TN-C, TN-S)</td>
              <td class="p-2 border">Terre ($R_N$)</td>
              <td class="p-2 border">Au Neutre (PE/PEN)</td>
              <td class="p-2 border">Disjoncteur / Fusible (Surintensité)</td>
              <td class="p-2 border">Grandes usines, sites industriels</td>
            </tr>
            <tr>
              <td class="p-2 border font-bold">IT</td>
              <td class="p-2 border">Isolé ou Impédant</td>
              <td class="p-2 border">Terre ($R_A$)</td>
              <td class="p-2 border font-bold text-emerald-700">Pas de coupure (Alarme CPI)</td>
              <td class="p-2 border">Hôpitaux, mines, navires, chimie</td>
            </tr>
          </tbody>
        </table>
      `,
      exercices: [
        {
          id: 'elec_ch11_ex1',
          type: TypeQuestion.QCM,
          question: "Quel régime de neutre est privilégié dans les hôpitaux et les usines à feu continu pour maintenir l'alimentation au premier défaut d'isolement ?",
          reponsesPossibles: [
            'Régime IT (Neutre isolé avec Contrôleur Permanent d\'Isolement CPI)',
            'Régime TT',
            'Régime TN-C',
            'Régime sans terre'
          ],
          reponsesCorrectes: [0],
          explication: "Le régime IT n'engendre pas de déclenchement au premier défaut franc, garantissant la continuité absolue du service.",
          points: 5,
          difficulte: NiveauDifficulte.AVANCE
        }
      ]
    },
    {
      id: 'elec_ch12',
      titre: '12. Appareillage de Protection & Sélectivité (DDR, Disjoncteurs, Fusibles)',
      dureeEstimeeMin: 45,
      description: 'Courbes de déclenchement magnétothermique (B, C, D), pouvoir de coupure Icu, fusibles aM/gG et sélectivité totale.',
      pointsCles: [
        'Protection thermique : bilame métallique temporisé contre les faibles surcharges prolongées',
        'Protection magnétique : électroaimant instantané contre les courts-circuits violents (< 20 ms)',
        'Courbes normalisées : B (3-5 In, grandes longueurs de câbles), C (5-10 In, récepteurs généraux), D (10-14 In, moteurs & transformateurs)',
        'Fusibles : gG (usage général) et aM (Accompagnement Moteur - supporte le courant d\'appel sans déclencher)',
        'Sélectivité totale : seul le disjoncteur immédiatement en amont du défaut déclenche'
      ],
      formuleCle: 'I_{\\text{cu}} \\ge I_{\\text{cc\\_max}}  |  I_n(\\text{amont}) \\ge 1.6 \\times I_n(\\text{aval}) \\text{ (règle empirique de sélectivité)}',
      astuceTerrain: 'Ne remplacez JAMAIS un disjoncteur courbe D par une courbe C sur une ligne de moteur sous prétexte que le disjoncteur déclenche au démarrage : vérifiez d\'abord le dimensionnement.',
      conseilProfesseur: 'La coordination des protections protège à la fois les câbles contre l\'incendie et les personnes contre les décharges électriques.',
      contenuHtml: `
        <h3>1. Les Deux Rôles du Disjoncteur Magnétothermique</h3>
        <p>Le disjoncteur combine deux mécanismes de protection complémentaires :</p>
        <ol>
          <li><strong>Le Déclencheur Thermique :</strong> Un bilame se déforme sous l'effet de la chaleur ($R \cdot I^2$). Il protège contre les surcharges lentes (ex: moteur bloqué ou surcharge d'appareils branchés).</li>
          <li><strong>Le Déclencheur Magnétique :</strong> Une bobine attire un percuteur instantané dès que le courant dépasse un seuil critique. Il protège contre les courts-circuits francs en quelques millisecondes.</li>
        </ol>

        <h3>2. Choix de la Courbe de Déclenchement</h3>
        <ul>
          <li><strong>Courbe B :</strong> Seuil bas (3 à 5 In). Utilisée pour les génératrices et les très longues lignes de câbles où le courant de court-circuit est faible.</li>
          <li><strong>Courbe C :</strong> Seuil standard (5 à 10 In). Convient pour 80% des charges tertiaires et domestiques (éclairage, prises).</li>
          <li><strong>Courbe D :</strong> Seuil haut (10 à 14 In). Spécialement conçue pour absorber les fortes pointes d'enclenchement sans déclenchement intempestif (moteurs, transformateurs, charges capacitives).</li>
        </ul>
      `,
      exercices: [
        {
          id: 'elec_ch12_ex1',
          type: TypeQuestion.QCM,
          question: "Quelle courbe de disjoncteur magnétothermique est recommandée pour protéger un compresseur triphasé ayant un fort courant d'appel ?",
          reponsesPossibles: [
            'Courbe D (seuil magnétique haut : 10 à 14 In)',
            'Courbe B (seuil bas : 3 à 5 In)',
            'Courbe Z (ultra-rapide pour composants électroniques sensibles)',
            'Courbe A'
          ],
          reponsesCorrectes: [0],
          explication: "La courbe D tolère les fortes pointes transitoires lors du démarrage des moteurs sans disjoncter intempestivement.",
          points: 5,
          difficulte: NiveauDifficulte.INTERMEDIAIRE
        }
      ]
    },
    {
      id: 'elec_ch13',
      titre: '13. Sécurité Électrique & Norme NF C 18-510 (Habilitations B1, B2, BR, BC)',
      dureeEstimeeMin: 50,
      description: 'Zones d\'environnement électrique, EPI obligatoires, les 5 étapes de la consignation et titres d\'habilitation B0, B1, B2, BC, BR.',
      pointsCles: [
        'Les 5 étapes de la Consignation : 1. Séparation, 2. Condamnation, 3. Identification, 4. VAT (Vérification d\'Absence de Tension), 5. MALT/CC (Mise à la Terre et en Court-Circuit)',
        'EPI indispensables : Gants isolants 1 000 V, écran facial anti-arc (visière), sous-gants coton, chaussures de sécurité isolantes',
        'Titres d\'habilitation : B = Basse Tension, 0 = Non électricien, 1 = Exécutant, 2 = Chargé de travaux, BC = Chargé de consignation, BR = Chargé d\'intervention générale'
      ],
      formuleCle: 'Règle d\'or : "Hors tension = Consigné + VAT effectuée sur tous les conducteurs actifs et le neutre"',
      astuceTerrain: 'Le testeur VAT doit être essayé sur une source de tension connue IMMÉDIATEMENT AVANT et IMMÉDIATEMENT APRÈS la vérification sur l\'installation à consigner.',
      conseilProfesseur: 'En électricité, l\'accident ne pardonne pas. Ne travaillez JAMAIS sur une installation présumée coupée sans avoir réalisé vous-même la VAT avec vos EPI.',
      contenuHtml: `
        <h3>1. La Procédure Réglementaire de Consignation en 5 Étapes</h3>
        <p>Seule une consignation complète permet de garantir qu'un ouvrage est hors tension et sécurisé pour les intervenants :</p>
        
        <ol class="space-y-2 my-3">
          <li><strong>1. Séparation :</strong> Ouvrir les organes de coupure omnipolaires (sectionneur, disjoncteur avec coupure visible ou garantie).</li>
          <li><strong>2. Condamnation :</strong> Verrouiller mécaniquement en position ouverte par cadenas de consignation et macaron d'interdiction de manœuvre.</li>
          <li><strong>3. Identification :</strong> Vérifier sur les schémas et sur place que l'armoire et le départ correspondent exactement à l'ouvrage concerné.</li>
          <li><strong>4. Vérification d'Absence de Tension (VAT) :</strong> Réalisée avec un DDT normalisé entre toutes les phases et le neutre, ainsi qu'entre phases et terre.</li>
          <li><strong>5. Mise à la Terre et en Court-Circuit (MALT/CC) :</strong> Obligatoire en HTA et dès qu'il y a risque de tension induite ou de réalimentation par groupe électrogène.</li>
        </ol>
      `,
      exercices: [
        {
          id: 'elec_ch13_ex1',
          type: TypeQuestion.QCM,
          question: "Quel symbole d'habilitation désigne le 'Chargé de Consignation' en basse tension selon la norme NF C 18-510 ?",
          reponsesPossibles: ['BC', 'B1V', 'B0', 'H0V'],
          reponsesCorrectes: [0],
          explication: "L'habilitation BC est exclusivement attribuée au Chargé de Consignation en Basse Tension.",
          points: 5,
          difficulte: NiveauDifficulte.INTERMEDIAIRE
        }
      ]
    },
    {
      id: 'elec_ch14',
      titre: '14. Variateurs de Vitesse Électroniques (VFD / Onduleurs)',
      dureeEstimeeMin: 45,
      description: 'Principe du convertisseur statique : pont redresseur, bus continu DC, onduleur MLI (PWM) à IGBT et régulation scalaire U/f.',
      pointsCles: [
        'Structure interne : 1. Redresseur à diodes -> 2. Bus DC avec condensateurs de lissage -> 3. Onduleur triphasé à transistors IGBT',
        'MLI (Modulation de Largeur d\'Impulsion / PWM) : hachage à haute fréquence pour recréer une sinusoïde de fréquence et tension variables',
        'Loi U/f constante : permet de conserver le flux magnétique nominal et le couple moteur constant de 0 à 50 Hz',
        'Fonctionnalités avancées : rampes d\'accélération/décélération, freinage dynamique par résistance, protection thermique intégrée'
      ],
      formuleCle: 'f_{\\text{variable}} \\implies N_s = \\frac{60 \\times f}{p} \\quad \\text{(vitesse réglable avec précision)}',
      astuceTerrain: 'Pour éviter les perturbations électromagnétiques (CEM) et les courants parasites dans les roulements du moteur, utilisez toujours un câble blindé 4G avec raccordement à 360° du blindage à la terre.',
      conseilProfesseur: 'Le variateur de vitesse ne fait pas que varier la vitesse : il permet d\'économiser jusqu\'à 50% d\'énergie sur les pompes et ventilateurs grâce aux lois de proportionalité quadratiques.',
      contenuHtml: `
        <h3>1. Architecture Interne d'un Variateur de Vitesse Moderne</h3>
        <p>Le variateur de fréquence transforme une tension réseau fixe (400 V / 50 Hz) en une tension alternative triphasée à tension et fréquence totalement ajustables :</p>
        
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4 text-xs font-mono text-center">
          <div class="bg-blue-50 p-3 rounded-xl border border-blue-200">
            <span class="font-bold text-blue-900 block mb-1">1. Redresseur</span>
            Pont de Graetz à diodes convertissant le 400 V AC en tension pulsée.
          </div>
          <div class="bg-amber-50 p-3 rounded-xl border border-amber-200">
            <span class="font-bold text-amber-900 block mb-1">2. Bus Continu</span>
            Condensateurs électrolytiques lissant la tension à ~565 V DC ($400 \times \sqrt{2}$).
          </div>
          <div class="bg-emerald-50 p-3 rounded-xl border border-emerald-200">
            <span class="font-bold text-emerald-900 block mb-1">3. Onduleur IGBT</span>
            6 transistors de puissance commutant à 4-16 kHz par PWM (MLI).
          </div>
        </div>
      `,
      exercices: [
        {
          id: 'elec_ch14_ex1',
          type: TypeQuestion.QCM,
          question: "Pourquoi maintient-on le ratio U/f constant sur un variateur de vitesse jusqu'à la fréquence nominale de 50 Hz ?",
          reponsesPossibles: [
            'Pour maintenir le flux magnétique statorique et le couple disponible constants',
            'Pour diviser la consommation par deux',
            'Pour supprimer la mise à la terre',
            'Pour refroidir les semi-conducteurs'
          ],
          reponsesCorrectes: [0],
          explication: "Conserver le rapport U/f constant évite la saturation magnétique et permet de délivrer le couple nominal sur toute la plage de vitesse.",
          points: 5,
          difficulte: NiveauDifficulte.AVANCE
        }
      ]
    },
    {
      id: 'elec_ch15',
      titre: '15. Diagnostic Méthodique de Pannes & Maintenance Réseau',
      dureeEstimeeMin: 50,
      description: 'Méthodologie du dépannage, contrôle d\'isolement au mégohmmètre (500V DC), thermographie infrarouge et arbre des causes.',
      pointsCles: [
        'Méthode des tiers / dichotomie : diviser le circuit par son milieu pour isoler le tronçon défaillant en un minimum de mesures',
        'Contrôle d\'isolement : tension d\'épreuve de 500 V DC, valeur minimale réglementaire ≥ 0.5 MΩ (500 kΩ)',
        'Thermographie IR : détection des points chauds causés par les mauvais serrages et déséquilibres de phases',
        'Règle d\'or : analyser d\'abord les symptômes, consulter le schéma, émettre des hypothèses avant de démonter'
      ],
      formuleCle: 'R_{\\text{isolement}} \\ge 1\,000\\ \\Omega/\\text{V} \\implies \\ge 500\\text{ k}\\Omega \\text{ sous 500 V DC (NF C 15-100)}',
      astuceTerrain: 'Lors d\'un défaut d\'isolement intermittent, déconnectez les récepteurs un par un au niveau du tableau tout en surveillant la valeur de résistance d\'isolement au mégohmmètre.',
      conseilProfesseur: 'Un bon technicien passe 80% de son temps à réfléchir et mesurer méthodiquement, et 20% à réparer. Fuyez le tâtonnement au hasard.',
      contenuHtml: `
        <h3>1. La Démarche Méthodique de Diagnostic en 6 Étapes</h3>
        <ol class="space-y-1.5 my-3">
          <li><strong>1. Constat & Recueil d'Informations :</strong> Interroger l'opérateur, noter les voyants d'alarme, consulter l'historique de maintenance.</li>
          <li><strong>2. Analyse Fonctionnelle & Schémas :</strong> Identifier la chaîne cinématique et les capteurs/actionneurs associés sur le schéma électrique.</li>
          <li><strong>3. Formulation d'Hypothèses :</strong> Classer les pannes possibles par ordre de probabilité (alimentation, capteur, contacteur, commande automate).</li>
          <li><strong>4. Mesures & Tests d'Élimination :</strong> Vérifier les tensions d'alimentation, la continuité et les signaux de commande par dichotomie.</li>
          <li><strong>5. Réparation & Remplacement :</strong> Remplacer le composant défectueux par une référence équivalente avec réglage des calibres thermiques.</li>
          <li><strong>6. Essais & Compte-Rendu :</strong> Tester en mode manuel puis automatique, consigner l'intervention sur la GMAO.</li>
        </ol>

        <h3>2. Mesure d'Isolement au Mégohmmètre</h3>
        <p>Le contrôle d'isolement s'effectue hors tension entre chaque conducteur actif (Phase 1, Phase 2, Phase 3, Neutre) et la terre des masses (PE). Une valeur inférieure à $0{,}5\text{ M}\Omega$ signale une détérioration de l'isolant devant être traitée d'urgence.</p>
      `,
      exercices: [
        {
          id: 'elec_ch15_ex1',
          type: TypeQuestion.QCM,
          question: "Selon la norme NF C 15-100, quelle est la résistance minimale d'isolement admissible sous une tension d'essai de 500 V DC ?",
          reponsesPossibles: ['≥ 0.5 MΩ (500 000 Ω)', '≥ 10 Ω', '≥ 100 Ω', 'Exactement 0 Ω'],
          reponsesCorrectes: [0],
          explication: "La norme NF C 15-100 fixe la valeur limite absolue d'isolement à 0.5 MΩ (soit 500 kΩ) pour une installation basse tension.",
          points: 5,
          difficulte: NiveauDifficulte.EXPERT
        }
      ]
    }
  ]
};
