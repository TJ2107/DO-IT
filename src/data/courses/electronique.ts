import { Domaine, NiveauDifficulte, TypeQuestion, Cours } from '../../types';

export const COURSE_ELECTRONIQUE: Cours = {
  id: 'elec_201',
  domaine: Domaine.ELECTRONIQUE,
  domaineNom: 'Électronique',
  icon: '🔌',
  titre: "Électronique Analogique, Numérique & Puissance",
  description: 'Formation approfondie en 15 chapitres : composants RLC, diodes, transistors BJT/MOSFET, AOP, filtrage, conversion A/N, microcontrôleurs et alimentations à découpage.',
  niveau: NiveauDifficulte.INTERMEDIAIRE,
  dureeHeures: 50,
  colorClass: 'from-blue-600 to-indigo-700',
  titreBrevet: "Brevet Professionnel d'Électronique Appliquée & Systèmes Embarqués",
  objectifs: [
    'Caractériser les circuits passifs RLC et réponses fréquentielles',
    'Concevoir des étages de redressement, filtrage et régulation de tension',
    'Dimensionner des montages à transistors en commutation rapide et amplification',
    'Modéliser les montages à amplificateurs opérationnels linéaires et non linéaires',
    'Comprendre la conversion Analogique/Numérique (CAN/CNA) et le traitement du signal'
  ],
  competences: [
    'Composants passifs & Résonance RLC',
    'Semi-conducteurs & Diodes de puissance',
    'Transistors BJT, MOSFET & IGBT',
    'Montages à Amplificateurs Opérationnels (AOP)',
    'Alimentations à Découpage (Buck, Boost)',
    'Électronique Numérique & CAN/CNA',
    'Diagnostic et Mesures à l’Oscilloscope'
  ],
  preRequis: ['Bases de l’électricité (loi d’Ohm, Kirchhoff)'],
  certifiant: true,
  scoreMinValidation: 0.7,
  dureeValiditeMois: 36,
  devoirs: [
    {
      id: 'electronique_dev_1',
      numero: 1,
      titre: 'Devoir n°1 : Dimensionnement d’un Étage d’Alimentation Linéaire',
      chapitresCouverts: 'Chapitres 1 à 5',
      dureeEstimeeMin: 45,
      noteMax: 20,
      coefficient: 2,
      description: 'Calcul du condensateur de lissage après un pont de Graetz et dimensionnement d’un régulateur linéaire LM7805.',
      miseEnSituation: 'Un circuit de commande à microcontrôleur nécessite une tension continue stabilisée de 5.0 V sous un courant de charge I_load = 400 mA. La source est un transformateur 230V/9V RMS suivi d’un pont de diodes.',
      questions: [
        {
          id: 'q1',
          titre: 'Calcul de la tension crête redressée',
          enonce: 'Pour une tension efficace secondaire de 9.0 V RMS et une chute de tension totale dans le pont de 1.4 V (2 diodes passantes), quelle est la tension crête Vpeak aux bornes du condensateur de filtrage ?',
          points: 7,
          type: 'calcul',
          options: ['11.3 V', '9.0 V', '12.7 V', '7.6 V'],
          reponseCorrecteIndex: 0,
          solutionDetaillee: 'Vmax = 9.0 × √2 = 12.73 V. Après le pont de Graetz : Vpeak = 12.73 - 1.4 = 11.33 V ≈ 11.3 V.',
          baremeDetail: ['Calcul de la valeur crête : 3 pts', 'Prise en compte des 2 diodes : 4 pts']
        },
        {
          id: 'q2',
          titre: 'Calcul de la capacité de filtrage pour une ondulation de 1 V',
          enonce: 'Avec f = 100 Hz (redressement double alternance), I_load = 0.4 A et une ondulation crête-à-crête ΔV admissible de 1.0 V, quelle valeur de condensateur C_filtrage devez-vous choisir au minimum ? (C = I / (f × ΔV))',
          points: 7,
          type: 'calcul',
          options: ['4 000 µF (standard 4 700 µF)', '400 µF', '100 µF', '10 000 µF'],
          reponseCorrecteIndex: 0,
          solutionDetaillee: 'C = I / (f × ΔV) = 0.4 / (100 × 1.0) = 0.004 F = 4 000 µF. La valeur normalisée supérieure standard est 4 700 µF.',
          baremeDetail: ['Formule C = I / (f × ΔV) : 3 pts', 'Application et valeur standard 4 700 µF : 4 pts']
        },
        {
          id: 'q3',
          titre: 'Dissipation thermique du régulateur',
          enonce: 'Le régulateur linéaire LM7805 reçoit en moyenne 10.8 V en entrée et délivre 5.0 V sous 0.4 A. Quelle puissance thermique P_dissipée le radiateur doit-il évacuer ?',
          points: 6,
          type: 'calcul',
          options: ['2.32 W', '4.32 W', '0.40 W', '5.00 W'],
          reponseCorrecteIndex: 0,
          solutionDetaillee: 'P_diss = (Vin - Vout) × I = (10.8 - 5.0) × 0.4 = 5.8 × 0.4 = 2.32 W.',
          baremeDetail: ['Formule de perte thermique : 3 pts', 'Calcul 2.32 W : 3 pts']
        }
      ]
    }
  ],
  chapitres: [
    {
      id: 'elec2_ch1',
      titre: '1. Composants Passifs : Condensateurs & Inductances',
      dureeEstimeeMin: 40,
      description: 'Constantes de temps τ = RC et τ = L/R, stockage électrostatique et électromagnétique.',
      pointsCles: ['τ = R × C (secondes)', 'τ = L / R', '5 × τ = 99.3% de la charge'],
      formuleCle: 'Q = C × U | e = -L × (di/dt)',
      contenuHtml: `<p>Comportement transitoire des condensateurs et inductances lors des échelons de tension.</p>`,
      exercices: [{
        id: 'elec2_ch1_ex1',
        type: TypeQuestion.CHIFFREE,
        question: "Pour R = 4.7 kΩ et C = 220 µF, quelle est la constante de temps τ ?",
        reponsesPossibles: ['1.034 s', '0.103 s', '10.3 s', '4.7 s'],
        reponsesCorrectes: [0],
        explication: "τ = 4700 × 0.00022 = 1.034 s.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'elec2_ch2',
      titre: '2. Diodes PN, Zener, Schottky & Ponts de Graetz',
      dureeEstimeeMin: 40,
      description: 'Tension de seuil (0.7V silicium, 0.3V Schottky), tension d’avalanche Zener et redressement double alternance.',
      pointsCles: ['Silicium : 0.6-0.7V', 'Schottky : 0.2-0.3V (commutation rapide)', 'Zener : régulation en polarisation inverse'],
      formuleCle: 'Vout_Graetz = Vmax - 2 × Vd',
      contenuHtml: `<p>Physique des semi-conducteurs et structures de redressement de puissance.</p>`,
      exercices: [{
        id: 'elec2_ch2_ex1',
        type: TypeQuestion.QCM,
        question: "Quelle diode est spécifiquement conçue pour stabiliser une tension en opérant dans sa zone d'avalanche inverse ?",
        reponsesPossibles: ['Diode Zener', 'Diode Schottky', 'Diode Varicap', 'Diode électroluminescente (LED)'],
        reponsesCorrectes: [0],
        explication: "La diode Zener maintient une tension constante à ses bornes lorsqu'elle est polarisée en inverse au-delà de sa tension Vz.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'elec2_ch3',
      titre: '3. Transistors Bipolaires (BJT) : Commutation & Polarisation',
      dureeEstimeeMin: 45,
      description: 'NPN et PNP, gain en courant β (Hfe), saturation (Vce_sat ≈ 0.2V), blocage et droite de charge.',
      pointsCles: ['Ic = β × Ib', 'Saturation : Vce ≈ 0.2V (interrupteur fermé)', 'Blocage : Ib = 0 => Ic = 0'],
      formuleCle: 'Ib_sat = (Vcmd - 0.7) / Rb | Coeff de sursaturation k = 2 à 5',
      contenuHtml: `<p>Dimensionnement d'un transistor bipolaire pour commander un relais ou une charge inductive.</p>`,
      exercices: [{
        id: 'elec2_ch3_ex1',
        type: TypeQuestion.QCM,
        question: "Quel composant doit-on obligatoirement placer en parallèle inversé sur une bobine de relais commandée par un transistor ?",
        reponsesPossibles: ['Une diode de roue libre', 'Une résistance de 1 MΩ', 'Un fusible 50 A', 'Un condensateur électrolytique inversé'],
        reponsesCorrectes: [0],
        explication: "La diode de roue libre court-circuite la surtension inductive d'ouverture e = -L(di/dt) et protège le transistor de la destruction.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'elec2_ch4',
      titre: '4. Transistors à Effet de Champ MOSFET & IGBT',
      dureeEstimeeMin: 45,
      description: 'Canal N et P, commande en tension Vgs, résistance Rds_on, commutation haute fréquence et applications de puissance.',
      pointsCles: ['Commande en tension (courant de grille continu nul)', 'Rds_on milliohms', 'IGBT : hybride BJT/MOS pour haute tension et fort courant'],
      formuleCle: 'P_conduction = Rds_on × Id²',
      contenuHtml: `<p>Comparatif technologique MOSFET vs IGBT pour les onduleurs et hacheurs.</p>`,
      exercices: [{
        id: 'elec2_ch4_ex1',
        type: TypeQuestion.QCM,
        question: "Quel est le principal avantage de la grille isolée d'un transistor MOSFET par rapport à la base d'un transistor bipolaire ?",
        reponsesPossibles: ['Consommation de courant de commande statique quasi nulle (impédance d\'entrée infinie)', 'Il ne chauffe jamais', 'Il fonctionne sans tension', 'Il coûte 100 fois moins cher'],
        reponsesCorrectes: [0],
        explication: "Grâce à l'isolant d'oxyde sous la grille, aucun courant continu n'est consommé pour maintenir le MOSFET passant.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'elec2_ch5',
      titre: '5. Amplificateurs Opérationnels (AOP) en Régime Linéaire',
      dureeEstimeeMin: 45,
      description: 'Montages suiveur, amplificateur inverseur, non-inverseur, sommateur et soustracteur différentiel.',
      pointsCles: ['Hypothèse régime linéaire : V+ = V- (ε = 0)', 'Inverseur : Vs = - (R2/R1) × Ve', 'Non-inverseur : Vs = (1 + R2/R1) × Ve'],
      formuleCle: 'Gain_inv = - R2 / R1 | Gain_non_inv = 1 + (R2 / R1)',
      contenuHtml: `<p>Étude des circuits fondamentaux d'amplification linéaire de signaux analogiques.</p>`,
      exercices: [{
        id: 'elec2_ch5_ex1',
        type: TypeQuestion.CHIFFREE,
        question: "Dans un montage AOP inverseur avec R1 = 10 kΩ et R2 = 100 kΩ, quel est le gain en tension Av ?",
        reponsesPossibles: ['-10', '+10', '-100', '1'],
        reponsesCorrectes: [0],
        explication: "Av = - R2 / R1 = - 100 / 10 = -10.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'elec2_ch6',
      titre: '6. AOP en Régime Non-Linéaire : Comparateurs & Trigger de Schmitt',
      dureeEstimeeMin: 40,
      description: 'Comparateur simple, saturation haute/basse (+Vsat / -Vsat), comparateur à hystérésis pour éliminer le bruit.',
      pointsCles: ['V+ > V- => Vs = +Vsat', 'V+ < V- => Vs = -Vsat', 'Trigger de Schmitt : deux seuils de basculement Vh et Vb'],
      formuleCle: 'Hystérésis ΔV = Vh - Vb (immunité au bruit)',
      contenuHtml: `<p>Traitement des signaux tout-ou-rien et mise en forme d'ondes carrées sans rebonds.</p>`,
      exercices: [{
        id: 'elec2_ch6_ex1',
        type: TypeQuestion.QCM,
        question: "Pourquoi utilise-t-on un comparateur à hystérésis (Trigger de Schmitt) plutôt qu'un comparateur simple sur un signal bruité ?",
        reponsesPossibles: ['Pour éviter les oscillations et basculements multiples intempestifs autour du seuil', 'Pour augmenter la vitesse de la lumière', 'Pour alimenter le circuit sans pile', 'Pour filtrer les harmoniques de rang 3'],
        reponsesCorrectes: [0],
        explication: "L'hystérésis sépare le seuil montant du seuil descendant, empêchant le bruit haute fréquence de faire basculer la sortie à répétition.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'elec2_ch7',
      titre: '7. Filtrage Analogique Actif & Passif (Bode & Fréquence de Coupure)',
      dureeEstimeeMin: 45,
      description: 'Filtres passe-bas, passe-haut, passe-bande et réjecteur (Butterworth, Tchebychev), diagrammes de Bode et atténuation (-20 dB/décade).',
      pointsCles: ['fc = 1 / (2 × π × R × C)', 'À fc : Gain = -3 dB et déphasage = 45°', 'Ordre n => pente de -20×n dB/décade'],
      formuleCle: 'fc = 1 / (2 × π × R × C)',
      contenuHtml: `<p>Analyse spectrale, filtrage de signaux de capteurs et élimination du bruit 50 Hz.</p>`,
      exercices: [{
        id: 'elec2_ch7_ex1',
        type: TypeQuestion.CHIFFREE,
        question: "Quelle est la fréquence de coupure à -3dB d'un filtre RC passe-bas avec R = 1.59 kΩ et C = 100 nF ?",
        reponsesPossibles: ['1 000 Hz (1 kHz)', '100 Hz', '10 000 Hz', '50 Hz'],
        reponsesCorrectes: [0],
        explication: "fc = 1 / (2 × π × 1590 × 10⁻⁷) = 1 / (0.001) = 1 000 Hz.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'elec2_ch8',
      titre: '8. Oscillateurs & Générateurs de Signaux (NE555 & Quartz)',
      dureeEstimeeMin: 40,
      description: 'Montages astable et monostable du timer NE555, oscillateurs à quartz de haute précision et boucle à verrouillage de phase (PLL).',
      pointsCles: ['NE555 Astable : f = 1.44 / ((R1 + 2×R2) × C)', 'Rapport cyclique δ = (R1 + R2) / (R1 + 2×R2)', 'Quartz : stabilité en ppm'],
      formuleCle: 'T = 0.693 × (R1 + 2×R2) × C',
      contenuHtml: `<p>Génération d'horloges électroniques, signaux PWM et modulation de fréquence.</p>`,
      exercices: [{
        id: 'elec2_ch8_ex1',
        type: TypeQuestion.QCM,
        question: "En mode 'Astable', quel type de signal le circuit intégré NE555 produit-il sur sa broche de sortie 3 ?",
        reponsesPossibles: ['Un signal périodique rectangulaire / carré', 'Une tension continue pure de 12 V', 'Une onde sinusoïdale 50 Hz parfaite', 'Un signal aléatoire blanc'],
        reponsesCorrectes: [0],
        explication: "En mode astable, le NE555 oscille en permanence et délivre un train d'impulsions rectangulaires.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'elec2_ch9',
      titre: '9. Électronique Numérique Fondamentale & Portes Logiques',
      dureeEstimeeMin: 40,
      description: 'Algèbre de Boole, tables de vérité, portes ET, OU, NON, NON-ET, NON-OU, OU-Exclusif (XOR) et tableaux de Karnaugh.',
      pointsCles: ['Portes universelles NAND et NOR', 'Théorèmes de De Morgan : /(A.B) = /A + /B', 'Simplification de Karnaugh'],
      formuleCle: 'A ⊕ B = A./B + /A.B (XOR)',
      contenuHtml: `<p>Logique combinatoire et conception de circuits logiques optimisés.</p>`,
      exercices: [{
        id: 'elec2_ch9_ex1',
        type: TypeQuestion.QCM,
        question: "Dans une porte logique XOR (OU Exclusif), quel est l'état de la sortie si les deux entrées A et B sont toutes deux au niveau logique 1 ?",
        reponsesPossibles: ['0 (Niveau bas)', '1 (Niveau haut)', 'Haute impédance (Hi-Z)', 'Indéterminé'],
        reponsesCorrectes: [0],
        explication: "Pour un XOR, la sortie vaut 1 si et seulement si une seule des deux entrées est à 1. Si A=1 et B=1, la sortie est 0.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'elec2_ch10',
      titre: '10. Circuits Séquentiels : Bascules D, JK & Compteurs',
      dureeEstimeeMin: 45,
      description: 'Bascule RS, Bascule D synchrone sur front d’horloge, Bascule JK, registres à décalage et compteurs binaires/décimaux.',
      pointsCles: ['Effet mémoire de l\'état précédent Q_n', 'Déclenchement sur front montant/descendant d\'horloge (CLK)', 'Division de fréquence par 2 avec bascule D bouclée'],
      formuleCle: 'f_divisee = f_horloge / 2^n (pour n étages)',
      contenuHtml: `<p>Conception de machines d'états finis, temporisateurs et automates matériels.</p>`,
      exercices: [{
        id: 'elec2_ch10_ex1',
        type: TypeQuestion.QCM,
        question: "Quel rôle remplit une bascule D dont la sortie inversée /Q est rebouclée sur son entrée D à chaque impulsion d'horloge ?",
        reponsesPossibles: ['Diviseur de fréquence d\'horloge par 2', 'Multiplicateur par 10', 'Court-circuit', 'Générateur de bruit'],
        reponsesCorrectes: [0],
        explication: "À chaque front d'horloge, l'état bascule, produisant une onde carrée de fréquence exactement égale à la moitié de la fréquence d'entrée.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'elec2_ch11',
      titre: '11. Conversion Analogique/Numérique (CAN) & Numérique/Analogique (CNA)',
      dureeEstimeeMin: 45,
      description: 'Théorème d’échantillonnage de Nyquist-Shannon (fe ≥ 2×fmax), résolution en bits, pas de quantification (quantum q = Vref / 2^n) et filtre anti-repliement.',
      pointsCles: ['q = Vref / 2^n (Volts)', 'CAN Flash, Approximation successive (SAR), Sigma-Delta', 'Bruit de quantification SNR ≈ 6.02×n + 1.76 dB'],
      formuleCle: 'Quantum q = Vref / 2^n | Fe ≥ 2 × Fmax (Shannon)',
      contenuHtml: `<p>Numérisation haute fidélité des capteurs industriels et traitement du signal.</p>`,
      exercices: [{
        id: 'elec2_ch11_ex1',
        type: TypeQuestion.CHIFFREE,
        question: "Pour un convertisseur CAN 10 bits avec une tension de référence de 5.0 V, quelle est la valeur du quantum q ?",
        reponsesPossibles: ['4.88 mV', '48.8 mV', '0.5 V', '1.0 mV'],
        reponsesCorrectes: [0],
        explication: "q = 5.0 V / 2¹⁰ = 5.0 / 1024 = 0.00488 V = 4.88 mV.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'elec2_ch12',
      titre: '12. Alimentations à Découpage (SMPS : Buck, Boost & Flyback)',
      dureeEstimeeMin: 50,
      description: 'Convertisseur abaisseur (Buck), élévateur (Boost), transformateur Flyback isolé, rendement élevé (> 85%) et selfs de lissage.',
      pointsCles: ['Buck : Vout = α × Vin (0 < α < 1)', 'Boost : Vout = Vin / (1 - α)', 'Rendement thermique très supérieur aux régulateurs linéaires'],
      formuleCle: 'Vout_buck = α × Vin | Vout_boost = Vin / (1 - α)',
      contenuHtml: `<p>Architecture des alimentations modernes compactes pour serveurs et systèmes industriels.</p>`,
      exercices: [{
        id: 'elec2_ch12_ex1',
        type: TypeQuestion.CHIFFREE,
        question: "Dans un hacheur Buck abaisseur alimenté en Vin = 24 V avec un rapport cyclique α = 0.25 (25%), que vaut la tension de sortie Vout ?",
        reponsesPossibles: ['6.0 V', '12.0 V', '48.0 V', '3.3 V'],
        reponsesCorrectes: [0],
        explication: "Vout = α × Vin = 0.25 × 24 = 6.0 V.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'elec2_ch13',
      titre: '13. Bus de Communication Séries : I2C, SPI, UART & CAN Bus',
      dureeEstimeeMin: 45,
      description: 'Bus I2C (SDA/SCL à collecteur ouvert avec pull-up), bus SPI (MOSI, MISO, SCK, CS), liaison UART (TX/RX) et bus différentiel CAN industriel.',
      pointsCles: ['I2C : 2 fils, adressage matériel', 'SPI : Full duplex très rapide', 'CAN Bus : Paire torsadée différentielle ultra-robuste automobile/industrie'],
      formuleCle: 'I2C : Vcc avec résistances de pull-up (ex: 4.7 kΩ)',
      contenuHtml: `<p>Interfaçage de capteurs numériques, mémoires EEPROM et réseaux de bord.</p>`,
      exercices: [{
        id: 'elec2_ch13_ex1',
        type: TypeQuestion.QCM,
        question: "Quel bus de communication synchrone utilise 4 lignes (MOSI, MISO, SCK, CS) et permet des transferts full-duplex à très haute vitesse ?",
        reponsesPossibles: ['Bus SPI (Serial Peripheral Interface)', 'Bus I2C', 'Liaison RS-232', 'Bus 1-Wire'],
        reponsesCorrectes: [0],
        explication: "Le bus SPI utilise 4 lignes distinctes et permet d'atteindre des dizaines de MHz de débit sans surcharge d'adressage.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'elec2_ch14',
      titre: '14. Compatibilité Électromagnétique (CEM) & Routage PCB',
      dureeEstimeeMin: 45,
      description: 'Perturbations conduites et rayonnées, plan de masse ininterrompu, condensateurs de découplage (100 nF céramique au plus près des CI) et boucles de masse.',
      pointsCles: ['Découplage obligatoire sur chaque broche Vcc', 'Éviter les pistes à angle droit (privilégier 45°)', 'Plan de masse continu (réduction de la surface des boucles)'],
      formuleCle: 'V_parasite = - dΦ/dt = - S × (dB/dt) (minimiser la surface S)',
      contenuHtml: `<p>Bonnes pratiques de conception de circuits imprimés fiables résistant aux environnements industriels sévères.</p>`,
      exercices: [{
        id: 'elec2_ch14_ex1',
        type: TypeQuestion.QCM,
        question: "Où doit-on implanter physiquement le condensateur de découplage de 100 nF sur un circuit imprimé ?",
        reponsesPossibles: ['Au plus près des broches d\'alimentation Vcc/GND du circuit intégré', 'Au fond du boîtier loin de tout composant', 'Sur le cordon secteur 230 V', 'N\'importe où sans importance'],
        reponsesCorrectes: [0],
        explication: "Pour minimiser l'inductance parasite des pistes et absorber les appels de courant transitoires, il doit être placé au plus près du boîtier.",
        points: 5,
        difficulte: NiveauDifficulte.AVANCE
      }]
    },
    {
      id: 'elec2_ch15',
      titre: '15. Diagnostic Électronique & Mesures à l’Oscilloscope Numérique',
      dureeEstimeeMin: 50,
      description: 'Déclenchement (Trigger Edge/Pulse), couplage AC/DC/GND, atténuation des sondes (1X/10X), analyse spectrale FFT et détection de jitter ou rebonds.',
      pointsCles: ['Sonde 10X : divise par 10 la charge capacitive sur le circuit', 'Réglage Trigger pour stabiliser l\'affichage', 'Mesures automatiques Vpp, Vrms, Fréquence, Rise Time'],
      formuleCle: 'Bande passante de l\'oscilloscope ≥ 3 à 5 × Fréquence du signal',
      contenuHtml: `<p>Méthodologie avancée de recherche de signaux parasites, glitches et défaillances de composants.</p>`,
      exercices: [{
        id: 'elec2_ch15_ex1',
        type: TypeQuestion.QCM,
        question: "Pourquoi privilégie-t-on une sonde d'oscilloscope en position 10X plutôt que 1X pour mesurer un signal numérique rapide ?",
        reponsesPossibles: ['Pour réduire la charge capacitive introduite sur le circuit et augmenter la bande passante', 'Pour doubler la tension mesurée', 'Pour éclairer l\'écran', 'Pour couper le son'],
        reponsesCorrectes: [0],
        explication: "La position 10X augmente l'impédance d'entrée à 10 MΩ et réduit la capacité parasite (~10-15 pF), préservant la fidélité des fronts rapides.",
        points: 5,
        difficulte: NiveauDifficulte.EXPERT
      }]
    }
  ]
};
