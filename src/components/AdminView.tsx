import React, { useState } from 'react';
import { Utilisateur, Certification } from '../types';
import { ShieldCheck, Users, Award, Bell, CheckCircle2, Search, Send, FileText, TrendingUp, Sparkles, AlertCircle } from 'lucide-react';

interface AdminViewProps {
  user: Utilisateur;
  onUpdateUser: (updated: Utilisateur) => void;
}

interface ApprenantRecord {
  id: string;
  nom: string;
  email: string;
  poste: string;
  transactionAirtel: string;
  statutPaiement: 'Validé' | 'En attente';
  progressionGlobale: number;
  certificatsCount: number;
  derniereActivite: string;
  notifications: string[];
}

export const AdminView: React.FC<AdminViewProps> = ({ user, onUpdateUser }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedApprenant, setSelectedApprenant] = useState<ApprenantRecord | null>(null);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationSentSuccess, setNotificationSentSuccess] = useState(false);

  // Mock list of registered students/apprenants in the platform
  const [apprenants, setApprenants] = useState<ApprenantRecord[]>([
    {
      id: 'usr_001',
      nom: user.nom || 'Jean Dupont',
      email: user.email || 'jean.dupont@entreprise-tech.fr',
      poste: 'Technicien Supérieur / Apprenant',
      transactionAirtel: 'TR-984210375',
      statutPaiement: 'Validé',
      progressionGlobale: 65,
      certificatsCount: user.certifications.length,
      derniereActivite: 'Aujourd’hui, 11:45',
      notifications: ['Bienvenue sur DO IT ! Votre certificat Électricité a été validé.'],
    },
    {
      id: 'usr_002',
      nom: 'Alexandre Vasseur',
      email: 'alexandre.vasseur@industrie-tech.fr',
      poste: 'Apprenti Électromécanicien',
      transactionAirtel: 'TR-772190841',
      statutPaiement: 'Validé',
      progressionGlobale: 90,
      certificatsCount: 3,
      derniereActivite: 'Hier, 16:20',
      notifications: ['Examen Python réussi avec mention Très Bien.'],
    },
    {
      id: 'usr_003',
      nom: 'Sarah Benali',
      email: 'sarah.benali@qualite-hse.fr',
      poste: 'Ingénieure Qualité & Compliance',
      transactionAirtel: 'TR-556102938',
      statutPaiement: 'Validé',
      progressionGlobale: 45,
      certificatsCount: 1,
      derniereActivite: 'Il y a 2 jours',
      notifications: ['Rappel : Devoir Maison HSE à rendre avant vendredi.'],
    },
    {
      id: 'usr_004',
      nom: 'Thomas Leclerc',
      email: 'thomas.leclerc@automation-rd.fr',
      poste: 'Développeur Automatisme',
      transactionAirtel: 'TR-118293045',
      statutPaiement: 'En attente',
      progressionGlobale: 15,
      certificatsCount: 0,
      derniereActivite: 'En attente de paiement',
      notifications: ['Votre paiement Airtel Money (053379774) est en cours de vérification par l’administration.'],
    },
  ]);

  const handleValidatePayment = (id: string) => {
    setApprenants(prev => prev.map(app => app.id === id ? { ...app, statutPaiement: 'Validé', derniereActivite: 'À l’instant' } : app));
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

  const filteredApprenants = apprenants.filter(app => 
    app.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.transactionAirtel.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 pb-12">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-white/10">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 border border-amber-400/40 px-3 py-1 rounded-full text-xs font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            Administration & Suivi Académique
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
            Console de Gestion & Certificats DO IT
          </h1>
          <p className="text-sm text-blue-200 max-w-2xl">
            Supervisez les enregistrements, validez les paiements Airtel Money (053379774), suivez la progression des apprenants et envoyez des notifications directes.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full md:w-auto">
          <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 text-center">
            <div className="text-xl font-black text-amber-300">{apprenants.length}</div>
            <div className="text-[11px] text-slate-300">Apprenants inscrits</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 text-center">
            <div className="text-xl font-black text-emerald-300">
              {apprenants.reduce((acc, a) => acc + a.certificatsCount, 0)}
            </div>
            <div className="text-[11px] text-slate-300">Certificats émis</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 text-center col-span-2 sm:col-span-1">
            <div className="text-xl font-black text-blue-300">
              {apprenants.filter(a => a.statutPaiement === 'En attente').length}
            </div>
            <div className="text-[11px] text-slate-300">Paiements en attente</div>
          </div>
        </div>
      </div>

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
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <Users className="w-5 h-5 text-blue-900" />
              Registre des Apprenants & Paiements Airtel Money
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-[11px] uppercase tracking-wider border-b border-slate-200 font-bold">
                  <th className="py-3 px-4">Apprenant</th>
                  <th className="py-3 px-4">Paiement Airtel</th>
                  <th className="py-3 px-4">Progression</th>
                  <th className="py-3 px-4">Certificats</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredApprenants.map((app) => (
                  <tr 
                    key={app.id} 
                    onClick={() => setSelectedApprenant(app)}
                    className={`hover:bg-slate-50/80 transition cursor-pointer ${selectedApprenant?.id === app.id ? 'bg-blue-50/60' : ''}`}
                  >
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-slate-900">{app.nom}</div>
                      <div className="text-xs text-slate-500">{app.email} • {app.poste}</div>
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-mono text-xs font-semibold text-slate-800">{app.transactionAirtel}</div>
                      <div>
                        {app.statutPaiement === 'Validé' ? (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                            <CheckCircle2 className="w-3 h-3" /> Validé
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                            <AlertCircle className="w-3 h-3" /> En attente
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-900 rounded-full" style={{ width: `${app.progressionGlobale}%` }} />
                        </div>
                        <span className="text-xs font-bold text-slate-700">{app.progressionGlobale}%</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 font-bold text-amber-800">
                      🏆 {app.certificatsCount}
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      {app.statutPaiement === 'En attente' ? (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleValidatePayment(app.id);
                          }}
                          className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow-xs transition cursor-pointer"
                        >
                          Valider
                        </button>
                      ) : (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedApprenant(app);
                          }}
                          className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition cursor-pointer"
                        >
                          Détails & Notifier
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Selected Learner Inspector & Notifier Panel */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <Bell className="w-5 h-5 text-amber-600" />
              Détails & Notification
            </h3>
            {selectedApprenant && (
              <span className="text-xs font-mono bg-blue-50 text-blue-900 px-2.5 py-1 rounded-lg border border-blue-200">
                {selectedApprenant.id}
              </span>
            )}
          </div>

          {selectedApprenant ? (
            <div className="space-y-6">
              <div className="space-y-1">
                <div className="text-lg font-black text-slate-900">{selectedApprenant.nom}</div>
                <div className="text-xs text-slate-500">{selectedApprenant.email}</div>
                <div className="text-xs font-semibold text-blue-900 mt-1">{selectedApprenant.poste}</div>
              </div>

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
                  <span className="text-slate-500 block">Progression :</span>
                  <span className="font-bold text-blue-900">{selectedApprenant.progressionGlobale}%</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Certificats :</span>
                  <span className="font-bold text-amber-800">{selectedApprenant.certificatsCount} émis</span>
                </div>
              </div>

              {/* Notification History */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700 uppercase">
                  Historique des notifications envoyées
                </label>
                <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                  {selectedApprenant.notifications.map((notif, idx) => (
                    <div key={idx} className="bg-blue-50/70 border border-blue-200 text-blue-900 p-2.5 rounded-xl text-xs">
                      {notif}
                    </div>
                  ))}
                </div>
              </div>

              {/* Send Notification Form */}
              <form onSubmit={handleSendNotification} className="space-y-3 pt-2 border-t border-slate-100">
                <label className="block text-xs font-bold text-slate-700 uppercase">
                  Envoyer une notification directe
                </label>
                <textarea
                  value={notificationMessage}
                  onChange={(e) => setNotificationMessage(e.target.value)}
                  placeholder="Ex: Bonjour Jean, veuillez valider votre devoir maison de mécanique..."
                  rows={3}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
                  required
                />
                {notificationSentSuccess && (
                  <div className="text-xs font-bold text-emerald-700 bg-emerald-50 p-2 rounded-lg border border-emerald-200">
                    ✓ Notification envoyée avec succès à {selectedApprenant.nom} !
                  </div>
                )}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow-xs transition cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Envoyer la notification</span>
                </button>
              </form>
            </div>
          ) : (
            <div className="text-center py-12 text-slate-400 space-y-2">
              <Users className="w-12 h-12 mx-auto stroke-1 text-slate-300" />
              <p className="text-sm font-medium">Sélectionnez un apprenant dans la liste pour voir son dossier détaillé et lui envoyer une notification.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
