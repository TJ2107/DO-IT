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
      description: 'Couches Physique, Liaison, Réseau, Transport, Session, Présentation, Application et processus d’encapsulation.',
      pointsCles: ['PDU : Trame (L2), Paquet (L3), Segment (L4), Données (L7)', 'Encapsulation et décapsulation', 'Rôles des couches'],
      formuleCle: 'Paquet IP = En-tête IP + Segment TCP/UDP + Données',
      contenuHtml: `<p>Architecture standardisée des protocoles de communication en réseaux.</p>`,
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
      titre: '2. Adressage IPv4 & Masques de Sous-Réseau (CIDR)',
      dureeEstimeeMin: 45,
      description: 'Structure 32 bits, classes historiques (A, B, C), masques CIDR (/24, /28, etc.), adresses privées RFC 1918 (10.0.0.0, 172.16.0.0, 192.168.0.0).',
      pointsCles: ['2^n - 2 hôtes par sous-réseau', 'Adresses privées non routables sur Internet', 'Notation slash CIDR'],
      formuleCle: 'Nombre d\'hôtes = 2^(32 - prefixe) - 2',
      contenuHtml: `<p>Mécanismes d'adressage logique et calculs binaires fondamentaux.</p>`,
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
      description: 'Format MAC 48 bits (EUI-48 / OUI constructeur), table CAM (Content Addressable Memory), Broadcast storm et domaine de diffusion.',
      pointsCles: ['Apprentissage automatique d\'adresses MAC', 'Unicast, Multicast, Broadcast (FF:FF:FF:FF:FF:FF)', 'Domaine de collision vs domaine de diffusion'],
      formuleCle: 'Trame Ethernet II : MAC Dest (6o) + MAC Src (6o) + EtherType (2o) + Payload + FCS (4o)',
      contenuHtml: `<p>Fonctionnement interne des commutateurs de niveau 2 et commutation sans blocage.</p>`,
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
      pointsCles: ['VLAN = Isolation des domaines de diffusion', 'Lien Trunk : transporte plusieurs VLANs', 'RSTP : convergence en < 2 secondes'],
      formuleCle: 'Tag 802.1Q = 4 octets insérés dans la trame Ethernet',
      contenuHtml: `<p>Conception d'architectures réseau commutées sécurisées et résilientes.</p>`,
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
      pointsCles: ['OSPF : calcul du plus court chemin SPF', 'Distance administrative (Direct=0, Statique=1, OSPF=110)', 'Zone Backbone OSPF Area 0'],
      formuleCle: 'Coût OSPF = Bande passante de référence / Bande passante de l\'interface',
      contenuHtml: `<p>Interconnexion des sous-réseaux et diffusion des tables de routage.</p>`,
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
      pointsCles: ['TCP : Orienté connexion, acquittements, garanti sans perte', 'UDP : Sans connexion, ultra-rapide (VoIP, streaming, DNS, NTP)', 'Numéros de ports (0 à 65535)'],
      formuleCle: 'Connexion TCP : SYN -> SYN-ACK -> ACK',
      contenuHtml: `<p>Comparaison technique détaillée entre fiabilité TCP et vitesse UDP.</p>`,
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
      pointsCles: ['DHCP : Port 67 (serveur) et 68 (client) UDP', 'DNS : Port 53 UDP/TCP', 'Bail DHCP (Lease time) et relais DHCP (IP Helper-Address)'],
      formuleCle: 'DHCP DORA : Discover -> Offer -> Request -> Ack',
      contenuHtml: `<p>Configuration et dépannage des serveurs d'attribution d'adresses et de résolution de noms.</p>`,
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
      pointsCles: ['PAT / NAPT : permet à des milliers d\'hôtes privés de partager une seule IP publique', 'Suivi par port source dynamique (> 1024)', 'Inconvénients sur les protocoles avec IP imbriquée (SIP, FTP)'],
      formuleCle: 'PAT : IP_Privee:Port_Src <=> IP_Publique:Port_Mappe',
      contenuHtml: `<p>Fonctionnement du NAT sur les box Internet et routeurs d'entreprise.</p>`,
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
      pointsCles: ['Espace d\'adressage de 3.4 × 10³⁸ adresses', 'Pas de broadcast en IPv6 (Multicast uniquement)', 'SLAAC (Stateless Address Autoconfiguration)'],
      formuleCle: 'IPv6 = 8 groupes de 4 caractères hexadécimaux (128 bits)',
      contenuHtml: `<p>Transition vers la nouvelle génération de protocole Internet et configuration des hôtes.</p>`,
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
      pointsCles: ['Wi-Fi 6 (802.11ax) : efficacité en milieu dense', 'WPA3 : élimine les attaques par dictionnaire offline (SAE)', 'Roaming sans coupure 802.11k/v/r'],
      formuleCle: 'Bande 2.4 GHz : 3 canaux disjoints non brouillés (1, 6, 11)',
      contenuHtml: `<p>Déploiement et sécurisation des bornes d'accès Wi-Fi d'entreprise.</p>`,
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
      pointsCles: ['Règle implicite de fin : Deny All', 'DMZ : isole les serveurs publics du réseau interne confidentiel', 'Suivi de table d\'états des flux TCP/UDP'],
      formuleCle: 'Principe du moindre privilège : ouvrir uniquement les ports strictement nécessaires',
      contenuHtml: `<p>Architecture de défense en profondeur et cloisonnement des réseaux d'entreprise.</p>`,
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
      pointsCles: ['Confidentialité (chiffrement), Intégrité (HMAC), Authentification', 'ESP (Encapsulating Security Payload)', 'Mode Tunnel vs Mode Transport'],
      formuleCle: 'IPsec Phase 1 (IKE SA) -> Phase 2 (IPsec SA avec clé symétrique)',
      contenuHtml: `<p>Interconnexion sécurisée des agences distantes et télétravailleurs à travers l'Internet public.</p>`,
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
      pointsCles: ['SNMPv3 : authentification SHA + chiffrement AES', 'Syslog : Niveaux de sévérité 0 (Emergency) à 7 (Debug)', 'Cartographie des goulots d\'étranglement'],
      formuleCle: 'SNMP Trap : alerte proactive envoyée par l\'équipement vers le serveur NMS',
      contenuHtml: `<p>Mise en place d'un centre de supervision réseau (NOC) avec tableaux de bord en temps réel.</p>`,
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
      pointsCles: ['Filtres d\'affichage : `ip.addr == ...`, `tcp.port == ...`, `http`', 'Détection des TCP Dup ACK et ZeroWindow', 'Capture pcap pour audit'],
      formuleCle: 'Filter : tcp.analysis.flags (détecte les anomalies de transport)',
      contenuHtml: `<p>Techniques d'analyse forensique et diagnostic microscopique des communications réseau.</p>`,
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
      pointsCles: ['IP virtuelle (VIP) partagée entre routeur actif et routeur standby', 'Agrégation LACP (EtherChannel / Bonding)', 'Temps de reprise d\'activité (RTO / RPO)'],
      formuleCle: 'VRRP : Basculement automatique en cas de perte de heartbeat (< 3 sec)',
      contenuHtml: `<p>Conception d'infrastructures de centres de données à tolérance de panne totale (zéro point unique de défaillance SPOF).</p>`,
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
