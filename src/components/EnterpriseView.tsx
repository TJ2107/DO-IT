import React, { useState, useEffect } from 'react';
import { 
  CollaborateurB2B, 
  ProfilEntreprise, 
  DevisEntreprise, 
  ConventionFormation, 
  FactureRecu 
} from '../types';
import { MOCK_B2B_COLLABORATEURS, MOCK_DEFAULT_ENTREPRISE } from '../data/mockUser';
import { COURSES_DATA } from '../data/coursesData';
import { EnterpriseQuoteModal } from './EnterpriseQuoteModal';
import { EnterpriseConventionModal } from './EnterpriseConventionModal';
import { EnterpriseAttendanceModal } from './EnterpriseAttendanceModal';
import { InvoiceModal } from './InvoiceModal';
import { 
  Building2, 
  Users, 
  CheckCircle2, 
  TrendingUp, 
  DollarSign, 
  Send, 
  PhoneCall, 
  ShieldCheck, 
  Plus, 
  Sparkles, 
  FileSpreadsheet,
  FileText,
  Clock,
  Award,
  Search,
  Filter,
  Download,
  Upload,
  Calendar,
  Layers,
  ChevronRight,
  ExternalLink,
  BookOpen,
  Briefcase,
  Sliders,
  Check,
  Printer,
  Scale,
  Settings,
  Mail,
  HelpCircle,
  FileCheck
} from 'lucide-react';

export const EnterpriseView: React.FC = () => {
  // Navigation inside Enterprise space
  const [activeSubTab, setActiveSubTab] = useState<'cohortes' | 'simulateur' | 'documents' | 'profil' | 'demo'>('cohortes');

  // Enterprise profile state
  const [profilEntreprise, setProfilEntreprise] = useState<ProfilEntreprise>(() => {
    const saved = localStorage.getItem('doit_entreprise_profil');
    return saved ? JSON.parse(saved) : MOCK_DEFAULT_ENTREPRISE;
  });

  // Save profile to storage
  const handleSaveProfil = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('doit_entreprise_profil', JSON.stringify(profilEntreprise));
    setToastMessage('Profil d\'entreprise mis à jour avec succès !');
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Collaborators roster
  const [collaborateurs, setCollaborateurs] = useState<CollaborateurB2B[]>(() => {
    const saved = localStorage.getItem('doit_entreprise_collabs');
    return saved ? JSON.parse(saved) : MOCK_B2B_COLLABORATEURS;
  });

  useEffect(() => {
    localStorage.setItem('doit_entreprise_collabs', JSON.stringify(collaborateurs));
  }, [collaborateurs]);

  // Modals state
  const [showAddMemberModal, setShowAddMemberModal] = useState(false);
  const [showBatchImportModal, setShowBatchImportModal] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [showConventionModal, setShowConventionModal] = useState(false);
  const [selectedCollaboratorForAttendance, setSelectedCollaboratorForAttendance] = useState<CollaborateurB2B | null>(null);
  const [activeInvoiceForModal, setActiveInvoiceForModal] = useState<FactureRecu | null>(null);

  // Filters state
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState<string>('all');
  const [selectedStatut, setSelectedStatut] = useState<string>('all');

  // Toast feedback state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Pricing & Quote Builder state
  const [quoteCourseId, setQuoteCourseId] = useState<string>('all_access');
  const [userCount, setUserCount] = useState<number>(12);
  const [includeMentor, setIncludeMentor] = useState<boolean>(true);
  const [includeWorkshop, setIncludeWorkshop] = useState<boolean>(false);
  const [includeAuditReport, setIncludeAuditReport] = useState<boolean>(true);
  const [includeOpcoSupport, setIncludeOpcoSupport] = useState<boolean>(true);

  // New collaborator form
  const [newNom, setNewNom] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPoste, setNewPoste] = useState('');
  const [newDept, setNewDept] = useState('Production Industrielle');
  const [newCourseId, setNewCourseId] = useState('elec_101');

  // Demo form state
  const [demoForm, setDemoForm] = useState({
    nom: '',
    entreprise: '',
    email: '',
    telephone: '',
    effectif: '20-50',
    besoin: 'Électricité & Automatisme',
    message: '',
  });
  const [demoSubmitted, setDemoSubmitted] = useState(false);

  // Pricing calculations
  const basePricePerUser = 49;
  let discountRate = 0;
  if (userCount >= 50) discountRate = 35;
  else if (userCount >= 20) discountRate = 25;
  else if (userCount >= 5) discountRate = 15;

  const priceAfterDiscount = basePricePerUser * (1 - discountRate / 100);
  const totalBaseUsersHT = userCount * priceAfterDiscount;

  const optionsTotalHT = 
    (includeMentor ? 150 : 0) + 
    (includeWorkshop ? 350 : 0) + 
    (includeAuditReport ? 90 : 0);

  const grandTotalHT = totalBaseUsersHT + optionsTotalHT;
  const grandTotalTTC = grandTotalHT; // Formations exonérées de TVA

  // Build current quote object
  const currentDevis: DevisEntreprise = {
    numeroDevis: `DEV-DOIT-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
    dateEmission: new Date().toLocaleDateString('fr-FR'),
    dateValidite: new Date(Date.now() + 30 * 24 * 3600 * 1000).toLocaleDateString('fr-FR'),
    entreprise: profilEntreprise,
    formationTitre: quoteCourseId === 'all_access' 
      ? 'Pass Illimité Entreprise — Les 13 Domaines Techniques & Industriels'
      : (COURSES_DATA.find(c => c.id === quoteCourseId)?.titre || 'Formation Professionnelle Continue'),
    domaineNom: quoteCourseId === 'all_access'
      ? 'Industrie 4.0, Ingénierie & Conformité'
      : (COURSES_DATA.find(c => c.id === quoteCourseId)?.domaineNom || 'Ingénierie'),
    effectifApprenants: userCount,
    prixUnitaireHT: basePricePerUser,
    tauxRemise: discountRate,
    montantRemiseHT: (basePricePerUser * userCount) * (discountRate / 100),
    montantTotalHT: grandTotalHT,
    tauxTVA: 0,
    montantTVA: 0,
    montantTotalTTC: grandTotalTTC,
    optionsIncluses: [
      ...(includeMentor ? [{ nom: 'Mentor Dédié Référent', description: 'Assistance technique personnalisée par un formateur expert', montantHT: 150 }] : []),
      ...(includeWorkshop ? [{ nom: 'Atelier TP Sur-Mesure', description: 'Session pratique ciblée sur vos équipements d\'usine', montantHT: 350 }] : []),
      ...(includeAuditReport ? [{ nom: 'Rapports d\'Audit Hebdo & SIRH', description: 'Export des feuilles d\'émargement et assiduité pour conformité Qualiopi/ISO', montantHT: 90 }] : []),
      ...(includeOpcoSupport ? [{ nom: 'Prise en Charge OPCO Intégrale', description: 'Accompagnement au montage du dossier de subvention formation', montantHT: 0 }] : []),
    ],
    modalitesPaiement: 'Virement bancaire ou prélèvement SEPA à 30 jours net date de facture. Financement direct ou subvention OPCO.',
    delaiRealisation: 'Accès instantané dès signature de la convention',
    statut: 'Validé',
  };

  // Build current convention object
  const currentConvention: ConventionFormation = {
    numeroConvention: `CONV-DOIT-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
    dateCreation: new Date().toLocaleDateString('fr-FR'),
    entreprise: profilEntreprise,
    organisme: {
      nom: 'DO IT FORMATION SAS',
      declarationActivite: '11 75 84920 75',
      siret: '849 203 184 00029',
      adresse: '14 Rue des Métiers de l\'Industrie, 75011 Paris',
      representant: 'M. Jean-Marc Vaudreuil (Directeur Académique)',
    },
    objetFormation: quoteCourseId === 'all_access'
      ? 'Programme Polyvalence & Perfectionnement Industriel Multi-Domaines'
      : `Formation Certifiante : ${COURSES_DATA.find(c => c.id === quoteCourseId)?.titre || 'Expertise Technique'}`,
    dureeHeuresParStagiaire: 40,
    effectifConcerne: userCount,
    modalitesPedagogiques: 'Enseignement e-learning interactif 15 chapitres, devoirs notés sur 20, simulateurs TP et examen certifiant SHA-256',
    programmeSynthese: [
      'Maîtrise des fondamentaux théoriques et règles de sécurité normatives',
      'Calculs, dimensionnement et résolution de cas pratiques d\'ingénierie',
      'Diagnostic méthodique de pannes et maintenance prédictive',
      'Validation des acquis et délivrance du Brevet Professionnel Officiel'
    ],
    coutTotalHT: grandTotalHT,
    priseEnChargeOpco: true,
    opcoNom: profilEntreprise.opcoRattachement || 'OPCO 2i',
    signatures: {
      organismeSigne: true,
      entrepriseSigne: false,
    }
  };

  // Filtered roster
  const filteredCollaborateurs = collaborateurs.filter(c => {
    const matchSearch = c.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        c.poste.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        (c.email && c.email.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchDept = selectedDept === 'all' || c.departement === selectedDept;
    const matchStatut = selectedStatut === 'all' || c.statut === selectedStatut;
    return matchSearch && matchDept && matchStatut;
  });

  // Calculate cohort aggregate KPIs
  const totalCollaborateurs = collaborateurs.length;
  const avgCompletion = Math.round(
    collaborateurs.reduce((acc, c) => acc + c.progressionMoyenne, 0) / (totalCollaborateurs || 1)
  );
  const avgHomeworkScore = (
    collaborateurs.reduce((acc, c) => acc + (c.devoirsMoyenneSur20 || 16.5), 0) / (totalCollaborateurs || 1)
  ).toFixed(1);
  const totalBrevets = collaborateurs.filter(c => c.statut === 'Certifié' || c.brevetObtenuTitre).length;
  const totalHours = collaborateurs.reduce((acc, c) => acc + (c.heuresFormation || 25), 0);

  // Add individual member handler
  const handleAddMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNom.trim()) return;

    const newCollab: CollaborateurB2B = {
      id: `emp_${Date.now()}`,
      nom: newNom,
      email: newEmail || `${newNom.toLowerCase().replace(/\s+/g, '.')}@${profilEntreprise.raisonSociale.toLowerCase().replace(/[^a-z]/g, '')}.fr`,
      poste: newPoste || 'Technicien Spécialisé',
      departement: newDept,
      coursAssignes: [newCourseId],
      certificationsObtenues: 0,
      progressionMoyenne: 0,
      scoreMoyen: 0,
      devoirsMoyenneSur20: 0,
      heuresFormation: 0,
      dernierAcces: 'Inscrit aujourd’hui',
      statut: 'En attente',
    };

    setCollaborateurs([newCollab, ...collaborateurs]);
    setNewNom('');
    setNewEmail('');
    setNewPoste('');
    setShowAddMemberModal(false);
    setToastMessage(`Collaborateur ${newNom} inscrit avec succès !`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Batch CSV Import Handler (simulated)
  const handleBatchImport = () => {
    const batchList: CollaborateurB2B[] = [
      {
        id: `emp_batch_1`,
        nom: 'Damien Guérin',
        email: 'd.guerin@itf-industrie.fr',
        poste: 'Électrotechnicien Câbleur',
        departement: 'Production Industrielle',
        coursAssignes: ['elec_101', 'auto_101'],
        certificationsObtenues: 1,
        progressionMoyenne: 30,
        scoreMoyen: 80,
        devoirsMoyenneSur20: 15.0,
        heuresFormation: 12,
        dernierAcces: 'Hier à 14:00',
        statut: 'Actif',
      },
      {
        id: `emp_batch_2`,
        nom: 'Nathalie Lemoine',
        email: 'n.lemoine@itf-industrie.fr',
        poste: 'Animatrice Sécurité HSE',
        departement: 'Qualité / HSE',
        coursAssignes: ['hse_101', 'comp_101'],
        certificationsObtenues: 2,
        progressionMoyenne: 60,
        scoreMoyen: 88,
        devoirsMoyenneSur20: 16.5,
        heuresFormation: 22,
        dernierAcces: 'Aujourd’hui',
        statut: 'Actif',
      }
    ];

    setCollaborateurs([...batchList, ...collaborateurs]);
    setShowBatchImportModal(false);
    setToastMessage(`Import réussi : 2 nouveaux collaborateurs ajoutés !`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Send reminder email to employee
  const handleSendReminder = (collab: CollaborateurB2B) => {
    setToastMessage(`Notification de relance envoyée à ${collab.email || collab.nom} !`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Send demo handler
  const handleSendDemo = (e: React.FormEvent) => {
    e.preventDefault();
    setDemoSubmitted(true);
    setTimeout(() => {
      setDemoSubmitted(false);
      setToastMessage('Votre demande d\'audit personnalisé a été transmise au pôle Entreprise !');
      setTimeout(() => setToastMessage(null), 3500);
    }, 1500);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl border border-blue-500/40 flex items-center gap-3 animate-in slide-in-from-bottom-4 duration-200">
          <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
          <span className="text-xs sm:text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Enterprise Hero Banner */}
      <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-black uppercase tracking-wider">
              <Building2 className="w-4 h-4" />
              <span>DO IT ACADEMY • Solutions Entreprises & Industrie 4.0</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
              Gestion de la Formation & Montée en Compétences B2B
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Pilotez les cohortes de techniciens, devoirs notés, conventions de formation et qualifications sécurisées par empreinte SHA-256 pour <strong>{profilEntreprise.raisonSociale}</strong>.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => {
                setQuoteCourseId('all_access');
                setShowQuoteModal(true);
              }}
              className="px-5 py-3 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-md transition flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Générer un Devis Immédiat</span>
            </button>
            <button
              onClick={() => setActiveSubTab('demo')}
              className="px-4 py-3 bg-slate-800/80 hover:bg-slate-700 text-white border border-slate-700 font-bold text-xs sm:text-sm rounded-xl transition flex items-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-blue-400" />
              <span>Demande d'Audit</span>
            </button>
          </div>
        </div>
      </div>

      {/* Aggregate KPI Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-500 uppercase">Collaborateurs</span>
            <Users className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">{totalCollaborateurs}</div>
          <div className="text-[10px] text-emerald-600 font-bold">Actifs sur la plateforme</div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-500 uppercase">Complétion</span>
            <TrendingUp className="w-4 h-4 text-indigo-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">{avgCompletion}%</div>
          <div className="text-[10px] text-indigo-600 font-medium">Moyenne 15 chapitres</div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-500 uppercase">Note Devoirs</span>
            <FileText className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">{avgHomeworkScore} <span className="text-xs font-normal text-slate-400">/20</span></div>
          <div className="text-[10px] text-emerald-600 font-bold">Cas pratiques d'ingénierie</div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-500 uppercase">Brevets SHA-256</span>
            <Award className="w-4 h-4 text-amber-600" />
          </div>
          <div className="text-2xl font-black text-amber-600">{totalBrevets}</div>
          <div className="text-[10px] text-amber-700 font-medium">Titres d'État délivrés</div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1 col-span-2 md:col-span-1">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-500 uppercase">Heures Formation</span>
            <Clock className="w-4 h-4 text-purple-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">{totalHours} h</div>
          <div className="text-[10px] text-purple-600 font-medium">Cumul émargement</div>
        </div>
      </div>

      {/* Sub-Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto border-b border-slate-200 pb-2 scrollbar-none">
        {[
          { id: 'cohortes', label: '1. Matrice & Cohortes Apprenants', icon: Users },
          { id: 'simulateur', label: '2. Simulateur Devis & Remises Volume', icon: Sliders },
          { id: 'documents', label: '3. Conventions & Documents Officiels', icon: FileCheck },
          { id: 'profil', label: '4. Profil Entreprise & SIRET', icon: Building2 },
          { id: 'demo', label: '5. Demande d\'Audit Sur-Mesure', icon: PhoneCall },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-blue-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-500'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: COHORTES & MATRICE */}
      {activeSubTab === 'cohortes' && (
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-6">
          {/* Action Header & Search */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-900" />
                Tableau de Bord des Collaborateurs en Formation ({filteredCollaborateurs.length})
              </h3>
              <p className="text-xs text-slate-500">
                Suivez en direct l'avancement des 15 chapitres, les devoirs notés et les brevets délivrés.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setShowAddMemberModal(true)}
                className="px-3.5 py-2 bg-blue-900 hover:bg-blue-800 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition cursor-pointer shadow-xs"
              >
                <Plus className="w-4 h-4" />
                <span>Inscrire un collaborateur</span>
              </button>
              <button
                onClick={() => setShowBatchImportModal(true)}
                className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold flex items-center gap-1.5 transition cursor-pointer border border-slate-300"
              >
                <Upload className="w-4 h-4 text-blue-700" />
                <span>Import Groupé RH</span>
              </button>
            </div>
          </div>

          {/* Search & Filter Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-200 text-xs">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Rechercher par nom, poste, email..."
                className="w-full pl-9 pr-3 py-2 bg-white rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>

            <div>
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="w-full py-2 px-3 bg-white rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none"
              >
                <option value="all">Tous les départements</option>
                <option value="Production Industrielle">Production Industrielle</option>
                <option value="Maintenance">Maintenance & Travaux Neufs</option>
                <option value="Qualité / HSE">Qualité & HSE</option>
                <option value="R&D">Bureau d'Études / R&D</option>
              </select>
            </div>

            <div>
              <select
                value={selectedStatut}
                onChange={(e) => setSelectedStatut(e.target.value)}
                className="w-full py-2 px-3 bg-white rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none"
              >
                <option value="all">Tous les statuts</option>
                <option value="Actif">En cours (Actif)</option>
                <option value="Certifié">Certifié (Brevet Obtenu)</option>
                <option value="En attente">En attente d'évaluation</option>
              </select>
            </div>
          </div>

          {/* Collaborator Roster Table */}
          <div className="overflow-x-auto border border-slate-200 rounded-2xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 text-slate-700 font-black uppercase text-[10px] tracking-wider border-b border-slate-200">
                <tr>
                  <th className="py-3 px-3">Collaborateur</th>
                  <th className="py-3 px-3">Département</th>
                  <th className="py-3 px-3">Cursus Assignés</th>
                  <th className="py-3 px-3">Progression</th>
                  <th className="py-3 px-3 text-center">Devoirs /20</th>
                  <th className="py-3 px-3 text-center">Examen Final</th>
                  <th className="py-3 px-3">Brevet d'État</th>
                  <th className="py-3 px-3 text-right">Actions RH</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {filteredCollaborateurs.map((collab) => (
                  <tr key={collab.id} className="hover:bg-slate-50/80 transition">
                    <td className="py-3.5 px-3">
                      <div className="font-bold text-slate-900">{collab.nom}</div>
                      <div className="text-[10px] text-slate-400">{collab.poste}</div>
                      {collab.email && <div className="text-[10px] text-blue-800 font-mono">{collab.email}</div>}
                    </td>

                    <td className="py-3.5 px-3">
                      <span className="px-2 py-0.5 rounded-md bg-slate-100 text-[10px] font-semibold text-slate-700">
                        {collab.departement}
                      </span>
                    </td>

                    <td className="py-3.5 px-3">
                      <div className="flex flex-wrap gap-1 max-w-xs">
                        {collab.coursAssignes.map((cId) => {
                          const courseObj = COURSES_DATA.find(c => c.id === cId);
                          return (
                            <span 
                              key={cId} 
                              className="px-2 py-0.5 rounded bg-blue-50 border border-blue-200 text-[10px] font-medium text-blue-900 truncate max-w-[140px]"
                              title={courseObj?.titre || cId}
                            >
                              {courseObj?.titre ? courseObj.titre.substring(0, 18) + '...' : cId}
                            </span>
                          );
                        })}
                      </div>
                    </td>

                    <td className="py-3.5 px-3">
                      <div className="w-24">
                        <div className="flex justify-between text-[10px] font-bold mb-1">
                          <span>{collab.progressionMoyenne}%</span>
                          <span className="text-slate-400 font-normal">{collab.heuresFormation || 20}h</span>
                        </div>
                        <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              collab.progressionMoyenne === 100 
                                ? 'bg-emerald-500' 
                                : collab.progressionMoyenne >= 60 
                                ? 'bg-blue-600' 
                                : 'bg-amber-500'
                            }`}
                            style={{ width: `${collab.progressionMoyenne}%` }}
                          />
                        </div>
                      </div>
                    </td>

                    <td className="py-3.5 px-3 text-center">
                      <span className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">
                        {collab.devoirsMoyenneSur20 ? `${collab.devoirsMoyenneSur20}/20` : '17.0/20'}
                      </span>
                    </td>

                    <td className="py-3.5 px-3 text-center">
                      {collab.examenNoteSur20 ? (
                        <span className="font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                          {collab.examenNoteSur20}/20
                        </span>
                      ) : (
                        <span className="text-[10px] text-slate-400 italic">En cours</span>
                      )}
                    </td>

                    <td className="py-3.5 px-3">
                      {collab.brevetObtenuTitre || collab.statut === 'Certifié' ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-[10px] font-bold">
                          <Award className="w-3 h-3 text-emerald-700" />
                          <span>Brevet SHA-256</span>
                        </span>
                      ) : (
                        <span className="text-[10px] text-slate-400">Épreuve à venir</span>
                      )}
                    </td>

                    <td className="py-3.5 px-3 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => setSelectedCollaboratorForAttendance(collab)}
                          className="px-2.5 py-1 bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-200 rounded-lg text-[11px] font-bold transition cursor-pointer"
                          title="Voir la feuille d'émargement et le bilan de compétences"
                        >
                          Bilan & Émargement
                        </button>
                        <button
                          onClick={() => handleSendReminder(collab)}
                          className="p-1 text-slate-400 hover:text-blue-900 transition"
                          title="Envoyer une relance par email"
                        >
                          <Mail className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: SIMULATEUR DE DEVIS & REMISES VOLUME */}
      {activeSubTab === 'simulateur' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Controls & Options Form */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-6">
            <div>
              <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">
                Configurateur de Parcours B2B
              </span>
              <h3 className="text-xl font-black text-slate-900 mt-0.5">
                Simulez et Chiffrez Votre Plan de Formation
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Choisissez le cursus cible, l'effectif de votre cohorte et les options d'accompagnement sur-mesure.
              </p>
            </div>

            {/* Curriculum selection */}
            <div className="space-y-2">
              <label className="block font-bold text-xs text-slate-800 uppercase">
                1. Sélection du Cursus de Formation :
              </label>
              <select
                value={quoteCourseId}
                onChange={(e) => setQuoteCourseId(e.target.value)}
                className="w-full p-3 rounded-xl border border-slate-300 text-xs sm:text-sm font-semibold bg-slate-50 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              >
                <option value="all_access">
                  👑 PASS ILLIMITÉ INDUSTRIE — Les 13 Domaines Techniques (Pack Entreprise Complet)
                </option>
                {COURSES_DATA.map((c) => (
                  <option key={c.id} value={c.id}>
                    [{c.domaineNom}] {c.titre}
                  </option>
                ))}
              </select>
            </div>

            {/* Slider with Volume Discount Ladder */}
            <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <div className="flex items-center justify-between text-sm font-bold text-slate-800">
                <span>2. Effectif de la cohorte à former :</span>
                <span className="text-blue-950 font-mono text-base bg-white px-3 py-1 rounded-xl border border-slate-200 shadow-xs">
                  {userCount} Collaborateurs
                </span>
              </div>

              <input
                type="range"
                min="1"
                max="100"
                step="1"
                value={userCount}
                onChange={(e) => setUserCount(parseInt(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-900"
              />

              {/* Volume scale indicators */}
              <div className="grid grid-cols-4 gap-2 pt-2 text-[11px] text-center">
                <div className={`p-2 rounded-xl border ${userCount < 5 ? 'bg-blue-900 text-white font-bold border-blue-900' : 'bg-white text-slate-600 border-slate-200'}`}>
                  <div>1 à 4 pers.</div>
                  <div className="text-[10px] opacity-80">Tarif Standard</div>
                </div>
                <div className={`p-2 rounded-xl border ${userCount >= 5 && userCount < 20 ? 'bg-blue-900 text-white font-bold border-blue-900' : 'bg-white text-slate-600 border-slate-200'}`}>
                  <div>5 à 19 pers.</div>
                  <div className="text-[10px] text-emerald-400 font-bold">-15% Remise</div>
                </div>
                <div className={`p-2 rounded-xl border ${userCount >= 20 && userCount < 50 ? 'bg-blue-900 text-white font-bold border-blue-900' : 'bg-white text-slate-600 border-slate-200'}`}>
                  <div>20 à 49 pers.</div>
                  <div className="text-[10px] text-emerald-400 font-bold">-25% Remise</div>
                </div>
                <div className={`p-2 rounded-xl border ${userCount >= 50 ? 'bg-blue-900 text-white font-bold border-blue-900' : 'bg-white text-slate-600 border-slate-200'}`}>
                  <div>50+ pers.</div>
                  <div className="text-[10px] text-amber-400 font-bold">-35% Grand Compte</div>
                </div>
              </div>
            </div>

            {/* Custom Options / Add-ons */}
            <div className="space-y-3">
              <label className="block font-bold text-xs text-slate-800 uppercase">
                3. Options d'Accompagnement & Financement :
              </label>

              <div className="space-y-2">
                <label className="flex items-start gap-3 p-3.5 rounded-2xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition">
                  <input
                    type="checkbox"
                    checked={includeMentor}
                    onChange={(e) => setIncludeMentor(e.target.checked)}
                    className="w-4 h-4 text-blue-900 rounded mt-0.5 accent-blue-900 cursor-pointer"
                  />
                  <div className="flex-1 text-xs">
                    <div className="flex justify-between font-bold text-slate-900">
                      <span>🌟 Mentor Pédagogique Dédié Référent</span>
                      <span className="font-mono text-blue-900">+150 € HT / mois</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Accompagnement hebdomadaire par un formateur expert pour le déblocage des devoirs et travaux pratiques.
                    </p>
                  </div>
                </label>

                <label className="flex items-start gap-3 p-3.5 rounded-2xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition">
                  <input
                    type="checkbox"
                    checked={includeWorkshop}
                    onChange={(e) => setIncludeWorkshop(e.target.checked)}
                    className="w-4 h-4 text-blue-900 rounded mt-0.5 accent-blue-900 cursor-pointer"
                  />
                  <div className="flex-1 text-xs">
                    <div className="flex justify-between font-bold text-slate-900">
                      <span>🛠️ Atelier Pratique Sur-Mesure sur vos Machines d'Usine</span>
                      <span className="font-mono text-blue-900">+350 € HT</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Conception d'exercices pratiques appliqués spécifiquement à votre parc machine et à vos schémas industriels.
                    </p>
                  </div>
                </label>

                <label className="flex items-start gap-3 p-3.5 rounded-2xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition">
                  <input
                    type="checkbox"
                    checked={includeAuditReport}
                    onChange={(e) => setIncludeAuditReport(e.target.checked)}
                    className="w-4 h-4 text-blue-900 rounded mt-0.5 accent-blue-900 cursor-pointer"
                  />
                  <div className="flex-1 text-xs">
                    <div className="flex justify-between font-bold text-slate-900">
                      <span>📋 Rapports d'Audit Hebdomadaire & Matrice SIRH</span>
                      <span className="font-mono text-blue-900">+90 € HT / mois</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Exports certifiés des temps de connexion et feuilles d'émargement conformes aux exigences d'audit Qualiopi et ISO 9001.
                    </p>
                  </div>
                </label>

                <label className="flex items-start gap-3 p-3.5 rounded-2xl border border-emerald-200 bg-emerald-50/50 cursor-pointer transition">
                  <input
                    type="checkbox"
                    checked={includeOpcoSupport}
                    onChange={(e) => setIncludeOpcoSupport(e.target.checked)}
                    className="w-4 h-4 text-emerald-900 rounded mt-0.5 accent-emerald-700 cursor-pointer"
                  />
                  <div className="flex-1 text-xs">
                    <div className="flex justify-between font-bold text-emerald-950">
                      <span>🏛️ Montage du Dossier de Financement OPCO</span>
                      <span className="font-mono text-emerald-700 font-black">INCLUS (0 €)</span>
                    </div>
                    <p className="text-[11px] text-emerald-800 mt-0.5">
                      Nous fournissons tous les formulaires pré-remplis pour une prise en charge intégrale par votre opérateur de compétences.
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Pricing Summary Card */}
          <div className="bg-gradient-to-b from-slate-900 to-blue-950 text-white rounded-3xl p-6 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <FileText className="w-4 h-4" />
                Synthèse Financière & Remise
              </div>

              <div>
                <div className="text-xs text-slate-300">Investissement Total Estimé :</div>
                <div className="text-4xl font-black text-white mt-1">
                  {grandTotalHT.toFixed(2)} € <span className="text-xs font-normal text-slate-400">HT / mois</span>
                </div>
                <div className="text-[11px] text-emerald-400 font-bold mt-1">
                  Soit {priceAfterDiscount.toFixed(2)} € / collaborateur / mois
                </div>
              </div>

              {/* Breakdown */}
              <div className="space-y-2 pt-4 border-t border-slate-800 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Licences ({userCount} utilisateurs) :</span>
                  <span className="font-mono">{(basePricePerUser * userCount).toFixed(2)} €</span>
                </div>

                {discountRate > 0 && (
                  <div className="flex justify-between text-emerald-400 font-bold">
                    <span>Remise volume (-{discountRate}%) :</span>
                    <span className="font-mono">-{(basePricePerUser * userCount * (discountRate / 100)).toFixed(2)} €</span>
                  </div>
                )}

                {optionsTotalHT > 0 && (
                  <div className="flex justify-between text-slate-300">
                    <span>Options complémentaires :</span>
                    <span className="font-mono">+{optionsTotalHT.toFixed(2)} €</span>
                  </div>
                )}

                <div className="flex justify-between text-slate-300 pt-2 border-t border-slate-800">
                  <span>TVA (Formation continue) :</span>
                  <span className="font-mono text-emerald-400 font-bold">0.00 € (Exonérée)</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => setShowQuoteModal(true)}
                className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm rounded-xl transition flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Printer className="w-4 h-4" />
                <span>Générer le Devis Officiel Proforma</span>
              </button>

              <button
                onClick={() => setShowConventionModal(true)}
                className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl transition flex items-center justify-center gap-2 cursor-pointer border border-slate-700"
              >
                <Scale className="w-4 h-4 text-blue-400" />
                <span>Établir la Convention de Formation</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: DOCUMENTS & CONVENTIONS */}
      {activeSubTab === 'documents' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Devis card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-900 flex items-center justify-center font-bold">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-slate-900">Devis Formel B2B</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Devis officiel avec ventilation complète, remises sur volume et mentions légales pour validation financière.
                </p>
              </div>
              <button
                onClick={() => setShowQuoteModal(true)}
                className="w-full py-2.5 bg-blue-900 hover:bg-blue-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Visualiser le Devis Proforma</span>
              </button>
            </div>

            {/* Convention card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-900 flex items-center justify-center font-bold">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-slate-900">Convention de Formation</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Contrat légal conforme aux articles L.6353-1 du Code du travail, prêt pour signature électronique et prise en charge OPCO.
                </p>
              </div>
              <button
                onClick={() => setShowConventionModal(true)}
                className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Signer la Convention</span>
              </button>
            </div>

            {/* Factures card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-900 flex items-center justify-center font-bold">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-slate-900">Factures & Reçus Comptables</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Factures acquittées avec cachet de la Direction Financière DO IT pour justification comptable et remboursement.
                </p>
              </div>
              <button
                onClick={() => {
                  const sampleInvoice: FactureRecu = {
                    id: 'fact_b2b_01',
                    numeroFacture: `FACT-B2B-${new Date().getFullYear()}-09-8421`,
                    dateEmission: new Date().toLocaleDateString('fr-FR'),
                    datePaiement: new Date().toLocaleDateString('fr-FR'),
                    statut: 'Payé & Acquitté',
                    apprenant: {
                      id: 'b2b_itf',
                      nom: profilEntreprise.contactRHNom,
                      email: profilEntreprise.contactRHEmail,
                      telephone: profilEntreprise.contactRHTel,
                      entreprise: profilEntreprise.raisonSociale
                    },
                    designation: `Pack Entreprise B2B — Formation 13 Cursus Industriels (${userCount} Collaborateurs)`,
                    domaineNom: 'Ingénierie & Industrie 4.0',
                    montantHT: grandTotalHT,
                    montantTVA: 0,
                    montantTotal: grandTotalTTC,
                    devise: 'EUR',
                    modePaiement: 'Virement Bancaire SEPA B2B',
                    referenceTransaction: `VIR-SEPA-ITF-${Math.floor(10000 + Math.random() * 90000)}`,
                    empreinteSecurite: 'SHA256-B2B-DOIT-SECURE-9941',
                    emetteur: {
                      nom: 'DO IT ACADEMY B2B',
                      slogan: 'Formation & Certification Industrielle',
                      adresse: '14 Rue des Métiers de l\'Industrie, 75011 Paris',
                      contacts: '+33 (0)1 89 20 44 00 • facturation@doit.edu',
                      rccm: 'Paris B 849 203 184',
                      nif: 'FR 38 849203184'
                    }
                  };
                  setActiveInvoiceForModal(sampleInvoice);
                }}
                className="w-full py-2.5 bg-purple-900 hover:bg-purple-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Générer la Facture Acquittée</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: PROFIL ENTREPRISE & SIRET */}
      {activeSubTab === 'profil' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs max-w-4xl space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-blue-900" />
              Renseignements de l'Entreprise Donneur d'Ordre
            </h3>
            <p className="text-xs text-slate-500">
              Ces informations apparaissent sur vos devis formels, conventions de formation et attestations officielles.
            </p>
          </div>

          <form onSubmit={handleSaveProfil} className="space-y-4 text-xs sm:text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Raison Sociale</label>
                <input
                  type="text"
                  value={profilEntreprise.raisonSociale}
                  onChange={(e) => setProfilEntreprise({ ...profilEntreprise, raisonSociale: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Numéro SIRET</label>
                <input
                  type="text"
                  value={profilEntreprise.siret}
                  onChange={(e) => setProfilEntreprise({ ...profilEntreprise, siret: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-300 font-mono focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Numéro TVA Intracommunautaire</label>
                <input
                  type="text"
                  value={profilEntreprise.numeroTva}
                  onChange={(e) => setProfilEntreprise({ ...profilEntreprise, numeroTva: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-300 font-mono focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">OPCO de rattachement</label>
                <input
                  type="text"
                  value={profilEntreprise.opcoRattachement || ''}
                  onChange={(e) => setProfilEntreprise({ ...profilEntreprise, opcoRattachement: e.target.value })}
                  placeholder="Ex : OPCO 2i, ATLAS, AKTO, Constructys"
                  className="w-full p-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Adresse du Siège Social</label>
              <input
                type="text"
                value={profilEntreprise.adresse}
                onChange={(e) => setProfilEntreprise({ ...profilEntreprise, adresse: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                required
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Code Postal</label>
                <input
                  type="text"
                  value={profilEntreprise.codePostal}
                  onChange={(e) => setProfilEntreprise({ ...profilEntreprise, codePostal: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Ville</label>
                <input
                  type="text"
                  value={profilEntreprise.ville}
                  onChange={(e) => setProfilEntreprise({ ...profilEntreprise, ville: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Pays</label>
                <input
                  type="text"
                  value={profilEntreprise.pays}
                  onChange={(e) => setProfilEntreprise({ ...profilEntreprise, pays: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <h4 className="font-bold text-slate-900 mb-3 text-xs uppercase tracking-wider">
                Responsable Formation / Contact RH Référent :
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Nom du Contact RH</label>
                  <input
                    type="text"
                    value={profilEntreprise.contactRHNom}
                    onChange={(e) => setProfilEntreprise({ ...profilEntreprise, contactRHNom: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Email RH</label>
                  <input
                    type="email"
                    value={profilEntreprise.contactRHEmail}
                    onChange={(e) => setProfilEntreprise({ ...profilEntreprise, contactRHEmail: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Téléphone</label>
                  <input
                    type="tel"
                    value={profilEntreprise.contactRHTel}
                    onChange={(e) => setProfilEntreprise({ ...profilEntreprise, contactRHTel: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-xl shadow-sm transition cursor-pointer flex items-center gap-2"
              >
                <Check className="w-4 h-4" />
                <span>Enregistrer les Modifications</span>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* TAB 5: DEMANDE DE DEMO & AUDIT */}
      {activeSubTab === 'demo' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs max-w-3xl space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">
              Diagnostic & Démonstration B2B
            </span>
            <h3 className="text-xl font-black text-slate-900">
              Demandez un Audit Gratuit des Compétences de vos Équipes
            </h3>
            <p className="text-xs text-slate-600">
              Un ingénieur pédagogique DO IT analyse vos besoins de qualification et vous présente l'environnement de formation sous 24h.
            </p>
          </div>

          {demoSubmitted ? (
            <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200 space-y-3">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                ✓
              </div>
              <h4 className="text-lg font-bold text-emerald-950">Demande d'Audit Enregistrée !</h4>
              <p className="text-xs text-emerald-800 max-w-md mx-auto">
                Votre conseiller dédié prendra contact avec <strong>{demoForm.email || profilEntreprise.contactRHEmail}</strong> pour convenir d'un créneau de démonstration.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSendDemo} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Votre Nom & Prénom</label>
                  <input
                    type="text"
                    value={demoForm.nom || profilEntreprise.contactRHNom}
                    onChange={(e) => setDemoForm({ ...demoForm, nom: e.target.value })}
                    placeholder="Sophie Delamare"
                    className="w-full p-2.5 rounded-xl border border-slate-300"
                    required
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Nom de l'Entreprise</label>
                  <input
                    type="text"
                    value={demoForm.entreprise || profilEntreprise.raisonSociale}
                    onChange={(e) => setDemoForm({ ...demoForm, entreprise: e.target.value })}
                    placeholder="ITF SAS"
                    className="w-full p-2.5 rounded-xl border border-slate-300"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Email Professionnel</label>
                  <input
                    type="email"
                    value={demoForm.email || profilEntreprise.contactRHEmail}
                    onChange={(e) => setDemoForm({ ...demoForm, email: e.target.value })}
                    placeholder="s.delamare@itf-industrie.fr"
                    className="w-full p-2.5 rounded-xl border border-slate-300"
                    required
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Téléphone direct</label>
                  <input
                    type="tel"
                    value={demoForm.telephone || profilEntreprise.contactRHTel}
                    onChange={(e) => setDemoForm({ ...demoForm, telephone: e.target.value })}
                    placeholder="+33 4 72 80 91 00"
                    className="w-full p-2.5 rounded-xl border border-slate-300"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Effectif cible à former</label>
                  <select
                    value={demoForm.effectif}
                    onChange={(e) => setDemoForm({ ...demoForm, effectif: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 bg-white"
                  >
                    <option value="5-10">5 à 10 techniciens</option>
                    <option value="20-50">20 à 50 collaborateurs</option>
                    <option value="50-200">50 à 200 collaborateurs</option>
                    <option value="200+">Plus de 200 collaborateurs (Grand Compte)</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Filière Prioritaire</label>
                  <select
                    value={demoForm.besoin}
                    onChange={(e) => setDemoForm({ ...demoForm, besoin: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-300 bg-white"
                  >
                    <option>Électricité Industrielle & Habilitation</option>
                    <option>Automatisme, Grafcet & API</option>
                    <option>Maintenance Prédictive & TPM</option>
                    <option>Qualité, HSE & Prévention</option>
                    <option>Pass Global Multi-Domaines</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Objectifs et attentes spécifiques</label>
                <textarea
                  rows={3}
                  value={demoForm.message}
                  onChange={(e) => setDemoForm({ ...demoForm, message: e.target.value })}
                  placeholder="Décrivez vos contraintes d'équipe, machines ou échéances d'audit..."
                  className="w-full p-2.5 rounded-xl border border-slate-300"
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black rounded-xl shadow-md transition cursor-pointer"
                >
                  Envoyer ma Demande de Diagnostic B2B
                </button>
              </div>
            </form>
          )}
        </div>
      )}

      {/* MODAL: INSCRIRE UN COLLABORATEUR */}
      {showAddMemberModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 text-slate-900 shadow-2xl border border-slate-200 animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h4 className="font-bold text-base text-slate-900">Inscrire un Collaborateur</h4>
              <button onClick={() => setShowAddMemberModal(false)} className="text-slate-400 text-lg cursor-pointer">✕</button>
            </div>

            <form onSubmit={handleAddMember} className="space-y-3.5 mt-4 text-xs sm:text-sm">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Nom et Prénom</label>
                <input
                  type="text"
                  placeholder="Ex : Lucas Martin"
                  value={newNom}
                  onChange={(e) => setNewNom(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Email Professionnel</label>
                <input
                  type="email"
                  placeholder="l.martin@itf-industrie.fr"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Intitulé du Poste</label>
                <input
                  type="text"
                  placeholder="Ex : Technicien d'Électronique"
                  value={newPoste}
                  onChange={(e) => setNewPoste(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Département</label>
                <select
                  value={newDept}
                  onChange={(e) => setNewDept(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-300 bg-white"
                >
                  <option>Production Industrielle</option>
                  <option>Maintenance</option>
                  <option>Qualité / HSE</option>
                  <option>R&D</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Cursus Assigné</label>
                <select
                  value={newCourseId}
                  onChange={(e) => setNewCourseId(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-300 bg-white"
                >
                  {COURSES_DATA.map((c) => (
                    <option key={c.id} value={c.id}>
                      [{c.domaineNom}] {c.titre}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddMemberModal(false)}
                  className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 font-bold text-white bg-blue-900 hover:bg-blue-800 rounded-xl shadow-xs"
                >
                  Valider l'Inscription
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: IMPORT GROUPÉ RH */}
      {showBatchImportModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 text-slate-900 shadow-2xl border border-slate-200 animate-in fade-in zoom-in duration-200 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h4 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <Upload className="w-5 h-5 text-blue-900" />
                Import Groupé de Collaborateurs (CSV / SIRH)
              </h4>
              <button onClick={() => setShowBatchImportModal(false)} className="text-slate-400 text-lg cursor-pointer">✕</button>
            </div>

            <p className="text-xs text-slate-600">
              Importez simultanément une liste de techniciens au format CSV (Colonnes requises : <code>Nom, Email, Poste, Departement, CursusId</code>).
            </p>

            <div className="border-2 border-dashed border-slate-300 rounded-2xl p-6 text-center space-y-2 bg-slate-50">
              <Upload className="w-8 h-8 text-slate-400 mx-auto" />
              <div className="text-xs font-bold text-slate-700">Fichier exemple prêt à être injecté</div>
              <div className="text-[11px] text-slate-500 font-mono">liste_collaborateurs_itf_2026.csv (2 nouveaux profils)</div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowBatchImportModal(false)}
                className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-xl text-xs"
              >
                Annuler
              </button>
              <button
                onClick={handleBatchImport}
                className="px-5 py-2.5 font-bold text-white bg-blue-900 hover:bg-blue-800 rounded-xl text-xs shadow-xs cursor-pointer flex items-center gap-2"
              >
                <Check className="w-4 h-4" />
                <span>Confirmer l'Import des 2 Collaborateurs</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: DEVIS OFFICIEL */}
      {showQuoteModal && (
        <EnterpriseQuoteModal
          devis={currentDevis}
          onClose={() => setShowQuoteModal(false)}
          onAcceptAndSign={() => {
            setToastMessage('Devis accepté et validé par l\'entreprise !');
            setTimeout(() => setToastMessage(null), 3000);
          }}
        />
      )}

      {/* MODAL: CONVENTION DE FORMATION */}
      {showConventionModal && (
        <EnterpriseConventionModal
          convention={currentConvention}
          onClose={() => setShowConventionModal(false)}
          onSignConvention={() => {
            setToastMessage('Convention de formation signée électroniquement !');
            setTimeout(() => setToastMessage(null), 3000);
          }}
        />
      )}

      {/* MODAL: ATTENDANCE & SKILLS RECORD */}
      {selectedCollaboratorForAttendance && (
        <EnterpriseAttendanceModal
          collaborateur={selectedCollaboratorForAttendance}
          entreprise={profilEntreprise}
          onClose={() => setSelectedCollaboratorForAttendance(null)}
        />
      )}

      {/* MODAL: FACTURE B2B ACQUITTÉE */}
      {activeInvoiceForModal && (
        <InvoiceModal
          facture={activeInvoiceForModal}
          onClose={() => setActiveInvoiceForModal(null)}
        />
      )}
    </div>
  );
};
