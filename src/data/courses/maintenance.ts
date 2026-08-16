import { Domaine, NiveauDifficulte, TypeQuestion, Cours } from '../../types';

export const COURSE_MAINTENANCE: Cours = {
  id: 'maint_101',
  domaine: Domaine.MAINTENANCE,
  domaineNom: 'Maintenance Industrielle',
  icon: '🔧',
  titre: "Maintenance Industrielle, Fiabilité TPM & Diagnostic Méthodique",
  description: 'Cursus certifiant en 15 chapitres : indicateurs de fiabilité (MTBF, MTTR, Disponibilité), maintenance préventive/conditionnelle, Total Productive Maintenance (TPM), AMDEC, GMAO, méthode 5S et gestion des pièces de rechange.',
  niveau: NiveauDifficulte.INTERMEDIAIRE,
  dureeHeures: 46,
  colorClass: 'from-orange-600 to-amber-700',
  titreBrevet: "Brevet Professionnel de Maintenance Industrielle & Fiabilité des Équipements",
  objectifs: [
    'Calculer et interpréter les indicateurs normalisés de fiabilité (MTBF, MTTR, Taux de défaillance λ)',
    'Calculer le Taux de Rendement Synthétique (TRS / OEE) et traquer les pertes',
    'Conduire une analyse AMDEC machine pour hiérarchiser les modes de défaillance par criticité C = F × G × D',
    'Mettre en œuvre les démarches TPM, 5S et maintenance autonome',
    'Déployer et exploiter une Gestion de Maintenance Assistée par Ordinateur (GMAO)'
  ],
  competences: [
    'Indicateurs MTBF, MTTR & Disponibilité Inhérente',
    'Calcul du TRS (Taux de Rendement Synthétique / OEE)',
    'Analyse AMDEC & Grille de Criticité',
    'Maintenance Conditionnelle (Vibrations, Thermographie, Huile)',
    'Démarche TPM & Maintenance Autonome',
    'GMAO & Gestion des Stocks de Pièces Stratégiques',
    'Arbre des Causes & Méthodes de Résolution 8D / 5 Pourquoi'
  ],
  preRequis: ['Notions d’organisation industrielle'],
  certifiant: true,
  scoreMinValidation: 0.7,
  dureeValiditeMois: 36,
  devoirs: [
    {
      id: 'maint_dev_1',
      numero: 1,
      titre: 'Devoir n°1 : Bilan de Fiabilité & Calcul du TRS d’une Ligne de Production',
      chapitresCouverts: 'Chapitres 1 à 5',
      dureeEstimeeMin: 45,
      noteMax: 20,
      coefficient: 2,
      description: 'Calcul des indicateurs MTBF, MTTR, taux de disponibilité et décomposition du TRS sur un atelier d’embouteillage fonctionnant en 2x8.',
      miseEnSituation: 'Sur un mois de 400 heures d’ouverture programmée, une ligne a subi 8 pannes totalisant 32 heures d’arrêt de maintenance corrective.',
      questions: [
        {
          id: 'q1',
          titre: 'Calcul du MTBF (Temps Moyen Entre Défaillances)',
          enonce: 'Le temps de bon fonctionnement total (TBF) est de 400 h - 32 h = 368 heures pour 8 pannes. Quelle est la valeur du MTBF ?',
          points: 7,
          type: 'calcul',
          options: ['46.0 heures', '50.0 heures', '4.0 heures', '36.8 heures'],
          reponseCorrecteIndex: 0,
          solutionDetaillee: 'MTBF = TBF / Nombre de défaillances = 368 / 8 = 46.0 heures.',
          baremeDetail: ['Calcul du temps de bon fonctionnement (368 h) : 3 pts', 'Calcul exact du MTBF (46 h) : 4 pts']
        },
        {
          id: 'q2',
          titre: 'Calcul du MTTR (Temps Moyen de Réparation)',
          enonce: 'Avec 32 heures d’arrêt total pour 8 interventions correctives, quel est le MTTR ?',
          points: 6,
          type: 'calcul',
          options: ['4.0 heures', '8.0 heures', '2.5 heures', '0.25 heure'],
          reponseCorrecteIndex: 0,
          solutionDetaillee: 'MTTR = Temps total d\'arrêt / Nombre d\'interventions = 32 / 8 = 4.0 heures.',
          baremeDetail: ['Formule du MTTR : 3 pts', 'Calcul 4.0 h : 3 pts']
        },
        {
          id: 'q3',
          titre: 'Disponibilité inhérente de la ligne',
          enonce: 'Quelle est la disponibilité inhérente D = MTBF / (MTBF + MTTR) de cet équipement ?',
          points: 7,
          type: 'calcul',
          options: ['92.0%', '85.5%', '96.0%', '78.2%'],
          reponseCorrecteIndex: 0,
          solutionDetaillee: 'D = 46 / (46 + 4) = 46 / 50 = 0.92 = 92.0%.',
          baremeDetail: ['Formule D = MTBF / (MTBF + MTTR) : 3 pts', 'Résultat 92.0% : 4 pts']
        }
      ]
    }
  ],
  chapitres: [
    {
      id: 'maint_ch1',
      titre: '1. Les Typologies de Maintenance selon la Norme NF EN 13306',
      dureeEstimeeMin: 35,
      description: 'Maintenance corrective (palliative/curative), maintenance préventive (systématique, conditionnelle, prévisionnelle/prédictive) et maintenance améliorative.',
      pointsCles: ['Préventif systématique : échéancier calendaire ou horaire', 'Conditionnelle : selon seuils mesurés', 'Palliative : dépannage provisoire'],
      formuleCle: 'NF EN 13306 : Terminologie universelle de la maintenance',
      contenuHtml: `<p>Cadre normatif et classification stratégique des interventions de maintenance.</p>`,
      exercices: [{
        id: 'maint_ch1_ex1',
        type: TypeQuestion.QCM,
        question: "Le remplacement systématique de l'huile d'un réducteur toutes les 2 000 heures de fonctionnement relève de quelle typologie de maintenance ?",
        reponsesPossibles: [
          'Maintenance préventive systématique',
          'Maintenance corrective curative',
          'Maintenance conditionnelle',
          'Maintenance améliorative'
        ],
        reponsesCorrectes: [0],
        explication: "Le remplacement selon un compteur d'heures fixe sans mesure préalable d'état est la définition même du préventif systématique.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'maint_ch2',
      titre: '2. Indicateurs de Fiabilité & Maintenabilité : MTBF, MTTR & Taux λ',
      dureeEstimeeMin: 45,
      description: 'MTBF (Mean Time Between Failures), MTTR (Mean Time To Repair), taux de défaillance λ = 1 / MTBF, et loi exponentielle de fiabilité R(t) = e^(-λt).',
      pointsCles: ['MTBF mesure la fiabilité (durée entre pannes)', 'MTTR mesure la maintenabilité (rapidité de réparation)', 'Disponibilité D = MTBF / (MTBF + MTTR)'],
      formuleCle: 'R(t) = e^(-λt) | MTBF = 1 / λ',
      contenuHtml: `<p>Calculs statistiques fondamentaux pour évaluer la santé des parcs machines.</p>`,
      exercices: [{
        id: 'maint_ch2_ex1',
        type: TypeQuestion.CHIFFREE,
        question: "Si une machine tourne pendant 1 000 heures avec 5 pannes, quelle est la valeur du MTBF en heures ?",
        reponsesPossibles: ['200 heures', '5 000 heures', '50 heures', '5 heures'],
        reponsesCorrectes: [0],
        explication: "MTBF = Temps de fonctionnement / Nombre de défaillances = 1000 / 5 = 200 heures.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'maint_ch3',
      titre: '3. Courbe en Baignoire & Cycle de Vie des Équipements',
      dureeEstimeeMin: 40,
      description: 'Période de jeunesse (défauts précoces / rodage), période de maturité (taux de défaillance constant λ), et période d’usure/vieillesse (usure mécanique accélérée).',
      pointsCles: ['Jeunesse : erreurs de montage ou défauts composants', 'Maturité : pannes aléatoires indépendantes du temps', 'Vieillesse : fatigue, corrosion, fin de vie utile'],
      formuleCle: 'Loi de Weibull à 3 paramètres (β, η, γ) pour modéliser les 3 phases',
      contenuHtml: `<p>Compréhension des lois de défaillance pour adapter la stratégie de maintenance au cycle de vie.</p>`,
      exercices: [{
        id: 'maint_ch3_ex1',
        type: TypeQuestion.QCM,
        question: "Dans la 'courbe en baignoire', quelle est la caractéristique du taux de défaillance λ durant la phase de maturité (vie utile) ?",
        reponsesPossibles: [
          'Le taux de défaillance est approximativement constant',
          'Le taux est strictement égal à zéro',
          'Le taux augmente de façon exponentielle',
          'Le taux diminue chaque minute'
        ],
        reponsesCorrectes: [0],
        explication: "En phase de maturité, les défaillances surviennent de manière aléatoire avec un taux de défaillance λ quasi constant.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'maint_ch4',
      titre: '4. Taux de Rendement Synthétique (TRS / OEE) & Les 6 Grandes Pertes',
      dureeEstimeeMin: 45,
      description: 'Décomposition normalisée NF E 60-182 : Taux de Disponibilité (D), Taux de Performance (P), Taux de Qualité (Q), et calcul TRS = D × P × Q.',
      pointsCles: ['Disponibilité : pannes et changements de série', 'Performance : micro-arrêts et sous-vitesse', 'Qualité : rebuts et non-conformités', 'Objectif World Class : TRS ≥ 85%'],
      formuleCle: 'TRS = Taux de Disponibilité × Taux d\'Efficacité × Taux de Qualité',
      contenuHtml: `<p>Indicateur clé de performance industrielle pour mesurer la productivité réelle des lignes.</p>`,
      exercices: [{
        id: 'maint_ch4_ex1',
        type: TypeQuestion.CHIFFREE,
        question: "Pour une ligne ayant une Disponibilité D = 90%, une Performance P = 95% et une Qualité Q = 98%, quelle est la valeur du TRS en % ?",
        reponsesPossibles: ['83.8%', '94.3%', '75.0%', '90.0%'],
        reponsesCorrectes: [0],
        explication: "TRS = 0.90 × 0.95 × 0.98 = 0.8379 = 83.79% ≈ 83.8%.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'maint_ch5',
      titre: '5. Méthodologie AMDEC Moyen de Production (FMEA)',
      dureeEstimeeMin: 50,
      description: 'Analyse des Modes de Défaillance, de leurs Effets et de leur Criticité. Grille de cotation : Fréquence (F), Gravité (G), Détection (D) et Indice de Priorité de Risque IPR = F × G × D (ou Criticité C).',
      pointsCles: ['Identification proactive des risques avant la panne', 'Seuil de criticité critique (ex: C > 40 impose une action corrective)', 'Plan d\'actions préventives'],
      formuleCle: 'Criticité C = Fréquence (1-4) × Gravité (1-4) × Non-Détection (1-4)',
      contenuHtml: `<p>Outil d'ingénierie de fiabilité pour hiérarchiser les priorités d'amélioration machine.</p>`,
      exercices: [{
        id: 'maint_ch5_ex1',
        type: TypeQuestion.CHIFFREE,
        question: "Pour une défaillance ayant Fréquence F=3, Gravité G=4 et Non-détection D=2, quelle est la criticité C ?",
        reponsesPossibles: ['24', '9', '14', '48'],
        reponsesCorrectes: [0],
        explication: "Criticité C = F × G × D = 3 × 4 × 2 = 24.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'maint_ch6',
      titre: '6. Méthode 5S & Organisation Visuelle du Poste de Travail',
      dureeEstimeeMin: 35,
      description: 'Seiri (Débarrasser / Éliminer l’inutile), Seiton (Ranger / Une place pour chaque chose), Seiso (Nettoyer / Inspecter), Seiketsu (Standardiser), Shitsuke (Pérenniser / Rigueur).',
      pointsCles: ['Base fondamentale de l\'Excellence Opérationnelle', 'Réduction du temps de recherche d\'outils', 'Détection visuelle immédiate des fuites'],
      formuleCle: '5S : Débarrasser -> Ranger -> Nettoyer -> Standardiser -> Pérenniser',
      contenuHtml: `<p>Mise en place d'un environnement de travail propre, ordonné et sécurisé.</p>`,
      exercices: [{
        id: 'maint_ch6_ex1',
        type: TypeQuestion.QCM,
        question: "Quelle est la première étape fondamentale de la démarche 5S ?",
        reponsesPossibles: [
          'Seiri (Débarrasser / Trier ce qui est inutile)',
          'Seiton (Ranger)',
          'Shitsuke (Pérenniser)',
          'Acheter des nouveaux meubles'
        ],
        reponsesCorrectes: [0],
        explication: "On commence toujours par éliminer le superflu et ce qui n'est plus utilisé sur le poste avant de ranger.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'maint_ch7',
      titre: '7. Démarche TPM (Total Productive Maintenance) & Maintenance Autonome',
      dureeEstimeeMin: 45,
      description: 'Les 8 piliers de la TPM, partenariat Opérateurs/Techniciens, fiches d’auto-maintenance de 1er niveau (nettoyage, graissage, resserrage), éradication des sources de salissure.',
      pointsCles: ['L\'opérateur devient le premier acteur de la santé de sa machine', 'Arrêt de la dégradation forcée', 'Zéro panne, zéro défaut, zéro accident'],
      formuleCle: 'Maintenance de niveau 1 : effectuée par l\'opérateur formé sans outillage complexe',
      contenuHtml: `<p>Mobilisation collective de l'ensemble du personnel pour maximiser le rendement global.</p>`,
      exercices: [{
        id: 'maint_ch7_ex1',
        type: TypeQuestion.QCM,
        question: "Quel est l'objectif premier du pilier 'Maintenance Autonome' de la démarche TPM ?",
        reponsesPossibles: [
          'Former et responsabiliser les opérateurs de production pour réaliser les opérations de maintenance de 1er niveau (nettoyage, graissage, contrôle visuel)',
          'Supprimer complètement le service maintenance de l\'usine',
          'Faire réparer les moteurs électroniques par les stagiaires',
          'Remplacer les machines par des robots'
        ],
        reponsesCorrectes: [0],
        explication: "La maintenance autonome transfère les gestes de surveillance et d'entretien quotidien aux opérateurs de ligne.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'maint_ch8',
      titre: '8. Gestion de Maintenance Assistée par Ordinateur (GMAO / CMMS)',
      dureeEstimeeMin: 45,
      description: 'Arborescence des équipements (Usine -> Ligne -> Sous-ensemble -> Organe), Demandes d’Intervention (DI), Bons de Travail (BT), imputation des heures et coûts.',
      pointsCles: ['Historique précis de toutes les pannes', 'Gestion des stocks de pièces détachées', 'Édition automatique des plannings de préventif'],
      formuleCle: 'Cycle GMAO : Demande d\'Intervention (DI) -> Bon de Travail (BT) -> Clôture & Compte-rendu',
      contenuHtml: `<p>Numérisation et pilotage des activités et dépenses du service maintenance.</p>`,
      exercices: [{
        id: 'maint_ch8_ex1',
        type: TypeQuestion.QCM,
        question: "Pourquoi est-il indispensable que les techniciens renseignent avec précision la cause et les pièces remplacées lors de la clôture d'un Bon de Travail (BT) dans la GMAO ?",
        reponsesPossibles: [
          'Pour enrichir l\'historique technique, fiabiliser les calculs de MTBF et mettre à jour le stock de pièces',
          'Pour remplir le disque dur du serveur',
          'Pour ralentir la production',
          'Uniquement pour faire joli'
        ],
        reponsesCorrectes: [0],
        explication: "La qualité des données de clôture dans la GMAO conditionne toute l'analyse statistique de fiabilité et le réapprovisionnement.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'maint_ch9',
      titre: '9. Diagnostic de Pannes Méthodique : Arbre des Causes & 5 Pourquoi (5P)',
      dureeEstimeeMin: 45,
      description: 'Recherche de la cause racine (Root Cause Analysis RCA), méthode des 5 Pourquoi, diagramme d’Ishikawa (5M : Main d’œuvre, Matière, Matériel, Méthode, Milieu) et méthode 8D.',
      pointsCles: ['Ne pas s\'arrêter aux symptômes superficiels', 'Distinguer les faits vérifiés des opinions subjectives', 'Mettre en place des actions correctives pérennes'],
      formuleCle: '5M : Main-d\'œuvre, Matériel, Matière, Méthode, Milieu',
      contenuHtml: `<p>Techniques d'investigation rigoureuses pour éradiquer définitivement les pannes répétitives.</p>`,
      exercices: [{
        id: 'maint_ch9_ex1',
        type: TypeQuestion.QCM,
        question: "Dans le diagramme d'Ishikawa (ou diagramme en arête de poisson), que représentent les '5M' ?",
        reponsesPossibles: [
          'Main-d\'œuvre, Matériel, Matière, Méthode, Milieu',
          'Moteur, Mécanique, Maintenance, Mesure, Montage',
          'Mois, Minutes, Millisecondes, Microsecondes, Mètres',
          'Manger, Marcher, Mesurer, Marquer, Monter'
        ],
        reponsesCorrectes: [0],
        explication: "Les 5M catégorisent exhaustivement toutes les sources potentielles d'anomalies lors d'une analyse de cause.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'maint_ch10',
      titre: '10. Méthode SMED (Single Minute Exchange of Die)',
      dureeEstimeeMin: 45,
      description: 'Changement rapide d’outils en moins de 10 minutes, conversion des opérations internes (machine à l’arrêt) en opérations externes (machine en marche), préchauffages et fixations rapides (quart de tour).',
      pointsCles: ['Augmentation de la flexibilité et réduction des tailles de lots', 'Standardisation des cales et outillages', 'Suppression des vis par des sauterelles de serrage'],
      formuleCle: 'SMED : Opérations internes -> Opérations externes',
      contenuHtml: `<p>Technique Lean pour diviser par 4 les temps de changement de série et gagner en disponibilité.</p>`,
      exercices: [{
        id: 'maint_ch10_ex1',
        type: TypeQuestion.QCM,
        question: "Dans la méthode SMED, qu'appelle-t-on une 'opération externe' ?",
        reponsesPossibles: [
          'Une opération qui peut être réalisée pendant que la machine est encore en train de produire (en fonctionnement)',
          'Une intervention sous-traitée à l\'étranger',
          'Une tâche effectuée dehors sous la pluie',
          'Une réunion de direction'
        ],
        reponsesCorrectes: [0],
        explication: "Les opérations externes (préparation des outils, préchauffage) s'exécutent en temps masqué sans arrêter la machine.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'maint_ch11',
      titre: '11. Maintenance Conditionnelle : Analyse Vibratoire & Thermographie Infrarouge',
      dureeEstimeeMin: 50,
      description: 'Seuils d’alerte vibratoires (ISO 10816-3), thermographie des armoires électriques (détection des points chauds par effet Joule), ultrasons pour détection des fuites d’air comprimé et décharges partielles.',
      pointsCles: ['Intervention au moment opportun avant la rupture', 'Caméra infrarouge radiométrique', 'Économies d\'énergie par traque des fuites pneumatiques'],
      formuleCle: 'Détection précoce : Ultrasons -> Vibrations -> Température -> Bruit audible',
      contenuHtml: `<p>Technologies de surveillance prédictive non-destructive de l'état des machines.</p>`,
      exercices: [{
        id: 'maint_ch11_ex1',
        type: TypeQuestion.QCM,
        question: "Lors d'un contrôle thermographique par caméra infrarouge dans un tableau électrique BT, que signale un échauffement localisé anormal sur une borne de disjoncteur ?",
        reponsesPossibles: [
          'Un défaut de serrage mécanique créant une résistance de contact et un échauffement Joule critique',
          'Que le disjoncteur est neuf',
          'Un coup de soleil',
          'Une bonne isolation phonique'
        ],
        reponsesCorrectes: [0],
        explication: "Une connexion mal serrée présente une résistance de contact élevée R, dissipant de la chaleur (P = R×I²) et risquant un incendie.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'maint_ch12',
      titre: '12. Analyse des Huiles & Lubrifiants en Service',
      dureeEstimeeMin: 40,
      description: 'Contamination par l’eau (Karl Fischer), viscosité cinématique, spectrométrie d’émission pour particules d’usure (Fe, Cu, Pb, Al, Cr), indice d’acide TAN et indice de basicité TBN.',
      pointsCles: ['L\'huile est le sang de la machine', 'Comptage de particules selon ISO 4406 (ex: 18/16/13)', 'Détection de l\'usure prématurée des coussinets et engrenages'],
      formuleCle: 'ISO 4406 : code de propreté à 3 chiffres (particules >4µm, >6µm, >14µm)',
      contenuHtml: `<p>Diagnostic physico-chimique des lubrifiants pour allonger la durée de vie des organes mécaniques.</p>`,
      exercices: [{
        id: 'maint_ch12_ex1',
        type: TypeQuestion.QCM,
        question: "Dans le rapport d'analyse d'huile d'un réducteur, que révèle une brusque hausse de la concentration en particules de fer (Fe) et de silicium (Si) ?",
        reponsesPossibles: [
          'Une usure abrasive des dentures d\'engrenages provoquée par l\'intrusion de poussière ou sable (silice)',
          'Une fuite de courant 230V',
          'Que l\'huile s\'est transformée en or',
          'Une absence totale de problème'
        ],
        reponsesCorrectes: [0],
        explication: "Le silicium signale une pollution externe par poussières abrasives, qui accélère le décollement de particules de fer des engrenages.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'maint_ch13',
      titre: '13. Gestion des Stocks de Pièces de Rechange & Classification ABC',
      dureeEstimeeMin: 45,
      description: 'Loi de Pareto (20/80), classification ABC des stocks par valeur de consommation, pièces stratégiques critiques à rupture inadmissible, stock de sécurité et formule de Wilson pour la quantité économique.',
      pointsCles: ['Classe A : 10% des références = 70% de la valeur (suivi strict)', 'Classe C : 70% des références = 10% de la valeur (gestion simplifiée)', 'Coût de possession vs coût de rupture'],
      formuleCle: 'Quantité économique Q = √( (2 × D × Cl) / (Cs × t) ) (Formule de Wilson)',
      contenuHtml: `<p>Optimisation financière des magasins de maintenance et disponibilité des pièces critiques.</p>`,
      exercices: [{
        id: 'maint_ch13_ex1',
        type: TypeQuestion.QCM,
        question: "Dans la classification ABC du magasin de maintenance, quelle catégorie de pièces requiert le suivi et l'inventaire le plus rigoureux en raison de sa très forte valeur financière ?",
        reponsesPossibles: [
          'La Classe A (haute valeur marchande)',
          'La Classe C (boulonnerie standard)',
          'Les chiffons de nettoyage',
          'La Classe Z'
        ],
        reponsesCorrectes: [0],
        explication: "Les articles de classe A concentrent la majorité du capital immobilisé et nécessitent une gestion et des inventaires fréquents.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'maint_ch14',
      titre: '14. Négociation & Suivi des Contrats de Sous-Traitance (SLA)',
      dureeEstimeeMin: 45,
      description: 'Contrat à obligation de moyens vs obligation de résultat, clauses SLA (Service Level Agreement : Temps de réponse GTR < 2h, Disponibilité garantie), plans de prévention et audit des prestataires.',
      pointsCles: ['Pénalités de retard en cas de non-respect du GTR', 'Contrôle réglementaire des équipements sous pression et levage', 'Plan de prévention sécurité obligatoire'],
      formuleCle: 'GTR : Garantie de Temps de Rétablissement',
      contenuHtml: `<p>Pilotage contractuel et financier des prestataires extérieurs et maintenances spécialisées.</p>`,
      exercices: [{
        id: 'maint_ch14_ex1',
        type: TypeQuestion.QCM,
        question: "Dans un contrat de maintenance avec un prestataire extérieur, que garantit la clause 'GTR 4h' ?",
        reponsesPossibles: [
          'La Garantie de Temps de Rétablissement : l\'équipement doit être remis en service opérationnel dans un délai maximal de 4 heures après l\'appel',
          'Qu\'il y aura 4 techniciens sur place',
          'Que l\'intervention coûte 4 euros',
          'Que le technicien partira après 4 heures sans réparer'
        ],
        reponsesCorrectes: [0],
        explication: "Le GTR engage le prestataire sur le délai maximal de remise en état de marche sous peine de pénalités financières.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'maint_ch15',
      titre: '15. Maintenance 4.0, IoT Industriel & Intelligence Artificielle Prédictive',
      dureeEstimeeMin: 50,
      description: 'Capteurs sans fil LoRaWAN / Bluetooth Mesh, jumeaux numériques (Digital Twins), algorithmes d’apprentissage automatique pour détection d’anomalies et réalité augmentée pour le guidage des techniciens.',
      pointsCles: ['Surveillance continue 24/7 sans tournée manuelle', 'Calcul de la durée de vie résiduelle RUL (Remaining Useful Life)', 'Interopérabilité Cloud / Edge Computing'],
      formuleCle: 'RUL : Estimation probabiliste du temps avant défaillance fonctionnelle',
      contenuHtml: `<p>Transformation digitale de la maintenance et intégration de l'intelligence artificielle sur les parcs industriels.</p>`,
      exercices: [{
        id: 'maint_ch15_ex1',
        type: TypeQuestion.QCM,
        question: "En Maintenance 4.0 prédictive, que désigne le sigle 'RUL' calculé par les algorithmes de Machine Learning ?",
        reponsesPossibles: [
          'Remaining Useful Life (Durée de vie utile résiduelle estimée avant la panne)',
          'Réseau Universel Local',
          'Régulateur Ultra Léger',
          'Rapport d\'Urgence Légal'
        ],
        reponsesCorrectes: [0],
        explication: "Le calcul du RUL prédit précisément le nombre d'heures restantes avant qu'un composant n'atteigne son seuil critique de défaillance.",
        points: 5,
        difficulte: NiveauDifficulte.EXPERT
      }]
    }
  ]
};
