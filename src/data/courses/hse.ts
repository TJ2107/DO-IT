import { Domaine, NiveauDifficulte, TypeQuestion, Cours } from '../../types';

export const COURSE_HSE: Cours = {
  id: 'hse_101',
  domaine: Domaine.HSE,
  domaineNom: 'HSE (Sécurité & Environnement)',
  icon: '🛡️',
  titre: "Hygiène, Sécurité, Environnement (HSE) & Normes ISO",
  description: 'Cursus professionnel certifiant en 15 chapitres : Document Unique (DUERP), normes ISO 45001 / ISO 14001, analyse d’accidents (Arbre des causes), risques chimiques CLP/REACH, ATEX, travail en hauteur et ergonomie.',
  niveau: NiveauDifficulte.DEBUTANT,
  dureeHeures: 45,
  colorClass: 'from-emerald-700 to-green-800',
  titreBrevet: "Brevet Professionnel de Maîtrise HSE & Sécurité Industrielle",
  objectifs: [
    'Rédiger et actualiser le Document Unique d’Évaluation des Risques Professionnels (DUERP)',
    'Déployer les systèmes de management intégrés ISO 45001 (Santé/Sécurité) et ISO 14001 (Environnement)',
    'Mener une analyse d’arbre des causes suite à un accident du travail et calculer les taux TF/TG',
    'Gérer les risques chimiques selon la réglementation REACH et l’étiquetage CLP / FDS',
    'Mettre en conformité les zones à atmosphères explosives (ATEX 1999/92/CE)'
  ],
  competences: [
    'DUERP & Évaluation des Risques Professionnels',
    'Système ISO 45001 & ISO 14001',
    'Calcul des Taux de Fréquence (TF) & Gravité (TG)',
    'Zonage ATEX (Gaz 0/1/2, Poussières 20/21/22)',
    'Gestion des Produits Chimiques (CLP / FDS 16 sections)',
    'Sécurité Travaux en Hauteur & Échafaudages',
    'Audits HSE & Culture de Sécurité Comportementale'
  ],
  preRequis: ['Culture générale du milieu professionnel'],
  certifiant: true,
  scoreMinValidation: 0.7,
  dureeValiditeMois: 36,
  devoirs: [
    {
      id: 'hse_dev_1',
      numero: 1,
      titre: 'Devoir n°1 : Évaluation des Risques du DUERP & Calculs Statistiques d’Accidents',
      chapitresCouverts: 'Chapitres 1 à 5',
      dureeEstimeeMin: 45,
      noteMax: 20,
      coefficient: 2,
      description: 'Calcul du Taux de Fréquence (TF) et du Taux de Gravité (TG) d’un site industriel de 500 salariés et rédaction d’une unité de travail au DUERP.',
      miseEnSituation: 'Une entreprise industrielle de 500 salariés a totalisé 800 000 heures travaillées dans l’année. Elle a enregistré 6 accidents avec arrêt de travail entraînant un cumul de 120 jours d’incapacité temporaire.',
      questions: [
        {
          id: 'q1',
          titre: 'Calcul du Taux de Fréquence (TF)',
          enonce: 'Selon la formule normalisée TF = (Nombre d’accidents avec arrêt × 1 000 000) / Heures travaillées, quelle est la valeur du TF ?',
          points: 7,
          type: 'calcul',
          options: ['7.5', '15.0', '0.75', '6.0'],
          reponseCorrecteIndex: 0,
          solutionDetaillee: 'TF = (6 × 1 000 000) / 800 000 = 6 000 000 / 800 000 = 7.5.',
          baremeDetail: ['Formule normalisée du TF : 3 pts', 'Calcul exact 7.5 : 4 pts']
        },
        {
          id: 'q2',
          titre: 'Calcul du Taux de Gravité (TG)',
          enonce: 'Selon la formule TG = (Nombre de journées perdues × 1 000) / Heures travaillées, quelle est la valeur du TG ?',
          points: 7,
          type: 'calcul',
          options: ['0.15', '1.50', '0.015', '12.0'],
          reponseCorrecteIndex: 0,
          solutionDetaillee: 'TG = (120 × 1 000) / 800 000 = 120 000 / 800 000 = 0.15.',
          baremeDetail: ['Formule normalisée du TG : 3 pts', 'Calcul exact 0.15 : 4 pts']
        },
        {
          id: 'q3',
          titre: 'Hiérarchie des 9 principes généraux de prévention',
          enonce: 'Selon le Code du Travail (Article L4121-2), quelle est la toute première priorité absolue de la hiérarchie de prévention ?',
          points: 6,
          type: 'cas_pratique',
          options: [
            '1. Éviter les risques (supprimer le danger à la source)',
            'Distribuer des gants de protection',
            'Afficher un panneau d\'avertissement',
            'Organiser une réunion de crise'
          ],
          reponseCorrecteIndex: 0,
          solutionDetaillee: 'Le 1er principe général de prévention est impérativement d\'éviter le risque en supprimant le danger.',
          baremeDetail: ['Connaissance de l\'article L4121-2 : 3 pts', 'Principe de suppression à la source : 3 pts']
        }
      ]
    }
  ],
  chapitres: [
    {
      id: 'hse_ch1',
      titre: '1. Les 9 Principes Généraux de Prévention & Cadre Réglementaire',
      dureeEstimeeMin: 35,
      description: 'Obligation de sécurité de l’employeur, les 9 principes généraux (éviter, évaluer, combattre à la source, adapter le travail, tenir compte de l’évolution de la technique, remplacer le dangereux, planifier, protections collectives prioritaires, instructions claires).',
      pointsCles: [
        'Article L4121-2 du Code du Travail : les 9 principes généraux de prévention',
        '1er principe : Éviter les risques en supprimant le danger à la source',
        'Priorité stricte des Équipements de Protection Collective (EPC) sur les Équipements Individuels (EPI)',
        'Obligation légale de sécurité et de résultat incombant à l\'employeur',
        'Droit d\'alerte et droit de retrait du salarié en cas de danger grave et imminent (DGI)'
      ],
      formuleCle: '\\text{Hiérarchie de Prévention} : \\text{Suppression} > \\text{Substitution} > \\text{EPC} > \\text{EPI}',
      conseilProfesseur: 'Lors d\'un audit de poste, si vous observez des ouvriers portant des masques respiratoires FFP3 pour poncer du bois dans un atelier clos, n\'achetez pas de meilleurs masques : installez d\'abord un système de captage et d\'aspiration localisé à la source (EPC).',
      astuceTerrain: 'Pour mémoriser la hiérarchie : l\'EPI ne protège que le porteur et dépend de sa bonne volonté ; l\'EPC protège automatiquement tout le monde dans l\'atelier sans intervention humaine.',
      contenuHtml: `
        <h3>1.1 Les 9 Principes Généraux de Prévention (Code du Travail)</h3>
        <p>Toute démarche HSE moderne s'articule impérativement autour de la hiérarchie des 9 principes fondamentaux :</p>
        <ol class="list-decimal pl-6 space-y-1 text-sm my-3">
          <li><strong>Éviter les risques :</strong> Supprimer l'opération dangereuse ou le produit toxique.</li>
          <li><strong>Évaluer les risques qui ne peuvent pas être évités :</strong> Quantifier probabilité et gravité.</li>
          <li><strong>Combattre les risques à la source :</strong> Installer des capotages insonorisants directement sur le moteur bruyant.</li>
          <li><strong>Adapter le travail à l'homme :</strong> Ergonomie des postes, choix des outillages, limitation des cadences monotones.</li>
          <li><strong>Tenir compte de l'évolution de la technique :</strong> Remplacer les machines anciennes par des équipements aux normes actuelles.</li>
          <li><strong>Remplacer ce qui est dangereux par ce qui l'est moins :</strong> Substituer un solvant cancérigène par une solution aqueuse.</li>
          <li><strong>Planifier la prévention :</strong> Intégrer technique, organisation, conditions de travail et relations sociales.</li>
          <li><strong>Prendre des mesures de protection collective en leur donnant la priorité sur les mesures individuelles (EPC > EPI).</strong></li>
          <li><strong>Donner les instructions appropriées aux travailleurs :</strong> Formations sécurité, affichages, consignes écrites.</li>
        </ol>
      `,
      exercices: [
        {
          id: 'hse_ch1_ex1',
          type: TypeQuestion.QCM,
          question: "Dans la hiérarchie des mesures de prévention, quelle mesure doit toujours être privilégiée en priorité par rapport aux Équipements de Protection Individuelle (EPI) ?",
          reponsesPossibles: [
            'Les Équipements de Protection Collective (EPC, ex: garde-corps, captage à la source)',
            'Une prime de risque financière',
            'L\'achat d\'EPI plus confortables',
            'Une formation accélérée'
          ],
          reponsesCorrectes: [0],
          explication: "La réglementation impose d'isoler ou de protéger collectivement l'ensemble des salariés avant de recourir aux protections individuelles.",
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        }
      ]
    },
    {
      id: 'hse_ch2',
      titre: '2. Le Document Unique (DUERP) & Évaluation des Risques',
      dureeEstimeeMin: 45,
      description: 'Découpage en Unités de Travail (UT), matrice Fréquence / Gravité, plan d’action annuel de prévention et mise à jour obligatoire (loi Santé au travail).',
      pointsCles: [
        'DUERP : Document Unique d\'Évaluation des Risques Professionnels (obligatoire dès 1 salarié)',
        'Découpage du site en Unités de Travail (UT) homogènes d\'exposition aux risques',
        'Matrice d\'évaluation du Risque Brut ($R = F \\times G$) et Risque Résiduel après mesures',
        'Plan d\'Actions de Prévention et d\'Amélioration des Conditions de Travail (PAPRIPACT)',
        'Conservation des versions antérieures du DUERP pendant une durée légale minimale de 40 ans'
      ],
      formuleCle: '\\text{Niveau de Risque } R = \\text{Fréquence d\'exposition (F)} \\times \\text{Gravité potentielle (G)}',
      conseilProfesseur: 'Le DUERP n\'est pas un document administratif figé à ranger dans une armoire : c\'est un outil vivant de pilotage. Chaque action du plan doit avoir un pilote désigné, un budget alloué et une date d\'échéance précise.',
      astuceTerrain: 'Pour impliquer le personnel lors de la cotation des risques, organisez des "Marches de Sécurité" (Gemba Walks) en binôme avec les opérateurs directement au poste de travail.',
      contenuHtml: `
        <h3>2.1 Méthodologie d'Élaboration du DUERP</h3>
        <p>L'évaluation des risques se déroule en 4 étapes itératives :</p>
        <ul>
          <li><strong>Étape 1 : Définition des Unités de Travail (UT) :</strong> Regrouper les postes soumis aux mêmes risques (ex: UT Atelier Chaudronnerie, UT Logistique Magasin, UT Bureaux Études).</li>
          <li><strong>Étape 2 : Identification des Dangers et Risques :</strong> Pour chaque UT, inventorier les situations dangereuses (bruit, chutes, produits chimiques, gestes répétitifs).</li>
          <li><strong>Étape 3 : Cotation et Hiérarchisation :</strong> Évaluer sur échelle de 1 à 4 la fréquence d'exposition et la gravité maximale prévisible.</li>
          <li><strong>Étape 4 : Plan d'Action Annuel :</strong> Programmer les actions correctives prioritaires selon le niveau de risque obtenu.</li>
        </ul>
      `,
      exercices: [
        {
          id: 'hse_ch2_ex1',
          type: TypeQuestion.QCM,
          question: "À quelle fréquence minimale le Document Unique d'Évaluation des Risques Professionnels (DUERP) doit-il être réévalué dans les entreprises d'au moins 11 salariés ?",
          reponsesPossibles: [
            'Au moins une fois par an (et lors de tout aménagement modifiant les conditions de travail)',
            'Une fois tous les 10 ans',
            'Uniquement après un accident mortel',
            'Jamais après sa création'
          ],
          reponsesCorrectes: [0],
          explication: "Le DUERP doit faire l'objet d'une mise à jour annuelle minimale ainsi que lors de toute modification substantielle d'un poste.",
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        }
      ]
    },
    {
      id: 'hse_ch3',
      titre: '3. Indicateurs Statistiques : Taux de Fréquence (TF) & Taux de Gravité (TG)',
      dureeEstimeeMin: 40,
      description: 'Calculs officiels CNAM/Assurance Maladie, taux de fréquence 1 (TF1), taux de gravité (TG), indice de fréquence (IF) et coût direct/indirect des accidents.',
      pointsCles: [
        'Taux de Fréquence (TF) : $TF = \\frac{\\text{Nombre d\'accidents avec arrêt} \\times 1\\,000\\,000}{\\text{Heures travaillées}}$',
        'Taux de Gravité (TG) : $TG = \\frac{\\text{Nombre de jours d\'arrêt perdus} \\times 1\\,000}{\\text{Heures travaillées}}$',
        'Indice de Fréquence (IF) : $IF = \\frac{\\text{Accidents avec arrêt}}{\\text{Nombre de salariés}} \\times 1\\,000$',
        'Coûts indirects cachés (perte de production, formation remplaçant, temps d\'enquête) $\\approx 3$ à $5 \\times$ le coût direct'
      ],
      formuleCle: 'TF = \\frac{N_{\\text{accidents}} \\times 10^6}{\\sum H_{\\text{travaillées}}}, \\quad TG = \\frac{N_{\\text{jours perdus}} \\times 10^3}{\\sum H_{\\text{travaillées}}}',
      conseilProfesseur: 'Attention au dénominateur : ce sont bien les HEURES EFFECTIVEMENT TRAVAILLÉES (excluant congés, arrêts maladie et RTT) qui doivent être prises en compte.',
      astuceTerrain: 'Pour un suivi mensuel dynamique dans l\'usine, affichez le TF glissant sur 12 mois (Rolling 12 Months) pour neutraliser les fluctuations saisonnières.',
      contenuHtml: `
        <h3>3.1 Calculs Statistiques et Benchmarking HSE</h3>
        <p>Les indicateurs normalisés permettent de comparer la sinistralité d'une usine avec les moyennes nationales de sa branche professionnelle :</p>

        <div class="bg-slate-900 text-slate-100 p-4 rounded-lg my-4 font-mono text-sm overflow-x-auto">
          <p class="text-emerald-400 font-bold mb-2">Exemple concret :</p>
          <pre>Site de 200 salariés travaillant 320 000 heures/an.
Bilan de l'année : 4 accidents avec arrêt totalisant 80 jours d'absence.

TF = (4 × 1 000 000) / 320 000 = 12.5
TG = (80 × 1 000) / 320 000 = 0.25
IF = (4 / 200) × 1 000 = 20 accidents pour 1 000 salariés.</pre>
        </div>
      `,
      exercices: [
        {
          id: 'hse_ch3_ex1',
          type: TypeQuestion.CHIFFREE,
          question: "Pour 500 000 heures travaillées et 2 accidents avec arrêt, quelle est la valeur du Taux de Fréquence (TF) ?",
          reponsesPossibles: ['4.0', '2.0', '10.0', '0.4'],
          reponsesCorrectes: [0],
          explication: "TF = (2 × 1 000 000) / 500 000 = 2 000 000 / 500 000 = 4.0.",
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        }
      ]
    },
    {
      id: 'hse_ch4',
      titre: '4. Analyse des Accidents du Travail par l’Arbre des Causes (INRS)',
      dureeEstimeeMin: 45,
      description: 'Méthode INRS, recueil des faits objectifs (faits observés, sans jugement de valeur), liaisons logiques (enchaînement, conjonction, disjonction), recherche des causes profondes d’organisation.',
      pointsCles: [
        'Méthode INRS de l\'Arbre des Causes : recherche des causes profondes sans culpabilisation',
        'Distinction stricte entre faits objectifs vérifiables et opinions/jugements de valeur',
        'Liaisons logiques : Enchaînement séquentiel ($A \\rightarrow B$), Conjonction ($A$ et $B \\rightarrow C$), Disjonction ($A \\rightarrow B$ et $C$)',
        'Remonter systématiquement jusqu\'aux causes managériales et organisationnelles',
        'Critères d\'efficacité des mesures correctives selon la grille INRS'
      ],
      formuleCle: '\\text{Question clé} : \\text{"Qu\'a-t-il fallu pour que ce fait se produise ?"} \\quad \\text{et} \\quad \\text{"Était-ce nécessaire et suffisant ?"}',
      conseilProfesseur: 'Bannissez de vos rapports d\'accidents les formules subjectives comme "manque d\'attention" ou "fausse manœuvre". Écrivez des faits précis : "la pédale était glissante à cause d\'un écoulement d\'huile" et "la notice de réglage n\'était pas présente au poste".',
      astuceTerrain: 'Réalisez l\'enquête arbre des causes dans les 24 heures suivant l\'événement, directement sur le lieu de l\'accident avec la victime et les témoins, avant que les souvenirs ne s\'altèrent.',
      contenuHtml: `
        <h3>4.1 Construction Graphique de l'Arbre des Causes</h3>
        <p>L'arbre se construit de droite à gauche, en partant de la blessure finale et en posant récursivement la question : <em>"Qu'a-t-il fallu pour que cela arrive ?"</em>.</p>
      `,
      exercices: [
        {
          id: 'hse_ch4_ex1',
          type: TypeQuestion.QCM,
          question: "Lors de la collecte d'informations pour construire l'arbre des causes selon la méthode INRS, quelle règle fondamentale doit être respectée ?",
          reponsesPossibles: [
            'Ne recueillir que des faits précis, concrets, vérifiés et dépourvus de jugements de valeur ou d\'opinions subjectives',
            'Désigner immédiatement le responsable fautif',
            'Interroger uniquement la direction',
            'Rédiger un rapport en moins de 5 minutes'
          ],
          reponsesCorrectes: [0],
          explication: "L'analyse repose exclusivement sur des faits objectifs (ex: 'Le sol était mouillé') et non sur des jugements ('Il a été distrait').",
          points: 5,
          difficulte: NiveauDifficulte.INTERMEDIAIRE
        }
      ]
    },
    {
      id: 'hse_ch5',
      titre: '5. Risques Chimiques : Règlements REACH & CLP / SGH',
      dureeEstimeeMin: 45,
      description: 'Les 9 pictogrammes de danger SGH, mentions de danger H (Hazard) et conseils de prudence P (Precaution), Fiches de Données de Sécurité (FDS en 16 rubriques) et Valeurs Limites d’Exposition Professionnelle (VLEP 8h / VLEP CT).',
      pointsCles: [
        'Règlement CLP (Classification, Labelling, Packaging) aligné sur le Système Général Harmonisé (SGH)',
        '9 pictogrammes de danger standardisés (losanges rouges sur fond blanc)',
        'Fiche de Données de Sécurité (FDS) normalisée en 16 rubriques obligatoires (REACH)',
        'Mentions H (Danger) et P (Prudence)',
        'Substances CMR (Cancérogènes, Mutagènes, Reprotoxiques) : obligation stricte de substitution',
        'VLEP-8h (Valeur Limite d\'Exposition Professionnelle sur 8h) et VLCT (Court Terme 15 min)'
      ],
      formuleCle: '\\text{Règle de Stockage} : \\text{Ne JAMAIS stocker Acides et Bases ensemble} \\quad | \\quad \\text{Rétention obligatoire}',
      conseilProfesseur: 'La rubrique 8 de la FDS est la plus importante pour le technicien HSE : elle liste les VLEP réglementaires et spécifie la matière exacte des gants de protection (ex: gants en nitrile, butyle ou néoprène selon la perméation du solvant).',
      astuceTerrain: 'Chaque flacon ou bidon reconditionné dans l\'atelier DOIT obligatoirement comporter l\'étiquetage d\'origine avec les pictogrammes. L\'utilisation de bouteilles alimentaires pour des produits chimiques est formellement interdite et passible de poursuites pénales.',
      contenuHtml: `
        <h3>5.1 Structure des 16 Rubriques de la FDS Européenne</h3>
        <ol class="list-decimal pl-6 text-xs sm:text-sm space-y-1 my-3">
          <li>Identification de la substance/mélange et de la société</li>
          <li>Identification des dangers (pictogrammes, mentions H/P)</li>
          <li>Composition / informations sur les composants (CAS, n° CE)</li>
          <li>Premiers secours</li>
          <li>Mesures de lutte contre l'incendie (agents extincteurs adaptés)</li>
          <li>Mesures en cas de dispersion accidentelle</li>
          <li>Manipulation et stockage (incompatibilités chimiques)</li>
          <li><strong>Contrôle de l'exposition / protection individuelle (EPI, VLEP)</strong></li>
          <li>Propriétés physiques et chimiques (point d'éclair, pH, densité)</li>
          <li>Stabilité et réactivité (polymérisation, décomposition)</li>
          <li>Informations toxicologiques (DL50, effets aigus/chroniques)</li>
          <li>Informations écologiques (écotoxicité pour la faune/flore)</li>
          <li>Considérations relatives à l'élimination (filière déchets DIS)</li>
          <li>Informations relatives au transport (code ADR)</li>
          <li>Informations réglementaires</li>
          <li>Autres informations (date de révision)</li>
        </ol>
      `,
      exercices: [
        {
          id: 'hse_ch5_ex1',
          type: TypeQuestion.QCM,
          question: "Combien de rubriques obligatoires standardisées comprend une Fiche de Données de Sécurité (FDS) selon le règlement européen REACH ?",
          reponsesPossibles: ['16 rubriques', '8 rubriques', '5 rubriques', '24 rubriques'],
          reponsesCorrectes: [0],
          explication: "La norme européenne REACH impose un format universel strict et exhaustif structuré en 16 rubriques.",
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        }
      ]
    },
    {
      id: 'hse_ch6',
      titre: '6. Risques d’Explosion en Milieu Industriel (Directives ATEX)',
      dureeEstimeeMin: 45,
      description: 'Hexagone de l’explosion (Combustible, Comburant, Source d’ignition, Mélange, Confinement, Suspension), zonage Gaz (Zones 0, 1, 2) et Poussières (Zones 20, 21, 22), matériel certifié Ex.',
      pointsCles: [
        'Hexagone de l\'explosion : Combustible + Comburant ($O_2$) + Source d\'ignition + Concentration (entre LIE et LSE) + Suspension/Nuage + Confinement',
        'Zonage Gaz / Vapeurs : Zone 0 (permanent), Zone 1 (occasionnel en fonctionnement normal), Zone 2 (anormal / rare)',
        'Zonage Poussières : Zone 20 (permanent), Zone 21 (occasionnel), Zone 22 (anormal)',
        'Matériel certifié ATEX avec marquage normalisé Ex (Catégories 1G/1D, 2G/2D, 3G/3D)',
        'Document Relatif à la Protection Contre les Explosions (DRPCE)'
      ],
      formuleCle: '\\text{Zone ATEX} : \\text{LIE} \\le \\text{Concentration} \\le \\text{LSE} \\implies \\text{Risque d\'Explosion Immédiat}',
      conseilProfesseur: 'Méfiez-vous des poussières réputées "inoffensives" : la farine, le sucre, le bois, le charbon ou la poudre d\'aluminium en suspension dans l\'air peuvent créer des explosions de poussières dévastatrices d\'une violence extrême.',
      astuceTerrain: 'Dans une zone ATEX, les outils en acier classique qui provoquent des étincelles par choc sont proscrits : utilisez exclusivement de l\'outillage anti-déflagrant anti-étincelles en alliage Cuivre-Béryllium (Cu-Be) ou Bronze d\'aluminium.',
      contenuHtml: `
        <h3>6.1 Classification du Zonage ATEX Européen (Directive 1999/92/CE)</h3>
        <table class="w-full border-collapse my-4 text-sm border border-slate-300 dark:border-slate-700">
          <thead>
            <tr class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100">
              <th class="border p-2">Présence de l'Atmosphère Explosive</th>
              <th class="border p-2">Gaz, Vapeurs, Brouillards</th>
              <th class="border p-2">Poussières Combustibles</th>
              <th class="border p-2">Catégorie Matériel Ex Requis</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border p-2 font-bold text-rose-600">Permanente, fréquente ou longue durée (&gt; 1 000 h/an)</td>
              <td class="border p-2 text-center font-bold">Zone 0</td>
              <td class="border p-2 text-center font-bold">Zone 20</td>
              <td class="border p-2">Catégorie 1 (Ex ia, sécurité très haute)</td>
            </tr>
            <tr>
              <td class="border p-2 font-bold text-amber-600">Occasionnelle en fonctionnement normal (10 à 1 000 h/an)</td>
              <td class="border p-2 text-center font-bold">Zone 1</td>
              <td class="border p-2 text-center font-bold">Zone 21</td>
              <td class="border p-2">Catégorie 2 (Ex d, Ex e, Ex p)</td>
            </tr>
            <tr>
              <td class="border p-2 font-bold text-emerald-600">Rare et de courte durée (&lt; 10 h/an)</td>
              <td class="border p-2 text-center font-bold">Zone 2</td>
              <td class="border p-2 text-center font-bold">Zone 22</td>
              <td class="border p-2">Catégorie 3 (Ex nA, Ex tc)</td>
            </tr>
          </tbody>
        </table>
      `,
      exercices: [
        {
          id: 'hse_ch6_ex1',
          type: TypeQuestion.QCM,
          question: "Comment classe-t-on une zone où une atmosphère explosive sous forme de gaz ou vapeur est présente en permanence ou pendant de longues périodes (ex: intérieur d'une cuve) ?",
          reponsesPossibles: ['Zone 0', 'Zone 1', 'Zone 2', 'Zone non classée'],
          reponsesCorrectes: [0],
          explication: "La Zone 0 correspond à la présence continue ou permanente du mélange explosif gazeux.",
          points: 5,
          difficulte: NiveauDifficulte.INTERMEDIAIRE
        }
      ]
    },
    {
      id: 'hse_ch7',
      titre: '7. Travaux en Hauteur & Prévention des Chutes',
      dureeEstimeeMin: 40,
      description: 'Échafaudages fixes et roulants (R408 / R457), lignes de vie, harnais antichute avec absorbeur d’énergie (EN 361 / EN 355), calcul du tirant d’air et nacelles PEMP (CACES R486).',
      pointsCles: [
        '2ème cause de mortalité au travail : le travail en hauteur',
        'L\'échelle est un moyen d\'accès temporaire et JAMAIS un poste de travail',
        'Protection collective prioritaire : garde-corps normalisés (lisse 1m, sous-lisse 0.45m, plinthe 15cm)',
        'Harnais antichute EN 361 avec longe à absorbeur d\'énergie à déchirement EN 355',
        'Calcul du Tirant d\'Air impératif pour éviter l\'impact au sol avant arrêt de la chute'
      ],
      formuleCle: '\\text{Tirant d\'Air Minimal} = L_{\\text{longe}} + \\Delta L_{\\text{absorbeur}} + H_{\\text{corps (1.5m)}} + M_{\\text{sécurité (1.0m)}}',
      conseilProfesseur: 'Sur une longe antichute de 2 mètres avec absorbeur pouvant se déployer de 1.75 mètre, le tirant d\'air nécessaire sous le point d\'ancrage est de : $2.0 + 1.75 + 1.5 + 1.0 = 6.25\\text{ mètres}$ ! À une hauteur inférieure à 6m, une longe simple avec absorbeur est dangereuse : utilisez un enrouleur à rappel automatique (stop-chute).',
      astuceTerrain: 'Vérifiez la date de contrôle annuel des harnais et longes (marquage CE + fiche de vie individuelle). Tout équipement ayant arrêté une chute réelle doit être immédiatement détruit et mis au rebut.',
      contenuHtml: `
        <h3>7.1 Calcul Détaillé du Tirant d'Air</h3>
        <p>Le tirant d'air représente la hauteur libre minimale requise entre le point d'ancrage et le sol ou tout obstacle inférieur :</p>
        
        <div class="bg-slate-900 text-slate-100 p-4 rounded-lg my-4 font-mono text-sm overflow-x-auto">
          <pre>Point d'Ancrage
  |
  |--- Longueur de la longe (ex: 2.0 m)
  |--- Déploiement maximal de l'absorbeur d'énergie (ex: 1.75 m)
  |--- Distance entre l'anneau dorsal et les pieds de l'ouvrier (1.5 m)
  |--- Marge de sécurité réglementaire (1.0 m)
  v
Sol ou obstacle (Tirant d'Air Total = 6.25 m minimum requis)</pre>
        </div>
      `,
      exercices: [
        {
          id: 'hse_ch7_ex1',
          type: TypeQuestion.QCM,
          question: "Pourquoi est-il indispensable de calculer précisément le 'Tirant d'air' avant d'utiliser un système d'arrêt des chutes avec longe à absorbeur d'énergie ?",
          reponsesPossibles: [
            'Pour s\'assurer que l\'opérateur ne heurtera pas le sol ou un obstacle inférieur avant le déploiement complet de l\'absorbeur',
            'Pour mesurer la vitesse du vent',
            'Pour calculer le poids du harnais',
            'Pour choisir la couleur de la corde'
          ],
          reponsesCorrectes: [0],
          explication: "Le tirant d'air garantit qu'il y a suffisamment d'espace vertical libre sous les pieds de l'opérateur en cas de chute.",
          points: 5,
          difficulte: NiveauDifficulte.INTERMEDIAIRE
        }
      ]
    },
    {
      id: 'hse_ch8',
      titre: '8. Ergonomie & Prévention des Troubles Musculo-Squelettiques (TMS)',
      dureeEstimeeMin: 40,
      description: 'Facteurs de risque biomécaniques (répétitivité, efforts excessifs, postures contraignantes), méthode RULA / REBA, norme NF X35-109 (limites de port manuel de charge : 25 kg pour homme, 15 kg pour femme).',
      pointsCles: [
        'Les TMS représentent plus de 87% des maladies professionnelles indemnisées par l\'Assurance Maladie',
        'Zones corporelles les plus touchées : rachis lombaire, épaules (coiffe des rotateurs), coudes, poignets (canal carpien)',
        'Facteurs de risque : biomécaniques (postures extrêmes, efforts, répétitivité), organisationnels (rythme imposé) et psychosociaux (stress)',
        'Norme NF X35-109 : port manuel de charge maximal recommandé de 25 kg pour un homme adulte',
        'Équipements d\'aide à la manutention : palans, tables élévatrices à niveau constant, manipulateurs à ventouses'
      ],
      formuleCle: '\\text{Équation NIOSH} : \\text{RWL} = LC \\times HM \\times VM \\times DM \\times AM \\times FM \\times CM \\quad (\\text{Charge Limite Recommandée})',
      conseilProfesseur: 'Pour soulager les lombaires lors du levage d\'un carton au sol : pliez les genoux en gardant le dos droit, serrez la charge au plus près du torse et pivotez avec les pieds sans jamais effectuer de torsion du buste sous charge.',
      astuceTerrain: 'Réglez la hauteur des plans de travail à hauteur des coudes : légèrement en dessous pour les travaux nécessitant de la force, et légèrement au-dessus pour les travaux de précision visuelle.',
      contenuHtml: `
        <h3>8.1 Grille d'Évaluation Ergonomique et Facteurs de Risque</h3>
        <p>L'analyse ergonomique s'appuie sur la méthode RULA (Rapid Upper Limb Assessment) pour coter les angles articulaires extrêmes.</p>
      `,
      exercices: [
        {
          id: 'hse_ch8_ex1',
          type: TypeQuestion.QCM,
          question: "Selon les recommandations ergonomiques et la norme française de manutention manuelle NF X35-109, quelle est la masse unitaire maximale recommandée pour un homme adulte en condition normale ?",
          reponsesPossibles: ['25 kg (limite absolue exceptionnelle à 50 kg)', '100 kg', '5 kg', '75 kg'],
          reponsesCorrectes: [0],
          explication: "La norme NF X35-109 fixe à 25 kg la charge maximale de manutention manuelle habituelle pour un homme.",
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        }
      ]
    },
    {
      id: 'hse_ch9',
      titre: '9. Risque Incendie & Évacuation des Bâtiments Industriels',
      dureeEstimeeMin: 40,
      description: 'Triangle du feu (Combustible, Comburant, Énergie d’activation), classes de feux (A : solides, B : liquides, C : gaz, D : métaux, F : huiles de cuisson), extincteurs (Eau pulvérisée + additif, CO2, Poudre ABC) et désenfumage.',
      pointsCles: [
        'Triangle du feu : Combustible + Comburant ($O_2$) + Énergie d\'activation (chaleur, étincelle)',
        'Classes de feux : A (Solides/Braises), B (Liquides inflammables), C (Gaz), D (Métaux), F (Huiles de friture)',
        'Extincteur à Eau pulvérisée avec additif AFFF : idéal pour feux de classe A et B',
        'Extincteur au $CO_2$ (Neige carbonique) : indispensable pour les armoires électriques et salles serveurs (aucun résidu)',
        'Extincteur à Poudre polyvalente ABC : très efficace mais résidus très corrosifs pour l\'électronique'
      ],
      formuleCle: '\\text{Triangle du Feu} : \\text{Combustible} + \\text{Comburant} + \\text{Chaleur} \\implies \\text{Flammes / Incendie}',
      conseilProfesseur: 'Lors de l\'utilisation d\'un extincteur $CO_2$, ne tenez jamais le diffuseur (tromblon) en plastique avec la main nue : la détente rapide du gaz liquéfié abaisse la température à $-78^\\circ C$, provoquant des brûlures cryogéniques instantanées.',
      astuceTerrain: 'Les exercices d\'évacuation générale doivent être réalisés au moins tous les 6 mois en entreprise (Article R4227-39). Chronométrez le temps d\'évacuation totale et vérifiez l\'appel nominatif aux points de rassemblement.',
      contenuHtml: `
        <h3>9.1 Guide de Choix des Extincteurs Portatifs</h3>
        <table class="w-full border-collapse my-4 text-sm border border-slate-300 dark:border-slate-700">
          <thead>
            <tr class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100">
              <th class="border p-2">Agent Extincteur</th>
              <th class="border p-2">Classe A (Bois, Carton)</th>
              <th class="border p-2">Classe B (Hydrocarbures)</th>
              <th class="border p-2">Matériel Électrique sous tension</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border p-2 font-bold">Eau pulvérisée + additif</td>
              <td class="border p-2 text-emerald-600 font-bold">EXCELLENT (refroidissement)</td>
              <td class="border p-2 text-emerald-600 font-bold">TRÈS BON (film flottant)</td>
              <td class="border p-2 text-amber-600">Jusqu'à 1 000 V à > 1m</td>
            </tr>
            <tr>
              <td class="border p-2 font-bold">Dioxyde de Carbone ($CO_2$)</td>
              <td class="border p-2 text-slate-400">Inefficace (feux profonds)</td>
              <td class="border p-2 text-emerald-600 font-bold">BON (étouffement)</td>
              <td class="border p-2 text-emerald-600 font-bold">OPTIMAL (zéro résidu)</td>
            </tr>
            <tr>
              <td class="border p-2 font-bold">Poudre ABC</td>
              <td class="border p-2 text-emerald-600 font-bold">TRÈS BON</td>
              <td class="border p-2 text-emerald-600 font-bold">TRÈS BON</td>
              <td class="border p-2 text-rose-600 font-bold">DÉCONSEILLÉ (corrosif)</td>
            </tr>
          </tbody>
        </table>
      `,
      exercices: [
        {
          id: 'hse_ch9_ex1',
          type: TypeQuestion.QCM,
          question: "Quel type d'extincteur est spécialement recommandé pour éteindre un départ de feu dans une armoire électrique sous tension sans endommager les circuits par des résidus conducteurs ?",
          reponsesPossibles: [
            'Extincteur au dioxyde de carbone (CO2)',
            'Extincteur à eau pure sous pression',
            'Sceau de terre humide',
            'Couverture en laine'
          ],
          reponsesCorrectes: [0],
          explication: "Le gaz CO2 étouffe le feu par abaissement de la concentration d'oxygène et refroidissement sans laisser aucun résidu ni court-circuiter l'appareillage.",
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        }
      ]
    },
    {
      id: 'hse_ch10',
      titre: '10. Norme ISO 45001 : Système de Management de la Santé et Sécurité au Travail (SST)',
      dureeEstimeeMin: 45,
      description: 'Structure HLS (High Level Structure), cycle PDCA (Plan-Do-Check-Act), leadership et engagement de la direction, consultation des travailleurs, gestion des risques et opportunités.',
      pointsCles: [
        'Norme internationale ISO 45001 (remplaçant OHSAS 18001)',
        'Structure commune de haut niveau (HLS) facilitant l\'intégration avec ISO 9001 et ISO 14001',
        'Cycle d\'amélioration continue PDCA (Plan - Do - Check - Act)',
        'Chapitre 5 : Leadership et participation obligatoire des travailleurs',
        'Audit interne et revue de direction annuelle pour statuer sur l\'efficacité du système'
      ],
      formuleCle: '\\text{Cycle PDCA} : \\text{Plan (Planifier)} \\rightarrow \\text{Do (Réaliser)} \\rightarrow \\text{Check (Vérifier)} \\rightarrow \\text{Act (Améliorer)}',
      conseilProfesseur: 'Dans l\'ISO 45001, la direction ne peut pas déléguer sa responsabilité en matière de sécurité : elle doit faire preuve d\'un leadership visible en participant personnellement aux visites sécurité sur le terrain.',
      astuceTerrain: 'Pour préparer un audit de certification ISO 45001, assurez-vous que chaque salarié interrogé au hasard par l\'auditeur connaisse la politique sécurité de l\'entreprise et sache comment signaler un presqu\'accident.',
      contenuHtml: `
        <h3>10.1 Les 10 Chapitres de la Norme ISO 45001</h3>
        <p>1. Domaine d'application | 2. Références normatives | 3. Termes et définitions | 4. Contexte de l'organisme | 5. Leadership et participation des travailleurs | 6. Planification (risques/opportunités) | 7. Support (ressources, compétences) | 8. Réalisation des activités opérationnelles | 9. Évaluation des performances (audits) | 10. Amélioration (non-conformités et actions correctives).</p>
      `,
      exercices: [
        {
          id: 'hse_ch10_ex1',
          type: TypeQuestion.QCM,
          question: "Quel modèle d'amélioration continue est au cœur de la norme de management international ISO 45001 ?",
          reponsesPossibles: [
            'La roue de Deming (Cycle PDCA : Plan-Do-Check-Act)',
            'Le modèle en cascade linéaire',
            'La méthode du hasard',
            'Le modèle comptable FIFO'
          ],
          reponsesCorrectes: [0],
          explication: "La norme ISO 45001 structure tous ses chapitres autour de la dynamique itérative du cycle PDCA.",
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        }
      ]
    },
    {
      id: 'hse_ch11',
      titre: '11. Norme ISO 14001 : Système de Management Environnemental (SME)',
      dureeEstimeeMin: 45,
      description: 'Analyse Environnementale Initiale (AEI), Aspects Environnementaux Significatifs (AES), cycle de vie des produits, prévention des pollutions (air, eau, sols) et gestion des déchets industriels (DIB / DIS).',
      pointsCles: [
        'Norme internationale ISO 14001 relative au management environnemental',
        'Identification des Aspects Environnementaux (causes) et Impacts Environnementaux (conséquences)',
        'Hiérarchisation des AES (Aspects Environnementaux Significatifs)',
        'Gestion et tri des déchets : DIB (Déchets Industriels Banals) vs DIS (Déchets Industriels Dangereux)',
        'Bordereau de Suivi des Déchets Dangereux (BSDD) et plateforme numérique Trackdéchets'
      ],
      formuleCle: '\\text{Aspect (Activité/Cause)} \\implies \\text{Impact (Modification de l\'environnement/Effet)}',
      conseilProfesseur: 'Distinguez bien Aspect et Impact : "Rejet d\'eaux de lavage dans la rivière" est un Aspect Environnemental ; "Eutrophisation et mortalité piscicole" est l\'Impact Environnemental associé.',
      astuceTerrain: 'Pour le stockage extérieur des produits polluants ou huiles : prévoyez impérativement un bac de rétention d\'un volume au moins égal à 100% du plus grand contenant ou 50% de la capacité totale stockée.',
      contenuHtml: `
        <h3>11.1 Matrice d'Évaluation des Aspects Environnementaux</h3>
        <p>L'analyse environnementale évalue la sévérité, la fréquence d'occurrence et la sensibilité du milieu récepteur.</p>
      `,
      exercices: [
        {
          id: 'hse_ch11_ex1',
          type: TypeQuestion.QCM,
          question: "Quel document officiel obligatoire assure la traçabilité réglementaire complète de l'élimination des Déchets Dangereux (DIS) depuis l'usine jusqu'au centre de traitement agréé ?",
          reponsesPossibles: [
            'Le Bordereau de Suivi des Déchets (BSD / Trackdéchets)',
            'Une simple facture d\'essence',
            'Un ticket de caisse',
            'Une carte postale'
          ],
          reponsesCorrectes: [0],
          explication: "Le BSD prouve juridiquement que le déchet dangereux a été transporté et détruit ou recyclé conformément aux lois environnementales.",
          points: 5,
          difficulte: NiveauDifficulte.INTERMEDIAIRE
        }
      ]
    },
    {
      id: 'hse_ch12',
      titre: '12. Installations Classées pour la Protection de l’Environnement (Régime ICPE)',
      dureeEstimeeMin: 45,
      description: 'Nomenclature des ICPE, régimes de Déclaration (D), Enregistrement (E) et Autorisation (A), directive SEVESO 3 (Seuil Bas / Seuil Haut), Étude d’Impact et Plan d’Opération Interne (POI).',
      pointsCles: [
        'Code de l\'Environnement - Régime des ICPE pour toute activité industrielle générant des nuisances',
        'Régimes ICPE : Déclaration (D) $\\rightarrow$ Enregistrement (E) $\\rightarrow$ Autorisation environnementale (A)',
        'Directive SEVESO 3 pour les sites à hauts risques chimiques (Seuil Bas / Seuil Haut)',
        'Plan d\'Opération Interne (POI) activé par l\'industriel et Plan Particulier d\'Intervention (PPI) dirigé par le Préfet',
        'Contrôles réguliers par l\'Inspection des Installations Classées (DREAL)'
      ],
      formuleCle: '\\text{Régimes ICPE} : \\text{Déclaration (D)} < \\text{Enregistrement (E)} < \\text{Autorisation (A)} < \\text{SEVESO}',
      conseilProfesseur: 'Avant toute modification d\'une ligne de production ou augmentation de capacité de stockage de produits chimiques, vérifiez la nomenclature ICPE (rubriques 4000) pour savoir si vous franchissez un seuil de régime supérieur.',
      astuceTerrain: 'En cas d\'incident environnemental majeur (déversement toxique), alertez immédiatement la DREAL et le Préfet dans les 24h via la fiche officielle d\'accident ICPE.',
      contenuHtml: `
        <h3>12.1 Comparatif des Régimes de la Nomenclature ICPE</h3>
        <table class="w-full border-collapse my-4 text-sm border border-slate-300 dark:border-slate-700">
          <thead>
            <tr class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100">
              <th class="border p-2">Régime</th>
              <th class="border p-2">Niveau de Risque</th>
              <th class="border p-2">Procédure Administrative</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border p-2 font-bold text-emerald-600">Déclaration (D / DC)</td>
              <td class="border p-2">Faible impact</td>
              <td class="border p-2">Simple télédéclaration en préfecture + contrôle périodique.</td>
            </tr>
            <tr>
              <td class="border p-2 font-bold text-amber-600">Enregistrement (E)</td>
              <td class="border p-2">Impact moyen maîtrisé</td>
              <td class="border p-2">Dossier technique standardisé + consultation publique locale.</td>
            </tr>
            <tr>
              <td class="border p-2 font-bold text-rose-600">Autorisation (A)</td>
              <td class="border p-2">Impact majeur ou complexe</td>
              <td class="border p-2">Étude d'impact complète, étude de dangers et enquête publique.</td>
            </tr>
          </tbody>
        </table>
      `,
      exercices: [
        {
          id: 'hse_ch12_ex1',
          type: TypeQuestion.QCM,
          question: "Quel régime réglementaire européen encadre les sites industriels présentant des quantités massives de substances très dangereuses susceptibles de provoquer un accident industriel majeur ?",
          reponsesPossibles: [
            'La directive européenne SEVESO 3 (Seuil Bas / Seuil Haut)',
            'Le règlement RGPD',
            'La norme ISO 9001',
            'Le code de la route'
          ],
          reponsesCorrectes: [0],
          explication: "La directive SEVESO 3 impose des mesures de sécurité de pointe et des plans d'urgence stricts aux sites à haut risque.",
          points: 5,
          difficulte: NiveauDifficulte.AVANCE
        }
      ]
    },
    {
      id: 'hse_ch13',
      titre: '13. Coordination des Entreprises Extérieures : Plan de Prévention & Permis de Feu',
      dureeEstimeeMin: 45,
      description: 'Article R4511-1 du Code du travail, visite préalable commune des lieux, rédaction obligatoire du Plan de Prévention (> 400 h/an ou travaux dangereux), Permis de Feu (validité limitée, surveillance 2h post-travaux).',
      pointsCles: [
        'Coordination Sécurité Entreprise Utilisatrice (EU) / Entreprise Extérieure (EE)',
        'Visite préalable commune obligatoire avant le démarrage des travaux',
        'Plan de Prévention écrit obligatoire si durée $\\ge 400$ heures/an OU travaux dangereux listés par arrêté',
        'Permis de Feu obligatoire pour tous travaux par point chaud (soudure, découpage, meulage)',
        'Surveillance visuelle obligatoire pendant les travaux et pendant au moins 2 heures après la fin des opérations'
      ],
      formuleCle: '\\text{Permis de Feu} : \\text{Éloignement des matières combustibles à } 10\\text{ m} + \\text{Surveillance 2h post-travaux}',
      conseilProfesseur: 'Ne signez jamais un Permis de Feu ou un Plan de Prévention "sur un coin de table". Rendez-vous physiquement sur les lieux exacts de l\'intervention avec le chef d\'équipe sous-traitant pour inspecter l\'environnement immédiat.',
      astuceTerrain: 'Exigez qu\'un extincteur adapté soit positionné à moins de 3 mètres du soudeur et qu\'une bâche ignifugée protège les câbles électriques situés sous la zone de projection d\'étincelles.',
      contenuHtml: `
        <h3>13.1 Les Étapes Obligatoires de la Coordination EU/EE</h3>
        <ol class="list-decimal pl-6 space-y-1 text-sm my-3">
          <li><strong>Visite Préalable Commune :</strong> Identification des risques d'interférence entre l'activité normale de l'usine et les travaux du sous-traitant.</li>
          <li><strong>Rédaction du Plan de Prévention :</strong> Description des phases de travail, consignes d'urgence et matériels de sécurité.</li>
          <li><strong>Accueil Sécurité des Intervenants :</strong> Sensibilisation des ouvriers extérieurs aux règles du site (EPI, circulation, alarmes).</li>
          <li><strong>Émission des Permis Spécifiques :</strong> Permis de feu, autorisation de pénétration en espace confiné, consignation électrique/fluidique.</li>
        </ol>
      `,
      exercices: [
        {
          id: 'hse_ch13_ex1',
          type: TypeQuestion.QCM,
          question: "Pourquoi est-il obligatoire de maintenir une surveillance visuelle pendant au moins 2 heures après l'achèvement d'une opération de soudure ou meulage sous 'Permis de Feu' ?",
          reponsesPossibles: [
            'Pour prévenir tout départ de feu couvant dans les recoins ou isolants thermiques à inflammation retardée',
            'Pour laisser refroidir la machine à café',
            'Pour compter les outils',
            'Pour faire sécher la peinture'
          ],
          reponsesCorrectes: [0],
          explication: "Les projections d'étincelles peuvent créer des feux couvants sans flamme visible qui s'embrasent subitement après le départ des ouvriers.",
          points: 5,
          difficulte: NiveauDifficulte.INTERMEDIAIRE
        }
      ]
    },
    {
      id: 'hse_ch14',
      titre: '14. Culture de Sécurité & Visites Comportementales de Sécurité (VCS)',
      dureeEstimeeMin: 40,
      description: 'Échelle de maturité de Bradley (Stade Réactif -> Dépendant -> Indépendant -> Interdépendant), observation constructive des comportements au poste, dialogue bienveillant sans sanction et renforcement des pratiques sûres.',
      pointsCles: [
        'Courbe de maturité de Bradley (Du stade Réactif au stade Interdépendant)',
        'Plus de 80% des accidents ont pour cause contributive un comportement à risque',
        'VCS (Visite Comportementale de Sécurité) : dialogue bienveillant basé sur l\'observation au poste',
        'Règle d\'or : pas de punition lors d\'une VCS, mais compréhension des freins au travail en sécurité',
        'Valorisation des comportements exemplaires et des remontées de presqu\'accidents'
      ],
      formuleCle: '\\text{Maturité Bradley} : \\text{Réactif (Instinct)} \\rightarrow \\text{Dépendant (Règles)} \\rightarrow \\text{Indépendant (Conscience)} \\rightarrow \\text{Interdépendant (Collectif)}',
      conseilProfesseur: 'Une VCS réussie commence toujours par observer 5 minutes en silence, puis aborder l\'opérateur en le félicitant d\'abord pour ses bonnes pratiques observées avant de discuter des points d\'amélioration.',
      astuceTerrain: 'Mesurez le ratio : Presqu\'accidents signalés / Accidents réels. Plus ce ratio est élevé, plus votre culture sécurité est mature et transparente.',
      contenuHtml: `
        <h3>14.1 Les 4 Stades de l'Échelle de Bradley</h3>
        <ul>
          <li><strong>1. Stade Réactif :</strong> La sécurité est considérée comme une fatalité ou de la malchance. On n'agit qu'après l'accident.</li>
          <li><strong>2. Stade Dépendant :</strong> Les salariés respectent les règles par peur de la sanction de l'encadrement.</li>
          <li><strong>3. Stade Indépendant :</strong> Chaque individu a compris l'importance de sa propre sécurité et applique rigoureusement les consignes pour lui-même.</li>
          <li><strong>4. Stade Interdépendant :</strong> L'équipe prend soin d'elle-même collectivement. Chacun intervient spontanément et avec bienveillance si un collègue prend un risque.</li>
        </ul>
      `,
      exercices: [
        {
          id: 'hse_ch14_ex1',
          type: TypeQuestion.QCM,
          question: "Sur la courbe de maturité de sécurité de Bradley, quel stade représente l'excellence où chaque collaborateur veille spontanément sur sa propre sécurité ET sur celle de ses collègues ?",
          reponsesPossibles: [
            'Le stade Interdépendant (Culture partagée et proactive)',
            'Le stade Réactif (On n\'agit qu\'après l\'accident)',
            'Le stade Dépendant (Respect des règles uniquement sous la contrainte du chef)',
            'Le stade Zéro'
          ],
          reponsesCorrectes: [0],
          explication: "Au stade interdépendant, la sécurité est une valeur profondément intégrée où l'entraide mutuelle est naturelle.",
          points: 5,
          difficulte: NiveauDifficulte.AVANCE
        }
      ]
    },
    {
      id: 'hse_ch15',
      titre: '15. Gestion des Crises HSE, Continuité d’Activité & Audit de Conformité',
      dureeEstimeeMin: 50,
      description: 'Cellule de crise, communication d’urgence avec les autorités (Pompiers, Inspection du travail, Préfecture, DREAL), Plan de Continuité d’Activité (PCA / ISO 22301) et conduite d’un audit blanc de certification.',
      pointsCles: [
        'Composition d\'une cellule de crise HSE : Directeur de site, Responsable HSE, Juriste, Responsable Communication',
        'Fiche réflexe d\'alerte immédiate (Pompiers 18/112, SAMU 15, DREAL, Inspection du Travail)',
        'Plan de Continuité d\'Activité (PCA / ISO 22301) garantissant la sauvegarde des fonctions vitales',
        'Stratégie de communication de crise : porte-parole unique, transparence factuelle, empathie',
        'Conduite d\'un audit de conformité réglementaire blanc (identification des écarts majeurs et mineurs)'
      ],
      formuleCle: '\\text{Gestion de Crise} : \\text{Alerter} \\rightarrow \\text{Protéger/Secourir} \\rightarrow \\text{Confiner} \\rightarrow \\text{Communiquer}',
      conseilProfesseur: 'Lors d\'une crise grave avec blessés ou pollution, ne diffusez jamais de spéculations ou d\'estimations non vérifiées aux journalistes. Exprimez d\'abord votre solidarité avec les victimes et communiquez uniquement les faits 100% corroborés par les secours.',
      astuceTerrain: 'Testez votre cellule de crise au moins une fois par an via un exercice d\'entraînement inopiné en conditions réelles (scénario d\'incendie avec fausse intrusion médiatique).',
      contenuHtml: `
        <h3>15.1 Protocole d'Organisation de la Cellule de Crise</h3>
        <div class="bg-slate-900 text-slate-100 p-4 rounded-lg my-4 font-mono text-sm overflow-x-auto">
          <pre>PHASE 1 : ALERTE & ÉVACUATION (0 - 15 min)
- Déclenchement de l'alarme générale et évacuation
- Appel des secours extérieurs (SDIS 18/112)
- Prise en charge des victimes par les SST du site

PHASE 2 : CONSTITUTION CELLULE DE CRISE (15 - 45 min)
- Isolement de la salle de crise sécurisée
- Activation du Plan d'Opération Interne (POI)
- Désignation du porte-parole unique officiel

PHASE 3 : GESTION DE L'ÉVÉNEMENT & CONTINUITÉ (45 min - 24h)
- Briefing régulier avec le Commandant des Opérations de Secours (COS)
- Information des familles et autorités (DREAL, Préfecture, CSE)
- Enclenchement du Plan de Continuité d'Activité (PCA)</pre>
        </div>
      `,
      exercices: [
        {
          id: 'hse_ch15_ex1',
          type: TypeQuestion.QCM,
          question: "Lors d'un accident grave ou d'un sinistre majeur, quelle règle d'or de communication de crise la direction doit-elle impérativement respecter ?",
          reponsesPossibles: [
            'Désigner un porte-parole unique formé et communiquer des informations vérifiées de manière factuelle et transparente',
            'Laisser chaque employé s\'exprimer sur les réseaux sociaux',
            'Refuser de répondre à la police',
            'Effacer les disques durs'
          ],
          reponsesCorrectes: [0],
          explication: "Avoir un canal de communication unique et rigoureusement validé évite la prolifération de fausses rumeurs et rassure les autorités et familles.",
          points: 5,
          difficulte: NiveauDifficulte.EXPERT
        }
      ]
    }
  ]
};
