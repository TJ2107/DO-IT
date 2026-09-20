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
      dureeEstimeeMin: 40,
      description: 'Maintenance corrective (palliative/curative), maintenance préventive (systématique, conditionnelle, prévisionnelle/prédictive) et maintenance améliorative.',
      pointsCles: [
        'Norme NF EN 13306 : cadre terminologique international de référence',
        'Maintenance Corrective Palliative (dépannage provisoire) vs Curative (réparation définitive)',
        'Maintenance Préventive Systématique : selon un échéancier fixe sans diagnostic préalable',
        'Maintenance Préventive Conditionnelle : déclenchée par le franchissement d\'un seuil physique mesuré',
        'Maintenance Prévisionnelle / Prédictive : extrapolation temporelle d\'une dérive vers la panne'
      ],
      formuleCle: '\\text{Maintenance} = \\text{Préventive (Systématique + Conditionnelle + Prédictive)} + \\text{Corrective (Palliative + Curative)}',
      conseilProfesseur: 'Ne confondez jamais dépannage (palliatif) et réparation (curative). Un dépannage provisoire non suivi d\'une intervention curative dans les 48h engendre presque toujours une panne en cascade bien plus grave.',
      astuceTerrain: 'Pour auditer la maturité d\'une usine, calculez le ratio Heures Préventif / Heures Totales. Une usine de classe mondiale vise au moins 75% à 80% de maintenance préventive contre moins de 20% de curatif d\'urgence subit.',
      contenuHtml: `
        <h3>1.1 Arborescence Normative de la Maintenance (NF EN 13306)</h3>
        <p>La norme européenne <strong>NF EN 13306</strong> structure l'ensemble des activités de maintenance selon deux grandes familles d'événements déclencheurs :</p>
        
        <table class="w-full border-collapse my-4 text-sm border border-slate-300 dark:border-slate-700">
          <thead>
            <tr class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100">
              <th class="border p-2 text-left">Typologie</th>
              <th class="border p-2 text-left">Déclencheur</th>
              <th class="border p-2 text-left">Sous-famille</th>
              <th class="border p-2 text-left">Exemple Industriel</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border p-2 font-bold text-amber-600">Corrective</td>
              <td class="border p-2">Après défaillance (constat d'avarie)</td>
              <td class="border p-2"><strong>Palliative</strong> (provisoire)<br><strong>Curative</strong> (définitif)</td>
              <td class="border p-2">Remplacement d'un flexible hydraulique percé ; pose d'un collier de serrage d'urgence.</td>
            </tr>
            <tr>
              <td class="border p-2 font-bold text-emerald-600">Préventive Systématique</td>
              <td class="border p-2">Calendrier ou compteur horaire fixe</td>
              <td class="border p-2">Échéancier prédéterminé</td>
              <td class="border p-2">Vidange d'un réducteur toutes les 2 000 h ; remplacement courroie tous les 12 mois.</td>
            </tr>
            <tr>
              <td class="border p-2 font-bold text-cyan-600">Préventive Conditionnelle</td>
              <td class="border p-2">Franchissement d'un seuil mesuré</td>
              <td class="border p-2">Capteurs & Surveillance</td>
              <td class="border p-2">Remplacement d'un roulement dont la vibration globale dépasse $4.5\\text{ mm/s RMS}$.</td>
            </tr>
            <tr>
              <td class="border p-2 font-bold text-indigo-600">Prévisionnelle (Prédictive)</td>
              <td class="border p-2">Modélisation de dérive / RUL</td>
              <td class="border p-2">Algorithmes / IA</td>
              <td class="border p-2">Extrapolation de la vitesse d'usure prédisant une fin de vie dans 14 jours.</td>
            </tr>
          </tbody>
        </table>

        <h3>1.2 Les 5 Niveaux de Maintenance selon la Norme AFNOR</h3>
        <ul>
          <li><strong>Niveau 1 :</strong> Réglages simples, appoint d'huile, contrôles visuels (réalisé par l'opérateur sur place).</li>
          <li><strong>Niveau 2 :</strong> Dépannage par échange standard, entretien préventif mineur (technicien habilité).</li>
          <li><strong>Niveau 3 :</strong> Diagnostic complexe, réparation mécanique, réglage électrique fin (technicien spécialisé).</li>
          <li><strong>Niveau 4 :</strong> Révision générale, démontage complet, analyse vibratoire avancée (équipe spécialisée en atelier).</li>
          <li><strong>Niveau 5 :</strong> Rénovation lourde, reconstruction ou modification chez le constructeur ou organisme agréé.</li>
        </ul>
      `,
      exercices: [
        {
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
        }
      ]
    },
    {
      id: 'maint_ch2',
      titre: '2. Indicateurs de Fiabilité & Maintenabilité : MTBF, MTTR & Taux λ',
      dureeEstimeeMin: 45,
      description: 'MTBF (Mean Time Between Failures), MTTR (Mean Time To Repair), taux de défaillance λ = 1 / MTBF, et loi exponentielle de fiabilité R(t) = e^(-λt).',
      pointsCles: [
        'MTBF (Mean Time Between Failures) : indicateur clé de fiabilité ($TBF / N$)',
        'MTTR (Mean Time To Repair) : indicateur clé de maintenabilité ($TTR / N$)',
        'Taux de défaillance $\\lambda = 1 / \\text{MTBF}$ (en pannes par heure)',
        'Disponibilité inhérente : $D_i = \\frac{\\text{MTBF}}{\\text{MTBF} + \\text{MTTR}}$',
        'Loi exponentielle de fiabilité en période utile : $R(t) = e^{-\\lambda t}$'
      ],
      formuleCle: 'MTBF = \\frac{\\sum TBF}{N_{pannes}}, \\quad MTTR = \\frac{\\sum TTR}{N_{interventions}}, \\quad D = \\frac{MTBF}{MTBF + MTTR}',
      conseilProfesseur: 'Retenez bien l\'interprétation de $R(t = \\text{MTBF})$ : la probabilité qu\'un équipement ne tombe pas en panne pendant une durée égale à son propre MTBF n\'est que de $e^{-1} = 0.368$ soit 36.8% seulement !',
      astuceTerrain: 'Pour réduire le MTTR, travaillez sur les 4 phases de l\'intervention : Détection (alarme claire), Diagnostic (arbres de dépannage), Réparation (accès mécanique et outillage à portée), Contrôle/Remise en route.',
      contenuHtml: `
        <h3>2.1 Définitions et Formules Mathématiques</h3>
        <p>Les indicateurs de sûreté de fonctionnement (FMDS : Fiabilité, Maintenabilité, Disponibilité, Sécurité) permettent d'objectiver scientifiquement la performance des installations :</p>
        
        <div class="bg-slate-900 text-slate-100 p-4 rounded-lg my-4 font-mono text-sm overflow-x-auto">
          <p class="text-amber-400 font-bold mb-2">Formules fondamentales :</p>
          <pre>1. Temps Moyen de Bon Fonctionnement :
   MTBF = (Temps Total d'Ouverture - Temps Total d'Arrêt pour Panne) / Nombre de Défaillances

2. Temps Moyen de Réparation :
   MTTR = Temps Total d'Arrêt pour Réparation / Nombre d'Interventions

3. Taux Instantané de Défaillance :
   λ = 1 / MTBF  (exprimé en pannes/heure)

4. Disponibilité Opérationnelle :
   D = MTBF / (MTBF + MTTR)</pre>
        </div>

        <h3>2.2 Exemple d'Application Chiffrée</h3>
        <p>Une pompe centrifuge fonctionne pendant 5 000 heures et enregistre 4 défaillances ayant nécessité au total 20 heures de réparation :</p>
        <ul>
          <li><strong>Temps de Bon Fonctionnement (TBF) :</strong> $5\\,000 - 20 = 4\\,980\\text{ h}$</li>
          <li><strong>MTBF :</strong> $4\\,980 / 4 = 1\\,245\\text{ heures}$</li>
          <li><strong>MTTR :</strong> $20 / 4 = 5.0\\text{ heures}$</li>
          <li><strong>Taux $\\lambda$ :</strong> $1 / 1\\,245 = 8.032 \\times 10^{-4}\\text{ panne/h}$</li>
          <li><strong>Disponibilité $D$ :</strong> $1\\,245 / (1\\,245 + 5) = 1\\,245 / 1\\,250 = 0.996 = 99.6\\%$</li>
        </ul>
      `,
      exercices: [
        {
          id: 'maint_ch2_ex1',
          type: TypeQuestion.CHIFFREE,
          question: "Si une machine tourne pendant 1 000 heures avec 5 pannes, quelle est la valeur du MTBF en heures ?",
          reponsesPossibles: ['200 heures', '5 000 heures', '50 heures', '5 heures'],
          reponsesCorrectes: [0],
          explication: "MTBF = Temps de fonctionnement / Nombre de défaillances = 1000 / 5 = 200 heures.",
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        }
      ]
    },
    {
      id: 'maint_ch3',
      titre: '3. Courbe en Baignoire & Cycle de Vie des Équipements',
      dureeEstimeeMin: 40,
      description: 'Période de jeunesse (défauts précoces / rodage), période de maturité (taux de défaillance constant λ), et période d’usure/vieillesse (usure mécanique accélérée).',
      pointsCles: [
        'Phase 1 (Jeunesse / Rodage) : taux $\\lambda(t)$ décroissant (défauts de montage, composants défectueux)',
        'Phase 2 (Maturité / Vie utile) : taux $\\lambda(t) = \\text{constante}$ (pannes aléatoires et imprévisibles)',
        'Phase 3 (Vieillesse / Usure) : taux $\\lambda(t)$ croissant (fatigue des métaux, corrosion, dégradation des isolants)',
        'Loi de Weibull à 3 paramètres ($\\beta, \\eta, \\gamma$) : $\\beta < 1$ (jeunesse), $\\beta = 1$ (maturité), $\\beta > 1$ (usure)'
      ],
      formuleCle: 'F(t) = 1 - e^{-\\left(\\frac{t - \\gamma}{\\eta}\\right)^\\beta}',
      conseilProfesseur: 'En phase de maturité ($\beta = 1$), le remplacement préventif systématique de pièces est totalement inutile et même néfaste (car il réintroduit des risques de jeunesse liés au montage). En maturité, seule la maintenance conditionnelle est efficace !',
      astuceTerrain: 'Sur un graphique d\'historique des pannes, calculez la pente de Weibull $\beta$. Si $\beta > 2.5$, le composant a un mode d\'usure marqué : fixez alors la date de remplacement systématique juste avant le début de la hausse de $\lambda$.',
      contenuHtml: `
        <h3>3.1 Les Trois Périodes de la Courbe en Baignoire</h3>
        <p>Le taux de défaillance $\\lambda(t)$ d'un parc de machines évolue typiquement selon trois stades distincts :</p>
        
        <table class="w-full border-collapse my-4 text-sm border border-slate-300 dark:border-slate-700">
          <thead>
            <tr class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100">
              <th class="border p-2 text-left">Phase</th>
              <th class="border p-2 text-left">Comportement de $\\lambda(t)$</th>
              <th class="border p-2 text-left">Paramètre $\\beta$ Weibull</th>
              <th class="border p-2 text-left">Stratégie Optimale</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border p-2 font-bold text-amber-600">1. Jeunesse (Rodage)</td>
              <td class="border p-2">Décroissant rapidement</td>
              <td class="border p-2 font-mono">$\\beta < 1$</td>
              <td class="border p-2">Contrôles de réception, resserrages après rodage, fiabilisation initiale.</td>
            </tr>
            <tr>
              <td class="border p-2 font-bold text-emerald-600">2. Maturité (Vie Utile)</td>
              <td class="border p-2">Constant ($\\lambda = \\text{cste}$)</td>
              <td class="border p-2 font-mono">$\\beta \\approx 1$</td>
              <td class="border p-2">Surveillance conditionnelle (vibrations, huile) et maintenance autonome.</td>
            </tr>
            <tr>
              <td class="border p-2 font-bold text-rose-600">3. Usure (Obsolescence)</td>
              <td class="border p-2">Croissant exponentiellement</td>
              <td class="border p-2 font-mono">$\\beta > 1$ (ex: $\\beta = 3$)</td>
              <td class="border p-2">Remplacement préventif systématique ou rétrofit complet de la machine.</td>
            </tr>
          </tbody>
        </table>
      `,
      exercices: [
        {
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
        }
      ]
    },
    {
      id: 'maint_ch4',
      titre: '4. Taux de Rendement Synthétique (TRS / OEE) & Les 6 Grandes Pertes',
      dureeEstimeeMin: 45,
      description: 'Décomposition normalisée NF E 60-182 : Taux de Disponibilité (D), Taux de Performance (P), Taux de Qualité (Q), et calcul TRS = D × P × Q.',
      pointsCles: [
        'TRS (Taux de Rendement Synthétique) / OEE (Overall Equipment Effectiveness) selon NF E 60-182',
        'Formule maîtresse : $\\text{TRS} = D \\times P \\times Q$',
        '$D$ (Taux de Disponibilité) : impacté par les arrêts propres (pannes) et changements de série',
        '$P$ (Taux de Performance) : impacté par les micro-arrêts (< 5 min) et la marche à vitesse réduite',
        '$Q$ (Taux de Qualité) : impacté par les rebuts au démarrage et pièces défectueuses en cours de série',
        'Standard "World Class Manufacturing" : $\\text{TRS} \\ge 85\\%$'
      ],
      formuleCle: '\\text{TRS} = \\frac{\\text{Temps Utile}}{\\text{Temps Requis}} = D_{\\text{dispo}} \\times P_{\\text{perf}} \\times Q_{\\text{qualité}}',
      conseilProfesseur: 'Attention aux micro-arrêts non saisis manuellement par les opérateurs ! Sur une ligne d\'emballage, 50 micro-arrêts de 40 secondes représentent 33 minutes de perte par shift, soit 7% de TRS perdu sans qu\'une seule panne officielle ne soit déclarée.',
      astuceTerrain: 'Pour traquer les micro-arrêts invisibles, connectez un automate ou un capteur optique en tête de ligne qui enregistre automatiquement chaque pause de flux supérieure à 3 secondes.',
      contenuHtml: `
        <h3>4.1 Structure des Temps selon la Norme NF E 60-182</h3>
        <p>Le calcul du TRS repose sur le découpage rigoureux du temps :</p>
        <ul>
          <li><strong>Temps d'Ouverture (TO) :</strong> Temps théorique planifié de l'atelier.</li>
          <li><strong>Temps Requis (TR) :</strong> TO moins les arrêts programmés (pauses, réunions, manque de commande).</li>
          <li><strong>Temps de Fonctionnement (TF) :</strong> TR moins les arrêts non programmés (pannes, réglages). $\\implies D = TF / TR$.</li>
          <li><strong>Temps Net (TN) :</strong> TF moins les pertes de cadence et micro-arrêts. $\\implies P = TN / TF$.</li>
          <li><strong>Temps Utile (TU) :</strong> TN moins le temps passé à produire des pièces non conformes. $\\implies Q = TU / TN$.</li>
        </ul>

        <div class="bg-slate-900 text-slate-100 p-4 rounded-lg my-4 font-mono text-sm overflow-x-auto">
          <p class="text-emerald-400 font-bold mb-2">Exemple concret :</p>
          <pre>Taux de Disponibilité D = 92.0% (0.92)
Taux de Performance   P = 95.0% (0.95)
Taux de Qualité       Q = 98.5% (0.985)

TRS = 0.92 × 0.95 × 0.985 = 0.8608 = 86.1%  (Objectif World Class atteint !)</pre>
        </div>
      `,
      exercices: [
        {
          id: 'maint_ch4_ex1',
          type: TypeQuestion.CHIFFREE,
          question: "Pour une ligne ayant une Disponibilité D = 90%, une Performance P = 95% et une Qualité Q = 98%, quelle est la valeur du TRS en % ?",
          reponsesPossibles: ['83.8%', '94.3%', '75.0%', '90.0%'],
          reponsesCorrectes: [0],
          explication: "TRS = 0.90 × 0.95 × 0.98 = 0.8379 = 83.79% ≈ 83.8%.",
          points: 5,
          difficulte: NiveauDifficulte.INTERMEDIAIRE
        }
      ]
    },
    {
      id: 'maint_ch5',
      titre: '5. Méthodologie AMDEC Moyen de Production (FMEA)',
      dureeEstimeeMin: 50,
      description: 'Analyse des Modes de Défaillance, de leurs Effets et de leur Criticité. Grille de cotation : Fréquence (F), Gravité (G), Détection (D) et Indice de Priorité de Risque IPR = F × G × D (ou Criticité C).',
      pointsCles: [
        'AMDEC : Analyse des Modes de Défaillance, de leurs Effets et de leur Criticité (FMEA en anglais)',
        'Formule de la Criticité : $C = F \\times G \\times D$ (cotation de 1 à 4 ou 1 à 10)',
        '$F$ (Fréquence d\'apparition) : probabilité que la cause produise la défaillance',
        '$G$ (Gravité des conséquences) : impact sur la sécurité, l\'environnement ou la production',
        '$D$ (Non-Détection) : difficulté à détecter l\'anomalie avant l\'arrêt de la machine',
        'Seuil de criticité d\'action : typiquement toute criticité $C \\ge 24$ (sur échelle 4x4x4) impose une action corrective prioritaire'
      ],
      formuleCle: 'C = F \\times G \\times D \\quad (\\text{Indice de Priorité de Risque IPR})',
      conseilProfesseur: 'Ne réalisez jamais une AMDEC seul dans un bureau. L\'AMDEC est obligatoirement un travail d\'équipe pluridisciplinaire réunissant : technicien maintenance, opérateur de production, automaticien et responsable qualité.',
      astuceTerrain: 'Pour réduire efficacement la criticité : si $G$ est élevé (sécurité), ajoutez des redondances physiques ou des arrêts d\'urgence ; si $F$ est élevé, fiabilisez la conception ; si $D$ est élevé, installez un capteur de surveillance (thermique, vibration) pour détecter la défaillance avant la casse.',
      contenuHtml: `
        <h3>5.1 Tableau AMDEC Standard</h3>
        <table class="w-full border-collapse my-4 text-xs sm:text-sm border border-slate-300 dark:border-slate-700">
          <thead>
            <tr class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100">
              <th class="border p-2">Élément</th>
              <th class="border p-2">Mode de Défaillance</th>
              <th class="border p-2">Cause</th>
              <th class="border p-2">Effet</th>
              <th class="border p-2">F</th>
              <th class="border p-2">G</th>
              <th class="border p-2">D</th>
              <th class="border p-2">C</th>
              <th class="border p-2">Action Corrective</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border p-2 font-semibold">Roulement moteur broche</td>
              <td class="border p-2">Grippage / Écaillage</td>
              <td class="border p-2">Défaut de lubrification</td>
              <td class="border p-2">Arrêt total ligne (8h)</td>
              <td class="border p-2 text-center">3</td>
              <td class="border p-2 text-center">4</td>
              <td class="border p-2 text-center">3</td>
              <td class="border p-2 text-center font-bold text-rose-600">36</td>
              <td class="border p-2">Installation graisseur automatique + capteur vibration continu (C passe à 6).</td>
            </tr>
          </tbody>
        </table>
      `,
      exercices: [
        {
          id: 'maint_ch5_ex1',
          type: TypeQuestion.CHIFFREE,
          question: "Pour une défaillance ayant Fréquence F=3, Gravité G=4 et Non-détection D=2, quelle est la criticité C ?",
          reponsesPossibles: ['24', '9', '14', '48'],
          reponsesCorrectes: [0],
          explication: "Criticité C = F × G × D = 3 × 4 × 2 = 24.",
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        }
      ]
    },
    {
      id: 'maint_ch6',
      titre: '6. Méthode 5S & Organisation Visuelle du Poste de Travail',
      dureeEstimeeMin: 35,
      description: 'Seiri (Débarrasser / Éliminer l’inutile), Seiton (Ranger / Une place pour chaque chose), Seiso (Nettoyer / Inspecter), Seiketsu (Standardiser), Shitsuke (Pérenniser / Rigueur).',
      pointsCles: [
        '1S - Seiri (Trier / Débarrasser) : méthode des étiquettes rouges (Red Tagging)',
        '2S - Seiton (Ranger / Situer) : une place pour chaque chose, et chaque chose à sa place',
        '3S - Seiso (Nettoyer & Inspecter) : nettoyer permet de détecter les fuites et fissures cachées',
        '4S - Seiketsu (Standardiser) : management visuel, codes couleurs, marquages au sol',
        '5S - Shitsuke (Pérenniser / Rigueur) : audits réguliers et amélioration continue'
      ],
      formuleCle: '5S : Seiri \\rightarrow Seiton \\rightarrow Seiso \\rightarrow Seiketsu \\rightarrow Shitsuke',
      conseilProfesseur: 'Le 3S "Nettoyer" n\'est pas une simple corvée de ménage : c\'est un acte d\'inspection technique fondamental. En nettoyant un carter ou un vérin, la main et l\'œil repèrent immédiatement un écrou desserré ou un suintement d\'huile.',
      astuceTerrain: 'Pour le 2S (Rangement), utilisez des panneaux d\'outillage à silhouettes découpées (Shadow Boards). Un outil manquant saute aux yeux en 0.5 seconde à la fin du quart de travail.',
      contenuHtml: `
        <h3>6.1 Les 5 Piliers du Lean 5S en Atelier</h3>
        <p>La démarche 5S constitue le socle indispensable à tout programme de Total Productive Maintenance (TPM).</p>
      `,
      exercices: [
        {
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
        }
      ]
    },
    {
      id: 'maint_ch7',
      titre: '7. Démarche TPM (Total Productive Maintenance) & Maintenance Autonome',
      dureeEstimeeMin: 45,
      description: 'Les 8 piliers de la TPM, partenariat Opérateurs/Techniciens, fiches d’auto-maintenance de 1er niveau (nettoyage, graissage, resserrage), éradication des sources de salissure.',
      pointsCles: [
        'Philosophie TPM : "Mon équipement est sous ma responsabilité" (partenariat Production-Maintenance)',
        'Objectif Triple Zéro : Zéro panne, Zéro défaut de qualité, Zéro accident',
        'Pilier Maintenance Autonome (Jishu Hozen) : formation des conducteurs de ligne',
        'Élimination des sources de contamination (fuites de copeaux, projections)',
        'Passage de la dégradation forcée à la détérioration naturelle maîtrisée'
      ],
      formuleCle: '\\text{TPM} = \\text{Maintenance Autonome} + \\text{Maintenance Planifiée} + \\text{Amélioration Ciblée} + 5 \\text{ Piliers}',
      conseilProfesseur: 'Pour réussir l\'auto-maintenance, dotez les machines de voyants visuels transparents et de repères de niveau colorés (vert/rouge) pour permettre un contrôle en 3 secondes sans démontage.',
      astuceTerrain: 'Marquez au feutre blanc ou vernis de blocage un trait témoin sur chaque écrou critique. Tout desserrage mécanique est immédiatement visible au premier coup d\'œil.',
      contenuHtml: `
        <h3>7.1 Les 8 Piliers de la TPM Japonaise (JIPM)</h3>
        <ol>
          <li><strong>Maintenance Autonome :</strong> Réalisée au quotidien par les équipes de production.</li>
          <li><strong>Maintenance Planifiée :</strong> Préventif et conditionnel expert par les techniciens.</li>
          <li><strong>Amélioration Ciblée (Kobetsu Kaizen) :</strong> Groupes de travail sur les goulots d'étranglement.</li>
          <li><strong>Gestion Précoce des Équipements :</strong> Conception de machines faciles à entretenir.</li>
          <li><strong>Maintenance de la Qualité :</strong> Prévention des défauts produit liés aux dérives machine.</li>
          <li><strong>Formation & Polyvalence :</strong> Montée en compétences techniques.</li>
          <li><strong>Sécurité, Hygiène & Environnement :</strong> Zéro risque au poste de travail.</li>
          <li><strong>TPM dans les Bureaux :</strong> Efficacité des flux administratifs et de commande.</li>
        </ol>
      `,
      exercices: [
        {
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
        }
      ]
    },
    {
      id: 'maint_ch8',
      titre: '8. Gestion de Maintenance Assistée par Ordinateur (GMAO / CMMS)',
      dureeEstimeeMin: 45,
      description: 'Arborescence des équipements (Usine -> Ligne -> Sous-ensemble -> Organe), Demandes d’Intervention (DI), Bons de Travail (BT), imputation des heures et coûts.',
      pointsCles: [
        'GMAO (Gestion de Maintenance Assistée par Ordinateur) / CMMS',
        'Arborescence fonctionnelle et géographique normalisée ISO 14224',
        'Flux opérationnel : Demande d\'Intervention (DI) $\\rightarrow$ Bon de Travail (BT) $\\rightarrow$ Clôture technique et financière',
        'Suivi du coût global de possession (LCC - Life Cycle Cost)',
        'Gestion des stocks de pièces détachées et réapprovisionnement automatique'
      ],
      formuleCle: '\\text{Cycle GMAO} : \\text{DI} \\xrightarrow{\\text{validation}} \\text{OT / BT} \\xrightarrow{\\text{réalisation}} \\text{Compte-rendu} \\xrightarrow{\\text{clôture}} \\text{Analyse MTBF/MTTR}',
      conseilProfesseur: 'Une GMAO sans données rigoureuses est inutile ("Garbage In, Garbage Out"). Exigez que chaque clôture de BT comporte : la cause racine de la panne, l\'organe précis en cause, les références des pièces consommées et le temps passé réel.',
      astuceTerrain: 'Équipez vos techniciens de tablettes ou smartphones industriels durcis. La saisie du rapport en direct sur le terrain avec photo de la pièce cassée évite les pertes d\'informations en fin de journée.',
      contenuHtml: `
        <h3>8.1 Modules Principaux d'une GMAO Industrielle</h3>
        <ul>
          <li><strong>Module Équipements :</strong> Fiches machines, notices constructeur, schémas électriques et historiques complets.</li>
          <li><strong>Module Préventif :</strong> Déclenchement automatique des ordres de travail calendaires ou basés sur les compteurs télétransmis.</li>
          <li><strong>Module Correctif :</strong> Enregistrement des DI, affectation aux équipes et traçabilité des temps d'arrêt.</li>
          <li><strong>Module Magasin & Achats :</strong> Seuils d'alerte de stock, commandes fournisseurs et valorisation PMP (Prix Moyen Pondéré).</li>
        </ul>
      `,
      exercices: [
        {
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
        }
      ]
    },
    {
      id: 'maint_ch9',
      titre: '9. Diagnostic de Pannes Méthodique : Arbre des Causes & 5 Pourquoi (5P)',
      dureeEstimeeMin: 45,
      description: 'Recherche de la cause racine (Root Cause Analysis RCA), méthode des 5 Pourquoi, diagramme d’Ishikawa (5M : Main d’œuvre, Matière, Matériel, Méthode, Milieu) et méthode 8D.',
      pointsCles: [
        'RCA (Root Cause Analysis) : identification de la cause fondamentale évitant la récidive',
        'Méthode des 5 Pourquoi : enchaînement causal logique s\'arrêtant à la cause racine organisationnelle',
        'Diagramme d\'Ishikawa (Causes-Effet / 5M) : Main d\'œuvre, Matériel, Matière, Méthode, Milieu',
        'Arbre des Défaillances (Fault Tree Analysis FTA) avec portes logiques ET / OU',
        'Démarche 8D (Eight Disciplines) pour la résolution collaborative des problèmes complexes'
      ],
      formuleCle: '5M = \\text{Main-d\'œuvre} + \\text{Matériel} + \\text{Matière} + \\text{Méthode} + \\text{Milieu}',
      conseilProfesseur: 'Lors d\'une séance 5 Pourquoi, ne concluez JAMAIS par "erreur humaine". L\'erreur humaine n\'est qu\'un symptôme. Demandez "Pourquoi l\'erreur était-elle possible ?" pour trouver le défaut de formation, de procédure ou l\'absence de détrompeur (Poka-Yoke).',
      astuceTerrain: 'Pour prouver qu\'une cause racine identifiée est la bonne, appliquez le test réversible : "Si je supprime cette cause, le problème peut-il encore se reproduire ?". Si oui, continuez à creuser.',
      contenuHtml: `
        <h3>9.1 Démonstration des 5 Pourquoi sur Cas Réel</h3>
        <div class="bg-slate-900 text-slate-100 p-4 rounded-lg my-4 font-mono text-sm overflow-x-auto">
          <p class="text-amber-400 font-bold mb-2">Cas : Le robot de soudure s'est arrêté brutalement.</p>
          <pre>1. Pourquoi le robot s'est arrêté ?
   -> Le disjoncteur du servomoteur de l'axe 3 a sauté.

2. Pourquoi a-t-il sauté ?
   -> Le servomoteur était en surcharge mécanique anormale.

3. Pourquoi était-il en surcharge ?
   -> Le réducteur cycloïde était grippé par manque de graisse.

4. Pourquoi manquait-il de graisse ?
   -> La pompe de graissage automatique ne tournait plus.

5. Pourquoi ne tournait-elle plus ? (Cause Racine)
   -> L'accouplement de la pompe s'est cisaillé suite à une vibration excessive non filtrée par la conception.</pre>
        </div>
      `,
      exercices: [
        {
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
        }
      ]
    },
    {
      id: 'maint_ch10',
      titre: '10. Méthode SMED (Single Minute Exchange of Die)',
      dureeEstimeeMin: 45,
      description: 'Changement rapide d’outils en moins de 10 minutes, conversion des opérations internes (machine à l’arrêt) en opérations externes (machine en marche), préchauffages et fixations rapides (quart de tour).',
      pointsCles: [
        'SMED (Single Minute Exchange of Die) : changement de format en un temps à 1 seul chiffre (< 10 minutes)',
        'Opérations Internes : tâches qui ne peuvent être faites QUE lorsque la machine est à l\'arrêt complet',
        'Opérations Externes : tâches préparatoires réalisables pendant que la machine continue de produire',
        'Étape 1 : Séparer strictement l\'interne et l\'externe',
        'Étape 2 : Convertir un maximum d\'opérations internes en externes (préchauffage, préréglage sur marbre)',
        'Étape 3 : Rationaliser toutes les opérations résiduelles (fixations quart de tour, vis imperdables)'
      ],
      formuleCle: '\\text{Temps SMED} = \\text{Heure dernière bonne pièce format A} \\rightarrow \\text{Heure première bonne pièce format B}',
      conseilProfesseur: 'Une vis ne sert à serrer qu\'au dernier tour de filet ! Remplacez les longs filetages par des trous oblongs en U, des rondelles fendues ou des sauterelles de serrage pneumatique.',
      astuceTerrain: 'Filmez en vidéo un changement de format complet. Visionnez le film avec les opérateurs : vous découvrirez immédiatement que 30% du temps d\'arrêt est gaspillé à chercher des clés Allen ou attendre que le moule refroidisse.',
      contenuHtml: `
        <h3>10.1 Les 4 Phases Méthodologiques du SMED</h3>
        <ol>
          <li><strong>Phase 0 :</strong> Observer, chronométrer et décomposer le changement étape par étape.</li>
          <li><strong>Phase 1 :</strong> Séparer les opérations internes des opérations externes (apporter les nouveaux outils avant d'arrêter la machine).</li>
          <li><strong>Phase 2 :</strong> Convertir l'interne en externe (préréglage hors ligne des outillages sur gabarit).</li>
          <li><strong>Phase 3 :</strong> Optimiser et supprimer les ajustements (remplacer les réglages au jugé par des cales fixes étalonnées).</li>
        </ol>
      `,
      exercices: [
        {
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
        }
      ]
    },
    {
      id: 'maint_ch11',
      titre: '11. Maintenance Conditionnelle : Analyse Vibratoire & Thermographie Infrarouge',
      dureeEstimeeMin: 50,
      description: 'Seuils d’alerte vibratoires (ISO 10816-3), thermographie des armoires électriques (détection des points chauds par effet Joule), ultrasons pour détection des fuites d’air comprimé et décharges partielles.',
      pointsCles: [
        'Analyse Vibratoire (ISO 10816-3 / ISO 20816) : détection du balourd (1X), désalignement (2X) et défauts roulements (BPFO/BPFI)',
        'Thermographie Infrarouge radiométrique : détection des résistances de contact et connexions lâches dans les TGBT',
        'Contrôle Ultrasonore aérien : détection des fuites d\'air comprimé et décharges partielles (effet couronne)',
        'Courbe P-F (Potential to Functional Failure) : délai entre détection précoce et panne fonctionnelle'
      ],
      formuleCle: 'v_{\\text{RMS}} = \\sqrt{\\frac{1}{T}\\int_0^T v(t)^2 dt} \\quad (\\text{Seuil alerte ISO 10816} \\approx 4.5\\text{ mm/s})',
      conseilProfesseur: 'Lors d\'une inspection thermographique, mesurez toujours le courant qui circule dans le conducteur au moment de la mesure (à la pince ampèremétrique). Un échauffement modéré sur une ligne chargée à 10% seulement deviendra un point chaud critique incandescent à 100% de charge !',
      astuceTerrain: 'Pour identifier un défaut de roulement en analyse vibratoire, surveillez le facteur de crête et la démodulation d\'enveloppe (accélération $g_{\\text{pk}}$ ou technique Shock Pulse). L\'écaillage émet des chocs à haute fréquence bien avant d\'augmenter la vitesse globale RMS.',
      contenuHtml: `
        <h3>11.1 La Courbe P-F et la Détection Prédictive</h3>
        <p>Plus une technique permet de détecter l'anomalie tôt sur la courbe P-F, plus le temps de réaction est confortable pour planifier l'intervention sans arrêt de production intempestif :</p>
        
        <table class="w-full border-collapse my-4 text-sm border border-slate-300 dark:border-slate-700">
          <thead>
            <tr class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100">
              <th class="border p-2">Technologie</th>
              <th class="border p-2">Stade de Détection</th>
              <th class="border p-2">Délai avant Casse (Intervalle P-F)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border p-2 font-bold text-emerald-600">Analyse d'huile & Ultrasons</td>
              <td class="border p-2">Très précoce (dégradation lubrifiant)</td>
              <td class="border p-2">1 à 6 mois</td>
            </tr>
            <tr>
              <td class="border p-2 font-bold text-cyan-600">Analyse Vibratoire</td>
              <td class="border p-2">Précoce (micro-écaillage)</td>
              <td class="border p-2">2 à 8 semaines</td>
            </tr>
            <tr>
              <td class="border p-2 font-bold text-amber-600">Thermographie Infrarouge</td>
              <td class="border p-2">Avancé (frottement excessif)</td>
              <td class="border p-2">Quelques jours à 2 semaines</td>
            </tr>
            <tr>
              <td class="border p-2 font-bold text-rose-600">Bruit audible & Fumée</td>
              <td class="border p-2">Imminent (défaillance critique)</td>
              <td class="border p-2">Quelques minutes à quelques heures</td>
            </tr>
          </tbody>
        </table>
      `,
      exercices: [
        {
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
        }
      ]
    },
    {
      id: 'maint_ch12',
      titre: '12. Analyse des Huiles & Lubrifiants en Service',
      dureeEstimeeMin: 40,
      description: 'Contamination par l’eau (Karl Fischer), viscosité cinématique, spectrométrie d’émission pour particules d’usure (Fe, Cu, Pb, Al, Cr), indice d’acide TAN et indice de basicité TBN.',
      pointsCles: [
        'L\'huile est le "bilan sanguin" des mécanismes fermés (réducteurs, compresseurs, moteurs)',
        'Viscosité cinématique (en $cSt$ ou $mm^2/s$ à $40^\\circ C$ et $100^\\circ C$) selon la classification ISO VG',
        'Particules d\'usure métalliques : Fer (engrenages), Cuivre/Plomb (bagues bronze/coussinets), Aluminium (pistons)',
        'Contamination solide selon code ISO 4406 (ex: $17/15/12$)',
        'Indice d\'acide TAN (Total Acid Number) mesurant l\'oxydation de l\'huile'
      ],
      formuleCle: '\\text{Code ISO 4406} : X / Y / Z \\implies \\text{Particules} > 4\\,\\mu\\text{m} / > 6\\,\\mu\\text{m} / > 14\\,\\mu\\text{m}',
      conseilProfesseur: 'Un taux d\'eau supérieur à 0.1% (1 000 ppm) dans une huile de réducteur réduit la durée de vie des roulements de plus de 75% par phénomène de micro-corrosion et cavitation.',
      astuceTerrain: 'Pour prélever un échantillon d\'huile fiable : prélevez toujours machine chaude en fonctionnement (ou immédiatement après l\'arrêt), à mi-hauteur du carter, et jamais au fond de la vidange où stagnent les boues.',
      contenuHtml: `
        <h3>12.1 Interprétation des Éléments d'Usure par Spectrométrie</h3>
        <table class="w-full border-collapse my-4 text-sm border border-slate-300 dark:border-slate-700">
          <thead>
            <tr class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100">
              <th class="border p-2">Élément Métallique</th>
              <th class="border p-2">Origine Mécanique Probable</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border p-2 font-mono font-bold">Fer (Fe)</td>
              <td class="border p-2">Denture d'engrenage, bagues de roulements, chemises de cylindres.</td>
            </tr>
            <tr>
              <td class="border p-2 font-mono font-bold">Cuivre (Cu) / Étain (Sn)</td>
              <td class="border p-2">Bagues en bronze, roues à vis sans fin, rondelles de calage.</td>
            </tr>
            <tr>
              <td class="border p-2 font-mono font-bold">Silicium (Si)</td>
              <td class="border p-2">Intrusion de poussières de silice (défaut de reniflard ou joint défectueux).</td>
            </tr>
          </tbody>
        </table>
      `,
      exercices: [
        {
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
        }
      ]
    },
    {
      id: 'maint_ch13',
      titre: '13. Gestion des Stocks de Pièces de Rechange & Classification ABC',
      dureeEstimeeMin: 45,
      description: 'Loi de Pareto (20/80), classification ABC des stocks par valeur de consommation, pièces stratégiques critiques à rupture inadmissible, stock de sécurité et formule de Wilson pour la quantité économique.',
      pointsCles: [
        'Classification ABC : Classe A (20% des articles = 80% de la valeur), Classe B (30% = 15%), Classe C (50% = 5%)',
        'Pièces d\'usure courante (consommables) vs Pièces d\'assurance stratégiques (moteur spécial, vis sans fin)',
        'Formule de Wilson (Quantité Économique de Commande - EOQ)',
        'Stock de sécurité : couverture contre les aléas de délai fournisseur et pics de consommation',
        'Coût de possession du stock (typiquement 15% à 25% de la valeur immobilisée par an)'
      ],
      formuleCle: 'Q_{\\text{économique}} = \\sqrt{\\frac{2 \\times D \\times C_{\\text{lancement}}}{C_{\\text{possession}} \\times P_{\\text{unitaire}}}} \\quad (\\text{Formule de Wilson})',
      conseilProfesseur: 'Une pièce stratégique ne s\'évalue pas par son prix d\'achat mais par le coût d\'arrêt de production en cas d\'absence. Un capteur à 50 € indisponible arrêtant une ligne à 10 000 €/heure est infiniment plus critique qu\'un moteur standard à 2 000 € livrable en 2 heures.',
      astuceTerrain: 'Pour les consommables de classe C (vis, joints toriques, colliers), abandonnez les fiches de saisie lourdes et adoptez un système Kanban 2 bacs (Twin-Bin) : quand le bac 1 est vide, on lance la commande et on consomme le bac 2.',
      contenuHtml: `
        <h3>13.1 Stratégie de Gestion des Pièces de Rechange</h3>
        <p>L'optimisation des stocks de maintenance arbitrage en permanence entre deux risques opposés :</p>
        <ul>
          <li><strong>Le sur-stockage :</strong> Capital immobilisé, obsolescence, dégradation des élastomères et coût d'entrepôt.</li>
          <li><strong>La rupture de stock :</strong> Arrêt prolongé d'une ligne stratégique avec pertes de chiffre d'affaires massives.</li>
        </ul>
      `,
      exercices: [
        {
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
        }
      ]
    },
    {
      id: 'maint_ch14',
      titre: '14. Négociation & Suivi des Contrats de Sous-Traitance (SLA)',
      dureeEstimeeMin: 45,
      description: 'Contrat à obligation de moyens vs obligation de résultat, clauses SLA (Service Level Agreement : Temps de réponse GTR < 2h, Disponibilité garantie), plans de prévention et audit des prestataires.',
      pointsCles: [
        'Obligation de moyens (le prestataire fournit des heures de travail) vs Obligation de résultat (le prestataire garantit un niveau de disponibilité ou MTBF)',
        'SLA (Service Level Agreement) : indicateurs contractuels mesurables avec pénalités et bonus',
        'GTI (Garantie de Temps d\'Intervention) et GTR (Garantie de Temps de Rétablissement)',
        'Plan de Prévention réglementaire obligatoire pour toute entreprise extérieure (> 400h ou travaux dangereux)',
        'Audit qualité et évaluation annuelle des prestataires sous-traitants'
      ],
      formuleCle: '\\text{Pénalités Contractuelles} = f(\\text{Dépassement du GTR}) \\quad (\\text{Clause de résultat})',
      conseilProfesseur: 'Ne signez jamais un contrat de maintenance critique à simple obligation de moyens au taux horaire sans clause de résultat. Le prestataire n\'aurait aucun intérêt économique à réduire le nombre de pannes de votre équipement !',
      astuceTerrain: 'Avant le début de toute intervention sous-traitée, réalisez un accueil sécurité strict et formalisez par écrit le Permis de Feu ou l\'Autorisation de Travail en Espace Confiné.',
      contenuHtml: `
        <h3>14.1 Structure d'un Contrat de Maintenance avec SLA</h3>
        <div class="bg-slate-900 text-slate-100 p-4 rounded-lg my-4 font-mono text-sm overflow-x-auto">
          <p class="text-amber-400 font-bold mb-2">Exemple de clauses SLA :</p>
          <pre>- Disponibilité minimale garantie de la chaudière : 99.2% sur l'année.
- Temps de prise en compte de l'appel (GTI) : ≤ 30 minutes 24h/24.
- Temps de remise en fonctionnement nominal (GTR) : ≤ 4 heures.
- Pénalité : 1 000 € HT par heure de retard au-delà du GTR contractuel.
- Bonus annuel : 5% de la redevance si zéro arrêt non planifié constaté.</pre>
        </div>
      `,
      exercices: [
        {
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
        }
      ]
    },
    {
      id: 'maint_ch15',
      titre: '15. Maintenance 4.0, IoT Industriel & Intelligence Artificielle Prédictive',
      dureeEstimeeMin: 50,
      description: 'Capteurs sans fil LoRaWAN / Bluetooth Mesh, jumeaux numériques (Digital Twins), algorithmes d’apprentissage automatique pour détection d’anomalies et réalité augmentée pour le guidage des techniciens.',
      pointsCles: [
        'IIoT (Industrial Internet of Things) : capteurs sans fil autonomes (vibrations, température, courant) sur protocoles MQTT / OPC UA',
        'Jumeau Numérique (Digital Twin) : modèle physique 3D temps réel synchronisé avec la machine réelle',
        'RUL (Remaining Useful Life) : calcul probabiliste du nombre d\'heures de fonctionnement restantes',
        'Algorithmes d\'Autoencodeurs et Réseaux de Neurones pour la détection non-supervisée d\'anomalies',
        'Réalité Assistée / Augmentée : schémas superposés et télé-assistance d\'experts à distance'
      ],
      formuleCle: '\\text{RUL}(t) = t_{\\text{défaillance finale}} - t_{\\text{actuel}} \\quad (\\text{Remaining Useful Life})',
      conseilProfesseur: 'La Maintenance 4.0 ne remplace pas les fondamentaux mécaniques et électriques : un capteur IoT sophistiqué prévenant d\'un manque de graisse n\'aura servi à rien si personne ne vient graisser la machine ! Les 5S et la TPM restent la base absolue.',
      astuceTerrain: 'Pour déployer la Maintenance 4.0 sans investissement colossal : commencez par un projet pilote (Proof of Concept) sur vos 3 machines les plus critiques (goulots d\'étranglement) avec 10 capteurs vibratoires sans fil plug-and-play.',
      contenuHtml: `
        <h3>15.1 Architecture Globale de la Maintenance Prédictive 4.0</h3>
        <div class="bg-slate-900 text-slate-100 p-4 rounded-lg my-4 font-mono text-sm overflow-x-auto">
          <pre>1. CAPTEURS SANS FIL IIoT (Accéléromètre 3 axes + Thermistance)
   | (Transmission LoRaWAN / Bluetooth Low Energy)
   v
2. EDGE GATEWAY INDUSTRIELLE (Filtrage FFT & Traitement local)
   | (Protocole sécurisé MQTT / TLS)
   v
3. PLATEFORME CLOUD & IA (Détection d'anomalies + Modèle RUL)
   | (API REST / Webhook)
   v
4. GMAO 4.0 (Génération automatique de l'Ordre de Travail Prédictif)</pre>
        </div>
      `,
      exercices: [
        {
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
        }
      ]
    }
  ]
};
