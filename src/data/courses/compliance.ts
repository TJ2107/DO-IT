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
      pointsCles: [
        'Règlement UE 2016/679 (RGPD / GDPR) en vigueur directe dans les 27 pays de l\'Union',
        'Principe d\'Accountability (Responsabilité proactive documentée et démontrable)',
        'Les 6 principes fondamentaux (Art. 5) : Licéité, Limitation des finalités, Minimisation des données, Exactitude, Limitation de conservation, Intégrité/Confidentialité',
        'Donnée personnelle : toute information se rapportant à une personne physique identifiée ou identifiable (directement ou indirectement)'
      ],
      formuleCle: '\\text{Principe d\'Accountability} : \\text{Capacité à DÉMONTRER à tout moment sa conformité documentée à la CNIL}',
      conseilProfesseur: 'La minimisation des données est votre meilleure protection : moins vous stockez de données sensibles, plus le risque résiduel en cas de cyberattaque est faible.',
      astuceTerrain: 'Bannissez les formulaires d\'inscription qui demandent la date de naissance ou le numéro de sécurité sociale si un simple email suffit au service.',
      contenuHtml: `
        <h3>1.1 Les 6 Principes Fondamentaux de l'Article 5 du RGPD</h3>
        <ol class="list-decimal pl-6 space-y-1 text-sm my-3">
          <li><strong>Licéité, Loyauté, Transparence :</strong> Traiter les données de façon claire, honnête et sur une base légale valide.</li>
          <li><strong>Limitation des Finalités :</strong> Ne collecter les données que pour un objectif précis et déterminé à l'avance.</li>
          <li><strong>Minimisation des Données :</strong> Se restreindre aux seules données strictement indispensables.</li>
          <li><strong>Exactitude :</strong> Maintenir les informations à jour et rectifier les données erronées.</li>
          <li><strong>Limitation de Conservation :</strong> Supprimer ou anonymiser les données dès que la finalité est atteinte.</li>
          <li><strong>Intégrité et Confidentialité :</strong> Garantir une sécurité technique et organisationnelle sans faille (chiffrement, contrôles d'accès).</li>
        </ol>
      `,
      exercices: [
        {
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
        }
      ]
    },
    {
      id: 'comp_ch2',
      titre: '2. Les 6 Bases Légales d’un Traitement de Données',
      dureeEstimeeMin: 40,
      description: 'Article 6 du RGPD : Consentement explicite, Exécution d’un contrat, Obligation légale, Sauvegarde des intérêts vitaux, Mission d’intérêt public, Intérêt légitime (avec test de mise en balance des droits).',
      pointsCles: [
        'Tout traitement sans base légale valide de l\'Article 6 est illicite et passible de sanctions',
        'Les 6 bases : 1. Consentement, 2. Contrat, 3. Obligation légale, 4. Intérêts vitaux, 5. Mission publique, 6. Intérêt légitime',
        'Le consentement doit être libre, spécifique, éclairé et univoque (cases pré-cochées strictement interdites)',
        'L\'intérêt légitime exige un test de mise en balance formalisé (LIA - Legitimate Interests Assessment)'
      ],
      formuleCle: '\\text{Base Légale Obligatoire} \\in \\{\\text{Consentement}, \\text{Contrat}, \\text{Loi}, \\text{Intérêts vitaux}, \\text{Mission publique}, \\text{Intérêt légitime}\\}',
      conseilProfesseur: 'Ne choisissez pas systématiquement le consentement pour tout : pour la paie des salariés ou la facturation des clients, la base légale est le "Contrat" ou l\'"Obligation légale" (un salarié ne peut pas consentir ou refuser sa déclaration fiscale).',
      astuceTerrain: 'Conservez toujours une preuve technique datée du recueil du consentement (horodatage, adresse IP, version des CGU acceptées).',
      contenuHtml: `
        <h3>2.1 Tableau des 6 Bases Légales (Article 6 RGPD)</h3>
        <table class="w-full border-collapse my-4 text-sm border border-slate-300 dark:border-slate-700">
          <thead>
            <tr class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100">
              <th class="border p-2">Base Légale</th>
              <th class="border p-2">Cas d'Usage Typique</th>
              <th class="border p-2">Conditions Clés</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border p-2 font-bold">Consentement (Art. 6.1.a)</td><td class="border p-2">Newsletter marketing, cookies traceurs</td><td class="border p-2">Retrait possible à tout moment en 1 clic</td></tr>
            <tr><td class="border p-2 font-bold">Exécution du Contrat (Art. 6.1.b)</td><td class="border p-2">Livraison de commande, contrat de travail</td><td class="border p-2">Nécessaire à l'exécution de la prestation</td></tr>
            <tr><td class="border p-2 font-bold">Obligation Légale (Art. 6.1.c)</td><td class="border p-2">Déclarations fiscales, conservation factures</td><td class="border p-2">Imposé par un texte de loi français ou UE</td></tr>
            <tr><td class="border p-2 font-bold">Intérêt Légitime (Art. 6.1.f)</td><td class="border p-2">Sécurité du réseau, prévention de la fraude</td><td class="border p-2">Test de balance écrit face aux droits de l'usager</td></tr>
          </tbody>
        </table>
      `,
      exercices: [
        {
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
        }
      ]
    },
    {
      id: 'comp_ch3',
      titre: '3. Les Droits des Personnes Concernées & Procédures d’Exercice',
      dureeEstimeeMin: 45,
      description: 'Droit d’accès (Art. 15), droit de rectification (Art. 16), droit à l’effacement / droit à l’oubli (Art. 17), droit à la limitation, droit à la portabilité (format structuré JSON/CSV), droit d’opposition.',
      pointsCles: [
        'Droit d\'accès (Art. 15) : obtenir une copie intégrale des données traitées',
        'Droit à l\'effacement / Droit à l\'oubli (Art. 17) : suppression sous réserve des obligations légales de conservation',
        'Délai légal de réponse : 1 mois calendaire maximum (prorogeable de 2 mois si demande complexe)',
        'Gratuité absolue de l\'exercice des droits pour l\'usager',
        'Procédure de vérification d\'identité préalable pour éviter les usurpations'
      ],
      formuleCle: '\\text{Délai de Réponse Légal} = \\text{30 jours calendaires maximum à compter de la réception de la demande}',
      conseilProfesseur: 'Si un client demande la suppression complète de ses données mais qu\'il a passé une commande, vous devez anonymiser son compte marketing mais CONSERVER ses factures pendant 10 ans en base d\'archivage intermédiaire (obligation légale fiscale).',
      astuceTerrain: 'Mettez en place une adresse email dédiée accessible (ex: dpo@entreprise.com) et un bouton d\'export automatique de données dans l\'espace client.',
      contenuHtml: `
        <h3>3.1 Les 6 Droits Fondamentaux des Citoyens sous le RGPD</h3>
        <p>Le RGPD confère aux personnes un contrôle souverain sur l'usage de leurs données personnelles.</p>
      `,
      exercices: [
        {
          id: 'comp_ch3_ex1',
          type: TypeQuestion.QCM,
          question: "Dans quel délai maximal le Responsable de Traitement doit-il répondre à une personne exerçant son droit d'accès ou d'effacement sous le RGPD ?",
          reponsesPossibles: ['1 mois maximum', '6 mois', '24 heures', '1 an'],
          reponsesCorrectes: [0],
          explication: "Le responsable de traitement a l'obligation légale de répondre dans un délai d'un mois à compter de la réception de la demande.",
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        }
      ]
    },
    {
      id: 'comp_ch4',
      titre: '4. Tenue du Registre des Activités de Traitement (Article 30)',
      dureeEstimeeMin: 45,
      description: 'Contenu obligatoire du registre : nom/coordonnées du RT et DPO, finalités, catégories de personnes, catégories de données, destinataires, transferts hors UE, durées de conservation, description générale des mesures de sécurité.',
      pointsCles: [
        'Document obligatoire selon l\'Article 30 du RGPD pour cartographier tous les traitements',
        'Champs obligatoires par fiche de traitement : Finalité, Base légale, Personnes ciblées, Catégories de données, Destinataires, Transferts hors UE, Durée de conservation, Mesures de sécurité',
        'Document n°1 demandé en cas de contrôle sur pièces ou sur place par la CNIL',
        'Distinction entre le Registre du Responsable de Traitement (RT) et le Registre du Sous-Traitant'
      ],
      formuleCle: '\\text{Article 30 RGPD} : \\text{Cartographie Vivante et Exhaustive de Tous les Traitements de Données}',
      conseilProfesseur: 'Le registre de traitement n\'est pas un document figé dans un tiroir : il doit vivre au rythme des nouveaux outils logiciels et processus métiers adoptés par l\'entreprise.',
      astuceTerrain: 'Utilisez la trame de registre simplifiée fournie par la CNIL au format tableur ou un outil SaaS dédié pour faciliter les mises à jour collaboratives.',
      contenuHtml: `
        <h3>4.1 Structure Normalisée d'une Fiche de Traitement au Registre Art. 30</h3>
        <div class="bg-slate-900 text-slate-100 p-4 rounded-lg my-4 font-mono text-sm overflow-x-auto">
          <pre>FICHE DE TRAITEMENT N° 04 : "Gestion de la Paie & Ressources Humaines"
-----------------------------------------------------------------------
1. Responsable de Traitement : SAS DO IT LEARNING (DPO: dpo@doit.edu)
2. Finalité Principale       : Calcul des salaires et déclarations sociales
3. Base Légale               : Obligation légale (Code du travail) + Contrat
4. Catégories de Données     : Identité, NIR (N° Sécu), RIB, Salaire, Congés
5. Catégories de Personnes   : Salariés en CDI/CDD et stagiaires
6. Destinataires             : Service RH, URSSAF, Expert-comptable, Banque
7. Durée de Conservation     : 5 ans après départ du salarié (Bulletins 50 ans)
8. Mesures de Sécurité       : Chiffrement base de données, 2FA, cloisonnement</pre>
        </div>
      `,
      exercices: [
        {
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
        }
      ]
    },
    {
      id: 'comp_ch5',
      titre: '5. Analyse d’Impact sur la Protection des Données (AIPD / PIA - Art. 35)',
      dureeEstimeeMin: 45,
      description: 'Critères du G29/CEPD rendant l’AIPD obligatoire (profilage à grande échelle, données sensibles, surveillance systématique, personnes vulnérables), évaluation de la proportionnalité, des risques pour la vie privée et mesures de remédiation.',
      pointsCles: [
        'AIPD (Data Protection Impact Assessment - DPIA) obligatoire dès qu\'un traitement engendre un risque élevé (Art. 35)',
        'Les 9 critères CEPD (Obligatoire si au moins 2 critères sont réunis : données de santé, profilage, géolocalisation continue, surveillance de masse, mineurs, etc.)',
        'Logiciel PIA open source développé par la CNIL',
        'Évaluation de la Gravité et de la Vraisemblance des menaces de fuite ou de détournement'
      ],
      formuleCle: '\\text{AIPD Requise} \\iff \\sum \\text{Critères CEPD} \\ge 2 \\quad \\text{ou Inscription sur la liste obligatoire CNIL}',
      conseilProfesseur: 'Si après avoir mis en place toutes les mesures de remédiation, le risque résiduel reste "Élevé", vous devez obligatoirement consulter la CNIL avant de lancer le traitement (Article 36).',
      astuceTerrain: 'Intégrez la démarche AIPD dès la phase de conception du logiciel (Privacy by Design) plutôt que de devoir refondre l\'architecture logicielle après coup.',
      contenuHtml: `
        <h3>5.1 Méthodologie en 4 Étapes d'une AIPD</h3>
        <ol class="list-decimal pl-6 space-y-1 text-sm my-3">
          <li><strong>Description détaillée du traitement :</strong> Flux de données, sous-traitants, protocoles.</li>
          <li><strong>Évaluation de la nécessité et proportionnalité :</strong> Vérification de la minimisation des données.</li>
          <li><strong>Appréciation des risques pour les droits et libertés :</strong> Analyse de l'impact d'un accès illégitime ou d'une perte.</li>
          <li><strong>Mesures techniques et juridiques d'atténuation :</strong> Chiffrement, pseudonymisation, journalisation.</li>
        </ol>
      `,
      exercices: [
        {
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
        }
      ]
    },
    {
      id: 'comp_ch6',
      titre: '6. Rôle du Délégué à la Protection des Données (DPO / DPO Externalisé)',
      dureeEstimeeMin: 40,
      description: 'Désignation obligatoire (organismes publics, suivi régulier et systématique à grande échelle, données sensibles), indépendance statutaire, absence de conflit d’intérêts, missions d’information, de conseil et d’audit.',
      pointsCles: [
        'Désignation obligatoire dans 3 cas : Secteur public, Traitement à grande échelle nécessitant un suivi régulier, Traitement de données sensibles/infractions à grande échelle',
        'Indépendance statutaire garantie par le RGPD (ne peut être sanctionné pour l\'exercice de ses missions de DPO)',
        'Interdiction absolue des conflits d\'intérêts (le DSI, le Directeur Marketing ou le DG ne peuvent pas être DPO)',
        'Rôle : Chef d\'orchestre de la conformité, conseiller de la direction et interlocuteur officiel de la CNIL'
      ],
      formuleCle: '\\text{Statut DPO} : \\text{Indépendance absolue} + \\text{Rattachement au plus haut niveau de direction (Comex)}',
      conseilProfesseur: 'Le DPO a un rôle de conseil et d\'alerte : la responsabilité légale finale de la conformité incombe toujours au représentant légal (le dirigeant de l\'entreprise).',
      astuceTerrain: 'Pour les PME, le recours à un DPO externalisé (Cabinet juridique / Expert certifié) offre une conformité optimale sans alourdir la masse salariale fixe.',
      contenuHtml: `
        <h3>6.1 Missions Clés du Délégué à la Protection des Données (DPO)</h3>
        <p>Le DPO informe, conseille le responsable de traitement, contrôle le respect du RGPD et coopère avec l'autorité de contrôle.</p>
      `,
      exercices: [
        {
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
        }
      ]
    },
    {
      id: 'comp_ch7',
      titre: '7. Sécurité des Données, Chiffrement & Transferts Hors Union Européenne',
      dureeEstimeeMin: 45,
      description: 'Mesures techniques et organisationnelles (chiffrement AES-256, pseudonymisation, gestion stricte des accès, sauvegardes), transferts hors EEE, Clauses Contractuelles Types (CCT / SCC) et Data Privacy Framework UE-USA.',
      pointsCles: [
        'Mesures techniques de pointe : Chiffrement des données au repos (AES-256) et en transit (TLS 1.3), hachage salé des mots de passe (Argon2 / Bcrypt)',
        'Transferts hors Espace Économique Européen (EEE) : Décision d\'adéquation de la Commission OU Clauses Contractuelles Types (CCT / SCC)',
        'Cadre transatlantique : EU-US Data Privacy Framework (2023)',
        'Transfer Impact Assessment (TIA) : analyse obligatoire de la législation du pays de destination face aux risques de surveillance étatique'
      ],
      formuleCle: '\\text{Sécurité RGPD} = \\text{Chiffrement AES-256} + \\text{Double Authentification (2FA)} + \\text{Sauvegardes Hors-Ligne 3-2-1}',
      conseilProfesseur: 'Exigez de tous vos sous-traitants cloud (AWS, Azure, Google Cloud, OVH) la localisation physique exclusive de vos serveurs et sauvegardes sur le territoire de l\'Union Européenne.',
      astuceTerrain: 'Révisez et faites signer un Accord de Traitement des Données (DPA - Data Processing Agreement) conforme à l\'article 28 avec chacun de vos prestataires logiciels.',
      contenuHtml: `
        <h3>7.1 Encadrement Juridique des Transferts de Données Transfrontaliers</h3>
        <table class="w-full border-collapse my-4 text-sm border border-slate-300 dark:border-slate-700">
          <thead>
            <tr class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100">
              <th class="border p-2">Pays de Destination</th>
              <th class="border p-2">Régime Juridique</th>
              <th class="border p-2">Formalités Requises</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border p-2 font-bold">Union Européenne (27 pays + EEE)</td><td class="border p-2 text-emerald-600 font-bold">Libre circulation totale</td><td class="border p-2">Aucune formalité transfrontalière</td></tr>
            <tr><td class="border p-2 font-bold">Pays avec Décision d'Adéquation (UK, Suisse, Japon, Canada)</td><td class="border p-2 text-emerald-600 font-bold">Adéquation validée</td><td class="border p-2">Assimilation à l'espace UE</td></tr>
            <tr><td class="border p-2 font-bold">États-Unis (Sociétés certifiées DPF)</td><td class="border p-2 text-blue-600 font-bold">EU-US Data Privacy Framework</td><td class="border p-2">Vérification de la certification active</td></tr>
            <tr><td class="border p-2 font-bold">Autres pays tiers (Inde, Chine, etc.)</td><td class="border p-2 text-rose-600 font-bold">Encadrement strict</td><td class="border p-2">Signature des CCT + Réalisation d'une TIA</td></tr>
          </tbody>
        </table>
      `,
      exercices: [
        {
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
        }
      ]
    },
    {
      id: 'comp_ch8',
      titre: '8. Loi Sapin II : Le Dispositif Français de Prévention de la Corruption',
      dureeEstimeeMin: 45,
      description: 'Champ d’application (> 500 salariés et CA > 100 M€), rôle de l’Agence Française Anticorruption (AFA), sanctions de la Commission des sanctions de l’AFA et convention judiciaire d’intérêt public (CJIP).',
      pointsCles: [
        'Loi Sapin II du 9 décembre 2016 : alignement de la France sur les plus hauts standards mondiaux (FCPA américain, UK Bribery Act)',
        'Seuils d\'assujettissement à l\'Article 17 : Entreprises de +500 salariés et CA > 100 millions d\'euros',
        'Création de l\'AFA (Agence Française Anticorruption) pour contrôler la mise en œuvre des programmes de conformité',
        'Convention Judiciaire d\'Intérêt Public (CJIP) : mécanisme transactionnel permettant d\'éviter un procès public contre le paiement d\'une amende d\'intérêt public'
      ],
      formuleCle: '\\text{Seuils Sapin II Art. 17} : \\text{Effectif} \\ge 500 \\text{ salariés} \\quad \\text{ET} \\quad \\text{Chiffre d\'Affaires} > 100\\text{ M€}',
      conseilProfesseur: 'Même si votre PME n\'atteint pas les seuils de 500 salariés, vos grands donneurs d\'ordres assujettis exigeront que vous respectiez leurs chartes éthiques et anticorruption pour être référencé comme fournisseur.',
      astuceTerrain: 'Préparez votre dossier de conformité AFA avec un classeur de preuves structuré selon les 8 piliers pour répondre avec sérénité à tout contrôle inopiné.',
      contenuHtml: `
        <h3>8.1 Les Pouvoirs de Contrôle et Sanctions de l'AFA</h3>
        <p>L'Agence Française Anticorruption effectue des contrôles sur pièces et sur place avec pouvoir d'audition des dirigeants et collaborateurs.</p>
      `,
      exercices: [
        {
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
        }
      ]
    },
    {
      id: 'comp_ch9',
      titre: '9. Les 8 Piliers Anticorruption de la Loi Sapin II',
      dureeEstimeeMin: 50,
      description: '1. Code de conduite, 2. Dispositif d’alerte interne, 3. Cartographie des risques de corruption, 4. Évaluation des tiers (KYS), 5. Contrôles comptables, 6. Formations des personnels exposés, 7. Régime disciplinaire, 8. Contrôle et évaluation interne.',
      pointsCles: [
        '1. Code de conduite anticorruption intégré au règlement intérieur',
        '2. Dispositif d\'alerte éthique interne sécurisé',
        '3. Cartographie des risques de corruption (Scénarios de risques, clé de voûte du programme)',
        '4. Procédures d\'évaluation des tiers (clients, fournisseurs de premier rang, intermédiaires KYS)',
        '5. Procédures de contrôles comptables internes et externes',
        '6. Formations obligatoires des personnels les plus exposés (Achats, Ventes, Direction)',
        '7. Régime disciplinaire sanctionnant les manquements au code',
        '8. Dispositif de contrôle et d\'évaluation interne de l\'efficacité du programme'
      ],
      formuleCle: '\\text{Programme Sapin II} = \\sum_{i=1}^{8} \\text{Pilier}_i \\quad (\\text{Indivisibilité du Référentiel AFA})',
      conseilProfesseur: 'La cartographie des risques doit être révisée périodiquement (tous les 2 à 3 ans ou lors d\'une expansion géographique/acquisition d\'entreprise).',
      astuceTerrain: 'Intégrez dans le code de conduite des seuils précis et clairs pour les cadeaux et invitations (ex: interdiction absolue au-delà de 75 € sans accord écrit préalable de la direction).',
      contenuHtml: `
        <h3>9.1 Vue d'Ensemble des 8 Piliers du Référentiel AFA</h3>
        <ol class="list-decimal pl-6 space-y-1 text-sm my-3">
          <li><strong>Code de Conduite :</strong> Illustré d'exemples concrets de corruption, trafic d'influence, cadeaux et conflits d'intérêts.</li>
          <li><strong>Ligne d'Alerte :</strong> Canal anonyme et sécurisé de recueil des signalements.</li>
          <li><strong>Cartographie des Risques :</strong> Identification des processus métiers exposés.</li>
          <li><strong>Évaluation des Tiers (KYS) :</strong> Due diligence avant signature de contrats.</li>
          <li><strong>Contrôles Comptables :</strong> Détection des doubles facturations, comptes de passage et fausses commissions.</li>
          <li><strong>Formation :</strong> Modules immersifs pour les équipes achats et commerciales.</li>
          <li><strong>Régime Disciplinaire :</strong> Sanctions graduées inscrites au règlement intérieur.</li>
          <li><strong>Contrôle Interne :</strong> Audits de 1er, 2e et 3e niveau pour tester la robustesse du dispositif.</li>
        </ol>
      `,
      exercices: [
        {
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
        }
      ]
    },
    {
      id: 'comp_ch10',
      titre: '10. Évaluation et Due Diligence des Tiers (Know Your Supplier / Partner - KYS)',
      dureeEstimeeMin: 45,
      description: 'Niveaux de diligence gradués selon le profil de risque, identification des Bénéficiaires Effectifs (UBO / RBE), criblage sur les listes de sanctions et Personnes Politiquement Exposées (PPE), clauses contractuelles anticorruption et audits tiers.',
      pointsCles: [
        'Responsabilité pénale de l\'entreprise engagée par les agissements de ses consultants ou intermédiaires commerciaux',
        'Identification obligatoire de l\'UBO (Ultimate Beneficial Owner / Bénéficiaire Effectif Ultime détenant > 25% du capital)',
        'Criblage sur les listes de sanctions internationales (OFAC, UE) et détection des Personnes Politiquement Exposées (PPE)',
        'Insertion systématique de clauses contractuelles d\'audit et de résiliation immédiate pour manquement éthique'
      ],
      formuleCle: '\\text{Due Diligence Tiers} : \\text{Scoring Risque} + \\text{Vérification UBO} + \\text{Criblage Sanctions} + \\text{Clause Anticorruption}',
      conseilProfesseur: 'Redoublez de vigilance avec les intermédiaires commerciaux locaux (agents à la commission) dans les pays à fort indice de perception de la corruption (Transparency International CPI < 40).',
      astuceTerrain: 'Mettez en place un questionnaire KYS standardisé intégré à votre système ERP avant tout référencement de nouveau fournisseur dans la comptabilité.',
      contenuHtml: `
        <h3>10.1 Niveaux de Diligence Gradués (KYS)</h3>
        <p>L'intensité des investigations s'adapte à la criticité du contrat et au profil de risque pays/secteur du partenaire.</p>
      `,
      exercices: [
        {
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
        }
      ]
    },
    {
      id: 'comp_ch11',
      titre: '11. Protection des Lanceurs d’Alerte (Loi Waserman & Directive UE 2019/1937)',
      dureeEstimeeMin: 45,
      description: 'Définition du lanceur d’alerte (personne physique signalant de bonne foi sans contrepartie financière), canaux de signalement sécurisés et confidentiels, interdiction absolue des mesures de représailles (licenciement, mise au placard) et sanctions pénales contre les entraves.',
      pointsCles: [
        'Loi Waserman du 21 mars 2022 transposant la Directive européenne 2019/1937',
        'Définition légale : personne physique signalant sans contrepartie financière directe et de bonne foi des faits illicites ou contraires à l\'intérêt général',
        'Fin de la hiérarchie stricte des canaux : le lanceur d\'alerte peut saisir directement le canal interne OU externe (Défenseur des droits, justice)',
        'Interdiction absolue de toute mesure de représailles (licenciement, rétrogradation, harcèlement, rupture de contrat)',
        'Immunité civile et pénale pour violation du secret des affaires'
      ],
      formuleCle: '\\text{Loi Waserman 2022} : \\text{Garantie de Confidentialité Absolue} + \\text{Nullité de Plein Droit de Toute Représaille}',
      conseilProfesseur: 'Une alerte éthique bien traitée en interne évite un scandale médiatique dévastateur ou une perquisition judiciaire.',
      astuceTerrain: 'Utilisez une plateforme SaaS sécurisée avec chiffrement de bout en bout qui permet de dialoguer anonymement avec le lanceur d\'alerte pour recueillir des preuves complémentaires.',
      contenuHtml: `
        <h3>11.1 Procédure de Traitement d'un Signalement d'Alerte Éthique</h3>
        <ol class="list-decimal pl-6 space-y-1 text-sm my-3">
          <li><strong>Accusé de réception :</strong> Émis au lanceur d'alerte sous 7 jours ouvrés.</li>
          <li><strong>Examen de recevabilité :</strong> Vérification que les faits entrent dans le champ de la loi.</li>
          <li><strong>Enquête interne confidentielle :</strong> Audition et analyse des pièces par le comité d'éthique.</li>
          <li><strong>Retour d'information :</strong> Communication des mesures prises sous un délai maximal de 3 mois.</li>
        </ol>
      `,
      exercices: [
        {
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
        }
      ]
    },
    {
      id: 'comp_ch12',
      titre: '12. Loi sur le Devoir de Vigilance des Sociétés Mères (Loi 2017 & Directive CS3D)',
      dureeEstimeeMin: 45,
      description: 'Obligation pour les grandes entreprises (+ 5 000 salariés en France ou 10 000 dans le monde) d’établir un Plan de Vigilance : droits humains, libertés fondamentales, santé/sécurité et environnement sur l’ensemble de la chaîne de valeur (fournisseurs et sous-traitants).',
      pointsCles: [
        'Loi pionnière française de 2017 étendue au niveau européen par la Directive CS3D (Corporate Sustainability Due Diligence)',
        'Champ d\'application : Grandes entreprises multinationales',
        'Périmètre étendu : activités propres, filiales, sous-traitants et fournisseurs établis dans le monde entier avec relation commerciale établie',
        'Les 5 volets obligatoires : Cartographie des risques, Procédures d\'évaluation régulière, Actions d\'atténuation/prévention, Dispositif d\'alerte, Suivi des mesures'
      ],
      formuleCle: '\\text{Plan de Vigilance} = \\text{Droits Humains} + \\text{Santé & Sécurité au Travail} + \\text{Protection de l\'Environnement}',
      conseilProfesseur: 'La responsabilité civile de l\'entreprise peut être engagée par des ONG ou victimes en cas de manquement grave à la mise en œuvre effective de son plan de vigilance.',
      astuceTerrain: 'Exigez des audits sociaux inopinés sur les sites de production de vos sous-traitants à l\'étranger (normes SMETA, SA8000).',
      contenuHtml: `
        <h3>12.1 Les 5 Composantes Obligatoires du Plan de Vigilance</h3>
        <p>Le plan doit être publié chaque année dans le rapport de gestion annuel de l'entreprise.</p>
      `,
      exercices: [
        {
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
        }
      ]
    },
    {
      id: 'comp_ch13',
      titre: '13. Sanctions Internationales, Embargos & Risque d’Extraterritorialité (OFAC & UE)',
      dureeEstimeeMin: 50,
      description: 'Régimes de sanctions financières de l’ONU, de l’Union Européenne et sanctions unilatérales américaines (OFAC / SDN List), extraterritorialité du droit américain (utilisation du dollar USD, serveurs US, composants US > 25%), embargos totaux et sectoriels.',
      pointsCles: [
        'OFAC (Office of Foreign Assets Control du Trésor US) et liste SDN (Specially Designated Nationals)',
        'Extraterritorialité américaine (US Nexus) : transaction en Dollars USD, utilisation de serveurs ou composants d\'origine américaine',
        'Régime des sanctions européennes (Règlements UE directement applicables)',
        'Contrôle des exportations (Export Control) et biens à double usage (civil et militaire)'
      ],
      formuleCle: '\\text{Risque OFAC} \\iff \\text{Transaction en USD} \\quad \\vee \\quad \\text{Composants US} \\ge 25\\% \\quad \\vee \\quad \\text{Personne US impliquée}',
      conseilProfesseur: 'Une violation de sanctions OFAC peut entraîner le bannissement complet du système financier international et des amendes records de plusieurs milliards de dollars.',
      astuceTerrain: 'Criblez automatiquement chaque partie prenante (acheteur, destinataire final, banques de transit, transporteur maritime) avant d\'expédier toute marchandise sensible.',
      contenuHtml: `
        <h3>13.1 Typologie des Sanctions Économiques Internationales</h3>
        <table class="w-full border-collapse my-4 text-sm border border-slate-300 dark:border-slate-700">
          <thead>
            <tr class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100">
              <th class="border p-2">Type de Sanction</th>
              <th class="border p-2">Portée & Mécanisme</th>
              <th class="border p-2">Exemples Typiques</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border p-2 font-bold">Embargo Global / Géographique</td><td class="border p-2">Interdiction totale de commerce avec un pays</td><td class="border p-2">Corée du Nord, Cuba, Iran (OFAC)</td></tr>
            <tr><td class="border p-2 font-bold">Sanctions Ciblées (Listes SDN)</td><td class="border p-2">Gel des avoirs et interdiction de transaction avec des individus/entités</td><td class="border p-2">Oligarques, groupes terroristes</td></tr>
            <tr><td class="border p-2 font-bold">Sanctions Sectorielles</td><td class="border p-2">Restrictions ciblées sur des secteurs clés (Énergie, Défense, Semi-conducteurs)</td><td class="border p-2">Technologies avancées, finance</td></tr>
          </tbody>
        </table>
      `,
      exercices: [
        {
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
        }
      ]
    },
    {
      id: 'comp_ch14',
      titre: '14. Prévention du Blanchiment de Capitaux & Financement du Terrorisme (LCB-FT)',
      dureeEstimeeMin: 45,
      description: 'Les 3 phases du blanchiment (Placement / Prélavage, Empilage / Dissimulation, Intégration / Réinvestissement), obligations de vigilance des professionnels assujettis (banques, experts-comptables, notaires), et Déclaration de Soupçon à TRACFIN.',
      pointsCles: [
        'Les 3 étapes du blanchiment : 1. Placement (injection de cash), 2. Empilage / Layering (brouillage par transactions complexes en chaîne), 3. Intégration (achat d\'actifs légitimes)',
        'Obligation de vigilance KYC (Know Your Customer) pour les professionnels assujettis (Art. L561-2 CMF)',
        'Déclaration de Soupçon obligatoire et strictement confidentielle à TRACFIN',
        'Interdiction absolue de révéler au client qu\'une déclaration TRACFIN a été effectuée (Infraction de "Tipping-Off")'
      ],
      formuleCle: '\\text{Cycle LCB-FT} : \\text{Placement (Cash)} \\longrightarrow \\text{Empilage (Virements Écrans)} \\longrightarrow \\text{Intégration (Immobilier/Luxe)}',
      conseilProfesseur: 'La déclaration de soupçon à TRACFIN exonère de toute poursuite pour violation du secret professionnel et protège l\'entreprise de bonne foi.',
      astuceTerrain: 'Surveillez les signaux faibles : client refusant d\'indiquer l\'origine des fonds, paiements fractionnés répétitifs ou transit par des paradis fiscaux non coopératifs.',
      contenuHtml: `
        <h3>14.1 Les 3 Étapes du Blanchiment d'Argent Sale</h3>
        <ol class="list-decimal pl-6 space-y-1 text-sm my-3">
          <li><strong>Placement (Prélavage) :</strong> Introduction des fonds issus d'activités illégales dans le circuit financier régulier.</li>
          <li><strong>Empilage (Dissimulation / Layering) :</strong> Multiplication d'opérations bancaires internationales fictives pour brouiller la piste.</li>
          <li><strong>Intégration (Recyclage) :</strong> Réinvestissement des fonds blanchis dans l'économie réelle (entreprises, immobilier, hôtellerie).</li>
        </ol>
      `,
      exercices: [
        {
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
        }
      ]
    },
    {
      id: 'comp_ch15',
      titre: '15. Audits de Conformité, Enquêtes Internes & Gestion d’une Perquisition / Contrôle',
      dureeEstimeeMin: 50,
      description: 'Conduite d’une enquête interne indépendante (préservation des preuves numériques, entretiens d’investigation, secret professionnel / legal privilege), préparation aux visites inopinées (Dawn Raids de la DGCCRF ou de la Commission européenne) et protocole d’accueil.',
      pointsCles: [
        'Gestion des visites inopinées (Dawn Raids de l\'Autorité de la Concurrence, CNIL, AFA, DGCCRF)',
        'Protocole d\'accueil réflexe : Vérification des mandats et ordonnances judiciaires, alerte immédiate de la direction juridique et des avocats',
        'Accompagnement constant des enquêteurs : Ne jamais faire obstruction ni détruire de documents (délit d\'entrave)',
        'Legal Privilege : protection de la confidentialité des échanges entre l\'entreprise et ses avocats externes'
      ],
      formuleCle: '\\text{Protocole Dawn Raid} : \\text{Vérifier Mandats} + \\text{Alerter Avocats} + \\text{Accompagner 1 pour 1} + \\text{Copie Miroir des Saisies}',
      conseilProfesseur: 'Désignez toujours un collaborateur accompagnateur par inspecteur : notez méticuleusement chaque question posée et conservez une copie exacte de tout document ou disque dur saisi.',
      astuceTerrain: 'Sensibilisez le personnel d\'accueil avec une fiche réflexe plastifiée en cas d\'arrivée inopinée des forces de l\'ordre ou régulateurs.',
      contenuHtml: `
        <h3>15.1 Fiche Réflexe en Cas de Perquisition Inopinée (Dawn Raid)</h3>
        <div class="bg-slate-900 text-slate-100 p-4 rounded-lg my-4 font-mono text-sm overflow-x-auto">
          <pre>1. Accueil & Contrôle :
   - Demander la carte professionnelle et l'ordonnance du juge des libertés (JLD)
   - Installer les enquêteurs dans une salle de réunion isolée

2. Alerte Immédiate :
   - Contacter le Directeur Juridique, le Directeur Général et l'Avocat désigné

3. Pendant la visite :
   - Assigner un membre du service juridique à chaque inspecteur
   - Refuser l'accès aux courriers protégés "Confidentiel Avocat" (Legal Privilege)
   - Ne JAMAIS détruire, masquer ou modifier de fichiers informatiques

4. À la clôture :
   - Relire attentivement le procès-verbal d'inventaire avant signature
   - Conserver un double complet de tous les scellés et fichiers copiés</pre>
        </div>
      `,
      exercices: [
        {
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
        }
      ]
    }
  ]
};
