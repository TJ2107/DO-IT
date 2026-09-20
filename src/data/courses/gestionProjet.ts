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
      pointsCles: [
        'Acte de naissance officiel du projet signé par le commanditaire/Sponsor',
        'Autorisation formelle donnée au chef de projet d\'engager les ressources de l\'entreprise',
        'Objectifs SMART : Spécifiques, Mesurables, Atteignables, Réalistes, Temporellement définis',
        'Le Triangle d\'Or de la gestion de projet : Coûts, Délais, Périmètre/Qualité',
        'Périmètre initial (In-Scope) et exclusions formelles (Out-of-Scope) pour éviter le Scope Creep'
      ],
      formuleCle: '\\text{Triangle de Fer} : \\text{Périmètre} = f(\\text{Coûts}, \\text{Délais}, \\text{Qualité})',
      conseilProfesseur: 'Prenez autant de soin à définir ce qui est "HORS PÉRIMÈTRE" (Out-of-Scope) que ce qui est inclus. C\'est l\'absence d\'exclusions claires qui crée les conflits majeurs et les dérives de budget en cours de projet.',
      astuceTerrain: 'Exigez toujours la signature physique ou numérique du Sponsor sur la Charte avant de commencer la moindre dépense ou mobilisation d\'équipe.',
      contenuHtml: `
        <h3>1.1 Les Composants Fondamentaux de la Charte de Projet</h3>
        <ul>
          <li><strong>Titre et Justification Business :</strong> Raison d'être stratégique (Business Case) et retour sur investissement escompté.</li>
          <li><strong>Objectifs Mesurables :</strong> KPI quantifiés (ex: "Réduire de 30% le délai de traitement des commandes d'ici le 31 décembre").</li>
          <li><strong>Gouvernance et Sponsor :</strong> Nom du décideur financier et du chef de projet avec son niveau d'autorité.</li>
          <li><strong>Budget Initial et Jalons Macro :</strong> Enveloppe budgétaire prévisionnelle et grandes échéances directrices.</li>
        </ul>
      `,
      exercices: [
        {
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
        }
      ]
    },
    {
      id: 'gp_ch2',
      titre: '2. Découpage du Projet : WBS (Work Breakdown Structure) & OBS',
      dureeEstimeeMin: 40,
      description: 'Organigramme des Tâches (OT / WBS), règle des 100%, lots de travail (Work Packages), OBS (Organization Breakdown Structure) et dictionnaire du WBS.',
      pointsCles: [
        'WBS (Work Breakdown Structure) / Organigramme des Tâches (OT) : découpage hiérarchique arborescent',
        'Règle des 100% : la somme des sous-éléments doit représenter exactement 100% du travail du niveau supérieur',
        'Lot de Travail (Work Package) : niveau le plus bas du WBS, attribuable à un responsable unique',
        'OBS (Organizational Breakdown Structure) : structure organisationnelle de l\'entreprise',
        'Dictionnaire du WBS : description détaillée du contenu de chaque lot de travail et critères d\'acceptation'
      ],
      formuleCle: '\\text{Règle des 100\\%} : \\sum \\text{Sous-tâches} = 100\\% \\text{ du livrable parent (ni plus, ni moins)}',
      conseilProfesseur: 'Ne confondez pas activités (verbes d\'action) et livrables (noms de résultats tangibles). Un bon WBS se structure par livrables (ex: "Sous-système hydraulique", "Manuel utilisateur").',
      astuceTerrain: 'Règle pratique de granularité : un lot de travail (Work Package) doit représenter un travail d\'une durée comprise entre 8h (1 jour) et 80h (2 semaines) pour rester facilement pilotable.',
      contenuHtml: `
        <h3>2.1 Construction et Arborescence du WBS</h3>
        <p>Le WBS décompose les livrables du niveau global (Niveau 1) jusqu'aux lots élémentaires (Niveau 3 ou 4) :</p>
        <div class="bg-slate-900 text-slate-100 p-4 rounded-lg my-4 font-mono text-sm overflow-x-auto">
          <pre>1. Projet Rénovation Usine
  ├── 1.1 Génie Civil
  │     ├── 1.1.1 Démolition cloisons
  │     └── 1.1.2 Coulage chape béton
  ├── 1.2 Réseaux Électriques & Fluides
  │     ├── 1.2.1 Câblage TGBT
  │     └── 1.2.2 Tuyauterie air comprimé
  └── 1.3 Clôture & Réception
        ├── 1.3.1 Tests de charge
        └── 1.3.2 PV de réception</pre>
        </div>
      `,
      exercices: [
        {
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
        }
      ]
    },
    {
      id: 'gp_ch3',
      titre: '3. Planification Prédictive : Réseau PERT, CPM & Chemin Critique',
      dureeEstimeeMin: 50,
      description: 'Réseau PERT (Program Evaluation and Review Technique), calcul des dates au plus tôt (Early Dates), dates au plus tard (Late Dates), marge libre, marge totale et chemin critique.',
      pointsCles: [
        'Réseau logique orienté (nœuds et antériorités) déterminant l\'ordre d\'exécution',
        'Passe avant : Calcul des Dates au Plus Tôt ($ETO = \\max(\\text{Prédécesseurs})$)',
        'Passe arrière : Calcul des Dates au Plus Tard ($LTA = \\min(\\text{Successeurs})$)',
        'Marge Totale ($MT = LTA - ETO$) : retard admissible sans impacter la date de fin du projet',
        'Chemin Critique (CPM) : chaîne continue de tâches dont la Marge Totale est STRICTEMENT NULLE ($MT = 0$)'
      ],
      formuleCle: 'MT = T_{\\text{plus tard}} - T_{\\text{plus tôt}}, \\quad \\text{Chemin Critique} \\iff MT = 0',
      conseilProfesseur: 'Tout retard de 1 jour sur une tâche située sur le Chemin Critique décale mécaniquement la date de livraison finale du projet de 1 jour. C\'est sur ces tâches que vous devez concentrer votre surveillance quotidienne.',
      astuceTerrain: 'Pour compresser le planning (Schedule Crashing / Fast-Tracking), n\'ajoutez des ressources que sur les tâches du chemin critique, jamais sur les tâches ayant de la marge.',
      contenuHtml: `
        <h3>3.1 Calculs Algorithmiques sur Réseau PERT</h3>
        <p>Le calcul se fait en deux passes systématiques :</p>
        <ol class="list-decimal pl-6 space-y-1 text-sm my-3">
          <li><strong>Passe avant (de gauche à droite) :</strong> Pour chaque tâche, Date de début au plus tôt = max(Date de fin au plus tôt de ses prédécesseurs).</li>
          <li><strong>Passe arrière (de droite à gauche) :</strong> Date de fin au plus tard = min(Date de début au plus tard de ses successeurs).</li>
          <li><strong>Marge Totale :</strong> $MT = \\text{Fin au plus tard} - \\text{Fin au plus tôt}$.</li>
        </ol>
      `,
      exercices: [
        {
          id: 'gp_ch3_ex1',
          type: TypeQuestion.QCM,
          question: "Si une tâche possède une Date au plus tôt de début à J+10 et une Date au plus tard de début à J+16, quelle est sa marge totale ?",
          reponsesPossibles: ['6 jours', '26 jours', '0 jour', '16 jours'],
          reponsesCorrectes: [0],
          explication: "Marge totale = 16 - 10 = 6 jours. La tâche peut être retardée de 6 jours maximum sans impacter la date de livraison finale du projet.",
          points: 5,
          difficulte: NiveauDifficulte.INTERMEDIAIRE
        }
      ]
    },
    {
      id: 'gp_ch4',
      titre: '4. Diagramme de Gantt & Nivellement des Ressources',
      dureeEstimeeMin: 45,
      description: 'Liaisons de dépendance (Fin à Début FD, Début à Début DD, Fin à Fin FF), jalons (Milestones), histogrammes de charge et lissage / nivellement des ressources pour éviter les surallocations.',
      pointsCles: [
        'Diagramme de Gantt : représentation sur axe chronologique temporel avec barres horizontales',
        'Types de dépendances : Fin-à-Début (FS), Début-à-Début (SS), Fin-à-Fin (FF)',
        'Jalon (Milestone) : événement charnière de durée strictly zéro ($D = 0$)',
        'Histogramme de charge et détection des surallocations de ressources humaines',
        'Lissage (Resource Smoothing) vs Nivellement (Resource Leveling avec décalage de la date de fin)'
      ],
      formuleCle: '\\text{Jalon} : \\text{Durée} = 0 \\text{ jours} \\quad | \\quad \\text{Liaison standard} : \\text{Fin-à-Début (FS) avec décalage éventuel } \\pm \\text{Lag}',
      conseilProfesseur: 'Utilisez le lissage de ressources en consommant les marges libres des tâches non critiques pour éviter de surcharger un expert à plus de 100% de sa disponibilité.',
      astuceTerrain: 'Dans vos comités de direction, présentez une vue Gantt macro ne contenant QUE les jalons majeurs (Gantt de synthèse) : les décideurs veulent voir les dates clés, pas les 500 sous-tâches.',
      contenuHtml: `
        <h3>4.1 Types de Liaisons Temporelles dans le Gantt</h3>
        <ul>
          <li><strong>Fin à Début (FD / FS) :</strong> La tâche B ne peut commencer que lorsque la tâche A est terminée (cas standard dans 90% des projets).</li>
          <li><strong>Début à Début (DD / SS) :</strong> La tâche B commence en même temps que la tâche A (parallélisation).</li>
          <li><strong>Fin à Fin (FF) :</strong> La tâche B ne peut se terminer que lorsque la tâche A est également achevée.</li>
        </ul>
      `,
      exercices: [
        {
          id: 'gp_ch4_ex1',
          type: TypeQuestion.QCM,
          question: "Dans un diagramme de Gantt, quelle est la durée temporelle attribuée à un 'Jalon' (Milestone) représentant par exemple la signature d'un PV de recette ?",
          reponsesPossibles: ['0 jour (durée nulle, c\'est un repère temporel ponctuel)', '30 jours', '1 semaine', 'La durée moyenne du projet'],
          reponsesCorrectes: [0],
          explication: "Un jalon est un marqueur d'étape ou de décision dont la durée est conventionnellement égale à zéro.",
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        }
      ]
    },
    {
      id: 'gp_ch5',
      titre: '5. Gestion des Risques Projet : Matrice Criticité & Plans de Réponse',
      dureeEstimeeMin: 45,
      description: 'Identification des risques, registre des risques, matrice Probabilité × Impact, les 4 stratégies de réponse aux menaces (Éviter, Transférer, Atténuer, Accepter) et budget de réserve de contingence.',
      pointsCles: [
        'Registre des risques tenu à jour tout au long du cycle de vie du projet',
        'Cotation quantitative de la criticité : $C = P \\times I$ (Probabilité $\\times$ Impact)',
        '4 Stratégies face aux Menaces : Éviter (supprimer la cause), Transférer (assurance/sous-traitance), Atténuer (réduire P ou I), Accepter (réserve budgétaire)',
        '4 Stratégies face aux Opportunités : Exploiter, Partager, Améliorer, Accepter',
        'Réserve de contingence (Risques connus) vs Réserve de management (Inconnus imprévisibles)'
      ],
      formuleCle: '\\text{Criticité du Risque} = \\text{Probabilité (P)} \\times \\text{Impact (I)}, \\quad \\text{EMV} = P \\times \\text{Coût d\'impact}',
      conseilProfesseur: 'Chaque risque identifié dans le registre doit impérativement avoir un "Propriétaire du risque" (Risk Owner) désigné nommément, chargé de surveiller les signaux précurseurs (déclencheurs).',
      astuceTerrain: 'Calculez la Valeur Monétaire Attendue (EMV) pour justifier scientifiquement le budget de réserve auprès de la direction financière (ex: 20% de probabilité d\'une panne à 50 000 € = 10 000 € de réserve).',
      contenuHtml: `
        <h3>5.1 Matrice de Criticité des Risques Projet</h3>
        <table class="w-full border-collapse my-4 text-sm border border-slate-300 dark:border-slate-700">
          <thead>
            <tr class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100">
              <th class="border p-2">Probabilité \\ Impact</th>
              <th class="border p-2">Faible (1)</th>
              <th class="border p-2">Moyen (2)</th>
              <th class="border p-2">Fort (3)</th>
              <th class="border p-2">Critique (4)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border p-2 font-bold">Très probable (4)</td>
              <td class="border p-2 bg-amber-100 text-amber-900">4 (Moyen)</td>
              <td class="border p-2 bg-rose-100 text-rose-900 font-bold">8 (Élevé)</td>
              <td class="border p-2 bg-rose-200 text-rose-950 font-bold">12 (Critique)</td>
              <td class="border p-2 bg-rose-300 text-rose-950 font-bold">16 (Majeur)</td>
            </tr>
            <tr>
              <td class="border p-2 font-bold">Probable (3)</td>
              <td class="border p-2 bg-emerald-100 text-emerald-900">3 (Faible)</td>
              <td class="border p-2 bg-amber-100 text-amber-900">6 (Moyen)</td>
              <td class="border p-2 bg-rose-100 text-rose-900 font-bold">9 (Élevé)</td>
              <td class="border p-2 bg-rose-200 text-rose-950 font-bold">12 (Critique)</td>
            </tr>
            <tr>
              <td class="border p-2 font-bold">Peu probable (2)</td>
              <td class="border p-2 bg-emerald-100 text-emerald-900">2 (Faible)</td>
              <td class="border p-2 bg-emerald-100 text-emerald-900">4 (Faible)</td>
              <td class="border p-2 bg-amber-100 text-amber-900">6 (Moyen)</td>
              <td class="border p-2 bg-rose-100 text-rose-900 font-bold">8 (Élevé)</td>
            </tr>
          </tbody>
        </table>
      `,
      exercices: [
        {
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
        }
      ]
    },
    {
      id: 'gp_ch6',
      titre: '6. Matrice RACI & Gestion des Parties Prenantes (Stakeholders)',
      dureeEstimeeMin: 40,
      description: 'Matrice RACI : Responsible (Réalisateur), Accountable (Responsable unique / Décideur), Consulted (Consulté), Informed (Informé), matrice Pouvoir / Intérêt pour cartographier les acteurs clés.',
      pointsCles: [
        'RACI : Responsible (Fait le travail), Accountable (Valide/Porte la responsabilité), Consulted (Avis d\'expert), Informed (Tenu au courant)',
        'Règle fondamentale : Un et un seul "A" par activité pour éviter la dilution des responsabilités',
        'Matrice Pouvoir / Intérêt pour adapter le niveau de communication avec chaque partie prenante',
        'Les 4 stratégies d\'engagement : Gérer étroitement (Fort Pouvoir / Fort Intérêt), Garder satisfait, Garder informé, Surveiller'
      ],
      formuleCle: '\\text{Règle RACI} : \\text{Exactement } 1 \\times \\mathbf{A} \\text{ par ligne de tâche}',
      conseilProfesseur: 'Si vous avez plusieurs "A" sur une même ligne, personne ne sera réellement responsable en cas d\'échec. S\'il n\'y a aucun "A", la tâche dérivera sans décision.',
      astuceTerrain: 'Pour les parties prenantes à fort pouvoir mais faible intérêt (ex: Directeur Financier), limitez-vous à des synthèses exécutives percutantes pour ne pas saturer leur emploi du temps.',
      contenuHtml: `
        <h3>6.1 La Matrice Pouvoir / Intérêt des Parties Prenantes</h3>
        <ul>
          <li><strong>Fort Pouvoir / Fort Intérêt :</strong> Acteurs clés (Sponsor, Client direct) $\\rightarrow$ Collaborer étroitement et impliquer dans les décisions.</li>
          <li><strong>Fort Pouvoir / Faible Intérêt :</strong> Direction générale, Juridique $\\rightarrow$ Maintenir satisfait et respecter leurs exigences sans les submerger de détails.</li>
          <li><strong>Faible Pouvoir / Fort Intérêt :</strong> Utilisateurs finaux $\\rightarrow$ Maintenir informés et consulter régulièrement pour faciliter l'adoption.</li>
          <li><strong>Faible Pouvoir / Faible Intérêt :</strong> Tiers indirects $\\rightarrow$ Surveiller avec un effort minimal.</li>
        </ul>
      `,
      exercices: [
        {
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
        }
      ]
    },
    {
      id: 'gp_ch7',
      titre: '7. Le Manifeste Agile & les 12 Principes Fondamentaux',
      dureeEstimeeMin: 35,
      description: 'Origine de 2001 à Snowbird, les 4 valeurs cardinales (Individus et interactions avant processus, Logiciel fonctionnel avant documentation, Collaboration client avant négociation contractuelle, Adaptation au changement avant suivi du plan).',
      pointsCles: [
        'Manifeste Agile rédigé en 2001 par 17 experts à Snowbird (Utah)',
        'Les 4 Valeurs fondamentales de l\'Agilité valorisant l\'humain et le résultat fonctionnel',
        'Les 12 Principes Agiles (livraison continue, accueil du changement, rythme soutenable)',
        'Différence fondamentale avec le cycle en V classique : boucle de rétroaction courte et réduction du risque produit'
      ],
      formuleCle: '\\text{Agilité} : \\text{Livraison incrémentale continue} + \\text{Adaptation empirique au changement}',
      conseilProfesseur: 'L\'agilité ne signifie pas "l\'absence de règles ou de documentation". Cela signifie qu\'on ne produit pas de la documentation inutile pour le plaisir : on privilégie ce qui apporte une réelle valeur à l\'utilisateur.',
      astuceTerrain: 'Face à un client qui exige un cahier des charges figé sur 2 ans dans un marché mouvant, proposez un contrat agile à budget fixe et périmètre variable ajusté à chaque itération.',
      contenuHtml: `
        <h3>7.1 Les 4 Valeurs Cardinales du Manifeste Agile</h3>
        <ol class="list-decimal pl-6 space-y-2 text-sm my-3">
          <li><strong>Les individus et leurs interactions</strong> plus que les processus et les outils.</li>
          <li><strong>Des logiciels / produits opérationnels</strong> plus qu'une documentation exhaustive.</li>
          <li><strong>La collaboration avec les clients</strong> plus que la négociation contractuelle.</li>
          <li><strong>L'adaptation au changement</strong> plus que le suivi strict d'un plan figé.</li>
        </ol>
      `,
      exercices: [
        {
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
        }
      ]
    },
    {
      id: 'gp_ch8',
      titre: '8. Le Framework Scrum : Les 3 Rôles Clés',
      dureeEstimeeMin: 45,
      description: 'Product Owner (PO : vision produit, gestion du Product Backlog ordonné par valeur business), Scrum Master (SM : facilitation, suppression des obstacles, coaching agile), Developers / Équipe de Réalisation (auto-organisée, pluridisciplinaire).',
      pointsCles: [
        'Absence de chef de projet hiérarchique : gouvernance partagée et responsabilités claires',
        'Product Owner (PO) : porte la vision produit et maximise la valeur du travail réalisé par les Developers',
        'Scrum Master (SM) : leader serviteur garant du framework Scrum et de la suppression des blocages (impediments)',
        'Developers (Équipe de réalisation) : pluridisciplinaire, auto-organisée, responsable de la qualité technique'
      ],
      formuleCle: '\\text{Équipe Scrum} = \\text{Product Owner (Quoi)} + \\text{Developers (Comment)} + \\text{Scrum Master (Efficacité)}',
      conseilProfesseur: 'Le Scrum Master n\'est pas l\'assistant administratif de l\'équipe ni le supérieur hiérarchique : c\'est un coach d\'équipe qui aide à lever les obstacles extérieurs et fait respecter le cadre.',
      astuceTerrain: 'Évitez absolument de cumuler le rôle de Product Owner et de Scrum Master sur une même personne : ces deux rôles sont en tension saine (ambition produit vs capacité soutenable de l\'équipe).',
      contenuHtml: `
        <h3>8.1 Répartition des Responsabilités dans Scrum</h3>
        <table class="w-full border-collapse my-4 text-sm border border-slate-300 dark:border-slate-700">
          <thead>
            <tr class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100">
              <th class="border p-2">Rôle Scrum</th>
              <th class="border p-2">Focus Principal</th>
              <th class="border p-2">Responsabilités Majeures</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border p-2 font-bold text-amber-600">Product Owner</td>
              <td class="border p-2">Valeur Métier & Produit</td>
              <td class="border p-2">Création et priorisation du Product Backlog, acceptation des stories.</td>
            </tr>
            <tr>
              <td class="border p-2 font-bold text-emerald-600">Scrum Master</td>
              <td class="border p-2">Processus & Facilitation</td>
              <td class="border p-2">Élimination des obstacles, animation des rituels, protection de l'équipe.</td>
            </tr>
            <tr>
              <td class="border p-2 font-bold text-indigo-600">Developers</td>
              <td class="border p-2">Exécution & Qualité</td>
              <td class="border p-2">Conception, réalisation, tests et respect de la Definition of Done.</td>
            </tr>
          </tbody>
        </table>
      `,
      exercices: [
        {
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
        }
      ]
    },
    {
      id: 'gp_ch9',
      titre: '9. Les Cérémonies Scrum & Artefacts de Livraison',
      dureeEstimeeMin: 45,
      description: 'Sprint (timebox 1 à 4 semaines), Sprint Planning, Daily Scrum (15 min chrono debout), Sprint Review (démo de l’Incrément fonctionnel), Sprint Retrospective (amélioration continue), Artefacts : Product Backlog, Sprint Backlog, Incrément (DoD : Definition of Done).',
      pointsCles: [
        'Timeboxing strict : Sprint de durée fixe (habituellement 2 semaines)',
        '4 Cérémonies : Sprint Planning, Daily Scrum (15 min), Sprint Review (démo client), Sprint Retrospective',
        '3 Artefacts et leurs engagements : Product Backlog (Objectif de Produit), Sprint Backlog (Objectif de Sprint), Incrément (Definition of Done)',
        'Definition of Done (DoD) : critères d\'exigence qualité non négociables pour qu\'un incrément soit prêt pour la production'
      ],
      formuleCle: '\\text{Sprint (2 semaines)} = \\text{Planning} \\rightarrow \\text{Dailies (15 min)} \\rightarrow \\text{Review (Démo)} \\rightarrow \\text{Rétro (Amélioration)}',
      conseilProfesseur: 'Le Daily Scrum ne doit jamais dépasser 15 minutes et n\'est pas un rapport d\'avancement pour le chef : c\'est une synchronisation entre développeurs pour réaligner le plan de la journée vers l\'Objectif de Sprint.',
      astuceTerrain: 'En rétrospective de Sprint, appliquez la règle d\'or : "Peu importe ce que nous découvrons, nous comprenons et croyons sincèrement que chacun a fait du mieux qu\'il pouvait avec ses compétences du moment".',
      contenuHtml: `
        <h3>9.1 Les 4 Événements Scrum Officiels</h3>
        <ul>
          <li><strong>Sprint Planning :</strong> Pourquoi ce Sprint est important ? Que peut-on accomplir ? Comment le travail sera-t-il réalisé ?</li>
          <li><strong>Daily Scrum :</strong> Synchronisation quotidienne de 15 minutes pour inspecter la trajectoire vers l'objectif de Sprint.</li>
          <li><strong>Sprint Review :</strong> Démonstration en direct de l'Incrément fonctionnel aux parties prenantes et recueil des retours utilisateurs.</li>
          <li><strong>Sprint Retrospective :</strong> Analyse interne par l'équipe de ses interactions, processus et outillages pour définir des actions d'amélioration concrètes.</li>
        </ul>
      `,
      exercices: [
        {
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
        }
      ]
    },
    {
      id: 'gp_ch10',
      titre: '10. Méthode Kanban & Gestion des Flux de Travail (WIP Limits)',
      dureeEstimeeMin: 40,
      description: 'Les 4 principes fondamentaux de Kanban, tableau visuel (À faire, En cours, En test, Terminé), limitation du travail en cours (WIP / Work In Progress Limits), temps de cycle (Cycle Time) et loi de Little.',
      pointsCles: [
        'Principes Kanban : Visualiser le flux de travail et limiter le travail en cours (WIP)',
        'WIP Limits : restreindre le nombre maximum de tâches simultanées par colonne',
        'Loi de Little : $\\text{Lead Time} = \\frac{\\text{WIP}}{\\text{Débit (Throughput)}}$',
        'Diagramme de Flux Cumulé (CFD) pour repérer immédiatement les embouteillages et goulots d\'étranglement',
        'Devise fondamentale : "Arrêter de commencer, commencer à terminer !"'
      ],
      formuleCle: '\\text{Loi de Little} : \\text{Lead Time} = \\frac{\\text{WIP (Tâches en cours)}}{\\text{Throughput (Tâches livrées par unité de temps)}}',
      conseilProfesseur: 'Si votre colonne "En recette / Test" s\'engorge avec 15 tickets alors que la limite WIP est de 3, toute l\'équipe doit arrêter de développer de nouvelles fonctionnalités pour aider les testeurs à valider les tickets en attente.',
      astuceTerrain: 'Ajustez régulièrement vos limites WIP : une limite trop haute masque les dysfonctionnements ; une limite trop basse crée des temps morts.',
      contenuHtml: `
        <h3>10.1 Métriques Clés d'un Flux Kanban</h3>
        <ul>
          <li><strong>Lead Time (Temps de traversée) :</strong> Durée écoulée entre la demande du client et la livraison effective en production.</li>
          <li><strong>Cycle Time (Temps de cycle) :</strong> Durée écoulée entre le moment où l'équipe commence activement à travailler sur la tâche et son achèvement.</li>
          <li><strong>Throughput (Débit) :</strong> Nombre moyen d'éléments de travail terminés par semaine ou par mois.</li>
        </ul>
      `,
      exercices: [
        {
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
        }
      ]
    },
    {
      id: 'gp_ch11',
      titre: '11. Rédaction de User Stories & Estimation en Story Points (Planning Poker)',
      dureeEstimeeMin: 45,
      description: 'Format standard des User Stories ("En tant que... je veux... afin de..."), critères d’acceptation (Given/When/Then), méthode INVEST, suite de Fibonacci modifiée pour l’estimation relative et session de Planning Poker.',
      pointsCles: [
        'Structure canonique : "En tant que [Rôle], je veux [Action/Fonctionnalité], afin de [Valeur/Bénéfice]"',
        'Critères d\'acceptation au format BDD (Behavior Driven Development) : Given / When / Then',
        'Critères qualité INVEST : Indépendante, Négociable, Valeur, Estimable, Suffisamment petite, Testable',
        'Estimation relative en Story Points basée sur l\'effort, la complexité et l\'incertitude',
        'Planning Poker avec la suite de Fibonacci modifiée ($1, 2, 3, 5, 8, 13, 20, 40, 100$)'
      ],
      formuleCle: '\\text{User Story} : \\text{En tant que } \\langle\\text{Rôle}\\rangle \\text{ je souhaite } \\langle\\text{Action}\\rangle \\text{ afin de } \\langle\\text{Bénéfice}\\rangle',
      conseilProfesseur: 'Lors du Planning Poker, si deux équipiers votent 2 et 13 pour la même story, donnez la parole en priorité à ces deux personnes. L\'un a sans doute vu une complexité cachée ou l\'autre une solution technique très simple.',
      astuceTerrain: 'Découpez systématiquement toute User Story évaluée à 13 ou plus en plusieurs sous-stories plus petites avant de l\'intégrer dans un Sprint.',
      contenuHtml: `
        <h3>11.1 La Méthode INVEST pour des User Stories Parfaites</h3>
        <ul>
          <li><strong>I (Indépendante) :</strong> La story peut être développée et livrée sans dépendance bloquante avec une autre.</li>
          <li><strong>N (Négociable) :</strong> Elle n'est pas un contrat rigide mais une invitation au dialogue entre PO et développeurs.</li>
          <li><strong>V (Valeur) :</strong> Elle apporte un bénéfice direct tangible à l'utilisateur final ou au client.</li>
          <li><strong>E (Estimable) :</strong> L'équipe en comprend suffisamment le contour technique pour lui attribuer des Story Points.</li>
          <li><strong>S (Small / Petite) :</strong> Elle peut être réalisée et testée en quelques jours au sein du Sprint.</li>
          <li><strong>T (Testable) :</strong> Ses critères d'acceptation permettent de vérifier objectivement si elle fonctionne.</li>
        </ul>
      `,
      exercices: [
        {
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
        }
      ]
    },
    {
      id: 'gp_ch12',
      titre: '12. Pilotage Financier par la Valeur Acquise (EVM - Earned Value Management)',
      dureeEstimeeMin: 50,
      description: 'Les 3 variables clés : Valeur Planifiée (PV / CBTP), Coût Réel (AC / CRTE), Valeur Acquise (EV / CBTE). Calcul des écarts : Écart de Coût (CV = EV - AC), Écart de Délai (SV = EV - PV), indices de performance CPI et SPI, estimation à l’achèvement (EAC = BAC / CPI).',
      pointsCles: [
        'Méthode normalisée PMI/ISO combinant l\'avancement physique, le temps et les dépenses réelles',
        'Les 3 piliers : $PV$ (Valeur Planifiée), $AC$ (Coût Réel Dépensé), $EV$ (Valeur Réellement Acquise)',
        'Indice de Performance des Coûts : $CPI = \\frac{EV}{AC}$ ($CPI < 1 \\implies$ dépassement budgétaire)',
        'Indice de Performance des Délais : $SPI = \\frac{EV}{PV}$ ($SPI < 1 \\implies$ retard sur planning)',
        'Estimation du coût final à l\'Achèvement : $EAC = \\frac{BAC}{CPI}$'
      ],
      formuleCle: 'CPI = \\frac{EV}{AC}, \\quad SPI = \\frac{EV}{PV}, \\quad EAC = \\frac{BAC}{CPI}, \\quad VAC = BAC - EAC',
      conseilProfesseur: 'Si votre $CPI = 0.80$, cela signifie que chaque euro dépensé ne produit que 0.80 € de valeur livrée. Le projet subit donc 20% de surcoût.',
      astuceTerrain: 'L\'EVM est l\'outil ultime pour avertir le comité de direction plusieurs mois à l\'avance d\'un dérapage budgétaire inéluctable si aucune action corrective n\'est menée.',
      contenuHtml: `
        <h3>12.1 Tableau Synthétique des Formules EVM</h3>
        <table class="w-full border-collapse my-4 text-sm border border-slate-300 dark:border-slate-700">
          <thead>
            <tr class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100">
              <th class="border p-2">Indicateur</th>
              <th class="border p-2">Formule Mathématique</th>
              <th class="border p-2">Interprétation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border p-2 font-bold">Écart de Coût (CV)</td>
              <td class="border p-2 font-mono">CV = EV - AC</td>
              <td class="border p-2">&gt; 0 : Économie | &lt; 0 : Dépassement financier</td>
            </tr>
            <tr>
              <td class="border p-2 font-bold">Écart de Délai (SV)</td>
              <td class="border p-2 font-mono">SV = EV - PV</td>
              <td class="border p-2">&gt; 0 : Avance planning | &lt; 0 : Retard</td>
            </tr>
            <tr>
              <td class="border p-2 font-bold">Performance Coût (CPI)</td>
              <td class="border p-2 font-mono">CPI = EV / AC</td>
              <td class="border p-2">&gt; 1 : Moins cher que prévu | &lt; 1 : Surcoût</td>
            </tr>
            <tr>
              <td class="border p-2 font-bold">Performance Délai (SPI)</td>
              <td class="border p-2 font-mono">SPI = EV / PV</td>
              <td class="border p-2">&gt; 1 : Plus rapide que prévu | &lt; 1 : En retard</td>
            </tr>
          </tbody>
        </table>
      `,
      exercices: [
        {
          id: 'gp_ch12_ex1',
          type: TypeQuestion.CHIFFREE,
          question: "Sur un projet ayant un Budget initial BAC de 200 000 €, l'avancement physique mesure une Valeur Acquise (EV) de 100 000 € alors que le Coût Réel engagé (AC) est de 125 000 €. Quelle est l'Estimation à l'Achèvement (EAC) si cette tendance se poursuit ?",
          reponsesPossibles: ['250 000 €', '160 000 €', '200 000 €', '225 000 €'],
          reponsesCorrectes: [0],
          explication: "CPI = EV / AC = 100 000 / 125 000 = 0.80. EAC = BAC / CPI = 200 000 / 0.80 = 250 000 €.",
          points: 5,
          difficulte: NiveauDifficulte.INTERMEDIAIRE
        }
      ]
    },
    {
      id: 'gp_ch13',
      titre: '13. Gestion du Changement & Résistance des Équipes (Modèle de Kotter)',
      dureeEstimeeMin: 45,
      description: 'Courbe du deuil de Kübler-Ross appliquée aux organisations (Choc -> Déni -> Colère -> Négociation -> Dépression -> Acceptation -> Intégration), les 8 étapes de John Kotter pour réussir la transformation.',
      pointsCles: [
        'Accompagnement du facteur humain : la principale cause d\'échec des projets n\'est pas technique mais humaine',
        'Courbe du changement : comprendre les phases de résistance émotionnelle des collaborateurs',
        'Les 8 étapes de John Kotter pour piloter le changement durablement',
        'Importance cruciale des victoires rapides à court terme (Quick Wins) pour démontrer les bénéfices tangibles'
      ],
      formuleCle: '\\text{Formule de Beckhard} : C = D \\times V \\times F > R \\quad (\\text{Dissatisfaction} \\times \\text{Vision} \\times \\text{First Steps} > \\text{Résistance})',
      conseilProfesseur: 'Ne lancez pas une formation logicielle sans avoir au préalable expliqué le "POURQUOI" du changement. Les utilisateurs doivent comprendre en quoi l\'ancien outil était bloquant pour l\'entreprise.',
      astuceTerrain: 'Identifiez dès le départ les "champions" ou relais d\'opinion positifs dans les équipes pour en faire vos ambassadeurs auprès des sceptiques.',
      contenuHtml: `
        <h3>13.1 Les 8 Étapes du Changement selon John Kotter</h3>
        <ol class="list-decimal pl-6 space-y-1 text-sm my-3">
          <li><strong>Créer l'urgence :</strong> Démontrer pourquoi le statu quo est dangereux.</li>
          <li><strong>Former une coalition puissante :</strong> Rassembler des leaders d'influence.</li>
          <li><strong>Développer une vision stratégique :</strong> Rendre le futur désirable et compréhensible.</li>
          <li><strong>Communiquer la vision :</strong> Répéter le message sur tous les canaux.</li>
          <li><strong>Lever les obstacles :</strong> Éliminer les blocages organisationnels.</li>
          <li><strong>Générer des victoires à court terme (Quick Wins) :</strong> Célébrer les premiers succès.</li>
          <li><strong>Consolider les gains :</strong> Accélérer la cadence sur les projets suivants.</li>
          <li><strong>Ancrer les nouvelles approches dans la culture :</strong> Pérenniser les comportements.</li>
        </ol>
      `,
      exercices: [
        {
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
        }
      ]
    },
    {
      id: 'gp_ch14',
      titre: '14. Pilotage Multi-Projets, PMO & Gouvernance de Portefeuille',
      dureeEstimeeMin: 45,
      description: 'Rôle du Project Management Office (PMO de support, de contrôle, de direction), arbitrage des ressources rares, alignement sur la stratégie d’entreprise (Strategic Portfolio Management), reporting exécutif et tableaux de bord KPI.',
      pointsCles: [
        'Distinguer Projet (bien faire le travail) et Portefeuille (faire les bons investissements stratégiques)',
        'Typologie des PMO : PMO Support (conseil/méthode), PMO Contrôle (audits/conformité), PMO Directif (pilotage direct)',
        'Gestion de la capacité des ressources et arbitrage des compétences critiques partagées',
        'Tableaux de bord consolidés pour le comité exécutif (CODIR / COPIL)'
      ],
      formuleCle: '\\text{Score Portefeuille} = \\frac{\\text{Valeur Stratégique} \\times \\text{ROI Potentiel}}{\\text{Niveau de Risque} \\times \\text{Coût Global}}',
      conseilProfesseur: 'Le rôle d\'un PMO n\'est pas d\'ajouter de la bureaucratie mais d\'apporter de la clarté et des méthodes homogènes pour aider la direction à faire des arbitrages budgétaires rationnels.',
      astuceTerrain: 'Instaurez une grille de scoring standardisée pour évaluer tous les nouveaux projets candidats avant de décider de leur lancement.',
      contenuHtml: `
        <h3>14.1 Missions Clés du Bureau PMO Stratégique</h3>
        <ul>
          <li><strong>Standardisation :</strong> Définir les processus, modèles documentaires et outillages projet communs.</li>
          <li><strong>Consolidation :</strong> Agréger les données de coûts, délais et risques au niveau du portefeuille global.</li>
          <li><strong>Gestion Capacitaire :</strong> Cartographier la charge des équipes pour éviter les goulots d'étranglement humains.</li>
        </ul>
      `,
      exercices: [
        {
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
        }
      ]
    },
    {
      id: 'gp_ch15',
      titre: '15. Clôture de Projet, REX (Retour d’Expérience) & Capitalisation',
      dureeEstimeeMin: 45,
      description: 'Recette finale et Procès-Verbal (PV) de livraison sans réserve, transfert aux équipes d’exploitation / maintenance (Handover), clôture administrative et financière des contrats, séance formelle de Retex / Post-Mortem et archivage des actifs de connaissances.',
      pointsCles: [
        'Procès-Verbal (PV) de recette définitive sans réserve : acte juridique transférant la propriété au client',
        'Plan de transition vers l\'exploitation (Handover / Run) et formation des équipes de support',
        'Clôture financière : apurement des factures fournisseurs, libération des cautions et clôture des codes budgétaires',
        'Atelier de Retex (Retour d\'Expérience / Post-Mortem) et capitalisation des leçons apprises (Lessons Learned)'
      ],
      formuleCle: '\\text{Clôture} = \\text{PV de Recette} + \\text{Bilan Financier Réel} + \\text{Dossier Retex} + \\text{Libération des Ressources}',
      conseilProfesseur: 'Ne terminez jamais un projet sans une séance formelle de Retex. Ce que vous avez appris des erreurs et des réussites est l\'actif immatériel le plus précieux pour la réussite des projets futurs.',
      astuceTerrain: 'N\'oubliez pas de célébrer la fin du projet avec toute l\'équipe : la reconnaissance des efforts fournis est le premier moteur d\'engagement pour les missions à venir.',
      contenuHtml: `
        <h3>15.1 Checklist Complète de Clôture de Projet</h3>
        <ol class="list-decimal pl-6 space-y-1 text-sm my-3">
          <li>Signature du Procès-Verbal de Recette Définitive par le client/commanditaire.</li>
          <li>Transfert formel de la documentation technique et des accès aux équipes d'exploitation.</li>
          <li>Clôture administrative de tous les contrats et bons de commande fournisseurs.</li>
          <li>Animation de l'atelier de Retex et archivage des leçons apprises dans la base de connaissances.</li>
          <li>Réaffectation officielle des membres de l'équipe projet vers de nouvelles missions.</li>
        </ol>
      `,
      exercices: [
        {
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
        }
      ]
    }
  ]
};
