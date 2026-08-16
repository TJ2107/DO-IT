import { Domaine, NiveauDifficulte, TypeQuestion, Cours } from '../../types';

export const COURSE_COMPTABILITE: Cours = {
  id: 'compta_101',
  domaine: Domaine.COMPTABILITE,
  domaineNom: 'Comptabilité & Finance',
  icon: '📊',
  titre: "Comptabilité Générale, Analyse Financière & Bilan",
  description: 'Cursus professionnel complet en 15 chapitres : Plan Comptable Général (PCG), principe de la partie double, écritures d’inventaire, amortissements, SIG, BFR, trésorerie et tableaux de flux.',
  niveau: NiveauDifficulte.DEBUTANT,
  dureeHeures: 45,
  colorClass: 'from-blue-700 to-indigo-800',
  titreBrevet: "Brevet Professionnel de Comptabilité Générale & Gestion Financière",
  objectifs: [
    'Enregistrer rigoureusement les opérations courantes en partie double (achats, ventes, TVA)',
    'Établir les écritures d’inventaire de fin d’exercice (amortissements, dépréciations, régularisations)',
    'Construire le Bilan comptable et le Compte de Résultat selon le PCG',
    'Calculer les Soldes Intermédiaires de Gestion (SIG : Marge, EBE, Résultat d’Exploitation)',
    'Analyser la structure financière (Fonds de Roulement FRNG, Besoin en Fonds de Roulement BFR, Trésorerie Nette TN)'
  ],
  competences: [
    'Partie Double & Plan Comptable Général (PCG)',
    'Mécanisme de la TVA Collectée / Déductible',
    'Calcul des Amortissements Linéaires & Dégressifs',
    'Soldes Intermédiaires de Gestion (SIG) & EBE',
    'Équilibre Financier : FRNG, BFR & Trésorerie Nette',
    'Ratios de Rentabilité (ROE, ROCE) & Solvabilité',
    'Clôture des Comptes & Liasse Fiscale'
  ],
  preRequis: ['Arithmétique élémentaire'],
  certifiant: true,
  scoreMinValidation: 0.7,
  dureeValiditeMois: 36,
  devoirs: [
    {
      id: 'compta_dev_1',
      numero: 1,
      titre: 'Devoir n°1 : Équilibre Financier de Haut de Bilan & Calcul du BFR',
      chapitresCouverts: 'Chapitres 1 à 5',
      dureeEstimeeMin: 45,
      noteMax: 20,
      coefficient: 2,
      description: 'Calcul du Fonds de Roulement Net Global (FRNG), du Besoin en Fonds de Roulement (BFR) et déduction de la Trésorerie Nette (TN).',
      miseEnSituation: 'Une entreprise industrielle dispose de Capitaux Permanents de 650 000 €, d’Actifs Immobilisés Nets de 450 000 €, d’un Actif Circulant d’exploitation de 280 000 € et d’un Passif Circulant d’exploitation de 160 000 €.',
      questions: [
        {
          id: 'q1',
          titre: 'Calcul du FRNG (Fonds de Roulement Net Global)',
          enonce: 'Selon la formule de haut de bilan FRNG = Ressources Durables - Emplois Stables, quelle est la valeur du FRNG ?',
          points: 7,
          type: 'calcul',
          options: ['200 000 €', '1 100 000 €', '120 000 €', '80 000 €'],
          reponseCorrecteIndex: 0,
          solutionDetaillee: 'FRNG = Capitaux Permanents (650 000 €) - Actif Immobilisé Net (450 000 €) = 200 000 €.',
          baremeDetail: ['Formule du FRNG : 3 pts', 'Calcul exact 200 000 € : 4 pts']
        },
        {
          id: 'q2',
          titre: 'Calcul du BFR (Besoin en Fonds de Roulement)',
          enonce: 'Selon la formule BFR = Actif Circulant d’Exploitation (stocks + créances) - Passif Circulant d’Exploitation (dettes fournisseurs), quelle est la valeur du BFR ?',
          points: 7,
          type: 'calcul',
          options: ['120 000 €', '440 000 €', '200 000 €', '80 000 €'],
          reponseCorrecteIndex: 0,
          solutionDetaillee: 'BFR = 280 000 € - 160 000 € = 120 000 €.',
          baremeDetail: ['Formule du BFR : 3 pts', 'Calcul exact 120 000 € : 4 pts']
        },
        {
          id: 'q3',
          titre: 'Déduction de la Trésorerie Nette (TN)',
          enonce: 'Selon l’équation fondamentale de l’équilibre financier TN = FRNG - BFR, quelle est la Trésorerie Nette de l’entreprise ?',
          points: 6,
          type: 'calcul',
          options: ['+80 000 € (Trésorerie saine et excédentaire)', '-80 000 €', '+320 000 €', '0 €'],
          reponseCorrecteIndex: 0,
          solutionDetaillee: 'TN = FRNG (200 000 €) - BFR (120 000 €) = +80 000 €. Le FRNG finance intégralement le BFR et dégage un excédent de trésorerie disponible de 80 000 €.',
          baremeDetail: ['Formule fondamentale TN = FRNG - BFR : 3 pts', 'Interprétation financière positive : 3 pts']
        }
      ]
    }
  ],
  chapitres: [
    {
      id: 'compta_ch1',
      titre: '1. Les Principes Comptables Fondamentaux & la Partie Double',
      dureeEstimeeMin: 35,
      description: 'Image fidèle, indépendance des exercices, continuité d’exploitation, prudence, permanence des méthodes, et égalité Débit = Crédit.',
      pointsCles: ['Toute opération affecte au moins deux comptes', 'Débit (Emplois / Ce que l\'entreprise reçoit ou possède)', 'Crédit (Ressources / Ce que l\'entreprise fournit ou doit)'],
      formuleCle: 'Total Débit = Total Crédit (Principe universel de la partie double)',
      contenuHtml: `<p>Fondements conceptuels et conventionnels de la comptabilité générale des entreprises.</p>`,
      exercices: [{
        id: 'compta_ch1_ex1',
        type: TypeQuestion.QCM,
        question: "Dans le principe de la comptabilité en partie double, que doit-on obligatoirement vérifier pour chaque écriture comptable ?",
        reponsesPossibles: [
          'Le montant total porté au Débit doit être rigoureusement égal au montant total porté au Crédit',
          'Le Débit doit toujours être supérieur au Crédit',
          'Le Crédit doit être deux fois plus grand que le Débit',
          'Il n\'y a aucune obligation d\'égalité'
        ],
        reponsesCorrectes: [0],
        explication: "Chaque ressource (Crédit) est allouée à un emploi (Débit) ; l'équilibre Débit = Crédit est une règle absolue.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'compta_ch2',
      titre: '2. Le Plan Comptable Général (PCG) & les 7 Classes de Comptes',
      dureeEstimeeMin: 40,
      description: 'Comptes de Bilan (Classe 1 : Capitaux, Classe 2 : Immobilisations, Classe 3 : Stocks, Classe 4 : Tiers, Classe 5 : Financiers) et Comptes de Résultat (Classe 6 : Charges, Classe 7 : Produits).',
      pointsCles: ['Classes 1 à 5 : Bilan patrimonial', 'Classes 6 et 7 : Compte de résultat de l\'exercice', 'Numérotation décimale normalisée'],
      formuleCle: 'Classes 1 à 5 = Bilan | Classe 6 = Charges | Classe 7 = Produits',
      contenuHtml: `<p>Architecture standardisée de la nomenclature des comptes du Plan Comptable Général français.</p>`,
      exercices: [{
        id: 'compta_ch2_ex1',
        type: TypeQuestion.QCM,
        question: "Dans quelle classe du Plan Comptable Général (PCG) enregistre-t-on les 'Comptes de Charges' (ex: achats de marchandises, salaires, électricité) ?",
        reponsesPossibles: ['Classe 6', 'Classe 7', 'Classe 1', 'Classe 5'],
        reponsesCorrectes: [0],
        explication: "La classe 6 regroupe exhaustivement l'ensemble des charges d'exploitation, financières et exceptionnelles.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'compta_ch3',
      titre: '3. Enregistrement des Achats, Ventes & Mécanisme de la TVA',
      dureeEstimeeMin: 45,
      description: 'Factures de "Doit" et d’"Avoir", remises commerciales et escomptes de règlement, TVA collectée (compte 44571), TVA déductible sur ABS (44566) et sur immobilisations (44562), déclaration de TVA à décaisser (44551).',
      pointsCles: ['TVA Collectée - TVA Déductible = TVA à Décaisser (ou Crédit de TVA)', 'La TVA est une opération neutre pour l\'entreprise (collectrice pour l\'État)', 'Calcul Hors Taxe / Toutes Taxes Comprises'],
      formuleCle: 'TVA = Montant HT × Taux (ex: 20%) | TTC = HT + TVA = HT × 1.20',
      contenuHtml: `<p>Comptabilisation des cycles d'achats et de ventes avec liquidation de la taxe sur la valeur ajoutée.</p>`,
      exercices: [{
        id: 'compta_ch3_ex1',
        type: TypeQuestion.CHIFFREE,
        question: "Sur un mois donné, une entreprise a collecté 24 000 € de TVA sur ses ventes et a payé 15 500 € de TVA déductible sur ses achats. Quel est le montant de la TVA à décaisser payable au Trésor Public ?",
        reponsesPossibles: ['8 500 €', '39 500 €', '24 000 €', '0 €'],
        reponsesCorrectes: [0],
        explication: "TVA à décaisser = TVA collectée (24 000 €) - TVA déductible (15 500 €) = 8 500 €.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'compta_ch4',
      titre: '4. Les Opérations de Trésorerie & l’État de Rapprochement Bancaire',
      dureeEstimeeMin: 40,
      description: 'Compte 512 Banque (inversion comptable par rapport au relevé de la banque), chèques émis non encaissés, virements en suspens, agios et construction rigoureuse du tableau de rapprochement.',
      pointsCles: ['Pour l\'entreprise, le compte 512 est débiteur quand il y a de l\'argent en banque', 'Pour la banque, le relevé est créditeur', 'Objectif : justifier tout écart au centime près'],
      formuleCle: 'Solde réel ajusté = Solde livre de banque + Écritures bancaires non encore saisies',
      contenuHtml: `<p>Contrôle de conformité de la trésorerie et élimination des décalages d'enregistrement.</p>`,
      exercices: [{
        id: 'compta_ch4_ex1',
        type: TypeQuestion.QCM,
        question: "Pourquoi le compte '512 Banque' dans la comptabilité de l'entreprise fonctionne-t-il en miroir inversé du relevé de compte envoyé par la banque ?",
        reponsesPossibles: [
          'Car pour la banque, l\'argent déposé par l\'entreprise constitue une dette de la banque envers son client (donc au crédit de la banque)',
          'C\'est une erreur informatique',
          'Pour payer moins d\'impôts',
          'Car les chiffres sont écrits à l\'envers'
        ],
        reponsesCorrectes: [0],
        explication: "L'argent de l'entreprise est un avoir pour elle (Débit du compte 512), mais représente une dette remboursable pour la banque (Crédit sur le relevé).",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'compta_ch5',
      titre: '5. Immobilisations & Calcul des Amortissements (Linéaire & Dégressif)',
      dureeEstimeeMin: 45,
      description: 'Actifs corporels, incorporels et financiers, valeur brute d’origine (VO HT), durée d’utilité, taux d’amortissement t = 100 / n, prorata temporis en jours/mois, et valeur nette comptable (VNC = VO - Cumul amortissements).',
      pointsCles: ['L\'amortissement constate la dépréciation irréversible due à l\'usage et au temps', 'L\'amortissement est une charge non décaissée (autofinancement)', 'Compte 681 (Dotations) et 28x (Amortissements)'],
      formuleCle: 'Annuité linéaire = (Valeur d\'origine × Taux) × (Temps / 360)',
      contenuHtml: `<p>Valorisation patrimoniale et constatation de l'usure économique des investissements matériels.</p>`,
      exercices: [{
        id: 'compta_ch5_ex1',
        type: TypeQuestion.CHIFFREE,
        question: "Une machine achetée 50 000 € HT le 1er janvier est amortie en mode linéaire sur 5 ans (taux = 20%). Quelle est sa Valeur Nette Comptable (VNC) après 3 années pleines d'utilisation ?",
        reponsesPossibles: ['20 000 €', '30 000 €', '10 000 €', '50 000 €'],
        reponsesCorrectes: [0],
        explication: "Annuité = 50 000 × 20% = 10 000 €/an. Cumul sur 3 ans = 30 000 €. VNC = 50 000 - 30 000 = 20 000 €.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'compta_ch6',
      titre: '6. Écritures d’Inventaire : Dépréciations & Provisions pour Risques',
      dureeEstimeeMin: 45,
      description: 'Principe de prudence, dépréciation des créances clients douteuses (compte 416 et 491), dépréciation des stocks (39x), et provisions pour risques et charges (litiges prud’homaux, garanties 15x).',
      pointsCles: ['Dépréciation : perte de valeur probable mais réversible', 'Provision : passif dont l\'échéance ou le montant n\'est pas fixé de façon précise', 'Reprise sur provisions (compte 781) si le risque disparaît'],
      formuleCle: 'Dotation si Dépréciation_N > Dépréciation_N-1 | Reprise dans le cas inverse',
      contenuHtml: `<p>Application du principe de prudence pour refléter la juste valeur des actifs et des engagements de l'entreprise.</p>`,
      exercices: [{
        id: 'compta_ch6_ex1',
        type: TypeQuestion.QCM,
        question: "Quand doit-on enregistrer une 'Dépréciation' sur une créance client plutôt qu'une perte définitive en charge irrécouvrable ?",
        reponsesPossibles: [
          'Dès lors que le recouvrement de la créance est devenu incertain ou compromis (client en redressement), mais que le montant exact de la perte n\'est pas encore définitivement acté',
          'Dès que le client a 1 jour de retard de paiement',
          'Uniquement si le client a déménagé sur la Lune',
          'Jamais'
        ],
        reponsesCorrectes: [0],
        explication: "La dépréciation anticipe par prudence une perte probable mais non encore juridiquement certaine.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'compta_ch7',
      titre: '7. Régularisation des Charges & Produits (CCA, FNP, PCA, AAE)',
      dureeEstimeeMin: 45,
      description: 'Principe de séparation et d’indépendance des exercices (cut-off) : Charges Constatées d’Avance (CCA - 486), Factures Non Parvenues (FNP - 408), Produits Constatés d’Avance (PCA - 487), Factures à Établir (FAE - 418).',
      pointsCles: ['Rattacher à l\'exercice N uniquement les charges et produits consommés ou réalisés en N', 'Extourne automatique des écritures de régularisation au 1er jour de l\'exercice N+1'],
      formuleCle: 'Charge constatée d\'avance (CCA) = Montant total × (Jours sur N+1 / Jours totaux facturés)',
      contenuHtml: `<p>Règles de délimitation temporelle stricte des résultats annuels.</p>`,
      exercices: [{
        id: 'compta_ch7_ex1',
        type: TypeQuestion.QCM,
        question: "Une prime d'assurance annuelle de 1 200 € est payée le 1er novembre N pour la période du 01/11/N au 31/10/N+1. Quelle régularisation doit être comptabilisée au 31 décembre N ?",
        reponsesPossibles: [
          'Une Charge Constatée d\'Avance (CCA) de 1 000 € (correspondant aux 10 mois de l\'exercice N+1)',
          'Une charge à payer de 200 €',
          'Aucune écriture',
          'Une vente de 1 200 €'
        ],
        reponsesCorrectes: [0],
        explication: "Sur les 12 mois payés, 2 mois concernent l'année N (200 €) et 10 mois concernent l'année N+1 (1 000 €), à isoler en compte 486 CCA.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'compta_ch8',
      titre: '8. Élaboration des Documents de Synthèse : Bilan & Compte de Résultat',
      dureeEstimeeMin: 45,
      description: 'Structure de l’Actif (Immobilisé + Circulant) et du Passif (Capitaux propres + Dettes), structure du Compte de Résultat en 3 niveaux (Exploitation, Financier, Exceptionnel) et impôt sur les sociétés (IS).',
      pointsCles: ['Le Bilan est une photographie du patrimoine à une date donnée', 'Le Compte de résultat est le film de l\'activité sur 12 mois', 'Résultat Net = Total Produits - Total Charges = Variation des Capitaux Propres'],
      formuleCle: 'Actif Total = Passif Total | Résultat Net = Produits - Charges',
      contenuHtml: `<p>Synthèse comptable finale et établissement des états financiers officiels.</p>`,
      exercices: [{
        id: 'compta_ch8_ex1',
        type: TypeQuestion.QCM,
        question: "Dans le Compte de Résultat, où apparaît le bénéfice net réalisé au cours de l'exercice avant d'être reporté au passif du Bilan ?",
        reponsesPossibles: [
          'Au total du résultat net de l\'exercice (Produits - Charges)',
          'Dans les dettes fournisseurs',
          'Dans le stock de matières premières',
          'Dans les frais de transport'
        ],
        reponsesCorrectes: [0],
        explication: "Le solde créditeur net (bénéfice) équilibre le compte de résultat et s'inscrit au passif du bilan dans les capitaux propres.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'compta_ch9',
      titre: '9. Soldes Intermédiaires de Gestion (SIG) & EBE',
      dureeEstimeeMin: 50,
      description: 'Marge commerciale, Production de l’exercice, Valeur Ajoutée (VA), Excédent Brut d’Exploitation (EBE / EBITDA), Résultat d’Exploitation (REX / EBIT), Résultat Courant Avant Impôt (RCAI).',
      pointsCles: ['Valeur Ajoutée = Marge commerciale + Production - Consommations intermédiaires', 'EBE : mesure la performance économique pure indépendamment de la politique d\'amortissement et de financement', 'Indicateur roi pour les banquiers'],
      formuleCle: 'EBE = Valeur Ajoutée + Subventions d\'exploitation - Charges de personnel - Impôts & taxes',
      contenuHtml: `<p>Analyse de la formation du profit et performance opérationnelle de l'entreprise.</p>`,
      exercices: [{
        id: 'compta_ch9_ex1',
        type: TypeQuestion.QCM,
        question: "Pourquoi l'Excédent Brut d'Exploitation (EBE) est-il l'indicateur préféré des analystes financiers pour comparer la rentabilité opérationnelle réelle de deux entreprises concurrentes ?",
        reponsesPossibles: [
          'Car il mesure la rentabilité du cœur de métier avant l\'impact des choix de financement (intérêts) et des politiques d\'amortissement (dotations)',
          'Car il inclut les amendes fiscales',
          'Car il est toujours supérieur à 10 millions d\'euros',
          'Car il ne dépend pas des ventes'
        ],
        reponsesCorrectes: [0],
        explication: "L'EBE reflète la ressource brute générée par l'exploitation pure sans être faussé par le mode de détention des actifs (achat vs crédit-bail) ni les dettes.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'compta_ch10',
      titre: '10. Capacité d’Autofinancement (CAF) & Cash-Flow d’Exploitation',
      dureeEstimeeMin: 45,
      description: 'Calcul de la CAF par la méthode soustractive (à partir de l’EBE) et méthode additive (à partir du résultat net + dotations - reprises + VCEAC - PCEA), ratio de désendettement (Dettes nettes / CAF < 3 à 4 années).',
      pointsCles: ['La CAF mesure le flux potentiel de trésorerie interne généré par l\'activité', 'Sert à financer les investissements, rembourser les emprunts et verser des dividendes'],
      formuleCle: 'CAF (additive) = Résultat Net + Dotations nettes aux amortissements/provisions - Plus-values de cession',
      contenuHtml: `<p>Évaluation du potentiel d'autofinancement et de solvabilité à long terme de l'entreprise.</p>`,
      exercices: [{
        id: 'compta_ch10_ex1',
        type: TypeQuestion.CHIFFREE,
        question: "Pour une entreprise ayant un Résultat Net de 120 000 € et des Dotations aux amortissements de 45 000 € (sans cession d'actif), quelle est sa CAF en euros ?",
        reponsesPossibles: ['165 000 €', '75 000 €', '120 000 €', '45 000 €'],
        reponsesCorrectes: [0],
        explication: "CAF = Résultat Net (120 000 €) + Dotations non décaissées (45 000 €) = 165 000 €.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'compta_ch11',
      titre: '11. Équilibre Financier Fonctionnel : FRNG, BFR & Trésorerie Nette (TN)',
      dureeEstimeeMin: 50,
      description: 'Bilan fonctionnel en grandes masses : Emplois stables vs Ressources stables, Actif d’exploitation vs Passif d’exploitation, calcul du FRNG, du BFR et de la Trésorerie Nette (TN = FRNG - BFR).',
      pointsCles: ['Règle d\'or : les investissements durables doivent être financés par des capitaux permanents (FRNG > 0)', 'BFR positif = besoin de trésorerie à combler', 'Trésorerie Nette = Disponibilités - Concours bancaires courants'],
      formuleCle: 'Trésorerie Nette (TN) = FRNG - BFR',
      contenuHtml: `<p>Diagnostic de l'équilibre financier de l'entreprise et prévention du risque de cessation de paiement.</p>`,
      exercices: [{
        id: 'compta_ch11_ex1',
        type: TypeQuestion.QCM,
        question: "Que se passe-t-il pour la trésorerie nette si le Besoin en Fonds de Roulement (BFR) augmente plus vite que le Fonds de Roulement Net Global (FRNG) ?",
        reponsesPossibles: [
          'La Trésorerie Nette se dégrade et diminue (pouvant devenir négative avec recours aux découverts bancaires)',
          'La Trésorerie Nette augmente automatiquement',
          'La banque donne une prime',
          'Les impôts diminuent de moitié'
        ],
        reponsesCorrectes: [0],
        explication: "Comme TN = FRNG - BFR, toute hausse non financée du BFR (gonflement des stocks ou impayés clients) assèche directement la trésorerie disponible.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'compta_ch12',
      titre: '12. Analyse des Délais Clients, Fournisseurs & Rotation des Stocks',
      dureeEstimeeMin: 45,
      description: 'Délai Moyen de Règlement Clients (DSO / Days Sales Outstanding), Délai Fournisseurs (DPO), rotation des stocks en jours de consommation (DIO) et cycle de conversion du cash (CCC = DIO + DSO - DPO).',
      pointsCles: ['DSO (en jours) = (Créances clients TTC / Chiffre d\'affaires TTC) × 360', 'DPO (en jours) = (Dettes fournisseurs TTC / Achats TTC) × 360', 'Objectif : réduire le DSO et optimiser le DPO'],
      formuleCle: 'DSO = (Créances Clients TTC / CA TTC) × 360 jours',
      contenuHtml: `<p>Optimisation du besoin en fonds de roulement d'exploitation au quotidien.</p>`,
      exercices: [{
        id: 'compta_ch12_ex1',
        type: TypeQuestion.CHIFFREE,
        question: "Une entreprise réalise un CA TTC de 3 600 000 € et a en permanence un encours de créances clients de 600 000 € TTC. Quel est son délai moyen de paiement client (DSO) en jours ?",
        reponsesPossibles: ['60 jours', '30 jours', '90 jours', '120 jours'],
        reponsesCorrectes: [0],
        explication: "DSO = (600 000 / 3 600 000) × 360 = (1/6) × 360 = 60 jours.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'compta_ch13',
      titre: '13. Ratios Financiers de Rentabilité & de Solvabilité',
      dureeEstimeeMin: 45,
      description: 'Rentabilité financière (ROE = Résultat Net / Capitaux Propres), Rentabilité économique (ROCE / ROA = Résultat d’Exploitation / Actif Économique), effet de levier financier et ratio d’autonomie financière (Capitaux Propres / Total Bilan > 25%).',
      pointsCles: ['Effet de levier positif si Rentabilité économique > Taux d\'intérêt de la dette', 'Capacité de remboursement : Dettes financières / EBE < 3.5', 'Couverture des frais financiers : EBE / Intérêts > 4'],
      formuleCle: 'ROE = Résultat Net / Capitaux Propres | Levier = (ROCE - i) × (Dettes / CP)',
      contenuHtml: `<p>Batterie de ratios d'évaluation pour investisseurs, actionnaires et comités de crédit bancaire.</p>`,
      exercices: [{
        id: 'compta_ch13_ex1',
        type: TypeQuestion.QCM,
        question: "Dans quelle condition l'effet de levier de l'endettement financier est-il FAVORABLE pour les actionnaires (augmente la rentabilité des capitaux propres ROE) ?",
        reponsesPossibles: [
          'Lorsque la rentabilité économique des investissements (ROCE) est supérieure au taux d\'intérêt de l\'emprunt bancaire (i)',
          'Lorsque le taux d\'intérêt de la banque est à 25%',
          'Lorsque l\'entreprise ne vend rien',
          'Lorsque les dettes sont supérieures à 100 fois le capital'
        ],
        reponsesCorrectes: [0],
        explication: "Tant que le rendement généré par les actifs est supérieur au coût de l'emprunt, l'endettement démultiplie le rendement des fonds propres.",
        points: 5,
        difficulte: NiveauDifficulte.AVANCE
      }]
    },
    {
      id: 'compta_ch14',
      titre: '14. Tableau des Flux de Trésorerie (Flux d’Exploitation, d’Investissement, de Financement)',
      dureeEstimeeMin: 45,
      description: 'Méthode OEC / Banque de France : Flux Net de Trésorerie d’Exploitation (FTE = EBE - ΔBFR), Flux Net d’Investissement (Acquisitions - Cessions d’actifs), Flux Net de Financement (Augmentations de capital + Nouveaux emprunts - Remboursements - Dividendes).',
      pointsCles: ['Explique précisément comment la trésorerie est passée du solde initial au solde final', 'Free Cash Flow (Flux de Trésorerie Disponible)', 'Détection précoce des tensions de liquidité'],
      formuleCle: 'Variation de Trésorerie = Flux Exploitation + Flux Investissement + Flux Financement',
      contenuHtml: `<p>Compréhension dynamique des mouvements réels de cash dans l'entreprise.</p>`,
      exercices: [{
        id: 'compta_ch14_ex1',
        type: TypeQuestion.QCM,
        question: "Comment une entreprise très rentable sur le papier (fort bénéfice net au compte de résultat) peut-elle se retrouver en faillite par manque de trésorerie ?",
        reponsesPossibles: [
          'À cause d\'une explosion non maîtrisée de son BFR (clients ne payant pas et surstockage massif) absorbant tout le cash disponible',
          'Car les chiffres du compte de résultat sont écrits au crayon',
          'Car les actionnaires refusent de lire le bilan',
          'C\'est impossible'
        ],
        reponsesCorrectes: [0],
        explication: "Le bénéfice comptable n'est pas du cash immédiat ; si les clients payent à 120 jours alors que les salaires et fournisseurs sont payés à 30 jours, l'entreprise tombe en cessation de paiements.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'compta_ch15',
      titre: '15. Clôture Annuelle des Comptes, Liasse Fiscale & Audit Légal',
      dureeEstimeeMin: 50,
      description: 'Liasse fiscale Cerfa (régime réel normal 2050 à 2059), résultat fiscal (Réintégrations extra-comptables - Déductions extra-comptables), rôle du Commissaire aux Comptes (CAC : certification sans réserve), approbation des comptes et affectation du résultat en assemblée générale.',
      pointsCles: ['Résultat Fiscal = Résultat Comptable + Réintégrations (dépenses non déductibles) - Déductions', 'Dépôt des comptes annuels au greffe du tribunal de commerce', 'Responsabilité pénale du dirigeant'],
      formuleCle: 'Impôt sur les Sociétés (IS) = Résultat Fiscal × Taux d\'IS (25%)',
      contenuHtml: `<p>Processus d'arrêté des comptes, conformité fiscale et certification légale des états financiers.</p>`,
      exercices: [{
        id: 'compta_ch15_ex1',
        type: TypeQuestion.QCM,
        question: "Quel est le rôle légal d'un Commissaire aux Comptes (CAC) lors de l'audit annuel des comptes d'une société ?",
        reponsesPossibles: [
          'Certifier que les comptes annuels sont réguliers, sincères et donnent une image fidèle du patrimoine et du résultat de l\'entreprise',
          'Rédiger les fiches de paie des ouvriers',
          'Fixer le prix de vente des produits',
          'Remplacer le directeur général en vacances'
        ],
        reponsesCorrectes: [0],
        explication: "Le CAC est un auditeur légal indépendant dont la mission d'intérêt général est de certifier la sincérité et la conformité des états financiers.",
        points: 5,
        difficulte: NiveauDifficulte.EXPERT
      }]
    }
  ]
};
