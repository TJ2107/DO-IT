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
      pointsCles: ['Priorité absolue aux Équipements de Protection Collective (EPC) sur les EPI', 'Obligation de résultat en matière de sécurité', 'Droit d\'alerte et de retrait du salarié'],
      formuleCle: 'EPC > EPI (Protection Collective prime sur Protection Individuelle)',
      contenuHtml: `<p>Fondements juridiques et principes directeurs de la santé et sécurité au travail.</p>`,
      exercices: [{
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
      }]
    },
    {
      id: 'hse_ch2',
      titre: '2. Le Document Unique (DUERP) & Évaluation des Risques',
      dureeEstimeeMin: 45,
      description: 'Découpage en Unités de Travail (UT), matrice Fréquence / Gravité, plan d’action annuel de prévention et mise à jour obligatoire (loi Santé au travail).',
      pointsCles: ['Obligatoire dès le 1er salarié', 'Conservation et traçabilité des versions successives (40 ans)', 'Consultation obligatoire du CSE'],
      formuleCle: 'Niveau de risque R = Fréquence d\'exposition × Gravité potentielle',
      contenuHtml: `<p>Méthodologie concrète d'élaboration et de pilotage du DUERP en entreprise.</p>`,
      exercices: [{
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
      }]
    },
    {
      id: 'hse_ch3',
      titre: '3. Indicateurs Statistiques : Taux de Fréquence (TF) & Taux de Gravité (TG)',
      dureeEstimeeMin: 40,
      description: 'Calculs officiels CNAM/Assurance Maladie, taux de fréquence 1 (TF1), taux de gravité (TG), indice de fréquence (IF) et coût direct/indirect des accidents.',
      pointsCles: ['TF = (Accidents avec arrêt × 10⁶) / Heures travaillées', 'TG = (Journées perdues × 10³) / Heures travaillées', 'Coûts indirects (arbre de perte de productivité) = 3 à 5 fois le coût direct'],
      formuleCle: 'TF = (Nb_accidents × 1 000 000) / Heures_travaillees',
      contenuHtml: `<p>Suivi statistique et benchmarking sectoriel de la sinistralité au travail.</p>`,
      exercices: [{
        id: 'hse_ch3_ex1',
        type: TypeQuestion.CHIFFREE,
        question: "Pour 500 000 heures travaillées et 2 accidents avec arrêt, quelle est la valeur du Taux de Fréquence (TF) ?",
        reponsesPossibles: ['4.0', '2.0', '10.0', '0.4'],
        reponsesCorrectes: [0],
        explication: "TF = (2 × 1 000 000) / 500 000 = 2 000 000 / 500 000 = 4.0.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'hse_ch4',
      titre: '4. Analyse des Accidents du Travail par l’Arbre des Causes (INRS)',
      dureeEstimeeMin: 45,
      description: 'Méthode INRS, recueil des faits objectifs (faits observés, sans jugement de valeur), liaisons logiques (enchaînement, conjonction, disjonction), recherche des causes profondes d’organisation.',
      pointsCles: ['Se poser la question : "Qu\'a-t-il fallu pour que ce fait se produise ?"', 'Éviter la recherche d\'un coupable, chercher les défaillances du système', 'Actions correctives à la racine'],
      formuleCle: 'Arbre des causes : Faits objectifs prouvés -> Causes immédiates -> Causes organisationnelles',
      contenuHtml: `<p>Démarche scientifique post-accident pour éviter toute récidive.</p>`,
      exercices: [{
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
      }]
    },
    {
      id: 'hse_ch5',
      titre: '5. Risques Chimiques : Règlements REACH & CLP / SGH',
      dureeEstimeeMin: 45,
      description: 'Les 9 pictogrammes de danger SGH, mentions de danger H (Hazard) et conseils de prudence P (Precaution), Fiches de Données de Sécurité (FDS en 16 rubriques) et Valeurs Limites d’Exposition Professionnelle (VLEP 8h / VLEP CT).',
      pointsCles: ['FDS obligatoire et tenue à disposition des salariés', 'Rubrique 8 de la FDS : Contrôle de l\'exposition / EPI', 'Produits CMR (Cancérogène, Mutagène, Reprotoxique) : substitution obligatoire si techniquement possible'],
      formuleCle: 'Pictogrammes : Inflammable, Toxique, Corrosif, CMR, Danger environnemental',
      contenuHtml: `<p>Identification, stockage séparé et manipulation sécurisée des produits chimiques industriels.</p>`,
      exercices: [{
        id: 'hse_ch5_ex1',
        type: TypeQuestion.QCM,
        question: "Combien de rubriques obligatoires standardisées comprend une Fiche de Données de Sécurité (FDS) selon le règlement européen REACH ?",
        reponsesPossibles: ['16 rubriques', '8 rubriques', '5 rubriques', '24 rubriques'],
        reponsesCorrectes: [0],
        explication: "La norme européenne REACH impose un format universel strict et exhaustif structuré en 16 rubriques.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'hse_ch6',
      titre: '6. Risques d’Explosion en Milieu Industriel (Directives ATEX)',
      dureeEstimeeMin: 45,
      description: 'Hexagone de l’explosion (Combustible, Comburant, Source d’ignition, Mélange, Confinement, Suspension), zonage Gaz (Zones 0, 1, 2) et Poussières (Zones 20, 21, 22), matériel certifié Ex.',
      pointsCles: ['Zone 0 / 20 : Présence permanente de l\'atmosphère explosive', 'Zone 1 / 21 : Présence occasionnelle en fonctionnement normal', 'Zone 2 / 22 : Présence anormale et de courte durée', 'Document Relatif à la Protection Contre les Explosions (DRPCE)'],
      formuleCle: 'LIE (Limite Inférieure d\'Explosivité) et LSE (Limite Supérieure d\'Explosivité)',
      contenuHtml: `<p>Zonage et prévention du risque d'explosion dans les silos, cabines de peinture et raffineries.</p>`,
      exercices: [{
        id: 'hse_ch6_ex1',
        type: TypeQuestion.QCM,
        question: "Comment classe-t-on une zone où une atmosphère explosive sous forme de gaz ou vapeur est présente en permanence ou pendant de longues périodes (ex: intérieur d'une cuve) ?",
        reponsesPossibles: ['Zone 0', 'Zone 1', 'Zone 2', 'Zone non classée'],
        reponsesCorrectes: [0],
        explication: "La Zone 0 correspond à la présence continue ou permanente du mélange explosif gazeux.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'hse_ch7',
      titre: '7. Travaux en Hauteur & Prévention des Chutes',
      dureeEstimeeMin: 40,
      description: 'Échafaudages fixes et roulants (R408 / R457), lignes de vie, harnais antichute avec absorbeur d’énergie (EN 361 / EN 355), calcul du tirant d’air et nacelles PEMP (CACES R486).',
      pointsCles: ['L\'échelle est un moyen d\'accès, pas un poste de travail', 'Tirant d\'air : hauteur libre nécessaire sous les pieds pour éviter l\'impact au sol', 'Vérification périodique annuelle des EPI antichute'],
      formuleCle: 'Tirant d\'air = Longueur longe + Déploiement absorbeur + Hauteur travailleur (1.5m) + Marge sécurité (1m)',
      contenuHtml: `<p>Sécurisation des chantiers et prévention de la 2ème cause d'accidents mortels au travail.</p>`,
      exercices: [{
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
      }]
    },
    {
      id: 'hse_ch8',
      titre: '8. Ergonomie & Prévention des Troubles Musculo-Squelettiques (TMS)',
      dureeEstimeeMin: 40,
      description: 'Facteurs de risque biomécaniques (répétitivité, efforts excessifs, postures contraignantes), méthode RULA / REBA, norme NF X35-109 (limites de port manuel de charge : 25 kg pour homme, 15 kg pour femme).',
      pointsCles: ['Les TMS représentent plus de 85% des maladies professionnelles indemnisées', 'Aménagement ergonomique des hauteurs de plan de travail', 'Alternance des tâches et pauses actives'],
      formuleCle: 'Norme AFNOR NF X35-109 : 25 kg max recommandé pour un homme adulte',
      contenuHtml: `<p>Analyse ergonomique de l'activité réelle de travail et conception de postes adaptés à la physiologie humaine.</p>`,
      exercices: [{
        id: 'hse_ch8_ex1',
        type: TypeQuestion.QCM,
        question: "Selon les recommandations ergonomiques et la norme française de manutention manuelle NF X35-109, quelle est la masse unitaire maximale recommandée pour un homme adulte en condition normale ?",
        reponsesPossibles: ['25 kg (limite absolue exceptionnelle à 50 kg)', '100 kg', '5 kg', '75 kg'],
        reponsesCorrectes: [0],
        explication: "La norme NF X35-109 fixe à 25 kg la charge maximale de manutention manuelle habituelle pour un homme.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'hse_ch9',
      titre: '9. Risque Incendie & Évacuation des Bâtiments Industriels',
      dureeEstimeeMin: 40,
      description: 'Triangle du feu (Combustible, Comburant, Énergie d’activation), classes de feux (A : solides, B : liquides, C : gaz, D : métaux, F : huiles de cuisson), extincteurs (Eau pulvérisée + additif, CO2, Poudre ABC) et désenfumage.',
      pointsCles: ['Extincteur CO2 : idéal pour feux électriques (sans résidu corrosif)', 'Exercice d\'évacuation semestriel obligatoire', 'Désenfumage pour évacuer les fumées toxiques chaudes'],
      formuleCle: 'Extincteur Eau pulvérisée (Feux A) | CO2 (Feux B & Armoires électriques)',
      contenuHtml: `<p>Organisation des secours, consignes d'évacuation et lutte contre les départs de feu.</p>`,
      exercices: [{
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
      }]
    },
    {
      id: 'hse_ch10',
      titre: '10. Norme ISO 45001 : Système de Management de la Santé et Sécurité au Travail (SST)',
      dureeEstimeeMin: 45,
      description: 'Structure HLS (High Level Structure), cycle PDCA (Plan-Do-Check-Act), leadership et engagement de la direction, consultation des travailleurs, gestion des risques et opportunités.',
      pointsCles: ['Remplacement de l\'ancien référentiel OHSAS 18001', 'Implication active des instances représentatives du personnel', 'Amélioration continue de la performance SST'],
      formuleCle: 'PDCA : Planifier -> Réaliser -> Vérifier -> Agir',
      contenuHtml: `<p>Déploiement et certification internationale d'un système de management SST.</p>`,
      exercices: [{
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
      }]
    },
    {
      id: 'hse_ch11',
      titre: '11. Norme ISO 14001 : Système de Management Environnemental (SME)',
      dureeEstimeeMin: 45,
      description: 'Analyse Environnementale Initiale (AEI), Aspects Environnementaux Significatifs (AES), cycle de vie des produits, prévention des pollutions (air, eau, sols) et gestion des déchets industriels (DIB / DIS).',
      pointsCles: ['Bordereau de Suivi des Déchets (BSD) dématérialisé Trackdéchets', 'Veille réglementaire environnementale (ICPE)', 'Objectifs de décarbonation et d\'économie circulaire'],
      formuleCle: 'AES : Aspect Environnemental Significatif (Impact majeur identifié)',
      contenuHtml: `<p>Mise en place d'une politique environnementale d'entreprise et réduction de l'empreinte écologique.</p>`,
      exercices: [{
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
      }]
    },
    {
      id: 'hse_ch12',
      titre: '12. Installations Classées pour la Protection de l’Environnement (Régime ICPE)',
      dureeEstimeeMin: 45,
      description: 'Nomenclature des ICPE, régimes de Déclaration (D), Enregistrement (E) et Autorisation (A), directive SEVESO 3 (Seuil Bas / Seuil Haut), Étude d’Impact et Plan d’Opération Interne (POI).',
      pointsCles: ['Prévention des accidents technologiques majeurs', 'Servitudes d\'utilité publique et Plan de Prévention des Risques Technologiques (PPRT)', 'Inspections DREAL'],
      formuleCle: 'Niveaux ICPE : Déclaration (D) < Enregistrement (E) < Autorisation (A) < SEVESO',
      contenuHtml: `<p>Conformité juridique des sites industriels vis-à-vis des risques d'accident industriel majeur.</p>`,
      exercices: [{
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
      }]
    },
    {
      id: 'hse_ch13',
      titre: '13. Coordination des Entreprises Extérieures : Plan de Prévention & Permis de Feu',
      dureeEstimeeMin: 45,
      description: 'Article R4511-1 du Code du travail, visite préalable commune des lieux, rédaction obligatoire du Plan de Prévention (> 400 h/an ou travaux dangereux), Permis de Feu (validité limitée, surveillance 2h post-travaux).',
      pointsCles: ['Risques d\'interférence entre activité propre et travaux des sous-traitants', 'Permis de feu obligatoire pour tous travaux par point chaud (soudure, meulage)', 'Consignation conjointe'],
      formuleCle: 'Permis de feu : ronde de surveillance obligatoire 2 heures après la fin des travaux par point chaud',
      contenuHtml: `<p>Encadrement contractuel et sécuritaire des prestataires et chantiers temporaires.</p>`,
      exercices: [{
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
      }]
    },
    {
      id: 'hse_ch14',
      titre: '14. Culture de Sécurité & Visites Comportementales de Sécurité (VCS)',
      dureeEstimeeMin: 40,
      description: 'Échelle de maturité de Bradley (Stade Réactif -> Dépendant -> Indépendant -> Interdépendant), observation constructive des comportements au poste, dialogue bienveillant sans sanction et renforcement des pratiques sûres.',
      pointsCles: ['90% des accidents ont pour cause contributive un comportement à risque', 'Passe d\'une sécurité subie à une culture partagée du "prendre soin les uns des autres"', 'Rôle exemplaire du management'],
      formuleCle: 'Échelle de Bradley : Interdépendance = Zéro accident pérenne',
      contenuHtml: `<p>Développement de l'engagement individuel et collectif pour une culture sécurité d'excellence.</p>`,
      exercices: [{
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
      }]
    },
    {
      id: 'hse_ch15',
      titre: '15. Gestion des Crises HSE, Continuité d’Activité & Audit de Conformité',
      dureeEstimeeMin: 50,
      description: 'Cellule de crise, communication d’urgence avec les autorités (Pompiers, Inspection du travail, Préfecture, DREAL), Plan de Continuité d’Activité (PCA / ISO 22301) et conduite d’un audit blanc de certification.',
      pointsCles: ['Fiche réflexe d\'alerte et porte-parole unique', 'Plan de Continuité d\'Activité : sauvegarde des fonctions vitales de l\'entreprise', 'Restitution des écarts majeurs/mineurs d\'audit'],
      formuleCle: 'PCA : Garantir la reprise opérationnelle dans les délais cibles (RTO / RPO)',
      contenuHtml: `<p>Pilotage stratégique de crise et préparation rigoureuse aux audits de conformité réglementaire.</p>`,
      exercices: [{
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
      }]
    }
  ]
};
