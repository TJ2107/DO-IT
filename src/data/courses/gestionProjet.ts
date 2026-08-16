import { Domaine, NiveauDifficulte, TypeQuestion, Cours } from '../../types';

export const COURSE_GESTION_PROJET: Cours = {
  id: 'gp_101',
  domaine: Domaine.GESTION_PROJET,
  domaineNom: 'Gestion de Projet',
  icon: '🚀',
  titre: "Gestion de Projet : Méthodes Agiles, Scrum & Pilotage Prédictif (PMP / Prince2)",
  description: 'Cursus professionnel complet en 15 chapitres : Cadrage, WBS, chemin critique (PERT / Gantt), méthodes agiles Scrum & Kanban, gestion de la valeur acquise (EVM), matrice des risques et pilotage multi-projets.',
  niveau: NiveauDifficulte.INTERMEDIAIRE,
  dureeHeures: 48,
  colorClass: 'from-amber-600 to-orange-700',
  titreBrevet: "Brevet Professionnel de Gestion de Projet & Management Agile",
  objectifs: [
    'Rédiger la charte projet et structurer le découpage des tâches en WBS (Work Breakdown Structure)',
    'Calculer les marges et déterminer le Chemin Critique sur un réseau PERT / Gantt',
    'Maîtriser les cérémonies, rôles et artefacts du framework Scrum (Sprint, Backlog, Daily)',
    'Piloter les coûts et délais par la méthode de la Valeur Acquise (EVM : CPI, SPI, EAC)',
    'Établir la matrice des risques et conduire le plan de gestion du changement'
  ],
  competences: [
    'Charte Projet & Découpage WBS / OBS',
    'Planification PERT, CPM & Diagramme de Gantt',
    'Méthodes Agiles Scrum, Kanban & User Stories',
    'Gestion de la Valeur Acquise (EVM : CBTP, CRTE, CBTE)',
    'Matrice des Risques Projet & Plans de Contingence',
    'Gestion des Parties Prenantes & Matrice RACI',
    'Conduite du Changement & Clôture de Projet'
  ],
  preRequis: ['Notions d’organisation du travail'],
  certifiant: true,
  scoreMinValidation: 0.7,
  dureeValiditeMois: 36,
  devoirs: [
    {
      id: 'gp_dev_1',
      numero: 1,
      titre: 'Devoir n°1 : Planification Réseau PERT & Détermination du Chemin Critique',
      chapitresCouverts: 'Chapitres 1 à 5',
      dureeEstimeeMin: 45,
      noteMax: 20,
      coefficient: 2,
      description: 'Calcul des dates au plus tôt, dates au plus tard, marges totales et identification du chemin critique pour le lancement d’une nouvelle application mobile.',
      miseEnSituation: 'Un projet de déploiement comprend 6 tâches successives et parallèles (Tâches A à F). Le chemin critique détermine la durée incompressible minimale du projet.',
      questions: [
        {
          id: 'q1',
          titre: 'Définition exacte du Chemin Critique (CPM)',
          enonce: 'Qu’est-ce qui caractérise obligatoirement les tâches situées sur le Chemin Critique d’un projet ?',
          points: 7,
          type: 'cas_pratique',
          options: [
            'Leur marge totale est strictement égale à zéro (tout retard sur ces tâches retarde directement la fin du projet)',
            'Ce sont les tâches les moins coûteuses',
            'Ce sont des tâches facultatives',
            'Ce sont les tâches réalisées par le directeur'
          ],
          reponseCorrecteIndex: 0,
          solutionDetaillee: 'Le chemin critique est la séquence d\'activités interdépendantes dont la marge totale est nulle, définissant la durée minimale du projet.',
          baremeDetail: ['Marge totale nulle : 4 pts', 'Impact direct sur la date de fin : 3 pts']
        },
        {
          id: 'q2',
          titre: 'Calcul de la Valeur Acquise : Indice de Performance des Coûts (CPI)',
          enonce: 'Sur un projet, la Valeur Acquise (EV / CBTE) est de 80 000 € et le Coût Réel (AC / CRTE) est de 100 000 €. Quelle est la valeur du CPI = EV / AC ?',
          points: 7,
          type: 'calcul',
          options: ['0.80 (Dépassement budgétaire)', '1.25', '1.00', '0.20'],
          reponseCorrecteIndex: 0,
          solutionDetaillee: 'CPI = EV / AC = 80 000 / 100 000 = 0.80. Un CPI < 1.0 indique que chaque euro dépensé ne produit que 0.80 € de valeur (dépassement de coût de 20%).',
          baremeDetail: ['Calcul exact 0.80 : 4 pts', 'Interprétation budgétaire défavorable : 3 pts']
        },
        {
          id: 'q3',
          titre: 'Rôle du Scrum Master dans l’équipe agile',
          enonce: 'Quel est le rôle fondamental du Scrum Master selon le Scrum Guide officiel ?',
          points: 6,
          type: 'cas_pratique',
          options: [
            'Un leader serviteur qui aide l’équipe en supprimant les obstacles et en favorisant l’application des principes Scrum',
            'Le chef hiérarchique qui assigne les tâches et sanctionne les retards',
            'Le responsable commercial qui négocie les contrats',
            'Le développeur en chef'
          ],
          reponseCorrecteIndex: 0,
          solutionDetaillee: 'Le Scrum Master est un serviteur-leader qui protège l\'équipe des interférences extérieures et élimine les blocages (impediments).',
          baremeDetail: ['Notion de leader serviteur : 3 pts', 'Suppression des obstacles et facilitation : 3 pts']
        }
      ]
    }
  ],
  chapitres: [
    {
      id: 'gp_ch1',
      titre: '1. Le Cadrage de Projet & la Charte de Projet (Project Charter)',
      dureeEstimeeMin: 35,
      description: 'Triangle d’or (Coûts - Délais - Qualité/Périmètre), identification du Sponsor et des parties prenantes (Stakeholders), objectifs SMART et rédaction de la Charte de Projet.',
      pointsCles: ['La Charte autorise formellement l\'existence du projet et nomme le chef de projet', 'Définition des critères de succès mesurables', 'Alignement stratégique'],
      formuleCle: 'Objectifs SMART : Spécifiques, Mesurables, Atteignables, Réalistes, Temporellement définis',
      contenuHtml: `<p>Phase d'initialisation et cadrage stratégique des projets d'envergure.</p>`,
      exercices: [{
        id: 'gp_ch1_ex1',
        type: TypeQuestion.QCM,
        question: "Quel document formel signé par le Sponsor autorise officiellement le démarrage d'un projet et donne au chef de projet l'autorité d'affecter les ressources de l'entreprise ?",
        reponsesPossibles: [
          'La Charte de Projet (Project Charter)',
          'Une facture d\'acompte',
          'Un ticket de métro',
          'Le compte-rendu de la réunion hebdomadaire'
        ],
        reponsesCorrectes: [0],
        explication: "La Charte de projet est l'acte de naissance du projet formalisant l'engagement de la direction et l'autorité du chef de projet.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'gp_ch2',
      titre: '2. Découpage du Projet : WBS (Work Breakdown Structure) & OBS',
      dureeEstimeeMin: 40,
      description: 'Organigramme des Tâches (OT / WBS), règle des 100%, lots de travail (Work Packages), OBS (Organization Breakdown Structure) et dictionnaire du WBS.',
      pointsCles: ['La règle des 100% : le WBS englobe la totalité du travail du projet sans rien omettre ni ajouter', 'Découpage hiérarchique arborescent', 'Attribution claire de chaque lot à un responsable unique'],
      formuleCle: 'Règle des 100% : Somme des enfants = 100% du parent',
      contenuHtml: `<p>Décomposition méthodique du périmètre en livrables maîtrisables.</p>`,
      exercices: [{
        id: 'gp_ch2_ex1',
        type: TypeQuestion.QCM,
        question: "Que stipule la 'règle des 100%' lors de la construction d'un Organigramme des Tâches (WBS) ?",
        reponsesPossibles: [
          'Le WBS doit inclure 100% du travail défini par le périmètre du projet et capturer l\'intégralité des livrables (ni plus, ni moins)',
          'Le projet doit être terminé en 100 jours',
          'Le budget doit être dépensé à 100% dès le premier jour',
          'Chaque tâche doit durer 100 heures'
        ],
        reponsesCorrectes: [0],
        explication: "La règle des 100% garantit que tout le périmètre est couvert sans double emploi ni omission.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'gp_ch3',
      titre: '3. Planification Prédictive : Réseau PERT, CPM & Chemin Critique',
      dureeEstimeeMin: 50,
      description: 'Réseau PERT (Program Evaluation and Review Technique), calcul des dates au plus tôt (Early Dates), dates au plus tard (Late Dates), marge libre, marge totale et chemin critique.',
      pointsCles: ['Chemin critique = suite de tâches à marge totale nulle', 'Détermine la date de fin incompressible du projet', 'Calcul aller (Max des prédécesseurs) / Calcul retour (Min des successeurs)'],
      formuleCle: 'Marge Totale = Date au plus tard - Date au plus tôt',
      contenuHtml: `<p>Algorithmes de planification par les chemins critiques pour sécuriser les échéances.</p>`,
      exercices: [{
        id: 'gp_ch3_ex1',
        type: TypeQuestion.QCM,
        question: "Si une tâche possède une Date au plus tôt de début à J+10 et une Date au plus tard de début à J+16, quelle est sa marge totale ?",
        reponsesPossibles: ['6 jours', '26 jours', '0 jour', '16 jours'],
        reponsesCorrectes: [0],
        explication: "Marge totale = 16 - 10 = 6 jours. La tâche peut être retardée de 6 jours maximum sans impacter la date de livraison finale du projet.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'gp_ch4',
      titre: '4. Diagramme de Gantt & Nivellement des Ressources',
      dureeEstimeeMin: 45,
      description: 'Liaisons de dépendance (Fin à Début FD, Début à Début DD, Fin à Fin FF), jalons (Milestones), histogrammes de charge et lissage / nivellement des ressources pour éviter les surallocations.',
      pointsCles: ['Un jalon est un événement clé de durée zéro marquant la fin d\'une phase', 'Nivellement : décaler les tâches non critiques pour respecter la capacité humaine', 'Barres d\'avancement en pourcentage'],
      formuleCle: 'Jalon = Durée 0 jour (Validation de livrable ou revue d\'étape)',
      contenuHtml: `<p>Visualisation chronologique et optimisation de l'allocation des compétences.</p>`,
      exercices: [{
        id: 'gp_ch4_ex1',
        type: TypeQuestion.QCM,
        question: "Dans un diagramme de Gantt, quelle est la durée temporelle attribuée à un 'Jalon' (Milestone) représentant par exemple la signature d'un PV de recette ?",
        reponsesPossibles: ['0 jour (durée nulle, c\'est un repère temporel ponctuel)', '30 jours', '1 semaine', 'La durée moyenne du projet'],
        reponsesCorrectes: [0],
        explication: "Un jalon est un marqueur d'étape ou de décision dont la durée est conventionnellement égale à zéro.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'gp_ch5',
      titre: '5. Gestion des Risques Projet : Matrice Criticité & Plans de Réponse',
      dureeEstimeeMin: 45,
      description: 'Identification des risques, registre des risques, matrice Probabilité × Impact, les 4 stratégies de réponse aux menaces (Éviter, Transférer, Atténuer, Accepter) et budget de réserve de contingence.',
      pointsCles: ['Réserve de contingence pour les risques connus identifiés', 'Réserve de management pour les aléas imprévus', 'Réévaluation dynamique lors de chaque revue'],
      formuleCle: 'Exposition au risque = Probabilité (%) × Impact financier (€)',
      contenuHtml: `<p>Pilotage proactif des incertitudes et anticipation des plans de secours.</p>`,
      exercices: [{
        id: 'gp_ch5_ex1',
        type: TypeQuestion.QCM,
        question: "Souscrire une police d'assurance spécifique pour couvrir le transport maritime d'équipements de très haute valeur correspond à quelle stratégie de réponse aux risques ?",
        reponsesPossibles: [
          'Transférer le risque (à une compagnie d\'assurance)',
          'Éviter le risque',
          'Accepter le risque sans rien faire',
          'Atténuer le risque'
        ],
        reponsesCorrectes: [0],
        explication: "Le transfert reporte la charge financière de la concrétisation du risque sur un tiers (assureur ou sous-traitant).",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'gp_ch6',
      titre: '6. Matrice RACI & Gestion des Parties Prenantes (Stakeholders)',
      dureeEstimeeMin: 40,
      description: 'Matrice RACI : Responsible (Réalisateur), Accountable (Responsable unique / Décideur), Consulted (Consulté), Informed (Informé), matrice Pouvoir / Intérêt pour cartographier les acteurs clés.',
      pointsCles: ['Règle d\'or du RACI : Un et un seul "A" par activité pour éviter la dilution des responsabilités', 'Stratégies d\'engagement des parties prenantes', 'Plan de communication projet'],
      formuleCle: 'RACI : Responsible, Accountable, Consulted, Informed',
      contenuHtml: `<p>Clarification des rôles et responsabilités pour une gouvernance projet sans ambiguïté.</p>`,
      exercices: [{
        id: 'gp_ch6_ex1',
        type: TypeQuestion.QCM,
        question: "Combien de personnes peuvent avoir la lettre 'A' (Accountable / Responsable décisionnaire final) sur une même ligne d'une matrice RACI ?",
        reponsesPossibles: [
          'Une seule et unique personne',
          'Toute l\'équipe en même temps',
          'Au moins 5 directeurs',
          'Autant qu\'on veut'
        ],
        reponsesCorrectes: [0],
        explication: "La présence d'un unique 'A' garantit qu'une seule personne assume la responsabilité décisionnelle ultime de la tâche.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'gp_ch7',
      titre: '7. Le Manifeste Agile & les 12 Principes Fondamentaux',
      dureeEstimeeMin: 35,
      description: 'Origine de 2001 à Snowbird, les 4 valeurs cardinales (Individus et interactions avant processus, Logiciel fonctionnel avant documentation, Collaboration client avant négociation contractuelle, Adaptation au changement avant suivi du plan).',
      pointsCles: ['Changement de paradigme : accepter l\'incertitude et adapter le produit en continu', 'Livraisons fréquentes de valeur utile', 'Équipes auto-organisées et motivées'],
      formuleCle: 'Agilité : Réactivité au changement > Respect aveugle d\'un plan figé',
      contenuHtml: `<p>Culture et philosophie agile pour les projets complexes en environnement mouvant.</p>`,
      exercices: [{
        id: 'gp_ch7_ex1',
        type: TypeQuestion.QCM,
        question: "Lequel des énoncés suivants correspond à l'une des 4 valeurs fondamentales du Manifeste Agile ?",
        reponsesPossibles: [
          'La collaboration avec les clients plus que la négociation contractuelle',
          'La documentation exhaustive plus que le logiciel qui fonctionne',
          'Le respect strict du plan initial sans jamais rien modifier',
          'Les processus et outils plus que les individus'
        ],
        reponsesCorrectes: [0],
        explication: "Le Manifeste Agile privilégie le partenariat continu avec le client pour co-créer la meilleure valeur.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'gp_ch8',
      titre: '8. Le Framework Scrum : Les 3 Rôles Clés',
      dureeEstimeeMin: 45,
      description: 'Product Owner (PO : vision produit, gestion du Product Backlog ordonné par valeur business), Scrum Master (SM : facilitation, suppression des obstacles, coaching agile), Developers / Équipe de Réalisation (auto-organisée, pluridisciplinaire).',
      pointsCles: ['Pas de chef de projet traditionnel en Scrum : responsabilités réparties', 'Le PO décide QUOI faire et dans quel ordre', 'L\'équipe décide COMMENT faire techniquement'],
      formuleCle: 'Triade Scrum : Product Owner + Scrum Master + Équipe de Développement',
      contenuHtml: `<p>Définition précise des responsabilités dans une équipe agile Scrum performante.</p>`,
      exercices: [{
        id: 'gp_ch8_ex1',
        type: TypeQuestion.QCM,
        question: "Dans le framework Scrum, qui a la responsabilité exclusive de prioriser et d'ordonner les éléments du Product Backlog selon la valeur métier ?",
        reponsesPossibles: [
          'Le Product Owner (PO)',
          'Le Scrum Master',
          'Le client en direct',
          'Le stagiaire'
        ],
        reponsesCorrectes: [0],
        explication: "Le Product Owner est le seul propriétaire et responsable de la priorisation du Product Backlog pour maximiser la valeur délivrée.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'gp_ch9',
      titre: '9. Les Cérémonies Scrum & Artefacts de Livraison',
      dureeEstimeeMin: 45,
      description: 'Sprint (timebox 1 à 4 semaines), Sprint Planning, Daily Scrum (15 min chrono debout), Sprint Review (démo de l’Incrément fonctionnel), Sprint Retrospective (amélioration continue), Artefacts : Product Backlog, Sprint Backlog, Incrément (DoD : Definition of Done).',
      pointsCles: ['Daily Scrum : Qu\'ai-je fait hier ? Que ferai-je aujourd\'hui ? Quels sont mes blocages ?', 'Definition of Done (DoD) : critères d\'acceptation stricts avant mise en production', 'Rétrospective pour inspecter et adapter l\'équipe'],
      formuleCle: 'Timebox stricte pour chaque rituel Scrum pour éviter les réunions inutiles',
      contenuHtml: `<p>Animation des cérémonies agiles et rythme d'itération par timeboxing.</p>`,
      exercices: [{
        id: 'gp_ch9_ex1',
        type: TypeQuestion.QCM,
        question: "Quelle cérémonie Scrum a pour objectif spécifique de permettre à l'équipe d'inspecter son propre fonctionnement humain et technique afin de décider d'actions d'amélioration pour le prochain Sprint ?",
        reponsesPossibles: [
          'La Rétrospective de Sprint (Sprint Retrospective)',
          'Le Daily Standup',
          'La Revue de Sprint avec le client',
          'Le comité de direction'
        ],
        reponsesCorrectes: [0],
        explication: "La rétrospective est le rituel clé d'amélioration continue dédié à l'efficacité interne de l'équipe.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'gp_ch10',
      titre: '10. Méthode Kanban & Gestion des Flux de Travail (WIP Limits)',
      dureeEstimeeMin: 40,
      description: 'Les 4 principes fondamentaux de Kanban, tableau visuel (À faire, En cours, En test, Terminé), limitation du travail en cours (WIP / Work In Progress Limits), temps de cycle (Cycle Time) et loi de Little.',
      pointsCles: ['Arrêter de commencer, commencer à terminer !', 'Visualiser les goulots d\'étranglement', 'Flux continu tiré par la demande (Pull system)'],
      formuleCle: 'Loi de Little : Temps de cycle (Lead Time) = Travail en cours (WIP) / Débit (Throughput)',
      contenuHtml: `<p>Fluidification des flux de production logicielle et industrielle avec la méthode Kanban.</p>`,
      exercices: [{
        id: 'gp_ch10_ex1',
        type: TypeQuestion.QCM,
        question: "Quel est le bénéfice principal d'instaurer des limites strictes de travail en cours ('WIP Limits') sur les colonnes d'un tableau Kanban ?",
        reponsesPossibles: [
          'Éviter l\'engorgement des équipes par le multitâche excessif, réduire le temps de cycle et révéler immédiatement les goulots d\'étranglement',
          'Empêcher les développeurs de travailler',
          'Économiser l\'électricité',
          'Rendre le tableau plus petit'
        ],
        reponsesCorrectes: [0],
        explication: "Limiter le WIP force l'équipe à terminer les tâches en cours avant d'en entamer de nouvelles, maximisant ainsi le débit global.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'gp_ch11',
      titre: '11. Rédaction de User Stories & Estimation en Story Points (Planning Poker)',
      dureeEstimeeMin: 45,
      description: 'Format standard des User Stories ("En tant que... je veux... afin de..."), critères d’acceptation (Given/When/Then), méthode INVEST, suite de Fibonacci modifiée pour l’estimation relative et session de Planning Poker.',
      pointsCles: ['Estimation de la complexité relative plutôt que du temps absolu', 'INVEST : Indépendante, Négociable, Valeur, Estimable, Suffisamment petite, Testable', 'Élimination des biais d\'ancrage lors du vote à cartes fermées'],
      formuleCle: 'User Story : En tant que [Rôle], je souhaite [Action], afin de [Bénéfice métier]',
      contenuHtml: `<p>Spécification centrée utilisateur et techniques d'estimation collective agile.</p>`,
      exercices: [{
        id: 'gp_ch11_ex1',
        type: TypeQuestion.QCM,
        question: "Pourquoi utilise-t-on la suite de Fibonacci (1, 2, 3, 5, 8, 13, 21...) lors des séances de Planning Poker pour estimer les Story Points ?",
        reponsesPossibles: [
          'Car plus un élément est gros et complexe, plus l\'incertitude grandit, ce qui rend illusoire une précision excessive',
          'Parce que Fibonacci était le créateur de Scrum',
          'Car les nombres pairs portent malheur',
          'Pour calculer la surface des écrans'
        ],
        reponsesCorrectes: [0],
        explication: "L'écartement exponentiel des valeurs de Fibonacci reflète la progression naturelle de l'incertitude proportionnelle à la taille de la tâche.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'gp_ch12',
      titre: '12. Pilotage Financier par la Valeur Acquise (EVM - Earned Value Management)',
      dureeEstimeeMin: 50,
      description: 'Les 3 variables clés : Valeur Planifiée (PV / CBTP), Coût Réel (AC / CRTE), Valeur Acquise (EV / CBTE). Calcul des écarts : Écart de Coût (CV = EV - AC), Écart de Délai (SV = EV - PV), indices de performance CPI et SPI, estimation à l’achèvement (EAC = BAC / CPI).',
      pointsCles: ['CPI > 1 : Économie budgétaire | CPI < 1 : Dépassement budgétaire', 'SPI > 1 : Projet en avance | SPI < 1 : Projet en retard', 'Indicateur prédictif universel certifié PMI / PMP'],
      formuleCle: 'CPI = EV / AC | SPI = EV / PV | EAC = Budget à l\'Achèvement (BAC) / CPI',
      contenuHtml: `<p>Technique de contrôle de gestion projet pour mesurer conjointement l'avancement physique et les dépenses financières.</p>`,
      exercices: [{
        id: 'gp_ch12_ex1',
        type: TypeQuestion.CHIFFREE,
        question: "Sur un projet ayant un Budget initial BAC de 200 000 €, l'avancement physique mesure une Valeur Acquise (EV) de 100 000 € alors que le Coût Réel engagé (AC) est de 125 000 €. Quelle est l'Estimation à l'Achèvement (EAC) si cette tendance se poursuit ?",
        reponsesPossibles: ['250 000 €', '160 000 €', '200 000 €', '225 000 €'],
        reponsesCorrectes: [0],
        explication: "CPI = EV / AC = 100 000 / 125 000 = 0.80. EAC = BAC / CPI = 200 000 / 0.80 = 250 000 €.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'gp_ch13',
      titre: '13. Gestion du Changement & Résistance des Équipes (Modèle de Kotter)',
      dureeEstimeeMin: 45,
      description: 'Courbe du deuil de Kübler-Ross appliquée aux organisations (Choc -> Déni -> Colère -> Négociation -> Dépression -> Acceptation -> Intégration), les 8 étapes de John Kotter pour réussir la transformation.',
      pointsCles: ['Créer le sentiment d\'urgence', 'Former une coalition motrice puissante', 'Générer des victoires rapides à court terme (Quick Wins) pour motiver'],
      formuleCle: 'Équation du changement de Beckhard : C = D × V × F > R (Dissatisfaction × Vision × 1ers pas > Résistance)',
      contenuHtml: `<p>Accompagnement humain des transformations organisationnelles et techniques.</p>`,
      exercices: [{
        id: 'gp_ch13_ex1',
        type: TypeQuestion.QCM,
        question: "Selon la méthode en 8 étapes de John Kotter, quelle est la toute première étape indispensable pour réussir une transformation dans une organisation ?",
        reponsesPossibles: [
          'Créer un véritable sentiment d\'urgence auprès des acteurs clés',
          'Célébrer la victoire finale',
          'Remplacer tous les ordinateurs',
          'Supprimer les primes'
        ],
        reponsesCorrectes: [0],
        explication: "Sans sentiment d'urgence partagé, les équipes et le management restent dans leur zone de confort et rejettent le changement.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'gp_ch14',
      titre: '14. Pilotage Multi-Projets, PMO & Gouvernance de Portefeuille',
      dureeEstimeeMin: 45,
      description: 'Rôle du Project Management Office (PMO de support, de contrôle, de direction), arbitrage des ressources rares, alignement sur la stratégie d’entreprise (Strategic Portfolio Management), reporting exécutif et tableaux de bord KPI.',
      pointsCles: ['Faire les bons projets (Portefeuille) vs Bien faire les projets (Gestion de projet)', 'Standardisation des méthodologies et outils', 'Capacité de staffing et matrice de compétences'],
      formuleCle: 'Gouvernance de portefeuille : Priorisation par Score Valeur / Risque / Coût',
      contenuHtml: `<p>Structuration et alignement stratégique de l'ensemble des initiatives d'une organisation.</p>`,
      exercices: [{
        id: 'gp_ch14_ex1',
        type: TypeQuestion.QCM,
        question: "Quelle est la mission fondamentale d'un bureau PMO (Project Management Office) stratégique au sein d'une grande entreprise ?",
        reponsesPossibles: [
          'Garantir l\'alignement stratégique des investissements, standardiser les processus de gestion et consolider la vision d\'ensemble des délais, coûts et ressources du portefeuille',
          'Rédiger les lignes de code informatique',
          'Organiser les pots de départ',
          'Réparer le réseau Wifi'
        ],
        reponsesCorrectes: [0],
        explication: "Le PMO apporte la méthode, consolide les arbitrages et offre une vision consolidée pour la prise de décision de la direction générale.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'gp_ch15',
      titre: '15. Clôture de Projet, REX (Retour d’Expérience) & Capitalisation',
      dureeEstimeeMin: 45,
      description: 'Recette finale et Procès-Verbal (PV) de livraison sans réserve, transfert aux équipes d’exploitation / maintenance (Handover), clôture administrative et financière des contrats, séance formelle de Retex / Post-Mortem et archivage des actifs de connaissances.',
      pointsCles: ['La non-clôture engendre des coûts fantômes perpétuels', 'Capitalisation des leçons apprises pour les futurs projets de l\'entreprise', 'Célébration et reconnaissance de l\'équipe projet'],
      formuleCle: 'Clôture = PV de recette formel + Bilan financier définitif + Document de Retex',
      contenuHtml: `<p>Processus d'atterrissage propre d'un projet et capitalisation pérenne du savoir-faire.</p>`,
      exercices: [{
        id: 'gp_ch15_ex1',
        type: TypeQuestion.QCM,
        question: "Quel document officiel signé entre le client et le chef de projet atteste juridiquement de la fin des engagements du projet et transfère la responsabilité aux équipes opérationnelles ?",
        reponsesPossibles: [
          'Le Procès-Verbal de Recette Définitive (PV de recette)',
          'La charte de projet',
          'Une carte de visite',
          'Le premier devis'
        ],
        reponsesCorrectes: [0],
        explication: "Le PV de recette définitive acte la conformité des livrables et marque le début des garanties légales.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    }
  ]
};
