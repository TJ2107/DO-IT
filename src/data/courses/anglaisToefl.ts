import { Domaine, NiveauDifficulte, TypeQuestion, Cours } from '../../types';

export const COURSE_ANGLAIS_TOEFL: Cours = {
  id: 'toefl_101',
  domaine: Domaine.ANGLAIS_TOEFL,
  domaineNom: 'Anglais TOEFL',
  icon: '🇬🇧',
  titre: "Anglais Académique & Préparation au TOEFL iBT (15 Chapitres)",
  description: 'Cursus intensif et certifiant en 15 chapitres couvrant la méthodologie des 4 épreuves du TOEFL iBT (Reading, Listening, Speaking, Writing), la grammaire universitaire avancée, le vocabulaire académique (AWL) et les stratégies de score supérieur à 100 points.',
  niveau: NiveauDifficulte.INTERMEDIAIRE,
  dureeHeures: 45,
  colorClass: 'from-blue-600 to-indigo-800',
  titreBrevet: "Certificat d'Aptitude en Anglais Académique & TOEFL iBT",
  objectifs: [
    'Comprendre la structure globale du TOEFL iBT et maîtriser le temps imparti pour chaque épreuve',
    'Développer des techniques de lecture rapide (Skimming & Scanning) et résoudre les 10 types de questions de Reading',
    'Prendre des notes efficaces à l’écoute de cours magistraux et conversations universitaires (Listening)',
    'Structurer des réponses orales convaincantes en 45 et 60 secondes (Speaking Tasks 1 à 4)',
    'Rédiger des essais académiques synthétiques et argumentés (Writing Integrated & Academic Discussion)',
    'Enrichir son vocabulaire scientifique et universitaire grâce à l’Academic Word List (AWL)'
  ],
  competences: [
    'TOEFL Reading Comprehension & Inference',
    'Academic Listening & Note-Taking',
    'Independent & Integrated Speaking (Tasks 1-4)',
    'Integrated Writing (Reading + Listening Synthesis)',
    'Writing for an Academic Discussion',
    'Academic Word List (AWL) & Syntaxic Accuracy',
    'Time Management & Test-Taking Strategies (Target 100+)'
  ],
  preRequis: ["Niveau d'anglais intermédiaire (B1/B2)"],
  certifiant: true,
  scoreMinValidation: 0.7,
  dureeValiditeMois: 36,
  devoirs: [
    {
      id: 'toefl_dev_1',
      numero: 1,
      titre: 'Devoir n°1 : Reading Comprehension & Academic Vocabulary Analysis',
      chapitresCouverts: 'Chapitres 1 à 5',
      dureeEstimeeMin: 45,
      noteMax: 20,
      coefficient: 2,
      description: 'Analyse d’un passage académique sur la paléoclimatologie, identification des connecteurs logiques et réponse aux questions de type Inférence, Purpose et Sentence Insertion.',
      miseEnSituation: 'Vous lisez un extrait d’article universitaire publié dans le journal Science & Environment décrivant les variations atmosphériques de l’ère Cénozoïque.',
      questions: [
        {
          id: 'q1',
          titre: 'Vocabulary in Context & Academic Synonyms',
          enonce: 'Dans la phrase : "The researchers conducted a meticulous analysis to delineate the boundaries of the ancient ecosystem", quel est le synonyme le plus précis du mot "delineate" ?',
          points: 7,
          type: 'qcm_justifie',
          options: ['Expand', 'Outline / Define', 'Obscure', 'Disregard'],
          reponseCorrecteIndex: 1,
          solutionDetaillee: 'Le verbe "delineate" signifie tracer les contours, décrire précisément ou définir les limites ("outline or describe precisely").',
          baremeDetail: [
            'Identification du sens du verbe académique : 4 pts',
            'Justification contextuelle (boundaries) : 3 pts'
          ]
        },
        {
          id: 'q2',
          titre: 'Rhetorical Purpose Identification',
          enonce: 'Why does the author mention "coral reef bleaching events" in paragraph 3 ?',
          points: 7,
          type: 'cas_pratique',
          options: [
            'To argue that marine life was completely destroyed in ancient times',
            'To provide a concrete illustration of how slight temperature increases affect marine biodiversity',
            'To contrast ancient climate patterns with modern industrial emissions',
            'To demonstrate that corals do not adapt to ocean acidity'
          ],
          reponseCorrecteIndex: 1,
          solutionDetaillee: 'L’auteur mentionne le blanchissement des récifs pour illustrer concrètement l’impact d’une élévation minime de température sur la biodiversité marine.',
          baremeDetail: [
            'Repérage de la fonction de l’exemple dans le paragraphe : 4 pts',
            'Élimination des pièges d’exagération ("completely destroyed") : 3 pts'
          ]
        },
        {
          id: 'q3',
          titre: 'Sentence Insertion Strategy',
          enonce: 'Où doit être insérée la phrase de transition : "Consequently, scientists turned to ice core samples for more reliable historical records." ?',
          points: 6,
          type: 'cas_pratique',
          options: [
            'Au début du texte avant la présentation du problème',
            'Juste après une phrase décrivant les limites des méthodes géologiques traditionnelles',
            'À la fin de la conclusion',
            'Entre le titre et le premier paragraphe'
          ],
          reponseCorrecteIndex: 1,
          solutionDetaillee: 'L’adverbe de conséquence "Consequently" indique un résultat découlant d’une difficulté ou limitation précédemment expliquée.',
          baremeDetail: [
            'Analyse du connecteur logique "Consequently" : 3 pts',
            'Positionnement exact après la cause (limitation) : 3 pts'
          ]
        }
      ]
    },
    {
      id: 'toefl_dev_2',
      numero: 2,
      titre: 'Devoir n°2 : Integrated Writing & Academic Argumentation Synthesis',
      chapitresCouverts: 'Chapitres 6 à 12',
      dureeEstimeeMin: 60,
      noteMax: 20,
      coefficient: 2,
      description: 'Synthèse écrite opposant les arguments d’un texte universitaire (Reading) à ceux d’un enregistrement audio (Listening) sur l’intelligence artificielle dans l’éducation.',
      miseEnSituation: 'Le texte soutient que l’évaluation automatisée par IA réduit les biais humains, tandis que la conférence audio montre ses failles majeures en terme de nuance et de créativité.',
      questions: [
        {
          id: 'q1',
          titre: 'Structure de l’essai intégré (Integrated Writing Template)',
          enonce: 'Quelle est l’organisation recommandée pour le corps de texte d’un essai intégré au TOEFL Writing Task 1 ?',
          points: 7,
          type: 'qcm_justifie',
          options: [
            'Paragraphe 1 : Mon opinion personnelle, Paragraphe 2 : Résumé du texte',
            'Pour chaque point clé (3 au total) : Présenter l’argument du texte puis expliquer comment le professeur dans le Listening le contredit ou le nuance',
            'Recopier intégralement le texte de lecture puis résumer l’écoute',
            'Rédiger un poème en anglais'
          ],
          reponseCorrecteIndex: 1,
          solutionDetaillee: 'L’essai intégré exige d’opposer point par point les arguments du texte avec les contre-arguments apportés dans la conférence audio.',
          baremeDetail: [
            'Mise en parallèle point par point Reading/Listening : 4 pts',
            'Absence d’opinion personnelle dans la Task 1 : 3 pts'
          ]
        },
        {
          id: 'q2',
          titre: 'Utilisation des verbes de rapport académiques',
          enonce: 'Parmi les formulations suivantes, laquelle exprime correctement la contradiction du professeur face au texte ?',
          points: 7,
          type: 'qcm_justifie',
          options: [
            'The professor agrees completely with the reading passage.',
            'While the passage asserts that AI eliminates bias, the lecturer counters this claim by demonstrating that training algorithms inherit historical data prejudices.',
            'The reading is good but the lecture is bad.',
            'AI is very cool in universities.'
          ],
          reponseCorrecteIndex: 1,
          solutionDetaillee: 'Cette phrase utilise une structure complexe (While...), des verbes précis (asserts, counters) et un vocabulaire riche (inherit historical data prejudices).',
          baremeDetail: [
            'Utilisation de connecteurs de concession (While) : 3 pts',
            'Précision lexicale et grammaticale : 4 pts'
          ]
        },
        {
          id: 'q3',
          titre: 'Gestion du temps en épreuve de Writing',
          enonce: 'Comment répartir de façon optimale les 20 minutes imparties pour le Writing Task 1 ?',
          points: 6,
          type: 'cas_pratique',
          options: [
            '15 minutes de planification et 5 minutes d’écriture',
            '3 min d’analyse des notes, 14 min de rédaction (approx. 180-220 mots), 3 min de relecture grammaticale',
            '20 minutes de frappe sans relecture',
            '5 minutes de rédaction et 15 minutes d’attente'
          ],
          reponseCorrecteIndex: 1,
          solutionDetaillee: 'La répartition idéale réserve 3 min à l’organisation des notes, 14 min à la rédaction fluide et 3 min indispensables pour corriger les fautes d’inattention.',
          baremeDetail: [
            'Planification des étapes (notes, écriture, relecture) : 3 pts',
            'Respect du nombre cible de mots (180-220 mots) : 3 pts'
          ]
        }
      ]
    }
  ],
  chapitres: [
    {
      id: 'toefl_chap_1',
      titre: '1. Introduction au TOEFL iBT & Format Général du Test',
      dureeEstimeeMin: 45,
      description: 'Découvrez l’architecture globale du TOEFL iBT, les 4 sections (Reading, Listening, Speaking, Writing), l’échelle de notation sur 120 points et les objectifs visés pour les universités anglo-saxonnes.',
      pointsCles: [
        'Score total sur 120 (30 points par section)',
        'Durée globale d’environ 2 heures en centre de test ou Home Edition',
        'Section Reading (2 passages, 20 questions, 35 min)',
        'Section Listening (3 lectures, 2 conversations, 36 min)',
        'Section Speaking (4 tâches, 16 min)',
        'Section Writing (2 tâches : Integrated & Academic Discussion, 29 min)'
      ],
      rappelPrecedent: 'Bienvenue dans votre préparation officielle au TOEFL iBT ! Ce premier chapitre pose les bases méthodologiques indispensables.',
      conseilProfesseur: 'Le TOEFL n’évalue pas uniquement votre niveau d’anglais, mais votre capacité à utiliser la langue dans un contexte universitaire exigeant.',
      formuleCle: 'Score TOEFL = Compétence Linguistique + Maîtrise de la Méthodologie + Gestion du Chronomètre',
      astuceTerrain: 'Créez un compte ETS officiel dès le début de votre préparation pour fixer une date de passage cible (dans 2 à 3 mois).',
      contenuHtml: `
        <div class="space-y-6 text-slate-800">
          <h3 class="text-xl font-bold text-blue-900 border-b pb-2">1.1 Qu’est-ce que le TOEFL iBT ?</h3>
          <p>Le <strong>TOEFL iBT</strong> (Test of English as a Foreign Language - internet-Based Test) est le test de langue anglaise le plus largement reconnu au monde pour l'accès aux universités américaines, canadiennes, britanniques et européennes. Il évalue la capacité à intégrer un environnement académique anglophone.</p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div class="bg-blue-50 border border-blue-200 rounded-2xl p-4">
              <h4 class="font-bold text-blue-900 mb-2">📊 Structure des Scores</h4>
              <ul class="space-y-1.5 text-sm text-slate-700">
                <li>• <strong>Reading :</strong> 0 – 30 points</li>
                <li>• <strong>Listening :</strong> 0 – 30 points</li>
                <li>• <strong>Speaking :</strong> 0 – 30 points</li>
                <li>• <strong>Writing :</strong> 0 – 30 points</li>
                <li>• <strong>Score Total :</strong> 0 – 120 points</li>
              </ul>
            </div>
            <div class="bg-indigo-50 border border-indigo-200 rounded-2xl p-4">
              <h4 class="font-bold text-indigo-900 mb-2">🎯 Cibles de Score Usuelles</h4>
              <ul class="space-y-1.5 text-sm text-slate-700">
                <li>• <strong>Niveau B2 (Autonome) :</strong> 72 – 94 points</li>
                <li>• <strong>Niveau C1 (Avancé) :</strong> 95 – 114 points</li>
                <li>• <strong>Niveau C2 (Maîtrise) :</strong> 115 – 120 points</li>
                <li>• <strong>Top Universités (Harvard, MIT, Oxford) :</strong> 100+ exigé</li>
              </ul>
            </div>
          </div>

          <h3 class="text-xl font-bold text-blue-900 border-b pb-2">1.2 Déroulement Épreuve par Épreuve</h3>
          <p>Voici le calendrier exact des épreuves révisé en 2023 pour une expérience condensée de 2 heures :</p>
          <div class="overflow-x-auto">
            <table class="w-full text-sm border-collapse border border-slate-200 my-2">
              <thead>
                <tr class="bg-slate-100 text-slate-900">
                  <th class="border p-2.5 text-left">Section</th>
                  <th class="border p-2.5 text-left">Contenu</th>
                  <th class="border p-2.5 text-left">Nombre de Questions</th>
                  <th class="border p-2.5 text-left">Durée</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border p-2.5 font-semibold text-blue-800">Reading</td>
                  <td class="border p-2.5">2 passages universitaires (700 mots)</td>
                  <td class="border p-2.5">20 questions (10/passage)</td>
                  <td class="border p-2.5 font-bold">35 minutes</td>
                </tr>
                <tr class="bg-slate-50">
                  <td class="border p-2.5 font-semibold text-indigo-800">Listening</td>
                  <td class="border p-2.5">3 lectures académiques & 2 conversations de campus</td>
                  <td class="border p-2.5">28 questions</td>
                  <td class="border p-2.5 font-bold">36 minutes</td>
                </tr>
                <tr>
                  <td class="border p-2.5 font-semibold text-emerald-800">Speaking</td>
                  <td class="border p-2.5">1 tâche indépendante + 3 tâches intégrées</td>
                  <td class="border p-2.5">4 tâches vocales</td>
                  <td class="border p-2.5 font-bold">16 minutes</td>
                </tr>
                <tr class="bg-slate-50">
                  <td class="border p-2.5 font-semibold text-amber-800">Writing</td>
                  <td class="border p-2.5">1 tâche intégrée + 1 Writing for Academic Discussion</td>
                  <td class="border p-2.5">2 épreuves écrites</td>
                  <td class="border p-2.5 font-bold">29 minutes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `,
      exercices: [
        {
          id: 'ex_toefl_1_1',
          type: TypeQuestion.QCM,
          question: 'Quel est le score maximal réalisable au TOEFL iBT et quelle est la répartition par section ?',
          reponsesPossibles: [
            '100 points au total (25 points par section)',
            '120 points au total (30 points par section)',
            '1600 points comme le SAT',
            '990 points comme le TOEIC'
          ],
          reponsesCorrectes: [1],
          explication: 'Le TOEFL iBT est noté sur 120 points au total, répartis équitablement à raison de 30 points maximum pour chacune des 4 sections (Reading, Listening, Speaking, Writing).',
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        },
        {
          id: 'ex_toefl_1_2',
          type: TypeQuestion.VRAI_FAUX,
          question: 'La section Reading comporte aujourd’hui 2 passages pour un total de 20 questions à résoudre en 35 minutes.',
          reponsesPossibles: ['Vrai', 'Faux'],
          reponsesCorrectes: [0],
          explication: 'Depuis la mise à jour 2023 du TOEFL iBT, la section Reading comprend exactement 2 passages académiques de 10 questions chacun (total 20 questions) à compléter en 35 minutes.',
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        }
      ]
    },
    {
      id: 'toefl_chap_2',
      titre: '2. Reading Section - Stratégies de Lecture Rapide (Skimming & Scanning)',
      dureeEstimeeMin: 50,
      description: 'Apprenez à parcourir rapidement un extrait de manuel universitaire sans bloquer sur le vocabulaire complexe et entraînez-vous au chronométrage strict (17-18 min par texte).',
      pointsCles: [
        'Skimming : Lire le premier paragraphe, la première phrase de chaque paragraphe et la conclusion',
        'Scanning : Rechercher des mots-clés spécifiques (dates, noms propres, termes techniques)',
        'Gestion du temps : 17.5 minutes par passage au maximum',
        'Ne jamais lire le texte en entier mot à mot avant de consulter les questions',
        'Les paragraphes sont numérotés et les questions indiquent le paragraphe ciblé'
      ],
      rappelPrecedent: 'Vous connaissez maintenant la structure du test. Attaquons la première épreuve : le Reading.',
      conseilProfesseur: 'Ne paniquez pas face au vocabulaire hautement spécialisé (ex: "mitochondrial DNA", "photosynthetic rate"). Les termes obscurs sont souvent définis dans le texte ou n’impactent pas la réponse.',
      formuleCle: 'Temps disponible par question = ~1 minute et 45 secondes',
      astuceTerrain: 'Lisez la question d’abord, puis recherchez la zone de texte correspondante grâce au repère de paragraphe fourni sur l’écran.',
      contenuHtml: `
        <div class="space-y-6 text-slate-800">
          <h3 class="text-xl font-bold text-blue-900 border-b pb-2">2.1 La Technique du Skimming Académique</h3>
          <p>Le <strong>Skimming</strong> consiste à construire une carte mentale du texte en 60 à 90 secondes avant d'attaquer les questions. Ne cherchez pas à tout comprendre dès la première lecture.</p>
          
          <div class="bg-slate-50 border-l-4 border-blue-600 p-4 rounded-r-xl my-3">
            <h4 class="font-bold text-blue-900 mb-1">📌 Protocole Skimming en 3 étapes :</h4>
            <ol class="list-decimal list-inside space-y-1 text-sm text-slate-700">
              <li><strong>Titre & Paragraphe 1 :</strong> Identifiez le sujet central (ex: L'évolution de l'atmosphère terrestre).</li>
              <li><strong>Topic Sentences :</strong> Lisez uniquement la première phrase de chaque paragraphe subséquent. Elle contient 80% de l'idée principale.</li>
              <li><strong>Dernière phrase du texte :</strong> Saisissez la conclusion ou l'ouverture scientifique.</li>
            </ol>
          </div>

          <h3 class="text-xl font-bold text-blue-900 border-b pb-2">2.2 La Technique du Scanning Cible</h3>
          <p>Le <strong>Scanning</strong> est une recherche visuelle rapide d'éléments précis déclenchée par les mots-clés de la question :</p>
          <ul class="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li><strong>Mots-clés visuels forts :</strong> Dates (1854), Nombres (45%), Noms propres (Darwin, Carboniferous Period), Mots en majuscule.</li>
            <li><strong>Mots-clés conceptuels :</strong> Termes scientifiques ("calcification", "geothermal gradient").</li>
          </ul>
        </div>
      `,
      exercices: [
        {
          id: 'ex_toefl_2_1',
          type: TypeQuestion.QCM,
          question: 'En quoi consiste la technique du "Skimming" préconisée pour le TOEFL Reading ?',
          reponsesPossibles: [
            'Lire attentivement chaque mot du texte de la première à la dernière ligne',
            'Parcourir rapidement le titre, le paragraphe 1 et les premières phrases de chaque paragraphe pour saisir l’idée générale',
            'Traduire mentalement l’intégralité du texte en français',
            'Répondre aux questions au hasard sans regarder le texte'
          ],
          reponsesCorrectes: [1],
          explication: 'Le Skimming permet en 1 à 2 minutes d’obtenir une vue d’ensemble (structure et thématiques) du texte sans perdre de temps sur les détails secondaires.',
          points: 5,
          difficulte: NiveauDifficulte.INTERMEDIAIRE
        }
      ]
    },
    {
      id: 'toefl_chap_3',
      titre: '3. Reading Section - Factual, Negative Factual & Vocabulary in Context',
      dureeEstimeeMin: 50,
      description: 'Décodez les questions de faits explicites (Factual), les pièges des questions négatives (EXCEPT/NOT) et la méthodologie pour deviner le sens des mots en contexte.',
      pointsCles: [
        'Factual Information : La réponse est une paraphrase directe d’une phrase du texte',
        'Negative Factual : 3 options sont vraies et présentées dans le texte, 1 seule est fausse ou non mentionnée',
        'Vocabulary in Context : Choisir le mot qui remplace le terme surligné sans altérer le sens de la phrase',
        'Méfiez-vous des pièges de "mots identiques" pris hors contexte'
      ],
      rappelPrecedent: 'Vous savez parcourir un texte rapidement. Voyons maintenant les questions les plus fréquentes du Reading.',
      conseilProfesseur: 'Pour les questions "Vocabulary in Context", remplacez mentalement le mot par l’option choisie dans la phrase d’origine pour vérifier la cohérence syntaxique et sémantique.',
      formuleCle: 'Paraphrase exacte dans le texte = Bonne réponse',
      astuceTerrain: 'Dans les questions EXCEPT / NOT, cochez mentalement les 3 affirmations vérifiées dans le texte ; la réponse est la quatrième restante.',
      contenuHtml: `
        <div class="space-y-6 text-slate-800">
          <h3 class="text-xl font-bold text-blue-900 border-b pb-2">3.1 Factual Information Questions</h3>
          <p>Ces questions commencent souvent par : <em>"According to paragraph 2, which of the following is true about...?"</em></p>
          <div class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-sm">
            <h4 class="font-bold text-emerald-900 mb-1">💡 Règle d’Or : La Paraphrase</h4>
            <p>ETS ne recopies jamais la phrase exacte dans la bonne réponse. La bonne réponse exprime la <strong>même idée avec des mots et structures syntaxiques différents</strong> (ex: "reduced significantly" devenant "experienced a marked decline").</p>
          </div>

          <h3 class="text-xl font-bold text-blue-900 border-b pb-2">3.2 Negative Factual Questions (EXCEPT / NOT)</h3>
          <p>Format type : <em>"All of the following are mentioned in paragraph 4 as factors contributing to soil erosion EXCEPT..."</em></p>
          <p class="text-sm">Votre tâche est d’éliminer les 3 faits mentionnés dans le paragraphe pour désigner celui qui est inexact ou absent.</p>

          <h3 class="text-xl font-bold text-blue-900 border-b pb-2">3.3 Vocabulary in Context Questions</h3>
          <p>Format type : <em>"The word <strong>paramount</strong> in the passage is closest in meaning to..."</em></p>
          <ul class="list-disc list-inside text-sm space-y-1">
            <li>A) Mysterious</li>
            <li>B) Essential / Chief</li>
            <li>C) Secondary</li>
            <li>D) Temporary</li>
          </ul>
          <p class="text-sm text-slate-600 mt-1"><em>Solution : Paramount signifie de première importance, donc B (Essential / Chief).</em></p>
        </div>
      `,
      exercices: [
        {
          id: 'ex_toefl_3_1',
          type: TypeQuestion.QCM,
          question: 'Dans une question Factual Information, quelle est la caractéristique fondamentale de la bonne réponse ?',
          reponsesPossibles: [
            'Elle utilise exactement les mêmes mots que le texte sans aucun changement',
            'Elle constitue une paraphrase fidèle de l’information contenue dans le paragraphe cible',
            'Elle apporte une opinion personnelle non mentionnée dans le document',
            'Elle contredit l’idée principale du texte'
          ],
          reponsesCorrectes: [1],
          explication: 'La bonne réponse reformule fidèlement l’information du texte en utilisant des synonymes ou une structure grammaticale équivalente (paraphrase).',
          points: 5,
          difficulte: NiveauDifficulte.INTERMEDIAIRE
        }
      ]
    },
    {
      id: 'toefl_chap_4',
      titre: '4. Reading Section - Inference, Rhetorical Purpose & Sentence Insertion',
      dureeEstimeeMin: 50,
      description: 'Maîtrisez les questions d’inférence (ce qui est sous-entendu), découvrez pourquoi l’auteur cite un exemple (Rhetorical Purpose) et apprenez à insérer des phrases de transition avec logique.',
      pointsCles: [
        'Inference : Une conclusion logique non formulée mot à mot mais directement étayée par les faits',
        'Rhetorical Purpose : "Why does the author mention...?" (pour illustrer, contraster, soutenir une thèse)',
        'Insert Text : Trouver l’emplacement exact [■] parmi 4 carrés noirs grâce aux pronoms et connecteurs logiques'
      ],
      rappelPrecedent: 'Nous avons vu les faits bruts. Passons maintenant à l’analyse logique et à la rhétorique.',
      conseilProfesseur: 'Pour les questions Insert Text, observez attentivement les mots de liaison au début de la phrase à insérer (ex: "However", "In addition", "These results"). Ils indiquent la relation logique avec la phrase précédente.',
      formuleCle: 'Phrase d’insertion = Pronom Anaphorique + Connecteur Logique + Information Nouvelle',
      astuceTerrain: 'Une inférence TOEFL reste très proche du texte. N’inventez pas d’extrapolations lointaines !',
      contenuHtml: `
        <div class="space-y-6 text-slate-800">
          <h3 class="text-xl font-bold text-blue-900 border-b pb-2">4.1 Inference Questions</h3>
          <p>Ces questions contiennent le verbe <em>infer, imply</em> ou <em>suggest</em> : <em>"Which of the following can be inferred from paragraph 3 about solar flares?"</em></p>
          <div class="bg-amber-50 border border-amber-200 p-4 rounded-xl text-sm">
            <h4 class="font-bold text-amber-900 mb-1">⚠️ Piège fréquent : L'exagération</h4>
            <p>Si le texte indique que "la plupart des mammifères désertiques dorment le jour", vous pouvez déduire qu'ils sont nocturnes, mais <strong>PAS</strong> que la vie de jour est mortelle pour eux.</p>
          </div>

          <h3 class="text-xl font-bold text-blue-900 border-b pb-2">4.2 Rhetorical Purpose Questions</h3>
          <p>Pourquoi l'auteur inclut-il un fait, une anecdote ou une citation ?</p>
          <ul class="list-disc list-inside text-sm space-y-1">
            <li><strong>To illustrate / demonstrate :</strong> Donner un exemple concret d'une théorie générale.</li>
            <li><strong>To refute / challenge :</strong> Contredire une idée préconçue.</li>
            <li><strong>To clarify :</strong> Expliquer un terme complexe.</li>
          </ul>

          <h3 class="text-xl font-bold text-blue-900 border-b pb-2">4.3 Insert Text Questions (Les Carrés Noirs [■])</h3>
          <p>Vous devez cliquer sur l'un des 4 carrés noirs [■] du texte pour placer la phrase proposée. Analysez les indices syntaxiques :</p>
          <ul class="list-disc list-inside text-sm space-y-1">
            <li><em>"This phenomenon..."</em> → Doit suivre la description du phénomène.</li>
            <li><em>"On the other hand..."</em> → Doit marquer une opposition avec la phrase précédente.</li>
          </ul>
        </div>
      `,
      exercices: [
        {
          id: 'ex_toefl_4_1',
          type: TypeQuestion.QCM,
          question: 'Lors d’une question Insert Text, quel élément doit vous guider pour placer la phrase au bon endroit [■] ?',
          reponsesPossibles: [
            'La longueur relative du paragraphe',
            'Les pronoms de rappel (this, these) et connecteurs logiques (however, furthermore) créant un lien avec les phrases adjacentes',
            'La présence de nombres dans la phrase',
            'Le premier carré disponible systématiquement'
          ],
          reponsesCorrectes: [1],
          explication: 'Les connecteurs logiques et pronoms anaphoriques créent la cohésion textuelle indispensable pour insérer la phrase sans rompre le fil d’idées.',
          points: 5,
          difficulte: NiveauDifficulte.AVANCE
        }
      ]
    },
    {
      id: 'toefl_chap_5',
      titre: '5. Reading Section - Complete the Summary & Category Charts',
      dureeEstimeeMin: 50,
      description: 'Réussissez la question finale valant 2 points (Prose Summary) : différenciez les idées majeures des détails secondaires et remplissez le tableau récapitulatif.',
      pointsCles: [
        'Prose Summary : Sélectionner 3 idées principales parmi 6 propositions (valeur : 2 points)',
        'Les détails mineurs et les affirmations fausses doivent être éliminés',
        'Category Chart : Classer des éléments dans un tableau comparatif à 2 ou 3 colonnes',
        'Cette question récapitule l’ensemble du passage'
      ],
      rappelPrecedent: 'Vous avez maîtrisé les questions de détail et d’insertion. Concluons le Reading avec la grande question de synthèse.',
      conseilProfesseur: 'Une proposition peut être 100% exacte d’après le texte mais constituer la MAUVAISE réponse si elle ne décrit qu’un détail secondaire !',
      formuleCle: 'Bonne réponse de synthèse = Idée Majeure du Texte (Macrostructure)',
      astuceTerrain: 'Revisitez les Topic Sentences identifiées lors du Skimming initial pour repérer les 3 thèmes dominants.',
      contenuHtml: `
        <div class="space-y-6 text-slate-800">
          <h3 class="text-xl font-bold text-blue-900 border-b pb-2">5.1 La Question Prose Summary (2 Points)</h3>
          <p>La dernière question du passage vous présente une phrase d’introduction résumant le texte et 6 choix de réponses. Vous devez sélectionner les <strong>3 idées principales</strong> qui développent ce résumé.</p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div class="bg-emerald-50 border border-emerald-200 p-3.5 rounded-xl text-sm">
              <h4 class="font-bold text-emerald-900 mb-1">✅ À Sélectionner</h4>
              <p>Statements que couvrent des paragraphes entiers ou des thèses centrales du texte.</p>
            </div>
            <div class="bg-rose-50 border border-rose-200 p-3.5 rounded-xl text-sm">
              <h4 class="font-bold text-rose-900 mb-1">❌ À Éliminer</h4>
              <ul class="list-disc list-inside text-slate-700">
                <li>Affirmations contredisant le texte.</li>
                <li>Détails isolés (dates précises, exemples spécifiques).</li>
              </ul>
            </div>
          </div>
        </div>
      `,
      exercices: [
        {
          id: 'ex_toefl_5_1',
          type: TypeQuestion.QCM,
          question: 'Pourquoi une option factuellement vraie peut-elle être rejetée dans la question Prose Summary ?',
          reponsesPossibles: [
            'Parce qu’elle contient des fautes d’orthographe',
            'Parce qu’il s’agit d’un détail très spécifique et non d’une idée principale du texte',
            'Parce qu’elle est trop longue',
            'Parce que le TOEFL n’accepte que des vérités mathématiques'
          ],
          reponsesCorrectes: [1],
          explication: 'La question Prose Summary demande de sélectionner les 3 idées directrices du texte. Les détails secondaires, même s’ils sont exacts, ne font pas partie du résumé global.',
          points: 5,
          difficulte: NiveauDifficulte.AVANCE
        }
      ]
    },
    {
      id: 'toefl_chap_6',
      titre: '6. Listening Section - Prise de Notes Active (Cornell Note-Taking)',
      dureeEstimeeMin: 50,
      description: 'Développez un système efficace de prise de notes pendant l’écoute des lectures et conversations universitaires sans vous laisser déborder par le flux audio.',
      pointsCles: [
        'Utilisez des abréviations et des symboles (↑, ↓, →, w/, b/c, ex, vs)',
        'Structurez votre feuille en 2 colonnes : Idée principale / Exemples & Détails',
        'Repérez les mots de transition de l’enseignant ("First", "However", "In contrast", "Pay attention to...")',
        'On n’écoute les enregistrements QU’UNE SEULE FOIS !'
      ],
      rappelPrecedent: 'Passons à la deuxième section du TOEFL : le Listening.',
      conseilProfesseur: 'Ne notez pas des phrases complètes ! Notez uniquement les mots de contenu (noms, verbes d’action, adjectifs clés).',
      formuleCle: 'Prise de notes efficace = Mots-clés + Symboles + Flèches de causalité',
      astuceTerrain: 'Quand le professeur répète un mot ou dit "Now this is crucial...", soulignez immédiatement ce terme sur votre brouillon.',
      contenuHtml: `
        <div class="space-y-6 text-slate-800">
          <h3 class="text-xl font-bold text-blue-900 border-b pb-2">6.1 Les 2 Types d’Audios au Listening</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-blue-50 border border-blue-200 p-4 rounded-xl">
              <h4 class="font-bold text-blue-900 mb-1">🎓 Academic Lectures (3-5 min)</h4>
              <p class="text-sm text-slate-700">Un professeur exposant un sujet de biologie, astronomie, histoire de l’art ou psychologie. Peut inclure des interventions d’étudiants.</p>
            </div>
            <div class="bg-indigo-50 border border-indigo-200 p-4 rounded-xl">
              <h4 class="font-bold text-indigo-900 mb-1">💬 Campus Conversations (2-3 min)</h4>
              <p class="text-sm text-slate-700">Échange informel entre un étudiant et un administratif ou un professeur (ex: problème d’inscription, recherche à la bibliothèque).</p>
            </div>
          </div>

          <h3 class="text-xl font-bold text-blue-900 border-b pb-2">6.2 Abreviations indispensables pour le brouillon</h3>
          <div class="overflow-x-auto">
            <table class="w-full text-sm border border-slate-200">
              <thead class="bg-slate-100">
                <tr><th class="p-2 border">Symbole / Abréviation</th><th class="p-2 border">Signification</th><th class="p-2 border">Exemple</th></tr>
              </thead>
              <tbody>
                <tr><td class="p-2 border font-bold">b/c</td><td class="p-2 border">because (cause)</td><td class="p-2 border">temp ↑ b/c CO2 ↑</td></tr>
                <tr class="bg-slate-50"><td class="p-2 border font-bold">→</td><td class="p-2 border">entraine / entraîne que</td><td class="p-2 border">deforestation → erosion</td></tr>
                <tr><td class="p-2 border font-bold">vs</td><td class="p-2 border">opposition / contraste</td><td class="p-2 border">theory A vs theory B</td></tr>
                <tr class="bg-slate-50"><td class="p-2 border font-bold">w/o</td><td class="p-2 border">without (sans)</td><td class="p-2 border">growth w/o water = impossible</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      `,
      exercices: [
        {
          id: 'ex_toefl_6_1',
          type: TypeQuestion.QCM,
          question: 'Combien de fois pouvez-vous écouter chaque extrait audio dans la section Listening du TOEFL ?',
          reponsesPossibles: [
            'Autant de fois que nécessaire pendant le temps imparti',
            'Exactement deux fois',
            'Une seule et unique fois',
            'Trois fois si vous utilisez un passe spécial'
          ],
          reponsesCorrectes: [2],
          explication: 'Au TOEFL iBT, chaque extrait sonore (lecture ou conversation) n’est diffusé qu’une seule fois. Une prise de notes rigoureuse en temps réel est donc capitale.',
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        }
      ]
    },
    {
      id: 'toefl_chap_7',
      titre: '7. Listening Section - Main Ideas, Gist & Detail Questions',
      dureeEstimeeMin: 50,
      description: 'Identifiez le sujet principal (Gist-Content), le but de la conversation (Gist-Purpose) et répondez avec précision aux questions de détails factuels.',
      pointsCles: [
        'Gist-Content : "What is the lecture mainly about?"',
        'Gist-Purpose : "Why does the student go to see the professor?"',
        'Detail Questions : Porter sur des explications clés, des définitions ou des étapes de processus',
        'Évitez de choisir une option basée sur un seul mot entendu sans comprendre le contexte'
      ],
      rappelPrecedent: 'Maintenant que vous savez prendre des notes, analysons la typologie des questions du Listening.',
      conseilProfesseur: 'La première question après une conversation est presque systématiquement une question de Gist-Purpose ("Why did the student visit the professor?").',
      formuleCle: 'Gist Question = Sujet Global énoncé dès les 30 premières secondes',
      astuceTerrain: 'Si le professeur commence par "Today we’re going to focus on...", notez immédiatement ce sujet en haut de votre feuille !',
      contenuHtml: `
        <div class="space-y-6 text-slate-800">
          <h3 class="text-xl font-bold text-blue-900 border-b pb-2">7.1 Questions de Sujet Principal (Gist-Content)</h3>
          <p>Ces questions évaluent votre compréhension globale du cours ou de la discussion. Elles se présentent sous la forme :</p>
          <ul class="list-disc list-inside text-sm space-y-1 text-slate-700">
            <li><em>What is the main topic of the lecture?</em></li>
            <li><em>What aspect of photosynthesis does the professor mainly discuss?</em></li>
          </ul>

          <h3 class="text-xl font-bold text-blue-900 border-b pb-2">7.2 Questions de Détail (Detail Questions)</h3>
          <p>Ces questions ciblent des faits explicites présentés dans l’extrait. Exemple : <em>"According to the professor, why did the migration period end?"</em></p>
          <div class="bg-rose-50 border border-rose-200 p-3.5 rounded-xl text-sm text-slate-700">
            <strong>⚠️ Piège à éviter :</strong> Les distracteurs utilisent souvent de "vrais mots" de l'audio mais les assemblent pour former un sens erroné.
          </div>
        </div>
      `,
      exercices: [
        {
          id: 'ex_toefl_7_1',
          type: TypeQuestion.QCM,
          question: 'Où se trouve généralement l’élément de réponse pour la question "Gist-Content" dans un enregistrement de cours magistral ?',
          reponsesPossibles: [
            'Au tout dernier mot de la conclusion uniquement',
            'Dans l’introduction du professeur au cours des 30 à 45 premières secondes',
            'Dans une blague faite par un étudiant au milieu du cours',
            'Elle n’est jamais exprimée dans l’enregistrement'
          ],
          reponsesCorrectes: [1],
          explication: 'Les professeurs universitaires annoncent le sujet du jour dès l’introduction du cours (ex: "Today, I want to explore how ancient civilizations managed water supply...").',
          points: 5,
          difficulte: NiveauDifficulte.INTERMEDIAIRE
        }
      ]
    },
    {
      id: 'toefl_chap_8',
      titre: '8. Listening Section - Speaker Attitude, Function & Organization',
      dureeEstimeeMin: 50,
      description: 'Décodez l’intonation et les sous-entendus de l’interlocuteur (Attitude), comprenez les ré-écoutes ciblées (Function) et l’organisation logique du discours.',
      pointsCles: [
        'Attitude Questions : Déterminer le sentiment du locuteur (enthousiaste, sceptique, surpris, inquiet)',
        'Function Questions : Ré-écoute d’un extrait court de 10s ("What does the professor mean when he says this?")',
        'Organization Questions : Suivre l’ordre chronologique ou la classification présentée'
      ],
      rappelPrecedent: 'Vous maîtrisez le fond des cours. Décodons à présent la forme et la psychologie des interlocuteurs.',
      conseilProfesseur: 'Écoutez attentivement le ton de la voix ! Un "Right..." prononcé avec un soupir exprime le doute ou l’ironie, pas l’accord.',
      formuleCle: 'Sens pragmatique = Signification des mots + Intonation + Contexte',
      astuceTerrain: 'Dans les ré-écoutes (Function), la réponse littérale est souvent fausse. Cherchez l’intention de communication (ex: rediriger la classe, clarifier un doute).',
      contenuHtml: `
        <div class="space-y-6 text-slate-800">
          <h3 class="text-xl font-bold text-blue-900 border-b pb-2">8.1 Questions d’Attitude & Ton</h3>
          <p>Exemples de vocabulaire d’attitude fréquemment testé au TOEFL :</p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
            <div class="p-2 bg-slate-100 rounded font-semibold text-center">Skeptical (Sceptique)</div>
            <div class="p-2 bg-slate-100 rounded font-semibold text-center">Critical (Critique)</div>
            <div class="p-2 bg-slate-100 rounded font-semibold text-center">Encouraging (Encourageant)</div>
            <div class="p-2 bg-slate-100 rounded font-semibold text-center">Impressed (Impressionné)</div>
          </div>

          <h3 class="text-xl font-bold text-blue-900 border-b pb-2">8.2 Questions de Fonction (Replay Questions)</h3>
          <p>Un casque s’affiche à l’écran et un court passage est rejoué :</p>
          <p class="italic text-sm text-slate-700 bg-slate-50 p-3 border-l-4 border-indigo-500 rounded-r-xl">
            "Listen again to part of the lecture, then answer the question.<br/>
            [Audio Replay] : 'Now, you might think this species is extinct, but hold on a second...'<br/>
            Question : Why does the professor say 'but hold on a second'?"
          </p>
          <p class="text-sm mt-2"><strong>Réponse attendue :</strong> To correct a common misconception among students.</p>
        </div>
      `,
      exercices: [
        {
          id: 'ex_toefl_8_1',
          type: TypeQuestion.QCM,
          question: 'Si un professeur dit "Well, in theory that sounds convincing, but...", quelle est son attitude ?',
          reponsesPossibles: [
            'Il apporte son soutien total et inconditionnel à la théorie',
            'Il exprime des réserves ou un doute quant à l’application réelle de cette théorie',
            'Il annonce qu’il va annuler l’examen',
            'Il n’a pas compris l’intervention de l’étudiant'
          ],
          reponsesCorrectes: [1],
          explication: 'Le connecteur "but" après "in theory" signale que le professeur s’apprête à nuancer ou remettre en question la validité pratique de l’affirmation.',
          points: 5,
          difficulte: NiveauDifficulte.INTERMEDIAIRE
        }
      ]
    },
    {
      id: 'toefl_chap_9',
      titre: '9. Speaking Task 1 - Independent Speaking & Argument Structuring',
      dureeEstimeeMin: 50,
      description: 'Maîtrisez l’épreuve orale indépendante : 15 secondes pour préparer et 45 secondes pour exprimer un choix clair étayé par 2 raisons et exemples concrets.',
      pointsCles: [
        '15 secondes de préparation / 45 secondes de réponse orale enregistrée',
        'Sujets de choix personnel ou d’opinion (ex: "Do you prefer studying alone or in group?")',
        'Structure conseillée : Opinion (5s) + Raison 1 & Exemple (20s) + Raison 2 & Exemple (20s)',
        'Fluidité et clarté de la prononciation > Vocabulaire inutilement sophistiqué'
      ],
      rappelPrecedent: 'Entrons dans la section Speaking du TOEFL. Première tâche : l’épreuve indépendante.',
      conseilProfesseur: 'Ne cherchez pas à donner la réponse la plus "intelligente", mais la réponse la plus FACILE à expliquer en anglais courant sans hésitation !',
      formuleCle: 'Speaking Task 1 = Direct Choice + Reason 1 with Detail + Reason 2 with Detail',
      astuceTerrain: 'Pendant les 15 secondes de préparation, inscrivez uniquement 3 mots-clés sur votre brouillon (ex: 1. Alone 2. Focus 3. Flexible pace).',
      contenuHtml: `
        <div class="space-y-6 text-slate-800">
          <h3 class="text-xl font-bold text-blue-900 border-b pb-2">9.1 Format et Chronomètre de la Tâche 1</h3>
          <p>La Tâche 1 vous pose une question à choix binaire ou d’opinion personnelle sur la vie universitaire ou quotidienne.</p>

          <div class="bg-indigo-900 text-white p-4 rounded-2xl my-3">
            <h4 class="font-bold text-amber-300 text-base mb-1">⏱️ Modèle d’Organisation du Chronomètre (45s) :</h4>
            <ul class="space-y-1.5 text-sm">
              <li>• <strong>0 à 5 sec :</strong> Statuer clairement votre position. (<em>"In my opinion, I strongly prefer..."</em>)</li>
              <li>• <strong>5 à 25 sec :</strong> Première raison + Exemple personnel concret. (<em>"First of all,... For instance, when I..."</em>)</li>
              <li>• <strong>25 à 45 sec :</strong> Deuxième raison + Illustration. (<em>"Secondly,... As a result,..."</em>)</li>
            </ul>
          </div>

          <h3 class="text-xl font-bold text-blue-900 border-b pb-2">9.2 Les Connecteurs de Transition Orale</h3>
          <div class="grid grid-cols-3 gap-2 text-center text-xs font-semibold">
            <div class="bg-blue-50 border p-2 rounded text-blue-900">To begin with,...</div>
            <div class="bg-blue-50 border p-2 rounded text-blue-900">For instance,...</div>
            <div class="bg-blue-50 border p-2 rounded text-blue-900">That is why I believe...</div>
          </div>
        </div>
      `,
      exercices: [
        {
          id: 'ex_toefl_9_1',
          type: TypeQuestion.QCM,
          question: 'Combien de temps avez-vous pour préparer votre réponse orale lors du Speaking Task 1 ?',
          reponsesPossibles: ['5 secondes', '15 secondes', '45 secondes', '2 minutes'],
          reponsesCorrectes: [1],
          explication: 'Vous disposez exactement de 15 secondes de préparation dès la fin du signal sonore, suivies immédiatement de 45 secondes d’enregistrement vocal.',
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        }
      ]
    },
    {
      id: 'toefl_chap_10',
      titre: '10. Speaking Tasks 2, 3 & 4 - Integrated Campus & Academic Speaking',
      dureeEstimeeMin: 55,
      description: 'Réussissez les 3 tâches orales intégrées associant lecture d’un document, écoute d’une conversation/cours et synthèse orale structurée en 60 secondes.',
      pointsCles: [
        'Task 2 (Campus Announcement) : 30s prep / 60s speech (Lire l’annonce + Écouter la réaction d’un étudiant + Résumer)',
        'Task 3 (Academic Concept) : 30s prep / 60s speech (Lire une définition + Écouter l’exemple du prof + Expliquer)',
        'Task 4 (Academic Lecture) : 20s prep / 60s speech (Écouter un cours + Résumer les 2 points/exemples clés)',
        'Interdiction d’exprimer son opinion personnelle dans les tâches 2, 3 et 4 !'
      ],
      rappelPrecedent: 'Après l’épreuve indépendante, découvrons les tâches intégrées du Speaking.',
      conseilProfesseur: 'Utilisez un gabarit de réponse fixe (template) pour ne pas chercher vos mots lors du passage oral !',
      formuleCle: 'Integrated Speaking = Summarize Reading + Explain Listening Connection',
      astuceTerrain: 'Dans la Task 2, l’étudiant exprime TOUJOURS un avis tranché (accord ou désaccord total) avec 2 raisons précises.',
      contenuHtml: `
        <div class="space-y-6 text-slate-800">
          <h3 class="text-xl font-bold text-blue-900 border-b pb-2">10.1 Templates des Tâches Intégrées (Speaking Tasks 2-4)</h3>
          
          <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl text-sm space-y-3">
            <div>
              <h4 class="font-bold text-blue-900">📌 Template Task 2 (Campus Life) :</h4>
              <p class="italic text-slate-700">"According to the announcement, the university plans to [change]. The man/woman in the conversation agrees/disagrees with this idea for two main reasons. First, he/she mentions that... Second, he/she points out that..."</p>
            </div>
            <div class="border-t pt-2">
              <h4 class="font-bold text-indigo-900">📌 Template Task 3 (Academic Concept) :</h4>
              <p class="italic text-slate-700">"The reading passage defines [Concept], which is [short definition]. In the lecture, the professor illustrates this concept with the example of... First, he explains that... Then, he shows how..."</p>
            </div>
          </div>
        </div>
      `,
      exercices: [
        {
          id: 'ex_toefl_10_1',
          type: TypeQuestion.VRAI_FAUX,
          question: 'Dans les tâches Speaking 2, 3 et 4, vous devez obligatoirement donner votre opinion personnelle à la fin de votre enregistrement.',
          reponsesPossibles: ['Vrai', 'Faux'],
          reponsesCorrectes: [1],
          explication: 'Faux ! Dans les tâches intégrées (Tasks 2, 3, 4), vous devez exclusivement synthétiser et restituer les informations lues et entendues sans ajouter d’opinion personnelle.',
          points: 5,
          difficulte: NiveauDifficulte.INTERMEDIAIRE
        }
      ]
    },
    {
      id: 'toefl_chap_11',
      titre: '11. Writing Section - Task 1 (Integrated Essay: Reading & Listening Synthesis)',
      dureeEstimeeMin: 55,
      description: 'Apprenez à rédiger un essai de synthèse de 180 à 220 mots en 20 minutes en confrontant les arguments du texte aux contre-arguments de la conférence audio.',
      pointsCles: [
        'Durée : 20 minutes | Longueur recommandée : 180 à 220 mots',
        'Le texte reste affiché à l’écran pendant la rédaction',
        'Structure en 4 paragraphes : Introduction + 3 Paragraphes de comparaison point par point',
        'Utilisez des verbes de rapport précis (The author claims... However, the professor refutes this by stating...)'
      ],
      rappelPrecedent: 'Nous arrivons à l’ultime section du TOEFL : le Writing. Première épreuve : l’essai intégré.',
      conseilProfesseur: 'La conférence audio contredit TOUJOURS les 3 points du texte. Si vous n’avez pas saisi la contradiction, réécoutez mentalement la prise de notes !',
      formuleCle: 'Writing Task 1 = Passage Point X + Lecture Counter-Point X (× 3)',
      astuceTerrain: 'Ne recopiez pas de longues phrases du texte. Reformulez avec vos propres mots pour maximiser votre score de vocabulaire.',
      contenuHtml: `
        <div class="space-y-6 text-slate-800">
          <h3 class="text-xl font-bold text-blue-900 border-b pb-2">11.1 Plan Standardisé du Integrated Essay</h3>
          
          <div class="space-y-3 text-sm">
            <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl">
              <strong>1. Introduction (2-3 phrases) :</strong> Présenter le thème général et indiquer que la conférence remet en question les arguments présentés dans l’article.
            </div>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <strong>2. Corps 1 (Point 1) :</strong> Expliquer le 1er argument de l’auteur, puis détailler comment le professeur le contredit avec des preuves.
            </div>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <strong>3. Corps 2 (Point 2) :</strong> Expliquer le 2ème argument de l’auteur et la réfutation du professeur.
            </div>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <strong>4. Corps 3 (Point 3) :</strong> Expliquer le 3ème argument de l’auteur et la contre-démonstration de l’audio.
            </div>
          </div>
        </div>
      `,
      exercices: [
        {
          id: 'ex_toefl_11_1',
          type: TypeQuestion.QCM,
          question: 'Pendant la rédaction du Writing Task 1, le texte de lecture reste-t-il visible à l’écran ?',
          reponsesPossibles: [
            'Non, il disparaît définitivement dès le début de la rédaction',
            'Oui, le texte de lecture réapparaît sur le côté gauche de l’écran pendant toute la phase d’écriture',
            'Seulement pendant les 2 premières minutes',
            'Seulement si vous payez un supplément'
          ],
          reponsesCorrectes: [1],
          explication: 'Pendant le Writing Task 1, le texte de lecture d’origine réapparaît à gauche de votre écran pour vous permettre de vérifier vos citations et paraphrases.',
          points: 5,
          difficulte: NiveauDifficulte.INTERMEDIAIRE
        }
      ]
    },
    {
      id: 'toefl_chap_12',
      titre: '12. Writing Section - Task 2 (Writing for an Academic Discussion)',
      dureeEstimeeMin: 50,
      description: 'Maîtrisez la nouvelle tâche d’écriture (remplaçant l’ancien Independent Essay) : participez à un forum de discussion académique en 10 minutes (100+ mots).',
      pointsCles: [
        'Durée : 10 minutes | Longueur cible : 100 à 130 mots',
        'Mise en situation : Un professeur pose une question de débat et deux étudiants (ex: Lena et Paul) ont déjà posté leur réponse',
        'Objectif : Apporter une contribution originale, soutenir son avis et réagir aux propos des camarades',
        'Syntaxe impeccable, variété lexicale et argumentation directe'
      ],
      rappelPrecedent: 'Après la synthèse intégrée, voici la tâche d’écriture moderne introduite en 2023.',
      conseilProfesseur: 'Allez droit au but dès la première phrase ! Vous n’avez que 10 minutes : pas besoin d’introduction pompeuse.',
      formuleCle: 'Academic Discussion = Direct Opinion + New Argument + Personal/Concrete Example + Engagement with Peers',
      astuceTerrain: 'Citez brièvement un des camarades (ex: "While I understand Paul’s point about cost, I believe...") pour montrer votre intégration dans la discussion.',
      contenuHtml: `
        <div class="space-y-6 text-slate-800">
          <h3 class="text-xl font-bold text-blue-900 border-b pb-2">12.1 Format de la Tâche "Writing for an Academic Discussion"</h3>
          <p>Cette épreuve simule un cours en ligne universitaire où le professeur vous demande de participer au fil de discussion.</p>

          <div class="bg-amber-50 border border-amber-300 p-4 rounded-2xl text-sm space-y-2">
            <h4 class="font-bold text-amber-900">💡 Exemple de Consigne :</h4>
            <p><strong>Prof. Baker :</strong> <em>"This week we are discussing urban planning. Should cities prioritize creating more public parks or expanding public transportation?"</em></p>
            <p><strong>Rachel :</strong> <em>"I think parks are essential for mental health..."</em></p>
            <p><strong>Mike :</strong> <em>"Public transit is more urgent to reduce traffic pollution..."</em></p>
            <p class="font-bold text-blue-900 mt-2">Votre rôle : Rédiger votre contribution (100+ mots) en apportant un nouvel éclairage.</p>
          </div>
        </div>
      `,
      exercices: [
        {
          id: 'ex_toefl_12_1',
          type: TypeQuestion.QCM,
          question: 'Quelle est la durée totale impartie pour la tâche Writing for an Academic Discussion (Writing Task 2) ?',
          reponsesPossibles: ['5 minutes', '10 minutes', '20 minutes', '30 minutes'],
          reponsesCorrectes: [1],
          explication: 'La tâche "Writing for an Academic Discussion" dispose d’un temps très condensé de 10 minutes pour lire le post du professeur/étudiants et rédiger votre contribution d’au moins 100 mots.',
          points: 5,
          difficulte: NiveauDifficulte.INTERMEDIAIRE
        }
      ]
    },
    {
      id: 'toefl_chap_13',
      titre: '13. Grammaire Académique & Connecteurs Logiques (Cohesion & Coherence)',
      dureeEstimeeMin: 50,
      description: 'Perfectionnez votre maîtrise des structures grammaticales complexes (inversion, conditionnels avancés, voix passive académique) et des connecteurs de transition.',
      pointsCles: [
        'Utilisation des propositions relatives complexes (wherein, whereby, of which)',
        'Inversions stylistiques pour emphase (Not only did the study reveal..., but it also...)',
        'Connecteurs d’opposition (whereas, nevertheless, in spite of) et de conséquence (consequently, thereby)',
        'Élimination des erreurs de concordance des temps et de désaccord sujet-verbe'
      ],
      rappelPrecedent: 'Pour obtenir plus de 25/30 en Speaking et Writing, la précision grammaticale est déterminante.',
      conseilProfesseur: 'Variez la longueur de vos phrases ! Alternez entre phrases courtes d’impact et phrases complexes bien articulées.',
      formuleCle: 'Sophistication Grammaticale = Structures Variées + Connecteurs Logiques Exacts',
      astuceTerrain: 'L’inversion "Not only... but also..." placée au Speaking ou Writing impressionne immédiatement les correcteurs ETS.',
      contenuHtml: `
        <div class="space-y-6 text-slate-800">
          <h3 class="text-xl font-bold text-blue-900 border-b pb-2">13.1 Tableau des Connecteurs Logiques Haut Niveau</h3>
          <div class="overflow-x-auto">
            <table class="w-full text-sm border border-slate-200">
              <thead class="bg-slate-100">
                <tr><th class="p-2 border">Relation Logique</th><th class="p-2 border">Connecteurs Courants</th><th class="p-2 border">Connecteurs Académiques Avancés</th></tr>
              </thead>
              <tbody>
                <tr><td class="p-2 border font-bold">Opposition</td><td class="p-2 border">but, however</td><td class="p-2 border text-blue-800 font-semibold">whereas, nevertheless, on the contrary</td></tr>
                <tr class="bg-slate-50"><td class="p-2 border font-bold">Cause / Effet</td><td class="p-2 border">so, because</td><td class="p-2 border text-blue-800 font-semibold">consequently, thereby, as a result of</td></tr>
                <tr><td class="p-2 border font-bold">Addition</td><td class="p-2 border">and, also</td><td class="p-2 border text-blue-800 font-semibold">furthermore, moreover, in addition to</td></tr>
                <tr class="bg-slate-50"><td class="p-2 border font-bold">Concession</td><td class="p-2 border">although</td><td class="p-2 border text-blue-800 font-semibold">despite the fact that, albeit</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      `,
      exercices: [
        {
          id: 'ex_toefl_13_1',
          type: TypeQuestion.QCM,
          question: 'Parmi les phrases suivantes, laquelle utilise correctement une inversion grammaticale académique ?',
          reponsesPossibles: [
            'Not only the experiment was successful, but also it broke records.',
            'Not only was the experiment successful, but it also broke previous records.',
            'Not only did the experiment was successful, but it also broke records.',
            'Not only experiment successful.'
          ],
          reponsesCorrectes: [1],
          explication: 'Après "Not only" placé en début de proposition, l’auxiliaire précède le sujet (inversion sujet-verbe) : "Not only was the experiment successful...".',
          points: 5,
          difficulte: NiveauDifficulte.AVANCE
        }
      ]
    },
    {
      id: 'toefl_chap_14',
      titre: '14. Vocabulaire Académique Avancé (Academic Word List - AWL)',
      dureeEstimeeMin: 50,
      description: 'Enrichissez votre lexique grâce à la liste de mots académiques universels (AWL) utilisés dans les 4 épreuves du TOEFL.',
      pointsCles: [
        'Familles de mots (Nom, Verbe, Adjectif, Adverbe) : ex: Hypothesis / Hypothesize / Hypothetical',
        'Collocations fréquentes en sciences et humanités (conduct research, substantial evidence, widespread consensus)',
        'Synonymes pour éviter les répétitions dans le Writing (important → paramount / crucial / essential)',
        'Mots de nuances académiques (plausible, ambiguous, predominant, inherent)'
      ],
      rappelPrecedent: 'Après la grammaire, enrichissons la dimension lexicale de votre préparation.',
      conseilProfesseur: 'Apprenez les mots par familles plutôt que sous forme de listes isolées (ex: analyze, analysis, analyst, analytical, analytically).',
      formuleCle: 'Richesse Lexicale = Variété des Synonymes + Collocations Naturelles',
      astuceTerrain: 'Remplacez les verbes pauvres comme "get", "make", "show" par "acquire", "generate", "demonstrate".',
      contenuHtml: `
        <div class="space-y-6 text-slate-800">
          <h3 class="text-xl font-bold text-blue-900 border-b pb-2">14.1 Top 10 des Verbes Académiques indispensables au TOEFL</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div class="p-3 bg-slate-50 border rounded-xl"><strong>1. Delineate :</strong> Définir avec précision, tracer.</div>
            <div class="p-3 bg-slate-50 border rounded-xl"><strong>2. Substantiate :</strong> Apporter des preuves à une affirmation.</div>
            <div class="p-3 bg-slate-50 border rounded-xl"><strong>3. Elucidate :</strong> Élucider, rendre clair un concept.</div>
            <div class="p-3 bg-slate-50 border rounded-xl"><strong>4. Refute :</strong> Réfuter, prouver la fausseté d’une thèse.</div>
            <div class="p-3 bg-slate-50 border rounded-xl"><strong>5. Corroborate :</strong> Confirmer des résultats existants.</div>
            <div class="p-3 bg-slate-50 border rounded-xl"><strong>6. Synthesize :</strong> Combiner plusieurs éléments en un tout.</div>
          </div>
        </div>
      `,
      exercices: [
        {
          id: 'ex_toefl_14_1',
          type: TypeQuestion.QCM,
          question: 'Que signifie le verbe académique "substantiate" dans un contexte de recherche scientifique ?',
          reponsesPossibles: [
            'Remplacer un composant chimique par un autre',
            'Apporter des preuves concrètes pour étayer ou valider une affirmation',
            'Abandonner un projet de recherche',
            'Soustraire des données de statistiques'
          ],
          reponsesCorrectes: [1],
          explication: '"To substantiate a claim" signifie fournir des preuves solides et factuelles pour démontrer la véracité d’une théorie.',
          points: 5,
          difficulte: NiveauDifficulte.INTERMEDIAIRE
        }
      ]
    },
    {
      id: 'toefl_chap_15',
      titre: '15. Épreuve Blanc Finale, Gestion du Stress & Stratégies de Score 100+',
      dureeEstimeeMin: 60,
      description: 'Mettez en pratique vos acquis lors de la préparation finale, organisez la veille du test et appliquez les stratégies pour dépasser les 100 points au TOEFL iBT.',
      pointsCles: [
        'Check-list du jour J : Pièce d’identité officielle valide (Passeport obligatoire dans la plupart des pays)',
        'Gestion de la fatigue : 2 heures d’effort intellectuel continu sans pause officielle longue',
        'Stratégies anti-blocage : Si vous hésitez sur une question Reading, choisissez votre meilleure estimation et avancez',
        'Confiance au Speaking : Parlez fort et clairement dans le micro sans vous soucier des voisins de salle'
      ],
      rappelPrecedent: 'Félicitations pour votre parcours à travers les 14 chapitres de préparation ! Voici le chapitre de clôture et de succès.',
      conseilProfesseur: 'La veille du test, ne faites aucun test complet ! Reposez votre cerveau, vérifiez vos papiers d’identité et dormez 8 heures.',
      formuleCle: 'Réussite TOEFL = Préparation Méthodique + Sérénité + Passeport Valide',
      astuceTerrain: 'Au centre de test, vérifiez le bon fonctionnement du casque et du microphone lors du test audio initial en parlant à voix haute.',
      contenuHtml: `
        <div class="space-y-6 text-slate-800">
          <h3 class="text-xl font-bold text-blue-900 border-b pb-2">15.1 Check-List Finale du Jour du Test</h3>
          
          <div class="bg-emerald-50 border border-emerald-300 p-4 rounded-2xl space-y-2 text-sm">
            <h4 class="font-bold text-emerald-900 text-base">✅ À faire impérativement :</h4>
            <ul class="list-disc list-inside space-y-1 text-slate-700">
              <li>Arriver au centre de test 30 minutes avant l'heure convoquée.</li>
              <li>Présenter votre <strong>Passeport original en cours de validité</strong> (ou CNI selon réglementation nationale ETS).</li>
              <li>Ajuster votre casque audio dès l'épreuve de réglage ("Describe the city you live in").</li>
              <li>Respirer calmement et faire confiance à la méthodologie acquise durant les 15 chapitres !</li>
            </ul>
          </div>

          <div class="p-4 bg-indigo-900 text-white rounded-2xl text-center">
            <h4 class="font-bold text-lg text-amber-300 mb-1">🎉 Bravo pour votre préparation !</h4>
            <p class="text-sm">Vous êtes désormais prêt(e) à passer l'examen officiel et à obtenir votre Brevet/Certificat d'Anglais Académique TOEFL.</p>
          </div>
        </div>
      `,
      exercices: [
        {
          id: 'ex_toefl_15_1',
          type: TypeQuestion.VRAI_FAUX,
          question: 'Il est préférable de laisser une question sans réponse dans la section Reading si vous n’êtes pas sûr(e) plutôt que de deviner.',
          reponsesPossibles: ['Vrai', 'Faux'],
          reponsesCorrectes: [1],
          explication: 'Faux ! Au TOEFL iBT, il n’y a aucune pénalité pour les mauvaises réponses (pas de points négatifs). Vous devez TOUJOURS sélectionner une réponse avant la fin du chronomètre.',
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        }
      ]
    }
  ]
};
