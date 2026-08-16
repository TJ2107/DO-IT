import { Domaine, NiveauDifficulte, TypeQuestion, Cours } from '../../types';

export const COURSE_MECANIQUE: Cours = {
  id: 'meca_101',
  domaine: Domaine.MECANIQUE,
  domaineNom: 'Mécanique',
  icon: '⚙️',
  titre: "Mécanique Industrielle & Transmission de Puissance",
  description: 'Cursus certifiant en 15 chapitres : cinématique, statique du solide, résistance des matériaux (RDM), guidages, engrenages, roulements, hydraulique et pneumatique industrielle.',
  niveau: NiveauDifficulte.INTERMEDIAIRE,
  dureeHeures: 48,
  colorClass: 'from-amber-600 to-orange-700',
  titreBrevet: "Brevet Professionnel de Mécanique Industrielle & Productique",
  objectifs: [
    'Calculer l’équilibre statique des systèmes mécaniques',
    'Dimensionner les pièces soumises à la traction, compression, flexion et torsion (RDM)',
    'Calculer les rapports de réduction et couples des trains d’engrenages et courroies',
    'Sélectionner et calculer la durée de vie nominale L10h des roulements à billes/rouleaux',
    'Concevoir et dépanner des circuits hydrauliques et pneumatiques de puissance'
  ],
  competences: [
    'Statique & Principe Fondamental (PFS)',
    'Résistance des Matériaux (RDM : σ = F/S ≤ Rpe)',
    'Trains d’Engrenages & Réducteurs',
    'Calcul de Roulements & Durée L10',
    'Liaisons Mécaniques & Tolérancements ISO (GPS)',
    'Circuits Pneumatiques & Distributeurs',
    'Hydraulique Industrielle & Pompes'
  ],
  preRequis: ['Trigonométrie, vecteurs, unités SI fondamentales'],
  certifiant: true,
  scoreMinValidation: 0.7,
  dureeValiditeMois: 36,
  devoirs: [
    {
      id: 'meca_dev_1',
      numero: 1,
      titre: 'Devoir n°1 : Dimensionnement en RDM d’un Arbre de Transmission',
      chapitresCouverts: 'Chapitres 1 à 5',
      dureeEstimeeMin: 45,
      noteMax: 20,
      coefficient: 2,
      description: 'Calcul de la contrainte normale admissible et du diamètre minimal d’un tirant soumis à une traction axiale de 45 kN.',
      miseEnSituation: 'Un tirant en acier allié (limite élastique Re = 480 MPa) supporte une charge de traction pure F = 45 000 N avec un coefficient de sécurité s = 3.0.',
      questions: [
        {
          id: 'q1',
          titre: 'Calcul de la résistance pratique à l’extension (Rpe)',
          enonce: 'Quelle est la contrainte admissible maximale (Rpe) du matériau ? (Rpe = Re / s)',
          points: 6,
          type: 'calcul',
          options: ['160 MPa (N/mm²)', '120 MPa', '240 MPa', '480 MPa'],
          reponseCorrecteIndex: 0,
          solutionDetaillee: 'Rpe = Re / s = 480 / 3.0 = 160 MPa (160 N/mm²).',
          baremeDetail: ['Formule Rpe = Re / s : 3 pts', 'Calcul 160 MPa : 3 pts']
        },
        {
          id: 'q2',
          titre: 'Calcul de la section minimale S',
          enonce: 'Pour respecter la condition de résistance σ = F / S ≤ Rpe, quelle doit être la section transversale minimale S en mm² ?',
          points: 7,
          type: 'calcul',
          options: ['281.25 mm²', '150.00 mm²', '350.50 mm²', '90.00 mm²'],
          reponseCorrecteIndex: 0,
          solutionDetaillee: 'S ≥ F / Rpe = 45 000 N / 160 N/mm² = 281.25 mm².',
          baremeDetail: ['Formule S = F / Rpe : 3 pts', 'Calcul 281.25 mm² : 4 pts']
        },
        {
          id: 'q3',
          titre: 'Calcul du diamètre minimal de la barre ronde',
          enonce: 'Sachant que pour une section circulaire S = (π × d²) / 4, quel diamètre minimal standard de barre ronde d_min devez-vous choisir ?',
          points: 7,
          type: 'calcul',
          options: ['d ≥ 19 mm (choix standard 20 mm)', 'd = 12 mm', 'd = 15 mm', 'd = 30 mm'],
          reponseCorrecteIndex: 0,
          solutionDetaillee: 'd = √( (4 × S) / π ) = √( (4 × 281.25) / 3.14159 ) = √(358.1) = 18.92 mm. On retient le diamètre standard 20 mm.',
          baremeDetail: ['Formule inverse d = √(4S/π) : 3 pts', 'Calcul 18.92 mm et sélection standard 20 mm : 4 pts']
        }
      ]
    }
  ],
  chapitres: [
    {
      id: 'meca_ch1',
      titre: '1. Systèmes d’Unités & Statique du Solide (PFS)',
      dureeEstimeeMin: 40,
      description: 'Forces, moments mécaniques (M = F × d), équilibre des corps solides et principe fondamental de la statique.',
      pointsCles: ['Σ Forces = 0', 'Σ Moments = 0', 'Unité du moment : Newton-mètre (N·m)'],
      formuleCle: 'Σ F_ext = 0 | Σ M_O(F_ext) = 0',
      contenuHtml: `<p>Étude des actions mécaniques de contact et à distance à l'équilibre statique.</p>`,
      exercices: [{
        id: 'meca_ch1_ex1',
        type: TypeQuestion.CHIFFREE,
        question: "Une force perpendiculaire de 250 N est appliquée au bout d'une clé de longueur 0.40 m. Quel est le moment résultant en N·m ?",
        reponsesPossibles: ['100 N·m', '625 N·m', '25 N·m', '50 N·m'],
        reponsesCorrectes: [0],
        explication: "Moment M = F × d = 250 × 0.40 = 100 N·m.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'meca_ch2',
      titre: '2. Liaisons Mécaniques Élémentaires & Degrés de Liberté',
      dureeEstimeeMin: 40,
      description: 'Les 11 liaisons normalisées : Pivot, Glissière, Encastrement, Rotule, Hélicoïdale, Appui-plan, Linéaire-rectiligne.',
      pointsCles: ['6 degrés de liberté (3 translations Tx, Ty, Tz et 3 rotations Rx, Ry, Rz)', 'Pivot : 1 rotation', 'Glissière : 1 translation'],
      formuleCle: 'Nombre de mobilités m = 6 - Degrés de liaison',
      contenuHtml: `<p>Analyse cinématique des mécanismes et torseurs d'actions mécaniques.</p>`,
      exercices: [{
        id: 'meca_ch2_ex1',
        type: TypeQuestion.QCM,
        question: "Combien de degrés de liberté autorise une liaison 'Pivot' parfaite ?",
        reponsesPossibles: ['1 seul degré de liberté (1 rotation)', '2 degrés de liberté (1 translation et 1 rotation)', '3 rotations', 'Aucun (0)'],
        reponsesCorrectes: [0],
        explication: "La liaison pivot ne permet qu'un unique mouvement de rotation autour de son axe géométrique.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'meca_ch3',
      titre: '3. Résistance des Matériaux (RDM) : Traction & Compression Simple',
      dureeEstimeeMin: 45,
      description: 'Contrainte normale σ = F/S, module d’élasticité d’Young E, allongement élastique ΔL = (F×L)/(E×S) et coefficient de sécurité.',
      pointsCles: ['Loi de Hooke : σ = E × ε', 'Condition de résistance : σ ≤ Rpe = Re / s', 'Module d\'Young acier E ≈ 210 GPa'],
      formuleCle: 'σ = F / S ≤ Re / s',
      contenuHtml: `<p>Dimensionnement élastique des structures et choix des matériaux métalliques.</p>`,
      exercices: [{
        id: 'meca_ch3_ex1',
        type: TypeQuestion.CHIFFREE,
        question: "Une barre d'acier de section S = 100 mm² supporte une force de traction F = 20 000 N. Quelle est la contrainte σ en MPa (N/mm²) ?",
        reponsesPossibles: ['200 MPa', '20 MPa', '2 000 MPa', '50 MPa'],
        reponsesCorrectes: [0],
        explication: "σ = F / S = 20 000 / 100 = 200 MPa (ou N/mm²).",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'meca_ch4',
      titre: '4. RDM : Flexion Simple des Poutres & Moments Quadratiques',
      dureeEstimeeMin: 45,
      description: 'Effort tranchant Ty, moment fléchissant Mfz, moment quadratique Iz, contrainte maximale σ_max = (Mfz / Iz) × y_max et flèche f.',
      pointsCles: ['Poutre rectangulaire : Iz = (b × h³) / 12', 'Poutre cylindrique : Iz = (π × d⁴) / 64', 'Condition de rigidité : flèche f ≤ L / 500'],
      formuleCle: 'σ_max = (Mfz_max / Iz) × v ≤ Rpe',
      contenuHtml: `<p>Calcul des poutres de ponts roulants, bâtis de machines et flèches de charge.</p>`,
      exercices: [{
        id: 'meca_ch4_ex1',
        type: TypeQuestion.QCM,
        question: "Pour une poutre rectangulaire en flexion, si l'on double sa hauteur h dans le sens de l'effort, par combien est multiplié son moment quadratique Iz ?",
        reponsesPossibles: ['Par 8 (car h³ => 2³ = 8)', 'Par 2', 'Par 4', 'Par 16'],
        reponsesCorrectes: [0],
        explication: "Iz = (b × h³) / 12. Doubler la hauteur multiplie le moment d'inertie par 2³ = 8, augmentant considérablement la rigidité.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'meca_ch5',
      titre: '5. RDM : Torsion Simple & Arbres de Transmission',
      dureeEstimeeMin: 45,
      description: 'Moment de torsion Mt, contrainte de cisaillement τ_max = (Mt / Io) × R, module de Coulomb G et angle unitaire de torsion θ.',
      pointsCles: ['Arbre plein circulaire : Io = (π × d⁴) / 32', 'Condition de résistance : τ_max ≤ Rpg = Reg / s', 'Puissance P = C × ω'],
      formuleCle: 'C = P / ω | τ_max = 16 × C / (π × d³)',
      contenuHtml: `<p>Dimensionnement des arbres tournants de moteurs, turbines et réducteurs.</p>`,
      exercices: [{
        id: 'meca_ch5_ex1',
        type: TypeQuestion.CHIFFREE,
        question: "Un moteur électrique délivre une puissance P = 15 kW à la vitesse de rotation N = 1 500 tr/min (soit ω = 157.08 rad/s). Quel est le couple moteur C en N·m ?",
        reponsesPossibles: ['95.5 N·m', '150.0 N·m', '10.0 N·m', '225.5 N·m'],
        reponsesCorrectes: [0],
        explication: "C = P / ω = 15 000 / 157.08 = 95.49 N·m ≈ 95.5 N·m.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'meca_ch6',
      titre: '6. Cinématique & Transmission par Engrenages',
      dureeEstimeeMin: 45,
      description: 'Module m, diamètre primitif d = m × Z, rapport de réduction r = Z_menant / Z_mene = N_sortie / N_entree, trains simples et épicycloïdaux.',
      pointsCles: ['Pas p = π × m', 'Rapport r = (-1)^k × (Produit Z_menantes / Produit Z_menees)', 'Couple de sortie C_sortie = C_entree / r × rendement'],
      formuleCle: 'd = m × Z | r = N2 / N1 = Z1 / Z2',
      contenuHtml: `<p>Géométrie des dentures en développante de cercle et calcul des trains réducteurs.</p>`,
      exercices: [{
        id: 'meca_ch6_ex1',
        type: TypeQuestion.CHIFFREE,
        question: "Un pignon de Z1 = 20 dents tournant à 1 800 tr/min entraîne une roue dentée de Z2 = 60 dents. Quelle est la vitesse de sortie N2 ?",
        reponsesPossibles: ['600 tr/min', '5 400 tr/min', '300 tr/min', '900 tr/min'],
        reponsesCorrectes: [0],
        explication: "N2 = N1 × (Z1 / Z2) = 1800 × (20 / 60) = 1800 × (1/3) = 600 tr/min.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'meca_ch7',
      titre: '7. Guidage en Rotation : Roulements à Billes & Rouleaux',
      dureeEstimeeMin: 45,
      description: 'Types de roulements (radiaux, à contact oblique, à rouleaux coniques), montages en X et en O, ajustements d’arbres et d’alésages.',
      pointsCles: ['Bague tournante par rapport à la charge = Ajustement serré', 'Bague fixe par rapport à la charge = Ajustement glissant', 'Durée L10 en millions de tours'],
      formuleCle: 'L10 = (C / P)^p (p=3 pour billes, p=10/3 pour rouleaux)',
      contenuHtml: `<p>Règles de montage mécanique et calcul de fiabilité selon la norme ISO 281.</p>`,
      exercices: [{
        id: 'meca_ch7_ex1',
        type: TypeQuestion.QCM,
        question: "Dans le montage d'un roulement sur un arbre tournant sous charge radiale fixe, comment doit être ajustée la bague intérieure ?",
        reponsesPossibles: ['Ajustement serré (pour éviter le phénomène de matage par laminage)', 'Ajustement très libre avec 2 mm de jeu', 'Collée à la glu liquide', 'Sans aucun contact'],
        reponsesCorrectes: [0],
        explication: "La bague qui tourne par rapport à la direction de la charge radiale doit impérativement être montée serrée.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'meca_ch8',
      titre: '8. Transmissions Flexibles : Courroies (Trapézoïdales, Synchrones) & Chaînes',
      dureeEstimeeMin: 40,
      description: 'Courroies trapézoïdales, courroies crantées synchrones HTD, chaînes à rouleaux ISO 606 et calcul de tension de pose.',
      pointsCles: ['Courroie crantée : aucun glissement (rapport strict)', 'Trapézoïdale : adhérence par effet de coin', 'Rendement élevé (96-98%)'],
      formuleCle: 'Tension T / t = e^(f × α) (formule d\'Eytelwein)',
      contenuHtml: `<p>Dimensionnement des entraînements par éléments flexibles et maintenance préventive de tension.</p>`,
      exercices: [{
        id: 'meca_ch8_ex1',
        type: TypeQuestion.QCM,
        question: "Quel est l'avantage principal d'une courroie crantée synchrone par rapport à une courroie plate ou trapézoïdale ?",
        reponsesPossibles: ['Transmission sans aucun glissement garantissant un synchronisme parfait entre les arbres', 'Elle ne coûte rien', 'Elle n\'a pas besoin de poulies', 'Elle tourne à vitesse supraluminique'],
        reponsesCorrectes: [0],
        explication: "Les dents de la courroie s'engrènent dans les gorges de la poulie, éliminant tout risque de patinage.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'meca_ch9',
      titre: '9. Tolérancements Dimensionnels & Géométriques ISO (GPS)',
      dureeEstimeeMin: 45,
      description: 'Ajustements normalisés ISO (ex: H7/g6, H7/p6), tolérances de forme (planéité, cylindricité), d’orientation (parallélisme, perpendicularité) et de position (localisation).',
      pointsCles: ['Système de l\'alésage normal H (écart inférieur = 0)', 'Ajustement avec jeu (ex: H7/f7), incertain (H7/js6), serré (H7/p6)', 'Symboles géométriques GPS'],
      formuleCle: 'Jeu max = Alésage max - Arbre min | Jeu min = Alésage min - Arbre max',
      contenuHtml: `<p>Lecture et interprétation rigoureuse des plans d'exécution industriels.</p>`,
      exercices: [{
        id: 'meca_ch9_ex1',
        type: TypeQuestion.QCM,
        question: "Dans la désignation d'un ajustement Ø 40 H7/p6, quel est le type de montage obtenu ?",
        reponsesPossibles: ['Un ajustement serré avec serrage garanti', 'Un ajustement avec jeu libre important', 'Un ajustement plastique', 'Un filetage'],
        reponsesCorrectes: [0],
        explication: "La lettre 'p' pour l'arbre indique un écart fondamental supérieur à l'alésage H7, créant un ajustement serré nécessitant une presse ou un frettage thermique.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'meca_ch10',
      titre: '10. Pneumatique Industrielle : Génération, Traitement d’Air & FRL',
      dureeEstimeeMin: 45,
      description: 'Compresseurs d’air, groupe de traitement d’air FRL (Filtre, Régulateur de pression, Lubrificateur), point de rosée et réseau de distribution.',
      pointsCles: ['Pression standard d\'atelier : 6 bars (0.6 MPa)', 'FRL : indispensable à l\'entrée de chaque machine', 'Purge automatique des condensats'],
      formuleCle: '1 bar = 10⁵ Pa = 0.1 N/mm²',
      contenuHtml: `<p>Production et conditionnement de l'air comprimé propre et sec pour automatismes.</p>`,
      exercices: [{
        id: 'meca_ch10_ex1',
        type: TypeQuestion.QCM,
        question: "Que signifie le sigle 'FRL' désignant le module d'entrée d'air comprimé d'une machine pneumatique ?",
        reponsesPossibles: ['Filtre - Régulateur de pression - Lubrificateur', 'Frein - Ressort - Levier', 'Fusible - Résistance - Lampe', 'Fluide - Refroidisseur - Ligne'],
        reponsesCorrectes: [0],
        explication: "Le groupe FRL filtre les impuretés, régule la pression de service et injecte un brouillard d'huile protecteur si requis.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'meca_ch11',
      titre: '11. Actionneurs & Distributeurs Pneumatiques (Vérins, Distributeurs 5/2, 3/2)',
      dureeEstimeeMin: 45,
      description: 'Vérins simple effet (VSE) et double effet (VDE), calcul de l’effort de poussée F = P × S, distributeurs monostables et bistables, régleurs de débit.',
      pointsCles: ['Section piston Sp = (π × D²) / 4', 'Section tige annulaire St = π × (D² - d²) / 4', 'Distributeur 5/2 pour pilotage de vérin double effet'],
      formuleCle: 'F_theorique = Pression × Surface = P × S',
      contenuHtml: `<p>Schématisation normalisée ISO 1219 et câblage de circuits séquentiels pneumatiques.</p>`,
      exercices: [{
        id: 'meca_ch11_ex1',
        type: TypeQuestion.CHIFFREE,
        question: "Quelle force théorique de poussée F développe un vérin pneumatique d'alésage D = 50 mm sous une pression de 6 bars (0.6 N/mm²) ? (S = 1 963 mm²)",
        reponsesPossibles: ['1 178 N (≈ 118 kgf)', '117 N', '5 890 N', '300 N'],
        reponsesCorrectes: [0],
        explication: "F = P × S = 0.6 N/mm² × 1 963.5 mm² = 1 178.1 N.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'meca_ch12',
      titre: '12. Hydraulique Industrielle Fondamentale & Pompes',
      dureeEstimeeMin: 50,
      description: 'Fluides incompressibles (huiles minérales ISO VG 46), pompes à engrenages, à palettes et à pistons axiaux, débits Q = V_cyl × N et pressions élevées (100 à 350 bars).',
      pointsCles: ['Loi de Pascal : la pression s\'exerce également dans toutes les directions', 'Puissance hydraulique P_hyd = p (bar) × Q (L/min) / 600 (kW)', 'Rendement volumétrique et mécanique'],
      formuleCle: 'P_hyd (kW) = (p × Q) / 600 | Q = Cylindrée × Vitesse',
      contenuHtml: `<p>Technologie des centrales hydrauliques de forte puissance pour presses et engins de levage.</p>`,
      exercices: [{
        id: 'meca_ch12_ex1',
        type: TypeQuestion.CHIFFREE,
        question: "Quelle puissance hydraulique en kW fournit une pompe débitant 30 L/min sous une pression de 200 bars ?",
        reponsesPossibles: ['10.0 kW', '6.0 kW', '60.0 kW', '2.0 kW'],
        reponsesCorrectes: [0],
        explication: "P (kW) = (p × Q) / 600 = (200 × 30) / 600 = 6 000 / 600 = 10.0 kW.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'meca_ch13',
      titre: '13. Appareillage Hydraulique : Limiteurs de Pression, Clapets & Distributeurs',
      dureeEstimeeMin: 45,
      description: 'Limiteur de pression principal (sécurité du groupe), réducteurs de pression, clapets anti-retour pilotés pour blocage de charge et filtration en retour.',
      pointsCles: ['Limiteur de pression : taré à 10-15% au-dessus de la pression de travail', 'Clapet piloté : anti-chute de charge', 'Filtration absolue βx ≥ 200'],
      formuleCle: 'Pression de tarage = P_service + Marge de sécurité',
      contenuHtml: `<p>Sécurité hydraulique des circuits sous haute pression et prévention du coup de bélier.</p>`,
      exercices: [{
        id: 'meca_ch13_ex1',
        type: TypeQuestion.QCM,
        question: "Quel organe hydraulique obligatoire protège la pompe et l'ensemble du circuit contre les surpressions destructrices ?",
        reponsesPossibles: ['Le limiteur de pression (clapet de décharge)', 'Le manomètre à glycérine', 'Le flexible armé', 'Le réservoir à air libre'],
        reponsesCorrectes: [0],
        explication: "Le limiteur de pression s'ouvre automatiquement vers le bac lorsque la pression atteint le seuil critique de tarage.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'meca_ch14',
      titre: '14. Lubrification Industrielle, Tribologie & Usure Mécanique',
      dureeEstimeeMin: 45,
      description: 'Régimes de lubrification (onctueux, hydrodynamique, élasto-hydrodynamique EHD), viscosité cinématique cSt à 40°C, graisses au savon de lithium et analyse d’huile (spectrométrie de particules d’usure).',
      pointsCles: ['Viscosité ISO VG (ex: VG 68)', 'Film d\'huile hydrodynamique de Stribeck', 'Analyse de fer (Fe), cuivre (Cu) dans l\'huile'],
      formuleCle: 'Courbe de Stribeck : coefficient de frottement f en fonction de (η × N) / P',
      contenuHtml: `<p>Stratégies de graissage et surveillance de la dégradation des surfaces frottantes.</p>`,
      exercices: [{
        id: 'meca_ch14_ex1',
        type: TypeQuestion.QCM,
        question: "Dans le régime de lubrification 'hydrodynamique', comment le contact direct métal-métal est-il évité ?",
        reponsesPossibles: ['Par la formation d\'un coin d\'huile sous pression généré par la vitesse relative des surfaces en mouvement', 'Par un champ magnétique', 'Par l\'évaporation du fluide', 'Par un isolant thermique en téflon'],
        reponsesCorrectes: [0],
        explication: "La vitesse d'entraînement crée une portance hydrodynamique qui sépare complètement les deux surfaces métalliques.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'meca_ch15',
      titre: '15. Maintenance Prédictive : Analyse Vibratoire & Équilibrage',
      dureeEstimeeMin: 50,
      description: 'Spectres vibratoires FFT, détection de balourd (1X), désalignement (2X), défauts de roulements (BPFO, BPFI) et lignage laser des arbres mécaniques.',
      pointsCles: ['Balourd : pic dominant à la fréquence de rotation 1X', 'Désalignement angulaire et parallèle : pic à 2X et 1X axial', 'Lignage laser en tolérance < 0.05 mm'],
      formuleCle: 'Vitesse vibratoire RMS (mm/s) selon norme ISO 10816-3',
      contenuHtml: `<p>Diagnostic vibratoire sans démontage et méthodologie d'intervention sur machines tournantes industrielles.</p>`,
      exercices: [{
        id: 'meca_ch15_ex1',
        type: TypeQuestion.QCM,
        question: "Sur un spectre vibratoire d'une machine tournante, que révèle généralement un pic prédominant très net à la fréquence exacte de rotation (1X) ?",
        reponsesPossibles: ['Un défaut de balourd (déséquilibre de masse sur le rotor)', 'Un court-circuit dans le moteur', 'Une fuite d\'huile', 'Un défaut d\'isolation acoustique'],
        reponsesCorrectes: [0],
        explication: "Le balourd génère une force centrifuge sinusoïdale synchrone à la vitesse de rotation, visible par une raie dominante à 1X.",
        points: 5,
        difficulte: NiveauDifficulte.EXPERT
      }]
    }
  ]
};
