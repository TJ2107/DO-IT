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
      pointsCles: [
        'Principe fondamental de la Partie Double : toute ressource (Crédit) correspond à un emploi (Débit)',
        'Égalité obligatoire pour chaque écriture : $\\sum \\text{Débit} = \\sum \\text{Crédit}$',
        'Les 7 grands principes comptables : Continuité d\'exploitation, Indépendance des exercices, Prudence, Permanence des méthodes, Coût historique, Non-compensation, Bonne information',
        'Objectif légal : donner une image fidèle et sincère de la situation patrimoniale et financière'
      ],
      formuleCle: '\\sum \\text{Montants au Débit} = \\sum \\text{Montants au Crédit} \\quad (\\text{Équilibre Universel de la Partie Double})',
      conseilProfesseur: 'Pour ne jamais vous tromper de sens d\'écriture : demandez-vous d\'abord "D\'où vient la ressource financière ?" (au Crédit), puis "Où cet argent est-il employé ?" (au Débit).',
      astuceTerrain: 'Dans les comptes de bilan : l\'Actif augmente au Débit et diminue au Crédit ; le Passif augmente au Crédit et diminue au Débit.',
      contenuHtml: `
        <h3>1.1 Le Mécanisme de la Partie Double</h3>
        <p>Toute transaction financière ou matérielle implique un flux d'origine (Ressource) et un flux de destination (Emploi) :</p>
        <div class="bg-slate-900 text-slate-100 p-4 rounded-lg my-4 font-mono text-sm overflow-x-auto">
          <pre>Exemple : Achat de fournitures pour 500 € payé par chèque bancaire
-----------------------------------------------------------------
N° Compte | Intitulé Compte               | Débit (€) | Crédit (€)
-----------------------------------------------------------------
6064      | Fournitures administratives   |    500.00 |           
512       | Banque                        |           |    500.00
-----------------------------------------------------------------
Total                                     |    500.00 |    500.00</pre>
        </div>
      `,
      exercices: [
        {
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
        }
      ]
    },
    {
      id: 'compta_ch2',
      titre: '2. Le Plan Comptable Général (PCG) & les 7 Classes de Comptes',
      dureeEstimeeMin: 40,
      description: 'Comptes de Bilan (Classe 1 : Capitaux, Classe 2 : Immobilisations, Classe 3 : Stocks, Classe 4 : Tiers, Classe 5 : Financiers) et Comptes de Résultat (Classe 6 : Charges, Classe 7 : Produits).',
      pointsCles: [
        'Classes 1 à 5 : Comptes de Bilan (patrimoine durable et circulant)',
        'Classes 6 et 7 : Comptes de Gestion / Résultat (activité de l\'exercice)',
        'Classe 1 : Capitaux propres et emprunts durables | Classe 2 : Immobilisations',
        'Classe 3 : Stocks et en-cours | Classe 4 : Tiers (Fournisseurs 401, Clients 411, État 44)',
        'Classe 5 : Financiers (Banque 512, Caisse 530) | Classe 6 : Charges | Classe 7 : Produits'
      ],
      formuleCle: '\\text{Comptes de Bilan (1 à 5)} \\quad \\Longleftrightarrow \\quad \\text{Comptes de Résultat (6 = Charges, 7 = Produits)}',
      conseilProfesseur: 'La numérotation est décimale : plus le numéro de compte a de chiffres, plus le niveau de détail est précis (ex: 60 = Achats, 601 = Achats stockés de matières premières).',
      astuceTerrain: 'Apprenez par cœur les codes réflexes du quotidien : 411 (Clients), 401 (Fournisseurs), 512 (Banque), 607 (Achats marchandises), 707 (Ventes marchandises).',
      contenuHtml: `
        <h3>2.1 Les 7 Classes du Plan Comptable Général</h3>
        <table class="w-full border-collapse my-4 text-sm border border-slate-300 dark:border-slate-700">
          <thead>
            <tr class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100">
              <th class="border p-2">Classe</th>
              <th class="border p-2">Intitulé</th>
              <th class="border p-2">Nature & Destination</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border p-2 font-bold">Classe 1</td><td class="border p-2">Comptes de capitaux</td><td class="border p-2">Passif du Bilan (Fonds propres, emprunts)</td></tr>
            <tr><td class="border p-2 font-bold">Classe 2</td><td class="border p-2">Comptes d'immobilisations</td><td class="border p-2">Actif du Bilan (Machines, brevets, véhicules)</td></tr>
            <tr><td class="border p-2 font-bold">Classe 3</td><td class="border p-2">Comptes de stocks</td><td class="border p-2">Actif du Bilan (Matières premières, marchandises)</td></tr>
            <tr><td class="border p-2 font-bold">Classe 4</td><td class="border p-2">Comptes de tiers</td><td class="border p-2">Bilan (Créances clients, dettes fournisseurs/fiscales)</td></tr>
            <tr><td class="border p-2 font-bold">Classe 5</td><td class="border p-2">Comptes financiers</td><td class="border p-2">Bilan (Banque, caisse, valeurs mobilières)</td></tr>
            <tr><td class="border p-2 font-bold text-rose-600">Classe 6</td><td class="border p-2">Comptes de charges</td><td class="border p-2">Compte de Résultat (Achats, salaires, énergie)</td></tr>
            <tr><td class="border p-2 font-bold text-emerald-600">Classe 7</td><td class="border p-2">Comptes de produits</td><td class="border p-2">Compte de Résultat (Ventes, prestations, intérêts)</td></tr>
          </tbody>
        </table>
      `,
      exercices: [
        {
          id: 'compta_ch2_ex1',
          type: TypeQuestion.QCM,
          question: "Dans quelle classe du Plan Comptable Général (PCG) enregistre-t-on les 'Comptes de Charges' (ex: achats de marchandises, salaires, électricité) ?",
          reponsesPossibles: ['Classe 6', 'Classe 7', 'Classe 1', 'Classe 5'],
          reponsesCorrectes: [0],
          explication: "La classe 6 regroupe exhaustivement l'ensemble des charges d'exploitation, financières et exceptionnelles.",
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        }
      ]
    },
    {
      id: 'compta_ch3',
      titre: '3. Enregistrement des Achats, Ventes & Mécanisme de la TVA',
      dureeEstimeeMin: 45,
      description: 'Factures de "Doit" et d’"Avoir", remises commerciales et escomptes de règlement, TVA collectée (compte 44571), TVA déductible sur ABS (44566) et sur immobilisations (44562), déclaration de TVA à décaisser (44551).',
      pointsCles: [
        'La TVA est un impôt indirect neutre pour l\'entreprise (collectrice pour l\'État)',
        'TVA Collectée (44571 au Crédit lors des ventes) - TVA Déductible (44566 au Débit lors des achats)',
        'TVA à décaisser (44551 au Crédit) si Collectée > Déductible ; Crédit de TVA (44567 au Débit) dans le cas inverse',
        'Réductions commerciales (Rabais, Remise, Ristourne) déduites directement du Net Commercial',
        'Escompte financier de règlement (compte 665 / 765)'
      ],
      formuleCle: '\\text{TVA à Décaisser} = \\text{TVA Collectée sur Ventes (44571)} - \\text{TVA Déductible sur Achats/Immos (44566/44562)}',
      conseilProfesseur: 'N\'enregistrez jamais la TVA dans les comptes de charges ou de produits : les montants d\'achats (classe 6) et de ventes (classe 7) s\'enregistrent TOUJOURS en HORS TAXES (HT).',
      astuceTerrain: 'Pour passer du montant Hors Taxe (HT) au TTC avec une TVA à 20% : $TTC = HT \\times 1.20$. Pour retrouver le HT à partir du TTC : $HT = \\frac{TTC}{1.20}$.',
      contenuHtml: `
        <h3>3.1 Comptabilisation d'une Facture de Vente avec TVA (20%)</h3>
        <div class="bg-slate-900 text-slate-100 p-4 rounded-lg my-4 font-mono text-sm overflow-x-auto">
          <pre>Vente de marchandises : 10 000 € HT, TVA 20% = 2 000 €, TTC = 12 000 €
-----------------------------------------------------------------------
N° Compte | Intitulé Compte             | Débit (€)   | Crédit (€)
-----------------------------------------------------------------------
411       | Clients (TTC)               |   12 000.00 |            
707       | Ventes de marchandises (HT) |             |   10 000.00
44571     | TVA collectée               |             |    2 000.00
-----------------------------------------------------------------------
Total                                   |   12 000.00 |   12 000.00</pre>
        </div>
      `,
      exercices: [
        {
          id: 'compta_ch3_ex1',
          type: TypeQuestion.CHIFFREE,
          question: "Sur un mois donné, une entreprise a collecté 24 000 € de TVA sur ses ventes et a payé 15 500 € de TVA déductible sur ses achats. Quel est le montant de la TVA à décaisser payable au Trésor Public ?",
          reponsesPossibles: ['8 500 €', '39 500 €', '24 000 €', '0 €'],
          reponsesCorrectes: [0],
          explication: "TVA à décaisser = TVA collectée (24 000 €) - TVA déductible (15 500 €) = 8 500 €.",
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        }
      ]
    },
    {
      id: 'compta_ch4',
      titre: '4. Les Opérations de Trésorerie & l’État de Rapprochement Bancaire',
      dureeEstimeeMin: 40,
      description: 'Compte 512 Banque (inversion comptable par rapport au relevé de la banque), chèques émis non encaissés, virements en suspens, agios et construction rigoureuse du tableau de rapprochement.',
      pointsCles: [
        'Règle du miroir comptable : le solde Débiteur du compte 512 correspond à un solde Créditeur sur le relevé de la banque',
        'Origine des décalages : chèques émis non encore présentés par les fournisseurs, virements reçus non encore saisis, frais bancaires prélevés',
        'Tableau d\'état de rapprochement à 2 colonnes (Compte 512 chez nous vs Relevé chez le banquier)',
        'Objectif : obtenir deux soldes identiques après ajustement et régulariser les écritures omises'
      ],
      formuleCle: '\\text{Solde 512 Rectifié} = \\text{Solde Relevé Bancaire Rectifié} \\quad (\\text{Au centime d\'euro près})',
      conseilProfesseur: 'Effectuez l\'état de rapprochement bancaire chaque mois dès réception du relevé officiel. C\'est le premier outil de détection des fraudes, des erreurs de virement et des doubles prélèvements.',
      astuceTerrain: 'Pointez toujours une opération à la fois en cochant simultanément la ligne sur le grand livre comptable et sur le relevé bancaire papier ou PDF.',
      contenuHtml: `
        <h3>4.1 Structure de l'État de Rapprochement Bancaire</h3>
        <p>Le rapprochement isole les opérations connues d'une seule des deux parties à la date de clôture mensuelle.</p>
      `,
      exercices: [
        {
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
        }
      ]
    },
    {
      id: 'compta_ch5',
      titre: '5. Immobilisations & Calcul des Amortissements (Linéaire & Dégressif)',
      dureeEstimeeMin: 45,
      description: 'Actifs corporels, incorporels et financiers, valeur brute d’origine (VO HT), durée d’utilité, taux d’amortissement t = 100 / n, prorata temporis en jours/mois, et valeur nette comptable (VNC = VO - Cumul amortissements).',
      pointsCles: [
        'L\'amortissement constate la dépréciation irréversible de l\'actif liée au temps et à l\'usure',
        'Charge non décaissée (autofinancement et économie d\'impôt)',
        'Taux linéaire : $t = \\frac{100}{N \\text{ années}}$',
        'Annuité au prorata temporis : $A = VO \\times t \\times \\frac{\\text{Jours d\'utilisation}}{360}$',
        'Valeur Nette Comptable : $VNC = \\text{Valeur d\'Origine (VO)} - \\sum \\text{Amortissements cumulés}$'
      ],
      formuleCle: 'A_{\\text{linéaire}} = VO \\times \\frac{1}{N} \\times \\frac{\\text{Jours}}{360}, \\quad VNC = VO - \\sum A',
      conseilProfesseur: 'La date de départ de l\'amortissement linéaire est la DATE DE MISE EN SERVICE effective du matériel, et non la date de signature de la commande.',
      astuceTerrain: 'En comptabilité française, l\'année commerciale compte conventionnellement 360 jours (12 mois de 30 jours) pour le calcul des proratas d\'amortissements.',
      contenuHtml: `
        <h3>5.1 Tableau d'Amortissement Linéaire (Machine 50 000 € sur 5 ans)</h3>
        <table class="w-full border-collapse my-4 text-sm border border-slate-300 dark:border-slate-700">
          <thead>
            <tr class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100">
              <th class="border p-2">Année</th>
              <th class="border p-2">Base Amortissable (VO)</th>
              <th class="border p-2">Annuité d'Amortissement</th>
              <th class="border p-2">Amortissements Cumulés</th>
              <th class="border p-2">Valeur Nette Comptable (VNC)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border p-2 text-center">N</td><td class="border p-2 text-right">50 000 €</td><td class="border p-2 text-right font-bold">10 000 €</td><td class="border p-2 text-right">10 000 €</td><td class="border p-2 text-right font-bold text-emerald-600">40 000 €</td></tr>
            <tr><td class="border p-2 text-center">N+1</td><td class="border p-2 text-right">50 000 €</td><td class="border p-2 text-right font-bold">10 000 €</td><td class="border p-2 text-right">20 000 €</td><td class="border p-2 text-right font-bold text-emerald-600">30 000 €</td></tr>
            <tr><td class="border p-2 text-center">N+2</td><td class="border p-2 text-right">50 000 €</td><td class="border p-2 text-right font-bold">10 000 €</td><td class="border p-2 text-right">30 000 €</td><td class="border p-2 text-right font-bold text-emerald-600">20 000 €</td></tr>
            <tr><td class="border p-2 text-center">N+3</td><td class="border p-2 text-right">50 000 €</td><td class="border p-2 text-right font-bold">10 000 €</td><td class="border p-2 text-right">40 000 €</td><td class="border p-2 text-right font-bold text-emerald-600">10 000 €</td></tr>
            <tr><td class="border p-2 text-center">N+4</td><td class="border p-2 text-right">50 000 €</td><td class="border p-2 text-right font-bold">10 000 €</td><td class="border p-2 text-right">50 000 €</td><td class="border p-2 text-right font-bold text-emerald-600">0 €</td></tr>
          </tbody>
        </table>
      `,
      exercices: [
        {
          id: 'compta_ch5_ex1',
          type: TypeQuestion.CHIFFREE,
          question: "Une machine achetée 50 000 € HT le 1er janvier est amortie en mode linéaire sur 5 ans (taux = 20%). Quelle est sa Valeur Nette Comptable (VNC) après 3 années pleines d'utilisation ?",
          reponsesPossibles: ['20 000 €', '30 000 €', '10 000 €', '50 000 €'],
          reponsesCorrectes: [0],
          explication: "Annuité = 50 000 × 20% = 10 000 €/an. Cumul sur 3 ans = 30 000 €. VNC = 50 000 - 30 000 = 20 000 €.",
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        }
      ]
    },
    {
      id: 'compta_ch6',
      titre: '6. Écritures d’Inventaire : Dépréciations & Provisions pour Risques',
      dureeEstimeeMin: 45,
      description: 'Principe de prudence, dépréciation des créances clients douteuses (compte 416 et 491), dépréciation des stocks (39x), et provisions pour risques et charges (litiges prud’homaux, garanties 15x).',
      pointsCles: [
        'Principe de prudence : comptabiliser les pertes probables dès qu\'elles sont pressenties',
        'Dépréciation des créances douteuses (491) sur le montant HORS TAXES de la perte estimée',
        'Provisions pour risques et charges (Classe 15 : litiges clients, contentieux prud\'homaux)',
        'Mécanisme d\'ajustement : Dotation (681/687) si hausse du risque, Reprise (781/787) si baisse ou disparition du risque'
      ],
      formuleCle: '\\text{Ajustement} = \\text{Dépréciation requise en N} - \\text{Dépréciation existante en N-1} \\quad (\\text{Dotation si } > 0, \\text{ Reprise si } < 0)',
      conseilProfesseur: 'La dépréciation d\'une créance client douteuse se calcule impérativement sur le montant Hors Taxes (HT), car la TVA sera régularisée auprès de l\'État si la créance devient définitivement irrécouvrable.',
      astuceTerrain: 'Dès qu\'un client fait l\'objet d\'une procédure collective (redressement judiciaire), reclassez immédiatement sa créance du compte 411 vers le compte 416 "Clients douteux" avant de calculer la dépréciation.',
      contenuHtml: `
        <h3>6.1 Mécanisme des Dépréciations et Provisions</h3>
        <p>Les dépréciations constatent la perte réversible de valeur d'un actif (créances, stocks, titres), tandis que les provisions (classe 15) anticipent un passif exigible futur.</p>
      `,
      exercices: [
        {
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
        }
      ]
    },
    {
      id: 'compta_ch7',
      titre: '7. Régularisation des Charges & Produits (CCA, FNP, PCA, AAE)',
      dureeEstimeeMin: 45,
      description: 'Principe de séparation et d’indépendance des exercices (cut-off) : Charges Constatées d’Avance (CCA - 486), Factures Non Parvenues (FNP - 408), Produits Constatés d’Avance (PCA - 487), Factures à Établir (FAE - 418).',
      pointsCles: [
        'Principe de rattachement à l\'exercice (Cut-off) : n\'imputer au résultat que ce qui a été consommé ou produit pendant l\'exercice',
        'Charges Constatées d\'Avance (CCA - compte 486) : charge enregistrée en N mais consommée en N+1 (ex: assurance payée d\'avance)',
        'Factures Non Parvenues (FNP - compte 408) : marchandise reçue en N mais facture fournisseur non encore parvenue au 31/12',
        'Produits Constatés d\'Avance (PCA - compte 487) & Factures à Établir (FAE - compte 418)',
        'Extourne systématique de toutes ces écritures de régularisation au premier jour de l\'exercice N+1 (01/01/N+1)'
      ],
      formuleCle: '\\text{Montant CCA} = \\text{Montant Total Facturé HT} \\times \\frac{\\text{Nombre de mois sur l\'exercice N+1}}{\\text{Durée totale facturée}}',
      conseilProfesseur: 'N\'oubliez jamais de contre-passer (extourner) les écritures de cut-off au 1er janvier N+1, sinon les charges ou produits seront comptabilisés deux fois !',
      astuceTerrain: 'Examinez attentivement les contrats de maintenance, primes d\'assurance et abonnements logiciels de décembre : ils contiennent quasi systématiquement des montants à ventiler en CCA.',
      contenuHtml: `
        <h3>7.1 Tableau Récapitulatif des Écritures de Cut-Off</h3>
        <table class="w-full border-collapse my-4 text-sm border border-slate-300 dark:border-slate-700">
          <thead>
            <tr class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100">
              <th class="border p-2">Situation au 31/12</th>
              <th class="border p-2">Compte de Régularisation</th>
              <th class="border p-2">Impact Résultat N</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border p-2">Charge payée en N concernant N+1</td><td class="border p-2 font-bold">486 Charges Constatées d'Avance</td><td class="border p-2 text-emerald-600 font-bold">Améliore le résultat (+ Produits/Crédit 6)</td></tr>
            <tr><td class="border p-2">Prestation reçue en N sans facture reçue</td><td class="border p-2 font-bold">408 Factures Non Parvenues</td><td class="border p-2 text-rose-600 font-bold">Diminue le résultat (+ Charges au Débit)</td></tr>
            <tr><td class="border p-2">Vente facturée en N livrable en N+1</td><td class="border p-2 font-bold">487 Produits Constatés d'Avance</td><td class="border p-2 text-rose-600 font-bold">Diminue le résultat (- Produits au Débit 7)</td></tr>
            <tr><td class="border p-2">Vente livrée en N non encore facturée</td><td class="border p-2 font-bold">418 Clients - Factures à Établir</td><td class="border p-2 text-emerald-600 font-bold">Améliore le résultat (+ Produits au Crédit 7)</td></tr>
          </tbody>
        </table>
      `,
      exercices: [
        {
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
        }
      ]
    },
    {
      id: 'compta_ch8',
      titre: '8. Élaboration des Documents de Synthèse : Bilan & Compte de Résultat',
      dureeEstimeeMin: 45,
      description: 'Structure de l’Actif (Immobilisé + Circulant) et du Passif (Capitaux propres + Dettes), structure du Compte de Résultat en 3 niveaux (Exploitation, Financier, Exceptionnel) et impôt sur les sociétés (IS).',
      pointsCles: [
        'Le Bilan est la photographie du patrimoine à l\'instant T : $\\text{Actif Total} = \\text{Passif Total}$',
        'Le Compte de Résultat est le film de l\'activité sur l\'année : $\\text{Résultat Net} = \\text{Total Produits} - \\text{Total Charges}$',
        'Structure en 3 niveaux de résultat : Exploitation, Financier, Exceptionnel',
        'Le Résultat Net s\'intègre au passif du Bilan dans les Capitaux Propres (Ligne 120 Bénéfice ou 129 Perte)'
      ],
      formuleCle: '\\text{Résultat Net} = (\\text{R. Exploitation} + \\text{R. Financier} + \\text{R. Exceptionnel}) - \\text{Impôt Sociétés (IS)}',
      conseilProfesseur: 'Vérifiez toujours le double bouclage : la différence entre Actif et Passif avant résultat doit être rigoureusement égale au résultat net calculé au compte de résultat.',
      astuceTerrain: 'Pour une lecture rapide du bilan : l\'Actif classe les éléments par liquidité croissante (du haut vers le bas) et le Passif par exigibilité croissante.',
      contenuHtml: `
        <h3>8.1 Architecture Globale Bilan / Compte de Résultat</h3>
        <p>Les deux documents de synthèse majeurs offrent une vision patrimoniale et économique complémentaire de l'entreprise.</p>
      `,
      exercices: [
        {
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
        }
      ]
    },
    {
      id: 'compta_ch9',
      titre: '9. Soldes Intermédiaires de Gestion (SIG) & EBE',
      dureeEstimeeMin: 50,
      description: 'Marge commerciale, Production de l’exercice, Valeur Ajoutée (VA), Excédent Brut d’Exploitation (EBE / EBITDA), Résultat d’Exploitation (REX / EBIT), Résultat Courant Avant Impôt (RCAI).',
      pointsCles: [
        'Marge commerciale = Ventes de marchandises - Coût d\'achat des marchandises vendues',
        'Valeur Ajoutée (VA) = Marge Commerciale + Production de l\'exercice - Consommations en provenance de tiers',
        'EBE (Excédent Brut d\'Exploitation) = $VA + \\text{Subventions} - \\text{Charges de personnel} - \\text{Impôts et taxes}$',
        'Indicateur roi de la performance économique pure (équivalent français de l\'EBITDA)',
        'Résultat d\'Exploitation (REX / EBIT) = $EBE + \\text{Reprises} - \\text{Dotations aux amortissements/provisions}$'
      ],
      formuleCle: 'EBE = VA + \\text{Subventions d\'exploitation} - \\text{Charges de personnel} - \\text{Impôts & taxes}',
      conseilProfesseur: 'L\'EBE est le meilleur indicateur pour comparer la performance de deux entreprises d\'un même secteur, car il est totalement indépendant de la politique d\'amortissement et du mode de financement par emprunt.',
      astuceTerrain: 'Surveillez le ratio $\\frac{\\text{Charges de Personnel}}{VA}$ : dans une entreprise industrielle en bonne santé, il doit généralement rester inférieur à 65-70%.',
      contenuHtml: `
        <h3>9.1 Cascade des Soldes Intermédiaires de Gestion (SIG)</h3>
        <ol class="list-decimal pl-6 space-y-1 text-sm my-3">
          <li><strong>Marge Commerciale :</strong> Ventes marchandises - Coût d'achat marchandises.</li>
          <li><strong>Production de l'exercice :</strong> Production vendue + stockée + immobilisée.</li>
          <li><strong>Valeur Ajoutée (VA) :</strong> Richesse brute créée par l'entreprise.</li>
          <li><strong>Excédent Brut d'Exploitation (EBE) :</strong> Ressource générée après rémunération du personnel et taxes.</li>
          <li><strong>Résultat d'Exploitation (REX) :</strong> Performance après usure des outils de production (dotations).</li>
          <li><strong>Résultat Courant Avant Impôt (RCAI) :</strong> Prise en compte du coût des dettes financières.</li>
          <li><strong>Résultat Net de l'exercice :</strong> Solde définitif après impôt sur les sociétés (IS).</li>
        </ol>
      `,
      exercices: [
        {
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
        }
      ]
    },
    {
      id: 'compta_ch10',
      titre: '10. Capacité d’Autofinancement (CAF) & Cash-Flow d’Exploitation',
      dureeEstimeeMin: 45,
      description: 'Calcul de la CAF par la méthode soustractive (à partir de l’EBE) et méthode additive (à partir du résultat net + dotations - reprises + VCEAC - PCEA), ratio de désendettement (Dettes nettes / CAF < 3 à 4 années).',
      pointsCles: [
        'La CAF représente le flux potentiel de liquidités généré par l\'activité pour s\'autofinancer',
        'Méthode additive : $\\text{CAF} = \\text{Résultat Net} + \\text{Dotations nettes} - \\text{Plus-values de cession}$',
        'Utilisation de la CAF : financer de nouveaux investissements, rembourser le capital des emprunts bancaires, verser des dividendes aux associés',
        'Capacité de remboursement : $\\frac{\\text{Dettes Financières}}{\\text{CAF}} \\le 3 \\text{ à } 4 \\text{ années}$ (norme bancaire)'
      ],
      formuleCle: '\\text{CAF (Méthode Additive)} = \\text{Résultat Net} + \\text{Dotations d\'exploitation non décaissées} - \\text{Quotes-parts & Cessions}',
      conseilProfesseur: 'Si le ratio $\\frac{\\text{Dettes}}{\\text{CAF}}$ dépasse 4 ou 5 ans, les banques refuseront tout nouvel emprunt car l\'entreprise est considérée en surendettement.',
      astuceTerrain: 'Ne confondez pas CAF et Trésorerie : la CAF est un potentiel de cash sur l\'année ; si vos clients ne payent pas, la CAF sera forte mais la caisse sera vide !',
      contenuHtml: `
        <h3>10.1 Les Deux Méthodes de Calcul de la CAF</h3>
        <p>Les méthodes additive et soustractive aboutissent rigoureusement au même montant de CAF.</p>
      `,
      exercices: [
        {
          id: 'compta_ch10_ex1',
          type: TypeQuestion.CHIFFREE,
          question: "Pour une entreprise ayant un Résultat Net de 120 000 € et des Dotations aux amortissements de 45 000 € (sans cession d'actif), quelle est sa CAF en euros ?",
          reponsesPossibles: ['165 000 €', '75 000 €', '120 000 €', '45 000 €'],
          reponsesCorrectes: [0],
          explication: "CAF = Résultat Net (120 000 €) + Dotations non décaissées (45 000 €) = 165 000 €.",
          points: 5,
          difficulte: NiveauDifficulte.DEBUTANT
        }
      ]
    },
    {
      id: 'compta_ch11',
      titre: '11. Équilibre Financier Fonctionnel : FRNG, BFR & Trésorerie Nette (TN)',
      dureeEstimeeMin: 50,
      description: 'Bilan fonctionnel en grandes masses : Emplois stables vs Ressources stables, Actif d’exploitation vs Passif d’exploitation, calcul du FRNG, du BFR et de la Trésorerie Nette (TN = FRNG - BFR).',
      pointsCles: [
        'Fonds de Roulement Net Global (FRNG) = Ressources Stables (Capitaux propres + Emprunts long terme) - Emplois Stables (Actifs immobilisés bruts)',
        'Besoin en Fonds de Roulement (BFR) = Actif Circulant d\'Exploitation (Stocks + Créances clients) - Passif Circulant d\'Exploitation (Dettes fournisseurs/sociales)',
        'Trésorerie Nette (TN) = $FRNG - BFR$',
        'Règle d\'or de l\'équilibre financier : Le FRNG doit être positif et supérieur au BFR pour dégager une Trésorerie Nette positive ($TN > 0$)'
      ],
      formuleCle: 'TN = FRNG - BFR \\quad | \\quad FRNG = \\text{Ressources Stables} - \\text{Emplois Stables} \\quad | \\quad BFR = \\text{Stocks} + \\text{Créances} - \\text{Dettes Fournisseurs}',
      conseilProfesseur: 'Une entreprise peut être très rentable et faire faillite par asphyxie de trésorerie si son BFR explose en période de forte croissance sans financement adéquat.',
      astuceTerrain: 'Pour améliorer la Trésorerie Nette : réduisez le BFR en négociant des délais fournisseurs plus longs, en réduisant les stocks dormants et en accélérant les relances des créances clients.',
      contenuHtml: `
        <h3>11.1 L'Équation Maîtresse de l'Équilibre Financier</h3>
        <div class="bg-slate-900 text-slate-100 p-4 rounded-lg my-4 font-mono text-sm overflow-x-auto">
          <pre>BILAN FONCTIONNEL :
-------------------------------------------------------------
EMPLOIS STABLES (Immos)       | RESSOURCES STABLES (Capitaux)
-------------------------------------------------------------
          ===> FRNG = Ressources Stables - Emplois Stables
-------------------------------------------------------------
ACTIF CIRCULANT (Stocks+Clients) | PASSIF CIRCULANT (Fournisseurs)
-------------------------------------------------------------
          ===> BFR = Actif Circulant - Passif Circulant
=============================================================
TRÉSORERIE NETTE (TN) = FRNG - BFR</pre>
        </div>
      `,
      exercices: [
        {
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
        }
      ]
    },
    {
      id: 'compta_ch12',
      titre: '12. Analyse des Délais Clients, Fournisseurs & Rotation des Stocks',
      dureeEstimeeMin: 45,
      description: 'Délai Moyen de Règlement Clients (DSO / Days Sales Outstanding), Délai Fournisseurs (DPO), rotation des stocks en jours de consommation (DIO) et cycle de conversion du cash (CCC = DIO + DSO - DPO).',
      pointsCles: [
        'DSO (Days Sales Outstanding) : $DSO = \\frac{\\text{Créances Clients TTC}}{\\text{Chiffre d\'Affaires TTC}} \\times 360 \\text{ jours}$',
        'DPO (Days Payable Outstanding) : $DPO = \\frac{\\text{Dettes Fournisseurs TTC}}{\\text{Achats TTC}} \\times 360 \\text{ jours}$',
        'DIO (Days Inventory Outstanding) : rotation des stocks en jours de coût des ventes',
        'Cycle de Conversion du Cash (CCC) : $CCC = DIO + DSO - DPO$'
      ],
      formuleCle: 'CCC = \\text{Délai Stocks (DIO)} + \\text{Délai Clients (DSO)} - \\text{Délai Fournisseurs (DPO)}',
      conseilProfesseur: 'Dans la grande distribution, le CCC est souvent négatif : les clients payent comptant au passage en caisse ($DSO = 0$), les stocks tournent en 15 jours ($DIO = 15$) et les fournisseurs sont payés à 60 jours ($DPO = 60$). Résultat : $CCC = 15 + 0 - 60 = -45\\text{ jours}$ ! Les supermarchés disposent d\'une trésorerie structurellement excédentaire.',
      astuceTerrain: 'Chaque jour de délai client (DSO) gagné sur un CA de 10 millions d\'euros libère immédiatement près de $28\\,000\\text{ €}$ de cash direct en banque.',
      contenuHtml: `
        <h3>12.1 Optimisation des 3 Composantes du Cycle de Cash</h3>
        <p>Le pilotage fin du BFR opérationnel repose sur le triptyque Stocks / Clients / Fournisseurs.</p>
      `,
      exercices: [
        {
          id: 'compta_ch12_ex1',
          type: TypeQuestion.CHIFFREE,
          question: "Une entreprise réalise un CA TTC de 3 600 000 € et a en permanence un encours de créances clients de 600 000 € TTC. Quel est son délai moyen de paiement client (DSO) en jours ?",
          reponsesPossibles: ['60 jours', '30 jours', '90 jours', '120 jours'],
          reponsesCorrectes: [0],
          explication: "DSO = (600 000 / 3 600 000) × 360 = (1/6) × 360 = 60 jours.",
          points: 5,
          difficulte: NiveauDifficulte.INTERMEDIAIRE
        }
      ]
    },
    {
      id: 'compta_ch13',
      titre: '13. Ratios Financiers de Rentabilité & de Solvabilité',
      dureeEstimeeMin: 45,
      description: 'Rentabilité financière (ROE = Résultat Net / Capitaux Propres), Rentabilité économique (ROCE / ROA = Résultat d’Exploitation / Actif Économique), effet de levier financier et ratio d’autonomie financière (Capitaux Propres / Total Bilan > 25%).',
      pointsCles: [
        'ROE (Return on Equity) : rentabilité des capitaux propres pour les actionnaires',
        'ROCE (Return on Capital Employed) : rentabilité économique des actifs industriels',
        'Effet de levier de la dette : favorable si $ROCE > i$ (taux d\'intérêt d\'emprunt)',
        'Ratio d\'autonomie financière : $\\frac{\\text{Capitaux Propres}}{\\text{Total Bilan}} > 20\\text{ à } 25\\%$',
        'Couverture des intérêts de la dette : $\\frac{EBE}{\\text{Frais Financiers}} > 3\\text{ à } 4$'
      ],
      formuleCle: 'ROE = \\frac{\\text{Résultat Net}}{\\text{Capitaux Propres}}, \\quad \\text{Effet Levier} = (ROCE - i) \\times \\frac{\\text{Dettes}}{\\text{Capitaux Propres}}',
      conseilProfesseur: 'L\'effet de levier est une arme à double tranchant : formidable multiplicateur de rentabilité en période de croissance ($ROCE > i$), il devient destructeur et accélère la faillite dès que le résultat opérationnel chute en dessous du coût de la dette.',
      astuceTerrain: 'Avant de demander un crédit à la banque, calculez votre ratio de levier Dettes/EBE : assurez-vous qu\'il reste strictement sous la barre des 3.5 années.',
      contenuHtml: `
        <h3>13.1 Formule et Décomposition DuPont du ROE</h3>
        <p>Le modèle DuPont décompose la rentabilité financière en 3 leviers : Marge Nette $\\times$ Rotation d'Actif $\\times$ Levier d'Endettement.</p>
      `,
      exercices: [
        {
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
        }
      ]
    },
    {
      id: 'compta_ch14',
      titre: '14. Tableau des Flux de Trésorerie (Flux d’Exploitation, d’Investissement, de Financement)',
      dureeEstimeeMin: 45,
      description: 'Méthode OEC / Banque de France : Flux Net de Trésorerie d’Exploitation (FTE = EBE - ΔBFR), Flux Net d’Investissement (Acquisitions - Cessions d’actifs), Flux Net de Financement (Augmentations de capital + Nouveaux emprunts - Remboursements - Dividendes).',
      pointsCles: [
        'Tableau des flux de trésorerie (Cash Flow Statement) : retrace la variation de cash exacte sur l\'exercice',
        'Flux d\'Exploitation (CFO) : cash issu de l\'activité courante ($EBE - \\Delta BFR$)',
        'Flux d\'Investissement (CFI) : décaissements pour renouvellement du parc matériel',
        'Flux de Financement (CFF) : apports en capital, levées d\'emprunts, remboursements et dividendes versés',
        'Free Cash Flow (FCF / Flux de trésorerie disponible) = $CFO - \\text{Investissements indispensables (Capex)}$'
      ],
      formuleCle: '\\Delta \\text{Trésorerie} = \\text{Flux Exploitation (CFO)} + \\text{Flux Investissement (CFI)} + \\text{Flux Financement (CFF)}',
      conseilProfesseur: 'Une entreprise saine doit générer des flux de trésorerie d\'exploitation largement positifs pour financer ses investissements sans dépendre perpétuellement de nouveaux emprunts bancaires.',
      astuceTerrain: 'Le Free Cash Flow est la métrique n°1 utilisée par les investisseurs en Private Equity et pour l\'évaluation d\'entreprise par les Discounted Cash Flows (DCF).',
      contenuHtml: `
        <h3>14.1 Structure Normalisée du Tableau des Flux de Trésorerie</h3>
        <div class="bg-slate-900 text-slate-100 p-4 rounded-lg my-4 font-mono text-sm overflow-x-auto">
          <pre>1. Flux de Trésorerie Liés à l'Activité / Exploitation (CFO) :
   + EBE
   - Variation du BFR
   - Impôts sur les bénéfices payés
   = Flux Net d'Exploitation (A)

2. Flux Liés aux Opérations d'Investissement (CFI) :
   - Acquisitions d'immobilisations corporelles/incorporelles
   + Cessions d'actifs
   = Flux Net d'Investissement (B)

3. Flux Liés aux Opérations de Financement (CFF) :
   + Augmentation de capital
   + Nouveaux emprunts souscrits
   - Remboursements d'emprunts
   - Dividendes versés aux actionnaires
   = Flux Net de Financement (C)

VARIATION TOTALE DE TRÉSORERIE = A + B + C</pre>
        </div>
      `,
      exercices: [
        {
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
        }
      ]
    },
    {
      id: 'compta_ch15',
      titre: '15. Clôture Annuelle des Comptes, Liasse Fiscale & Audit Légal',
      dureeEstimeeMin: 50,
      description: 'Liasse fiscale Cerfa (régime réel normal 2050 à 2059), résultat fiscal (Réintégrations extra-comptables - Déductions extra-comptables), rôle du Commissaire aux Comptes (CAC : certification sans réserve), approbation des comptes et affectation du résultat en assemblée générale.',
      pointsCles: [
        'Établissement de la Liasse Fiscale officielle (tableaux Cerfa 2050 à 2059)',
        'Passage du Résultat Comptable au Résultat Fiscal : Réintégrations (dépenses non déductibles comme les amendes ou amortissements excédentaires de véhicules de tourisme) et Déductions',
        'Calcul de l\'Impôt sur les Sociétés (IS à 25%)',
        'Audit légal et certification par le Commissaire aux Comptes (CAC)',
        'Approbation des comptes en Assemblée Générale Ordinaire (AGO) et affectation en Réserve Légale (5% jusqu\'à 10% du capital) ou Dividendes'
      ],
      formuleCle: '\\text{Résultat Fiscal} = \\text{Résultat Comptable Avant Impôt} + \\sum \\text{Réintégrations} - \\sum \\text{Déductions}',
      conseilProfesseur: 'La Réserve Légale est obligatoire : tant qu\'elle n\'atteint pas 10% du capital social de la société, 5% du bénéfice net de chaque exercice doit y être obligatoirement affecté avant toute distribution de dividendes.',
      astuceTerrain: 'Conservez tous les justificatifs, factures et grands livres comptables pendant la durée légale minimale de 10 ans (Article L123-22 du Code de commerce).',
      contenuHtml: `
        <h3>15.1 Processus Annuel d'Arrêté et d'Approbation des Comptes</h3>
        <ol class="list-decimal pl-6 space-y-1 text-sm my-3">
          <li><strong>Travaux d'Inventaire :</strong> Écritures de clôture au 31 décembre (amortissements, dépréciations, provisions, cut-off).</li>
          <li><strong>Établissement des Comptes Annuels :</strong> Bilan, Compte de Résultat, Annexe et Liasse Fiscale.</li>
          <li><strong>Audit du Commissaire aux Comptes :</strong> Émission du rapport général certifiant la sincérité et régularité des comptes.</li>
          <li><strong>Assemblée Générale Ordinaire (AGO) :</strong> Vote d'approbation par les actionnaires dans les 6 mois de la clôture et affectation du bénéfice.</li>
          <li><strong>Dépôt Légal :</strong> Télétransmission des comptes certifiés au Greffe du Tribunal de Commerce.</li>
        </ol>
      `,
      exercices: [
        {
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
        }
      ]
    }
  ]
};
