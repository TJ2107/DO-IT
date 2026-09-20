import { Domaine, NiveauDifficulte, TypeQuestion, Cours } from '../../types';

export const COURSE_AUTOMATISME: Cours = {
  id: 'auto_101',
  domaine: Domaine.AUTOMATISME,
  domaineNom: 'Automatisme',
  icon: '🤖',
  titre: "Automatisme Industriel, API & Grafcet Normalisé",
  description: 'Cursus complet de 15 chapitres : Grafcet IEC 60848, Automates Programmables Industriels (API), langages IEC 61131-3 (LADDER, ST, FBD), bus de terrain (Modbus, Profinet), régulation PID et supervision SCADA.',
  niveau: NiveauDifficulte.INTERMEDIAIRE,
  dureeHeures: 48,
  colorClass: 'from-purple-600 to-indigo-700',
  titreBrevet: "Brevet Professionnel d'Automatisme & Régulation Industrielle",
  objectifs: [
    'Concevoir des cycles automatisés rigoureux en Grafcet niveau 1 et niveau 2',
    'Programmer les Automates Programmables Industriels (Siemens, Schneider, Rockwell)',
    'Maîtriser les 5 langages de la norme IEC 61131-3 (LD, ST, FBD, IL, SFC)',
    'Configurer les bus industriels de terrain (Modbus TCP, Profinet, IO-Link)',
    'Régler des boucles fermées de régulation PID de température, niveau et pression'
  ],
  competences: [
    'Grafcet IEC 60848 & Guide GEMMA',
    'Programmation API en LADDER (LD) & Texte Structuré (ST)',
    'Bus de Terrain & Réseaux Industriels (Profinet / Modbus)',
    'Régulation PID & Boucles Fermées',
    'Supervision Industrielle HMI / SCADA',
    'Sécurité Machine & Arrêt d’Urgence SIL / PL',
    'Diagnostic et Dépannage d’Automates'
  ],
  preRequis: ['Bases d’électricité et logique combinatoire'],
  certifiant: true,
  scoreMinValidation: 0.7,
  dureeValiditeMois: 36,
  devoirs: [
    {
      id: 'auto_dev_1',
      numero: 1,
      titre: 'Devoir n°1 : Conception de Grafcet & Traduction en Langage LADDER',
      chapitresCouverts: 'Chapitres 1 à 5',
      dureeEstimeeMin: 45,
      noteMax: 20,
      coefficient: 2,
      description: 'Conception du Grafcet de tri de pièces par capteurs inductifs/optiques et programmation de l’activation/désactivation des étapes en LADDER.',
      miseEnSituation: 'Un convoyeur industriel achemine des pièces métalliques et plastiques. Un capteur inductif (S1) et un capteur optique (S2) détectent la matière pour actionner un vérin d’éjection (V1).',
      questions: [
        {
          id: 'q1',
          titre: 'Condition d’activation d’une étape Grafcet en LADDER',
          enonce: 'Selon l’équation d’activation/désactivation standard d’une étape Xn, quelle est l’équation booléenne rigoureuse de l’étape Xn ?',
          points: 7,
          type: 'calcul',
          options: [
            'Xn = (Étape_Précédente × Réceptivité + Xn) × NON(Étape_Suivante)',
            'Xn = Étape_Suivante + Réceptivité',
            'Xn = NON(Étape_Précédente)',
            'Xn = Réceptivité uniquement'
          ],
          reponseCorrecteIndex: 0,
          solutionDetaillee: 'L\'équation standard universelle est : Xn = (Xn-1 . R_n-1 + Xn) . /Xn+1 (avec maintien auto-alimenté et coupure par l\'étape suivante).',
          baremeDetail: ['Activation par l\'étape précédente et réceptivité : 3 pts', 'Auto-maintien et désactivation par l\'étape suivante : 4 pts']
        },
        {
          id: 'q2',
          titre: 'Règle d’évolution n°2 du Grafcet',
          enonce: 'Que stipule la règle n°2 du Grafcet lors du franchissement d’une transition ?',
          points: 7,
          type: 'cas_pratique',
          options: [
            'Le franchissement d’une transition valide entraîne SIMULTANÉMENT l’activation de toutes les étapes immédiatement suivantes et la désactivation de toutes les étapes immédiatement précédentes',
            'Le franchissement attend 10 secondes avant de désactiver l\'étape précédente',
            'Toutes les étapes du Grafcet s\'activent ensemble',
            'La machine doit être arrêtée manuellement'
          ],
          reponseCorrecteIndex: 0,
          solutionDetaillee: 'La règle 2 garantit la simultanéité stricte de l\'activation des étapes aval et de la désactivation des étapes amont.',
          baremeDetail: ['Connaissance précise de la règle 2 IEC 60848 : 4 pts', 'Simultanéité activation/désactivation : 3 pts']
        },
        {
          id: 'q3',
          titre: 'Sécurité de reprise après Arrêt d’Urgence (Guide GEMMA)',
          enonce: 'Dans le guide GEMMA, dans quelle zone d’état se trouve la procédure de remise en position initiale après un arrêt d’urgence ?',
          points: 6,
          type: 'cas_pratique',
          options: [
            'Zone A (Procédures d’Arrêt et de Remise en route, état A6)',
            'Zone F (Procédures de Fonctionnement normal)',
            'Zone D (Procédures de Défaillance pure)',
            'Zone Hors Énergie'
          ],
          reponseCorrecteIndex: 0,
          solutionDetaillee: 'La zone A regroupe les procédures d\'arrêt et de reprise. L\'état A6 correspond à la mise du système en état initial.',
          baremeDetail: ['Identification de la Zone A : 3 pts', 'Précision sur l\'état A6 : 3 pts']
        }
      ]
    }
  ],
  chapitres: [
    {
      id: 'auto_ch1',
      titre: '1. Architecture d’un Système Automatisé & Rôle de l’API',
      dureeEstimeeMin: 35,
      description: 'Partie Commande (PC), Partie Opérative (PO), capteurs, préactionneurs, actionneurs et cycle de scrutation déterministe de l’API.',
      pointsCles: [
        'Architecture globale : Dialogue constant entre la Partie Opérative (PO - vérins, moteurs, capteurs) et la Partie Commande (PC - automate programmable)',
        'Cycle automate synchrone déterministe en 3 temps : 1. Lecture des entrées -> 2. Exécution du programme logique -> 3. Écriture synchronisée des sorties',
        'Temps de cycle typique : 1 à 10 millisecondes (garantie de temps réel dur)',
        'Isolation galvanique par optocoupleurs protégeant le microprocesseur contre les surtensions industrielles de terrain'
      ],
      formuleCle: 'T_{\\text{cycle}} = T_{\\text{lecture E}} + T_{\\text{exécution programme}} + T_{\\text{écriture S}} + T_{\\text{système}} \\le 10\\text{ ms}',
      astuceTerrain: 'Lorsqu\'un automate semble "ignorer" l\'appui sur un bouton très bref, vérifiez si la durée de l\'impulsion est inférieure au temps de scrutation (utilisez une entrée rapide d\'interruption matérielle).',
      conseilProfesseur: 'L\'automate ne "réfléchit" pas en continu : il prend une photo instantanée du monde réel au début du cycle, calcule la réponse mathématique et applique le résultat à la fin du cycle.',
      contenuHtml: `
        <h3>1. Décomposition Fonctionnelle d'un Système Automatisé</h3>
        <p>Tout système automatisé de production industrielle se scinde en deux sous-ensembles en interaction permanente :</p>
        
        <ul>
          <li><strong>La Partie Opérative (PO) :</strong> C'est la mécanique et les organes de puissance qui agissent sur la matière d'œuvre (convoyeurs, presses, vérins pneumatiques, moteurs triphasés). Elle est équipée de <em>capteurs</em> (détecteurs de position, capteurs de pression) qui transmettent les comptes-rendus à la Partie Commande.</li>
          <li><strong>La Partie Commande (PC) :</strong> C'est le cerveau de l'installation, incarné par l'<strong>Automate Programmable Industriel (API / PLC)</strong>. Il reçoit les signaux des capteurs, exécute le programme logique défini par l'automaticien et envoie des ordres aux <em>préactionneurs</em> (contacteurs de puissance, distributeurs électropneumatiques, variateurs de vitesse).</li>
        </ul>

        <h3>2. Le Cycle de Scrutation Déterministe de l'API</h3>
        <p>À la différence d'un ordinateur bureautique multitâche, l'automate industriel fonctionne selon un cycle séquentiel rigoureusement déterministe et répétitif :</p>
        
        <ol class="space-y-2 my-3">
          <li><strong>1. Lecture des Entrées Physiques (Image mémoire des Entrées) :</strong> L'automate lit l'état de toutes ses bornes d'entrées (TOR et analogiques) et fige ces valeurs dans une zone mémoire tampon ($%I$ ou $E$).</li>
          <li><strong>2. Traitement Logique du Programme :</strong> Le processeur exécute le programme séquentiel (LADDER, Grafcet, ST) ligne par ligne du début à la fin en se basant sur la table image des entrées.</li>
          <li><strong>3. Écriture / Mise à Jour des Sorties Physiques ($%Q$ ou $A$) :</strong> Les résultats des calculs sont transférés simultanément vers les étages de sortie (relais, transistors) pour alimenter les préactionneurs.</li>
          <li><strong>4. Tâches d'Autodiagnostic & Communication :</strong> Surveillance de la tension de batterie, gestion des trames Ethernet industrielles et contrôle de la temporisation Watchdog.</li>
        </ol>
      `,
      exercices: [
        {
          id: 'auto_ch1_ex1',
          type: TypeQuestion.QCM,
          question: "Dans quel ordre séquentiel s'exécute le cycle de scrutation interne d'un automate programmable industriel (API) ?",
          reponsesPossibles: [
            '1. Lecture des entrées -> 2. Exécution du programme -> 3. Mise à jour des sorties physiques',
            '1. Mise à jour des sorties -> 2. Lecture des entrées -> 3. Pause',
            '1. Exécution du programme sans lire les entrées',
            'Ordre aléatoire selon la température'
          ],
          reponsesCorrectes: [0],
          explication: "L'automate fige l'image de ses entrées physiques au début de chaque cycle, traite la logique, puis applique simultanément l'état des sorties.",
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        }
      ]
    },
    {
      id: 'auto_ch2',
      titre: '2. Capteurs Industriels & Raccordement Électrique (PNP / NPN & 4-20 mA)',
      dureeEstimeeMin: 40,
      description: 'Capteurs inductifs, capacitifs, photoélectriques, câblage 3 fils PNP (sourcing) vs NPN (sinking) et boucle de courant analogique 4-20 mA.',
      pointsCles: [
        'Capteur inductif : détection exclusive de métaux conducteurs (acier, alu, cuivre)',
        'Capteur capacitif : détection de liquides, poudres, plastiques et solides non métalliques',
        'Capteur PNP (standard européen) : la sortie commute au +24 V DC (Sourcing)',
        'Capteur NPN (standard asiatique/américain) : la sortie commute au 0 V DC (Sinking)',
        'Boucle 4-20 mA : le 4 mA correspond à 0% de la mesure (« zéro vivant ») et permet de détecter instantanément une coupure de fil (0 mA = défaut)'
      ],
      formuleCle: 'I = 4\\text{ mA} + 16\\text{ mA} \\times \\left(\\frac{\\text{Mesure} - \\text{Min}}{\\text{Max} - \\text{Min}}\\right)',
      astuceTerrain: 'Pour identifier rapidement le type d\'un capteur 3 fils sans schéma : fil Marron = +24V, fil Bleu = 0V, fil Noir = Signal de sortie.',
      conseilProfesseur: 'Ne mélangez jamais entrées PNP et NPN sur une même carte d\'automate sans vérifier la configuration du point commun (M ou 24V).',
      contenuHtml: `
        <h3>1. Les Familles de Capteurs Tout-Ou-Rien (TOR)</h3>
        <ul>
          <li><strong>Inductif :</strong> Génère un champ électromagnétique haute fréquence. Portée de 1 à 25 mm. Insensible aux poussières et à l'huile. Détecte uniquement les cibles métalliques.</li>
          <li><strong>Capacitif :</strong> Mesure la variation de permittivité diélectrique. Permet de détecter le niveau de liquide à travers une paroi en plastique ou du grain dans une trémie.</li>
          <li><strong>Photoélectrique :</strong> Faisceau lumineux visible ou infrarouge. Trois modes : Barrage émetteur/récepteur (très longue portée jusqu'à 50 m), Reflex avec catadioptre (10 m), et Proximité direct sur l'objet.</li>
        </ul>

        <h3>2. Câblage 3 Fils : Logique PNP vs NPN</h3>
        <p>Le choix du transistor de sortie dicte le sens de circulation du courant :</p>
        <table class="w-full text-xs border border-slate-300 my-4 text-left">
          <thead class="bg-slate-100 font-bold">
            <tr>
              <th class="p-2 border">Type</th>
              <th class="p-2 border">Transistor</th>
              <th class="p-2 border">Niveau de Sortie Active</th>
              <th class="p-2 border">Point Commun de la Carte API</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-2 border font-bold">PNP (Source)</td>
              <td class="p-2 border">PNP au +24V</td>
              <td class="p-2 border font-mono font-bold text-blue-900">+24 V DC</td>
              <td class="p-2 border">Relié au 0 V (Masse)</td>
            </tr>
            <tr>
              <td class="p-2 border font-bold">NPN (Sink)</td>
              <td class="p-2 border">NPN au 0V</td>
              <td class="p-2 border font-mono font-bold text-amber-900">0 V DC</td>
              <td class="p-2 border">Relié au +24 V DC</td>
            </tr>
          </tbody>
        </table>
      `,
      exercices: [
        {
          id: 'auto_ch2_ex1',
          type: TypeQuestion.QCM,
          question: "Pourquoi les transmetteurs analogiques industriels utilisent-ils une échelle de courant de 4-20 mA plutôt que 0-20 mA ?",
          reponsesPossibles: [
            'Pour distinguer un signal de mesure à 0% (4 mA) d\'une rupture franche de fil électrique (0 mA)',
            'Pour consommer moins de puissance',
            'Car les automates ne savent pas lire le chiffre 0',
            'Pour éviter d\'avoir une tension supérieure à 24V'
          ],
          reponsesCorrectes: [0],
          explication: "Le décalage de zéro à 4 mA (Zéro vivant) permet la détection immédiate d'un fil coupé ou d'un capteur défaillant si le courant tombe à 0 mA.",
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        }
      ]
    },
    {
      id: 'auto_ch3',
      titre: '3. Norme IEC 60848 : Le Modèle Grafcet Fondamental',
      dureeEstimeeMin: 45,
      description: 'Étapes initiales, étapes standard, transitions, réceptivités associées, actions et les 5 règles d’évolution universelles.',
      pointsCles: [
        'Étape initiale : double carré, active par défaut dès la mise sous tension du système',
        'Alternance stricte : une étape est TOUJOURS suivie d\'une transition, et une transition est TOUJOURS suivie d\'une étape',
        'Condition de franchissement : la transition doit être validée (étapes amont actives) ET sa réceptivité doit être VRAIE (= 1)',
        'Action associée : exécutée uniquement pendant la durée d\'activation de son étape'
      ],
      formuleCle: 'X_n = 1 \\implies \\text{Étape active} \\iff \\text{Ordres associés exécutés}',
      astuceTerrain: 'Pour écrire une temporisation dans une réceptivité Grafcet selon la norme, utilisez la syntaxe normalisée : t1 / Xn / 5s (attend 5 secondes après l\'activation de l\'étape Xn).',
      conseilProfesseur: 'Le Grafcet n\'est pas un organigramme : c\'est un modèle d\'état formel et rigoureux qui évite toute ambiguïté lors de la conception d\'automatismes complexes.',
      contenuHtml: `
        <h3>1. Les Éléments Graphiques de Base de la Norme IEC 60848</h3>
        <ul>
          <li><strong>Étape ($X_n$) :</strong> Représentée par un carré numéroté. Elle caractérise un comportement invariant du système. Une étape est soit <em>Active</em> ($X_n = 1$) soit <em>Inactive</em> ($X_n = 0$).</li>
          <li><strong>Transition :</strong> Représentée par un trait horizontal perpendiculaire à la ligne de liaison. Elle indique la possibilité d'évolution entre étapes.</li>
          <li><strong>Réceptivité :</strong> Condition logique booléenne inscrite à droite de la transition (ex: $a \cdot b + \bar{c}$).</li>
          <li><strong>Action Associée :</strong> Rectangle relié à l'étape décrivant l'ordre à exécuter (ex: "Avancer Vérin 1A").</li>
        </ul>

        <h3>2. Les 5 Règles d'Évolution du Grafcet</h3>
        <ol class="space-y-1.5 my-3">
          <li><strong>Règle 1 (Situation Initiale) :</strong> Les étapes initiales sont actives au début du fonctionnement.</li>
          <li><strong>Règle 2 (Franchissement d'une Transition) :</strong> Une transition est franchie si elle est <em>validée</em> et si la réceptivité associée est <em>vraie</em>.</li>
          <li><strong>Règle 3 (Évolution des Étapes Actives) :</strong> Le franchissement d'une transition entraîne <strong>simultanément</strong> l'activation de toutes les étapes immédiatement suivantes et la désactivation de toutes les étapes immédiatement précédentes.</li>
          <li><strong>Règle 4 (Transitions Simultanées) :</strong> Plusieurs transitions simultanément franchissables sont simultanément franchies.</li>
          <li><strong>Règle 5 (Activation et Désactivation Simultanée) :</strong> Si une même étape doit être simultanément activée et désactivée lors d'une évolution, elle reste active (priorité à l'activation).</li>
        </ol>
      `,
      exercices: [
        {
          id: 'auto_ch3_ex1',
          type: TypeQuestion.QCM,
          question: "Dans un Grafcet normalisé, deux étapes peuvent-elles être reliées directement entre elles sans aucune transition intercalée ?",
          reponsesPossibles: [
            'Non, il y a une alternance stricte et obligatoire Étape -> Transition -> Étape',
            'Oui, si les étapes portent le même nom',
            'Oui, uniquement pour les étapes initiales',
            'Oui, le week-end'
          ],
          reponsesCorrectes: [0],
          explication: "La syntaxe IEC 60848 interdit formellement de lier directement deux étapes consécutives sans transition.",
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        }
      ]
    },
    {
      id: 'auto_ch4',
      titre: '4. Structures Grafcet Avancées : Aiguillage (OU) & Parallélisme (ET)',
      dureeEstimeeMin: 45,
      description: 'Sélection de séquence (divergence/convergence en OU), parallélisme et synchronisation (divergence/convergence en double trait ET), sauts d’étapes et boucles.',
      pointsCles: [
        'Divergence en OU : trait simple horizontal, choix exclusif d\'une branche parmi plusieurs selon la première réceptivité vraie',
        'Divergence en ET : double trait horizontal, déclenchement SIMULTANÉ de plusieurs branches parallèles indépendantes',
        'Convergence en ET : double trait horizontal, barrière de synchronisation attendant que TOUTES les branches soient terminées avant de poursuivre'
      ],
      formuleCle: '\\text{Convergence ET} : \\text{Transition franchie} \\iff (X_{10} = 1 \\text{ ET } X_{20} = 1 \\text{ ET } R = 1)',
      astuceTerrain: 'Dans une divergence en OU, veillez à ce que les réceptivités soient mutuellement exclusives (ex: condition "A" et condition "NON(A)") pour éviter les conflits d\'évolution non souhaités.',
      conseilProfesseur: 'La convergence en ET est l\'outil roi de la synchronisation multitâche : elle garantit qu\'aucun poste de travail ne démarre avant que ses partenaires n\'aient terminé.',
      contenuHtml: `
        <h3>1. Divergence et Convergence en OU (Sélection de Séquence)</h3>
        <p>Permet d'aiguiller le cycle vers différentes branches selon l'état des capteurs ou le choix de l'opérateur (ex: pièce bonne vers branche A, pièce défectueuse vers rejet B) :</p>
        <ul>
          <li><strong>Divergence en OU :</strong> Une seule étape amont donne sur plusieurs transitions disjointes.</li>
          <li><strong>Saut d'Étape :</strong> Permet d'ignorer une phase du cycle si les conditions requises sont déjà remplies.</li>
          <li><strong>Reprise de Séquence (Boucle) :</strong> Répète une opération tant qu'un résultat n'est pas atteint (ex: nombre de perçages).</li>
        </ul>

        <h3>2. Parallélisme en ET (Séquences Simultanées)</h3>
        <p>Indiqué par un <strong>double trait horizontal</strong>. Il permet d'exécuter plusieurs tâches en même temps pour gagner en cadence de production :</p>
        <div class="bg-blue-50 border-l-4 border-blue-900 p-3 rounded-r-xl my-3">
          <p class="font-mono font-bold text-blue-950 text-sm">Divergence ET $\implies$ Activation simultanée de toutes les étapes de tête.<br/>Convergence ET $\implies$ Attente de fin de toutes les étapes terminales.</p>
        </div>
      `,
      exercices: [
        {
          id: 'auto_ch4_ex1',
          type: TypeQuestion.QCM,
          question: "Dans une convergence en ET (représentée par un double trait horizontal), quand franchit-on la transition située en dessous ?",
          reponsesPossibles: [
            'Lorsque TOUTES les étapes précédant le double trait sont actives ET que la réceptivité est vraie',
            'Dès qu\'une seule des étapes amont devient active',
            'Automatiquement après 5 secondes',
            'Jamais'
          ],
          reponsesCorrectes: [0],
          explication: "La convergence en ET sert de barrière de synchronisation : toutes les étapes amont doivent impérativement être actives.",
          points: 5,
          difficulte: NiveauDifficulte.INTERMEDIAIRE
        }
      ]
    },
    {
      id: 'auto_ch5',
      titre: '5. Langages IEC 61131-3 : Schéma à Contacts LADDER (LD)',
      dureeEstimeeMin: 45,
      description: 'Rails d’alimentation, contacts NO (--| |--), contacts NF (--|/|--), bobines directes, Set/Reset, compteurs et temporisateurs (TON, TOF, TP).',
      pointsCles: [
        'Langage graphique universel inspiré des schémas électriques électromécaniques',
        'Contact NO (--| |--) : passant si la variable vaut 1 (fermé)',
        'Contact NF (--|/|--) : passant si la variable vaut 0 (inversé)',
        'Bobine Set (S) / Reset (R) : mémoire bistable (verrouille la sortie à 1 jusqu\'à ordre explicite de Reset)',
        'Bloc TON : temporisation au travail (retarde l\'apparition de la sortie Q)'
      ],
      formuleCle: 'TON(IN := %I0.0, PT := T#5s, Q => %Q0.0, ET => temps_ecoule);',
      astuceTerrain: 'Évitez d\'écrire deux bobines directes ordinaires portant la même adresse de sortie (%Q0.0) dans un programme : seule la dernière ligne dans l\'ordre de scrutation aura le dernier mot !',
      conseilProfesseur: 'Le LADDER se lit de gauche à droite et de haut en bas comme le courant dans un schéma électrique : si le chemin de contacts est fermé, la bobine de droite est alimentée.',
      contenuHtml: `
        <h3>1. Les Symboles Fondamentaux du Langage LADDER</h3>
        <p>Le LADDER (LD) est le langage le plus utilisé au monde pour la maintenance et la commande séquentielle :</p>

        <table class="w-full text-xs border border-slate-300 my-4 text-left">
          <thead class="bg-slate-100 font-bold">
            <tr>
              <th class="p-2 border">Symbole</th>
              <th class="p-2 border">Désignation</th>
              <th class="p-2 border">Comportement Logique</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-2 border font-mono font-bold">--| |--</td>
              <td class="p-2 border">Contact Normalement Ouvert (NO)</td>
              <td class="p-2 border">Laisse passer le flux si la variable associée est VRAIE (= 1).</td>
            </tr>
            <tr>
              <td class="p-2 border font-mono font-bold">--|/|--</td>
              <td class="p-2 border">Contact Normalement Fermé (NF)</td>
              <td class="p-2 border">Laisse passer le flux si la variable associée est FAUSSE (= 0).</td>
            </tr>
            <tr>
              <td class="p-2 border font-mono font-bold">--( )--</td>
              <td class="p-2 border">Bobine Directe Standard</td>
              <td class="p-2 border">Prend la valeur logique du réseau (1 si alimenté, 0 sinon).</td>
            </tr>
            <tr>
              <td class="p-2 border font-mono font-bold">--( S )-- / --( R )--</td>
              <td class="p-2 border">Bobines Mémorisées Set / Reset</td>
              <td class="p-2 border">Mémorise l'état 1 (Set) ou force l'état 0 (Reset) de manière permanente.</td>
            </tr>
          </tbody>
        </table>

        <h3>2. Les Blocs Temporisateurs Normalisés</h3>
        <ul>
          <li><strong>TON (Timer On Delay) :</strong> Retard à l'enclenchement. Dès que $IN = 1$, le chronomètre tourne. Quand le temps écoulé $ET \ge PT$, la sortie $Q$ passe à 1. Si $IN$ retombe à 0, $Q$ retombe à 0 immédiatement.</li>
          <li><strong>TOF (Timer Off Delay) :</strong> Retard au déclenchement (prolonge l'alimentation après coupure).</li>
          <li><strong>TP (Timer Pulse) :</strong> Générateur d'impulsion de durée calibrée $PT$.</li>
        </ul>
      `,
      exercices: [
        {
          id: 'auto_ch5_ex1',
          type: TypeQuestion.QCM,
          question: "Dans un bloc temporisateur normalisé 'TON' (Timer On Delay), quand la sortie Q passe-t-elle à 1 ?",
          reponsesPossibles: [
            'Lorsque l\'entrée IN est restée à 1 en continu pendant toute la durée programmée PT',
            'Dès que l\'entrée IN passe à 1 instantanément',
            'Lorsque l\'entrée IN retombe à 0',
            'Uniquement à minuit'
          ],
          reponsesCorrectes: [0],
          explication: "Le temporisateur TON retarde l'activation de sa sortie Q du temps spécifié par le paramètre PT tant que IN est maintenu actif.",
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        }
      ]
    },
    {
      id: 'auto_ch6',
      titre: '6. Langage Texte Structuré (ST) pour Automates',
      dureeEstimeeMin: 45,
      description: 'Syntaxe structurée IEC 61131-3, structures de contrôle conditionnelles IF, CASE OF, boucles et manipulation de données complexes.',
      pointsCles: [
        'Idéal pour les calculs mathématiques, la régulation, les algorithmes de tri et les recettes de fabrication',
        'Structure conditionnelle IF ... THEN ... ELSIF ... ELSE ... END_IF;',
        'Aiguillage multi-voies clair et performant : CASE ... OF ... END_CASE;',
        'Typage strict des variables : BOOL, INT, DINT, REAL, TIME, STRING'
      ],
      formuleCle: 'CASE statut OF 1: demarrer(); 2: reguler(); 3: arreter(); ELSE defaut(); END_CASE;',
      astuceTerrain: 'Bannissez l\'instruction GOTO en Texte Structuré : elle crée du code spaghetti impossible à déboguer en intervention de nuit.',
      conseilProfesseur: 'Le Texte Structuré est le langage d\'avenir en automatisme : il permet de coder en 10 lignes ce qui demanderait 50 réseaux LADDER complexes.',
      contenuHtml: `
        <h3>1. Syntaxe et Typage du Langage Texte Structuré (ST)</h3>
        <p>Le Texte Structuré est un langage de haut niveau proche du Pascal ou du C, normalisé par l'IEC 61131-3 :</p>
        
        <div class="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs my-3 space-y-1">
          <p><span class="text-purple-400">VAR</span></p>
          <p class="pl-4">temperature_four : <span class="text-cyan-400">REAL</span> := 20.5;</p>
          <p class="pl-4">vanne_gaz : <span class="text-cyan-400">BOOL</span> := FALSE;</p>
          <p><span class="text-purple-400">END_VAR</span></p>
          <p class="mt-2"><span class="text-yellow-400">IF</span> (temperature_four < 150.0) <span class="text-yellow-400">AND NOT</span> arret_urgence <span class="text-yellow-400">THEN</span></p>
          <p class="pl-4">vanne_gaz := TRUE;</p>
          <p><span class="text-yellow-400">ELSE</span></p>
          <p class="pl-4">vanne_gaz := FALSE;</p>
          <p><span class="text-yellow-400">END_IF;</span></p>
        </div>
      `,
      exercices: [
        {
          id: 'auto_ch6_ex1',
          type: TypeQuestion.QCM,
          question: "Quelle instruction de contrôle en Texte Structuré (ST) est la plus adaptée pour gérer élégamment les différents modes de marche (ex: Manuel, Auto, Test, Arrêt) ?",
          reponsesPossibles: [
            'CASE mode OF ... END_CASE',
            'FOR i := 1 TO 10 DO',
            'GOTO line_42',
            'WHILE TRUE DO'
          ],
          reponsesCorrectes: [0],
          explication: "La structure `CASE ... OF` permet d'aiguiller le code de façon claire et performante selon la valeur d'une variable énumérée ou entière.",
          points: 5,
          difficulte: NiveauDifficulte.INTERMEDIAIRE
        }
      ]
    },
    {
      id: 'auto_ch7',
      titre: '7. Blocs Fonctionnels (FBD) & Diagrammes Séquentiels SFC',
      dureeEstimeeMin: 40,
      description: 'Langage blocs fonctionnels FBD (portes logiques, comparateurs, filtres), SFC (implémentation native du Grafcet) et programmation modulaire FB/FC.',
      pointsCles: [
        'Fonctions FC (sans mémoire statique) : renvoient un résultat calculé immédiat (ex: conversion d\'échelle mathématique)',
        'Blocs Fonctionnels FB (avec instance DB) : conservent leurs états internes entre les cycles (ex: bloc de pilotage d\'un moteur avec alarmes)',
        'SFC (Sequential Function Chart) : traduction logicielle directe et graphique des modèles Grafcet',
        'Programmation modulaire orientée objet industrielle : développer une seule fois le bloc standard et l\'instancier 50 fois'
      ],
      formuleCle: 'Bloc FB = Algorithme réutilisable + Bloc de Données d\'Instance (DB) mémorisant l\'état physique',
      astuceTerrain: 'Créez un bloc standard FB "Moteur_1Sens" et un FB "Vérin_Bistable" dans votre bibliothèque : vous gagnerez 70% de temps sur tous vos projets d\'automatisation.',
      conseilProfesseur: 'La modularité est le secret de la fiabilité : testez unitairement chaque bloc fonctionnel avant de l\'intégrer dans la supervision globale.',
      contenuHtml: `
        <h3>1. Différence Fondamentale entre FC et FB</h3>
        <table class="w-full text-xs border border-slate-300 my-4 text-left">
          <thead class="bg-slate-100 font-bold">
            <tr>
              <th class="p-2 border">Caractéristique</th>
              <th class="p-2 border">Fonction (FC)</th>
              <th class="p-2 border">Bloc Fonctionnel (FB)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-2 border font-bold">Mémoire Permanente</td>
              <td class="p-2 border text-red-700 font-bold">Aucune (variables temporaires effacées à la fin de l'appel)</td>
              <td class="p-2 border text-emerald-700 font-bold">Oui (Variables STAT stockées dans le Data Block DB d'instance)</td>
            </tr>
            <tr>
              <td class="p-2 border font-bold">Usage Typique</td>
              <td class="p-2 border">Mise à l'échelle analogique, calcul trigonométrique, checksum</td>
              <td class="p-2 border">Gestion d'équipement (Vérin, Moteur, Pompe, Régulateur PID, Axe)</td>
            </tr>
          </tbody>
        </table>
      `,
      exercices: [
        {
          id: 'auto_ch7_ex1',
          type: TypeQuestion.QCM,
          question: "Quelle est la différence fondamentale entre une Fonction (FC) et un Bloc Fonctionnel (FB) dans un automate Siemens ou Schneider ?",
          reponsesPossibles: [
            'Un FB possède une mémoire d\'instance (Instance Data Block) pour conserver ses états internes entre deux cycles, contrairement à une FC',
            'Une FC ne peut contenir que du LADDER',
            'Un FB ne peut pas avoir d\'entrées',
            'Il n\'y a aucune différence'
          ],
          reponsesCorrectes: [0],
          explication: "Le FB est doté d'une mémoire statique persistante stockée dans son bloc de données d'instance associé.",
          points: 5,
          difficulte: NiveauDifficulte.INTERMEDIAIRE
        }
      ]
    },
    {
      id: 'auto_ch8',
      titre: '8. Guide GEMMA (Modes de Marches et d’Arrêts)',
      dureeEstimeeMin: 45,
      description: 'Les 3 familles d’état : Famille F (Fonctionnement F1, réglage F4), Famille A (Arrêts A1, A6), Famille D (Défaillances D1), et coordination hiérarchique des Grafcets.',
      pointsCles: [
        'GEMMA (Guide d\'Étude des Modes de Marches et d\'Arrêts) : guide méthodologique pour structurer tous les états de vie d\'une machine',
        'Famille F (Production) : F1 (Production normale), F4 (Marche de réglage manuel pas-à-pas), F5 (Marche de vérification dans l\'ordre)',
        'Famille A (Arrêts) : A1 (Arrêt dans l\'état initial), A6 (Mise en état initial après dépannage)',
        'Famille D (Défaillances) : D1 (Arrêt d\'urgence avec coupure des énergies et mise en sécurité)'
      ],
      formuleCle: 'Architecture hiérarchique : Grafcet de Sécurité (G_SEC) > Grafcet de Conduite GEMMA (G_GEMMA) > Grafcet de Production (G_PROD)',
      astuceTerrain: 'Ne réalisez jamais la réinitialisation mécanique en état A6 avec des mouvements rapides : utilisez toujours une vitesse lente de sécurité.',
      conseilProfesseur: 'Une machine ne fait pas que produire : 90% des accidents surviennent en phase de réglage ou de débourrage. Le guide GEMMA protège la vie des techniciens.',
      contenuHtml: `
        <h3>1. Les Trois Zones Majeures du Guide GEMMA</h3>
        <p>Le guide GEMMA structure les modes opérationnels d'une machine en trois grands sous-ensembles :</p>
        
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4 text-xs">
          <div class="bg-emerald-50 border border-emerald-300 p-3 rounded-xl">
            <span class="font-bold text-emerald-950 block mb-1">Zone F (Fonctionnement)</span>
            Regroupe les procédures où la machine transforme la matière d'œuvre (F1 : Production normale automatique, F4 : Réglages manuels).
          </div>
          <div class="bg-blue-50 border border-blue-300 p-3 rounded-xl">
            <span class="font-bold text-blue-950 block mb-1">Zone A (Arrêts)</span>
            Regroupe les états de repos et de remise en route (A1 : État initial prêt à démarrer, A6 : Rentrée des vérins en position d'origine).
          </div>
          <div class="bg-red-50 border border-red-300 p-3 rounded-xl">
            <span class="font-bold text-red-950 block mb-1">Zone D (Défaillances)</span>
            Regroupe les arrêts d'urgence (D1), les diagnostics de bourrage et les procédures de dégagement sans casse.
          </div>
        </div>
      `,
      exercices: [
        {
          id: 'auto_ch8_ex1',
          type: TypeQuestion.QCM,
          question: "Dans le guide GEMMA, quel état symbolise la production industrielle normale automatique en régime établi ?",
          reponsesPossibles: ['F1 (Production normale)', 'A1 (Arrêt dans l\'état initial)', 'D1 (Arrêt d\'urgence)', 'F4 (Marche de vérification dans le désordre)'],
          reponsesCorrectes: [0],
          explication: "L'état F1 est le cœur opérationnel de la machine automatisée en fonctionnement de production continu.",
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        }
      ]
    },
    {
      id: 'auto_ch9',
      titre: '9. Bus de Terrain Industriels : Modbus RTU (RS-485) & Modbus TCP',
      dureeEstimeeMin: 45,
      description: 'Topologie maître/esclave (client/serveur), registres 16 bits (Holding Registers), trames Modbus avec contrôle CRC-16 et port standard TCP 502.',
      pointsCles: [
        'Modbus RTU : liaison série différentielle RS-485 bifilaire avec résistances de fin de ligne de 120 Ω aux deux extrémités',
        'Modbus TCP : encapsule les trames Modbus directement dans Ethernet (port TCP 502) sans champ CRC (géré par Ethernet)',
        'Registres 16 bits : Coils (TOR R/W), Discrete Inputs (TOR R), Input Registers (Analogique R), Holding Registers (Paramètres R/W)',
        'Codes fonctions majeurs : 03 (Lecture Holding Registers), 06 (Écriture Registre Unique), 16 / 0x10 (Écriture Registres Multiples)'
      ],
      formuleCle: 'Trame Modbus TCP = MBAP Header (7 octets) + Unit ID + Code Fonction + Adresse Registre + Données',
      astuceTerrain: 'Attention au décalage d\'adresse "Offset 1" : certains logiciels commencent à numéroter les registres à 0 (adresse physique 0x0000) et d\'autres à 1 (registre 40001).',
      conseilProfesseur: 'Modbus est le latin de l\'industrie : créé en 1979 par Modicon, il est universellement supporté par tous les équipements industriels de la planète.',
      contenuHtml: `
        <h3>1. Structure des Registres Modbus</h3>
        <table class="w-full text-xs border border-slate-300 my-4 text-left">
          <thead class="bg-slate-100 font-bold">
            <tr>
              <th class="p-2 border">Type d'Objet</th>
              <th class="p-2 border">Accès</th>
              <th class="p-2 border">Taille</th>
              <th class="p-2 border">Code Fonction de Lecture</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-2 border font-bold">Coil (Bit interne / Sortie)</td>
              <td class="p-2 border">Lecture / Écriture (R/W)</td>
              <td class="p-2 border">1 bit (0 ou 1)</td>
              <td class="p-2 border font-mono">01 (0x01)</td>
            </tr>
            <tr>
              <td class="p-2 border font-bold">Discrete Input (Entrée TOR)</td>
              <td class="p-2 border">Lecture Seule (R)</td>
              <td class="p-2 border">1 bit</td>
              <td class="p-2 border font-mono">02 (0x02)</td>
            </tr>
            <tr>
              <td class="p-2 border font-bold">Input Register (Mesure)</td>
              <td class="p-2 border">Lecture Seule (R)</td>
              <td class="p-2 border">16 bits (Word)</td>
              <td class="p-2 border font-mono">04 (0x04)</td>
            </tr>
            <tr>
              <td class="p-2 border font-bold text-blue-900">Holding Register (Paramètre)</td>
              <td class="p-2 border font-bold">Lecture / Écriture (R/W)</td>
              <td class="p-2 border">16 bits (Word)</td>
              <td class="p-2 border font-mono font-bold text-blue-900">03 (0x03)</td>
            </tr>
          </tbody>
        </table>
      `,
      exercices: [
        {
          id: 'auto_ch9_ex1',
          type: TypeQuestion.QCM,
          question: "Quel code de fonction Modbus standard permet de lire un bloc de registres de maintien (Holding Registers 16 bits) ?",
          reponsesPossibles: ['Fonction 03 (0x03)', 'Fonction 01', 'Fonction 05', 'Fonction 99'],
          reponsesCorrectes: [0],
          explication: "La fonction Modbus 03 (Read Holding Registers) est utilisée pour interroger les variables numériques 16 bits en lecture.",
          points: 5,
          difficulte: NiveauDifficulte.INTERMEDIAIRE
        }
      ]
    },
    {
      id: 'auto_ch10',
      titre: '10. Réseaux Industriels Déterministes : Profinet IO & EtherNet/IP',
      dureeEstimeeMin: 45,
      description: 'Profinet RT et IRT (isochrone temps réel), fichiers GSDML/EDS, contrôleurs IO, périphériques IO et protocole de capteurs intelligents IO-Link.',
      pointsCles: [
        'Profinet Real-Time (RT) : contourne les couches TCP/IP pour acheminer les trames I/O prioritaires en < 1 ms',
        'Profinet IRT (Isochronous Real-Time) : synchronisation matérielle avec gigue < 1 microseconde pour asservissement d\'axes robotiques',
        'Fichier GSDML (XML) : carte d\'identité normalisée de l\'équipement fournie par le fabricant',
        'IO-Link : protocole point à point numérique transformant les capteurs standards en instruments intelligents avec diagnostic et paramétrage à distance'
      ],
      formuleCle: 'Profinet IO = IO-Controller (API) + IO-Device (Îlots distributeurs, variateurs, capteurs) + Réseau commuté',
      astuceTerrain: 'Attribuez toujours le nom de station Profinet (Device Name) à l\'équipement avant d\'espérer établir la communication : Profinet identifie les nœuds par leur nom et non par leur IP !',
      conseilProfesseur: 'L\'Ethernet industriel n\'a plus rien à voir avec l\'Ethernet de bureau : grâce aux commutateurs managés et aux topologies en anneau MRP, la coupure d\'un câble est réparée en moins de 200 ms.',
      contenuHtml: `
        <h3>1. Pourquoi le Profinet remplace les anciens bus</h3>
        <p>Profinet associe la puissance du câblage Ethernet standard RJ45/Fibre optique avec les exigences strictes de rapidité de l'industrie manufacturière :</p>
        
        <ul>
          <li><strong>Bande passante 100 Mbps / 1 Gbps :</strong> Transmet simultanément les données de commande temps réel et le trafic bureautique/supervision.</li>
          <li><strong>Topologie en Anneau Redondant MRP (Media Redundancy Protocol) :</strong> Si une pelleteuse coupe un câble réseau, les flux basculent instantanément de l'autre côté de l'anneau sans arrêter l'usine.</li>
          <li><strong>Remplacement Facile Sans Console :</strong> Grâce à la topologie de voisinage LLDP, un module remplacé récupère automatiquement son nom et ses paramètres sans PC de programmation.</li>
        </ul>
      `,
      exercices: [
        {
          id: 'auto_ch10_ex1',
          type: TypeQuestion.QCM,
          question: "Quel format de fichier descriptif normalisé fournit le constructeur d'un équipement Profinet pour permettre son intégration dans le logiciel de configuration de l'automate ?",
          reponsesPossibles: ['Fichier GSDML (XML)', 'Fichier MP3', 'Fichier DOCX', 'Fichier PDF imprimé'],
          reponsesCorrectes: [0],
          explication: "Le fichier GSDML (General Station Description Markup Language) décrit les entrées/sorties et paramètres de l'appareil Profinet.",
          points: 5,
          difficulte: NiveauDifficulte.INTERMEDIAIRE
        }
      ]
    },
    {
      id: 'auto_ch11',
      titre: '11. Régulation Industrielle : Boucle Fermée & Algorithme PID',
      dureeEstimeeMin: 50,
      description: 'Écart ε = Consigne - Mesure, actions Proportionnelle (P), Intégrale (I), Dérivée (D), et méthodologies de réglage de Ziegler-Nichols.',
      pointsCles: [
        'Boucle fermée : comparaison permanente entre la Consigne (Set Point - SP) et la Mesure réelle (Process Variable - PV)',
        'Action Proportionnelle (Gain Kp) : accélère la réaction proportionnellement à l\'erreur mais laisse une erreur statique permanente',
        'Action Intégrale (Temps Ti) : accumule l\'écart dans le temps et ANNULE rigoureusement l\'erreur statique',
        'Action Dérivée (Temps Td) : réagit à la vitesse de variation pour anticiper et freiner les dépassements (utile en thermique, déconseillée sur le débit bruité)'
      ],
      formuleCle: 'u(t) = K_p \\cdot \\left[ \\varepsilon(t) + \\frac{1}{T_i} \\int_0^t \\varepsilon(\\tau) d\\tau + T_d \\cdot \\frac{d\\varepsilon(t)}{dt} \\right]',
      astuceTerrain: 'Sur une régulation de débit ou de pression très réactive, mettez Td = 0 (régulateur PI) : l\'action dérivée amplifierait le bruit hydraulique et détruirait prématurément le positionneur de vanne.',
      conseilProfesseur: 'Régler un PID est un art d\'équilibre : augmentez Kp jusqu\'à obtenir une réaction vive, puis réduisez Ti pour annuler l\'erreur sans provoquer d\'oscillations permanentes.',
      contenuHtml: `
        <h3>1. Les Rôles Complémentaires des 3 Actions P, I et D</h3>
        <table class="w-full text-xs border border-slate-300 my-4 text-left">
          <thead class="bg-slate-100 font-bold">
            <tr>
              <th class="p-2 border">Action</th>
              <th class="p-2 border">Effet sur la Rapidité</th>
              <th class="p-2 border">Effet sur la Précision (Erreur Statique)</th>
              <th class="p-2 border">Effet sur la Stabilité</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-2 border font-bold">Proportionnelle (P)</td>
              <td class="p-2 border text-emerald-700">Augmente la rapidité</td>
              <td class="p-2 border">Diminue l'erreur mais ne l'annule pas</td>
              <td class="p-2 border text-amber-700">Dégrade la stabilité si trop fort</td>
            </tr>
            <tr>
              <td class="p-2 border font-bold">Intégrale (I)</td>
              <td class="p-2 border">Ralentit légèrement</td>
              <td class="p-2 border font-bold text-emerald-700">Annule totalement l'erreur statique (= 0)</td>
              <td class="p-2 border text-red-700">Favorise les oscillations / dépassements</td>
            </tr>
            <tr>
              <td class="p-2 border font-bold">Dérivée (D)</td>
              <td class="p-2 border">Anticipe les variations</td>
              <td class="p-2 border">Aucun effet statique</td>
              <td class="p-2 border text-emerald-700">Amortit les dépassements</td>
            </tr>
          </tbody>
        </table>
      `,
      exercices: [
        {
          id: 'auto_ch11_ex1',
          type: TypeQuestion.QCM,
          question: "Dans un régulateur PID, quelle action est spécifiquement responsable d'annuler complètement l'erreur statique en régime permanent ?",
          reponsesPossibles: ['L\'action Intégrale (I)', 'L\'action Proportionnelle (P)', 'L\'action Dérivée (D)', 'L\'alimentation 24V'],
          reponsesCorrectes: [0],
          explication: "En intégrant l'écart au cours du temps, l'action I augmente jusqu'à ce que la mesure rejoigne exactement la consigne.",
          points: 5,
          difficulte: NiveauDifficulte.INTERMEDIAIRE
        }
      ]
    },
    {
      id: 'auto_ch12',
      titre: '12. IHM & Systèmes de Supervision SCADA',
      dureeEstimeeMin: 45,
      description: 'Pupitres opérateurs tactiles HMI, serveurs SCADA, gestion des alarmes (norme EEMUA 191), courbes d’historisation (Trends) et passerelles OPC UA.',
      pointsCles: [
        'HMI (Human-Machine Interface) : pupitre tactile local installé sur la porte d\'armoire de la machine',
        'SCADA (Supervisory Control And Data Acquisition) : système centralisé multi-écrans supervisant l\'ensemble de l\'usine',
        'Gestion des alarmes EEMUA 191 : hiérarchisation stricte (Critique, Urgente, Information) pour éviter l\'aveuglement de l\'opérateur',
        'OPC UA : protocole sécurisé multi-constructeurs avec modèle de données orienté objet et certificats cryptographiques'
      ],
      formuleCle: 'OPC UA (IEC 62541) : Communication universelle et chiffrée entre API, SCADA, MES et ERP',
      astuceTerrain: 'Respectez la règle des couleurs industrielles : Gris foncé pour les tuyaux neutres, Vert pour l\'état en marche normale, Rouge pour l\'alarme/défaut, et Jaune pour l\'avertissement.',
      conseilProfesseur: 'Une bonne interface de supervision doit être épurée : l\'opérateur doit pouvoir identifier un état anormal en moins de 3 secondes sur son écran.',
      contenuHtml: `
        <h3>1. Les 4 Fonctions Piliers d'une Supervision SCADA</h3>
        <ol class="space-y-1.5 my-3">
          <li><strong>1. Animation Graphique & Synoptiques :</strong> Représentation visuelle interactive en temps réel des cuves, moteurs, vannes et niveaux.</li>
          <li><strong>2. Journal d'Événements & Alarmes :</strong> Horodatage à la milliseconde des défauts avec consignation obligatoire de l'acquittement opérateur.</li>
          <li><strong>3. Historisation & Courbes de Tendances :</strong> Enregistrement des mesures dans une base SQL pour l'analyse des rendements et la traçabilité qualité.</li>
          <li><strong>4. Gestion des Recettes :</strong> Envoi en un clic de tous les paramètres de fabrication (températures, vitesses, dosages) vers les automates de la ligne.</li>
        </ol>
      `,
      exercices: [
        {
          id: 'auto_ch12_ex1',
          type: TypeQuestion.QCM,
          question: "Quel protocole de communication ouvert, indépendant des constructeurs et hautement sécurisé est aujourd'hui la référence pour l'échange de données entre automates et serveurs SCADA / Cloud ?",
          reponsesPossibles: ['OPC UA (Open Platform Communications Unified Architecture)', 'Telnet', 'HTTP non sécurisé', 'Bluetooth 1.0'],
          reponsesCorrectes: [0],
          explication: "OPC UA offre une interopérabilité totale, un modèle objet riche et une sécurité cryptographique native.",
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        }
      ]
    },
    {
      id: 'auto_ch13',
      titre: '13. Sécurité Fonctionnelle des Machines : Normes ISO 13849-1 & IEC 62061',
      dureeEstimeeMin: 50,
      description: 'Niveaux de performance PL (a à e), niveaux SIL (1 à 3), circuits de sécurité redondants à double canal avec surveillance de discordance, et automates de sécurité.',
      pointsCles: [
        'Norme ISO 13849-1 : évaluation du Niveau de Performance Requis (PLr) de PLa (risque faible) à PLe (danger de mort ou blessure irréversible)',
        'Paramètres clés : MTTFd (Temps moyen avant défaillance dangereuse), DCavg (Taux de couverture du diagnostic), CCF (Défauts de mode commun)',
        'Architecture Catégorie 4 / PLe : redondance matérielle totale (2 canaux indépendants surveillés en permanence)',
        'Automates de sécurité (Safety PLC jaunes) : processeurs redondants avec autotests cycliques et mémoire certifiée TÜV'
      ],
      formuleCle: '\\text{PLr calculé selon le graphe de risque} : S (\\text{Gravité}) \\times F (\\text{Fréquence}) \\times P (\\text{Évitement})',
      astuceTerrain: 'Ne câblez JAMAIS un bouton d\'arrêt d\'urgence sur une entrée standard d\'un automate ordinaire : utilisez un relais de sécurité certifié ou un automate Safety.',
      conseilProfesseur: 'La sécurité fonctionnelle n\'admet aucun compromis : le système doit garantir un comportement prévisible et sûr même en cas de panne d\'un composant interne.',
      contenuHtml: `
        <h3>1. Les Paramètres d'Évaluation du Risque selon l'ISO 13849-1</h3>
        <ul>
          <li><strong>Gravité de la blessure (S) :</strong> S1 = Réversible (coupure légère), S2 = Irréversible ou mortelle (amputation, écrasement).</li>
          <li><strong>Fréquence d'exposition (F) :</strong> F1 = Rare à assez fréquente, F2 = Fréquente à continue (opérateur chargeant une pièce manuellement).</li>
          <li><strong>Possibilité d'évitement (P) :</strong> P1 = Possible dans certaines conditions, P2 = Impossible (mouvement ultra-rapide).</li>
        </ul>
      `,
      exercices: [
        {
          id: 'auto_ch13_ex1',
          type: TypeQuestion.QCM,
          question: "Pour un risque d'accident irréversible grave et fréquent sans possibilité d'évitement, quel niveau de performance PL requis (PLr) la norme ISO 13849-1 impose-t-elle généralement ?",
          reponsesPossibles: ['PLe (Niveau le plus élevé avec architecture redondante Cat 4)', 'PLa', 'PLb', 'Aucun niveau requis'],
          reponsesCorrectes: [0],
          explication: "Le niveau PLe est le plus strict de la norme ISO 13849-1 et exige une sécurité à double canal auto-contrôlé.",
          points: 5,
          difficulte: NiveauDifficulte.AVANCE
        }
      ]
    },
    {
      id: 'auto_ch14',
      titre: '14. Servomoteurs, Contrôle de Mouvement (Motion Control) & Cinématique',
      dureeEstimeeMin: 45,
      description: 'Servomoteurs Brushless synchrones, codeurs absolus multi-tours EnDat/Hiperface, profil de vitesse en S (jerk limité), et cames électroniques.',
      pointsCles: [
        'Servomoteur Brushless : moteur synchrone à aimants permanents avec asservissement vectoriel ultra-dynamique en couple, vitesse et position',
        'Codeur absolu multi-tours : mémorise la position angulaire exacte même après coupure de tension (supprime la prise d\'origine homing)',
        'Limitation du Jerk ($d^3x/dt^3$) : rampe de vitesse en S éliminant les chocs mécaniques sur les réducteurs et les vibrations sur les produits fragiles',
        'Came électronique : synchronisation numérique non linéaire de plusieurs axes remplaçant les cames mécaniques traditionnelles'
      ],
      formuleCle: 'Jerk = \\frac{d a(t)}{dt} = \\frac{d^3 x(t)}{dt^3} \\quad (\\text{dérivée de l\'accélération, clé du confort mécanique})',
      astuceTerrain: 'Lors du réglage des gains de boucle d\'un axe numérique, commencez toujours par le gain de couple/courant, puis la vitesse, et terminez par la boucle de position.',
      conseilProfesseur: 'Le contrôle de mouvement transforme les machines en danseuses de précision : des accélérations de 20 G avec une précision de positionnement inférieure à 5 microns.',
      contenuHtml: `
        <h3>1. Les Trois Boucles d'Asservissement Imbriquées</h3>
        <p>Un servovariateur moderne exécute trois boucles fermées en cascade à des fréquences très élevées :</p>
        <ol class="space-y-1.5 my-3">
          <li><strong>1. Boucle de Courant / Couple (la plus interne, ~32 kHz) :</strong> Assure que le moteur développe exactement le couple requis sans retard.</li>
          <li><strong>2. Boucle de Vitesse (intermédiaire, ~8 kHz) :</strong> Compare la vitesse mesurée par le codeur à la consigne dynamique.</li>
          <li><strong>3. Boucle de Position (la plus externe, ~2 à 4 kHz) :</strong> Assure le suivi millimétrique de la trajectoire programmée.</li>
        </ol>
      `,
      exercices: [
        {
          id: 'auto_ch14_ex1',
          type: TypeQuestion.QCM,
          question: "Quel est l'avantage principal d'un codeur de position absolu multi-tours par rapport à un codeur incrémental standard sur un axe robotique ?",
          reponsesPossibles: [
            'La position exacte de l\'axe est connue instantanément dès la mise sous tension, sans nécessiter de procédure de recalage / prise d\'origine (homing)',
            'Il ne nécessite aucun câble',
            'Il tourne deux fois plus vite',
            'Il est transparent'
          ],
          reponsesCorrectes: [0],
          explication: "Le codeur absolu enregistre mécaniquement ou magnétiquement sa position exacte en permanence, même hors tension.",
          points: 5,
          difficulte: NiveauDifficulte.INTERMEDIAIRE
        }
      ]
    },
    {
      id: 'auto_ch15',
      titre: '15. Diagnostic de Pannes, Forçage Sécurisé & Maintenance d’Automates',
      dureeEstimeeMin: 50,
      description: 'Méthodologie de dépannage en ligne (Online Monitoring), visualisation dynamique des tables de variables, piégeage des signaux fugitifs (Trace), et forçage sécurisé.',
      pointsCles: [
        'Tampon de diagnostic (Diagnostic Buffer) : journal interne de l\'automate horodatant les défaillances matérielles et logicielles',
        'Fonction Trace : oscilloscope logiciel intégré pour capturer les micro-coupures de capteurs à la fréquence du temps de cycle',
        'Règle d\'or du forçage : vérifier visuellement la zone de danger avant de forcer une sortie physique, et supprimer TOUS les forçages avant de quitter le chantier',
        'Sauvegarde de référence : toujours archiver le projet automate complet (avec commentaires et symboles) après toute mise en service'
      ],
      formuleCle: 'Démarche d\'intervention : 1. Analyser voyants CPU -> 2. Lire Tampon Diagnostic -> 3. Visualiser en ligne -> 4. Remédier',
      astuceTerrain: 'Avant toute modification de programme en dépannage d\'urgence, effectuez un "Upload / Charger depuis l\'automate" et sauvegardez une copie de sécurité sur votre disque dur.',
      conseilProfesseur: 'Un bon automaticien ne commence jamais par réécrire le programme : 98% des pannes d\'une machine en service proviennent d\'un capteur encrassé ou d\'un fil desserré, pas d\'un bug apparu par magie.',
      contenuHtml: `
        <h3>1. Les Voyants de Statut d'une CPU Industrielle</h3>
        <table class="w-full text-xs border border-slate-300 my-4 text-left">
          <thead class="bg-slate-100 font-bold">
            <tr>
              <th class="p-2 border">Voyant</th>
              <th class="p-2 border">Couleur</th>
              <th class="p-2 border">Signification</th>
              <th class="p-2 border">Action Recommandée</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-2 border font-bold">RUN</td>
              <td class="p-2 border text-emerald-700 font-bold">Vert fixe</td>
              <td class="p-2 border">Automate en marche normale, programme exécuté</td>
              <td class="p-2 border">Fonctionnement nominal</td>
            </tr>
            <tr>
              <td class="p-2 border font-bold">STOP</td>
              <td class="p-2 border text-amber-700 font-bold">Jaune fixe</td>
              <td class="p-2 border">Programme arrêté, sorties physiques désactivées</td>
              <td class="p-2 border">Consulter le buffer pour identifier la cause de l'arrêt</td>
            </tr>
            <tr>
              <td class="p-2 border font-bold">SF / ERROR</td>
              <td class="p-2 border text-red-700 font-bold">Rouge fixe/clignotant</td>
              <td class="p-2 border">Défaut système (carte en panne, bus coupé, division par 0)</td>
              <td class="p-2 border">Se connecter en ligne et ouvrir le tampon de diagnostic</td>
            </tr>
            <tr>
              <td class="p-2 border font-bold">BF</td>
              <td class="p-2 border text-red-700 font-bold">Rouge clignotant</td>
              <td class="p-2 border">Défaut de bus de communication (nœud Profinet déconnecté)</td>
              <td class="p-2 border">Contrôler le câblage Ethernet et l'alimentation des îlots</td>
            </tr>
          </tbody>
        </table>
      `,
      exercices: [
        {
          id: 'auto_ch15_ex1',
          type: TypeQuestion.QCM,
          question: "Quel outil interne d'un automate Siemens S7 ou Schneider M340 consulte-t-on en priorité absolue pour identifier la cause exacte d'un passage en mode STOP ou d'un voyant rouge SF (System Fault) ?",
          reponsesPossibles: [
            'Le tampon de diagnostic (Diagnostic Buffer) qui enregistre chronologiquement tous les événements système',
            'Le manuel utilisateur papier',
            'L\'horloge de bureau',
            'Le multimètre en mode continuité'
          ],
          reponsesCorrectes: [0],
          explication: "Le tampon de diagnostic enregistre avec horodatage précis à la milliseconde chaque erreur matérielle, dépassement de temps de cycle ou défaut de module.",
          points: 5,
          difficulte: NiveauDifficulte.EXPERT
        }
      ]
    }
  ]
};
