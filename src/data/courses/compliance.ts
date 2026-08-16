import { Domaine, NiveauDifficulte, TypeQuestion, Cours } from '../../types';

export const COURSE_COMPLIANCE: Cours = {
  id: 'comp_101',
  domaine: Domaine.COMPLIANCE,
  domaineNom: 'Conformité & RGPD',
  icon: '⚖️',
  titre: "Conformité d’Entreprise, RGPD, Loi Sapin II & Éthique des Affaires",
  description: 'Cursus professionnel complet en 15 chapitres : Règlement Général sur la Protection des Données (RGPD), Loi Sapin II anticorruption (les 8 piliers AFA), devoir de vigilance, protection des lanceurs d’alerte (loi Waserman) et sanctions internationales (OFAC).',
  niveau: NiveauDifficulte.INTERMEDIAIRE,
  dureeHeures: 44,
  colorClass: 'from-slate-700 to-zinc-900',
  titreBrevet: "Brevet Professionnel de Conformité Juridique, RGPD & Éthique des Affaires",
  objectifs: [
    'Piloter la mise en conformité RGPD (Registre des traitements, AIPD, droits des personnes, DPO)',
    'Déployer les 8 piliers anticorruption de la Loi Sapin II et préparer les contrôles de l’AFA',
    'Gérer les dispositifs de recueil d’alerte éthique et protéger les lanceurs d’alerte',
    'Conduire la cartographie des risques de non-conformité et évaluer les tiers (Kyc / Kys)',
    'Gérer les notifications de violations de données à la CNIL sous 72 heures'
  ],
  competences: [
    'Gouvernance RGPD & Tenue du Registre (Art. 30)',
    'Analyse d’Impact Relative à la Protection des Données (AIPD / PIA)',
    'Dispositif Anticorruption Sapin II (8 Piliers AFA)',
    'Évaluation & Due Diligence des Tiers (KYS / KYC)',
    'Protection des Lanceurs d’Alerte (Loi Waserman)',
    'Cartographie des Risques de Conformité & Matrice d’Impact',
    'Sanctions Internationales, Embargos & Export Control'
  ],
  preRequis: ['Culture d’entreprise et notions juridiques de base'],
  certifiant: true,
  scoreMinValidation: 0.7,
  dureeValiditeMois: 36,
  devoirs: [
    {
      id: 'comp_dev_1',
      numero: 1,
      titre: 'Devoir n°1 : Gestion d’une Violation de Données Personnelles (Procédure CNIL 72h)',
      chapitresCouverts: 'Chapitres 1 à 5',
      dureeEstimeeMin: 45,
      noteMax: 20,
      coefficient: 2,
      description: 'Analyse d’un incident de cyberattaque avec fuite de base de données clients et rédaction de la notification officielle à la CNIL sous 72h.',
      miseEnSituation: 'Un ransomware a exfiltré la base de données de 50 000 clients contenant noms, adresses, emails, numéros de téléphone et mots de passe hashés. L’incident a été découvert le vendredi à 14h00.',
      questions: [
        {
          id: 'q1',
          titre: 'Délai légal de notification à l’autorité de contrôle (CNIL)',
          enonce: 'Selon l’article 33 du RGPD, dans quel délai maximal après en avoir pris connaissance le Responsable de Traitement doit-il notifier cette violation à la CNIL ?',
          points: 7,
          type: 'cas_pratique',
          options: [
            'Au plus tard 72 heures après en avoir pris connaissance',
            'Sous 30 jours ouvrés',
            'À la fin de l\'année fiscale',
            'Uniquement si un client porte plainte'
          ],
          reponseCorrecteIndex: 0,
          solutionDetaillee: 'L\'article 33 du RGPD impose une notification sans délai indu et, si possible, 72 heures au plus tard après en avoir pris connaissance.',
          baremeDetail: ['Citation exacte du délai légal de 72h : 4 pts', 'Référence à l\'article 33 RGPD : 3 pts']
        },
        {
          id: 'q2',
          titre: 'Obligation d’information des personnes concernées',
          enonce: 'Selon l’article 34 du RGPD, quand est-il obligatoire de notifier individuellement les 50 000 clients victimes de la fuite ?',
          points: 7,
          type: 'cas_pratique',
          options: [
            'Dès lors que la violation est susceptible d’engendrer un risque ÉLEVÉ pour les droits et libertés des personnes physiques (usurpation d’identité, hameçonnage ciblé)',
            'Dans tous les cas sans exception même pour une fuite mineure',
            'Jamais pour éviter la mauvaise publicité',
            'Uniquement sur ordonnance d\'un juge'
          ],
          reponseCorrecteIndex: 0,
          solutionDetaillee: 'L\'information individuelle des personnes est obligatoire dès que le risque pour leurs droits et libertés est qualifié d\'élevé.',
          baremeDetail: ['Critère du risque élevé pour les personnes : 4 pts', 'Justification liée à l\'usurpation d\'identité : 3 pts']
        },
        {
          id: 'q3',
          titre: 'Plafond maximal des sanctions financières CNIL / RGPD',
          enonce: 'Quel est le montant maximal des amendes administratives pouvant être prononcées par la CNIL en cas de manquements graves aux principes fondamentaux du RGPD (Article 83) ?',
          points: 6,
          type: 'cas_pratique',
          options: [
            'Jusqu’à 20 millions d’euros ou 4% du chiffre d’affaires annuel mondial consolidé (le montant le plus élevé étant retenu)',
            '50 000 € forfaitaires',
            '100 000 €',
            '1% du bénéfice net local'
          ],
          reponseCorrecteIndex: 0,
          solutionDetaillee: 'L\'article 83(5) fixe le plafond de niveau 2 à 20 millions d\'euros ou jusqu\'à 4% du CA mondial de l\'exercice précédent.',
          baremeDetail: ['Mention des 20 M€ : 3 pts', 'Mention des 4% du CA mondial : 3 pts']
        }
      ]
    }
  ],
  chapitres: [
    {
      id: 'comp_ch1',
      titre: '1. Les Fondements du RGPD & les 6 Principes Clés',
      dureeEstimeeMin: 35,
      description: 'Définitions (Donnée à caractère personnel, Traitement, Responsable de Traitement, Sous-traitant), licéité/loyauté/transparence, limitation des finalités, minimisation des données, exactitude, limitation de la conservation, intégrité et confidentialité.',
      pointsCles: ['Principe d\'Accountability (responsabilité proactive documentée)', 'Minimisation : ne collecter que les données strictement nécessaires', 'Consentement libre, spécifique, éclairé et univoque'],
      formuleCle: 'RGPD : Règlement UE 2016/679 applicable depuis le 25 mai 2018',
      contenuHtml: `<p>Cadre juridique européen fondamental régissant les données personnelles.</p>`,
      exercices: [{
        id: 'comp_ch1_ex1',
        type: TypeQuestion.QCM,
        question: "Que signifie le principe de 'Minimisation des données' énoncé à l'article 5 du RGPD ?",
        reponsesPossibles: [
          'Les données collectées doivent être adéquates, pertinentes et strictement limitées à ce qui est nécessaire au regard des finalités du traitement',
          'Toutes les lettres doivent être écrites en minuscules',
          'La base de données ne doit pas dépasser 1 mégaoctet',
          'Les données doivent être effacées toutes les 24 heures'
        ],
        reponsesCorrectes: [0],
        explication: "Le principe de minimisation interdit de collecter des données accessoires ou 'au cas où' sans justification directe pour la finalité déclarée.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'comp_ch2',
      titre: '2. Les 6 Bases Légales d’un Traitement de Données',
      dureeEstimeeMin: 40,
      description: 'Article 6 du RGPD : Consentement explicite, Exécution d’un contrat, Obligation légale, Sauvegarde des intérêts vitaux, Mission d’intérêt public, Intérêt légitime (avec test de mise en balance des droits).',
      pointsCles: ['Un traitement sans base légale valide est illicite', 'Le consentement peut être retiré à tout moment aussi facilement qu\'il a été donné', 'L\'intérêt légitime nécessite une balance d\'intérêts documentée'],
      formuleCle: 'Base légale : obligatoire pour tout traitement de données personnelles',
      contenuHtml: `<p>Choix et justification de la base juridique appropriée pour chaque finalité de traitement.</p>`,
      exercices: [{
        id: 'comp_ch2_ex1',
        type: TypeQuestion.QCM,
        question: "Sur quelle base légale une entreprise traite-t-elle les données bancaires et l'adresse de ses salariés pour verser leur salaire mensuel et déclarer les cotisations sociales ?",
        reponsesPossibles: [
          'L\'exécution du contrat de travail et le respect d\'obligations légales',
          'Le consentement libre (le salarié peut refuser d\'être payé)',
          'La sauvegarde des intérêts vitaux uniquement',
          'Une mission de défense nationale'
        ],
        reponsesCorrectes: [0],
        explication: "La paie et les déclarations sociales découlent directement du contrat de travail et des obligations légales du Code du travail.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'comp_ch3',
      titre: '3. Les Droits des Personnes Concernées & Procédures d’Exercice',
      dureeEstimeeMin: 45,
      description: 'Droit d’accès (Art. 15), droit de rectification (Art. 16), droit à l’effacement / droit à l’oubli (Art. 17), droit à la limitation, droit à la portabilité (format structuré JSON/CSV), droit d’opposition.',
      pointsCles: ['Délai de réponse obligatoire : 1 mois maximum (prorogeable de 2 mois si complexité)', 'Gratuité de l\'exercice des droits', 'Vérification préalable de l\'identité du demandeur'],
      formuleCle: 'Délai de réponse = 30 jours calendaires maximum',
      contenuHtml: `<p>Mise en place de canaux fluides et sécurisés de traitement des demandes des usagers et salariés.</p>`,
      exercices: [{
        id: 'comp_ch3_ex1',
        type: TypeQuestion.QCM,
        question: "Dans quel délai maximal le Responsable de Traitement doit-il répondre à une personne exerçant son droit d'accès ou d'effacement sous le RGPD ?",
        reponsesPossibles: ['1 mois maximum', '6 mois', '24 heures', '1 an'],
        reponsesCorrectes: [0],
        explication: "Le responsable de traitement a l'obligation légale de répondre dans un délai d'un mois à compter de la réception de la demande.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'comp_ch4',
      titre: '4. Tenue du Registre des Activités de Traitement (Article 30)',
      dureeEstimeeMin: 45,
      description: 'Contenu obligatoire du registre : nom/coordonnées du RT et DPO, finalités, catégories de personnes, catégories de données, destinataires, transferts hors UE, durées de conservation, description générale des mesures de sécurité.',
      pointsCles: ['Document pivot lors d\'un contrôle de la CNIL', 'Cartographie dynamique des flux de données internes', 'Obligation de tenue pour toutes les entreprises de +250 salariés ou traitant des données sensibles'],
      formuleCle: 'Article 30 RGPD : Registre des activités de traitement',
      contenuHtml: `<p>Méthodologie de recensement et d'actualisation continue du registre des traitements.</p>`,
      exercices: [{
        id: 'comp_ch4_ex1',
        type: TypeQuestion.QCM,
        question: "Quel document officiel constitue la pièce maîtresse exigée en premier lieu par la CNIL lors d'un contrôle de conformité pour vérifier la gouvernance des données de l'entreprise ?",
        reponsesPossibles: [
          'Le Registre des Activités de Traitement (Article 30)',
          'L\'organigramme de l\'entreprise',
          'La plaquette commerciale',
          'Le relevé bancaire de l\'année'
        ],
        reponsesCorrectes: [0],
        explication: "Le registre de l'article 30 est la preuve centrale démontrant la connaissance et la maîtrise de l'ensemble des flux de données.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'comp_ch5',
      titre: '5. Analyse d’Impact sur la Protection des Données (AIPD / PIA - Art. 35)',
      dureeEstimeeMin: 45,
      description: 'Critères du G29/CEPD rendant l’AIPD obligatoire (profilage à grande échelle, données sensibles, surveillance systématique, personnes vulnérables), évaluation de la proportionnalité, des risques pour la vie privée et mesures de remédiation.',
      pointsCles: ['Obligatoire si au moins 2 critères sur les 9 critères CEPD sont réunis', 'Consultation préalable de la CNIL si le risque résiduel reste élevé', 'Logiciel PIA open source de la CNIL'],
      formuleCle: 'AIPD : Évaluation de la Gravité et de la Vraisemblance des menaces pesant sur les personnes',
      contenuHtml: `<p>Conduite d'une analyse de risque approfondie sur les projets innovants ou intrusifs.</p>`,
      exercices: [{
        id: 'comp_ch5_ex1',
        type: TypeQuestion.QCM,
        question: "Dans quel cas une Analyse d'Impact relative à la Protection des Données (AIPD) est-elle strictement obligatoire avant le déploiement d'un nouveau système ?",
        reponsesPossibles: [
          'Lorsqu\'un traitement est susceptible d\'engendrer un risque élevé pour les droits et libertés des personnes (ex: vidéosurveillance algorithmique à grande échelle)',
          'Pour tout achat de papier pour l\'imprimante',
          'Uniquement pour les entreprises de plus de 100 000 salariés',
          'Jamais en France'
        ],
        reponsesCorrectes: [0],
        explication: "L'article 35 impose l'AIPD dès lors que le traitement présente un risque élevé, notamment lors d'évaluation systématique ou surveillance de masse.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'comp_ch6',
      titre: '6. Rôle du Délégué à la Protection des Données (DPO / DPO Externalisé)',
      dureeEstimeeMin: 40,
      description: 'Désignation obligatoire (organismes publics, suivi régulier et systématique à grande échelle, données sensibles), indépendance statutaire, absence de conflit d’intérêts, missions d’information, de conseil et d’audit.',
      pointsCles: ['Rattachement au plus haut niveau de direction', 'Ne peut recevoir d\'instructions sur l\'exercice de ses missions', 'Point de contact privilégié avec la CNIL'],
      formuleCle: 'DPO : garant de la conformité sans assumer la responsabilité pénale du dirigeant',
      contenuHtml: `<p>Positionnement organisationnel et missions stratégiques du DPO.</p>`,
      exercices: [{
        id: 'comp_ch6_ex1',
        type: TypeQuestion.QCM,
        question: "Pourquoi le Directeur Informatique (DSI) ou le Directeur Marketing ne peut-il généralement pas être désigné DPO de sa propre entreprise ?",
        reponsesPossibles: [
          'En raison d\'un conflit d\'intérêts manifeste, car il détermine lui-même les moyens et finalités des traitements qu\'il devrait auditer en tant que DPO',
          'Car le DPO doit obligatoirement être un policier',
          'Car il ne parle pas anglais',
          'Car le DSI a trop de travail'
        ],
        reponsesCorrectes: [0],
        explication: "Le DPO doit être totalement indépendant et ne peut occuper une fonction consistant à déterminer les finalités et moyens des traitements.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'comp_ch7',
      titre: '7. Sécurité des Données, Chiffrement & Transferts Hors Union Européenne',
      dureeEstimeeMin: 45,
      description: 'Mesures techniques et organisationnelles (chiffrement AES-256, pseudonymisation, gestion stricte des accès, sauvegardes), transferts hors EEE, Clauses Contractuelles Types (CCT / SCC) et Data Privacy Framework UE-USA.',
      pointsCles: ['Arrêt Schrems II et invalidation du Privacy Shield', 'Obligation de réaliser une Transfer Impact Assessment (TIA)', 'Clauses contractuelles types de la Commission Européenne'],
      formuleCle: 'Transfert hors UE : Décision d\'adéquation OU Clauses Contractuelles Types (CCT)',
      contenuHtml: `<p>Sécurisation technique des architectures logicielles et conformité des flux de données transfrontaliers.</p>`,
      exercices: [{
        id: 'comp_ch7_ex1',
        type: TypeQuestion.QCM,
        question: "Sur quel mécanisme juridique une entreprise européenne peut-elle transférer légalement des données personnelles vers un prestataire hébergé dans un pays tiers ne bénéficiant pas d'une décision d'adéquation ?",
        reponsesPossibles: [
          'En signant les Clauses Contractuelles Types (CCT) adoptées par la Commission européenne complétées de mesures de sécurité renforcées',
          'Par un simple accord oral au téléphone',
          'En envoyant un email sans chiffrement',
          'C\'est totalement impossible sous peine de prison'
        ],
        reponsesCorrectes: [0],
        explication: "Les Clauses Contractuelles Types (CCT) fournissent les garanties appropriées requises par l'article 46 du RGPD.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'comp_ch8',
      titre: '8. Loi Sapin II : Le Dispositif Français de Prévention de la Corruption',
      dureeEstimeeMin: 45,
      description: 'Champ d’application (> 500 salariés et CA > 100 M€), rôle de l’Agence Française Anticorruption (AFA), sanctions de la Commission des sanctions de l’AFA et convention judiciaire d’intérêt public (CJIP).',
      pointsCles: ['Loi du 9 décembre 2016 relative à la transparence et à la lutte contre la corruption', 'Contrôles AFA sur pièces et sur place', 'Amendes jusqu\'à 1 M€ pour la personne morale et 200 k€ pour les dirigeants'],
      formuleCle: 'Loi Sapin II : 8 piliers obligatoires de conformité anticorruption',
      contenuHtml: `<p>Cadre légal anticorruption français et compétences de contrôle de l'AFA.</p>`,
      exercices: [{
        id: 'comp_ch8_ex1',
        type: TypeQuestion.QCM,
        question: "Quelle autorité publique française a été créée par la Loi Sapin II pour contrôler le déploiement effectif des programmes anticorruption dans les entreprises ?",
        reponsesPossibles: [
          'L\'Agence Française Anticorruption (AFA)',
          'La CNIL',
          'L\'Autorité des Marchés Financiers (AMF)',
          'L\'Inspection du Travail'
        ],
        reponsesCorrectes: [0],
        explication: "L'AFA est le service à compétence nationale chargé d'aider et de contrôler les entreprises dans la prévention et la détection de la corruption.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'comp_ch9',
      titre: '9. Les 8 Piliers Anticorruption de la Loi Sapin II',
      dureeEstimeeMin: 50,
      description: '1. Code de conduite, 2. Dispositif d’alerte interne, 3. Cartographie des risques de corruption, 4. Évaluation des tiers (KYS), 5. Contrôles comptables, 6. Formations des personnels exposés, 7. Régime disciplinaire, 8. Contrôle et évaluation interne.',
      pointsCles: ['La cartographie des risques est la clé de voûte de tout le dispositif', 'Code de conduite intégré au règlement intérieur (opposable juridiquement)', 'Formations obligatoires des populations cibles (achats, ventes, direction)'],
      formuleCle: 'Pilier 3 : Cartographie des risques de corruption (Scénarios de risques bruts et nets)',
      contenuHtml: `<p>Déploiement pratique et audit des 8 piliers obligatoires du référentiel AFA.</p>`,
      exercices: [{
        id: 'comp_ch9_ex1',
        type: TypeQuestion.QCM,
        question: "Dans le programme de conformité Sapin II, quel pilier est considéré comme la 'clé de voûte' déterminant le niveau d'intensité de tous les autres contrôles ?",
        reponsesPossibles: [
          'La cartographie des risques de corruption',
          'La machine à café',
          'L\'affiche de bienvenue à l\'accueil',
          'Le contrat de bail des bureaux'
        ],
        reponsesCorrectes: [0],
        explication: "La cartographie des risques identifie, hiérarchise et documente les zones d'exposition de l'entreprise pour cibler les mesures de prévention.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'comp_ch10',
      titre: '10. Évaluation et Due Diligence des Tiers (Know Your Supplier / Partner - KYS)',
      dureeEstimeeMin: 45,
      description: 'Niveaux de diligence gradués selon le profil de risque, identification des Bénéficiaires Effectifs (UBO / RBE), criblage sur les listes de sanctions et Personnes Politiquement Exposées (PPE), clauses contractuelles anticorruption et audits tiers.',
      pointsCles: ['Responsabilité de l\'entreprise engagée par les actes de ses intermédiaires commerciaux', 'Questionnaire d\'intégrité des fournisseurs', 'Surveillance continue des alertes médiatiques défavorables (Adverse Media)'],
      formuleCle: 'KYS : Know Your Supplier | UBO : Ultimate Beneficial Owner',
      contenuHtml: `<p>Méthodologie d'investigation et de scoring de probité des partenaires commerciaux.</p>`,
      exercices: [{
        id: 'comp_ch10_ex1',
        type: TypeQuestion.QCM,
        question: "Pourquoi l'identification du 'Bénéficiaire Effectif Ultime' (UBO) d'une société partenaire est-elle une exigence cruciale de conformité ?",
        reponsesPossibles: [
          'Pour s\'assurer que la société écran ne dissimule pas un officiel public étranger corruptible ou une personne physique sous sanctions internationales',
          'Pour lui envoyer des cadeaux d\'anniversaire',
          'Pour connaître son adresse personnelle',
          'Pour vérifier son permis de conduire'
        ],
        reponsesCorrectes: [0],
        explication: "L'identification de l'UBO permet de percer le voile corporatif des holdings écrans et de prévenir les risques de corruption ou de blanchiment.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'comp_ch11',
      titre: '11. Protection des Lanceurs d’Alerte (Loi Waserman & Directive UE 2019/1937)',
      dureeEstimeeMin: 45,
      description: 'Définition du lanceur d’alerte (personne physique signalant de bonne foi sans contrepartie financière), canaux de signalement sécurisés et confidentiels, interdiction absolue des mesures de représailles (licenciement, mise au placard) et sanctions pénales contre les entraves.',
      pointsCles: ['Canal interne -> Canal externe (Défenseur des droits, justice) -> Divulgation publique si danger imminent', 'Garantie absolue d\'anonymat / confidentialité des identités', 'Immunité pénale et civile pour la divulgation de secrets protégés'],
      formuleCle: 'Loi Waserman du 21 mars 2022 : renforcement de la protection des lanceurs d\'alerte',
      contenuHtml: `<p>Mise en place d'une plateforme d'alerte éthique conforme et sécurisée.</p>`,
      exercices: [{
        id: 'comp_ch11_ex1',
        type: TypeQuestion.QCM,
        question: "Selon la loi Waserman de 2022, un employeur a-t-il le droit de sanctionner disciplinairement ou licencier un salarié ayant émis de bonne foi un signalement d'alerte éthique ?",
        reponsesPossibles: [
          'Non, toute mesure de représailles est strictement nulle de plein droit et passible de lourdes sanctions pénales',
          'Oui, s\'il n\'a pas demandé la permission à son chef',
          'Oui, en lui retenant 50% de son salaire',
          'Oui, s\'il travaille depuis moins d\'un an'
        ],
        reponsesCorrectes: [0],
        explication: "La loi protège totalement le lanceur d'alerte de bonne foi contre toute forme de représailles professionnelles directes ou indirectes.",
        points: 5,
        difficulte: NiveauDifficulte.DEBUTANT
      }]
    },
    {
      id: 'comp_ch12',
      titre: '12. Loi sur le Devoir de Vigilance des Sociétés Mères (Loi 2017 & Directive CS3D)',
      dureeEstimeeMin: 45,
      description: 'Obligation pour les grandes entreprises (+ 5 000 salariés en France ou 10 000 dans le monde) d’établir un Plan de Vigilance : droits humains, libertés fondamentales, santé/sécurité et environnement sur l’ensemble de la chaîne de valeur (fournisseurs et sous-traitants).',
      pointsCles: ['Directive européenne CS3D (Corporate Sustainability Due Diligence Directive)', 'Cartographie des atteintes graves aux droits humains (travail des enfants, travail forcé)', 'Responsabilité civile de l\'entreprise en cas de dommage évitable'],
      formuleCle: 'Plan de Vigilance : Cartographie + Procédures d\'évaluation + Mesures d\'atténuation + Dispositif d\'alerte',
      contenuHtml: `<p>Gouvernance éthique et responsabilité extra-financière de la chaîne d'approvisionnement mondiale.</p>`,
      exercices: [{
        id: 'comp_ch12_ex1',
        type: TypeQuestion.QCM,
        question: "Sur quel périmètre étendu s'applique le Plan de Vigilance d'une multinationale selon la loi française sur le devoir de vigilance ?",
        reponsesPossibles: [
          'Sur ses propres activités, celles de ses filiales ainsi que sur celles de ses sous-traitants et fournisseurs établis en France ou à l\'étranger avec lesquels elle entretient une relation commerciale établie',
          'Uniquement à l\'intérieur du siège social à Paris',
          'Uniquement sur ses investissements en bourse',
          'Uniquement en cas de guerre'
        ],
        reponsesCorrectes: [0],
        explication: "Le devoir de vigilance couvre toute la chaîne de valeur mondiale pour éradiquer le travail forcé et les désastres écologiques chez les fournisseurs.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'comp_ch13',
      titre: '13. Sanctions Internationales, Embargos & Risque d’Extraterritorialité (OFAC & UE)',
      dureeEstimeeMin: 50,
      description: 'Régimes de sanctions financières de l’ONU, de l’Union Européenne et sanctions unilatérales américaines (OFAC / SDN List), extraterritorialité du droit américain (utilisation du dollar USD, serveurs US, composants US > 25%), embargos totaux et sectoriels.',
      pointsCles: ['Risque d\'exclusion du système bancaire mondial (de-risking)', 'Criblage automatisé des flux financiers en temps réel (screening transactions)', 'Export Administration Regulations (EAR)'],
      formuleCle: 'OFAC : Office of Foreign Assets Control du Département du Trésor américain',
      contenuHtml: `<p>Maîtrise des sanctions géopolitiques et prévention des risques d'amendes records extraterritoriales.</p>`,
      exercices: [{
        id: 'comp_ch13_ex1',
        type: TypeQuestion.QCM,
        question: "Pourquoi une transaction commerciale conclue entre deux entreprises européennes peut-elle tomber sous la juridiction des sanctions de l'OFAC américain ?",
        reponsesPossibles: [
          'Si la transaction a été libellée ou compensée en dollars américains (USD), transitant par une chambre de compensation bancaire située sur le sol américain',
          'Si l\'un des directeurs a visité New York en vacances',
          'Car les États-Unis possèdent le droit sur tout',
          'Si les produits sont de couleur bleue'
        ],
        reponsesCorrectes: [0],
        explication: "Le passage de fonds en dollars via une banque correspondante américaine crée le lien juridictionnel (nexus) justifiant l'application extraterritoriale des lois US.",
        points: 5,
        difficulte: NiveauDifficulte.AVANCE
      }]
    },
    {
      id: 'comp_ch14',
      titre: '14. Prévention du Blanchiment de Capitaux & Financement du Terrorisme (LCB-FT)',
      dureeEstimeeMin: 45,
      description: 'Les 3 phases du blanchiment (Placement / Prélavage, Empilage / Dissimulation, Intégration / Réinvestissement), obligations de vigilance des professionnels assujettis (banques, experts-comptables, notaires), et Déclaration de Soupçon à TRACFIN.',
      pointsCles: ['Obligation de vigilance normale, renforcée ou simplifiée', 'TRACFIN : cellule de renseignement financier française', 'Sanctions disciplinaires et pénales en cas d\'omission de déclaration'],
      formuleCle: 'LCB-FT : Déclaration de soupçon immédiate et confidentielle à TRACFIN',
      contenuHtml: `<p>Dispositif national de lutte contre les circuits financiers clandestins et la criminalité organisée.</p>`,
      exercices: [{
        id: 'comp_ch14_ex1',
        type: TypeQuestion.QCM,
        question: "Dans le processus de blanchiment d'argent sale, que désigne la phase 'd'Empilage' (ou Dispersal / Layering) ?",
        reponsesPossibles: [
          'La multiplication complexe de transactions financières et virements internationaux entre sociétés écrans pour brouiller l\'origine illicite des fonds',
          'L\'empilement physique de billets de banque dans un coffre',
          'L\'achat d\'un lave-linge',
          'Le paiement en liquide du supermarché'
        ],
        reponsesCorrectes: [0],
        explication: "L'empilage consiste à multiplier les opérations successives pour rendre la traçabilité de l'origine criminelle de l'argent quasi impossible.",
        points: 5,
        difficulte: NiveauDifficulte.INTERMEDIAIRE
      }]
    },
    {
      id: 'comp_ch15',
      titre: '15. Audits de Conformité, Enquêtes Internes & Gestion d’une Perquisition / Contrôle',
      dureeEstimeeMin: 50,
      description: 'Conduite d’une enquête interne indépendante (préservation des preuves numériques, entretiens d’investigation, secret professionnel / legal privilege), préparation aux visites inopinées (Dawn Raids de la DGCCRF ou de la Commission européenne) et protocole d’accueil.',
      pointsCles: ['Fiche réflexe Dawn Raid pour l\'accueil et le service juridique', 'Droit de ne pas s\'auto-incriminer', 'Rapport d\'enquête interne confidentiel'],
      formuleCle: 'Dawn Raid : Contrôle inopiné avec saisie de messageries et documents',
      contenuHtml: `<p>Gestion de crise judiciaire, préservation de l'intégrité de l'entreprise et coopération loyale avec les régulateurs.</p>`,
      exercices: [{
        id: 'comp_ch15_ex1',
        type: TypeQuestion.QCM,
        question: "Lors d'une perquisition inopinée (Dawn Raid) des inspecteurs de l'Autorité de la Concurrence ou de la CNIL dans les locaux de l'entreprise, quelle consigne réflexe essentielle s'applique ?",
        reponsesPossibles: [
          'Vérifier les mandats légaux, prévenir immédiatement la direction juridique et un avocat, et accompagner les enquêteurs sans jamais détruire de documents ni entraver la visite',
          'Bloquer les portes et éteindre les lumières',
          'Formater tous les ordinateurs portables',
          'Prendre la fuite par l\'escalier de secours'
        ],
        reponsesCorrectes: [0],
        explication: "Toute obstruction ou destruction de scellés/documents constitue un délit pénal grave sanctionné par de lourdes amendes d'obstruction.",
        points: 5,
        difficulte: NiveauDifficulte.EXPERT
      }]
    }
  ]
};
