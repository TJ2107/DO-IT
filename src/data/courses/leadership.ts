import { Domaine, NiveauDifficulte, TypeQuestion, Cours } from '../../types';

export const COURSE_LEADERSHIP: Cours = {
  id: 'lead_101',
  domaine: Domaine.LEADERSHIP,
  domaineNom: 'Management & Leadership',
  icon: '👑',
  titre: "Leadership Stratégique, Management d’Équipe & Négociation Avancée",
  description: 'Cursus d’excellence en 15 chapitres : Leadership situationnel (Hersey & Blanchard), intelligence émotionnelle (Goleman), dynamique de groupe (Tuckman), négociation raisonnée de Harvard (BATNA), feedback constructif et sécurité psychologique.',
  niveau: NiveauDifficulte.AVANCE,
  dureeHeures: 46,
  colorClass: 'from-rose-600 to-red-700',
  titreBrevet: "Brevet Professionnel de Management Opérationnel & Leadership Stratégique",
  objectifs: [
    'Adapter sa posture managériale selon la maturité professionnelle des collaborateurs (Directif, Persuasif, Participatif, Délégatif)',
    'Développer l’intelligence émotionnelle et instaurer la sécurité psychologique au sein des équipes',
    'Conduire des négociations complexes gagnant-gagnant selon la méthode de Harvard (intérêts vs positions, BATNA / MESORE)',
    'Délivrer des feedbacks impactants selon la méthode DESC / SBI sans générer de posture défensive',
    'Gérer les conflits interpersonnels et animer des réunions d’arbitrage décisionnel'
  ],
  competences: [
    'Leadership Situationnel & Styles de Management',
    'Intelligence Émotionnelle (Goleman)',
    'Modèle de Tuckman (Forming, Storming, Norming, Performing)',
    'Négociation Raisonnée de Harvard (BATNA / MESORE)',
    'Communication Non-Violente & Feedback DESC / SBI',
    'Sécurité Psychologique & Équipes Haute Performance (Google Aristote)',
    'Gestion du Temps, Priorisation d’Eisenhower & Délégation Réussie'
  ],
  preRequis: ['Expérience de la vie professionnelle en équipe'],
  certifiant: true,
  scoreMinValidation: 0.7,
  dureeValiditeMois: 36,
  devoirs: [
    {
      id: 'lead_dev_1',
      numero: 1,
      titre: 'Devoir n°1 : Résolution de Conflit & Posture de Leadership Situationnel',
      chapitresCouverts: 'Chapitres 1 à 5',
      dureeEstimeeMin: 45,
      noteMax: 20,
      coefficient: 2,
      description: 'Analyse d’une situation de tension au sein d’une équipe projet et choix du style de leadership adapté selon le modèle de Hersey & Blanchard.',
      miseEnSituation: 'Un collaborateur senior très compétent mais démotivé (Maturité M3) entre en conflit ouvert avec une jeune recrue enthousiaste mais inexpérimentée (Maturité M1).',
      questions: [
        {
          id: 'q1',
          titre: 'Style de leadership pour le collaborateur senior démotivé (M3)',
          enonce: 'Selon la grille de Hersey & Blanchard, quel style de management doit adopter le manager face à un collaborateur très compétent mais manquant d’engagement ou d’assurance (Niveau M3) ?',
          points: 7,
          type: 'cas_pratique',
          options: [
            'Style S3 : Participatif / Soutien (forte écoute relationnelle, co-construction de la décision, valorisation de son expertise)',
            'Style S1 : Directif autoritaire (ordres stricts)',
            'Style S4 : Délégation totale sans contact',
            'Ignorer la situation'
          ],
          reponseCorrecteIndex: 0,
          solutionDetaillee: 'Le niveau M3 exige un style Participatif (S3) : le manager sollicite ses idées, valorise ses compétences et co-décide pour restaurer la motivation.',
          baremeDetail: ['Identification du style S3 Participatif : 4 pts', 'Explication sur le soutien relationnel : 3 pts']
        },
        {
          id: 'q2',
          titre: 'Définition du concept de BATNA (MESORE) en négociation',
          enonce: 'Dans la méthode de négociation raisonnée de Harvard, que représente la BATNA (ou MESORE en français) ?',
          points: 7,
          type: 'cas_pratique',
          options: [
            'La Meilleure Solution de Rechange / Best Alternative To a Negotiated Agreement (votre alternative de repli si la négociation actuelle échoue complètement)',
            'Le prix maximal imposé par le directeur',
            'Le montant de la prime annuelle',
            'Une technique de menace verbale'
          ],
          reponseCorrecteIndex: 0,
          solutionDetaillee: 'La BATNA/MESORE est votre pouvoir réel de négociation : connaître votre meilleure alternative hors table de négociation vous permet de refuser tout accord défavorable.',
          baremeDetail: ['Définition exacte de la meilleure alternative de rechange : 4 pts', 'Rôle de filet de sécurité décisionnel : 3 pts']
        },
        {
          id: 'q3',
          titre: 'Les 4 étapes de la méthode de feedback DESC',
          enonce: 'Dans quel ordre chronologique se structure un entretien de recadrage constructif avec la méthode DESC ?',
          points: 6,
          type: 'cas_pratique',
          options: [
            '1. Décrire les faits objectifs -> 2. Exprimer ses Émotions/Ressenti -> 3. Spécifier des Solutions -> 4. Conclure sur les Conséquences positives',
            '1. Demander -> 2. Écouter -> 3. Signer -> 4. Corriger',
            '1. Dire -> 2. Écrire -> 3. Sortir -> 4. Clôturer',
            '1. Sanctionner immédiatement sans explication'
          ],
          reponseCorrecteIndex: 0,
          solutionDetaillee: 'Le modèle DESC : Décrire les faits factuels, Exprimer son sentiment, Spécifier le comportement attendu, Conclure sur les bénéfices partagés.',
          baremeDetail: ['Ordre exact des 4 étapes DESC : 3 pts', 'Posture non agressive et factuelle : 3 pts']
        }
      ]
    }
  ],
  chapitres: [
    {
      id: 'lead_ch1',
      titre: '1. Les Théories du Leadership & la Grille de Hersey-Blanchard',
      dureeEstimeeMin: 35,
      description: 'Management vs Leadership (gérer la complexité vs guider le changement), les 4 niveaux de maturité (M1 à M4) et les 4 styles situationnels (S1 Directif, S2 Persuasif, S3 Participatif, S4 Délégatif).',
      pointsCles: [
        'Le management gère la complexité opérationnelle ; le leadership inspire et conduit le changement',
        'Les 4 niveaux de maturité (M1 Débutant enthousiaste, M2 Apprenti désillusionné, M3 Expert hésitant/démotivé, M4 Champion autonome)',
        'Les 4 styles situationnels (S1 Directif, S2 Persuasif/Entraîneur, S3 Participatif/Soutien, S4 Délégatif)',
        'L\'erreur fatale : appliquer un style unique à toute l\'équipe'
      ],
      formuleCle: '\\text{Style Efficace} = f(\\text{Compétence Technique}, \\text{Motivation / Confiance en soi})',
      conseilProfesseur: 'N\'hésitez pas à adapter votre style selon la tâche : un collaborateur peut être M4 sur son cœur de métier technique et M1 sur un nouveau projet de gestion budgétaire.',
      astuceTerrain: 'Face à un M3 (expert démotivé), évitez de lui réexpliquer le "comment faire" (S1). Demandez-lui son avis ("Comment aborderais-tu ce défi ?") pour réengager son autonomie.',
      contenuHtml: `
        <h3>1.1 Matrice du Leadership Situationnel (Hersey & Blanchard)</h3>
        <table class="w-full border-collapse my-4 text-sm border border-slate-300 dark:border-slate-700">
          <thead>
            <tr class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100">
              <th class="border p-2">Maturité</th>
              <th class="border p-2">Profil Collaborateur</th>
              <th class="border p-2">Style Recommandé</th>
              <th class="border p-2">Comportement du Manager</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border p-2 font-bold text-blue-600">M1</td><td class="border p-2">Peu compétent + Très motivé</td><td class="border p-2 font-bold">S1 - Directif</td><td class="border p-2">Donner des ordres clairs, fixer les méthodes et contrôler</td></tr>
            <tr><td class="border p-2 font-bold text-amber-600">M2</td><td class="border p-2">Compétence moyenne + Démotivé</td><td class="border p-2 font-bold">S2 - Persuasif</td><td class="border p-2">Expliquer le pourquoi, encourager et former activement</td></tr>
            <tr><td class="border p-2 font-bold text-indigo-600">M3</td><td class="border p-2">Compétent + Hésitant/Doute</td><td class="border p-2 font-bold">S3 - Participatif</td><td class="border p-2">Écouter, valoriser les idées et co-décider</td></tr>
            <tr><td class="border p-2 font-bold text-emerald-600">M4</td><td class="border p-2">Très compétent + Engagé</td><td class="border p-2 font-bold">S4 - Délégatif</td><td class="border p-2">Fixer les objectifs stratégiques et laisser carte blanche</td></tr>
          </tbody>
        </table>
      `,
      exercices: [
        {
          id: 'lead_ch1_ex1',
          type: TypeQuestion.QCM,
          question: "Face à une nouvelle recrue très enthousiaste mais débutante qui ignore les procédures de l'entreprise (Niveau M1), quel style de management est le plus efficace ?",
          reponsesPossibles: [
            'Style S1 : Directif (instructions claires, précises et contrôle fréquent des livrables)',
            'Style S4 : Délégatif (le laisser totalement seul sans lui parler pendant 6 mois)',
            'Style S3 : Participatif sans directives',
            'L\'envoyer directement diriger la filiale'
          ],
          reponsesCorrectes: [0],
          explication: "Le niveau M1 nécessite un encadrement structurant et directif (S1) pour lui apporter le cadre technique indispensable.",
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        }
      ]
    },
    {
      id: 'lead_ch2',
      titre: '2. L’Intelligence Émotionnelle du Leader (Modèle de Daniel Goleman)',
      dureeEstimeeMin: 40,
      description: 'Les 5 piliers : Conscience de soi (Self-Awareness), Maîtrise de soi (Self-Regulation), Motivation intrinsèque, Empathie et Aptitudes relationnelles (Social Skills).',
      pointsCles: [
        'Le Quotient Émotionnel (QE) est le prédicteur n°1 de la réussite exécutive au-delà du QI technique',
        'Les 5 dimensions de Daniel Goleman : Conscience de soi, Maîtrise de soi, Motivation interne, Empathie, Compétences sociales',
        'Le phénomène de contagion émotionnelle : le calme ou le stress du leader contamine instantanément l\'équipe',
        'L\'écoute active : reformuler les émotions sans jugement avant de proposer une action'
      ],
      formuleCle: '\\text{Leadership Résonnant} = \\text{Maîtrise de soi} + \\text{Empathie Active} + \\text{Clarté Stratégique}',
      conseilProfesseur: 'En situation de crise ou de panique collective, prenez 10 secondes de silence et de respiration ventrale avant de vous exprimer : votre calme physique stabilise toute l\'équipe.',
      astuceTerrain: 'Pratiquez la règle des 3 reformulations en réunion : validez d\'abord ce que l\'interlocuteur a ressenti avant d\'exposer vos propres contre-arguments.',
      contenuHtml: `
        <h3>2.1 Les 5 Piliers de l'Intelligence Émotionnelle</h3>
        <ol class="list-decimal pl-6 space-y-1 text-sm my-3">
          <li><strong>Conscience de soi :</strong> Connaître ses forces, ses faiblesses et ses déclencheurs émotionnels.</li>
          <li><strong>Maîtrise de soi :</strong> Suspendre son jugement, contrôler ses pulsions d'énervement sous stress.</li>
          <li><strong>Motivation intrinsèque :</strong> Passion pour le travail, recherche d'excellence au-delà du statut ou de l'argent.</li>
          <li><strong>Empathie :</strong> Percevoir avec acuité la structure émotionnelle d'autrui et comprendre son point de vue.</li>
          <li><strong>Aptitudes sociales :</strong> Construire des réseaux, gérer les dynamiques politiques et inspirer l'adhésion.</li>
        </ol>
      `,
      exercices: [
        {
          id: 'lead_ch2_ex1',
          type: TypeQuestion.QCM,
          question: "Dans le modèle d'intelligence émotionnelle de Daniel Goleman, quelle compétence permet à un manager de percevoir avec justesse les sentiments et perspectives inexprimés de ses collaborateurs ?",
          reponsesPossibles: [
            'L\'Empathie',
            'L\'Autoritarisme',
            'L\'Indifférence',
            'La rapidité de calcul'
          ],
          reponsesCorrectes: [0],
          explication: "L'empathie est la capacité à se mettre à la place d'autrui pour comprendre ses motivations et ses doutes sans jugement prématuré.",
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        }
      ]
    },
    {
      id: 'lead_ch3',
      titre: '3. Dynamique de Groupe : Le Modèle de Bruce Tuckman',
      dureeEstimeeMin: 40,
      description: 'Les 5 stades de développement d’une équipe : Forming (Constitution / Politesse), Storming (Tension / Conflit des égos), Norming (Normalisation / Règles partagées), Performing (Haute performance collective) et Adjourning (Dissolution / Clôture).',
      pointsCles: [
        'Forming (Constitution) : politesse superficielle, recherche de repères',
        'Storming (Confrontation) : lutte pour le pouvoir et divergences d\'opinions (phase saine et indispensable)',
        'Norming (Normalisation) : établissement de règles du jeu collectives claires et acceptées',
        'Performing (Performance) : synergie maximale, autonomie et excellence d\'exécution',
        'Adjourning (Séparation) : bilan, reconnaissance et célébration des réalisations'
      ],
      formuleCle: '\\text{Cycle Tuckman} : \\text{Forming} \\longrightarrow \\text{Storming} \\longrightarrow \\text{Norming} \\longrightarrow \\text{Performing}',
      conseilProfesseur: 'N\'ayez pas peur de la phase de Storming : chercher à l\'étouffer crée des non-dits toxiques. Encouragez l\'expression constructive des désaccords pour bâtir un Norming solide.',
      astuceTerrain: 'Dès l\'intégration d\'un nouveau membre dans une équipe rodée, le collectif rétrograde temporairement en phase de Storming/Norming : prévoyez un atelier d\'alignement rapide.',
      contenuHtml: `
        <h3>3.1 Évolution de l'Énergie Collective au Travers des 5 Stades</h3>
        <p>Le passage d'un groupe d'individus à une véritable équipe soudée suit une courbe d'apprentissage relationnelle prévisible.</p>
      `,
      exercices: [
        {
          id: 'lead_ch3_ex1',
          type: TypeQuestion.QCM,
          question: "Lorsqu'une nouvelle équipe commence à se confronter sur les méthodes de travail et les rôles de chacun avec des tensions palpables (phase de 'Storming'), que doit faire le manager ?",
          reponsesPossibles: [
            'Accompagner la clarification des règles du jeu et des rôles en restant médiateur, car cette phase est normale pour construire la confiance',
            'Licencier immédiatement toute l\'équipe',
            'Faire semblant que tout va bien sans jamais en parler',
            'Interdire les conversations entre collègues'
          ],
          reponsesCorrectes: [0],
          explication: "Le Storming est un passage obligé d'affirmation ; le rôle du leader est de canaliser les débats pour aboutir à des normes partagées (Norming).",
          points: 5,
          difficulte: NiveauDifficulte.INTERMEDIAIRE
        }
      ]
    },
    {
      id: 'lead_ch4',
      titre: '4. La Sécurité Psychologique : Clé des Équipes Exceptionnelles (Projet Aristote)',
      dureeEstimeeMin: 45,
      description: 'Travaux d’Amy Edmondson (Harvard) et étude Aristote de Google sur 180 équipes : la sécurité psychologique comme facteur n°1 de la performance (droit à l’erreur, prise de risque sans peur du ridicule, parole libérée).',
      pointsCles: [
        'Conclusion du Projet Aristote (Google) : la sécurité psychologique surpasse les compétences individuelles en terme d\'impact d\'équipe',
        'Droit à l\'erreur et culture du "Blameless Post-Mortem" (analyser la défaillance du système plutôt que chercher un coupable)',
        'Vulnérabilité du leader : admettre publiquement "Je ne sais pas" ou "J\'ai fait une erreur"',
        'Répartition équitable du temps de parole lors des rituels d\'équipe'
      ],
      formuleCle: '\\text{Sécurité Psychologique} \\Longrightarrow \\text{Prise de risque intellectuelle} \\Longrightarrow \\text{Innovation & Performance}',
      conseilProfesseur: 'La sécurité psychologique n\'est pas la complaisance : elle permet au contraire d\'avoir des standards d\'exigence très élevés sans générer de climat de terreur ou de dissimulation.',
      astuceTerrain: 'Lorsqu\'un collaborateur signale une anomalie ou une bévue, remerciez-le en premier pour sa transparence ("Merci de nous alerter aussi vite") avant de chercher la solution.',
      contenuHtml: `
        <h3>4.1 Matrice d'Amy Edmondson : Climat d'Équipe vs Exigence</h3>
        <table class="w-full border-collapse my-4 text-sm border border-slate-300 dark:border-slate-700">
          <thead>
            <tr class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100">
              <th class="border p-2">Niveau</th>
              <th class="border p-2">Faible Sécurité Psychologique</th>
              <th class="border p-2">Forte Sécurité Psychologique</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border p-2 font-bold">Haute Exigence</td><td class="border p-2 bg-rose-50 dark:bg-rose-950 text-rose-700 dark:text-rose-300 font-semibold">Zone d'Anxiété & Peur</td><td class="border p-2 bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold">Zone d'Apprentissage & Haute Performance</td></tr>
            <tr><td class="border p-2 font-bold">Faible Exigence</td><td class="border p-2 bg-slate-50 dark:bg-slate-900 text-slate-500">Zone d'Apathie</td><td class="border p-2 bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300">Zone de Confort / Complaisance</td></tr>
          </tbody>
        </table>
      `,
      exercices: [
        {
          id: 'lead_ch4_ex1',
          type: TypeQuestion.QCM,
          question: "Quelle a été la conclusion majeure du Projet Aristote mené par Google pour déterminer ce qui rend une équipe exceptionnellement performante ?",
          reponsesPossibles: [
            'La Sécurité Psychologique (la certitude que personne ne sera humilié en posant une question ou en admettant une erreur) est le prédicteur n°1 de la performance',
            'Avoir les diplômes les plus prestigieux',
            'Travailler 80 heures par semaine sans pause',
            'Avoir des bureaux avec baby-foot'
          ],
          reponsesCorrectes: [0],
          explication: "La sécurité psychologique libère l'audace, la créativité et la détection précoce des problèmes sans crainte de représailles.",
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        }
      ]
    },
    {
      id: 'lead_ch5',
      titre: '5. La Négociation Raisonnée de Harvard (Fisher, Ury & Patton)',
      dureeEstimeeMin: 50,
      description: 'Les 4 principes piliers : 1. Séparer les personnes du problème, 2. Se concentrer sur les intérêts réels (le pourquoi) plutôt que sur les positions figées (le quoi), 3. Imaginer des solutions à bénéfice mutuel (agrandir le gâteau), 4. Utiliser des critères objectifs indépendants (cours du marché, normes).',
      pointsCles: [
        'BATNA / MESORE : Best Alternative To a Negotiated Agreement (votre meilleure option de rechange si la négociation échoue)',
        'ZOPA : Zone d\'Accord Possible (Zone of Possible Agreement)',
        'Distinguer la "Position" (la revendication affichée) des "Intérêts" (les motivations, peurs et besoins sous-jacents)',
        'Utiliser des critères objectifs impartiaux (indices légaux, prix du marché) pour sortir du bras de fer affectif'
      ],
      formuleCle: '\\text{Pouvoir de Négociation} = \\text{Force de votre BATNA / MESORE}',
      conseilProfesseur: 'Avant toute négociation cruciale, passez 80% de votre préparation à consolider votre solution de repli (BATNA) : c\'est elle qui vous donne le pouvoir de dire non sereinement.',
      astuceTerrain: 'Face à une position bloquée, posez toujours la question magique : "Pour quelles raisons précises cette condition est-elle capitale pour vous ?" pour faire émerger l\'intérêt réel.',
      contenuHtml: `
        <h3>5.1 Les 4 Piliers du Modèle de Négociation de Harvard</h3>
        <ol class="list-decimal pl-6 space-y-1 text-sm my-3">
          <li><strong>Séparer les personnes du problème :</strong> Être dur sur les faits, doux et respectueux avec les personnes.</li>
          <li><strong>Se concentrer sur les intérêts, pas sur les positions :</strong> Comprendre le besoin sous-jacent.</li>
          <li><strong>Inventer des options à bénéfice mutuel :</strong> Élargir le champ des variables (délais, garanties, volumes, visibilité).</li>
          <li><strong>Exiger des critères objectifs indépendants :</strong> Se référer à un barème neutre et vérifiable.</li>
        </ol>
      `,
      exercices: [
        {
          id: 'lead_ch5_ex1',
          type: TypeQuestion.QCM,
          question: "Dans la négociation raisonnée de Harvard, pourquoi est-il crucial de négocier sur les 'Intérêts' plutôt que sur les 'Positions' ?",
          reponsesPossibles: [
            'Car derrière des positions opposées et bloquées se cachent souvent des intérêts sous-jacents compatibles permettant de trouver des solutions créatives',
            'Pour faire durer la réunion plus longtemps',
            'Car les positions sont interdites par la loi',
            'Pour embrouiller l\'autre partie'
          ],
          reponsesCorrectes: [0],
          explication: "Les positions figent le débat dans un rapport de force stérile, alors que l'exploration des intérêts réels ouvre la voie à des compromis innovants.",
          points: 5,
          difficulte: NiveauDifficulte.INTERMEDIAIRE
        }
      ]
    },
    {
      id: 'lead_ch6',
      titre: '6. La Communication Non-Violente (CNV) en Milieu Professionnel',
      dureeEstimeeMin: 40,
      description: 'Modèle OSBD de Marshall Rosenberg : Observation factuelle (sans évaluation), Sentiment / Émotion ressentie, Besoin fondamental non nourri, Demande concrète, positive et négociable.',
      pointsCles: [
        'Étape O : Observation factuelle sans adjectif accusateur ni jugement déguisé',
        'Étape S : Expression du Sentiment / Ressenti personnel (assumer la responsabilité de ses émotions)',
        'Étape B : Identification du Besoin professionnel non nourri (besoin de clarté, de fiabilité, de respect des délais)',
        'Étape D : Formulation d\'une Demande d\'action concrète, positive, immédiate et négociable'
      ],
      formuleCle: '\\text{CNV (OSBD)} : \\text{Observation brute} \\longrightarrow \\text{Sentiment} \\longrightarrow \\text{Besoin} \\longrightarrow \\text{Demande concrète}',
      conseilProfesseur: 'Bannissez les mots parasites qui accusent : "toujours", "jamais", "systématiquement". Dites : "Sur les 3 derniers comités, tu es arrivé avec 15 minutes de retard" (fait indiscutable).',
      astuceTerrain: 'Formulez votre demande avec un verbe d\'action positif : demandez ce que vous VOULEZ voir se produire, plutôt que ce que vous voulez que l\'autre cesse de faire.',
      contenuHtml: `
        <h3>6.1 Traduction Pratique d'un Message Agressif en CNV Pro</h3>
        <div class="bg-slate-900 text-slate-100 p-4 rounded-lg my-4 font-mono text-sm overflow-x-auto">
          <pre>❌ Message Toxique : "Tu es bordélique, ton rapport est illisible et en retard comme d'habitude !"

✅ Formulation CNV Pro :
- O (Observation) : "J'ai reçu ton rapport ce matin à 11h au lieu d'hier 17h, et les annexes chiffrées ne sont pas jointes."
- S (Sentiment)   : "Je me sens inquiet et sous tension vis-à-vis du client."
- B (Besoin)      : "J'ai besoin de fiabilité et d'exhaustivité pour préparer la réunion de 14h."
- D (Demande)     : "Es-tu d'accord pour m'envoyer le fichier Excel des annexes d'ici 12h30 ?"</pre>
        </div>
      `,
      exercices: [
        {
          id: 'lead_ch6_ex1',
          type: TypeQuestion.QCM,
          question: "Dans la méthode CNV (OSBD), quelle formulation respecte le principe de l'Observation factuelle sans jugement ?",
          reponsesPossibles: [
            '"Tu es arrivé en réunion à 9h20 alors que le début était fixé à 9h00" (Fait mesurable)',
            '"Tu es toujours en retard, tu ne respectes rien !"',
            '"Tu es fainéant"',
            '"C\'est inadmissible ton comportement"'
          ],
          reponsesCorrectes: [0],
          explication: "Une observation factuelle énonce un fait brut et indiscutable sans adjectif accusateur ni généralisation abusive ('toujours', 'jamais').",
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        }
      ]
    },
    {
      id: 'lead_ch7',
      titre: '7. L’Art du Feedback Constructif : Méthodes DESC & SBI',
      dureeEstimeeMin: 45,
      description: 'Méthode DESC (Décrire, Exprimer, Spécifier, Conclure), méthode SBI du Center for Creative Leadership (Situation, Behavior, Impact), feedback de renforcement positif vs feedback correctif.',
      pointsCles: [
        'Méthode DESC : Décrire les faits, Exprimer les conséquences/ressenti, Spécifier la solution, Conclure sur les bénéfices',
        'Méthode SBI : Situation (quand et où), Comportement (ce qui a été fait/dit), Impact (conséquence directe)',
        'Principe inviolable : "Féliciter chaleureusement en public, recadrer avec bienveillance en tête-à-tête"',
        'Proportion recommandée : au moins 3 à 4 feedbacks positifs de renforcement pour 1 feedback correctif'
      ],
      formuleCle: '\\text{Modèle SBI} : \\text{Situation contextuelle} + \\text{Comportement observable} + \\text{Impact mesurable}',
      conseilProfesseur: 'Délivrez votre feedback au plus près de l\'événement (dans les 24 à 48 heures), mais jamais sous le coup d\'une colère vive à chaud.',
      astuceTerrain: 'Évitez la technique hypocrite du "sandwich" (compliment - reproche - compliment) qui décrédibilise vos éloges. Soyez direct, bienveillant et transparent.',
      contenuHtml: `
        <h3>7.1 Les 4 Étapes Clés du Modèle DESC</h3>
        <ol class="list-decimal pl-6 space-y-1 text-sm my-3">
          <li><strong>D - Décrire :</strong> Poser les faits objectifs sans accusation.</li>
          <li><strong>E - Exprimer :</strong> Partager l'impact émotionnel et professionnel.</li>
          <li><strong>S - Spécifier :</strong> Proposer ou co-construire une solution concrète d'amélioration.</li>
          <li><strong>C - Conclure :</strong> Valoriser les conséquences positives mutuelles pour l'avenir.</li>
        </ol>
      `,
      exercices: [
        {
          id: 'lead_ch7_ex1',
          type: TypeQuestion.QCM,
          question: "Quelle est la règle d'or fondamentale concernant le lieu et le moment pour délivrer un feedback correctif de recadrage à un collaborateur ?",
          reponsesPossibles: [
            'Toujours en tête-à-tête dans un espace confidentiel, en restant factuel et sans humiliation publique',
            'Devant tous ses collègues pendant le déjeuner pour lui faire honte',
            'Par un message public sur les réseaux sociaux',
            'En criant dans le couloir'
          ],
          reponsesCorrectes: [0],
          explication: "Le principe 'Féliciter en public, recadrer en privé' préserve la dignité de la personne et favorise une écoute constructive.",
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        }
      ]
    },
    {
      id: 'lead_ch8',
      titre: '8. Gestion des Conflits : Le Modèle de Thomas-Kilmann (TKI)',
      dureeEstimeeMin: 45,
      description: 'Les 5 modes de résolution de conflit selon l’axe Assertivité vs Coopération : La Compétition (Gagnant-Perdant), L’Évitement (Perdant-Perdant), L’Accommodement (Perdant-Gagnant), Le Compromis (Partage 50/50), La Collaboration (Gagnant-Gagnant total).',
      pointsCles: [
        'Axe Assertivité (défense de ses intérêts) vs Axe Coopération (prise en compte de l\'autre)',
        'Les 5 modes : Compétition (urgence/sécurité), Évitement (sujet futile), Accommodement (préserver la relation), Compromis (urgence moyenne), Collaboration (enjeu stratégique vital)',
        'Sortir du Triangle Dramatique de Karpman (Victime, Persécuteur, Sauveteur) vers le triangle créatif (Créateur, Challenger, Coach)'
      ],
      formuleCle: '\\text{Choix de Posture} = f(\\text{Importance de l\'Enjeu Opérationnel}, \\text{Valeur de la Relation Humaine Futrice})',
      conseilProfesseur: 'En tant que médiateur managérial entre deux membres de votre équipe : ne prenez JAMAIS parti. Faites reformuler à chacun la position et les contraintes de l\'autre.',
      astuceTerrain: 'Refusez de jouer le rôle de "Sauveteur" permanent : renvoyez les collaborateurs à leur responsabilité en leur demandant "Qu\'avez-vous déjà tenté ensemble pour régler cela ?".',
      contenuHtml: `
        <h3>8.1 Grille des 5 Stratégies de Conflit (Thomas-Kilmann)</h3>
        <table class="w-full border-collapse my-4 text-sm border border-slate-300 dark:border-slate-700">
          <thead>
            <tr class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100">
              <th class="border p-2">Style</th>
              <th class="border p-2">Assertivité</th>
              <th class="border p-2">Coopération</th>
              <th class="border p-2">Quand l'utiliser ?</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border p-2 font-bold">Compétition</td><td class="border p-2 text-center">Forte</td><td class="border p-2 text-center">Faible</td><td class="border p-2">Urgence vitale, règles de sécurité strictes</td></tr>
            <tr><td class="border p-2 font-bold">Collaboration</td><td class="border p-2 text-center text-emerald-600 font-bold">Forte</td><td class="border p-2 text-center text-emerald-600 font-bold">Forte</td><td class="border p-2">Enjeux majeurs, recherche de synergie créative</td></tr>
            <tr><td class="border p-2 font-bold">Compromis</td><td class="border p-2 text-center">Moyenne</td><td class="border p-2 text-center">Moyenne</td><td class="border p-2">Temps limité, solution d'étape acceptable</td></tr>
            <tr><td class="border p-2 font-bold">Évitement</td><td class="border p-2 text-center">Faible</td><td class="border p-2 text-center">Faible</td><td class="border p-2">Désaccord mineur sans enjeu opérationnel</td></tr>
            <tr><td class="border p-2 font-bold">Accommodement</td><td class="border p-2 text-center">Faible</td><td class="border p-2 text-center">Forte</td><td class="border p-2">L'autre a raison, restaurer l'harmonie</td></tr>
          </tbody>
        </table>
      `,
      exercices: [
        {
          id: 'lead_ch8_ex1',
          type: TypeQuestion.QCM,
          question: "Dans le modèle des conflits de Thomas-Kilmann, quelle posture managériale combine à la fois une FORTE assertivité (défendre ses objectifs) et une FORTE coopération (respecter les objectifs d'autrui) ?",
          reponsesPossibles: [
            'La Collaboration (recherche active d\'une solution 100% gagnant-gagnant)',
            'L\'Évitement (fuir le problème)',
            'L\'Accommodement (s\'écraser et céder totalement)',
            'La Compétition agressive'
          ],
          reponsesCorrectes: [0],
          explication: "La collaboration requiert du temps et de l'écoute pour co-construire une solution innovante qui comble pleinement les attentes des deux parties.",
          points: 5,
          difficulte: NiveauDifficulte.INTERMEDIAIRE
        }
      ]
    },
    {
      id: 'lead_ch9',
      titre: '9. Délégation Efficace & Accompagnement de l’Autonomie',
      dureeEstimeeMin: 40,
      description: 'Les 6 niveaux de délégation de Jurgen Appelo (Tell, Sell, Consult, Agree, Advise, Inquire, Delegate), pièges de la micro-gestion (micromanagement) et de la fausse délégation (déléguer la tâche sans l’autorité ni les moyens).',
      pointsCles: [
        'Déléguer la responsabilité, les moyens budgétaires et le pouvoir de décision (pas seulement l\'exécution mécanique)',
        'Les 7 niveaux de la Delegation Board de Jurgen Appelo (Management 3.0)',
        'Le fléau du micromanagement : étouffement de l\'initiative et perte de valeur managériale',
        'Contrat de délégation clair : définir le résultat attendu (le QUOI) et laisser l\'autonomie sur la méthode (le COMMENT)'
      ],
      formuleCle: '\\text{Délégation Réussie} = \\text{Objectif SMART} + \\text{Autorité Déléguée} + \\text{Jalons de Contrôle Prévus}',
      conseilProfesseur: 'Ne pratiquez pas la "délégation poubelle" (donner uniquement les tâches ingrates sans valeur). Déléguez des projets porteurs qui permettent au collaborateur d\'acquérir de nouvelles compétences.',
      astuceTerrain: 'Fixez dès le début de la mission les dates des rendez-vous d\'étape (ex: revue à 30%, 60% et 90%) pour éviter le sentiment d\'espionnage impromptu.',
      contenuHtml: `
        <h3>9.1 Les 7 Niveaux de Délégation (Management 3.0)</h3>
        <ol class="list-decimal pl-6 space-y-1 text-sm my-3">
          <li><strong>Tell (Dire) :</strong> Le manager décide et informe.</li>
          <li><strong>Sell (Vendre) :</strong> Le manager décide et explique ses raisons.</li>
          <li><strong>Consult (Consulter) :</strong> Le manager prend des avis avant de trancher.</li>
          <li><strong>Agree (Convenir) :</strong> Décision prise ensemble par consensus.</li>
          <li><strong>Advise (Conseiller) :</strong> Le collaborateur décide, le manager donne son avis s'il est sollicité.</li>
          <li><strong>Inquire (S'informer) :</strong> Le collaborateur décide et informe le manager après coup.</li>
          <li><strong>Delegate (Déléguer pleinement) :</strong> Autonomie totale du collaborateur.</li>
        </ol>
      `,
      exercices: [
        {
          id: 'lead_ch9_ex1',
          type: TypeQuestion.QCM,
          question: "Quel est l'écueil majeur du 'Micromanagement' exercé par certains managers sur leurs équipes ?",
          reponsesPossibles: [
            'Il détruit l\'initiative, déresponsabilise les collaborateurs, étouffe la motivation et épuise le manager dans des détails futiles',
            'Il rend les équipes trop créatives',
            'Il divise les coûts par deux',
            'Il n\'a aucun inconvénient'
          ],
          reponsesCorrectes: [0],
          explication: "Le contrôle permanent et tatillon bride le potentiel humain, crée de la frustration et induit un désengagement massif.",
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        }
      ]
    },
    {
      id: 'lead_ch10',
      titre: '10. Gestion du Temps, Matrice d’Eisenhower & Méthode Pomodoro',
      dureeEstimeeMin: 35,
      description: 'Distinction cruciale entre Urgent et Important (Matrice d’Eisenhower : Q1 Faire, Q2 Planifier / Zone d’efficacité, Q3 Déléguer, Q4 Éliminer), loi de Parkinson (le travail s’étale pour occuper le temps disponible), méthode Pomodoro et gestion de l’attention.',
      pointsCles: [
        'Quadrant 1 (Urgent & Important) : Crises, incendies opérationnels -> Faire immédiatement',
        'Quadrant 2 (Non Urgent mais Important) : Stratégie, formation, prévention, relations -> Zone de haute valeur à sanctuariser',
        'Quadrant 3 (Urgent mais Non Important) : Interruptions, demandes des autres -> Déléguer',
        'Quadrant 4 (Ni Urgent ni Important) : Distractions, réunions inutiles -> Éliminer impitoyablement',
        'Lois d\'organisation du travail : Loi de Parkinson (le travail s\'étale selon le temps imparti) et Loi d\'Illich (au-delà d\'un seuil, la productivité décroît)'
      ],
      formuleCle: '\\text{Sanctuarisation} : \\text{Bloquer au moins 40\\% de son agenda dans le Quadrant 2 (Important / Non-Urgent)}',
      conseilProfesseur: 'Pratiquez le "Time Blocking" : bloquez des plages de 90 minutes de travail concentré sans boîte mail ni notifications pour faire avancer vos chantiers de fond.',
      astuceTerrain: 'Apprenez à dire non avec grâce : "J\'aimerais beaucoup t\'aider, mais compte tenu de mes priorités sur le projet X aujourd\'hui, je ne pourrai pas m\'en occuper avant jeudi".',
      contenuHtml: `
        <h3>10.1 La Matrice d'Eisenhower Appliquée au Quotidien</h3>
        <table class="w-full border-collapse my-4 text-sm border border-slate-300 dark:border-slate-700">
          <thead>
            <tr class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100">
              <th class="border p-2">Priorité</th>
              <th class="border p-2">URGENT</th>
              <th class="border p-2">NON URGENT</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border p-2 font-bold">IMPORTANT</td><td class="border p-2 bg-rose-50 dark:bg-rose-950 font-bold text-rose-700 dark:text-rose-300">Q1 : FAIRE (Crises & Deadlines)</td><td class="border p-2 bg-emerald-50 dark:bg-emerald-950 font-bold text-emerald-700 dark:text-emerald-300">Q2 : PLANIFIER (Stratégie & Qualité)</td></tr>
            <tr><td class="border p-2 font-bold">NON IMPORTANT</td><td class="border p-2 bg-amber-50 dark:bg-amber-950 font-bold text-amber-700 dark:text-amber-300">Q3 : DÉLÉGUER (Interruptions)</td><td class="border p-2 bg-slate-50 dark:bg-slate-900 font-bold text-slate-500">Q4 : ÉLIMINER (Futilités)</td></tr>
          </tbody>
        </table>
      `,
      exercices: [
        {
          id: 'lead_ch10_ex1',
          type: TypeQuestion.QCM,
          question: "Dans la matrice d'Eisenhower, dans quel quadrant un leader efficace doit-il concentrer le maximum de son énergie pour créer une vraie valeur pérenne et éviter les crises permanentes ?",
          reponsesPossibles: [
            'Quadrant 2 : Important mais NON-Urgent (stratégie, prévention, formation, innovation)',
            'Quadrant 4 : Non-Important et Non-Urgent (réseaux sociaux, distractions)',
            'Quadrant 3 : Urgent mais Non-Important (interruptions futiles des autres)',
            'Dans aucun quadrant'
          ],
          reponsesCorrectes: [0],
          explication: "Investir proactivement dans le Quadrant 2 évite que les sujets importants ne se transforment plus tard en urgences critiques anxiogènes (Quadrant 1).",
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        }
      ]
    },
    {
      id: 'lead_ch11',
      titre: '11. Conduite des Entretiens Annuels d’Évaluation & Entretiens Professionnels',
      dureeEstimeeMin: 45,
      description: 'Différence légale entre Entretien Annuel d’Évaluation (performance, objectifs de l’année écoulée et future) et Entretien Professionnel obligatoire tous les 2 ans (Code du travail : compétences, formation, évolution professionnelle), grille de préparation bilatérale.',
      pointsCles: [
        'Entretien Annuel d\'Évaluation (EAE) : bilan de performance opérationnelle sur les objectifs de l\'année et fixation des nouveaux objectifs SMART',
        'Entretien Professionnel (Art. L6315-1 Code du travail) : obligatoire tous les 2 ans, centré exclusivement sur les compétences, le projet professionnel et la formation',
        'État des lieux récapitulatif à 6 ans : vérification des actions de formation et de progression salariale/professionnelle',
        'Grille d\'auto-évaluation préalable remplie par le collaborateur avant l\'entretien'
      ],
      formuleCle: '\\text{EAE (Performance Opérationnelle N-1/N+1)} \\quad \\neq \\quad \\text{Entretien Professionnel (Carrière & Formation)}',
      conseilProfesseur: 'L\'entretien annuel ne doit comporter AUCUNE surprise : si un point faible est évoqué pour la première fois lors de cette session, c\'est que le manager a échoué dans son devoir de feedback régulier.',
      astuceTerrain: 'Consacrez au moins 70% du temps de l\'entretien à écouter le collaborateur s\'exprimer sur ses réussites, ses difficultés et ses aspirations.',
      contenuHtml: `
        <h3>11.1 Comparatif Réglementaire et Opérationnel des Entretiens RH</h3>
        <table class="w-full border-collapse my-4 text-sm border border-slate-300 dark:border-slate-700">
          <thead>
            <tr class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100">
              <th class="border p-2">Critère</th>
              <th class="border p-2">Entretien Annuel d'Évaluation (EAE)</th>
              <th class="border p-2">Entretien Professionnel (Légal)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border p-2 font-bold">Caractère Légal</td><td class="border p-2">Facultatif (sauf accord d'entreprise)</td><td class="border p-2 font-bold text-rose-600">Obligation Légale (tous les 2 ans)</td></tr>
            <tr><td class="border p-2 font-bold">Objet Principal</td><td class="border p-2">Mesure des résultats & atteinte des objectifs</td><td class="border p-2">Évolution de carrière, qualifications, CPF</td></tr>
            <tr><td class="border p-2 font-bold">Échéance Clé</td><td class="border p-2">Annuelle</td><td class="border p-2">Tous les 2 ans + Bilan consolidé à 6 ans</td></tr>
          </tbody>
        </table>
      `,
      exercices: [
        {
          id: 'lead_ch11_ex1',
          type: TypeQuestion.QCM,
          question: "En droit du travail français, quelle est la distinction fondamentale entre l'Entretien Annuel d'Évaluation et l'Entretien Professionnel biennal ?",
          reponsesPossibles: [
            'L\'Entretien Annuel évalue la performance sur les objectifs du poste, tandis que l\'Entretien Professionnel se concentre obligatoirement sur l\'évolution de carrière, les compétences et les projets de formation du salarié',
            'L\'un se fait le matin et l\'autre l\'après-midi',
            'L\'Entretien Professionnel sert uniquement à licencier',
            'Il n\'y a aucune différence'
          ],
          reponsesCorrectes: [0],
          explication: "L'Entretien Professionnel (Art. L6315-1) est une obligation légale dédiée exclusivement à la projection d'avenir et au développement des compétences du salarié.",
          points: 5,
          difficulte: NiveauDifficulte.INTERMEDIAIRE
        }
      ]
    },
    {
      id: 'lead_ch12',
      titre: '12. Prise de Décision Éthique & Biais Cognitifs du Leader',
      dureeEstimeeMin: 45,
      description: 'Système 1 (intuitif/rapide) vs Système 2 (réfléchi/analytique) de Daniel Kahneman, biais d’ancrage, biais de confirmation, effet de groupe (Groupthink de Janis), escalade d’engagement et techniques de l’Avocat du Diable.',
      pointsCles: [
        'Système 1 (rapide, automatique, émotionnel) vs Système 2 (lent, analytique, logique) de Daniel Kahneman',
        'Biais de confirmation (rechercher uniquement ce qui valide notre hypothèse préférée)',
        'Pensée de groupe (Groupthink) : risque mortel de conformisme silencieux en comité de direction',
        'Méthode du Pre-Mortem : imaginer à l\'avance que le projet a lamentablement échoué pour identifier ses failles cachées',
        'Rôle formel de l\'Avocat du Diable pour challenger les consensus apparents'
      ],
      formuleCle: '\\text{Pre-Mortem} : \\text{"Nous sommes dans 12 mois, le projet est un désastre total. Que s\'est-il passé ?" (Identifier les risques invisibles)}',
      conseilProfesseur: 'Dans un comité de direction, le directeur général doit toujours exprimer son avis personnel en DERNIER, pour éviter que les membres de l\'équipe ne s\'alignent servilement sur sa position par courtoisie ou prudence.',
      astuceTerrain: 'Face à un projet où des millions ont déjà été investis sans résultat, méfiez-vous du biais des coûts irrécupérables (Sunk Cost Fallacy) : sachez arrêter les frais avec lucidité.',
      contenuHtml: `
        <h3>12.1 Les 5 Biais Cognitifs Majeurs Menant aux Erreurs Stratégiques</h3>
        <ol class="list-decimal pl-6 space-y-1 text-sm my-3">
          <li><strong>Biais de Confirmation :</strong> Tendance à ne retenir que les données confortant nos convictions.</li>
          <li><strong>Biais d'Ancrage :</strong> Se focaliser de manière excessive sur la première information chiffrée reçue.</li>
          <li><strong>Groupthink (Pensée de Groupe) :</strong> Sacrifice de l'esprit critique au profit de la cohésion de groupe.</li>
          <li><strong>Biais de Surconfiance :</strong> Sous-estimation systématique des délais et des difficultés techniques.</li>
          <li><strong>Escalade d'Engagement :</strong> Persévérer dans une mauvaise décision par orgueil des investissements passés.</li>
        </ol>
      `,
      exercices: [
        {
          id: 'lead_ch12_ex1',
          type: TypeQuestion.QCM,
          question: "Qu'appelle-t-on le biais de 'Pensée de Groupe' (Groupthink) au sein d'un comité de direction ?",
          reponsesPossibles: [
            'La tendance des membres à s\'aligner artificiellement sur un consensus mou pour éviter le désaccord, étouffant ainsi tout esprit critique et menant à des décisions catastrophiques',
            'Une méthode d\'apprentissage collectif',
            'Un logiciel de visioconférence',
            'Une prime d\'équipe'
          ],
          reponsesCorrectes: [0],
          explication: "Le conformisme de groupe anesthésie la vigilance et empêche d'examiner les failles évidentes d'un plan.",
          points: 5,
          difficulte: NiveauDifficulte.INTERMEDIAIRE
        }
      ]
    },
    {
      id: 'lead_ch13',
      titre: '13. Leadership Inclusif, Diversité & Équité en Entreprise',
      dureeEstimeeMin: 40,
      description: 'Lutte contre les stéréotypes et biais inconscients de recrutement / promotion, management intergénérationnel (Baby-boomers, X, Y, Z), inclusion des personnes en situation de handicap et égalité professionnelle femmes-hommes (Index Egapro).',
      pointsCles: [
        'La diversité cognitive des équipes augmente de 20 à 30% la pertinence des décisions stratégiques',
        'Sensibilisation aux biais inconscients de recrutement (effet de halo, biais de similarité)',
        'Management intergénérationnel : valoriser la mémoire technique des seniors et l\'agilité numérique des juniors',
        'Index Egapro (égalité femmes-hommes) et obligation légale d\'emploi des travailleurs handicapés (OETH à 6%)',
        'Pratiques de réunion inclusives : Brainwriting écrit pour permettre aux profils introvertis de contribuer équitablement'
      ],
      formuleCle: '\\text{Performance Durable} = \\text{Diversité des Profils} \\times \\text{Culture Inclusive Active}',
      conseilProfesseur: 'L\'inclusivité n\'est pas qu\'une question morale ou légale : c\'est un levier majeur de rétention des talents et d\'attractivité de votre marque employeur.',
      astuceTerrain: 'Pour les recrutements et promotions : utilisez des grilles d\'évaluation standardisées avec des critères de compétences purement factuels pour neutraliser le réflexe de cloner son propre profil.',
      contenuHtml: `
        <h3>13.1 Les Leviers Pratiques du Management Inclusif</h3>
        <p>Créer un environnement où chacun se sent légitime, valorisé et en pleine possession de ses moyens intellectuels.</p>
      `,
      exercices: [
        {
          id: 'lead_ch13_ex1',
          type: TypeQuestion.QCM,
          question: "Comment un leader inclusif peut-il s'assurer que les collaborateurs plus introvertis participent pleinement aux sessions d'idéation et de stratégie ?",
          reponsesPossibles: [
            'En combinant des temps de réflexion écrite individuelle (Brainwriting) avant les débats oraux et en distribuant la parole de façon équitable',
            'En les forçant à chanter sur scène',
            'En ne parlant qu\'avec les personnes les plus bruyantes',
            'En ignorant leurs idées'
          ],
          reponsesCorrectes: [0],
          explication: "Permettre un temps de formalisation par écrit égalise les chances d'expression face aux personnalités extraverties qui monopolisent la parole.",
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        }
      ]
    },
    {
      id: 'lead_ch14',
      titre: '14. Management Hybride & Animation d’Équipes à Distance',
      dureeEstimeeMin: 40,
      description: 'Télétravail, communication asynchrone (documentation écrite structurée vs réunions synchrones), rituels d’équipe virtuels, lutte contre l’isolement et le surmenage numérique, management par la confiance et les livrables plutôt que le présentéisme.',
      pointsCles: [
        'Culture de l\'écrit et communication asynchrone : limiter la "réunionite" en visio permanente',
        'Remplacer le présentéisme physique par la mesure concrète des résultats et livrables finaux',
        'Sanctuarisation du droit à la déconnexion en dehors des horaires de travail',
        'Rituels de cohésion hybrides : cafés virtuels informels, journées présentielles dédiées à la créativité et aux ateliers d\'équipe'
      ],
      formuleCle: '\\text{Management Hybride} = \\text{Confiance a priori} + \\text{Clarté des Livrables} + \\text{Autonomie Temporelle}',
      conseilProfesseur: 'N\'installez jamais de logiciels espions (trackers de frappes ou de mouvements de souris) : ils détruisent irrémédiablement la confiance et favorisent un désengagement cynique des meilleurs talents.',
      astuceTerrain: 'Établissez une charte d\'équipe explicite : précisez les canaux d\'urgence (téléphone pour le critique, messagerie instantanée sous 2h, email sous 24h).',
      contenuHtml: `
        <h3>14.1 Matrice de Communication en Environnement Hybride</h3>
        <table class="w-full border-collapse my-4 text-sm border border-slate-300 dark:border-slate-700">
          <thead>
            <tr class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100">
              <th class="border p-2">Canal</th>
              <th class="border p-2">Mode</th>
              <th class="border p-2">Usage Recommandé</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border p-2 font-bold">Documentation Wiki (Notion, Confluence)</td><td class="border p-2">Asynchrone</td><td class="border p-2">Process, spécifications, décisions pérennes</td></tr>
            <tr><td class="border p-2 font-bold">Messagerie Instantanée (Slack, Teams)</td><td class="border p-2">Semi-synchrone</td><td class="border p-2">Questions rapides, synchronisation de journée</td></tr>
            <tr><td class="border p-2 font-bold">Visio / Réunion Présentielle</td><td class="border p-2">Synchrone</td><td class="border p-2">Brainstorming complexe, arbitrage, rituels sociaux</td></tr>
          </tbody>
        </table>
      `,
      exercices: [
        {
          id: 'lead_ch14_ex1',
          type: TypeQuestion.QCM,
          question: "Sur quel critère fondamental un manager doit-il évaluer la contribution d'un collaborateur travaillant en télétravail hybride ?",
          reponsesPossibles: [
            'Sur l\'atteinte des objectifs et la qualité concrète des livrables produits (management par les résultats)',
            'Sur le nombre de clics de souris par minute',
            'Sur l\'heure exacte de connexion le matin',
            'Sur la couleur de son bureau à la maison'
          ],
          reponsesCorrectes: [0],
          explication: "Le management moderne à distance s'affranchit du présentéisme visuel pour se focaliser sur la valeur ajoutée et les résultats concrets.",
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        }
      ]
    },
    {
      id: 'lead_ch15',
      titre: '15. Leadership Inspirant, Vision Stratégique & Storytelling',
      dureeEstimeeMin: 45,
      description: 'Le Cercle d’Or de Simon Sinek (Commencer par le POURQUOI / Golden Circle : Why -> How -> What), donner du sens à la mission commune, structurer un pitch inspirant avec le voyage du héros et incarner les valeurs au quotidien.',
      pointsCles: [
        'Le concept du Cercle d\'Or (Simon Sinek) : Pourquoi (Raison d\'être / Sens) -> Comment (Valeurs et méthodes) -> Quoi (Produits et services)',
        'Le pouvoir du Storytelling managérial : structurer ses interventions autour de la quête, des obstacles surmontés et de la victoire collective',
        'Exemplarité du leader (Walk the Talk) : les actes pèsent mille fois plus que les discours',
        'Donner du sens : relier chaque tâche technique individuelle à l\'impact positif sur la vie des clients finaux'
      ],
      formuleCle: '\\text{Inspiration Collective} : \\text{Start with WHY} \\longrightarrow \\text{HOW} \\longrightarrow \\text{WHAT}',
      conseilProfesseur: 'Pour motiver durablement vos équipes : rappelez régulièrement l\'impact humain concret de leur travail. Une équipe qui comprend "Pourquoi" elle se bat trouvera toujours "Comment" réussir.',
      astuceTerrain: 'Dans vos présentations stratégiques, remplacez les listes à puces ennuyeuses par une histoire réelle de client dont le quotidien a été transformé grâce à votre solution.',
      contenuHtml: `
        <h3>15.1 Le Cercle d'Or de Simon Sinek</h3>
        <div class="bg-slate-900 text-slate-100 p-4 rounded-lg my-4 font-mono text-sm overflow-x-auto">
          <pre>1. WHY (Le Pourquoi / Raison d'être) :
   - Quelle est notre cause ? Pourquoi existons-nous ? Pourquoi les gens devraient-ils s'en soucier ?
   ===> Touche le cerveau limbique (Émotions, loyauté, confiance)

2. HOW (Le Comment / Les Principes d'action) :
   - Quelles sont nos valeurs distinctives et nos méthodes d'excellence ?

3. WHAT (Le Quoi / Le Résultat) :
   - Quels produits, services ou livrables concrets fabriquons-nous ?
   ===> Touche le néocortex (Logique, analyse rationnelle)</pre>
        </div>
      `,
      exercices: [
        {
          id: 'lead_ch15_ex1',
          type: TypeQuestion.QCM,
          question: "Dans le concept du 'Golden Circle' de Simon Sinek, par quelle question essentielle un leader inspirant commence-t-il toujours son discours pour mobiliser profondément les équipes ?",
          reponsesPossibles: [
            'Le "POURQUOI" (Le Why : la raison d\'être, le sens profond et les convictions qui animent l\'action)',
            'Le "QUOI" (Le catalogue de produits)',
            'Le "COMBIEN" (Le prix en euros)',
            'La météo du jour'
          ],
          reponsesCorrectes: [0],
          explication: "Commencer par le 'Pourquoi' s'adresse au cerveau limbique (siège des émotions et des décisions), créant un attachement et une motivation intrinsèque durable.",
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        }
      ]
    }
  ]
};
