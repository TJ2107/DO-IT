import { FactureRecu, Utilisateur } from '../types';

export function generateInvoiceForUser(
  user: Utilisateur,
  options?: {
    coursTitre?: string;
    domaineNom?: string;
    montantHT?: number;
    modePaiement?: string;
    referenceTransaction?: string;
  }
): FactureRecu {
  const dateNow = new Date();
  const dateIso = dateNow.toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const numeroFacture = `FACT-DOIT-${dateNow.getFullYear()}-${String(dateNow.getMonth() + 1).padStart(2, '0')}-${randomSuffix}`;
  
  const montantHT = options?.montantHT || 25000;
  const montantTVA = 0; // Exonération formation professionnelle continue
  const montantTotal = montantHT + montantTVA;

  const empreinteSecurite = `DOIT-SEC-${Math.random().toString(36).substring(2, 10).toUpperCase()}-${Date.now().toString(36).toUpperCase()}`;

  return {
    id: `inv_${Date.now()}_${randomSuffix}`,
    numeroFacture,
    dateEmission: dateIso,
    datePaiement: dateIso,
    statut: 'Payé & Acquitté',
    apprenant: {
      id: user.id,
      nom: user.nom || 'Apprenant DO IT',
      email: user.email || 'apprenant@doit-academy.org',
      telephone: '+242 06 944 35 68',
      poste: (user as any).poste || 'Technicien / Spécialiste',
      entreprise: user.role === 'entreprise' ? 'Compte B2B Partenaire' : 'Candidature Individuelle',
    },
    designation: options?.coursTitre 
      ? `Souscription & Accompagnement Certifiant : ${options.coursTitre} (15 Chapitres, Travaux Pratiques & Brevet Officiel)`
      : 'Pack Cursus Technique & Industriel Complet DO IT (Accès 13 Filières, TP & Certifications SHA-256)',
    coursTitre: options?.coursTitre,
    domaineNom: options?.domaineNom,
    montantHT,
    montantTVA,
    montantTotal,
    devise: 'FCFA',
    modePaiement: options?.modePaiement || 'Airtel Money (+242 053379774) / MTN MoMo (+242 069443568)',
    referenceTransaction: options?.referenceTransaction || `TR-MO-${dateNow.getFullYear()}${randomSuffix}`,
    empreinteSecurite,
    emetteur: {
      nom: 'DO IT ACADEMY CONGO • FORMATION INDUSTRIELLE & TECHNIQUE',
      slogan: 'Centre d’Excellence Pédagogique & Certification de Compétences',
      adresse: 'Avenue de la Paix, Centre des Affaires, Brazzaville / Pointe-Noire (République du Congo)',
      contacts: 'Tél / WhatsApp : +242 05 337 97 74 / +242 06 944 35 68 • Email : facturation@doit-tech.org',
      rccm: 'CG-BZV-01-2024-B14-0892',
      nif: '0202410984715X',
    },
  };
}

export function saveInvoiceToUser(user: Utilisateur, facture: FactureRecu): Utilisateur {
  const existing = user.factures || [];
  const alreadyExists = existing.some(f => f.id === facture.id || f.numeroFacture === facture.numeroFacture);
  
  const updatedFactures = alreadyExists 
    ? existing.map(f => f.id === facture.id ? facture : f)
    : [facture, ...existing];

  return {
    ...user,
    factures: updatedFactures,
  };
}
