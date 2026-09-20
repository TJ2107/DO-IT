import { Domaine, NiveauDifficulte, TypeQuestion, Cours } from '../../types';

export const COURSE_INFORMATIQUE: Cours = {
  id: 'it_101',
  domaine: Domaine.INFORMATIQUE,
  domaineNom: 'Informatique',
  icon: '💻',
  titre: "Réseaux Informatiques, Protocoles TCP/IP & Systèmes",
  description: 'Cursus complet en 15 chapitres : modèle OSI, IPv4/IPv6, routage statique/dynamique OSPF, VLANs, DNS, DHCP, VPN IPsec/SSL, Wi-Fi 6 et cybersécurité réseau.',
  niveau: NiveauDifficulte.DEBUTANT,
  dureeHeures: 45,
  colorClass: 'from-cyan-600 to-blue-700',
  titreBrevet: "Brevet Professionnel d'Administration Réseaux & Systèmes d'Infrastructure",
  objectifs: [
    'Maîtriser les 7 couches du modèle OSI et les 4 couches TCP/IP',
    'Calculer les sous-réseaux IPv4 (masques VLSM, notation CIDR) et configurer IPv6',
    'Configurer les commutateurs (VLAN 802.1Q, Trunk, Spanning Tree RSTP)',
    'Administrer les protocoles de routage (OSPF, BGP) et les services essentiels (DNS, DHCP)',
    'Sécuriser une infrastructure avec pare-feu (stateful firewall), VPN et segmentation'
  ],
  competences: [
    'Modèle OSI & Encapsulation',
    'Calcul de Sous-Réseaux CIDR / VLSM',
    'Commutation & VLANs 802.1Q',
    'Routage OSPF & Passerelles par défaut',
    'Services Réseau (DNS, DHCP, NAT)',
    'VPN IPsec & Sécurité Réseau',
    'Supervision Réseau (SNMP, Wireshark)'
  ],
  preRequis: ['Binaire élémentaire, logique informatique de base'],
  certifiant: true,
  scoreMinValidation: 0.7,
  dureeValiditeMois: 36,
  devoirs: [
    {
      id: 'it_dev_1',
      numero: 1,
      titre: 'Devoir n°1 : Plan d’Adressage IPv4 VLSM & Segmentation d’Entreprise',
      chapitresCouverts: 'Chapitres 1 à 5',
      dureeEstimeeMin: 45,
      noteMax: 20,
      coefficient: 2,
      description: 'Découpage du bloc 192.168.10.0/24 pour 3 sous-réseaux départementaux et calcul des adresses réseau, broadcast et plages d’hôtes.',
      miseEnSituation: 'Une PME dispose de l’adresse réseau 192.168.10.0/24. Vous devez allouer : Sous-réseau A (Comptabilité) : 55 hôtes, Sous-réseau B (Technique) : 28 hôtes, Sous-réseau C (Serveurs) : 12 hôtes.',
      questions: [
        {
          id: 'q1',
          titre: 'Masque CIDR pour le sous-réseau Comptabilité (55 hôtes)',
          enonce: 'Quel est le préfixe CIDR et le masque décimal à assigner pour accueillir au moins 55 hôtes utiles ? (Formule : 2^n - 2 ≥ 55)',
          points: 7,
          type: 'calcul',
          options: ['/26 (255.255.255.192) offrant 62 hôtes', '/27 (255.255.255.224) offrant 30 hôtes', '/25 (255.255.255.128) offrant 126 hôtes', '/24 (255.255.255.0)'],
          reponseCorrecteIndex: 0,
          solutionDetaillee: 'Avec n=6 bits d\'hôte : 2⁶ - 2 = 64 - 2 = 62 hôtes utilisables ≥ 55. Le masque est donc /26 (32 - 6 = 26), soit 255.255.255.192.',
          baremeDetail: ['Calcul du nombre de bits d\'hôte n=6 : 3 pts', 'Déduction du préfixe /26 et masque 255.255.255.192 : 4 pts']
        },
        {
          id: 'q2',
          titre: 'Adresse de broadcast du premier sous-réseau /26',
          enonce: 'Pour le sous-réseau débutant à 192.168.10.0/26, quelle est l’adresse de diffusion (broadcast) ?',
          points: 7,
          type: 'calcul',
          options: ['192.168.10.63', '192.168.10.62', '192.168.10.64', '192.168.10.255'],
          reponseCorrecteIndex: 0,
          solutionDetaillee: 'Le sous-réseau s\'étend de 192.168.10.0 à 192.168.10.63. L\'adresse d\'hôte max est .62 et le broadcast est 192.168.10.63.',
          baremeDetail: ['Identification de la plage : 3 pts', 'Adresse de broadcast .63 : 4 pts']
        },
        {
          id: 'q3',
          titre: 'Adresse réseau du second sous-réseau (Technique /27)',
          enonce: 'Le sous-réseau B (28 hôtes requis) est dimensionné en /27 (30 hôtes utiles). Quelle est son adresse réseau de départ ?',
          points: 6,
          type: 'calcul',
          options: ['192.168.10.64/27', '192.168.10.63/27', '192.168.10.96/27', '192.168.10.128/27'],
          reponseCorrecteIndex: 0,
          solutionDetaillee: 'Le sous-réseau précédent s\'arrêtant à .63, le sous-réseau suivant commence immédiatement à 192.168.10.64 avec le masque /27.',
          baremeDetail: ['Continuité de l\'espace d\'adressage VLSM : 3 pts', 'Résultat 192.168.10.64/27 : 3 pts']
        }
      ]
    }
  ],
  chapitres: [
    {
      id: 'it_ch1',
      titre: '1. Modèle OSI (7 Couches) vs Modèle TCP/IP',
      dureeEstimeeMin: 40,
      description: 'Couches Physique, Liaison, Réseau, Transport, Session, Présentation, Application et processus d’encapsulation/décapsulation des PDU.',
      pointsCles: [
        'Modèle OSI (7 couches) : Référence conceptuelle ISO (Physique, Liaison, Réseau, Transport, Session, Présentation, Application)',
        'Modèle TCP/IP (4 couches réelles) : Accès Réseau, Internet, Transport, Application',
        'PDU (Protocol Data Unit) par couche : Bit (L1), Trame / Frame (L2), Paquet / Packet (L3), Segment / Datagramme (L4), Données utiles (L7)',
        'Encapsulation : chaque couche ajoute son propre en-tête (Header) contenant ses métadonnées de routage/adressage'
      ],
      formuleCle: '\\text{Trame L2} = [\\text{Header MAC} \\mid \\text{Header IP (L3)} \\mid \\text{Header TCP/UDP (L4)} \\mid \\text{Data (L7)} \\mid \\text{FCS (CRC32)}]',
      astuceTerrain: 'Pour retenir l\'ordre des 7 couches OSI de bas en haut (1 à 7) : "Pour Le Réseau Tout Semble Parfaitement Appliqué" (Physique, Liaison, Réseau, Transport, Session, Présentation, Application).',
      conseilProfesseur: 'Lors d\'un dépannage réseau sur site, appliquez TOUJOURS la méthode de diagnostic en couches en partant du bas : vérifiez d\'abord le câble/voyant RJ45 (L1), puis la table MAC (L2), puis le ping IP (L3), puis le port TCP (L4).',
      contenuHtml: `
        <h3>1. Correspondance Détaillée entre les Modèles OSI et TCP/IP</h3>
        <table class="w-full text-xs border border-slate-300 my-4 text-left">
          <thead class="bg-slate-100 font-bold">
            <tr>
              <th class="p-2 border">Couche OSI</th>
              <th class="p-2 border">Couche TCP/IP</th>
              <th class="p-2 border">PDU (Unité)</th>
              <th class="p-2 border">Équipement Typique</th>
              <th class="p-2 border">Protocoles Exemples</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="p-2 border font-bold">7. Application<br>6. Présentation<br>5. Session</td><td class="p-2 border font-bold text-blue-900" rowspan="3">Application</td><td class="p-2 border">Données (Message)</td><td class="p-2 border">Serveur d'application, Proxy, Passerelle applicative</td><td class="p-2 border font-mono">HTTP, HTTPS, DNS, SSH, SMTP, DHCP</td></tr>
            <tr><td class="p-2 border font-bold">4. Transport</td><td class="p-2 border font-mono text-purple-900 font-bold">Segment / Datagramme</td><td class="p-2 border">Pare-feu d'état (Stateful), Répartiteur de charge</td><td class="p-2 border font-mono">TCP, UDP, QUIC</td></tr>
            <tr><td class="p-2 border font-bold">3. Réseau</td><td class="p-2 border font-mono text-emerald-900 font-bold">Paquet (Packet)</td><td class="p-2 border">Routeur, Commutateur Niveau 3 (L3)</td><td class="p-2 border font-mono">IPv4, IPv6, ICMP, OSPF, BGP</td></tr>
            <tr><td class="p-2 border font-bold">2. Liaison de données</td><td class="p-2 border font-bold text-slate-800" rowspan="2">Accès Réseau</td><td class="p-2 border font-mono text-cyan-900 font-bold">Trame (Frame)</td><td class="p-2 border">Commutateur (Switch L2), Pont (Bridge)</td><td class="p-2 border font-mono">Ethernet 802.3, Wi-Fi 802.11, ARP</td></tr>
            <tr><td class="p-2 border font-bold">1. Physique</td><td class="p-2 border font-mono text-amber-900">Bit (Signal)</td><td class="p-2 border">Câble cuivre RJ45, Fibre Optique, Répéteur</td><td class="p-2 border font-mono">1000BASE-T, SFP+, Câblage Cat6A</td></tr>
          </tbody>
        </table>
      `,
      exercices: [{
        id: 'it_ch1_ex1',
        type: TypeQuestion.QCM,
        question: "À quelle couche du modèle OSI correspond la 'Trame' (Frame) manipulée par les commutateurs Ethernet ?",
        reponsesPossibles: ['Couche 2 - Liaison de données (Data Link)', 'Couche 3 - Réseau', 'Couche 4 - Transport', 'Couche 1 - Physique'],
        reponsesCorrectes: [0],
        explication: "L'Unité de Données de Protocole (PDU) de la couche 2 est la trame Ethernet (contenant les adresses MAC source et destination).",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'it_ch2',
      titre: '2. Adressage IPv4, Masques de Sous-Réseau (CIDR) & VLSM',
      dureeEstimeeMin: 45,
      description: 'Structure 32 bits, classes historiques, masques CIDR (/24, /28, etc.), calculs de plages d’hôtes utiles ($2^n - 2$) et découpage à longueur variable VLSM.',
      pointsCles: [
        'Structure IPv4 : 32 bits regroupés en 4 octets décimaux (ex: $192.168.1.10$)',
        'Plages privées RFC 1918 (non routables sur Internet) : $10.0.0.0/8$, $172.16.0.0/12$, $192.168.0.0/16$',
        'Calcul du nombre d\'hôtes utiles par sous-réseau : $N_{\\text{hôtes}} = 2^n - 2$ (où $n$ est le nombre de bits à 0 dans le masque)',
        'Deux adresses réservées par sous-réseau : la première = Adresse Réseau (tous les bits d\'hôte à 0), la dernière = Adresse de Broadcast (tous les bits d\'hôte à 1)'
      ],
      formuleCle: 'N_{\\text{hôtes utiles}} = 2^{32 - \\text{préfixe CIDR}} - 2 \\quad | \\quad \\text{Pas (Magic Number)} = 256 - \\text{Octet Masque non nul}',
      astuceTerrain: 'Pour trouver instantanément le pas d\'un sous-réseau, soustrayez la valeur du dernier octet non nul du masque à 256 (ex: pour un masque 255.255.255.224 (/27), le pas est $256 - 224 = 32$. Les sous-réseaux sont donc .0, .32, .64, .96...).',
      conseilProfesseur: 'Ne confondez jamais le masque /30 (2 hôtes utiles, idéal pour les liaisons point-à-point entre routeurs) et le masque /31 (RFC 3021 pour routeurs modernes sans broadcast).',
      contenuHtml: `
        <h3>1. Table de Référence Rapide des Masques CIDR</h3>
        <table class="w-full text-xs border border-slate-300 my-4 text-left">
          <thead class="bg-slate-100 font-bold">
            <tr>
              <th class="p-2 border">CIDR</th>
              <th class="p-2 border">Masque Décimal</th>
              <th class="p-2 border">Bits d'Hôte ($n$)</th>
              <th class="p-2 border">Nombre d'Hôtes Utiles</th>
              <th class="p-2 border">Pas d'Incrément</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="p-2 border font-bold font-mono">/24</td><td class="p-2 border font-mono">255.255.255.0</td><td class="p-2 border">8</td><td class="p-2 border font-bold text-blue-900">254</td><td class="p-2 border">256</td></tr>
            <tr><td class="p-2 border font-bold font-mono">/25</td><td class="p-2 border font-mono">255.255.255.128</td><td class="p-2 border">7</td><td class="p-2 border font-bold text-blue-900">126</td><td class="p-2 border">128</td></tr>
            <tr><td class="p-2 border font-bold font-mono">/26</td><td class="p-2 border font-mono">255.255.255.192</td><td class="p-2 border">6</td><td class="p-2 border font-bold text-blue-900">62</td><td class="p-2 border">64</td></tr>
            <tr><td class="p-2 border font-bold font-mono">/27</td><td class="p-2 border font-mono">255.255.255.224</td><td class="p-2 border">5</td><td class="p-2 border font-bold text-blue-900">30</td><td class="p-2 border">32</td></tr>
            <tr><td class="p-2 border font-bold font-mono">/28</td><td class="p-2 border font-mono">255.255.255.240</td><td class="p-2 border">4</td><td class="p-2 border font-bold text-blue-900">14</td><td class="p-2 border">16</td></tr>
            <tr><td class="p-2 border font-bold font-mono">/29</td><td class="p-2 border font-mono">255.255.255.248</td><td class="p-2 border">3</td><td class="p-2 border font-bold text-blue-900">6</td><td class="p-2 border">8</td></tr>
            <tr><td class="p-2 border font-bold font-mono">/30</td><td class="p-2 border font-mono">255.255.255.252</td><td class="p-2 border">2</td><td class="p-2 border font-bold text-emerald-900">2 (Inter-routeur)</td><td class="p-2 border">4</td></tr>
          </tbody>
        </table>
      `,
      exercices: [{
        id: 'it_ch2_ex1',
        type: TypeQuestion.CHIFFREE,
        question: "Combien d'hôtes IP utilisables peut accueillir un sous-réseau avec un masque /28 (255.255.255.240) ?",
        reponsesPossibles: ['14 hôtes', '16 hôtes', '30 hôtes', '6 hôtes'],
        reponsesCorrectes: [0],
        explication: "Nombre d'hôtes = 2^(32 - 28) - 2 = 2⁴ - 2 = 16 - 2 = 14 hôtes.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'it_ch3',
      titre: '3. Commutation Ethernet & Adresses MAC (Layer 2)',
      dureeEstimeeMin: 40,
      description: 'Format MAC 48 bits (EUI-48 / OUI constructeur), table CAM (Content Addressable Memory), Broadcast storm et domaine de diffusion vs domaine de collision.',
      pointsCles: [
        'Adresse MAC : 48 bits (6 octets) hexadécimaux gravés en usine. 3 premiers octets = OUI constructeur (ex: Cisco, Dell), 3 derniers octets = numéro de série de carte NIC',
        'Table CAM (Table MAC) : associe dynamiquement chaque adresse MAC source apprise au port physique du switch et au VLAN correspondant',
        'Mécanisme de transmission du switch : Filtrage (Forwarding sélectif si MAC connue), ou Inondation (Flooding sur tous les ports si MAC de destination inconnue ou trame Broadcast FF:FF:FF:FF:FF:FF)',
        'Domaine de collision : restreint à chaque port du switch (Full Duplex) | Domaine de diffusion : étendu à tout le commutateur (sauf découpage par VLAN)'
      ],
      formuleCle: '\\text{Trame Ethernet 802.3} : [\\text{Préambule (7o)} \\mid \\text{SFD (1o)} \\mid \\text{MAC Dest (6o)} \\mid \\text{MAC Src (6o)} \\mid \\text{EtherType (2o)} \\mid \\text{Payload (46-1500o)} \\mid \\text{FCS (4o)}]',
      astuceTerrain: 'Pour vérifier la table d\'adresses physiques sur un switch Cisco en ligne de commande : tapez `show mac address-table dynamic`. Pour vider la table en cas de conflit : `clear mac address-table dynamic`.',
      conseilProfesseur: 'Une adresse MAC de diffusion universelle est toujours $FF:FF:FF:FF:FF:FF$. Une adresse multicast commence souvent par $01:00:5E$ en IPv4.',
      contenuHtml: `
        <h3>1. Cycle de Vie d'une Entrée dans la Table CAM d'un Commutateur</h3>
        <ol class="space-y-1.5 my-3">
          <li><strong>1. Réception :</strong> Une trame entre sur le port FastEthernet 0/1 avec la MAC source A.</li>
          <li><strong>2. Apprentissage (Learning) :</strong> Le switch enregistre dans sa mémoire CAM : <code>MAC A -> Port Fa0/1 (TTL: 300s)</code>.</li>
          <li><strong>3. Recherche (Lookup) :</strong> Le switch regarde la MAC destination B dans sa table CAM.</li>
          <li><strong>4. Commutation sélective :</strong> Si B est associée au port Fa0/5, la trame est commutée uniquement vers Fa0/5 (aucun autre port ne reçoit le trafic).</li>
        </ol>
      `,
      exercices: [{
        id: 'it_ch3_ex1',
        type: TypeQuestion.QCM,
        question: "Que fait un commutateur Ethernet lorsqu'il reçoit une trame dont l'adresse MAC destination n'est pas encore présente dans sa table CAM ?",
        reponsesPossibles: ['Il effectue une inondation (Flooding) en renvoyant la trame sur tous les ports sauf celui de réception', 'Il détruit immédiatement la trame', 'Il redémarre', 'Il renvoie une erreur à l\'émetteur'],
        reponsesCorrectes: [0],
        explication: "En cas d'adresse inconnue, le switch transfère la trame sur tous les autres ports (Unicast Flooding) pour joindre la cible.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'it_ch4',
      titre: '4. VLANs (802.1Q), Trunks & Protocole Spanning Tree (STP / RSTP)',
      dureeEstimeeMin: 45,
      description: 'Segmentation logique de réseaux, marquage de trame 802.1Q (VLAN ID 1-4094), liaisons Trunk, et prévention des boucles avec RSTP (802.1w).',
      pointsCles: [
        'VLAN (Virtual Local Area Network) : partitionne logiquement un commutateur physique en plusieurs domaines de diffusion isolés',
        'Port d\'Accès (Access) : dédié à un équipement terminal (PC, imprimante), transmet des trames non étiquetées (untagged)',
        'Port Trunk (Liaison d\'agrégation) : interconnecte deux switchs ou un routeur en transportant plusieurs VLANs avec étiquetage IEEE 802.1Q (4 octets ajoutés dont le VLAN ID de 12 bits)',
        'RSTP (Rapid Spanning Tree Protocol - 802.1w) : élimine les boucles de commutation destructrices (Broadcast Storm) en bloquant les liens redondants et converge en < 2 secondes'
      ],
      formuleCle: '\\text{Header 802.1Q (4 octets)} = [\\text{TPID: } 0x8100 \\mid \\text{Priorité CoS (3 bits)} \\mid \\text{CFI (1 bit)} \\mid \\text{VLAN ID (12 bits: } 1 \\text{ à } 4094)]',
      astuceTerrain: 'Configurez toujours le "PortFast" (ou Edge Port) sur tous les ports connectés à des postes utilisateurs pour désactiver le délai d\'apprentissage STP de 30 secondes et obtenir une IP via DHCP instantanément.',
      conseilProfesseur: 'N\'utilisez jamais le VLAN 1 par défaut pour le trafic de gestion d\'administration des switchs (VLAN Management). Créez un VLAN dédié sécurisé (ex: VLAN 99) pour isoler les accès SSH.',
      contenuHtml: `
        <h3>1. Les États des Ports dans le Protocole Rapid Spanning Tree (RSTP 802.1w)</h3>
        <table class="w-full text-xs border border-slate-300 my-4 text-left">
          <thead class="bg-slate-100 font-bold">
            <tr>
              <th class="p-2 border">Rôle du Port</th>
              <th class="p-2 border">État RSTP</th>
              <th class="p-2 border">Comportement du Trafic</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="p-2 border font-bold">Root Port (Port Racine)</td><td class="p-2 border text-emerald-700 font-bold">Forwarding</td><td class="p-2 border">Chemin optimal vers le pont racine (Root Bridge), transmet les données</td></tr>
            <tr><td class="p-2 border font-bold">Designated Port (Désigné)</td><td class="p-2 border text-emerald-700 font-bold">Forwarding</td><td class="p-2 border">Port actif alimentant un segment réseau local, transmet les données</td></tr>
            <tr><td class="p-2 border font-bold">Alternate / Backup Port</td><td class="p-2 border text-red-700 font-bold">Discarding (Bloqué)</td><td class="p-2 border">Bloque le trafic pour éviter les boucles, prend le relais instantanément en cas de rupture de lien</td></tr>
          </tbody>
        </table>
      `,
      exercices: [{
        id: 'it_ch4_ex1',
        type: TypeQuestion.QCM,
        question: "Quel protocole réseau empêche la formation de boucles de commutation fatales (boucles de broadcast) dans un réseau maillé ?",
        reponsesPossibles: ['Spanning Tree Protocol (STP / RSTP 802.1w)', 'DHCP', 'DNS', 'BGP'],
        reponsesCorrectes: [0],
        explication: "Le protocole Spanning Tree bloque logiquement les liaisons redondantes pour former un arbre sans boucle.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'it_ch5',
      titre: '5. Routage IP & Protocoles de Routage Dynamique (OSPF & BGP)',
      dureeEstimeeMin: 45,
      description: 'Table de routage, passerelle par défaut, routage inter-VLAN (Router-on-a-Stick), protocole à état de lien OSPF (Dijkstra) et routage Internet BGP.',
      pointsCles: [
        'Table de routage : contient la liste des préfixes de destination, du masque, de la distance administrative et de l\'interface/adresse de saut suivant (Next-Hop)',
        'Règle du plus long préfixe (Longest Prefix Match) : le routeur choisit toujours la route ayant le masque le plus précis (ex: /28 prime sur /24)',
        'OSPF (Open Shortest Path First) : protocole IGP à état de liens (LSA), basé sur l\'algorithme de Dijkstra (SPF), hiérarchisé autour de la zone centrale `Area 0` (Backbone)',
        'BGP (Border Gateway Protocol) : protocole EGP à vecteur de chemins qui régit l\'interconnexion globale de tous les Systèmes Autonomes (AS) sur Internet'
      ],
      formuleCle: '\\text{Coût OSPF} = \\frac{\\text{Bande Passante de Référence (100 Mbps)}}{\\text{Bande Passante de l\'Interface}} \\quad | \\quad \\text{Distance Admin OSPF} = 110',
      astuceTerrain: 'Sur les liaisons modernes en Fibre 1 Gbps ou 10 Gbps, modifiez la bande passante de référence par défaut d\'OSPF (`auto-cost reference-bandwidth 10000`) sinon 1 Gbps et 10 Gbps auront le même coût unitaire calculé de 1.',
      conseilProfesseur: 'La distance administrative (AD) définit la confiance envers la source d\'une route : Connecté direct (0) > Route Statique (1) > EIGRP (90) > OSPF (110) > RIP (120). Plus elle est basse, plus elle est prioritaire.',
      contenuHtml: `
        <h3>1. Les Types de Paquets OSPF et la Formation du Voisinage</h3>
        <ul class="space-y-1 my-3 text-xs">
          <li><strong>1. Hello Packet :</strong> Découverte des voisins et maintien du lien (Heartbeat toutes les 10s).</li>
          <li><strong>2. DBD (Database Description) :</strong> Résumé de la base de données d'état de lien du routeur.</li>
          <li><strong>3. LSR (Link-State Request) :</strong> Demande d'informations détaillées sur un lien spécifique.</li>
          <li><strong>4. LSU (Link-State Update) :</strong> Envoi des LSA contenant la topologie exacte.</li>
          <li><strong>5. LSAck (Link-State Acknowledgment) :</strong> Confirmation de bonne réception du paquet.</li>
        </ul>
      `,
      exercices: [{
        id: 'it_ch5_ex1',
        type: TypeQuestion.QCM,
        question: "Quelle zone (Area) est impérativement requise et sert de colonne vertébrale dans une architecture de routage OSPF multi-zones ?",
        reponsesPossibles: ['Area 0 (Backbone Area)', 'Area 100', 'Area 1', 'Area DMZ'],
        reponsesCorrectes: [0],
        explication: "Dans OSPF, toutes les zones périphériques doivent être directement rattachées à la zone centrale Area 0.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'it_ch6',
      titre: '6. Couche Transport : TCP (Fiable) vs UDP (Temps Réel)',
      dureeEstimeeMin: 40,
      description: 'Three-way handshake (SYN, SYN-ACK, ACK), contrôle de flux, fenêtrage glissant, réémissions et datagrammes légers sans état UDP.',
      pointsCles: [
        'TCP (Transmission Control Protocol) : Orienté connexion, fiable, séquencement ordonné, contrôle de congestion et d\'intégrité par acquittements (ACK)',
        'Three-Way Handshake TCP : Établissement de session en 3 étapes : Client $\\rightarrow$ SYN $\\rightarrow$ Serveur $\\rightarrow$ SYN-ACK $\\rightarrow$ Client $\\rightarrow$ ACK',
        'UDP (User Datagram Protocol) : Sans connexion (connectionless), ultra-léger (en-tête de 8 octets seulement), aucune garantie de livraison ni de réordonnancement',
        'Numéros de ports (0 à 65535) : Well-known (0-1023: 80 HTTP, 443 HTTPS, 22 SSH), Registered (1024-49151), Éphémères dynamiques (49152-65535)'
      ],
      formuleCle: '\\text{En-tête TCP (20 octets min)} \\quad \\text{vs} \\quad \\text{En-tête UDP (8 octets fixes)}',
      astuceTerrain: 'En cas de lenteurs réseau inexpliquées sur des téléchargements volumineux, inspectez la fenêtre TCP (Window Size) et la taille maximale de segment (TCP MSS). Si un routeur bloque les paquets ICMP "Fragmentation Needed", le transfert se bloque par trou noir MTU.',
      conseilProfesseur: 'Règle d\'or de l\'architecture : choisissez TCP dès que la perte d\'un seul octet est inacceptable (fichiers, bases de données, requêtes web), et choisissez UDP pour les flux où la fraîcheur temps réel prime sur la réémission (VoIP, streaming direct, DNS).',
      contenuHtml: `
        <h3>1. Comparatif Exhaustif entre TCP et UDP</h3>
        <table class="w-full text-xs border border-slate-300 my-4 text-left">
          <thead class="bg-slate-100 font-bold">
            <tr>
              <th class="p-2 border">Critère</th>
              <th class="p-2 border">TCP (Transmission Control)</th>
              <th class="p-2 border">UDP (User Datagram)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="p-2 border font-bold">Type de Connexion</td><td class="p-2 border text-blue-900 font-bold">Orienté connexion (Handshake 3 voies)</td><td class="p-2 border text-purple-900 font-bold">Sans état (Non connecté)</td></tr>
            <tr><td class="p-2 border font-bold">Fiabilité & Livraison</td><td class="p-2 border text-emerald-800 font-bold">Garantie (réémissions automatiques des pertes)</td><td class="p-2 border text-red-800">Best Effort (aucune réémission)</td></tr>
            <tr><td class="p-2 border font-bold">Ordre des données</td><td class="p-2 border">Strictement ordonné par numéros de séquence</td><td class="p-2 border">Délivré dans l'ordre d'arrivée brut</td></tr>
            <tr><td class="p-2 border font-bold">Taille de l'en-tête</td><td class="p-2 border">20 à 60 octets</td><td class="p-2 border font-bold text-emerald-800">8 octets seulement</td></tr>
            <tr><td class="p-2 border font-bold">Cas d'usage réels</td><td class="p-2 border">Web (HTTPS), Transfert de fichier (SFTP), E-mail</td><td class="p-2 border">VoIP (SIP/RTP), Streaming direct, DNS, Jeux vidéo</td></tr>
          </tbody>
        </table>
      `,
      exercices: [{
        id: 'it_ch6_ex1',
        type: TypeQuestion.QCM,
        question: "Pourquoi les communications vocales sur IP (VoIP) et les jeux en réseau utilisent-ils principalement UDP plutôt que TCP ?",
        reponsesPossibles: ['Car UDP évite la latence liée aux acquittements et aux réémissions de paquets périmés', 'Car UDP crypte les données automatiquement', 'Car UDP ne consomme pas d\'électricité', 'Car TCP est limité à 10 utilisateurs'],
        reponsesCorrectes: [0],
        explication: "En temps réel, un paquet audio perdu ne sert à rien s'il arrive en retard ; la faible latence prime sur la retransmission.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'it_ch7',
      titre: '7. Services Réseau Essentiels : DNS & DHCP',
      dureeEstimeeMin: 45,
      description: 'Processus DORA (Discover, Offer, Request, Acknowledge) du DHCP, hiérarchie DNS (racine, TLD, serveurs faisant autorité), enregistrements A, AAAA, CNAME, MX, PTR.',
      pointsCles: [
        'DHCP (Dynamic Host Configuration Protocol) : Processus DORA en 4 étapes (Discover en broadcast, Offer, Request, Acknowledge) sur les ports UDP 67 (serveur) et 68 (client)',
        'Bail DHCP (Lease Time) : durée de validité de l\'adresse IP allouée, avec renouvellement automatique à $50\\%$ du temps écoulé ($T_1$)',
        'Agent de Relais DHCP (`ip helper-address`) : transfère les requêtes DHCP broadcast d\'un sous-réseau distant en unicast vers le serveur central',
        'DNS (Domain Name System - Port 53 UDP/TCP) : Résolution hiérarchique de noms (FQDN) en adresses IP via serveurs racines (`.`), TLD (`.com`, `.fr`), et serveurs d\'autorité'
      ],
      formuleCle: '\\text{DHCP Cycle DORA} : \\text{Discover (Client)} \\rightarrow \\text{Offer (Serv)} \\rightarrow \\text{Request (Client)} \\rightarrow \\text{ACK (Serv)}',
      astuceTerrain: 'Pour diagnostiquer un problème de résolution DNS en direct sous Windows/Linux, utilisez l\'outil `nslookup domain.com` ou `dig @8.8.8.8 domain.com +trace` pour observer la résolution étape par étape.',
      conseilProfesseur: 'Configurez TOUJOURS au minimum deux serveurs DNS distincts (DNS primaire et DNS secondaire) dans vos étendues DHCP : si le DNS tombe, le réseau semblera totalement hors service pour les utilisateurs.',
      contenuHtml: `
        <h3>1. Les Principaux Enregistrements de Zones DNS</h3>
        <table class="w-full text-xs border border-slate-300 my-4 text-left">
          <thead class="bg-slate-100 font-bold">
            <tr>
              <th class="p-2 border">Type</th>
              <th class="p-2 border">Signification</th>
              <th class="p-2 border">Rôle & Donnée Pointée</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="p-2 border font-bold font-mono">A</td><td class="p-2 border">Address IPv4</td><td class="p-2 border">Pointe un nom vers une adresse IPv4 standard 32 bits (ex: 192.0.2.1)</td></tr>
            <tr><td class="p-2 border font-bold font-mono">AAAA</td><td class="p-2 border">Address IPv6</td><td class="p-2 border">Pointe un nom vers une adresse IPv6 128 bits (ex: 2001:db8::1)</td></tr>
            <tr><td class="p-2 border font-bold font-mono">CNAME</td><td class="p-2 border">Canonical Name</td><td class="p-2 border">Crée un alias redirigeant vers un autre nom d'hôte existant</td></tr>
            <tr><td class="p-2 border font-bold font-mono">MX</td><td class="p-2 border">Mail Exchange</td><td class="p-2 border">Définit les serveurs de messagerie prioritaires pour le domaine</td></tr>
            <tr><td class="p-2 border font-bold font-mono">PTR</td><td class="p-2 border">Pointer (Reverse DNS)</td><td class="p-2 border">Résolution inverse : trouve le nom de domaine à partir d'une IP</td></tr>
          </tbody>
        </table>
      `,
      exercices: [{
        id: 'it_ch7_ex1',
        type: TypeQuestion.QCM,
        question: "Quel enregistrement DNS associe un nom de domaine à une adresse IPv4 standard de 32 bits ?",
        reponsesPossibles: ['Enregistrement A', 'Enregistrement AAAA', 'Enregistrement MX', 'Enregistrement TXT'],
        reponsesCorrectes: [0],
        explication: "L'enregistrement 'A' (Address) fait correspondre un FQDN à une adresse IPv4 (alors que AAAA est pour IPv6).",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'it_ch8',
      titre: '8. Traduction d’Adresses Réseau : NAT & PAT (Port Address Translation)',
      dureeEstimeeMin: 40,
      description: 'NAT statique (1:1), NAT dynamique (Pool) et PAT (NAPT / Overload), table des connexions NAT et redirection de port (Port Forwarding).',
      pointsCles: [
        'NAT (Network Address Translation) : mécanisme qui traduit les adresses IP privées internes non routables en adresses IP publiques valides sur Internet',
        'PAT / NAT Overload (Port Address Translation) : associe des milliers d\'adresses IP privées à une unique IP publique en utilisant les numéros de ports sources éphémères (> 1024)',
        'NAT Statique (1:1) : fait correspondre en permanence une IP privée spécifique à une IP publique dédiée (utilisé pour héberger un serveur web public)',
        'Port Forwarding (Redirection de port) : redirige un port entrant sur l\'IP publique (ex: Port 443) vers une machine privée du LAN'
      ],
      formuleCle: '\\text{Table PAT} : \\text{192.168.1.15:49152 (Privée)} \\iff \\text{82.120.10.5:51234 (Publique)} \\iff \\text{Serveur Web Distant}',
      astuceTerrain: 'Certains protocoles applicatifs (comme SIP pour la téléphonie ou FTP en mode actif) transportent l\'adresse IP dans le contenu de leurs paquets. Activez un module ALG (Application Layer Gateway) sur le routeur pour corriger ces trames.',
      conseilProfesseur: 'Le PAT a permis de prolonger la vie de l\'IPv4 pendant plus de 20 ans malgré l\'épuisement des adresses IP mondiales.',
      contenuHtml: `
        <h3>1. Les 3 Variantes de Traduction d'Adresses Réseau (NAT)</h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4 text-xs">
          <div class="bg-slate-50 border p-3 rounded-xl">
            <span class="font-bold text-slate-900 block mb-1">1. NAT Statique</span>
            Association fixe 1 pour 1. Consomme 1 adresse IP publique pour chaque serveur interne exposé.
          </div>
          <div class="bg-slate-50 border p-3 rounded-xl">
            <span class="font-bold text-slate-900 block mb-1">2. NAT Dynamique</span>
            Allocation à la volée depuis un pool d'adresses publiques. Les connexions simultanées sont limitées au nombre d'IPs du pool.
          </div>
          <div class="bg-slate-50 border p-3 rounded-xl">
            <span class="font-bold text-slate-900 block mb-1">3. PAT (NAT Overload)</span>
            Multi-hôtes vers 1 IP publique. Plus de 64 000 connexions concurrentes grâce au multiplexage par numéros de ports.
          </div>
        </div>
      `,
      exercices: [{
        id: 'it_ch8_ex1',
        type: TypeQuestion.QCM,
        question: "Quelle variante du NAT associe plusieurs adresses IP privées à une unique adresse IP publique en différenciant les flux par les numéros de ports TCP/UDP ?",
        reponsesPossibles: ['PAT (Port Address Translation) ou NAT Overload', 'NAT 1 to 1 statique', 'DNS Dynamic', 'Proxy transparent'],
        reponsesCorrectes: [0],
        explication: "Le PAT (ou NAT Overload) utilise les ports sources uniques pour acheminer les paquets retour vers les bonnes machines clientes.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'it_ch9',
      titre: '9. Protocole IPv6 : Structure 128 bits & SLAAC',
      dureeEstimeeMin: 45,
      description: 'Notation hexadécimale, règles de compression des zéros (::), adresses Link-Local (fe80::/10), Global Unicast (2000::/3), Neighbor Discovery Protocol (NDP) remplaçant ARP.',
      pointsCles: [
        'Espace d\'adressage gigantesque : 128 bits soit $2^{128} \\approx 3.4 \\times 10^{38}$ adresses uniques',
        'Règles de compression : omettre les zéros initiaux dans chaque bloc, et remplacer une suite continue de blocs nuls par `::` (une seule fois par adresse)',
        'Suppression du Broadcast en IPv6 : remplacé entièrement par du Multicast ciblé et de l\'Anycast',
        'NDP (Neighbor Discovery Protocol) : remplace ARP via des messages ICMPv6 de sollicitation et annonce de voisins (Neighbor Solicitation/Advertisement)'
      ],
      formuleCle: '\\text{Structure IPv6} = \\underbrace{\\text{Préfixe de Routage Global (48 bits)}}_{\\text{FAI}} + \\underbrace{\\text{Subnet ID (16 bits)}}_{\\text{Entreprise}} + \\underbrace{\\text{Interface ID (64 bits)}}_{\\text{Hôte (SLAAC / EUI-64)}}',
      astuceTerrain: 'Chaque carte réseau active possède automatiquement une adresse IPv6 locale de lien (Link-Local) commençant toujours par `fe80::/10`, utilisable immédiatement pour communiquer sur le réseau local sans routeur.',
      conseilProfesseur: 'La fonction SLAAC (Stateless Address Autoconfiguration) permet à un poste IPv6 de générer son adresse et sa passerelle automatiquement en recevant simplement un message RA (Router Advertisement) sans serveur DHCP.',
      contenuHtml: `
        <h3>1. Les Principaux Types d'Adresses IPv6</h3>
        <table class="w-full text-xs border border-slate-300 my-4 text-left">
          <thead class="bg-slate-100 font-bold">
            <tr>
              <th class="p-2 border">Type d'Adresse</th>
              <th class="p-2 border">Préfixe Binaire / Hexa</th>
              <th class="p-2 border">Équivalent IPv4</th>
              <th class="p-2 border">Portée & Utilisation</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="p-2 border font-bold">Global Unicast</td><td class="p-2 border font-mono">2000::/3</td><td class="p-2 border">IP Publique Internet</td><td class="p-2 border">Routable mondialement sur le Web</td></tr>
            <tr><td class="p-2 border font-bold">Link-Local (Liaison locale)</td><td class="p-2 border font-mono">fe80::/10</td><td class="p-2 border">169.254.0.0/16 (APIPA)</td><td class="p-2 border">Non routable, communication sur le même segment physique</td></tr>
            <tr><td class="p-2 border font-bold">Unique Local (ULA)</td><td class="p-2 border font-mono">fc00::/7 (fd00::/8)</td><td class="p-2 border">10.0.0.0/8 (IP Privée RFC1918)</td><td class="p-2 border">Routable uniquement au sein de l'intranet d'entreprise</td></tr>
            <tr><td class="p-2 border font-bold">Loopback</td><td class="p-2 border font-mono">::1/128</td><td class="p-2 border">127.0.0.1</td><td class="p-2 border">Boucle locale de test de la pile IP</td></tr>
          </tbody>
        </table>
      `,
      exercices: [{
        id: 'it_ch9_ex1',
        type: TypeQuestion.QCM,
        question: "En IPv6, quel protocole remplace avantageusement le mécanisme de diffusion ARP pour découvrir l'adresse MAC d'un voisin ?",
        reponsesPossibles: ['NDP (Neighbor Discovery Protocol) avec messages ICMPv6', 'RARP', 'DHCPv4', 'NetBIOS'],
        reponsesCorrectes: [0],
        explication: "IPv6 utilise NDP basé sur des messages de sollicitation de voisin (Neighbor Solicitation) en multicast ciblé.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'it_ch10',
      titre: '10. Réseaux Sans-Fil Wi-Fi (802.11ax / Wi-Fi 6) & Sécurité WPA3',
      dureeEstimeeMin: 45,
      description: 'Bandes de fréquences 2.4 GHz, 5 GHz et 6 GHz, canaux sans chevauchement (1, 6, 11 en 2.4 GHz), OFDMA, MU-MIMO, sécurité WPA2/WPA3-Enterprise avec 802.1X / RADIUS.',
      pointsCles: [
        'Bandes spectrales : 2.4 GHz (meilleure portée/pénétration des murs mais bande saturée), 5 GHz (haut débit, 24 canaux non chevauchants), 6 GHz Wi-Fi 6E (ultra-rapide sans interférences)',
        'Canaux non chevauchants en 2.4 GHz : 1, 6 et 11 (largeur standard 20 MHz)',
        'Technologies Wi-Fi 6 (802.11ax) : OFDMA (découpe les canaux en sous-porteuses pour servir plusieurs clients simultanément), MU-MIMO bidirectionnel, TWT (économie de batterie IoT)',
        'Sécurité WPA3 : protocole SAE (Simultaneous Authentication of Equals) protégeant contre les attaques de dictionnaire hors-ligne'
      ],
      formuleCle: '\\text{Wi-Fi 6 (802.11ax)} : \\text{Débit max théorique jusqu\'à 9.6 Gbps avec modulation 1024-QAM}',
      astuceTerrain: 'Lors d\'une étude de couverture Wi-Fi (Site Survey), ne réglez jamais la puissance des bornes (AP) au maximum : cela crée un effet "haut-parleur" où le client entend la borne mais n\'a pas la puissance pour lui répondre. Diminuez la puissance et densifiez le nombre de bornes.',
      conseilProfesseur: 'En environnement d\'entreprise, bannissez les clés partagées (WPA-Personal) : déployez le WPA2/WPA3-Enterprise avec authentification individuelle 802.1X reliée à un annuaire LDAP/Active Directory et serveur RADIUS.',
      contenuHtml: `
        <h3>1. Les Évolutions des Normes Wi-Fi IEEE 802.11</h3>
        <table class="w-full text-xs border border-slate-300 my-4 text-left">
          <thead class="bg-slate-100 font-bold">
            <tr>
              <th class="p-2 border">Appellation</th>
              <th class="p-2 border">Norme IEEE</th>
              <th class="p-2 border">Fréquences</th>
              <th class="p-2 border">Modulation Max</th>
              <th class="p-2 border">Innovations Clés</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="p-2 border font-bold">Wi-Fi 4</td><td class="p-2 border">802.11n</td><td class="p-2 border">2.4 / 5 GHz</td><td class="p-2 border">64-QAM</td><td class="p-2 border">MIMO, agrégation de canaux 40 MHz</td></tr>
            <tr><td class="p-2 border font-bold">Wi-Fi 5</td><td class="p-2 border">802.11ac</td><td class="p-2 border">5 GHz</td><td class="p-2 border">256-QAM</td><td class="p-2 border">MU-MIMO Downlink, canaux 80/160 MHz</td></tr>
            <tr><td class="p-2 border font-bold text-emerald-800">Wi-Fi 6 / 6E</td><td class="p-2 border font-bold text-emerald-800">802.11ax</td><td class="p-2 border font-bold text-emerald-800">2.4 / 5 / 6 GHz</td><td class="p-2 border font-bold text-emerald-800">1024-QAM</td><td class="p-2 border">OFDMA, MU-MIMO Bi-directionnel, BSS Coloring, WPA3</td></tr>
          </tbody>
        </table>
      `,
      exercices: [{
        id: 'it_ch10_ex1',
        type: TypeQuestion.QCM,
        question: "Dans la bande de fréquences Wi-Fi 2.4 GHz européenne, quels sont les trois canaux de 20 MHz qui ne se chevauchent pas ?",
        reponsesPossibles: ['Canaux 1, 6 et 11', 'Canaux 1, 2 et 3', 'Canaux 10, 20 et 30', 'Canaux 100, 104 et 108'],
        reponsesCorrectes: [0],
        explication: "Les canaux 1, 6 et 11 sont espacés de 25 MHz et n'ont aucune interférence mutuelle en largeur 20 MHz.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'it_ch11',
      titre: '11. Sécurité Périmétrique : Pare-feu (Stateful Firewall) & DMZ',
      dureeEstimeeMin: 45,
      description: 'Filtrage avec maintien d’état (Stateful Inspection), règles de flux Ingress/Egress, zone démilitarisée (DMZ), inspection applicative (Next-Gen Firewall / WAF).',
      pointsCles: [
        'Stateful Inspection (Inspection avec état) : le pare-feu mémorise les connexions sortantes initiées dans une table d\'états et autorise automatiquement les réponses entrantes légitimes sans règle explicite',
        'Règle d\'or implicite de sécurité : `Deny All` (Tout ce qui n\'est pas explicitement autorisé est strictement interdit par défaut)',
        'DMZ (Zone Démilitarisée) : sous-réseau intermédiaire isolé hébergeant les serveurs publics (Web, Mail, DNS) ; un pirate compromettant la DMZ ne peut pas entrer dans le LAN interne',
        'NGFW (Next-Generation Firewall) : intègre le filtrage applicatif (L7), l\'antivirus de flux, le système de prévention d\'intrusion (IPS) et le déchiffrement SSL/TLS'
      ],
      formuleCle: '\\text{Règle de Flux} = [\\text{Action (Accept/Drop)} \\mid \\text{Src IP/Port} \\mid \\text{Dest IP/Port} \\mid \\text{Protocole (TCP/UDP)} \\mid \\text{State (ESTABLISHED)}]',
      astuceTerrain: 'Lors de l\'écriture des règles de pare-feu, ordonnez-les toujours du plus spécifique au plus général : le moteur de filtrage évalue les règles de haut en bas et s\'arrête dès la première correspondance satisfaite (First Match).',
      conseilProfesseur: 'Ne placez jamais une base de données directement dans la DMZ. La DMZ doit contenir uniquement le serveur frontal Web, qui interroge la base de données située dans un sous-réseau interne ultra-sécurisé via un port unique filtré (ex: 3306 MySQL ou 5432 PostgreSQL).',
      contenuHtml: `
        <h3>1. Topologie Réseau Standard avec Pare-Feu et Zone DMZ</h3>
        <div class="bg-slate-50 border p-4 rounded-xl my-3 text-xs space-y-2">
          <div>🌐 <strong>Internet (Zone Non Sécurisée) :</strong> Flux entrants autorisés UNIQUEMENT vers les IPs publiques de la DMZ sur ports 80/443.</div>
          <div>🛡️ <strong>DMZ (Zone Tampon) :</strong> Serveurs Web / Reverse Proxy / Relais Mail. Interdiction formelle d'initier des connexions vers le LAN interne.</div>
          <div>🏢 <strong>LAN Entreprise (Zone de Confiance) :</strong> Postes de travail, serveurs de fichiers, contrôleurs de domaine Active Directory.</div>
        </div>
      `,
      exercices: [{
        id: 'it_ch11_ex1',
        type: TypeQuestion.QCM,
        question: "Quel est le rôle fondamental d'une zone réseau 'DMZ' (Zone Démilitarisée) ?",
        reponsesPossibles: ['Héberger des serveurs accessibles depuis Internet sans compromettre le réseau interne en cas d\'intrusion', 'Accélérer la vitesse de téléchargement', 'Supprimer les virus automatiquement', 'Empêcher la poussière d\'entrer'],
        reponsesCorrectes: [0],
        explication: "Si un serveur en DMZ est piraté, le pare-feu empêche l'attaquant d'accéder aux données du LAN d'entreprise.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'it_ch12',
      titre: '12. Réseaux Privés Virtuels (VPN IPsec & OpenVPN / WireGuard)',
      dureeEstimeeMin: 45,
      description: 'Tunnels chiffrés Site-à-Site et Accès Distant (Remote Access), suite IPsec (IKEv2, ESP, AH), chiffrement AES-256, intégrité SHA-256, protocoles WireGuard et SSL/TLS (OpenVPN).',
      pointsCles: [
        'Principes cryptographiques du VPN : Confidentialité (chiffrement AES-GCM), Intégrité (hachage HMAC-SHA256), Authentification (certificats X.509 ou PSK) et Anti-rejeu',
        'IPsec Phase 1 (IKEv1 / IKEv2) : négociation d\'un canal sécurisé initial d\'administration (IKE SA) via l\'échange de clés Diffie-Hellman',
        'IPsec Phase 2 : établissement du tunnel de transport des données chiffrées (IPsec SA / ESP)',
        'Mode Tunnel (encapsule le paquet IP d\'origine entier avec un nouvel en-tête IP) vs Mode Transport (chiffre uniquement la charge utile L4-L7)'
      ],
      formuleCle: '\\text{Paquet IPsec ESP Mode Tunnel} = [\\text{Nouveau Header IP} \\mid \\text{Header ESP} \\mid \\underbrace{\\text{Header IP d\'origine} \\mid \\text{Data}}_{\\text{Chiffré AES-256}} \\mid \\text{Trailer ESP} \\mid \\text{Auth HMAC}]',
      astuceTerrain: 'En VPN IPsec Site-à-Site, vérifiez impérativement que les paramètres de phase 1 et phase 2 (chiffrement AES, hachage SHA, groupe Diffie-Hellman DH, durée de vie Lifetime) sont STRICTEMENT IDENTIQUES sur les deux pare-feux distants.',
      conseilProfesseur: 'Pour les postes clients nomades en télétravail, privilégiez WireGuard ou OpenVPN SSL (Port 443 TCP) : contrairement à IPsec qui est souvent bloqué par les box d\'hôtels ou réseaux 4G/5G, le flux TLS passe à travers tous les pare-feux sans obstacle.',
      contenuHtml: `
        <h3>1. Comparatif des Technologies de VPN Réseau</h3>
        <table class="w-full text-xs border border-slate-300 my-4 text-left">
          <thead class="bg-slate-100 font-bold">
            <tr>
              <th class="p-2 border">Technologie</th>
              <th class="p-2 border">Couche OSI</th>
              <th class="p-2 border">Performances / Débit</th>
              <th class="p-2 border">Cas d'usage Idéal</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="p-2 border font-bold">IPsec IKEv2</td><td class="p-2 border">Couche 3 (Réseau)</td><td class="p-2 border text-emerald-800 font-bold">Très élevées (accélération matérielle Crypto-ASIC)</td><td class="p-2 border">Interconnexion Site-à-Site entre succursales et datacenters</td></tr>
            <tr><td class="p-2 border font-bold">WireGuard</td><td class="p-2 border">Noyau Linux (L3)</td><td class="p-2 border text-emerald-800 font-bold">Exceptionnelles (code ultra-léger 4000 lignes)</td><td class="p-2 border">Nouveaux déploiements cloud et liaisons maillées modernes</td></tr>
            <tr><td class="p-2 border font-bold">OpenVPN (SSL/TLS)</td><td class="p-2 border">Couche 4/7 (User-space)</td><td class="p-2 border">Moyennes à bonnes</td><td class="p-2 border">Télétravailleurs nomades traversant des réseaux restreints</td></tr>
          </tbody>
        </table>
      `,
      exercices: [{
        id: 'it_ch12_ex1',
        type: TypeQuestion.QCM,
        question: "Dans le protocole IPsec, quel sous-protocole fournit à la fois la confidentialité (chiffrement des données) et l'intégrité du paquet ?",
        reponsesPossibles: ['ESP (Encapsulating Security Payload)', 'AH (Authentication Header)', 'ICMP', 'IGMP'],
        reponsesCorrectes: [0],
        explication: "ESP assure le chiffrement complet du paquet et garantit l'intégrité et l'authenticité de la source.",
        points: 5,
        difficulte: NiveauDifficulte.AVANCE
      }]
    },
    {
      id: 'it_ch13',
      titre: '13. Supervision Réseau & Télémétrie (SNMPv3, Syslog & NetFlow)',
      dureeEstimeeMin: 40,
      description: 'Protocole SNMP (MIB, OID, Trap), sécurisation SNMPv3 (AuthPriv), centralisation des journaux Syslog (RFC 5424) et analyse des flux NetFlow / sFlow.',
      pointsCles: [
        'SNMP (Simple Network Management Protocol - Port 161/162 UDP) : interroge les équipements réseau via des identifiants d\'objets hiérarchiques OID (ex: CPU, bande passante des interfaces)',
        'SNMPv3 : seule version sécurisée intégrant l\'authentification cryptographique (SHA) et le chiffrement des données (AES) via le niveau `authPriv`',
        'Syslog (Port 514 UDP/TCP - RFC 5424) : centralise les journaux d\'événements avec 8 niveaux de sévérité normalisés (0 Emergency à 7 Debug)',
        'NetFlow / IPFIX : fournit une cartographie détaillée du trafic (qui parle à qui, quel protocole, volume d\'octets échangés) pour la métrologie et la détection d\'anomalies'
      ],
      formuleCle: '\\text{Niveaux Syslog} : 0\\text{ (Emergency)} \\rightarrow 1\\text{ (Alert)} \\rightarrow 2\\text{ (Crit)} \\rightarrow 3\\text{ (Error)} \\rightarrow 4\\text{ (Warn)} \\rightarrow 5\\text{ (Notice)} \\rightarrow 6\\text{ (Info)} \\rightarrow 7\\text{ (Debug)}',
      astuceTerrain: 'Désactivez impérativement SNMPv1 et SNMPv2c sur tous les routeurs et switchs de production : les chaînes de communauté ("public" / "private") transitent en clair sans aucun chiffrement et permettent à un attaquant de lire toute la configuration.',
      conseilProfesseur: 'Configurez la synchronisation d\'horloge NTP (Network Time Protocol) sur l\'ensemble des équipements : sans horloge commune précise à la milliseconde, corréler les logs Syslog lors d\'un incident de sécurité est impossible.',
      contenuHtml: `
        <h3>1. Les 3 Piliers de l'Observabilité et Supervision Réseau (NOC)</h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4 text-xs">
          <div class="bg-slate-50 border p-3 rounded-xl">
            <span class="font-bold text-slate-900 block mb-1">1. Métriques (SNMP / Prometheus)</span>
            Mesure l'état de santé en temps réel (taux d'occupation CPU, mémoire RAM, température, débit par port).
          </div>
          <div class="bg-slate-50 border p-3 rounded-xl">
            <span class="font-bold text-slate-900 block mb-1">2. Logs & Événements (Syslog)</span>
            Historique textuel des changements d'états (porte de rack ouverte, lien UP/DOWN, échec d'authentification).
          </div>
          <div class="bg-slate-50 border p-3 rounded-xl">
            <span class="font-bold text-slate-900 block mb-1">3. Télémétrie des Flux (NetFlow)</span>
            Analyse des conversations réseau (détection d'exfiltration de données, saturation de bande passante).
          </div>
        </div>
      `,
      exercices: [{
        id: 'it_ch13_ex1',
        type: TypeQuestion.QCM,
        question: "Quel niveau de sécurité du protocole SNMPv3 garantit à la fois l'authentification de l'administrateur et le chiffrement complet des trames ?",
        reponsesPossibles: ['authPriv (Authentication and Privacy)', 'authNoPriv', 'noAuthNoPriv', 'SNMPv1 Community Public'],
        reponsesCorrectes: [0],
        explication: "Le mode authPriv active l'authentification forte (ex: HMAC-SHA) et le chiffrement cryptographique (ex: AES).",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'it_ch14',
      titre: '14. Analyse de Trames & Dépannage Réseau avec Wireshark',
      dureeEstimeeMin: 45,
      description: 'Capture de paquets (Port Mirroring / SPAN), filtres de capture vs filtres d’affichage, analyse des retransmissions TCP, détection de latence et analyse d’attaques.',
      pointsCles: [
        'Port Mirroring / SPAN (Switched Port Analyzer) : fonction switch dupliquant tout le trafic d\'un port surveillé vers le port d\'écoute de la sonde Wireshark',
        'Filtres d\'affichage Wireshark (syntaxe puissante) : `ip.addr == 192.168.1.10`, `tcp.port == 443`, `http.response.code == 500`, `dns`',
        'Diagnostic des anomalies TCP : recherche des segments `TCP Dup ACK`, `TCP Retransmission` (perte de paquets) et `TCP ZeroWindow` (serveur saturé)',
        'Graphiques de flux (Flow Graph) : visualisation chronologique visuelle des échanges d\'établissement et fermeture de sessions'
      ],
      formuleCle: '\\text{Filtre Wireshark Anomalies TCP} : \\text{tcp.analysis.flags} \\quad | \\quad \\text{Filtre Latence Élevée} : \\text{tcp.time_delta > 0.5}',
      astuceTerrain: 'Pour identifier immédiatement la cause d\'une lenteur d\'application Web : mesurez le délai entre la requête GET/POST du client et la première réponse HTTP du serveur (Time To First Byte - TTFB) dans la colonne "Delta time" de Wireshark.',
      conseilProfesseur: 'Ne confondez pas le filtre de capture Berkeley Packet Filter (BPF, ex: `host 10.0.0.1 and port 80` qui filtre à l\'enregistrement disque) et le filtre d\'affichage Wireshark (qui filtre visuellement les paquets déjà capturés).',
      contenuHtml: `
        <h3>1. Guide Pratique des Principaux Filtres d'Affichage Wireshark</h3>
        <table class="w-full text-xs border border-slate-300 my-4 text-left">
          <thead class="bg-slate-100 font-bold">
            <tr>
              <th class="p-2 border">Objectif de Diagnostic</th>
              <th class="p-2 border">Syntaxe du Filtre d'Affichage</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="p-2 border font-bold">Isoler tout le trafic d'un hôte spécifique</td><td class="p-2 border font-mono">ip.addr == 192.168.10.50</td></tr>
            <tr><td class="p-2 border font-bold">Filtrer les connexions HTTPS chiffrées</td><td class="p-2 border font-mono">tcp.port == 443 or tls</td></tr>
            <tr><td class="p-2 border font-bold">Détecter les erreurs de requêtes DNS</td><td class="p-2 border font-mono">dns.flags.rcode != 0</td></tr>
            <tr><td class="p-2 border font-bold">Identifier les pertes et retransmissions de paquets</td><td class="p-2 border font-mono text-red-700 font-bold">tcp.analysis.retransmission</td></tr>
            <tr><td class="p-2 border font-bold">Voir uniquement les requêtes de ping ICMP</td><td class="p-2 border font-mono">icmp.type == 8 or icmp.type == 0</td></tr>
          </tbody>
        </table>
      `,
      exercices: [{
        id: 'it_ch14_ex1',
        type: TypeQuestion.QCM,
        question: "Dans Wireshark, quel filtre d'affichage permet d'isoler uniquement le trafic à destination ou en provenance du serveur 192.168.1.50 sur le port 443 ?",
        reponsesPossibles: ['ip.addr == 192.168.1.50 and tcp.port == 443', 'ip = 192.168.1.50 / 443', 'port 443 && host 192.168.1.50', 'filter: 192.168.1.50:443'],
        reponsesCorrectes: [0],
        explication: "La syntaxe officielle de filtrage d'affichage Wireshark est `ip.addr == 192.168.1.50 and tcp.port == 443`.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'it_ch15',
      titre: '15. Architecture Haute Disponibilité, Redondance & HSRP / VRRP',
      dureeEstimeeMin: 50,
      description: 'Protocoles de passerelle virtuelle par défaut HSRP (Cisco) et VRRP (Standard IETF), basculement transparent (Failover), agrégation de liens LACP (802.3ad) et équilibrage de charge (Load Balancing).',
      pointsCles: [
        'FHRP (First Hop Redundancy Protocol) : élimine le point unique de défaillance (SPOF) de la passerelle par défaut en créant une adresse IP virtuelle (VIP) partagée entre plusieurs routeurs',
        'VRRP (Virtual Router Redundancy Protocol - RFC 5798) : standard ouvert ; le Master répond aux requêtes avec la MAC virtuelle `00:00:5E:00:01:XX` (où XX est le VRID)',
        'LACP (Link Aggregation Control Protocol - IEEE 802.3ad) : regroupe plusieurs câbles physiques en un seul lien logique (EtherChannel) multipliant la bande passante et assurant la redondance',
        'Stacking de commutateurs : virtualise plusieurs châssis physiques en une seule entité d\'administration logique'
      ],
      formuleCle: '\\text{VRRP Adresse MAC Virtuelle} = 00:00:5E:00:01:[\\text{VRID en Hexadécimal}] \\quad | \\quad \\text{Priorité par défaut} = 100',
      astuceTerrain: 'Activez systématiquement la préemption (`preempt`) sur le routeur configuré avec la priorité la plus élevée (ex: Priorité 110 vs 100) pour qu\'il reprenne automatiquement son rôle de Master dès qu\'il redémarre après une maintenance.',
      conseilProfesseur: 'La haute disponibilité repose sur le principe du "N+1" ou "2N" : double alimentation électrique sur sources A/B séparées, double carte réseau (NIC Teaming), double lien d\'agrégation LACP vers deux switchs distincts (MLAG / vPC).',
      contenuHtml: `
        <h3>1. Fonctionnement du Basculement VRRP / HSRP</h3>
        <ol class="space-y-1.5 my-3 text-xs">
          <li><strong>1. État Nominal :</strong> Le Routeur 1 (Priorité 110) est Master. Il traite tous les paquets destinés à la VIP <code>192.168.1.254</code> et émet un Heartbeat VRRP toutes les secondes.</li>
          <li><strong>2. Panne Détectée :</strong> Le Routeur 1 subit une panne matérielle. Le Routeur 2 (Backup, Priorité 100) ne reçoit plus de Heartbeat pendant 3 secondes (Master Down Timer).</li>
          <li><strong>3. Basculement Transparent :</strong> Le Routeur 2 devient instantanément Master, émet une trame Gratuitous ARP pour mettre à jour les tables CAM des switchs, et reprend le routage sans coupure de session pour les utilisateurs.</li>
        </ol>
      `,
      exercices: [{
        id: 'it_ch15_ex1',
        type: TypeQuestion.QCM,
        question: "Quel est l'objectif du protocole de redondance de passerelle VRRP (Virtual Router Redundancy Protocol) ?",
        reponsesPossibles: ['Fournir une adresse IP virtuelle unique de passerelle par défaut basculant automatiquement en cas de panne d\'un routeur physique', 'Diviser la vitesse de connexion par deux', 'Attribuer des noms de domaine', 'Chiffrer les disques durs'],
        reponsesCorrectes: [0],
        explication: "VRRP assure la continuité de routage des postes clients sans interruption en basculant la VIP vers le routeur de secours.",
        points: 5,
        difficulte: NiveauDifficulte.EXPERT
      }]
    }
  ]
};
