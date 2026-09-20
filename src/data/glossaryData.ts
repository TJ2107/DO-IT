import { TermeGlossaire, Domaine } from '../types';

export const GLOSSARY_DATA: TermeGlossaire[] = [
  // ÉLECTRICITÉ
  {
    id: 'glo_ohm',
    terme: 'Loi d’Ohm',
    domaine: Domaine.ELECTRICITE,
    domaineNom: 'Électricité Industrielle',
    definitionCourte: 'Relation fondamentale reliant la tension, le courant et la résistance d’un conducteur ohmique.',
    definitionComplete: 'La loi d’Ohm établit que la différence de potentiel U (en Volts) aux bornes d’une résistance est directement proportionnelle à l’intensité du courant I (en Ampères) qui la traverse. La constante de proportionnalité est la résistance R (en Ohms).',
    formule: 'U = R × I  (d\'où I = U / R et R = U / I)',
    exemplePratique: 'Si une bobine de 24 Ω est alimentée sous 24V DC, le courant absorbé est exactement de 1 Ampère.',
    normeOuReference: 'CEI 60050 / Norme NF C 15-100',
    motsCles: ['Tension', 'Courant', 'Résistance', 'Ampère', 'Volt', 'Ohm']
  },
  {
    id: 'glo_kirchhoff',
    terme: 'Lois de Kirchhoff',
    domaine: Domaine.ELECTRICITE,
    domaineNom: 'Électricité Industrielle',
    definitionCourte: 'Deux lois physiques fondamentales pour la résolution des circuits électriques ramifiés : Loi des Nœuds et Loi des Mailles.',
    definitionComplete: '1) Loi des Nœuds : La somme des courants entrant dans un nœud est égale à la somme des courants qui en sortent (conservation de la charge). 2) Loi des Mailles : La somme algébrique des différences de potentiel le long d\'une boucle fermée est égale à zéro (conservation de l\'énergie).',
    formule: 'Σ I_entrants = Σ I_sortants  |  Σ U_k = 0',
    exemplePratique: 'Permet de calculer avec exactitude la répartition des courants dans un tableau de distribution électrique comportant plusieurs départs.',
    normeOuReference: 'Fondements de l\'électrocinétique',
    motsCles: ['Nœud', 'Maille', 'Conservation', 'Circuit ramifié']
  },
  {
    id: 'glo_vat',
    terme: 'VAT (Vérification d\'Absence de Tension)',
    domaine: Domaine.ELECTRICITE,
    domaineNom: 'Électricité Industrielle',
    definitionCourte: 'Procédure réglementaire obligatoire effectuée avec un appareil dédié avant toute intervention sur installation électrique consignée.',
    definitionComplete: 'La VAT doit être réalisée au plus près de la zone de travail à l\'aide d\'un Détecteur Spécifique de Tension (DDT). L\'opérateur doit tester son appareil sur une source de tension prouvée avant et immédiatement après la vérification.',
    exemplePratique: 'L\'utilisation d\'un multimètre classique pour une VAT formelle est strictement interdite selon la norme NFC 18-510 car il n\'intègre pas d\'autotest intégré fiable.',
    normeOuReference: 'NF C 18-510 / CEI 61243-3',
    motsCles: ['Sécurité', 'Consignation', 'NFC 18-510', 'DDT', 'Habilitation']
  },
  {
    id: 'glo_cos_phi',
    terme: 'Facteur de Puissance (Cos φ)',
    domaine: Domaine.ELECTRICITE,
    domaineNom: 'Électricité Industrielle',
    definitionCourte: 'Rapport entre la puissance active P (utile) et la puissance apparente S (fournie par le réseau).',
    definitionComplete: 'Dans un réseau alternatif sinusoïdal, le déphasage φ entre la tension et le courant est causé par les récepteurs inductifs (moteurs, transformateurs). Un cos φ faible surcharge les lignes et entraîne des pénalités du distributeur d\'énergie, corrigibles par des batteries de condensateurs.',
    formule: 'cos φ = P / S  (avec S = √(P² + Q²))',
    exemplePratique: 'Un moteur industriel non compensé avec un cos φ de 0.70 nécessite 42% de courant en plus sur la ligne qu\'un moteur compensé à 0.95 pour la même puissance mécanique délivrée.',
    normeOuReference: 'Tarification Enedis / Décret puissance réactive',
    motsCles: ['Puissance active', 'Puissance réactive', 'Condensateur', 'KVA', 'KW']
  },

  // ÉLECTRONIQUE
  {
    id: 'glo_mosfet',
    terme: 'MOSFET',
    domaine: Domaine.ELECTRONIQUE,
    domaineNom: 'Électronique Appliquée',
    definitionCourte: 'Transistor à effet de champ à grille isolée, piloté en tension (Vgs), roi de l\'électronique de puissance.',
    definitionComplete: 'Metal-Oxide-Semiconductor Field-Effect Transistor. Composé de 3 bornes (Grille/Gate, Drain, Source). La présence d\'un oxyde isolant confère une impédance de grille quasi-infinie en continu, permettant des fréquences de commutation très élevées avec un minimum de pertes de commande.',
    formule: 'Id = k × (Vgs - Vth)² en régime saturé',
    exemplePratique: 'Utilisé dans tous les onduleurs solaires, variateurs de vitesse et étages de conversion DC/DC haute fréquence.',
    motsCles: ['Transistor', 'Semiconducteur', 'Grille', 'Commutation', 'Hacheur']
  },
  {
    id: 'glo_zener',
    terme: 'Diode Zener',
    domaine: Domaine.ELECTRONIQUE,
    domaineNom: 'Électronique Appliquée',
    definitionCourte: 'Diode semiconductrice conçue pour conduire en inverse à une tension d\'avalanche calibrée et stable.',
    definitionComplete: 'Polarisée en inverse, la diode Zener maintient une tension Vz quasi constante à ses bornes dès que le courant de coude Iz_min est atteint, la rendant idéale comme référence de tension ou élément d\'écrêtage de surtension.',
    formule: 'V_out = Vz (lorsque polarisée en inverse)',
    exemplePratique: 'Protection contre les surtensions sur les entrées d\'un microcontrôleur 5V en plaçant une Zener 5.1V.',
    motsCles: ['Semiconducteur', 'Régulation', 'Tension de référence', 'Écrêtage']
  },

  // MÉCANIQUE
  {
    id: 'glo_pfs',
    terme: 'Principe Fondamental de la Statique (PFS)',
    domaine: Domaine.MECANIQUE,
    domaineNom: 'Mécanique & Résistance des Matériaux',
    definitionCourte: 'Condition nécessaire et suffisante pour qu’un corps indéformable soit au repos ou en mouvement rectiligne uniforme.',
    definitionComplete: 'Dans un repère galiléen, pour un solide en équilibre statique, la somme vectorielle des forces extérieures est nulle ET la somme vectorielle des moments par rapport à n\'importe quel point de l\'espace est nulle.',
    formule: 'Σ F_ext = 0  et  Σ M_A(F_ext) = 0',
    exemplePratique: 'Permet de dimensionner les appuis d\'un pont roulant et les réactions aux paliers d\'un arbre de transmission.',
    motsCles: ['Forces', 'Moments', 'Équilibre', 'Statique', 'Torseur']
  },
  {
    id: 'glo_limite_elastique',
    terme: 'Limite Élastique (Re ou Sy)',
    domaine: Domaine.MECANIQUE,
    domaineNom: 'Mécanique & Résistance des Matériaux',
    definitionCourte: 'Contrainte maximale qu\'un matériau peut subir sans subir de déformation plastique permanente.',
    definitionComplete: 'Exprimée en MégaPascals (MPa ou N/mm²). En dessous de Re, le matériau se comporte comme un ressort parfait (loi de Hooke : σ = E × ε). Au-delà, il entre dans le domaine plastique et ne reprend plus sa forme initiale.',
    formule: 'σ_adm = Re / s  (avec s = coefficient de sécurité)',
    exemplePratique: 'Un acier de construction S235 a une limite élastique Re = 235 MPa. Avec un facteur de sécurité de 2, la contrainte admissible de calcul est fixée à 117.5 MPa.',
    normeOuReference: 'Eurocode 3 / NF EN 10025',
    motsCles: ['RDM', 'Contrainte', 'Élasticité', 'Plastique', 'MPa']
  },

  // IT & CYBER
  {
    id: 'glo_cidr',
    terme: 'Notation CIDR (Classless Inter-Domain Routing)',
    domaine: Domaine.INFORMATIQUE_FONDAMENTALE,
    domaineNom: 'Informatique & Réseaux',
    definitionCourte: 'Méthode d\'allocation d\'adresses IP et de routage indiquant le nombre de bits du masque de sous-réseau (ex: /24).',
    definitionComplete: 'Remplace l\'ancien système rigide par classes (A, B, C). Un préfixe /24 signifie que les 24 premiers bits correspondent au réseau (masque 255.255.255.0), laissant 8 bits pour les hôtes, soit 256 adresses (254 hôtes utilisables après exclusion de l\'adresse réseau et broadcast).',
    formule: 'Nombre d\'hôtes utilisables = 2^(32 - Masque) - 2',
    exemplePratique: 'Le sous-réseau 192.168.1.0/26 offre 2^(32-26) - 2 = 62 adresses IP exploitables pour des serveurs ou postes de travail.',
    normeOuReference: 'RFC 4632',
    motsCles: ['IP', 'Masque', 'Sous-réseau', 'Routage', 'TCP/IP']
  },
  {
    id: 'glo_aes',
    terme: 'Chiffrement AES (Advanced Encryption Standard)',
    domaine: Domaine.INFORMATIQUE_FONDAMENTALE,
    domaineNom: 'Informatique & Réseaux',
    definitionCourte: 'Standard mondial de chiffrement symétrique par blocs (128, 192 ou 256 bits).',
    definitionComplete: 'Adopté par le NIST en 2001 (Rijndael). Utilise la même clé secrète pour le chiffrement et le déchiffrement à travers de multiples rondes de substitution et de permutation. AES-256 est réputé incassable par force brute avec les capacités de calcul actuelles.',
    exemplePratique: 'Utilisé pour sécuriser les tunnels VPN IPsec/TLS, les disques durs chiffrés (BitLocker) et les bases de données d\'entreprise.',
    normeOuReference: 'FIPS 197 / ANSSI',
    motsCles: ['Cryptographie', 'Symétrique', 'Sécurité', 'Clé 256 bits']
  },

  // COMPLIANCE & RGPD
  {
    id: 'glo_rgpd',
    terme: 'RGPD / GDPR',
    domaine: Domaine.COMPLIANCE_REGLEMENTAIRE,
    domaineNom: 'Compliance & Réglementation',
    definitionCourte: 'Règlement Général sur la Protection des Données (Règlement UE 2016/679).',
    definitionComplete: 'Cadre légal européen régissant le traitement des données à caractère personnel. Impose les principes de licéité, transparence, minimisation, exactitude, limitation de conservation, intégrité et responsabilité (Accountability). Sanctions pouvant atteindre 20 millions d\'euros ou 4% du CA mondial.',
    exemplePratique: 'Obligation de recueillir un consentement explicite et de notifier toute violation de données à la CNIL sous 72 heures.',
    normeOuReference: 'Règlement UE 2016/679',
    motsCles: ['Données personnelles', 'CNIL', 'DPO', 'Accountability', 'Privacy']
  },

  // HSE
  {
    id: 'glo_duerp',
    terme: 'DUERP (Document Unique d\'Évaluation des Risques)',
    domaine: Domaine.HSE,
    domaineNom: 'HSE & Sécurité au Travail',
    definitionCourte: 'Document obligatoire répertoriant l\'ensemble des risques professionnels pour chaque unité de travail.',
    definitionComplete: 'Obligatoire dès le premier salarié (Code du travail). Il formalise l\'inventaire des risques, leur hiérarchisation (fréquence × gravité) et le plan d\'action annuel de prévention pour réduire ou supprimer les dangers.',
    formule: 'Criticité C = Fréquence (F) × Gravité (G)',
    exemplePratique: 'Doit être mis à jour au moins une fois par an ou lors de tout aménagement modifiant les conditions de sécurité ou après un accident du travail.',
    normeOuReference: 'Articles R4121-1 et suivants du Code du Travail',
    motsCles: ['Prévention', 'Évaluation', 'Criticité', 'Sécurité au travail']
  },

  // AUTOMATISME
  {
    id: 'glo_ladder',
    terme: 'Langage Ladder (LD / Schéma à contacts)',
    domaine: Domaine.AUTOMATISME_INDUSTRIEL,
    domaineNom: 'Automatisme Industriel',
    definitionCourte: 'Langage graphique de programmation d\'automates (PLC) calqué sur les schémas électriques à relais.',
    definitionComplete: 'Standardisé par la norme CEI 61131-3. Il organise le programme en barreaux (rungs) entre deux rails d\'alimentation, combinant des contacts normalement ouverts (--| |--), normalement fermés (--|/|--) et des bobines de sortie (--( )--).',
    exemplePratique: 'Idéal pour traduire instantanément des logiques d\'auto-maintien (marche/arrêt moteur avec disjoncteur thermique en série).',
    normeOuReference: 'CEI 61131-3',
    motsCles: ['PLC', 'Automate', 'Bobine', 'Contact', 'CEI 61131-3']
  },

  // MAINTENANCE
  {
    id: 'glo_mtbf',
    terme: 'MTBF (Mean Time Between Failures)',
    domaine: Domaine.MAINTENANCE_INDUSTRIELLE,
    domaineNom: 'Maintenance Industrielle',
    definitionCourte: 'Moyenne des Temps de Bon Fonctionnement entre deux défaillances consécutives d\'un équipement réparable.',
    definitionComplete: 'Indicateur clé de fiabilité opérationnelle. Plus le MTBF est élevé, plus le système est fiable et moins il tombe en panne.',
    formule: 'MTBF = Temps total de bon fonctionnement / Nombre total de pannes',
    exemplePratique: 'Une machine tourne 1000 heures et subit 4 pannes. Son MTBF = 1000 / 4 = 250 heures.',
    normeOuReference: 'NF EN 13306',
    motsCles: ['Fiabilité', 'Indicateur', 'Disponibilité', 'Maintenance']
  },
  {
    id: 'glo_mttr',
    terme: 'MTTR (Mean Time To Repair)',
    domaine: Domaine.MAINTENANCE_INDUSTRIELLE,
    domaineNom: 'Maintenance Industrielle',
    definitionCourte: 'Temps moyen nécessaire pour diagnostiquer, réparer et remettre en service un équipement après défaillance.',
    definitionComplete: 'Indicateur clé de maintenabilité et d\'efficacité de l\'équipe technique. Plus le MTTR est faible, plus l\'équipe intervient rapidement et avec les bonnes pièces de rechange.',
    formule: 'MTTR = Temps total d\'arrêt pour réparation / Nombre de pannes',
    exemplePratique: 'Si 4 pannes ont totalisé 12 heures d\'arrêt, MTTR = 12 / 4 = 3 heures par intervention.',
    normeOuReference: 'NF EN 13306',
    motsCles: ['Maintenabilité', 'Diagnostic', 'Réparation', 'Dépannage']
  },
  {
    id: 'glo_trs',
    terme: 'TRS / OEE (Taux de Rendement Synthétique)',
    domaine: Domaine.MAINTENANCE_INDUSTRIELLE,
    domaineNom: 'Maintenance Industrielle',
    definitionCourte: 'Indicateur global mesurant le pourcentage de temps où une ligne de production produit de bonnes pièces à la cadence nominale.',
    definitionComplete: 'Le TRS est le produit de 3 ratios : Disponibilité opérationnelle (D) × Performance de cadence (P) × Qualité (Q). La classe mondiale industrielle (World Class OEE) se situe à 85% et plus.',
    formule: 'TRS = Taux de Disponibilité × Taux d\'Efficacité × Taux de Qualité',
    exemplePratique: 'Permet de distinguer si les pertes proviennent des pannes mécaniques, des micro-arrêts ou des rebuts de pièces.',
    normeOuReference: 'Norme NF E60-182',
    motsCles: ['OEE', 'Performance', 'Productivité', 'TPM', 'Qualité']
  },

  // GESTION DE PROJET
  {
    id: 'glo_scrum',
    terme: 'Cadre Scrum & Sprints',
    domaine: Domaine.GESTION_PROJET,
    domaineNom: 'Gestion de Projet & Méthodes Agiles',
    definitionCourte: 'Framework agile itératif et incrémental articulé autour de cycles de travail courts (Sprints de 1 à 4 semaines).',
    definitionComplete: 'Repose sur 3 rôles clés (Product Owner, Scrum Master, Developers), 3 artefacts (Product Backlog, Sprint Backlog, Incrément) et 5 rituels (Sprint Planning, Daily Scrum 15 min, Sprint Review, Sprint Retrospective, et Product Backlog Refinement).',
    exemplePratique: 'À la fin de chaque sprint, l\'équipe livre un incrément potentiellement déployable et inspectable par les parties prenantes.',
    normeOuReference: 'The Scrum Guide (Schwaber & Sutherland)',
    motsCles: ['Agilité', 'Sprint', 'Backlog', 'Scrum Master', 'Product Owner']
  },

  // LEADERSHIP
  {
    id: 'glo_desc',
    terme: 'Méthode DESC',
    domaine: Domaine.LEADERSHIP_TECHNIQUE,
    domaineNom: 'Leadership & Soft Skills Techniques',
    definitionCourte: 'Technique structurée de communication bienveillante et assertive pour formuler une critique constructive ou résoudre un désaccord.',
    definitionComplete: 'Acronyme en 4 étapes : 1) Décrire les faits objectifs sans juger, 2) Exprimer ses sentiments et l\'impact, 3) Spécifier des solutions constructives, 4) Conclure positivement sur les conséquences mutuelles.',
    exemplePratique: '« J\'ai constaté un décalage de 2 jours sur la livraison de la mise à jour (D). Cela crée une tension avec le client (E). Je propose qu\'on ajuste le périmètre des prochains tickets (S) afin de garantir la sérénité de l\'équipe (C). »',
    motsCles: ['Communication', 'Feedback', 'Assertivité', 'Management', 'Conflit']
  },

  // ANGLAIS TOEFL
  {
    id: 'glo_awl',
    terme: 'Academic Word List (AWL)',
    domaine: Domaine.ANGLAIS_TOEFL,
    domaineNom: 'Anglais TOEFL',
    definitionCourte: 'Liste de 570 familles de mots à haute fréquence dans la littérature universitaire et scientifique.',
    definitionComplete: 'Compilée par le Pr. Averil Coxhead (Université de Victoria), l’AWL regroupe les termes transversaux non spécifiques à une seule discipline (ex: analyze, establish, derive, institute) indispensables pour réussir le TOEFL iBT.',
    exemplePratique: 'La maîtrise de l’AWL permet de débloquer la compréhension de 10% des mots de tout texte académique anglophone.',
    normeOuReference: 'ETS / Coxhead Academic Word List',
    motsCles: ['AWL', 'Vocabulaire', 'Académique', 'ETS', 'TOEFL']
  },
  {
    id: 'glo_toefl_integrated',
    terme: 'Integrated Tasks (Speaking & Writing)',
    domaine: Domaine.ANGLAIS_TOEFL,
    domaineNom: 'Anglais TOEFL',
    definitionCourte: 'Épreuves combinant la lecture d’un texte, l’écoute d’un extrait sonore et la production orale ou écrite synthétique.',
    definitionComplete: 'Les tâches intégrées évaluent la capacité de l’étudiant à croiser plusieurs sources d’information en anglais académique (ex: résumer la contradiction apportée par un professeur audio à l’encontre d’un texte de lecture).',
    exemplePratique: 'Au Speaking Task 2, lire une annonce du campus (45s), écouter la réaction de deux étudiants (1 min), puis résumer leur avis à l’oral (60s).',
    normeOuReference: 'ETS TOEFL iBT Format',
    motsCles: ['Integrated', 'Speaking', 'Writing', 'Synthèse', 'Audio']
  }
];
