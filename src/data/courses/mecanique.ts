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
      description: 'Forces, moments mécaniques ($M = F \\times d$), torseurs d\'actions mécaniques, principe fondamental de la statique et équilibre dans le plan et l\'espace.',
      pointsCles: [
        'Principe Fondamental de la Statique (PFS) : un solide est à l\'équilibre si la somme vectorielle des forces extérieures est nulle ($\\sum \\vec{F}_{ext} = \\vec{0}$) et la somme des moments en tout point est nulle ($\\sum \\vec{M}_A(\\vec{F}_{ext}) = \\vec{0}$)',
        'Moment d\'une force par rapport à un point : $M_O(F) = F \\cdot d$ (en $\\text{N}\\cdot\\text{m}$), où $d$ est le bras de levier perpendiculaire à la droite d\'action',
        'Isolement d\'un sous-système matériel : bilan rigoureux et exhaustif de toutes les actions mécaniques de contact et à distance (poids)',
        'Système isostatique vs hyperstatique : nombre d\'inconnues scalaires de liaison égal ou supérieur aux équations d\'équilibre disponibles'
      ],
      formuleCle: '\\sum \\vec{F}_{\\text{ext}} = \\vec{0} \\quad \\text{et} \\quad \\sum \\vec{M}_O(\\vec{F}_{\\text{ext}}) = \\vec{0} \\quad | \\quad M = F \\cdot d \\;(\\text{N}\\cdot\\text{m})',
      astuceTerrain: 'Pour débloquer un écrou grippé sans détériorer l\'empreinte, allongez le bras de levier à l\'aide d\'un tube creux plutôt que de taper au marteau : vous augmenterez le couple $M = F \\cdot d$ sans introduire d\'effort tranchant destructeur.',
      conseilProfesseur: 'Avant toute écriture d\'équations de statique, dessinez toujours le schéma du solide isolé en y faisant figurer TOUS les vecteurs forces avec leurs flèches de sens présumé et le repère orthonormé $(O, \\vec{x}, \\vec{y}, \\vec{z})$.',
      contenuHtml: `
        <h3>1. Les Deux Conditions d'Équilibre Statique</h3>
        <p>Dans un problème plan (2D), le PFS se traduit par 3 équations scalaires fondamentales :</p>
        <div class="bg-amber-50 border-l-4 border-amber-800 p-3 rounded-r-xl my-3 font-mono text-xs text-amber-950 space-y-1">
          <div>$\\sum F_x = 0$ (Équilibre des translations horizontales)</div>
          <div>$\\sum F_y = 0$ (Équilibre des translations verticales)</div>
          <div>$\\sum M_A = 0$ (Équilibre des rotations autour d'un point pivot $A$)</div>
        </div>

        <h3>2. Méthodologie d'Isolement d'un Solide</h3>
        <ol class="space-y-1.5 my-3">
          <li><strong>1. Délimiter la frontière d'isolement :</strong> Choisir la pièce ou le groupe de pièces à étudier.</li>
          <li><strong>2. Recenser les actions à distance :</strong> Poids propre ($P = m \\cdot g$), forces magnétiques.</li>
          <li><strong>3. Recenser les actions de contact :</strong> Identifier chaque liaison mécanique coupée par la frontière d'isolement et remplacer chaque contact par son torseur d'action mécanique correspondant.</li>
          <li><strong>4. Écrire le PFS au point le plus judicieux :</strong> Choisir le point où s'annulent le maximum de moments d'inconnues pour simplifier la résolution.</li>
        </ol>
      `,
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
      description: 'Les 11 liaisons cinématiques normalisées ISO, degrés de liberté (3 translations, 3 rotations), torseurs cinématiques et torseurs d\'actions mécaniques.',
      pointsCles: [
        'Un corps libre dans l\'espace possède 6 degrés de liberté : 3 translations ($T_x, T_y, T_z$) et 3 rotations ($R_x, R_y, R_z$)',
        'Liaison Pivot : 1 rotation autorisée ($R_x$), 5 degrés bloqués ($T_x, T_y, T_z, R_y, R_z$)',
        'Liaison Glissière : 1 translation autorisée ($T_x$), 5 degrés bloqués',
        'Liaison Hélicoïdale : translation et rotation couplées par le pas de vis ($T_x = \\frac{p}{2\\pi} \\cdot R_x$)',
        'Liaison Rotule (Sphérique) : 3 rotations libres ($R_x, R_y, R_z$), 3 translations bloquées'
      ],
      formuleCle: '\\text{Mobilités } m + \\text{Degrés de liaison } d_L = 6 \\quad (\\text{dans l\'espace 3D})',
      astuceTerrain: 'Pour concevoir un guidage en translation sans arc-boutement, respectez la règle $L / D \\ge 1.5$ (la longueur du guidage $L$ doit être au moins 1,5 fois supérieure au diamètre ou à la largeur $D$).',
      conseilProfesseur: 'Chaque degré de liberté bloqué par une liaison donne naissance à une composante d\'effort ou de moment de réaction non nulle dans le torseur d\'action mécanique transmissible.',
      contenuHtml: `
        <h3>1. Synthèse des Principales Liaisons Mécaniques</h3>
        <table class="w-full text-xs border border-slate-300 my-4 text-left">
          <thead class="bg-slate-100 font-bold">
            <tr>
              <th class="p-2 border">Liaison Normalisée</th>
              <th class="p-2 border">Mobilités Libres</th>
              <th class="p-2 border">Efforts Transmissibles (Bloqués)</th>
              <th class="p-2 border">Exemples Concrets</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-2 border font-bold">Encastrement (Fixe)</td>
              <td class="p-2 border text-red-700 font-bold">0 mobilité</td>
              <td class="p-2 border">3 forces ($X,Y,Z$) + 3 moments ($L,M,N$)</td>
              <td class="p-2 border">Soudure, emmanchement fretté, vissage bloqué</td>
            </tr>
            <tr>
              <td class="p-2 border font-bold">Pivot</td>
              <td class="p-2 border">1 rotation ($R_x$)</td>
              <td class="p-2 border">3 forces ($X,Y,Z$) + 2 moments ($M,N$)</td>
              <td class="p-2 border">Charnière de porte, roulement à billes fixé</td>
            </tr>
            <tr>
              <td class="p-2 border font-bold">Glissière</td>
              <td class="p-2 border">1 translation ($T_x$)</td>
              <td class="p-2 border">2 forces ($Y,Z$) + 3 moments ($L,M,N$)</td>
              <td class="p-2 border">Rail de guidage linéaire à billes, tiroir</td>
            </tr>
            <tr>
              <td class="p-2 border font-bold">Rotule</td>
              <td class="p-2 border">3 rotations ($R_x, R_y, R_z$)</td>
              <td class="p-2 border">3 forces ($X,Y,Z$), 0 moment</td>
              <td class="p-2 border">Biellette de direction automobile, joystick</td>
            </tr>
          </tbody>
        </table>
      `,
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
      description: 'Contrainte normale $\\sigma = F/S$, déformation unitaire $\\varepsilon$, loi de Hooke, allongement élastique $\\Delta L$, limite élastique $R_e$ et coefficient de sécurité $s$.',
      pointsCles: [
        'Contrainte normale de traction/compression : $\\sigma = \\frac{F}{S}$ exprimée en $\\text{MPa}$ (ou $\\text{N/mm}^2$)',
        'Loi de Hooke (domaine élastique) : $\\sigma = E \\cdot \\varepsilon$ avec $E_{\\text{acier}} \\approx 210\\text{ GPa} = 210\\text{ }000\\text{ MPa}$',
        'Condition de résistance élastique : $\\sigma \\le R_{pe} = \\frac{R_e}{s}$ ($R_{pe}$ : résistance pratique à l\'extension, $s$ : coefficient de sécurité $\\ge 1.5$)',
        'Allongement élastique total : $\\Delta L = \\frac{F \\cdot L_0}{E \\cdot S}$'
      ],
      formuleCle: '\\sigma = \\frac{F}{S} \\le R_{pe} = \\frac{R_e}{s} \\quad | \\quad \\Delta L = \\frac{F \\cdot L_0}{E \\cdot S}',
      astuceTerrain: 'En calcul RDM pratique, utilisez toujours les unités cohérentes du génie mécanique : Force en Newtons (N), Dimensions en millimètres (mm) $\\implies$ Contraintes directement en MPa (N/mm²).',
      conseilProfesseur: 'Ne confondez jamais la limite élastique $R_e$ (seuil de déformation permanente irréversible) avec la résistance à la rupture $R_m$ (seuil de casse physique). Une structure mécanique doit TOUJOURS rester sous $R_{pe} = R_e / s$.',
      contenuHtml: `
        <h3>1. La Courbe de Traction des Aciers</h3>
        <p>L'essai de traction normalisé met en évidence 3 zones fondamentales :</p>
        <ul>
          <li><strong>Zone 1 : Domaine Élastique Réversible ($\sigma < R_e$) :</strong> La pièce s'allonge proportionnellement à la force et reprend sa forme initiale dès le relâchement.</li>
          <li><strong>Zone 2 : Domaine Plastique ($\sigma > R_e$) :</strong> Déformation permanente irréversible (écrouissage).</li>
          <li><strong>Zone 3 : Striction et Rupture ($\sigma = R_m$) :</strong> Réduction locale de section puis cassure de la pièce.</li>
        </ul>
      `,
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
      description: 'Effort tranchant $T_y$, moment fléchissant $M_{fz}$, moment quadratique d’inertie $I_z$, contrainte maximale de flexion et calcul de flèche.',
      pointsCles: [
        'Contrainte maximale de flexion : $\\sigma_{\\text{max}} = \\frac{M_{fz(\\text{max})}}{I_z} \\cdot y_{\\text{max}} = \\frac{M_{fz(\\text{max})}}{\\frac{I_z}{v}} \\le R_{pe}$',
        'Moment quadratique d\'une section rectangulaire ($b \\times h$) : $I_z = \\frac{b \\cdot h^3}{12}$ (la hauteur $h$ au cube domine la rigidité)',
        'Moment quadratique d\'un arbre cylindrique plein : $I_z = \\frac{\\pi \\cdot d^4}{64}$ et module de flexion $\\frac{I_z}{v} = \\frac{\\pi \\cdot d^3}{32}$',
        'Condition de rigidité : la flèche maximale sous charge $f_{\\text{max}}$ ne doit pas dépasser la flèche admissible (ex: $f \\le \\frac{L}{500}$ pour les ponts roulants)'
      ],
      formuleCle: '\\sigma_{\\text{max}} = \\frac{|M_{fz\\text{ max}}|}{\\frac{I_z}{v}} \\le R_{pe} \\quad | \\quad I_{z\\text{ rectangle}} = \\frac{b \\cdot h^3}{12}',
      astuceTerrain: 'Pour rigidifier une poutre sans l\'alourdir, placez la matière le plus loin possible de l\'axe neutre (c\'est la raison d\'être des profilés métalliques en IPN, IPE ou HEB).',
      conseilProfesseur: 'Notez que doubler la hauteur $h$ d\'une poutre rectangulaire divise la contrainte par 4 et la déformation (flèche) par 8 !',
      contenuHtml: `
        <h3>1. Diagrammes $T_y$ et $M_{fz}$ d'une Poutre sur 2 Appuis avec Charge Ponctuelle Centrale</h3>
        <p>Pour une poutre de longueur $L$ supportant une force $F$ en son milieu :</p>
        <div class="bg-slate-50 border p-3 rounded-xl font-mono text-xs my-3 space-y-1">
          <div>$M_{fz(\\text{max})} = \\frac{F \\cdot L}{4}$ (au centre de la portée)</div>
          <div>$\\text{Flèche maximale } f_{\\text{max}} = \\frac{F \\cdot L^3}{48 \\cdot E \\cdot I_z}$</div>
        </div>
      `,
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
      description: 'Moment de torsion $M_t$, contrainte de cisaillement tangentielle $\\tau_{\\text{max}}$, module de Coulomb $G$, angle unitaire de torsion $\\theta$ et puissance motrice.',
      pointsCles: [
        'Relation Puissance - Couple - Vitesse : $P = C \\cdot \\omega$ avec $P$ en Watts, $C$ en $\\text{N}\\cdot\\text{m}$, et $\\omega = \\frac{2\\pi \\cdot N}{60}$ en $\\text{rad/s}$',
        'Contrainte tangentielle maximale de torsion : $\\tau_{\\text{max}} = \\frac{M_t}{I_0} \\cdot R = \\frac{16 \\cdot M_t}{\\pi \\cdot d^3} \\le R_{pg}$',
        'Résistance pratique au glissement : $R_{pg} = \\frac{R_{eg}}{s} \\approx 0.5 \\text{ à } 0.6 \\cdot \\frac{R_e}{s}$',
        'Arbres creux : allègent considérablement la masse tournante tout en conservant 90% de la résistance à la torsion'
      ],
      formuleCle: 'C = \\frac{P}{\\omega} \\quad | \\quad \\tau_{\\text{max}} = \\frac{16 \\cdot C}{\\pi \\cdot d^3} \\le R_{pg} \\quad \\left(\\omega = \\frac{2\\pi N}{60}\\right)',
      astuceTerrain: 'Pour calculer rapidement le couple d\'un moteur électrique tournant à 1500 tr/min : $C (\\text{N}\\cdot\\text{m}) \\approx 6.36 \\times P (\\text{kW})$ (ex: un moteur 10 kW fournit environ 63.6 N·m).',
      conseilProfesseur: 'En torsion pure, les fibres centrales d\'un arbre ne travaillent quasiment pas ($\tau = 0$ au centre). C\'est pourquoi les arbres d\'hélice de bateaux et les arbres de transmission de camions sont tubulaires creux.',
      contenuHtml: `
        <h3>1. Dimensionnement d'un Arbre de Transmission en Torsion</h3>
        <p>Pour déterminer le diamètre minimal $d_{\\text{min}}$ d'un arbre transmettant un couple $C$ sous une contrainte admissible $R_{pg}$ :</p>
        <div class="bg-blue-50 border-l-4 border-blue-900 p-3 rounded-r-xl my-3 font-mono text-sm text-blue-950 font-bold">
          d \\ge \\sqrt[3]{\\frac{16 \\cdot C}{\\pi \\cdot R_{pg}}}
        </div>
      `,
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
      description: 'Module $m$, diamètre primitif $d = m \\times Z$, entraxe, rapport de réduction cinématique $r$, trains d’engrenages simples et épicycloïdaux.',
      pointsCles: [
        'Module normalisé ($m$) : grandeur fondamentale. Deux roues ne peuvent engrener que si elles ont rigoureusement le même module $m$',
        'Diamètre primitif : $d = m \\cdot Z$ ($Z$ : nombre de dents) | Pas primitif : $p = \\pi \\cdot m$',
        'Rapport de transmission simple : $r = \\frac{N_{\\text{sortie}}}{N_{\\text{entrée}}} = \\frac{Z_{\\text{menant}}}{Z_{\\text{mené}}}$',
        'Raison d\'un train d\'engrenages à $k$ contacts extérieurs : $r = (-1)^k \\cdot \\frac{\\prod Z_{\\text{menantes}}}{\\prod Z_{\\text{menées}}}$',
        'Couple de sortie : $C_{\\text{sortie}} = \\frac{C_{\\text{entrée}}}{r} \\cdot \\eta_{\\text{global}}$ ($\eta \\approx 0.98$ par étage d\'engrenage)'
      ],
      formuleCle: 'd = m \\cdot Z \\quad | \\quad r = \\frac{N_2}{N_1} = \\frac{Z_1}{Z_2} \\quad | \\quad C_2 = C_1 \\cdot \\frac{Z_2}{Z_1} \\cdot \\eta',
      astuceTerrain: 'Lors du remplacement d\'une roue dentée endommagée, ne changez jamais une seule roue : remplacez impérativement le pignon et la roue en couple pour éviter une usure prématurée par rodage asymétrique.',
      conseilProfesseur: 'Un réducteur est un multiplicateur de couple : si vous divisez la vitesse par 10 ($r = 0.1$), vous multipliez le couple disponible par près de 10.',
      contenuHtml: `
        <h3>1. Géométrie des Dentures Droites Normalisées</h3>
        <table class="w-full text-xs border border-slate-300 my-4 text-left">
          <thead class="bg-slate-100 font-bold">
            <tr>
              <th class="p-2 border">Grandeur</th>
              <th class="p-2 border">Symbole</th>
              <th class="p-2 border">Formule de Calcul</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="p-2 border font-bold">Diamètre Primitif</td><td class="p-2 border">$d$</td><td class="p-2 border font-mono">$d = m \\cdot Z$</td></tr>
            <tr><td class="p-2 border font-bold">Diamètre de Tête (Extérieur)</td><td class="p-2 border">$d_a$</td><td class="p-2 border font-mono">$d_a = d + 2m = m(Z + 2)$</td></tr>
            <tr><td class="p-2 border font-bold">Diamètre de Pied (Fond de dent)</td><td class="p-2 border">$d_f$</td><td class="p-2 border font-mono">$d_f = d - 2.5m = m(Z - 2.5)$</td></tr>
            <tr><td class="p-2 border font-bold">Entraxe de Montage</td><td class="p-2 border">$a$</td><td class="p-2 border font-mono">$a = \\frac{d_1 + d_2}{2} = m \\cdot \\frac{Z_1 + Z_2}{2}$</td></tr>
          </tbody>
        </table>
      `,
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
      description: 'Types de roulements (radiaux, contact oblique, rouleaux coniques, rotules sur rouleaux), règles de montage serré/glissant, montages en X et en O, et calcul de durée de vie $L_{10h}$.',
      pointsCles: [
        'Règle d\'or des ajustements : la bague qui tourne par rapport à la direction de la charge radiale DOIT être montée SERRÉE (pour éviter le matage par laminage)',
        'Bague fixe par rapport à la charge : montée GLISSANTE pour permettre la dilatation thermique longitudinale',
        'Montages de roulements coniques : Montage en O (direct) pour arbres tournants rigides ; Montage en X (indirect) pour boîtiers tournants',
        'Durée de vie nominale $L_{10}$ : durée en millions de tours atteinte par 90% d\'un lot de roulements identiques sans écaillage'
      ],
      formuleCle: 'L_{10} = \\left(\\frac{C}{P}\\right)^p \\quad (p=3 \\text{ pour billes}, p=10/3 \\text{ pour rouleaux}) \\quad | \\quad L_{10h} = \\frac{10^6 \\cdot L_{10}}{60 \\cdot N}',
      astuceTerrain: 'Lors du montage d\'un roulement à la presse ou à la douille de frappe, appliquez l\'effort de poussée UNIQUEMENT sur la bague montée serrée (ne transmettez jamais l\'effort à travers les billes sous peine de billage destructeur des pistes).',
      conseilProfesseur: 'Pour monter facilement un roulement serré sur un arbre sans forcer, chauffez-le par induction à environ 110°C : sa dilatation thermique permettra un emmanchement sans aucun effort mécanique.',
      contenuHtml: `
        <h3>1. Guide de Choix des Familles de Roulements</h3>
        <table class="w-full text-xs border border-slate-300 my-4 text-left">
          <thead class="bg-slate-100 font-bold">
            <tr>
              <th class="p-2 border">Type de Roulement</th>
              <th class="p-2 border">Charge Radiale ($F_r$)</th>
              <th class="p-2 border">Charge Axiale ($F_a$)</th>
              <th class="p-2 border">Aptitude à la Vitesse</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="p-2 border font-bold">Rigide à 1 rangée de billes</td><td class="p-2 border">Bonne</td><td class="p-2 border">Modérée (dans les 2 sens)</td><td class="p-2 border text-emerald-700 font-bold">Très élevée</td></tr>
            <tr><td class="p-2 border font-bold">À billes à contact oblique</td><td class="p-2 border">Très bonne</td><td class="p-2 border">Élevée (1 seul sens)</td><td class="p-2 border text-emerald-700 font-bold">Élevée</td></tr>
            <tr><td class="p-2 border font-bold">À rouleaux cylindriques</td><td class="p-2 border text-emerald-700 font-bold">Très forte</td><td class="p-2 border text-red-700">Nulle</td><td class="p-2 border">Moyenne à bonne</td></tr>
            <tr><td class="p-2 border font-bold">À rouleaux coniques</td><td class="p-2 border text-emerald-700 font-bold">Exceptionnelle</td><td class="p-2 border text-emerald-700 font-bold">Très élevée (1 sens)</td><td class="p-2 border">Moyenne</td></tr>
          </tbody>
        </table>
      `,
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
      description: 'Courroies trapézoïdales (adhérence et effet de coin), courroies synchrones crantées HTD, chaînes à rouleaux ISO 606, tension de pose et alignement laser de poulies.',
      pointsCles: [
        'Courroie trapézoïdale : transmet la puissance par adhérence sur les flancs de la gorge (effet de coin augmentant le frottement apparent)',
        'Courroie synchrone crantée : transmission par obstacle sans aucun glissement (maintien rigoureux du calage angulaire)',
        'Chaîne à rouleaux : transmet de très forts couples à basse/moyenne vitesse avec un entraxe variable sans tension initiale élevée',
        'Contrôle de tension : mesure par fréquencemètre acoustique optique (vibration de brin en Hz)'
      ],
      formuleCle: '\\frac{T}{t} = e^{f \\cdot \\alpha} \\quad (\\text{Formule d\'Eytelwein pour courroies par adhérence})',
      astuceTerrain: 'Une courroie trapézoïdale ne doit JAMAIS toucher le fond de la gorge de la poulie. Si le fond est brillant, c\'est le signe indiscutable d\'une gorge ou d\'une courroie usée qui patine.',
      conseilProfesseur: 'Une sous-tension de courroie entraîne patinage, surchauffe et usure prématurée. Une sur-tension détruit prématurément les roulements des paliers moteur et récepteur !',
      contenuHtml: `
        <h3>1. Comparatif des Transmissions par Liens Flexibles</h3>
        <table class="w-full text-xs border border-slate-300 my-4 text-left">
          <thead class="bg-slate-100 font-bold">
            <tr>
              <th class="p-2 border">Technologie</th>
              <th class="p-2 border">Principe</th>
              <th class="p-2 border">Glissement</th>
              <th class="p-2 border">Rendement</th>
              <th class="p-2 border">Lubrification</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="p-2 border font-bold">Courroie Trapézoïdale</td><td class="p-2 border">Adhérence</td><td class="p-2 border text-amber-700">1 à 2% (glissement élastique)</td><td class="p-2 border">94 à 96%</td><td class="p-2 border font-bold text-red-700">Interdite (patinage)</td></tr>
            <tr><td class="p-2 border font-bold">Courroie Synchrone (Crantée)</td><td class="p-2 border">Obstacle (dents)</td><td class="p-2 border text-emerald-700 font-bold">Nul (0%)</td><td class="p-2 border text-emerald-700 font-bold">98%</td><td class="p-2 border">Non requise</td></tr>
            <tr><td class="p-2 border font-bold">Chaîne à Rouleaux</td><td class="p-2 border">Obstacle (pignons)</td><td class="p-2 border text-emerald-700 font-bold">Nul (0%)</td><td class="p-2 border">96 à 98%</td><td class="p-2 border font-bold text-emerald-700">Obligatoire</td></tr>
          </tbody>
        </table>
      `,
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
      description: 'Système ISO d’ajustements (Alésage normal H7/g6, H7/p6, etc.), calcul des jeux min/max et tolérances géométriques de forme, orientation et position (GPS).',
      pointsCles: [
        'Ajustement ISO : défini par la cote nominale, la lettre de tolérance de l\'alésage (Majuscule) et celle de l\'arbre (minuscule), ex: $\\varnothing 30\\text{ H7/g6}$',
        'Système de l\'Alésage Normal H : l\'écart inférieur de l\'alésage est rigoureusement nul ($EI = 0$)',
        '3 familles d\'ajustements : Avec Jeu ($a$ à $h$, ex: $H7/f7$), Incertain ($j$ à $n$, ex: $H7/js6$), Serré avec serrage garanti ($p$ à $z$, ex: $H7/p6$)',
        'Tolérances géométriques GPS : Rectitude, Planéité, Circularité, Cylindricité, Perpendicularité, Parallélisme, Coaxialité, Localisation'
      ],
      formuleCle: 'Jeu_{\\text{max}} = Alésage_{\\text{max}} - Arbre_{\\text{min}} \\quad | \\quad Jeu_{\\text{min}} = Alésage_{\\text{min}} - Arbre_{\\text{max}}',
      astuceTerrain: 'Pour contrôler rapidement un alésage ou un arbre en production série d\'atelier, utilisez un tampon double lisse ou une fourche calibrée "Entre / N\'entre pas".',
      conseilProfesseur: 'Plus l\'intervalle de tolérance (IT) est serré (IT5 au lieu d\'IT9), plus le coût d\'usinage explose de façon exponentielle : appliquez le juste tolérancement strictement nécessaire à la fonction.',
      contenuHtml: `
        <h3>1. Les Principaux Ajustements Normalisés Usuels</h3>
        <table class="w-full text-xs border border-slate-300 my-4 text-left">
          <thead class="bg-slate-100 font-bold">
            <tr>
              <th class="p-2 border">Désignation</th>
              <th class="p-2 border">Type de Montage</th>
              <th class="p-2 border">Comportement & Application</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="p-2 border font-bold font-mono">H7 / f7</td><td class="p-2 border text-blue-800 font-bold">Jeu libre</td><td class="p-2 border">Guidage en rotation ou translation avec jeu sensible, coulissement gras</td></tr>
            <tr><td class="p-2 border font-bold font-mono">H7 / g6</td><td class="p-2 border text-blue-800 font-bold">Jeu très réduit</td><td class="p-2 border">Guidage précis sans jeu perceptible démontable à la main</td></tr>
            <tr><td class="p-2 border font-bold font-mono">H7 / js6</td><td class="p-2 border text-amber-800 font-bold">Incertain</td><td class="p-2 border">Positionnement précis démontable au maillet bois/caoutchouc</td></tr>
            <tr><td class="p-2 border font-bold font-mono">H7 / p6</td><td class="p-2 border text-red-800 font-bold">Serré garanti</td><td class="p-2 border">Assemblage fixe transmettant des efforts, montage à la presse ou frettage</td></tr>
          </tbody>
        </table>
      `,
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
      description: 'Production d’air comprimé, compresseurs (à vis, à pistons), groupe de traitement d’air FRL (Filtre, Régulateur, Lubrificateur), point de rosée et dimensionnement de réseaux.',
      pointsCles: [
        'Pression standard des réseaux d\'ateliers industriels : $6\\text{ bars}$ ($0.6\\text{ MPa}$)',
        'Groupe FRL : Filtre (sépare condensats et particules à 5 µm), Régulateur de pression (stabilise la pression aval), Lubrificateur (optionnel pour outils rotatifs)',
        'Point de rosée sous pression : température à laquelle la vapeur d\'eau contenue dans l\'air commence à se condenser (sécheur frigorifique à $+3^\\circ\\text{C}$)',
        'Pente du réseau de distribution : pente de 1 à 2% dans le sens de l\'écoulement avec piquages par col de cygne pour éviter d\'envoyer l\'eau vers les machines'
      ],
      formuleCle: '1\\text{ bar} = 10^5\\text{ Pa} = 0.1\\text{ N/mm}^2 = 100\\text{ kPa} \\approx 1.02\\text{ kgf/cm}^2',
      astuceTerrain: 'Réalisez toujours les piquages secondaires d\'air sur le dessus de la conduite principale (col de cygne à 180°) pour que les condensats d\'eau restent au fond du tuyau principal et soient évacués par les purgeurs automatiques d\'extrémité.',
      conseilProfesseur: 'L\'air comprimé est l\'énergie industrielle la plus chère au kWh (rendement global < 10%) : traquez sans relâche les fuites d\'air avec un détecteur à ultrasons.',
      contenuHtml: `
        <h3>1. Les Éléments d'une Centrale d'Air Comprimé</h3>
        <ol class="space-y-1.5 my-3">
          <li><strong>1. Compresseur d'air (à vis) :</strong> Aspire l'air ambiant et le comprime à 8-10 bars.</li>
          <li><strong>2. Réservoir tampon :</strong> Lisse les pulsations de pression et permet un premier refroidissement et décantation des condensats.</li>
          <li><strong>3. Sécheur d'air frigorifique :</strong> Refroidit l'air à +3°C pour condenser et évacuer l'humidité résiduelle.</li>
          <li><strong>4. Filtres submicroniques et déshuileurs :</strong> Retiennent les aérosols d'huile jusqu'à 0.01 micron.</li>
          <li><strong>5. Groupe FRL local :</strong> Placé à l'entrée de chaque îlot de production pour ajuster la pression de service à 6 bars.</li>
        </ol>
      `,
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
      description: 'Vérins simple effet (VSE) et double effet (VDE), calcul de force de poussée et de traction, distributeurs 3/2, 5/2, 5/3 (centre fermé/ouvert/pression) et régleurs de débit unidirectionnels.',
      pointsCles: [
        'Force théorique de poussée (sortie de tige) : $F_{\\text{poussée}} = P \\cdot S_{\\text{piston}} = P \\cdot \\frac{\\pi D^2}{4}$',
        'Force théorique de traction (rentrée de tige) : $F_{\\text{traction}} = P \\cdot S_{\\text{annulaire}} = P \\cdot \\frac{\\pi (D^2 - d^2)}{4}$ (où $d$ est le diamètre de la tige)',
        'Taux de charge pratique : dimensionner le vérin pour que $F_{\\text{charge}} \\le 0.5 \\text{ à } 0.7 \\cdot F_{\\text{théorique}}$ en dynamique',
        'Distributeur 5/2 : 5 orifices (1: Alim, 2/4: Utilisations vérin, 3/5: Échappements), 2 positions'
      ],
      formuleCle: 'F_{\\text{poussée}} = P \\cdot \\frac{\\pi \\cdot D^2}{4} \\quad | \\quad F_{\\text{traction}} = P \\cdot \\frac{\\pi (D^2 - d^2)}{4}',
      astuceTerrain: 'Pour réguler la vitesse d\'un vérin pneumatique sans à-coups ni instabilité, montez TOUJOURS les régleurs de débit en limitation d\'échappement (freinage de l\'air sortant de la chambre opposée) et non en restriction d\'admission.',
      conseilProfesseur: 'La numérotation normalisée ISO des distributeurs pneumatiques est simple : 1 = Pression d\'alimentation, 2 et 4 = Sorties vers le vérin, 3 et 5 = Échappements vers silencieux, 12 et 14 = Pilotages.',
      contenuHtml: `
        <h3>1. Les Principaux Types de Distributeurs Pneumatiques</h3>
        <table class="w-full text-xs border border-slate-300 my-4 text-left">
          <thead class="bg-slate-100 font-bold">
            <tr>
              <th class="p-2 border">Symbole ISO</th>
              <th class="p-2 border">Désignation</th>
              <th class="p-2 border">Actionneur Associé</th>
              <th class="p-2 border">Fonction Typique</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="p-2 border font-bold">3/2 NF</td><td class="p-2 border">3 orifices, 2 positions, Normalement Fermé</td><td class="p-2 border">Vérin Simple Effet (VSE), ventouse à vide</td><td class="p-2 border">Bouton poussoir de commande, alimentation mono-chambre</td></tr>
            <tr><td class="p-2 border font-bold">5/2 Bistable</td><td class="p-2 border">5 orifices, 2 positions, double pilotage</td><td class="p-2 border">Vérin Double Effet (VDE)</td><td class="p-2 border">Mémorisation pneumatique de cycle aller/retour</td></tr>
            <tr><td class="p-2 border font-bold">5/3 Centre Fermé</td><td class="p-2 border">5 orifices, 3 positions, rappel au centre</td><td class="p-2 border">Vérin Double Effet (VDE)</td><td class="p-2 border">Arrêt d'urgence intermédiaire en position bloquée</td></tr>
          </tbody>
        </table>
      `,
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
      description: 'Loi de Pascal, fluides hydrauliques incompressibles (huiles minérales ISO VG 46), pompes à cylindrée fixe et variable (engrenages, palettes, pistons axiaux) et puissance hydraulique.',
      pointsCles: [
        'Loi de Pascal : toute variation de pression en un point d\'un fluide confiné incompressible se transmet intégralement dans toutes les directions',
        'La pompe ne crée pas de pression : elle génère un DÉBIT ($Q$). C\'est la résistance de la charge qui engendre la pression ($P = F/S$)',
        'Puissance hydraulique : $P_{\\text{hyd}} (\\text{kW}) = \\frac{p (\\text{bar}) \\times Q (\\text{L/min})}{600}$',
        'Technologies de pompes : Pompes à engrenages (jusqu\'à 200 bars, économiques), Pompes à pistons axiaux à plateau incliné (jusqu\'à 420 bars, haut rendement)'
      ],
      formuleCle: 'P_{\\text{hyd}} (\\text{kW}) = \\frac{p (\\text{bar}) \\cdot Q (\\text{L/min})}{600} \\quad | \\quad Q (\\text{L/min}) = \\frac{\\text{Cylindrée (cm}^3\\text{/tr)} \\cdot N (\\text{tr/min})}{1000}',
      astuceTerrain: 'Si une pompe hydraulique émet un sifflement strident et vibre violemment, vérifiez immédiatement la ligne d\'aspiration : il s\'agit presque toujours de cavitation (filtre d\'aspiration colmaté ou huile trop froide/visqueuse) détruisant le métal des pistons.',
      conseilProfesseur: 'Ne touchez jamais une fuite d\'huile sous haute pression (150-300 bars) avec la main : le jet peut traverser la peau et provoquer une injection sous-cutanée toxique extrêmement grave (amputation). Utilisez toujours un morceau de carton pour localiser la fuite.',
      contenuHtml: `
        <h3>1. Comparatif des Technologies de Pompes Hydrauliques</h3>
        <table class="w-full text-xs border border-slate-300 my-4 text-left">
          <thead class="bg-slate-100 font-bold">
            <tr>
              <th class="p-2 border">Technologie</th>
              <th class="p-2 border">Pression Maximale</th>
              <th class="p-2 border">Cylindrée</th>
              <th class="p-2 border">Rendement Global</th>
              <th class="p-2 border">Domaines d'Application</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="p-2 border font-bold">Engrenages Externes</td><td class="p-2 border">180 à 250 bars</td><td class="p-2 border">Fixe</td><td class="p-2 border">75% à 85%</td><td class="p-2 border">Tracteurs, hayons élévateurs, petites centrales</td></tr>
            <tr><td class="p-2 border font-bold">Palettes</td><td class="p-2 border">150 à 210 bars</td><td class="p-2 border">Fixe ou Variable</td><td class="p-2 border">80% à 90%</td><td class="p-2 border">Machines-outils (silencieuses)</td></tr>
            <tr><td class="p-2 border font-bold">Pistons Axiaux</td><td class="p-2 border text-emerald-700 font-bold">350 à 450 bars</td><td class="p-2 border text-emerald-700 font-bold">Variable (Load Sensing)</td><td class="p-2 border text-emerald-700 font-bold">90% à 95%</td><td class="p-2 border">Presses industrielles, pelles mécaniques, engins de TP</td></tr>
          </tbody>
        </table>
      `,
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
      description: 'Limiteur de pression principal (sécurité du groupe), réducteurs de pression, clapets anti-retour pilotés pour blocage de charge suspendue et accumulateurs hydropneumatiques.',
      pointsCles: [
        'Limiteur de Pression (LP) : organe de sécurité INDISPENSABLE monté en dérivation directe sur la pompe pour limiter la pression maximale en déchargeant le débit vers le bac',
        'Tarage du LP : réglé typiquement à $+10\\%$ à $+15\\%$ au-dessus de la pression de travail maximale requise',
        'Clapet anti-retour piloté (clapet de sécurité de charge) : garantit l\'immobilité absolue d\'un vérin levant une charge même en cas de rupture de flexible',
        'Accumulateur à vessie d\'azote : stocke l\'énergie hydraulique pour absorber les coups de bélier et assurer une réserve de secours'
      ],
      formuleCle: 'P_{\\text{tarage LP}} = P_{\\text{travail}} + \\Delta P_{\\text{sécurité}} \\quad (\\text{ex: } 180\\text{ bars } + 20\\text{ bars } = 200\\text{ bars})',
      astuceTerrain: 'Avant toute intervention de démontage sur un circuit hydraulique équipé d\'un accumulateur, isolez et déchargez IMPÉRATIVEMENT la pression de l\'accumulateur vers la bâche par le robinet de purge manuel prévu.',
      conseilProfesseur: 'Un limiteur de pression qui reste constamment ouvert fait chauffer l\'huile de la centrale à plus de 70°C et détruit les joints en quelques heures : la pression de travail normale ne doit jamais faire ouvrir le LP.',
      contenuHtml: `
        <h3>1. Rôles et Schémas des Appareils Hydrauliques Principaux</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4 text-xs">
          <div class="bg-slate-50 border p-3 rounded-xl">
            <span class="font-bold text-slate-900 block mb-1">1. Limiteur de Pression</span>
            Monte la pression à l'entrée et évacue le surplus d'huile au réservoir dès que la force du ressort est vaincue.
          </div>
          <div class="bg-slate-50 border p-3 rounded-xl">
            <span class="font-bold text-slate-900 block mb-1">2. Réducteur de Pression</span>
            Régule et maintient une pression constante inférieure dans une branche secondaire du circuit.
          </div>
          <div class="bg-slate-50 border p-3 rounded-xl">
            <span class="font-bold text-slate-900 block mb-1">3. Clapet Anti-Retour Piloté</span>
            Bloque hermétiquement le fluide dans un sens, et s'ouvre artificiellement lorsqu'une pression de pilotage est envoyée.
          </div>
          <div class="bg-slate-50 border p-3 rounded-xl">
            <span class="font-bold text-slate-900 block mb-1">4. Régulateur de Débit Compensé</span>
            Maintient une vitesse de vérin strictement constante quelle que soit la variation de la charge résistante.
          </div>
        </div>
      `,
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
      description: 'Régimes de lubrification (onctueux, limite, mixte, hydrodynamique), courbe de Stribeck, huiles industrielles ISO VG, graisses NLGI et spectrométrie de particules d’usure.',
      pointsCles: [
        'Courbe de Stribeck : caractérise le coefficient de frottement $\\mu$ en fonction du paramètre de vitesse et viscosité $(\\frac{\\eta \\cdot v}{P})$',
        'Lubrification Hydrodynamique : un film d\'huile continu sous pression sépare totalement les deux surfaces métalliques (frottement fluide minimal $\\mu < 0.005$)',
        'Grade de viscosité ISO VG (ex: ISO VG 46, VG 68, VG 220) : viscosité cinématique en $\\text{mm}^2/\\text{s}$ (ou $\\text{cSt}$) mesurée rigoureusement à $40^\\circ\\text{C}$',
        'Graisse industrielle : composée d\'huile de base (80-90%), d\'un épaississant/savon (Lithium, Calcium, Polyurée) et d\'additifs (anti-usure, extrême-pression EP)'
      ],
      formuleCle: '\\text{Viscosité ISO VG} = \\text{Viscosité cinématique en cSt à } 40^\\circ\\text{C} \\quad | \\quad \\text{Stribeck: } \\mu = f\\left(\\frac{\\eta \\cdot N}{P}\\right)',
      astuceTerrain: 'Ne mélangez JAMAIS deux graisses de savons différents (ex: graisse Lithium et graisse Complexe Aluminium) sans vérifier leur tableau de compatibilité : l\'épaississant peut se liquéfier et s\'écouler hors du roulement.',
      conseilProfesseur: 'La majorité des défaillances de roulements proviennent d\'une mauvaise lubrification : 50% par sur-graissage (qui provoque un échauffement interne par barbotage), 30% par pollution par poussières/eau, et 20% par sous-graissage.',
      contenuHtml: `
        <h3>1. Les Trois Régimes de Lubrification selon Stribeck</h3>
        <ul>
          <li><strong>1. Régime Limite / Onctueux :</strong> Vitesse faible ou charge très forte. Le film d'huile est rompu, les aspérités métalliques se touchent ($\mu \approx 0.1$). Usure rapide.</li>
          <li><strong>2. Régime Mixte :</strong> Transition intermédiaire. Une partie de la charge est supportée par le fluide, une partie par contact direct ($\mu \approx 0.02$).</li>
          <li><strong>3. Régime Hydrodynamique (Idéal) :</strong> Portance totale par coin d'huile. Aucun contact métallique, usure nulle des pièces ($\mu \approx 0.001$).</li>
        </ul>
      `,
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
      description: 'Surveillance conditionnelle des machines tournantes selon ISO 10816-3, spectre FFT (vitesse RMS), détection de balourd (1X), désalignement (2X), défauts de roulements (BPFO/BPFI) et lignage laser.',
      pointsCles: [
        'Vitesse vibratoire globale RMS ($V_{\\text{RMS}}$ en $\\text{mm/s}$) : indicateur standard de sévérité vibratoire selon ISO 10816-3 (Zone A: Neuf < 1.4 mm/s, Zone D: Danger > 4.5 mm/s)',
        'Défaut de Balourd (déséquilibre de masse du rotor) : raie dominante prépondérante à la fréquence de rotation exacte $1X$',
        'Défaut de Désalignement : pics dominants à $2X$ (deux fois la vitesse de rotation) et $1X$ avec forte composante axiale',
        'Défauts de Roulements (Haute fréquence) : fréquences caractéristiques de bague externe (BPFO), bague interne (BPFI), billes (BSF) et cage (FTF)'
      ],
      formuleCle: 'V_{\\text{RMS}} = \\sqrt{\\frac{1}{T} \\int_0^T v^2(t) dt} \\quad | \\quad f_{\\text{rotation } 1X} (\\text{Hz}) = \\frac{N (\\text{tr/min})}{60}',
      astuceTerrain: 'Effectuez systématiquement un lignage laser d\'arbres accouplés à chaud ou tenez compte de la dilatation thermique du bloc moteur (les arbres ont tendance à monter de 0.1 à 0.3 mm à température de fonctionnement).',
      conseilProfesseur: 'L\'analyse vibratoire permet de détecter un défaut de roulement 3 à 6 mois avant sa casse physique : c\'est le pilier numéro 1 de la maintenance prédictive moderne 4.0.',
      contenuHtml: `
        <h3>1. Diagnostic des Pannes Courantes par le Spectre Fréquentiel FFT</h3>
        <table class="w-full text-xs border border-slate-300 my-4 text-left">
          <thead class="bg-slate-100 font-bold">
            <tr>
              <th class="p-2 border">Défaut Mécanique</th>
              <th class="p-2 border">Fréquence FFT Typique</th>
              <th class="p-2 border">Direction Dominante</th>
              <th class="p-2 border">Action Corrective</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="p-2 border font-bold">Balourd</td><td class="p-2 border font-mono text-blue-900 font-bold">1X (synchrone)</td><td class="p-2 border">Radiale (Horizontale / Verticale)</td><td class="p-2 border">Équilibrage dynamique in situ avec masselottes</td></tr>
            <tr><td class="p-2 border font-bold">Désalignement</td><td class="p-2 border font-mono text-amber-900 font-bold">2X et 1X</td><td class="p-2 border">Axiale et Radiale</td><td class="p-2 border">Lignage laser d'arbres avec cales calibrées en inox</td></tr>
            <tr><td class="p-2 border font-bold">Jeu mécanique / Desserrage</td><td class="p-2 border font-mono">Harmoniques 1X, 2X, 3X, 4X...</td><td class="p-2 border">Radiale Verticale</td><td class="p-2 border">Resserrage au couple des boulons de fixation du bâti</td></tr>
            <tr><td class="p-2 border font-bold">Écaillage de Roulement</td><td class="p-2 border font-mono text-red-900 font-bold">BPFO / BPFI (Haute fréquence)</td><td class="p-2 border">Radiale et Haute fréquence (Facteur crête)</td><td class="p-2 border">Remplacement planifié du roulement à l'arrêt usine</td></tr>
          </tbody>
        </table>
      `,
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
