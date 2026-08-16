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
      pointsCles: ['Il n\'existe pas de "bon" style unique, le leadership est contextuel', 'Adapter son degré d\'autonomie et de soutien relationnel', 'Accompagner la montée en compétence du collaborateur'],
      formuleCle: 'Maturité = Compétence technique × Motivation / Engagement',
      contenuHtml: `<p>Modèle universel pour adapter sa posture de manager selon les besoins spécifiques de chaque individu.</p>`,
      exercices: [{
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
      }]
    },
    {
      id: 'lead_ch2',
      titre: '2. L’Intelligence Émotionnelle du Leader (Modèle de Daniel Goleman)',
      dureeEstimeeMin: 40,
      description: 'Les 5 piliers : Conscience de soi (Self-Awareness), Maîtrise de soi (Self-Regulation), Motivation intrinsèque, Empathie et Aptitudes relationnelles (Social Skills).',
      pointsCles: ['Le quotient émotionnel (QE) prédit mieux la réussite d\'un dirigeant que le QI technique', 'Reconnaître et canaliser ses propres déclencheurs émotionnels', 'Écoute active et résonance émotionnelle'],
      formuleCle: 'Leadership résonnant : propager un climat d\'optimisme et de clarté',
      contenuHtml: `<p>Développement de l'intelligence relationnelle et de la maîtrise émotionnelle du manager.</p>`,
      exercices: [{
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
      }]
    },
    {
      id: 'lead_ch3',
      titre: '3. Dynamique de Groupe : Le Modèle de Bruce Tuckman',
      dureeEstimeeMin: 40,
      description: 'Les 5 stades de développement d’une équipe : Forming (Constitution / Politesse), Storming (Tension / Conflit des égos), Norming (Normalisation / Règles partagées), Performing (Haute performance collective) et Adjourning (Dissolution / Clôture).',
      pointsCles: ['La phase de Storming est inévitable et saine pour forger la cohésion réelle', 'Rôle du leader pour aider l\'équipe à traverser le Storming sans casser les liens', 'Instauration d\'un cadre de fonctionnement explicite'],
      formuleCle: 'Tuckman : Forming -> Storming -> Norming -> Performing',
      contenuHtml: `<p>Compréhension des cycles de vie des collectifs de travail et pilotage de la cohésion.</p>`,
      exercices: [{
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
      }]
    },
    {
      id: 'lead_ch4',
      titre: '4. La Sécurité Psychologique : Clé des Équipes Exceptionnelles (Projet Aristote)',
      dureeEstimeeMin: 45,
      description: 'Travaux d’Amy Edmondson (Harvard) et étude Aristote de Google sur 180 équipes : la sécurité psychologique comme facteur n°1 de la performance (droit à l’erreur, prise de risque sans peur du ridicule, parole libérée).',
      pointsCles: ['Faire de l\'erreur une source d\'apprentissage collectif (Blameless Post-Mortem)', 'Encourager la contradiction constructive', 'Vulnérabilité assumée du leader'],
      formuleCle: 'Sécurité psychologique : "Chacun peut s\'exprimer sans craindre d\'être jugé ou humilié"',
      contenuHtml: `<p>Création d'un climat de confiance propice à l'innovation radicale et à l'excellence collective.</p>`,
      exercices: [{
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
      }]
    },
    {
      id: 'lead_ch5',
      titre: '5. La Négociation Raisonnée de Harvard (Fisher, Ury & Patton)',
      dureeEstimeeMin: 50,
      description: 'Les 4 principes piliers : 1. Séparer les personnes du problème, 2. Se concentrer sur les intérêts réels (le pourquoi) plutôt que sur les positions figées (le quoi), 3. Imaginer des solutions à bénéfice mutuel (agrandir le gâteau), 4. Utiliser des critères objectifs indépendants (cours du marché, normes).',
      pointsCles: ['Calcul et renforcement de sa BATNA (MESORE) avant la négociation', 'Zone d\'Accord Possible (ZOPA)', 'Éviter les marchandages de position destructeurs'],
      formuleCle: 'ZOPA : Espace où les prétentions de l\'acheteur et du vendeur se chevauchent',
      contenuHtml: `<p>Méthodologie mondialement reconnue pour parvenir à des accords gagnant-gagnant durables.</p>`,
      exercices: [{
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
      }]
    },
    {
      id: 'lead_ch6',
      titre: '6. La Communication Non-Violente (CNV) en Milieu Professionnel',
      dureeEstimeeMin: 40,
      description: 'Modèle OSBD de Marshall Rosenberg : Observation factuelle (sans évaluation), Sentiment / Émotion ressentie, Besoin fondamental non nourri, Demande concrète, positive et négociable.',
      pointsCles: ['Désarmer l\'agressivité sans soumission ni passivité', 'Remplacer le "Tu qui tue" par l\'affirmation du "Je"', 'Formuler une demande positive d\'action'],
      formuleCle: 'OSBD : Observation -> Sentiment -> Besoin -> Demande',
      contenuHtml: `<p>Technique d'expression authentique et bienveillante pour apaiser les relations tendues.</p>`,
      exercices: [{
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
      }]
    },
    {
      id: 'lead_ch7',
      titre: '7. L’Art du Feedback Constructif : Méthodes DESC & SBI',
      dureeEstimeeMin: 45,
      description: 'Méthode DESC (Décrire, Exprimer, Spécifier, Conclure), méthode SBI du Center for Creative Leadership (Situation, Behavior, Impact), feedback de renforcement positif vs feedback correctif.',
      pointsCles: ['Donner le feedback à chaud mais à froid émotionnellement', 'Parler en tête-à-tête (Féliciter en public, recadrer en privé)', 'Se concentrer sur le comportement modifiable, jamais sur la personnalité'],
      formuleCle: 'SBI : Situation précise -> Comportement observable -> Impact concret sur le projet',
      contenuHtml: `<p>Outil quotidien du manager pour faire progresser ses collaborateurs dans le respect mutuel.</p>`,
      exercices: [{
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
      }]
    },
    {
      id: 'lead_ch8',
      titre: '8. Gestion des Conflits : Le Modèle de Thomas-Kilmann (TKI)',
      dureeEstimeeMin: 45,
      description: 'Les 5 modes de résolution de conflit selon l’axe Assertivité vs Coopération : La Compétition (Gagnant-Perdant), L’Évitement (Perdant-Perdant), L’Accommodement (Perdant-Gagnant), Le Compromis (Partage 50/50), La Collaboration (Gagnant-Gagnant total).',
      pointsCles: ['Choisir la stratégie selon l\'enjeu et la valeur de la relation future', 'Médiation managériale neutre entre deux collègues', 'Sortir du triangle dramatique de Karpman (Victime - Bourreau - Sauveur)'],
      formuleCle: 'Grille Thomas-Kilmann : Savoir utiliser le bon mode de gestion selon l\'enjeu',
      contenuHtml: `<p>Diagnostic des postures conflictuelles et désamorçage méthodique des crises relationnelles.</p>`,
      exercices: [{
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
      }]
    },
    {
      id: 'lead_ch9',
      titre: '9. Délégation Efficace & Accompagnement de l’Autonomie',
      dureeEstimeeMin: 40,
      description: 'Les 6 niveaux de délégation de Jurgen Appelo (Tell, Sell, Consult, Agree, Advise, Inquire, Delegate), pièges de la micro-gestion (micromanagement) et de la fausse délégation (déléguer la tâche sans l’autorité ni les moyens).',
      pointsCles: ['Déléguer l\'objectif et le résultat attendu, laisser la liberté des moyens', 'Définir des points de contrôle intermédiaires programmés', 'Célébrer la réussite du collaborateur'],
      formuleCle: 'Déléguer = Responsabilité + Pouvoir de décision + Moyens alloués',
      contenuHtml: `<p>Processus d'autonomisation et développement des talents par la délégation maîtrisée.</p>`,
      exercices: [{
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
      }]
    },
    {
      id: 'lead_ch10',
      titre: '10. Gestion du Temps, Matrice d’Eisenhower & Méthode Pomodoro',
      dureeEstimeeMin: 35,
      description: 'Distinction cruciale entre Urgent et Important (Matrice d’Eisenhower : Q1 Faire, Q2 Planifier / Zone d’efficacité, Q3 Déléguer, Q4 Éliminer), loi de Parkinson (le travail s’étale pour occuper le temps disponible), méthode Pomodoro et gestion de l’attention.',
      pointsCles: ['Passer 60% de son temps dans le quadrant 2 (Important mais Non-Urgent : stratégie, prévention, formation)', 'Protéger ses plages de travail profond (Deep Work)', 'Savoir dire non avec diplomatie'],
      formuleCle: 'Matrice Eisenhower : Important vs Urgent',
      contenuHtml: `<p>Maîtrise de l'agenda exécutif et élimination des voleurs de temps.</p>`,
      exercices: [{
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
      }]
    },
    {
      id: 'lead_ch11',
      titre: '11. Conduite des Entretiens Annuels d’Évaluation & Entretiens Professionnels',
      dureeEstimeeMin: 45,
      description: 'Différence légale entre Entretien Annuel d’Évaluation (performance, objectifs de l’année écoulée et future) et Entretien Professionnel obligatoire tous les 2 ans (Code du travail : compétences, formation, évolution professionnelle), grille de préparation bilatérale.',
      pointsCles: ['Pas de surprise lors de l\'entretien annuel si le feedback régulier a été fait toute l\'année', 'Bilan à 6 ans obligatoire de l\'état des lieux professionnel', 'Fixation d\'objectifs SMART motivants'],
      formuleCle: 'Entretien Annuel = Bilan performance | Entretien Professionnel = Évolution de carrière & Formation',
      contenuHtml: `<p>Formalisation de la gestion des carrières et alignement des compétences sur la stratégie d'entreprise.</p>`,
      exercices: [{
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
      }]
    },
    {
      id: 'lead_ch12',
      titre: '12. Prise de Décision Éthique & Biais Cognitifs du Leader',
      dureeEstimeeMin: 45,
      description: 'Système 1 (intuitif/rapide) vs Système 2 (réfléchi/analytique) de Daniel Kahneman, biais d’ancrage, biais de confirmation, effet de groupe (Groupthink de Janis), escalade d’engagement et techniques de l’Avocat du Diable.',
      pointsCles: ['Désigner un contradicteur officiel dans les comités stratégiques', 'Méthode des scénarios du pire (Pre-Mortem)', 'Dépasser le réflexe de confirmation'],
      formuleCle: 'Pensée critique : Tester activement l\'hypothèse inverse de sa conviction initiale',
      contenuHtml: `<p>Sécurisation des prises de décision stratégiques face aux illusions cognitives.</p>`,
      exercices: [{
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
      }]
    },
    {
      id: 'lead_ch13',
      titre: '13. Leadership Inclusif, Diversité & Équité en Entreprise',
      dureeEstimeeMin: 40,
      description: 'Lutte contre les stéréotypes et biais inconscients de recrutement / promotion, management intergénérationnel (Baby-boomers, X, Y, Z), inclusion des personnes en situation de handicap et égalité professionnelle femmes-hommes (Index Egapro).',
      pointsCles: ['La diversité cognitive accroît la performance financière et la capacité d\'innovation', 'Posture d\'écoute inclusive : donner un temps de parole égal à tous les profils (introvertis vs extravertis)', 'Mesure des écarts de rémunération'],
      formuleCle: 'Inclusion = Sentiment d\'appartenance + Liberté d\'être soi-même',
      contenuHtml: `<p>Valorisation de la pluralité des talents et pratiques managériales équitables.</p>`,
      exercices: [{
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
      }]
    },
    {
      id: 'lead_ch14',
      titre: '14. Management Hybride & Animation d’Équipes à Distance',
      dureeEstimeeMin: 40,
      description: 'Télétravail, communication asynchrone (documentation écrite structurée vs réunions synchrones), rituels d’équipe virtuels, lutte contre l’isolement et le surmenage numérique, management par la confiance et les livrables plutôt que le présentéisme.',
      pointsCles: ['Bannir la surveillance intrusive (Spyware) qui détruit la relation de confiance', 'Règle de clarté des canaux de communication (Slack / Teams pour le court terme, Notion pour la documentation pérenne)', 'Préservation du droit à la déconnexion'],
      formuleCle: 'Management hybride = Confiance a priori + Clarté absolue des objectifs et livrables',
      contenuHtml: `<p>Adaptation des rituels et de la posture managériale aux nouvelles organisations distribuées.</p>`,
      exercices: [{
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
      }]
    },
    {
      id: 'lead_ch15',
      titre: '15. Leadership Inspirant, Vision Stratégique & Storytelling',
      dureeEstimeeMin: 45,
      description: 'Le Cercle d’Or de Simon Sinek (Commencer par le POURQUOI / Golden Circle : Why -> How -> What), donner du sens à la mission commune, structurer un pitch inspirant avec le voyage du héros et incarner les valeurs au quotidien.',
      pointsCles: ['Les gens n\'achètent pas ce que vous faites, ils achètent POURQUOI vous le faites', 'Leadership par l\'exemple (Lead by Example)', 'Aligner la stratégie sur une vision porteuse d\'avenir'],
      formuleCle: 'Golden Circle : Start with WHY (Raison d\'être profonde)',
      contenuHtml: `<p>Art de fédérer et d'inspirer les énergies autour d'une vision d'entreprise engageante.</p>`,
      exercices: [{
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
      }]
    }
  ]
};
