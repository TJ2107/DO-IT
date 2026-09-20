import { RapportTP, Utilisateur } from '../types';

const TP_STORAGE_KEY = 'doit_tp_submissions_v1';

// Seed sample TP submissions if empty so that the Formateur/Admin view has realistic student submissions ready to review!
const SAMPLE_TP_SUBMISSIONS: RapportTP[] = [
  {
    id: 'tp_sub_101',
    coursId: 'elec_101',
    coursTitre: 'Électricité Industrielle & Électrotechnique Fondamentale',
    titreTP: 'TP Pratique n°1 : Câblage et Essai en Charge d’un Démarrage Étoile-Triangle',
    objectifs: [
      'Réaliser le schéma de puissance et de commande d’un départ moteur 15 kW',
      'Mesurer les intensités de démarrage (Id/In) sous oscilloscope',
      'Régler le relais thermique de protection classe 10',
    ],
    apprenantId: 'user_mouamba_88',
    apprenantNom: 'Arsène MOUAMBA',
    apprenantEmail: 'a.mouamba@etudiant.doit.org',
    dateSoumission: '18/09/2026 à 14:32',
    nomFichier: 'Rapport_TP_Demarrage_Etoile_Triangle_Mouamba.pdf',
    tailleFichier: '2.4 MB',
    contenuRapport: `1. OBJECTIFS DU TP :
Vérification expérimentale de la réduction du courant d'appel lors du démarrage d'un moteur asynchrone triphasé 400V 50Hz (P = 15 kW, In = 29 A).

2. RELEVÉ DES MESURES :
- Tension réseau U = 400 V entre phases.
- Courant de démarrage en couplage Étoile (Y) : Id_Y = 43.5 A (soit 1.5 x In).
- Courant de pointe au passage en Triangle (D) : Id_D = 78.2 A.
- Temps de temporisation optimal réglé : t = 5.2 secondes.
- Courant nominal stabilisé en charge : I_nom = 27.8 A.

3. ANALYSE ET OBSERVATIONS :
Le couplage étoile divise bien le courant par 3 par rapport à un démarrage direct classique (Id direct calculé à 174 A). Le contacteur de ligne KM1 et le contacteur d'étoile KM3 se verrouillent mécaniquement et électriquement sans aucun arc intempestif.

4. CONCLUSION INDUSTRIELLE :
Le banc d'essai est conforme à la norme NF C 15-100. Le relais thermique a été réglé à In = 29 A.`,
    statut: 'corrige',
    noteSur20: 18.5,
    nomFormateur: 'Dr. Marcel KOUBEMBA (Ingénieur Électrotechnicien)',
    dateCorrection: '19/09/2026 à 09:15',
    appreciationFormateur: 'Excellent travail de laboratoire ! Le compte-rendu est rigoureux, les relevés d’oscillogrammes sont précis et le dimensionnement de la temporisation est parfaitement argumenté. Félicitations.',
    criteresNotation: [
      { critere: 'Conformité du schéma & respect des normes de sécurité', bareme: 5, note: 5, commentaire: 'Schéma unifilaire et développé impeccables' },
      { critere: 'Exactitude des relevés de mesures et graphiques', bareme: 5, note: 4.5, commentaire: 'Très bonne précision des mesures d’intensité' },
      { critere: 'Calculs de dimensionnement & réglage des protections', bareme: 5, note: 4.5, commentaire: 'Réglage du thermique bien justifié' },
      { critere: 'Qualité de la rédaction technique & conclusions', bareme: 5, note: 4.5, commentaire: 'Esprit de synthèse digne d’un futur technicien supérieur' }
    ]
  },
  {
    id: 'tp_sub_102',
    coursId: 'auto_101',
    coursTitre: 'Automatisme Industriel & API / Grafcet',
    titreTP: 'TP Pratique n°2 : Programmation Grafcet et Automate Siemens S7-1200 pour Station de Tri',
    objectifs: [
      'Établir le Grafcet niveau 2 avec gestion des modes de marche/arrêt (GEMMA)',
      'Programmer les blocs fonctionnels en langage Ladder (LAD) sous TIA Portal',
      'Tester la détection des pièces métalliques/plastiques par capteurs inductifs et capacitifs',
    ],
    apprenantId: 'user_ngoma_42',
    apprenantNom: 'Béranger NGOMA',
    apprenantEmail: 'b.ngoma@etudiant.doit.org',
    dateSoumission: '19/09/2026 à 08:20',
    nomFichier: 'CompteRendu_Automatisme_Siemens_NGOMA.pdf',
    tailleFichier: '3.8 MB',
    contenuRapport: `1. CADRE DU PROJET :
Mise en service d'un convoyeur industriel avec tri sélectif 3 bacs (Métal, Plastique noir, Déchet).

2. STRUCTURE DU PROGRAMME TIA PORTAL :
- OB1 : Appel cyclique des blocs FC1 (Gestion Arrêt d'Urgence) et FB10 (Séquence Grafcet).
- DB1 : Table d'échange des états capteurs (E0.0 à E0.7) et actionneurs vérins (A0.0 à A0.4).

3. TESTS ET VALIDATION EN SIMULATION :
- Détection inductive : Temps de réponse = 8 ms.
- Éjection par vérin bistable 5/2 : Pression 6 bars maintenue.
- Cadence atteinte : 42 pièces / minute sans blocage.

4. DIFFICULTÉS RENCONTRÉES ET SOLUTIONS :
Rebond sur capteur optique résolu par filtrage logiciel (tempo 50ms anti-rebond).`,
    statut: 'en_attente',
    criteresNotation: [
      { critere: 'Structuration du Grafcet & GEMMA', bareme: 5, note: 0 },
      { critere: 'Qualité du code Ladder et commentaires', bareme: 5, note: 0 },
      { critere: 'Gestion de la sécurité et arrêts d’urgence', bareme: 5, note: 0 },
      { critere: 'Analyse des résultats et rapport', bareme: 5, note: 0 }
    ]
  }
];

export function getStoredTPSubmissions(): RapportTP[] {
  try {
    const data = localStorage.getItem(TP_STORAGE_KEY);
    if (!data) {
      localStorage.setItem(TP_STORAGE_KEY, JSON.stringify(SAMPLE_TP_SUBMISSIONS));
      return SAMPLE_TP_SUBMISSIONS;
    }
    return JSON.parse(data);
  } catch (e) {
    console.error('Failed to parse TP submissions', e);
    return SAMPLE_TP_SUBMISSIONS;
  }
}

export function saveTPSubmission(submission: RapportTP): RapportTP[] {
  try {
    const list = getStoredTPSubmissions();
    const index = list.findIndex(item => item.id === submission.id);
    let updated: RapportTP[];
    if (index >= 0) {
      updated = [...list];
      updated[index] = submission;
    } else {
      updated = [submission, ...list];
    }
    localStorage.setItem(TP_STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (e) {
    console.error('Failed to save TP submission', e);
    return [];
  }
}

export function gradeTPSubmission(
  submissionId: string,
  gradeSur20: number,
  appreciation: string,
  formateurName: string,
  criteres?: { critere: string; bareme: number; note: number; commentaire?: string }[]
): RapportTP | null {
  const list = getStoredTPSubmissions();
  const index = list.findIndex(s => s.id === submissionId);
  if (index === -1) return null;

  const updated: RapportTP = {
    ...list[index],
    statut: 'corrige',
    noteSur20: gradeSur20,
    appreciationFormateur: appreciation,
    nomFormateur: formateurName || 'Formateur Académique DO IT',
    dateCorrection: new Date().toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }),
    criteresNotation: criteres || list[index].criteresNotation
  };

  list[index] = updated;
  try {
    localStorage.setItem(TP_STORAGE_KEY, JSON.stringify(list));
  } catch (e) {
    console.error(e);
  }

  return updated;
}
