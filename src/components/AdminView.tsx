import React, { useState, useEffect } from 'react';
import { Utilisateur, Certification, RapportTP, FactureRecu } from '../types';
import { 
  ShieldCheck, 
  Users, 
  Award, 
  Bell, 
  CheckCircle2, 
  Search, 
  Send, 
  FileText, 
  TrendingUp, 
  Sparkles, 
  AlertCircle,
  FileCheck,
  Receipt,
  Printer,
  Download,
  Eye,
  Check,
  RotateCcw,
  Edit3,
  Clock,
  ExternalLink,
  CreditCard,
  UserCheck,
  RefreshCw
} from 'lucide-react';
import { getStoredTPSubmissions, gradeTPSubmission, saveTPSubmission } from '../utils/tpStorage';
import { generateInvoiceForUser, saveInvoiceToUser } from '../utils/invoiceGenerator';
import { InvoiceModal } from './InvoiceModal';
import { createTPGradedNotification, addNotificationToUser } from '../utils/notificationService';

interface AdminViewProps {
  user: Utilisateur;
  onUpdateUser: (updated: Utilisateur) => void;
}

interface ApprenantRecord {
  id: string;
  nom: string;
  email: string;
  poste: string;
  coursInscrit: string;
  montantPaye: number;
  transactionAirtel: string;
  statutPaiement: 'Validé' | 'En attente';
  factureId?: string;
  factureNumero?: string;
  datePaiement?: string;
  progressionGlobale: number;
  certificatsCount: number;
  derniereActivite: string;
  notifications: string[];
}

export const AdminView: React.FC<AdminViewProps> = ({ user, onUpdateUser }) => {
  const [activeAdminTab, setActiveAdminTab] = useState<'apprenants' | 'tp_grading' | 'facturation'>('apprenants');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedApprenant, setSelectedApprenant] = useState<ApprenantRecord | null>(null);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationSentSuccess, setNotificationSentSuccess] = useState(false);

  // TP Grading State
  const [tpSubmissions, setTpSubmissions] = useState<RapportTP[]>([]);
  const [selectedTP, setSelectedTP] = useState<RapportTP | null>(null);
  const [gradeInput, setGradeInput] = useState<number>(16);
  const [appreciationInput, setAppreciationInput] = useState<string>('');
  const [formateurNameInput, setFormateurNameInput] = useState<string>('Prof. Marcel KOUBEMBA (Responsable Académique)');
  const [criteresState, setCriteresState] = useState<{ critere: string; bareme: number; note: number; commentaire?: string }[]>([]);
  const [tpGradeSuccessToast, setTpGradeSuccessToast] = useState(false);

  // Invoice / Facturation State
  const [invoicesList, setInvoicesList] = useState<FactureRecu[]>([]);
  const [selectedInvoiceToView, setSelectedInvoiceToView] = useState<FactureRecu | null>(null);
  const [newInvoiceCreatedToast, setNewInvoiceCreatedToast] = useState(false);

  useEffect(() => {
    // Load TP submissions
    const list = getStoredTPSubmissions();
    setTpSubmissions(list);

    // Load user invoices or start empty
    const initialInvoices: FactureRecu[] = user.factures && user.factures.length > 0 
      ? user.factures 
      : [];
    setInvoicesList(initialInvoices);
  }, [user]);

  // List of registered students/apprenants in the platform (populated dynamically with logged-in user or empty)
  const [apprenants, setApprenants] = useState<ApprenantRecord[]>(() => {
    if (user.nom && user.email) {
      return [{
        id: user.id || 'usr_001',
        nom: user.nom,
        email: user.email,
        poste: (user as any).poste || 'Apprenant',
        coursInscrit: user.coursSuivis && user.coursSuivis.length > 0 ? user.coursSuivis[0] : 'Formation Technique DO IT',
        montantPaye: 25000,
        transactionAirtel: 'TR-AIRTEL-EN-ATTENTE',
        statutPaiement: 'Validé',
        progressionGlobale: Object.values(user.progressionParCours || {}).reduce<number>((a, b) => a + (Number(b) || 0), 0) || 0,
        certificatsCount: user.certifications?.length || 0,
        derniereActivite: 'En ligne',
        notifications: [],
      }];
    }
    return [];
  });


  const handleValidatePayment = (id: string) => {
    const target = apprenants.find(a => a.id === id);
    if (!target) return;
    handleGenerateInvoiceForStudent(target);
  };

  const handleSendNotification = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedApprenant || !notificationMessage.trim()) return;

    setApprenants(prev => prev.map(app => {
      if (app.id === selectedApprenant.id) {
        return {
          ...app,
          notifications: [notificationMessage.trim(), ...app.notifications]
        };
      }
      return app;
    }));

    setNotificationSentSuccess(true);
    setNotificationMessage('');
    setTimeout(() => setNotificationSentSuccess(false), 3000);
  };

  const handleOpenTPModal = (tp: RapportTP) => {
    setSelectedTP(tp);
    setGradeInput(tp.noteSur20 || 16);
    setAppreciationInput(tp.appreciationFormateur || 'Très bon rapport de laboratoire. Les mesures et les schémas sont conformes aux exigences professionnelles.');
    setCriteresState(
      tp.criteresNotation || [
        { critere: 'Conformité du montage & sécurité', bareme: 5, note: 4 },
        { critere: 'Exactitude des relevés de mesures', bareme: 5, note: 4 },
        { critere: 'Calculs d’écarts & justifications', bareme: 5, note: 4 },
        { critere: 'Qualité de la rédaction & conclusion', bareme: 5, note: 4 },
      ]
    );
  };

  const handleSaveTPGrade = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTP) return;

    const updated = gradeTPSubmission(
      selectedTP.id,
      gradeInput,
      appreciationInput,
      formateurNameInput,
      criteresState
    );

    if (updated) {
      setTpSubmissions(prev => prev.map(s => s.id === updated.id ? updated : s));
      setSelectedTP(updated);
      setTpGradeSuccessToast(true);
      setTimeout(() => setTpGradeSuccessToast(false), 3500);

      // If the graded TP belongs to current user or is in storage, push notification
      if (updated.apprenantId === user.id || !updated.apprenantId) {
        const notif = createTPGradedNotification(
          updated.titreTP,
          updated.coursTitre,
          gradeInput,
          updated.coursId
        );
        const updatedUser = addNotificationToUser(user, notif);
        onUpdateUser(updatedUser);
      }
    }
  };

  const handleGenerateInvoiceForStudent = (apprenant: ApprenantRecord) => {
    const isAirtel = apprenant.transactionAirtel.toUpperCase().includes('AIRTEL') || !apprenant.transactionAirtel.toUpperCase().includes('MTN');
    const paymentChannel = isAirtel 
      ? 'Airtel Money Congo (+242 05 337 97 74)' 
      : 'MTN Mobile Money Congo (+242 06 944 35 68)';

    const newInv = generateInvoiceForUser({
      ...user,
      id: apprenant.id,
      nom: apprenant.nom,
      email: apprenant.email,
    }, {
      coursTitre: apprenant.coursInscrit || 'Filière Technique Spécialisée DO IT',
      domaineNom: 'Génie Industriel & Certifications',
      montantHT: apprenant.montantPaye || 25000,
      modePaiement: paymentChannel,
      referenceTransaction: apprenant.transactionAirtel || `TR-AIRTEL-${Date.now().toString().slice(-6)}`
    });

    setInvoicesList(prev => [newInv, ...prev.filter(f => f.id !== newInv.id)]);
    const updatedUser = saveInvoiceToUser(user, newInv);
    onUpdateUser(updatedUser);

    // Update student record
    const updatedApprenants = apprenants.map(app => {
      if (app.id === apprenant.id) {
        return {
          ...app,
          statutPaiement: 'Validé' as const,
          factureId: newInv.id,
          factureNumero: newInv.numeroFacture,
          datePaiement: newInv.datePaiement,
          derniereActivite: 'Facture officielle émise à l’instant',
          notifications: [
            `Facture officielle N° ${newInv.numeroFacture} acquittée émise pour votre règlement Airtel Money (${newInv.montantTotal.toLocaleString('fr-FR')} FCFA).`,
            ...app.notifications
          ]
        };
      }
      return app;
    });

    setApprenants(updatedApprenants);
    
    // If selected, refresh selected apprenant view
    const refreshed = updatedApprenants.find(a => a.id === apprenant.id);
    if (refreshed) {
      setSelectedApprenant(refreshed);
    }

    // Immediately open invoice modal for instant visual confirmation & download
    setSelectedInvoiceToView(newInv);
    setNewInvoiceCreatedToast(true);
    setTimeout(() => setNewInvoiceCreatedToast(false), 3500);
  };

  const filteredApprenants = apprenants.filter(app => 
    app.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.transactionAirtel.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 pb-12">
      {/* Invoice Viewer Modal */}
      {selectedInvoiceToView && (
        <InvoiceModal
          facture={selectedInvoiceToView}
          onClose={() => setSelectedInvoiceToView(null)}
        />
      )}

      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-white/10">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 border border-amber-400/40 px-3 py-1 rounded-full text-xs font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            Administration & Suivi Académique
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
            Console de Gestion, Correction & Facturation
          </h1>
          <p className="text-sm text-blue-200 max-w-2xl">
            Validez les paiements Airtel/MTN, corrigez manuellement les rapports de TP des apprenants et émettez des factures officielles téléchargeables en PDF.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full md:w-auto">
          <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 text-center">
            <div className="text-xl font-black text-amber-300">{apprenants.length}</div>
            <div className="text-[11px] text-slate-300">Apprenants inscrits</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 text-center">
            <div className="text-xl font-black text-emerald-300">
              {tpSubmissions.length}
            </div>
            <div className="text-[11px] text-slate-300">Rapports de TP</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 text-center col-span-2 sm:col-span-1">
            <div className="text-xl font-black text-blue-300">
              {invoicesList.length}
            </div>
            <div className="text-[11px] text-slate-300">Factures Émises</div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs for Admin Sections */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 bg-white rounded-2xl border border-slate-200 shadow-xs">
        <button
          onClick={() => setActiveAdminTab('apprenants')}
          className={`flex-1 min-w-[200px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            activeAdminTab === 'apprenants'
              ? 'bg-blue-900 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>1. Registre Apprenants & Paiements</span>
        </button>

        <button
          onClick={() => setActiveAdminTab('tp_grading')}
          className={`flex-1 min-w-[200px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            activeAdminTab === 'tp_grading'
              ? 'bg-blue-900 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          <FileCheck className="w-4 h-4 text-amber-400" />
          <span>2. Correction Manuelle des Rapports de TP ({tpSubmissions.length})</span>
        </button>

        <button
          onClick={() => setActiveAdminTab('facturation')}
          className={`flex-1 min-w-[200px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            activeAdminTab === 'facturation'
              ? 'bg-blue-900 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          <Receipt className="w-4 h-4 text-emerald-400" />
          <span>3. Facturation & Reçus Fiscaux PDF</span>
        </button>
      </div>

      {/* TAB 1: APPRENANTS & PAIEMENTS */}
      {activeAdminTab === 'apprenants' && (
        <div className="space-y-6">
          {/* Search and Filter */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Rechercher par nom, e-mail ou transaction..."
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>
            <div className="text-xs text-slate-500 font-medium">
              Affichage de <strong>{filteredApprenants.length}</strong> apprenant(s)
            </div>
          </div>

          {/* Main Grid: Learners List & Detailed Inspector / Notifier */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Learners Table */}
            <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <Users className="w-5 h-5 text-blue-900" />
                  <span>Registre des Apprenants & Paiements Airtel Money</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium bg-blue-50/70 border border-blue-200/60 px-3 py-1.5 rounded-xl">
                  <Receipt className="w-4 h-4 text-blue-900 shrink-0" />
                  <span>Émission de factures certifiées en 1 clic</span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-50 text-slate-500 text-[11px] uppercase tracking-wider border-b border-slate-200 font-bold">
                      <th className="py-3 px-4">Apprenant & Cursus</th>
                      <th className="py-3 px-4">Paiement Airtel Money</th>
                      <th className="py-3 px-4">Facture Fiscale</th>
                      <th className="py-3 px-4">Progression</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredApprenants.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="py-12 px-4 text-center text-slate-500">
                          <Users className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                          <p className="font-bold text-slate-700">Aucun apprenant enregistré pour le moment</p>
                          <p className="text-xs text-slate-400 mt-1">Les apprenants inscrits apparaîtront ici automatiquement dès leur souscription.</p>
                        </td>
                      </tr>
                    ) : (
                      filteredApprenants.map((app) => {
                      const isSelected = selectedApprenant?.id === app.id;
                      const hasInvoice = !!app.factureNumero;
                      return (
                        <tr 
                          key={app.id} 
                          onClick={() => setSelectedApprenant(app)}
                          className={`hover:bg-slate-50/80 transition cursor-pointer ${isSelected ? 'bg-blue-50/70' : ''}`}
                        >
                          <td className="py-3.5 px-4">
                            <div className="font-bold text-slate-900">{app.nom}</div>
                            <div className="text-xs text-slate-500">{app.email}</div>
                            <div className="text-[11px] font-semibold text-blue-950 mt-0.5 max-w-[200px] truncate">
                              {app.coursInscrit}
                            </div>
                          </td>
                          <td className="py-3.5 px-4">
                            <div className="font-mono text-xs font-bold text-slate-800 flex items-center gap-1.5">
                              <CreditCard className="w-3.5 h-3.5 text-amber-600" />
                              <span>{app.transactionAirtel}</span>
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                              {app.statutPaiement === 'Validé' ? (
                                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                                  <CheckCircle2 className="w-3 h-3" /> Validé
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                                  <AlertCircle className="w-3 h-3" /> En attente
                                </span>
                              )}
                              <span className="text-[10px] font-mono text-slate-500 font-semibold">
                                {app.montantPaye.toLocaleString('fr-FR')} FCFA
                              </span>
                            </div>
                          </td>
                          <td className="py-3.5 px-4">
                            {hasInvoice ? (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  const found = invoicesList.find(f => f.numeroFacture === app.factureNumero || f.id === app.factureId);
                                  if (found) {
                                    setSelectedInvoiceToView(found);
                                  } else {
                                    handleGenerateInvoiceForStudent(app);
                                  }
                                }}
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-mono text-[11px] font-bold rounded-lg border border-emerald-300 transition cursor-pointer group"
                                title="Cliquer pour afficher et imprimer la facture officielle"
                              >
                                <FileText className="w-3.5 h-3.5 text-emerald-700 group-hover:scale-110 transition-transform" />
                                <span className="underline decoration-emerald-300 underline-offset-2">{app.factureNumero}</span>
                              </button>
                            ) : (
                              <span className="inline-flex items-center gap-1 text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md font-medium">
                                <Clock className="w-3 h-3 text-slate-400" /> Prête à émettre
                              </span>
                            )}
                          </td>
                          <td className="py-3.5 px-4">
                            <div className="flex items-center gap-2">
                              <div className="w-16 h-2 bg-slate-200 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-900 rounded-full" style={{ width: `${app.progressionGlobale}%` }} />
                              </div>
                              <span className="text-xs font-bold text-slate-700">{app.progressionGlobale}%</span>
                            </div>
                            <div className="text-[10px] text-slate-500 mt-0.5">
                              🏆 {app.certificatsCount} certif.
                            </div>
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            <div className="flex items-center justify-end gap-1.5 flex-wrap">
                              {app.statutPaiement === 'En attente' ? (
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleValidatePayment(app.id);
                                  }}
                                  className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow-xs transition cursor-pointer flex items-center gap-1"
                                  title="Valider le paiement et émettre automatiquement la facture officielle"
                                >
                                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                                  <span>Valider & Émettre</span>
                                </button>
                              ) : (
                                <>
                                  {hasInvoice ? (
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        const found = invoicesList.find(f => f.numeroFacture === app.factureNumero || f.id === app.factureId);
                                        if (found) {
                                          setSelectedInvoiceToView(found);
                                        } else {
                                          handleGenerateInvoiceForStudent(app);
                                        }
                                      }}
                                      className="px-2.5 py-1.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow-xs transition cursor-pointer flex items-center gap-1.5"
                                      title="Ouvrir, imprimer ou télécharger la facture PDF"
                                    >
                                      <Eye className="w-3.5 h-3.5" />
                                      <span>Facture PDF</span>
                                    </button>
                                  ) : (
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleGenerateInvoiceForStudent(app);
                                      }}
                                      className="px-2.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition cursor-pointer flex items-center gap-1.5"
                                      title="Générer la facture officielle pour cet apprenant"
                                    >
                                      <Receipt className="w-3.5 h-3.5" />
                                      <span>Émettre Facture</span>
                                    </button>
                                  )}
                                </>
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    }))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Selected Learner Inspector & Notifier Panel */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <h3 className="font-bold text-slate-900 flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-blue-900" />
                  Dossier & Facturation Apprenant
                </h3>
                {selectedApprenant && (
                  <span className="text-xs font-mono bg-blue-50 text-blue-900 px-2.5 py-1 rounded-lg border border-blue-200">
                    {selectedApprenant.id}
                  </span>
                )}
              </div>

              {selectedApprenant ? (
                <div className="space-y-6">
                  {/* Identity Header */}
                  <div className="space-y-1">
                    <div className="text-lg font-black text-slate-900">{selectedApprenant.nom}</div>
                    <div className="text-xs text-slate-500">{selectedApprenant.email}</div>
                    <div className="text-xs font-semibold text-blue-900 mt-1">{selectedApprenant.poste}</div>
                    <div className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-200 mt-2 font-medium">
                      <span className="font-bold text-slate-700 block">Formation souscrite :</span>
                      {selectedApprenant.coursInscrit}
                    </div>
                  </div>

                  {/* Payment & Metric Summary */}
                  <div className="grid grid-cols-2 gap-3 text-xs bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                    <div>
                      <span className="text-slate-500 block">Transaction :</span>
                      <span className="font-mono font-bold text-slate-800">{selectedApprenant.transactionAirtel}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Statut Paiement :</span>
                      <span className={`font-bold ${selectedApprenant.statutPaiement === 'Validé' ? 'text-emerald-700' : 'text-amber-700'}`}>
                        {selectedApprenant.statutPaiement}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Montant Règlement :</span>
                      <span className="font-bold text-slate-900">{selectedApprenant.montantPaye.toLocaleString('fr-FR')} FCFA</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Progression :</span>
                      <span className="font-bold text-blue-900">{selectedApprenant.progressionGlobale}% ({selectedApprenant.certificatsCount} certif.)</span>
                    </div>
                  </div>

                  {/* Dedicated Invoice Issuance Box */}
                  <div className="bg-gradient-to-br from-blue-950 to-slate-900 text-white p-5 rounded-2xl space-y-3.5 shadow-md border border-blue-900">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Receipt className="w-5 h-5 text-amber-400" />
                        <h4 className="font-black text-sm tracking-wide">Facture & Reçu Airtel Money</h4>
                      </div>
                      {selectedApprenant.factureNumero && (
                        <span className="text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded-full">
                          ✓ Émise & Acquittée
                        </span>
                      )}
                    </div>

                    {selectedApprenant.factureNumero ? (
                      <div className="space-y-3 text-xs">
                        <div className="p-3 bg-white/10 rounded-xl space-y-1 font-mono">
                          <div className="flex justify-between text-slate-300">
                            <span>N° Facture :</span>
                            <span className="font-bold text-amber-300">{selectedApprenant.factureNumero}</span>
                          </div>
                          <div className="flex justify-between text-slate-300">
                            <span>Mode :</span>
                            <span>Airtel Money (+242 05 337 97 74)</span>
                          </div>
                          <div className="flex justify-between text-slate-300">
                            <span>Montant Total :</span>
                            <span className="font-bold text-white">{selectedApprenant.montantPaye.toLocaleString('fr-FR')} FCFA</span>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              const found = invoicesList.find(f => f.numeroFacture === selectedApprenant.factureNumero || f.id === selectedApprenant.factureId);
                              if (found) {
                                setSelectedInvoiceToView(found);
                              } else {
                                handleGenerateInvoiceForStudent(selectedApprenant);
                              }
                            }}
                            className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl transition flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                          >
                            <Printer className="w-4 h-4" />
                            <span>Imprimer / PDF</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => handleGenerateInvoiceForStudent(selectedApprenant)}
                            className="px-3 py-2.5 bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-semibold rounded-xl transition cursor-pointer"
                            title="Générer un duplicata avec un nouveau numéro d'enregistrement"
                          >
                            <RefreshCw className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <p className="text-xs text-slate-300 leading-relaxed">
                          Ce dossier est en attente d'émission de reçu fiscal officiel. Cliquez sur le bouton ci-dessous pour émettre la facture acquittée.
                        </p>
                        <button
                          type="button"
                          onClick={() => handleGenerateInvoiceForStudent(selectedApprenant)}
                          className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <Sparkles className="w-4 h-4 text-slate-950" />
                          <span>Émettre la Facture Officielle (25 000 FCFA)</span>
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Send Notification Form */}
                  <form onSubmit={handleSendNotification} className="space-y-3 pt-2 border-t border-slate-100">
                    <label className="block text-xs font-bold text-slate-700 uppercase">
                      Envoyer une notification directe à l'apprenant
                    </label>
                    <textarea
                      value={notificationMessage}
                      onChange={(e) => setNotificationMessage(e.target.value)}
                      placeholder="Ex: Bonjour, votre facture Airtel Money a été émise et votre accès aux examens est ouvert..."
                      rows={2}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
                      required
                    />
                    {notificationSentSuccess && (
                      <div className="text-xs font-bold text-emerald-700 bg-emerald-50 p-2 rounded-lg border border-emerald-200">
                        ✓ Notification transmise à {selectedApprenant.nom} !
                      </div>
                    )}
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5 text-blue-900" />
                      <span>Envoyer la notification</span>
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center py-12 text-slate-400 space-y-2">
                  <Users className="w-12 h-12 mx-auto stroke-1 text-slate-300" />
                  <p className="text-sm font-medium">Sélectionnez un apprenant pour voir son dossier et lui émettre une facture ou notification.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: CORRECTION MANUELLE DES RAPPORTS DE TP */}
      {activeAdminTab === 'tp_grading' && (
        <div className="space-y-6">
          {tpGradeSuccessToast && (
            <div className="p-4 rounded-2xl bg-emerald-950 border border-emerald-500 text-white flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-sm font-bold">
                  La notation et les commentaires personnalisés ont été enregistrés et notifiés à l'apprenant !
                </span>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* TP Submissions List */}
            <div className="lg:col-span-1 bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-4">
              <h3 className="font-bold text-slate-900 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-blue-900" />
                  Soumissions de TP
                </span>
                <span className="text-xs bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-full font-bold">
                  {tpSubmissions.length}
                </span>
              </h3>

              <div className="space-y-3">
                {tpSubmissions.map((tp) => {
                  const isSelected = selectedTP?.id === tp.id;
                  const isGraded = tp.statut === 'corrige';
                  return (
                    <div
                      key={tp.id}
                      onClick={() => handleOpenTPModal(tp)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                        isSelected 
                          ? 'border-blue-900 bg-blue-50/70 ring-1 ring-blue-900 shadow-xs' 
                          : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <span className="text-xs font-black text-slate-900">
                          {tp.apprenantNom}
                        </span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          isGraded 
                            ? 'bg-emerald-100 text-emerald-800' 
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {isGraded ? `${tp.noteSur20}/20` : 'En attente'}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-blue-950 truncate">
                        {tp.titreTP}
                      </p>
                      <div className="flex items-center justify-between text-[10px] text-slate-500 mt-2">
                        <span>{tp.dateSoumission}</span>
                        {tp.nomFichier && <span className="font-mono truncate max-w-[120px]">📎 {tp.nomFichier}</span>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Grading Form & Copy Preview */}
            <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
              {selectedTP ? (
                <form onSubmit={handleSaveTPGrade} className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-900">
                        <span>Évaluation de Travaux Pratiques</span>
                        <span>•</span>
                        <span className="text-amber-600">{selectedTP.coursTitre}</span>
                      </div>
                      <h3 className="text-lg font-black text-slate-900 mt-1">
                        {selectedTP.titreTP}
                      </h3>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Apprenant : <strong>{selectedTP.apprenantNom}</strong> ({selectedTP.apprenantEmail}) • Soumis le {selectedTP.dateSoumission}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-black px-3 py-1.5 rounded-xl uppercase ${
                        selectedTP.statut === 'corrige'
                          ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                          : 'bg-amber-100 text-amber-900 border border-amber-300'
                      }`}>
                        {selectedTP.statut === 'corrige' ? `Noté : ${selectedTP.noteSur20}/20` : 'En Attente de Note'}
                      </span>
                    </div>
                  </div>

                  {/* Student Submission Display */}
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-700 uppercase tracking-wider block">
                      Copie & Rapport Soumis par l'Apprenant :
                    </label>
                    
                    {selectedTP.nomFichier && (
                      <div className="flex items-center justify-between p-3 bg-blue-50/70 border border-blue-200 rounded-xl text-xs mb-3">
                        <div className="flex items-center gap-2 text-blue-950 font-bold truncate">
                          <FileText className="w-4 h-4 text-blue-700 shrink-0" />
                          <span className="truncate">Fichier joint : {selectedTP.nomFichier} ({selectedTP.tailleFichier || '2.4 MB'})</span>
                        </div>
                        <span className="text-[10px] font-mono text-blue-700 bg-white px-2 py-0.5 rounded border border-blue-200">
                          Document Prêt
                        </span>
                      </div>
                    )}

                    <div className="bg-slate-900 text-slate-100 p-4 rounded-2xl font-mono text-xs max-h-60 overflow-y-auto leading-relaxed whitespace-pre-wrap border border-slate-800">
                      {selectedTP.contenuRapport}
                    </div>
                  </div>

                  {/* Formateur Grading Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-200">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Note Finale (/20) :
                      </label>
                      <input
                        type="number"
                        min="0"
                        max="20"
                        step="0.5"
                        value={gradeInput}
                        onChange={(e) => setGradeInput(parseFloat(e.target.value) || 0)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 font-mono font-bold text-lg text-blue-950 bg-white"
                        required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Nom du Formateur Évaluateur :
                      </label>
                      <input
                        type="text"
                        value={formateurNameInput}
                        onChange={(e) => setFormateurNameInput(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold text-slate-900 bg-white"
                        required
                      />
                    </div>
                  </div>

                  {/* Criteria breakdown */}
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                      Grille de Notation Critériée :
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {criteresState.map((crit, idx) => (
                        <div key={idx} className="bg-white p-3.5 rounded-xl border border-slate-200 text-xs space-y-2">
                          <div className="flex justify-between items-center font-bold text-slate-900">
                            <span className="truncate">{crit.critere}</span>
                            <span className="font-mono text-blue-900">/{crit.bareme} pts</span>
                          </div>
                          <div className="flex gap-2 items-center">
                            <input
                              type="number"
                              min="0"
                              max={crit.bareme}
                              step="0.5"
                              value={crit.note}
                              onChange={(e) => {
                                const val = parseFloat(e.target.value) || 0;
                                setCriteresState(prev => prev.map((c, i) => i === idx ? { ...c, note: val } : c));
                              }}
                              className="w-20 px-2 py-1 border border-slate-300 rounded-lg text-xs font-mono font-bold"
                            />
                            <input
                              type="text"
                              placeholder="Commentaire de critère..."
                              value={crit.commentaire || ''}
                              onChange={(e) => {
                                const val = e.target.value;
                                setCriteresState(prev => prev.map((c, i) => i === idx ? { ...c, commentaire: val } : c));
                              }}
                              className="flex-1 px-2 py-1 border border-slate-300 rounded-lg text-xs"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Written Formateur Feedback */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                      Appréciation Pédagogique & Recommandations :
                    </label>
                    <textarea
                      rows={3}
                      value={appreciationInput}
                      onChange={(e) => setAppreciationInput(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 leading-relaxed"
                      placeholder="Rédigez ici vos observations, points forts et conseils d'amélioration pour l'apprenant..."
                      required
                    />
                  </div>

                  {/* Save Button */}
                  <div className="flex justify-end pt-2">
                    <button
                      type="submit"
                      className="px-8 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow-md transition cursor-pointer flex items-center gap-2"
                    >
                      <Check className="w-4 h-4" />
                      <span>Enregistrer et Valider la Note du TP</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-16 text-slate-400 space-y-2">
                  <FileCheck className="w-12 h-12 mx-auto stroke-1 text-slate-300" />
                  <p className="text-sm font-medium">Sélectionnez une soumission de TP dans la colonne de gauche pour inspecter le travail et lui attribuer une note.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: FACTURATION & REÇUS FISCAUX PDF */}
      {activeAdminTab === 'facturation' && (
        <div className="space-y-6">
          {newInvoiceCreatedToast && (
            <div className="p-4 rounded-2xl bg-emerald-950 border border-emerald-500 text-white flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-sm font-bold">
                  Facture officielle générée et ajoutée au registre fiscal !
                </span>
              </div>
            </div>
          )}

          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  <Receipt className="w-5 h-5 text-blue-900" />
                  Registre des Factures & Reçus Officiels
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Consultez, imprimez ou téléchargez les factures acquittées avec mention TVA et numéro d'enregistrement.
                </p>
              </div>

              <button
                onClick={() => {
                  const newInv = generateInvoiceForUser(user, {
                    coursTitre: 'Cursus Complet Ingénierie & Certifications DO IT',
                    montantHT: 25000,
                  });
                  setInvoicesList(prev => [newInv, ...prev]);
                  setSelectedInvoiceToView(newInv);
                }}
                className="px-4 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs transition cursor-pointer flex items-center gap-2 self-start sm:self-auto shadow-xs"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Générer une Nouvelle Facture Immédiate</span>
              </button>
            </div>

            {/* Invoices List */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-50 text-slate-600 text-[10px] uppercase tracking-wider border-b border-slate-200 font-bold">
                    <th className="py-3 px-4">N° Facture</th>
                    <th className="py-3 px-4">Date</th>
                    <th className="py-3 px-4">Bénéficiaire / Entreprise</th>
                    <th className="py-3 px-4">Désignation</th>
                    <th className="py-3 px-4">Montant TTC</th>
                    <th className="py-3 px-4">Statut</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {invoicesList.map((inv) => (
                    <tr key={inv.id} className="hover:bg-slate-50/80 transition">
                      <td className="py-3.5 px-4 font-mono font-bold text-blue-950">
                        {inv.numeroFacture}
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        {inv.dateEmission}
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-slate-900">{inv.apprenant.nom}</div>
                        <div className="text-[10px] text-slate-500">{inv.apprenant.email}</div>
                      </td>
                      <td className="py-3.5 px-4 max-w-xs truncate text-slate-700">
                        {inv.designation}
                      </td>
                      <td className="py-3.5 px-4 font-mono font-bold text-slate-900">
                        {inv.montantTotal.toLocaleString('fr-FR')} {inv.devise}
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md border border-emerald-300">
                          <CheckCircle2 className="w-3 h-3" /> {inv.statut}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <button
                          onClick={() => setSelectedInvoiceToView(inv)}
                          className="px-3 py-1.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow-xs transition cursor-pointer inline-flex items-center gap-1.5"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Voir & Imprimer</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
