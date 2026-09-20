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
      description: 'Constantes de temps τ = RC et τ = L/R, stockage d’énergie électrostatique et électromagnétique, régimes transitoires et permanents.',
      pointsCles: [
        'Condensateur : stocke l\'énergie sous forme électrostatique ($E = \\frac{1}{2} C U^2$), s\'oppose aux variations brusques de tension',
        'Inductance (Bobine) : stocke l\'énergie sous forme magnétique ($E = \\frac{1}{2} L I^2$), s\'oppose aux variations brusques de courant',
        'Constante de temps : $\\tau = R \\cdot C$ (circuit RC) et $\\tau = \\frac{L}{R}$ (circuit RL)',
        'Règle des 5 tau : la charge ou décharge est considérée complète à 99,3% au bout de $t = 5\\tau$'
      ],
      formuleCle: 'u_C(t) = E \\cdot \\left(1 - e^{-t / \\tau}\\right) \\quad \\text{avec} \\quad \\tau = R \\cdot C',
      astuceTerrain: 'Lors du choix d\'un condensateur électrolytique, prévoyez toujours une marge de tension d\'au moins 50% supérieure à la tension de service (ex: 25V minimum sur un rail 12V) pour garantir sa longévité thermique.',
      conseilProfesseur: 'Retenez cette analogie : un condensateur agit comme un réservoir d\'eau sous pression élastique, tandis qu\'une inductance agit comme un volant d\'inertie mécanique résistant au changement de vitesse de rotation.',
      contenuHtml: `
        <h3>1. Le Condensateur en Régime Transitoire</h3>
        <p>Le courant traversant un condensateur est directement lié à la dérivée temporelle de la tension à ses bornes :</p>
        <div class="bg-blue-50 border-l-4 border-blue-900 p-3 rounded-r-xl my-3 font-mono text-sm text-blue-950 font-bold">
          i_C(t) = C \\cdot \\frac{d u_C(t)}{dt}
        </div>
        <p>À $t = 0^+$ lors de la fermeture du circuit, un condensateur déchargé se comporte rigoureusement comme un <strong>court-circuit</strong> (tension nulle, appel de courant maximal $I_{max} = E/R$). En régime établi ($t > 5\\tau$), il se comporte comme un <strong>circuit ouvert</strong> (courant nul, tension $U_C = E$).</p>

        <h3>2. L'Inductance et la Force Contre-Électromotrice</h3>
        <p>Une bobine réagit violemment à toute variation de courant en générant une tension d'auto-induction :</p>
        <div class="bg-amber-50 border-l-4 border-amber-900 p-3 rounded-r-xl my-3 font-mono text-sm text-amber-950 font-bold">
          e(t) = - L \\cdot \\frac{d i_L(t)}{dt}
        </div>
        <p>Si l'on coupe brusquement le courant dans une bobine sans prévoir de chemin d'évacuation (diode de roue libre), la dérivée $\\frac{di}{dt}$ tend vers l'infini, générant un arc électrique destructeur de plusieurs centaines de volts.</p>
      `,
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
      description: 'Tension de seuil (0.7V silicium, 0.3V Schottky), avalanche Zener, redressement double alternance et filtrage capacitif.',
      pointsCles: [
        'Diode Silicium standard (1N4007) : chute de tension directe $V_d \\approx 0.7\\text{ V}$, idéale pour le 50 Hz',
        'Diode Schottky (1N5819) : faible chute $V_d \\approx 0.2\\text{ à } 0.3\\text{ V}$, temps de recouvrement inverse quasi nul, idéale pour alimentations à découpage HF',
        'Diode Zener : conçue pour opérer en polarisation inverse dans sa zone d\'avalanche contrôlée $V_Z$ pour stabiliser une référence de tension',
        'Pont de Graetz (4 diodes) : redresse les deux alternances. Tension crête de sortie $V_{cr\\hat{e}te} = V_{max} - 2 V_d$'
      ],
      formuleCle: 'V_{\\text{ondulation crête à crête}} \\approx \\frac{I_{\\text{charge}}}{f_{\\text{ondulation}} \\cdot C} \\quad (f = 100\\text{ Hz en double alternance})',
      astuceTerrain: 'Sur un circuit imprimé, repérez toujours l\'anneau sérigraphié sur le corps de la diode : il indique impérativement la Cathode (côté négatif en direct).',
      conseilProfesseur: 'La diode n\'est pas un simple clapet antiretour parfait : n\'oubliez jamais de retrancher ses 0,7V ou 1,4V de seuil dans vos calculs de bilans de tension.',
      contenuHtml: `
        <h3>1. Comparatif des Technologies de Diodes</h3>
        <table class="w-full text-xs border border-slate-300 my-4 text-left">
          <thead class="bg-slate-100 font-bold">
            <tr>
              <th class="p-2 border">Technologie</th>
              <th class="p-2 border">Tension de Seuil ($V_F$)</th>
              <th class="p-2 border">Temps de Recouvrement ($t_{rr}$)</th>
              <th class="p-2 border">Applications Privilégiées</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-2 border font-bold">Silicium PN (ex: 1N4007)</td>
              <td class="p-2 border">0.65 à 0.75 V</td>
              <td class="p-2 border">Lent (quelques µs)</td>
              <td class="p-2 border">Redressement secteur 50/60 Hz, protection inversion polarité</td>
            </tr>
            <tr>
              <td class="p-2 border font-bold">Schottky (ex: 1N5819)</td>
              <td class="p-2 border text-emerald-700 font-bold">0.20 à 0.35 V</td>
              <td class="p-2 border text-emerald-700 font-bold">Ultra-rapide (&lt; 10 ns)</td>
              <td class="p-2 border">Hacheurs, convertisseurs Buck/Boost, chargeurs solaires</td>
            </tr>
            <tr>
              <td class="p-2 border font-bold">Zener (ex: BZX55C5V1)</td>
              <td class="p-2 border">Polarisation inverse fixe</td>
              <td class="p-2 border">Moyen</td>
              <td class="p-2 border">Régulation de tension, protection contre les surtensions (clamping)</td>
            </tr>
          </tbody>
        </table>
      `,
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
      description: 'NPN et PNP, gain en courant β (Hfe), saturation (Vce_sat ≈ 0.2V), blocage et dimensionnement de la résistance de base.',
      pointsCles: [
        'Transistor NPN : commandé par un courant positif entrant dans la Base ($I_B$)',
        'Régime Linéaire (Amplificateur) : $I_C = \\beta \\cdot I_B$ avec $V_{BE} \\approx 0.7\\text{ V}$',
        'Régime Saturé (Interrupteur fermé) : $V_{CE(sat)} \\approx 0.1\\text{ à } 0.2\\text{ V}$, $I_C$ fixé par la charge externe',
        'Coefficient de sursaturation : $k = 2 \\text{ à } 5$ pour garantir une saturation franche et réduire l\'échauffement'
      ],
      formuleCle: 'R_B = \\frac{V_{\\text{commande}} - 0.7}{I_{B(\\text{sat})}} \\quad \\text{avec} \\quad I_{B(\\text{sat})} = k \\cdot \\frac{I_C}{\\beta_{\\text{min}}}',
      astuceTerrain: 'N\'oubliez jamais la diode de roue libre (ex: 1N4148 ou 1N4007) câblée en inverse en parallèle sur la bobine de tout relais piloté par un transistor.',
      conseilProfesseur: 'En commutation, considérez le transistor bipolaire comme un robinet où un tout petit filet d\'eau dans la base libère le débit d\'une lance à incendie dans le collecteur.',
      contenuHtml: `
        <h3>1. Les Deux États en Commutation Numérique</h3>
        <ul>
          <li><strong>État Bloqué (Interrupteur Ouvert) :</strong> $I_B = 0 \\implies I_C = 0 \\implies V_{CE} = V_{CC}$. Aucun courant ne traverse la charge.</li>
          <li><strong>État Saturé (Interrupteur Fermé) :</strong> $I_B \\ge \\frac{I_C}{\\beta} \\implies V_{CE} = V_{CE(sat)} \\approx 0.2\\text{ V}$. La tension d'alimentation est quasi intégralement appliquée aux bornes de la charge ($V_{\\text{charge}} = V_{CC} - 0.2\\text{ V}$).</li>
        </ul>

        <h3>2. Calcul Pratique de la Résistance de Base $R_B$</h3>
        <p>Pour piloter un relais $12\\text{ V} / 100\\text{ mA}$ ($I_C = 0.1\\text{ A}$) depuis une sortie microcontrôleur $3.3\\text{ V}$ avec un transistor 2N2222 ($\beta_{min} = 100$) et un facteur de sursaturation $k = 3$ :</p>
        <ol class="space-y-1 my-2 font-mono text-xs">
          <li>$I_{B(th)} = \\frac{I_C}{\\beta} = \\frac{100\\text{ mA}}{100} = 1\\text{ mA}$</li>
          <li>$I_{B(reel)} = k \\times 1\\text{ mA} = 3\\text{ mA}$</li>
          <li>$R_B = \\frac{V_{cmd} - V_{BE}}{I_{B(reel)}} = \\frac{3.3 - 0.7}{0.003} = \\frac{2.6}{0.003} \\approx 866\\text{ }\\Omega \\implies \\text{Normalisé : } 820\\text{ }\\Omega$</li>
        </ol>
      `,
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
      pointsCles: [
        'MOSFET : commandé en tension par la grille ($V_{GS}$), impédance d\'entrée statique quasi-infinie (aucun courant $I_G$ continu)',
        'Résistance d\'état passant ($R_{DS(on)}$) : de quelques milliohms ($m\\Omega$), minimisant les pertes par conduction ($P = R_{DS(on)} \\cdot I_D^2$)',
        'Capacité de grille ($C_{iss}$) : nécessite un driver capable de fournir des pics de courant de plusieurs ampères pour commuter en quelques nanosecondes',
        'IGBT (Insulated Gate Bipolar Transistor) : combine la simplicité de commande du MOSFET et la tenue en forte tension/courant du bipolaire'
      ],
      formuleCle: 'P_{\\text{conduction MOSFET}} = R_{DS(\\text{on})} \\cdot I_D^2 \\quad | \\quad P_{\\text{conduction IGBT}} = V_{CE(\\text{sat})} \\cdot I_C',
      astuceTerrain: 'Pour piloter un MOSFET canal N directement depuis un microcontrôleur 3.3V ou 5V, choisissez impérativement un modèle "Logic Level" (ex: IRLZ44N et non IRFZ44N).',
      conseilProfesseur: 'Règle d\'or du choix de puissance : en dessous de 250V et au-dessus de 50 kHz, préférez le MOSFET. Au-dessus de 600V et en fortes puissances (onduleurs de train, variateurs moteurs industriels), l\'IGBT est roi.',
      contenuHtml: `
        <h3>1. Fonctionnement du MOSFET Canal N à Enrichissement</h3>
        <p>Le MOSFET se comporte comme une résistance variable contrôlée par la tension grille-source $V_{GS}$ :</p>
        <ul>
          <li>Si $V_{GS} < V_{GS(th)}$ (typiquement 2 à 4V) : Le canal est bloqué, $I_D = 0$.</li>
          <li>Si $V_{GS} \ge 10\\text{ V}$ (pleine conduction) : Le canal est complètement ouvert, offrant une résistance ultra-faible $R_{DS(on)}$.</li>
        </ul>
      `,
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
      description: 'AOP idéal, rétroaction négative sur l’entrée V-, montages suiveur, inverseur, non-inverseur, sommateur et différentiel.',
      pointsCles: [
        'Hypothèse AOP parfait en régime linéaire (bouclé sur V-) : Courants d\'entrée nuls ($i_+ = i_- = 0$) et tension différentielle nulle ($V_+ = V_-$)',
        'Montage Suiveur ($V_s = V_e$) : Gain unitaire, impédance d\'entrée infinie, impédance de sortie nulle (adaptateur d\'impédance idéal)',
        'Montage Inverseur : $V_s = -\\frac{R_2}{R_1} \\cdot V_e$ (déphasage de 180°)',
        'Montage Non-Inverseur : $V_s = \\left(1 + \\frac{R_2}{R_1}\\right) \\cdot V_e$ (gain toujours $\\ge 1$)'
      ],
      formuleCle: 'A_v(\\text{Non-Inverseur}) = 1 + \\frac{R_2}{R_1} \\quad | \\quad A_v(\\text{Inverseur}) = - \\frac{R_2}{R_1}',
      astuceTerrain: 'Dans un montage amplificateur de capteur de précision, utilisez toujours des résistances à film métallique 1% pour garantir la stabilité du gain en température.',
      conseilProfesseur: 'Pour analyser n\'importe quel circuit AOP en régime linéaire, appliquez toujours la même méthode infaillible en 3 étapes : 1. Poser $i_+ = i_- = 0$ ; 2. Exprimer $V_+$ et $V_-$ avec le pont diviseur de tension ; 3. Poser l\'égalité $V_+ = V_-$ et isoler $V_s$.',
      contenuHtml: `
        <h3>1. Les 4 Montages Linéaires Fondamentaux</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4 text-xs">
          <div class="bg-slate-50 border p-3 rounded-xl">
            <span class="font-bold text-slate-900 block mb-1">1. Montage Suiveur</span>
            $V_s = V_e$<br/>
            Sert de tampon pour isoler un capteur à haute impédance sans écrouler sa tension.
          </div>
          <div class="bg-slate-50 border p-3 rounded-xl">
            <span class="font-bold text-slate-900 block mb-1">2. Amplificateur Non-Inverseur</span>
            $V_s = \\left(1 + \\frac{R_2}{R_1}\\right) V_e$<br/>
            Amplifie sans inversion de polarité avec une impédance d'entrée très élevée.
          </div>
          <div class="bg-slate-50 border p-3 rounded-xl">
            <span class="font-bold text-slate-900 block mb-1">3. Amplificateur Inverseur</span>
            $V_s = -\\frac{R_2}{R_1} V_e$<br/>
            Entrée V- fixée à la masse virtuelle ($0\\text{ V}$).
          </div>
          <div class="bg-slate-50 border p-3 rounded-xl">
            <span class="font-bold text-slate-900 block mb-1">4. Amplificateur Différentiel</span>
            $V_s = \\frac{R_2}{R_1} (V_2 - V_1)$<br/>
            Élimine le bruit de mode commun présent simultanément sur les deux fils de mesure.
          </div>
        </div>
      `,
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
      description: 'Comparateur simple, saturation haute/basse (+Vsat / -Vsat), réaction positive sur V+ et comparateur à hystérésis pour immunité au bruit.',
      pointsCles: [
        'Absence de contre-réaction (boucle ouverte) $\\implies$ saturation immédiate à $+V_{sat}$ ou $-V_{sat}$',
        'Règle du comparateur : si $V_+ > V_- \\implies V_s = +V_{sat}$ ; si $V_+ < V_- \\implies V_s = -V_{sat}$',
        'Problème du comparateur simple : sur un signal analogique bruité, la sortie oscille frénétiquement au passage du seuil',
        'Trigger de Schmitt (Réaction positive sur V+) : crée deux seuils distincts (seuil haut $V_H$ et seuil bas $V_B$) éliminant tout rebond'
      ],
      formuleCle: '\\Delta V_{\\text{hystérésis}} = V_H - V_B = \\frac{R_1}{R_1 + R_2} \\cdot \\left(+V_{sat} - (-V_{sat})\\right)',
      astuceTerrain: 'Pour des applications de commutation rapide, n\'utilisez pas un AOP standard (trop lent en désaturation) mais un vrai comparateur dédié comme le LM393 ou LM311 à sortie collecteur ouvert.',
      conseilProfesseur: 'L\'hystérésis est le principe utilisé par le thermostat de votre maison : il enclenche le chauffage à 19°C et ne le coupe qu\'à 21°C pour éviter d\'allumer la chaudière 100 fois par minute.',
      contenuHtml: `
        <h3>1. Comparateur Simple vs Trigger de Schmitt</h3>
        <p>Le comparateur à hystérésis possède une mémoire d'état :</p>
        <ul>
          <li>Quand la sortie est haute ($+V_{sat}$), le seuil de basculement passe automatiquement à la valeur haute $V_H$.</li>
          <li>Pour faire basculer la sortie à $-V_{sat}$, le signal d'entrée doit dépasser $V_H$.</li>
          <li>Dès que la sortie passe à $-V_{sat}$, le seuil bascule à la valeur basse $V_B$. Le bruit de petite amplitude est donc totalement ignoré.</li>
        </ul>
      `,
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
      description: 'Filtres passe-bas, passe-haut, passe-bande et réjecteur (Butterworth, Sallen-Key), diagrammes de Bode et atténuation (-20 dB/décade par ordre).',
      pointsCles: [
        'Fréquence de coupure à -3 dB ($f_c$) : fréquence où la puissance du signal de sortie est divisée par 2 ($V_s / V_e = 1/\\sqrt{2} \\approx 0.707$)',
        'Filtre RC Passe-Bas du 1er ordre : pente d\'atténuation de $-20\\text{ dB/décade}$ au-delà de $f_c$',
        'Filtre Sallen-Key Actif du 2nd ordre : pente de $-40\\text{ dB/décade}$ sans atténuation de gain dans la bande passante',
        'Gabarits de filtres : Butterworth (réponse la plus plate), Tchebychev (coupure plus raide avec ondulation)'
      ],
      formuleCle: 'f_c = \\frac{1}{2 \\cdot \\pi \\cdot R \\cdot C} \\quad | \\quad G_{\\text{dB}} = 20 \\cdot \\log_{10}\\left(\\frac{V_s}{V_e}\\right)',
      astuceTerrain: 'Pour supprimer le ronflement parasite du secteur 50 Hz sur un électrocardiogramme ou un signal audio, utilisez un filtre actif réjecteur de bande (Notch Filter) à structure double T.',
      conseilProfesseur: 'Chaque ordre de filtre ajoute une atténuation de 20 dB par décade (soit division de la tension par 10 à chaque fois que la fréquence décuple). Un filtre d\'ordre 4 atténue donc de 80 dB/décade.',
      contenuHtml: `
        <h3>1. Les Types Fondamentaux de Filtres</h3>
        <table class="w-full text-xs border border-slate-300 my-4 text-left">
          <thead class="bg-slate-100 font-bold">
            <tr>
              <th class="p-2 border">Type</th>
              <th class="p-2 border">Bande Passante</th>
              <th class="p-2 border">Atténuation Hors Bande</th>
              <th class="p-2 border">Cas d'Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-2 border font-bold">Passe-Bas</td>
              <td class="p-2 border">De $0\\text{ Hz}$ à $f_c$</td>
              <td class="p-2 border">Au-dessus de $f_c$</td>
              <td class="p-2 border">Filtre anti-repliement avant conversion CAN, lissage d'alimentation</td>
            </tr>
            <tr>
              <td class="p-2 border font-bold">Passe-Haut</td>
              <td class="p-2 border">Au-dessus de $f_c$</td>
              <td class="p-2 border">En dessous de $f_c$ (bloque le DC)</td>
              <td class="p-2 border">Suppression de la composante continue en audio, détection de fronts</td>
            </tr>
            <tr>
              <td class="p-2 border font-bold">Passe-Bande</td>
              <td class="p-2 border">Entre $f_1$ et $f_2$</td>
              <td class="p-2 border">En dessous de $f_1$ et au-dessus de $f_2$</td>
              <td class="p-2 border">Récepteurs radio, démodulation de tonalités</td>
            </tr>
          </tbody>
        </table>
      `,
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
      description: 'Montages astable et monostable du timer NE555, oscillateurs à quartz de haute précision et modulateurs PWM.',
      pointsCles: [
        'NE555 : circuit intégré mythique créé en 1971 comprenant 2 comparateurs, une bascule RS, un transistor de décharge et un diviseur par 3',
        'Mode Astable : oscille librement sans signal d\'entrée pour générer une horloge rectangulaire',
        'Mode Monostable (Timer) : génère une unique impulsion de durée $T = 1.1 \\cdot R \\cdot C$ sur réception d\'un front descendant',
        'Oscillateur à Quartz : stabilité en fréquence exceptionnelle de l\'ordre de $\\pm 10\\text{ à } 50\\text{ ppm}$ grâce à l\'effet piézoélectrique'
      ],
      formuleCle: 'f_{\\text{NE555 astable}} = \\frac{1.44}{(R_1 + 2 R_2) \\cdot C} \\quad | \\quad \\text{Rapport cyclique } \\delta = \\frac{R_1 + R_2}{R_1 + 2 R_2}',
      astuceTerrain: 'Pour obtenir un signal carré parfait à 50% de rapport cyclique avec un NE555, câblez une diode 1N4148 en parallèle sur R2 (anode vers R1, cathode vers broche 7).',
      conseilProfesseur: 'Bien que les microcontrôleurs intègrent aujourd\'hui des timers internes, le NE555 reste le composant d\'apprentissage parfait pour comprendre l\'interaction entre comparateurs et constantes de temps.',
      contenuHtml: `
        <h3>1. Fonctionnement Interne du NE555</h3>
        <p>Le pont diviseur interne fixe deux seuils précis :</p>
        <ul>
          <li><strong>Seuil Haut (Threshold, broche 6) :</strong> $\\frac{2}{3} V_{CC}$. Dès que la tension du condensateur dépasse ce seuil, la bascule interne commute et force la sortie à l'état bas ($0\\text{ V}$).</li>
          <li><strong>Seuil Bas (Trigger, broche 2) :</strong> $\\frac{1}{3} V_{CC}$. Dès que la tension descend sous ce seuil, la bascule commute et active la sortie à l'état haut ($V_{CC}$).</li>
        </ul>
      `,
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
      description: 'Algèbre de Boole, tables de vérité, portes ET, OU, NON, NAND, NOR, XOR et simplification par tableaux de Karnaugh.',
      pointsCles: [
        'Algèbre booléenne : basée sur les états discrets 0 (FAUX) et 1 (VRAI)',
        'Portes universelles NAND et NOR : permettent de synthétiser n\'importe quelle fonction logique complexe à elles seules',
        'Théorèmes de De Morgan : $\\overline{A \\cdot B} = \\bar{A} + \\bar{B}$ et $\\overline{A + B} = \\bar{A} \\cdot \\bar{B}$',
        'Tableaux de Karnaugh : méthode graphique pour regrouper les 1 adjacents en puissances de 2 ($1, 2, 4, 8$) et minimiser le nombre de portes'
      ],
      formuleCle: 'A \\oplus B = A \\cdot \\bar{B} + \\bar{A} \\cdot B \\quad (\\text{Fonction OU Exclusif XOR})',
      astuceTerrain: 'Ne laissez JAMAIS une entrée de circuit CMOS (série 74HC ou 4000) en l\'air : son impédance d\'entrée infinie captera le bruit ambiant et provoquera des commutations erratiques et une surconsommation.',
      conseilProfesseur: 'La porte XOR est l\'élément de base du calcul binaire : elle réalise l\'addition de 2 bits ($0+0=0, 0+1=1, 1+0=1, 1+1=0$ avec retenue).',
      contenuHtml: `
        <h3>1. Tables de Vérité des Portes Fondamentales</h3>
        <table class="w-full text-xs border border-slate-300 my-4 text-left font-mono">
          <thead class="bg-slate-100 font-bold font-sans">
            <tr>
              <th class="p-2 border">A</th>
              <th class="p-2 border">B</th>
              <th class="p-2 border">ET (AND)</th>
              <th class="p-2 border">OU (OR)</th>
              <th class="p-2 border">NAND</th>
              <th class="p-2 border">NOR</th>
              <th class="p-2 border">XOR</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="p-2 border">0</td><td class="p-2 border">0</td><td class="p-2 border">0</td><td class="p-2 border">0</td><td class="p-2 border">1</td><td class="p-2 border">1</td><td class="p-2 border">0</td></tr>
            <tr><td class="p-2 border">0</td><td class="p-2 border">1</td><td class="p-2 border">0</td><td class="p-2 border">1</td><td class="p-2 border">1</td><td class="p-2 border">0</td><td class="p-2 border">1</td></tr>
            <tr><td class="p-2 border">1</td><td class="p-2 border">0</td><td class="p-2 border">0</td><td class="p-2 border">1</td><td class="p-2 border">1</td><td class="p-2 border">0</td><td class="p-2 border">1</td></tr>
            <tr><td class="p-2 border">1</td><td class="p-2 border">1</td><td class="p-2 border">1</td><td class="p-2 border">1</td><td class="p-2 border">0</td><td class="p-2 border">0</td><td class="p-2 border">0</td></tr>
          </tbody>
        </table>
      `,
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
      description: 'Bascule RS asynchrone, bascule D synchrone sur front d’horloge, bascule JK universelle, registres à décalage et compteurs binaires.',
      pointsCles: [
        'Logique séquentielle : la sortie dépend non seulement des entrées actuelles mais aussi de l\'historique mémorisé ($Q_n$)',
        'Bascule D (Data) : échantillonne et mémorise l\'état de l\'entrée D exactement à l\'instant du front montant de l\'horloge CLK',
        'Bascule D en diviseur de fréquence : en reliant $\\bar{Q}$ sur l\'entrée $D$, la fréquence de sortie est divisée par 2 ($f_{out} = f_{in} / 2$)',
        'Registres à décalage (SISO, SIPO, PISO) : décalent les bits à chaque coup d\'horloge, coeur des interfaces SPI et convertisseurs série'
      ],
      formuleCle: 'f_{\\text{sortie compteur}} = \\frac{f_{\\text{horloge}}}{2^N} \\quad (\\text{pour } N \\text{ bascules en cascade})',
      astuceTerrain: 'Pour créer un anti-rebond matériel infaillible sur un bouton-poussoir mécanique, utilisez une bascule RS pilotée par un inverseur SPDT.',
      conseilProfesseur: 'La bascule D est la cellule élémentaire de la mémoire vive (RAM) et de tous les registres internes des microprocesseurs modernes.',
      contenuHtml: `
        <h3>1. Table de Fonctionnement de la Bascule D Synchrone</h3>
        <p>L'évolution ne s'effectue qu'au front actif d'horloge :</p>
        <table class="w-full text-xs border border-slate-300 my-4 text-left">
          <thead class="bg-slate-100 font-bold">
            <tr>
              <th class="p-2 border">Entrée D</th>
              <th class="p-2 border">Horloge (CLK)</th>
              <th class="p-2 border">Sortie $Q_{n+1}$</th>
              <th class="p-2 border">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="p-2 border">0</td><td class="p-2 border font-mono text-blue-800">↑ (Front montant)</td><td class="p-2 border font-bold">0</td><td class="p-2 border">Mémorisation d'un 0</td></tr>
            <tr><td class="p-2 border">1</td><td class="p-2 border font-mono text-blue-800">↑ (Front montant)</td><td class="p-2 border font-bold">1</td><td class="p-2 border">Mémorisation d'un 1</td></tr>
            <tr><td class="p-2 border">X</td><td class="p-2 border">0 ou 1 (Niveau statique)</td><td class="p-2 border">$Q_n$</td><td class="p-2 border">Mémoire inchangée</td></tr>
          </tbody>
        </table>
      `,
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
      description: 'Théorème de Nyquist-Shannon (fe ≥ 2×fmax), pas de quantification (quantum q = Vref / 2^n), architectures SAR, Flash et Sigma-Delta.',
      pointsCles: [
        'Théorème de Nyquist-Shannon : la fréquence d\'échantillonnage $f_e$ doit être strictement supérieure à $2 \\times f_{max}$ pour éviter le repliement de spectre',
        'Quantum (Résolution) : la plus petite variation de tension mesurable $q = \\frac{V_{ref}}{2^N}$',
        'CAN à approximations successives (SAR) : compromis idéal rapidité/résolution (10 à 18 bits, jusqu\'à 5 MSPS)',
        'CAN Flash : ultra-rapide (Giga-échantillons/s) mais coûteux ($2^N - 1$ comparateurs)',
        'CAN Sigma-Delta : ultra-haute résolution (24 bits) avec suréchantillonnage, idéal pour pesage et audio'
      ],
      formuleCle: 'q = \\frac{V_{\\text{ref}}}{2^N} \\quad | \\quad \\text{SNR}_{\\text{théorique}} \\approx 6.02 \\cdot N + 1.76\\text{ dB}',
      astuceTerrain: 'La précision d\'un CAN ne dépend pas que de son nombre de bits : si votre tension de référence $V_{ref}$ est parasitée par le bruit numérique de la carte, les 3 derniers bits ne mesureront que du bruit.',
      conseilProfesseur: 'Placez toujours un filtre passe-bas anti-repliement passif ou actif en amont de toute entrée CAN pour couper radicalement les fréquences supérieures à $f_e / 2$.',
      contenuHtml: `
        <h3>1. Les Paliers de Quantification Numérique</h3>
        <p>Pour un convertisseur de $N$ bits alimenté sous une référence $V_{ref}$ :</p>
        <ul>
          <li>Un CAN 8 bits ($2^8 = 256$ niveaux) sous $5\\text{ V} \\implies q = \\frac{5}{256} = 19.5\\text{ mV}$.</li>
          <li>Un CAN 10 bits ($2^{10} = 1024$ niveaux) sous $5\\text{ V} \\implies q = \\frac{5}{1024} = 4.88\\text{ mV}$.</li>
          <li>Un CAN 12 bits ($2^{12} = 4096$ niveaux) sous $3.3\\text{ V} \\implies q = \\frac{3.3}{4096} = 0.805\\text{ mV}$.</li>
        </ul>
      `,
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
      description: 'Convertisseur abaisseur Buck, élévateur Boost, topologie Flyback isolée galvaniquement, rendement élevé (> 85%) et selfs de stockage.',
      pointsCles: [
        'Régulateur linéaire (ex: LM7805) : dissipe l\'excédent en pure chaleur ($P = (V_{in} - V_{out}) \\cdot I$), rendement médiocre (&lt; 40%)',
        'Alimentation à découpage (SMPS) : hache la tension à haute fréquence (100 kHz à 2 MHz) sur une inductance, rendement exceptionnel (85 à 96%)',
        'Hacheur Buck (Abaisseur) : $V_{out} = \\alpha \\cdot V_{in}$ avec $0 < \\alpha < 1$',
        'Hacheur Boost (Élévateur) : $V_{out} = \\frac{V_{in}}{1 - \\alpha}$',
        'Flyback : permet une isolation galvanique secteur $230\\text{ V} \\rightarrow 5\\text{ V} / 12\\text{ V}$ via un transformateur couplé'
      ],
      formuleCle: 'V_{\\text{out Buck}} = \\alpha \\cdot V_{\\text{in}} \\quad | \\quad V_{\\text{out Boost}} = \\frac{V_{\\text{in}}}{1 - \\alpha}',
      astuceTerrain: 'Sur un circuit imprimé SMPS, la boucle formée par le MOSFET, la diode de roue libre et le condensateur de sortie contient des courants pulsés ultra-rapides : gardez cette boucle la plus courte et compacte possible pour éviter les rayonnements CEM.',
      conseilProfesseur: 'Une alimentation à découpage chauffe très peu car le transistor commute entre deux états idéaux : soit $I = 0$ (bloqué $\\implies P = 0$), soit $V = 0$ (saturé $\\implies P = 0$).',
      contenuHtml: `
        <h3>1. Comparatif Linéaire vs Découpage</h3>
        <table class="w-full text-xs border border-slate-300 my-4 text-left">
          <thead class="bg-slate-100 font-bold">
            <tr>
              <th class="p-2 border">Paramètre</th>
              <th class="p-2 border">Régulateur Linéaire</th>
              <th class="p-2 border">Alimentation à Découpage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-2 border font-bold">Rendement Énergétique</td>
              <td class="p-2 border text-red-700 font-bold">Faible (30% à 50%)</td>
              <td class="p-2 border text-emerald-700 font-bold">Très élevé (85% à 95%)</td>
            </tr>
            <tr>
              <td class="p-2 border font-bold">Échauffement Thermique</td>
              <td class="p-2 border text-red-700">Très important (nécessite gros dissipateur)</td>
              <td class="p-2 border text-emerald-700">Faible à modéré</td>
            </tr>
            <tr>
              <td class="p-2 border font-bold">Bruit et Ondulation de Sortie</td>
              <td class="p-2 border text-emerald-700 font-bold">Ultra-faible (quelques microvolts)</td>
              <td class="p-2 border text-amber-700">Ondulation résiduelle HF (10 à 50 mV)</td>
            </tr>
            <tr>
              <td class="p-2 border font-bold">Capacité Élévatrice</td>
              <td class="p-2 border text-red-700">Impossible ($V_{out} < V_{in}$)</td>
              <td class="p-2 border text-emerald-700">Possible (mode Boost)</td>
            </tr>
          </tbody>
        </table>
      `,
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
      description: 'Bus bifilaire I2C avec résistances de pull-up, bus synchrone SPI à 4 fils, liaison asynchrone UART et bus différentiel CAN automobile.',
      pointsCles: [
        'I2C (Inter-Integrated Circuit) : 2 fils (SDA et SCL) à collecteur ouvert avec résistances de pull-up, adressage matériel sur 7 ou 10 bits',
        'SPI (Serial Peripheral Interface) : 4 fils (MOSI, MISO, SCK, CS), synchrone full-duplex très rapide (> 20 MHz)',
        'UART (Universal Asynchronous Receiver-Transmitter) : 2 fils (TX et RX), asynchrone avec baud rate prédéfini (ex: 115200 bauds)',
        'CAN Bus (Controller Area Network) : liaison différentielle bifilaire blindée (CAN_H, CAN_L) avec terminaisons 120 Ω, ultra-résistante aux bruits'
      ],
      formuleCle: 'R_{\\text{pull-up I2C typique}} = 4.7\\text{ k}\\Omega \\quad | \\quad \\text{Terminaison CAN} = 120\\text{ }\\Omega \\text{ aux deux extrémités}',
      astuceTerrain: 'Si votre bus I2C ne répond pas, contrôlez en premier lieu au voltmètre que les lignes SDA et SCL sont bien tirées au 3.3V ou 5V au repos (oubli fréquent des résistances de pull-up).',
      conseilProfesseur: 'Pour connecter un capteur à 10 cm sur la même carte, préférez l\'I2C ou le SPI. Pour communiquer à 10 mètres dans un environnement industriel bruité, utilisez impérativement le CAN ou le RS-485.',
      contenuHtml: `
        <h3>1. Synthèse Comparative des Liaisons Séries</h3>
        <table class="w-full text-xs border border-slate-300 my-4 text-left">
          <thead class="bg-slate-100 font-bold">
            <tr>
              <th class="p-2 border">Bus</th>
              <th class="p-2 border">Nombre de Fils</th>
              <th class="p-2 border">Synchronisation</th>
              <th class="p-2 border">Débit Typique</th>
              <th class="p-2 border">Distance Maximale</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-2 border font-bold">I2C</td>
              <td class="p-2 border">2 (SDA, SCL)</td>
              <td class="p-2 border">Synchrone (Horloge partagée)</td>
              <td class="p-2 border">100 kbps à 3.4 Mbps</td>
              <td class="p-2 border">&lt; 1 mètre (capacité &lt; 400 pF)</td>
            </tr>
            <tr>
              <td class="p-2 border font-bold">SPI</td>
              <td class="p-2 border">4 (MOSI, MISO, SCK, CS)</td>
              <td class="p-2 border">Synchrone Full-Duplex</td>
              <td class="p-2 border text-emerald-700 font-bold">10 à 50 Mbps</td>
              <td class="p-2 border">&lt; 30 centimètres (sur carte)</td>
            </tr>
            <tr>
              <td class="p-2 border font-bold">UART</td>
              <td class="p-2 border">2 (TX, RX)</td>
              <td class="p-2 border">Asynchrone (Baud rate commun)</td>
              <td class="p-2 border">9600 à 921600 bauds</td>
              <td class="p-2 border">1 à 2 mètres (ou 1200 m en RS-485)</td>
            </tr>
            <tr>
              <td class="p-2 border font-bold">CAN Bus</td>
              <td class="p-2 border">2 (CAN_H, CAN_L)</td>
              <td class="p-2 border">Différentiel Asynchrone</td>
              <td class="p-2 border">500 kbps à 1 Mbps</td>
              <td class="p-2 border text-emerald-700 font-bold">Jusqu'à 1 000 mètres (à débit réduit)</td>
            </tr>
          </tbody>
        </table>
      `,
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
      description: 'Perturbations conduites et rayonnées, plan de masse ininterrompu, condensateurs de découplage (100 nF) et règles d’or du tracé de pistes.',
      pointsCles: [
        'Règle d\'or du plan de masse : conserver un plan de masse GND massif et continu sur la couche inférieure pour minimiser l\'inductance de boucle',
        'Condensateur de découplage (100 nF céramique X7R) : OBLIGATOIRE au plus près immédiat (moins de 2 mm) de chaque broche VCC de chaque circuit intégré',
        'Éviter les angles droits à 90° sur les pistes haute fréquence (privilégier les coudes à 45° ou arrondis pour éviter les réflexions)',
        'Séparation stricte des zones : isoler la partie puissance/relais/découpage de la partie signaux analogiques faibles'
      ],
      formuleCle: 'e_{\\text{parasite induit}} = - \\frac{d\\Phi}{dt} = - S \\cdot \\frac{dB}{dt} \\implies \\text{Minimiser la surface de boucle } S',
      astuceTerrain: 'Ajoutez une perle de ferrite (Ferrite Bead) en série sur la ligne d\'alimentation des étages analogiques sensibles pour bloquer le bruit numérique HF généré par les microcontrôleurs.',
      conseilProfesseur: 'La CEM n\'est pas de la magie noire : 95% des problèmes de perturbations électromagnétiques se résolvent par un plan de masse propre et des condensateurs de découplage correctement positionnés.',
      contenuHtml: `
        <h3>1. Les 4 Règles d'Or du Routage PCB Professionnel</h3>
        <ol class="space-y-1.5 my-3">
          <li><strong>1. Plan de masse ininterrompu :</strong> Ne coupez pas votre plan de masse avec de longues pistes traversantes qui obligent le courant de retour à faire un grand détour (création d'une antenne parasite).</li>
          <li><strong>2. Découplage de proximité :</strong> L'ordre d'alimentation doit être : Piste VCC $\\rightarrow$ Condensateur de découplage $\\rightarrow$ Broche VDD du composant.</li>
          <li><strong>3. Tracé des paires différentielles :</strong> Pour les bus USB, Ethernet ou CAN, routez les deux pistes côte à côte avec une longueur strictement identique.</li>
          <li><strong>4. Largeur des pistes de puissance :</strong> Calculez la largeur selon la norme IPC-2152 (au moins 1 mm par ampère pour une épaisseur de cuivre standard 35 µm).</li>
        </ol>
      `,
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
      description: 'Paramétrage du Trigger (front, durée, seuil), couplages AC/DC/GND, sondes 1X/10X avec compensation capacitive et analyse FFT.',
      pointsCles: [
        'Sonde en position 10X (recommandée) : multiplie par 10 l\'impédance d\'entrée ($10\\text{ M}\\Omega$) et divise par 10 la capacité parasite (~10 pF) pour ne pas perturber le montage',
        'Compensation de la sonde : réglage de la vis de compensation sur le signal de test 1 kHz carré de l\'oscilloscope pour obtenir un signal parfaitement plat',
        'Couplage DC : affiche la composante continue et alternative réelle. Couplage AC : intercale un condensateur pour ne visualiser que l\'ondulation alternative (ripple)',
        'Mode Trigger Single (Monocoup) : indispensable pour capturer un événement transitoire fugitif (ex: mise sous tension, pic de surtension, trame série)'
      ],
      formuleCle: '\\text{Bande passante requise de l\'oscilloscope} \\ge 3 \\text{ à } 5 \\times f_{\\text{signal maximal}} \\quad | \\quad t_{\\text{montée}} \\approx \\frac{0.35}{BW}',
      astuceTerrain: 'Pour mesurer des signaux rapides à plus de 50 MHz, retirez la longue pince crocodile de masse de la sonde et utilisez un ressort de masse court de pointe : vous éliminerez 90% des oscillations parasites (ringing).',
      conseilProfesseur: 'Ne reliez JAMAIS la pince crocodile de masse de votre oscilloscope directement sur le secteur ou un pont de diodes relié au 230V sans sonde différentielle isolée : la masse de l\'oscilloscope étant reliée à la Terre, vous créeriez un court-circuit franc destructeur !',
      contenuHtml: `
        <h3>1. Méthodologie Universelle de Mesure à l'Oscilloscope</h3>
        <ol class="space-y-1.5 my-3">
          <li><strong>1. Calibrer la sonde :</strong> Vérifier la compensation 10X sur la sortie de test $1\\text{ kHz} / 3.3\\text{ V}$ (ajuster la vis si le signal présente un arrondi ou une sur-oscillation).</li>
          <li><strong>2. Régler la base de temps ($s/div$) et la sensibilité ($V/div$) :</strong> Adapter le zoom pour visualiser 2 à 3 périodes complètes du signal sur la grille.</li>
          <li><strong>3. Stabiliser avec le Trigger :</strong> Sélectionner la source (Voie 1 ou 2), le front (montant ↑) et ajuster le niveau de seuil au milieu de l'amplitude du signal.</li>
          <li><strong>4. Activer les mesures automatiques :</strong> $V_{pp}$ (Tension crête-à-crête), $V_{rms}$, Fréquence et temps de montée ($t_{rise}$).</li>
        </ol>
      `,
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
