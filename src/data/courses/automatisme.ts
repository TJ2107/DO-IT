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
      description: 'Partie Commande (PC), Partie Opérative (PO), capteurs, préactionneurs, actionneurs et cycle de scrutation de l’API (Lecture entrées -> Traitement programme -> Écriture sorties).',
      pointsCles: ['Cycle automate synchrone déterministe', 'Temps de cycle (quelques ms)', 'Isolation galvanique par optocoupleurs'],
      formuleCle: 'Temps de cycle = Temps lecture E + Temps exécution + Temps écriture S',
      contenuHtml: `<p>Structure globale et principes de fonctionnement interne des automates programmables.</p>`,
      exercices: [{
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
      }]
    },
    {
      id: 'auto_ch2',
      titre: '2. Capteurs Industriels & Raccordement Électrique (PNP / NPN & 4-20 mA)',
      dureeEstimeeMin: 40,
      description: 'Capteurs inductifs, capacitifs, photoélectriques, raccordement 3 fils PNP (commutation au +24V / sourcing) vs NPN (commutation au 0V / sinking) et boucles de courant 4-20 mA.',
      pointsCles: ['PNP : Standard européen dominant', 'Boucle 4-20 mA : 4 mA permet de détecter la rupture de câble', 'Immunité au bruit en courant'],
      formuleCle: 'I = 4 mA (0%) à 20 mA (100% de la mesure)',
      contenuHtml: `<p>Choix, câblage et diagnostic des capteurs TOR et analogiques de terrain.</p>`,
      exercices: [{
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
        explication: "Le décalage de zéro à 4 mA (Zero vivant) permet la détection immédiate d'un fil coupé ou d'un capteur défaillant si le courant tombe à 0 mA.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'auto_ch3',
      titre: '3. Norme IEC 60848 : Le Modèle Grafcet Fondamental',
      dureeEstimeeMin: 45,
      description: 'Étapes initiales, étapes standard, transitions, réceptivités associées, actions continues, temporisées et conditionnelles, et les 5 règles d’évolution.',
      pointsCles: ['Étape initiale double contour', 'Alternance stricte Étape - Transition - Étape', 'Une action n\'est exécutée que si son étape est active'],
      formuleCle: 'Xn = 1 (Étape active) | Xn = 0 (Étape inactive)',
      contenuHtml: `<p>Formalisme graphique rigoureux pour la spécification des automatismes logiques séquentiels.</p>`,
      exercices: [{
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
      }]
    },
    {
      id: 'auto_ch4',
      titre: '4. Structures Grafcet Avancées : Aiguillage (OU) & Parallélisme (ET)',
      dureeEstimeeMin: 45,
      description: 'Sélection de séquence (divergence/convergence en OU avec exclusion mutuelle), séquences simultanées (divergence/convergence en double trait ET), sauts d’étapes et reprises de séquence.',
      pointsCles: ['Divergence en OU : une seule transition franchie à la fois', 'Divergence en ET : activation simultanée de toutes les branches', 'Synchronisation en convergence ET'],
      formuleCle: 'Divergence en ET : double trait horizontal',
      contenuHtml: `<p>Conception de cycles industriels multitâches et synchronisation de postes de travail.</p>`,
      exercices: [{
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
      }]
    },
    {
      id: 'auto_ch5',
      titre: '5. Langages IEC 61131-3 : Schéma à Contacts LADDER (LD)',
      dureeEstimeeMin: 45,
      description: 'Rails d’alimentation gauche et droit, contacts normalement ouverts (--| |--), normalement fermés (--|/|--), bobines simples, bobines Set (S) / Reset (R), blocs compteurs et temporisateurs (TON, TOF, TP).',
      pointsCles: ['Lecture de gauche à droite et de haut en bas', 'Temporisateur TON (retard à l\'enclenchement)', 'Bobines Set/Reset bistables'],
      formuleCle: 'TON(IN := start, PT := T#5s, Q => output, ET => elapsed)',
      contenuHtml: `<p>Programmation visuelle intuitive dérivée des schémas électriques à relais.</p>`,
      exercices: [{
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
      }]
    },
    {
      id: 'auto_ch6',
      titre: '6. Langage Texte Structuré (ST) pour Automates',
      dureeEstimeeMin: 45,
      description: 'Syntaxe structurée proche du Pascal, structures conditionnelles IF...THEN...ELSIF, boucles FOR / WHILE, instructions CASE...OF et manipulation de tableaux / structures.',
      pointsCles: ['Idéal pour calculs mathématiques et algorithmes complexes', 'Typage strict des variables (BOOL, INT, REAL, TIME, STRING)', 'Clarté de maintenance'],
      formuleCle: 'IF temperature > 85.0 THEN vanne_refroidissement := TRUE; END_IF;',
      contenuHtml: `<p>Programmation textuelle performante pour le traitement de données et recettes industrielles.</p>`,
      exercices: [{
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
      }]
    },
    {
      id: 'auto_ch7',
      titre: '7. Blocs Fonctionnels (FBD) & Diagrammes Séquentiels SFC',
      dureeEstimeeMin: 40,
      description: 'Langage blocs fonctionnels FBD (portes logiques, comparateurs, filtres), SFC (Sequential Function Chart / implémentation directe du Grafcet) et blocs réutilisables FB/FC.',
      pointsCles: ['Fonctions FC (sans mémoire statique)', 'Blocs Fonctionnels FB (avec instance DB dédiée)', 'Programmation modulaire orientée objet industrielle'],
      formuleCle: 'FB : variables STAT persistantes d\'un cycle à l\'autre',
      contenuHtml: `<p>Modularisation du code automate et réutilisation de briques logicielles standardisées.</p>`,
      exercices: [{
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
      }]
    },
    {
      id: 'auto_ch8',
      titre: '8. Guide GEMMA (Guide d’Étude des Modes de Marches et d’Arrêts)',
      dureeEstimeeMin: 45,
      description: 'Les 3 familles de rectangles d’état : Famille F (Fonctionnement normal F1, réglage F4), Famille A (Arrêts A1, A6), Famille D (Défaillances D1), coordination des Grafcets de sécurité et de production.',
      pointsCles: ['Structuration universelle des états de marche machine', 'Grafcet de sécurité hiérarchiquement supérieur', 'Arrêt d\'urgence avec mise en sécurité instantanée'],
      formuleCle: 'F1 : Production normale | D1 : Arrêt d\'urgence sur défaillance',
      contenuHtml: `<p>Méthodologie standardisée pour l'intégration complète des modes de conduite et de secours.</p>`,
      exercices: [{
        id: 'auto_ch8_ex1',
        type: TypeQuestion.QCM,
        question: "Dans le guide GEMMA, quel état symbolise la production industrielle normale automatique en régime établi ?",
        reponsesPossibles: ['F1 (Production normale)', 'A1 (Arrêt dans l\'état initial)', 'D1 (Arrêt d\'urgence)', 'F4 (Marche de vérification dans le désordre)'],
        reponsesCorrectes: [0],
        explication: "L'état F1 est le cœur opérationnel de la machine automatisée en fonctionnement de production continu.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'auto_ch9',
      titre: '9. Bus de Terrain Industriels : Modbus RTU (RS-485) & Modbus TCP',
      dureeEstimeeMin: 45,
      description: 'Topologie maître/esclave (client/serveur), registres 16 bits (Holding Registers, Input Registers), trame Modbus CRC-16, port TCP 502 et fonctions 03 (Read) / 06 (Write Single) / 16 (Write Multiple).',
      pointsCles: ['Modbus TCP : encapsule le protocole dans Ethernet sur port 502', 'Liaison RS-485 différentielle avec résistances de fin de ligne 120 Ω', 'Universalité absolue'],
      formuleCle: 'Trame Modbus TCP = MBAP Header (7 octets) + PDU (Code fonction + Données)',
      contenuHtml: `<p>Configuration et dépannage du protocole de communication le plus répandu au monde.</p>`,
      exercices: [{
        id: 'auto_ch9_ex1',
        type: TypeQuestion.QCM,
        question: "Quel code de fonction Modbus standard permet de lire un bloc de registres de maintien (Holding Registers 16 bits) ?",
        reponsesPossibles: ['Fonction 03 (0x03)', 'Fonction 01', 'Fonction 05', 'Fonction 99'],
        reponsesCorrectes: [0],
        explication: "La fonction Modbus 03 (Read Holding Registers) est utilisée pour interroger les variables numériques 16 bits en lecture.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'auto_ch10',
      titre: '10. Réseaux Industriels Déterministes : Profinet IO & EtherNet/IP',
      dureeEstimeeMin: 45,
      description: 'Profinet RT (Real-Time) et IRT (Isochronous Real-Time), fichier de configuration GSDML / EDS, contrôleur IO, périphériques IO (Device), et protocole de raccordement universel IO-Link.',
      pointsCles: ['Cycle déterministe < 1 ms pour axes synchronisés', 'IO-Link : communication point à point intelligente avec capteurs', 'Topologie en anneau MRP (reprise < 200 ms)'],
      formuleCle: 'Profinet IRT : gigue (jitter) < 1 microseconde',
      contenuHtml: `<p>Architectures modernes Ethernet industriel temps réel pour usines connectées.</p>`,
      exercices: [{
        id: 'auto_ch10_ex1',
        type: TypeQuestion.QCM,
        question: "Quel format de fichier descriptif normalisé fournit le constructeur d'un équipement Profinet pour permettre son intégration dans le logiciel de configuration de l'automate ?",
        reponsesPossibles: ['Fichier GSDML (XML)', 'Fichier MP3', 'Fichier DOCX', 'Fichier PDF imprimé'],
        reponsesCorrectes: [0],
        explication: "Le fichier GSDML (General Station Description Markup Language) décrit les entrées/sorties et paramètres de l'appareil Profinet.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'auto_ch11',
      titre: '11. Régulation Industrielle : Boucle Fermée & Algorithme PID',
      dureeEstimeeMin: 50,
      description: 'Écart de mesure ε = Consigne - Mesure, action Proportionnelle (P : rapidité), Intégrale (I : élimination de l’erreur statique), Dérivée (D : anticipation), et méthodes de réglage de Ziegler-Nichols.',
      pointsCles: ['Action P : réduit l\'écart mais ne l\'annule pas', 'Action I : annule rigoureusement l\'erreur statique en régime permanent', 'Anti-windup d\'intégrateur'],
      formuleCle: 'u(t) = Kp × [ ε(t) + (1/Ti) ∫ ε(τ)dτ + Td × (dε/dt) ]',
      contenuHtml: `<p>Modélisation et réglage précis des boucles d'asservissement en génie des procédés.</p>`,
      exercices: [{
        id: 'auto_ch11_ex1',
        type: TypeQuestion.QCM,
        question: "Dans un régulateur PID, quelle action est spécifiquement responsable d'annuler complètement l'erreur statique en régime permanent ?",
        reponsesPossibles: ['L\'action Intégrale (I)', 'L\'action Proportionnelle (P)', 'L\'action Dérivée (D)', 'L\'alimentation 24V'],
        reponsesCorrectes: [0],
        explication: "En intégrant l'écart au cours du temps, l'action I augmente jusqu'à ce que la mesure rejoigne exactement la consigne.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'auto_ch12',
      titre: '12. IHM & Systèmes de Supervision SCADA',
      dureeEstimeeMin: 45,
      description: 'Pupitres opérateurs (HMI), serveurs SCADA (WinCC, Wonderware, Ignition), gestion des alarmes (EEMUA 191), courbes de tendances (Trends), et communication OPC UA sécurisée.',
      pointsCles: ['OPC UA : protocole standard d\'échange sécurisé multi-marques', 'Architecture Client-Serveur', 'Banalisation des alarmes à éviter'],
      formuleCle: 'OPC UA : Chiffrement X.509 et modèle d\'information orienté objet',
      contenuHtml: `<p>Conception d'interfaces homme-machine ergonomiques pour la conduite de procédés industriels.</p>`,
      exercices: [{
        id: 'auto_ch12_ex1',
        type: TypeQuestion.QCM,
        question: "Quel protocole de communication ouvert, indépendant des constructeurs et hautement sécurisé est aujourd'hui la référence pour l'échange de données entre automates et serveurs SCADA / Cloud ?",
        reponsesPossibles: ['OPC UA (Open Platform Communications Unified Architecture)', 'Telnet', 'HTTP non sécurisé', 'Bluetooth 1.0'],
        reponsesCorrectes: [0],
        explication: "OPC UA offre une interopérabilité totale, un modèle objet riche et une sécurité cryptographique native.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'auto_ch13',
      titre: '13. Sécurité Fonctionnelle des Machines : Normes ISO 13849-1 & IEC 62061',
      dureeEstimeeMin: 50,
      description: 'Niveaux de performance PL (a à e), niveaux d’intégrité de sécurité SIL (1 à 3), circuits de sécurité à double canal avec surveillance de discordance, relais et automates de sécurité (Safety PLC).',
      pointsCles: ['PLr déterminé par S (Gravité), F (Fréquence), P (Possibilité d\'évitement)', 'Architecture Catégorie 4 : tolérance à tout défaut simple', 'Bouton coup de poing d\'arrêt d\'urgence à ouverture forcée'],
      formuleCle: 'MTTFd (Mean Time to Dangerous Failure) + DCavg (Diagnostic Coverage) => Niveau PL',
      contenuHtml: `<p>Conception obligatoire des circuits de sécurité selon la directive européenne Machines.</p>`,
      exercices: [{
        id: 'auto_ch13_ex1',
        type: TypeQuestion.QCM,
        question: "Pour un risque d'accident irréversible grave et fréquent sans possibilité d'évitement, quel niveau de performance PL requis (PLr) la norme ISO 13849-1 impose-t-elle généralement ?",
        reponsesPossibles: ['PLe (Niveau le plus élevé avec architecture redondante Cat 4)', 'PLa', 'PLb', 'Aucun niveau requis'],
        reponsesCorrectes: [0],
        explication: "Le niveau PLe est le plus strict de la norme ISO 13849-1 et exige une sécurité à double canal auto-contrôlé.",
        points: 5,
        difficulte: NiveauDifficulte.AVANCE
      }]
    },
    {
      id: 'auto_ch14',
      titre: '14. Servomoteurs, Contrôle de Mouvement (Motion Control) & Cinématique',
      dureeEstimeeMin: 45,
      description: 'Servomoteurs Brushless synchrones, codeurs absolus multi-tours EnDat/Hiperface, profils de vitesse en S (jerk limité), interpolation linéaire/circulaire et cames électroniques.',
      pointsCles: ['Boucle d\'asservissement en position, vitesse et couple à haute fréquence (> 4 kHz)', 'Codeur absolu : pas de prise d\'origine (homing) nécessaire à la mise sous tension', 'Arbre électrique virtuel'],
      formuleCle: 'Jerk = d³x / dt³ (dérivée de l\'accélération, pour supprimer les secousses mécaniques)',
      contenuHtml: `<p>Pilotage d'axes numériques de haute dynamique pour machines d'emballage et robotique.</p>`,
      exercices: [{
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
      }]
    },
    {
      id: 'auto_ch15',
      titre: '15. Diagnostic de Pannes, Forçage Sécurisé & Maintenance d’Automates',
      dureeEstimeeMin: 50,
      description: 'Méthodologie de dépannage en ligne (Online Monitoring), visualisation dynamique des tables de variables, piégeage des signaux fugitifs (Trace), forçage sécurisé des E/S et sauvegarde / restauration des firmwares et programmes.',
      pointsCles: ['Règle absolue : Ne jamais forcer une sortie sans vérifier l\'environnement humain et mécanique', 'Utilisation du tampon de diagnostic (Diagnostic Buffer)', 'Comparaison en ligne / hors ligne pour détecter les modifications non tracées'],
      formuleCle: 'Trace buffer : oscilloscope logiciel intégré dans l\'automate',
      contenuHtml: `<p>Techniques d'intervention avancée et rétablissement rapide de la production automatisée.</p>`,
      exercices: [{
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
      }]
    }
  ]
};
