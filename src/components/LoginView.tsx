import React, { useState } from 'react';
import { Utilisateur } from '../types';
import { COURSES_DATA } from '../data/coursesData';
import { GraduationCap, ShieldCheck, Award, BookOpen, ArrowRight, Sparkles, User, Mail, Briefcase, Phone, CheckCircle2, Clock, AlertCircle } from 'lucide-react';

interface LoginViewProps {
  user: Utilisateur;
  onLogin: (updatedUser: Utilisateur) => void;
}

export const LoginView: React.FC<LoginViewProps> = ({ user, onLogin }) => {
  const [name, setName] = useState(user.nom || '');
  const [email, setEmail] = useState(user.email || '');
  const [role, setRole] = useState<'etudiant' | 'formateur' | 'entreprise' | 'admin'>(user.role || 'etudiant');
  const [poste, setPoste] = useState('Technicien Supérieur / Apprenant');
  const [selectedCourseId, setSelectedCourseId] = useState<string>(user.coursSuivis?.[0] || COURSES_DATA[0].id);
  const [transactionId, setTransactionId] = useState('');
  const [paymentStatus, setPaymentStatus] = useState<'none' | 'pending' | 'validated'>('none');
  const [transactionError, setTransactionError] = useState('');

  const [showAdminModal, setShowAdminModal] = useState(false);
  const [adminEmail, setAdminEmail] = useState('cyber.kan587@gmail.com');
  const [adminCode, setAdminCode] = useState('');
  const [adminLoginError, setAdminLoginError] = useState('');

  const handleSumbitTransaction = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanId = transactionId.trim();
    // Airtel Money format validation: minimum 6 characters, alphanumeric or dashes/underscores
    const airtelRegex = /^[A-Z0-9-_]{6,}$/i;
    if (!airtelRegex.test(cleanId)) {
      setTransactionError('Format invalide. Le numéro de transaction Airtel doit comporter au moins 6 caractères (ex: TR-984210).');
      return;
    }
    setTransactionError('');
    setPaymentStatus('pending');
  };

  const handleAdminValidate = () => {
    setPaymentStatus('validated');
  };

  const handleFinalAccess = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || paymentStatus !== 'validated') return;

    const updated: Utilisateur = {
      ...user,
      nom: name.trim(),
      email: email.trim(),
      role: role,
      coursSuivis: [selectedCourseId],
      ...({ poste } as any)
    };
    onLogin(updated);
  };

  const handleQuickDemo = () => {
    const demoUser: Utilisateur = {
      ...user,
      nom: 'Alexandre Vasseur',
      email: 'alexandre.vasseur@industrie-tech.fr',
      role: 'etudiant',
      ...({ poste: 'Apprenti Électromécanicien' } as any)
    };
    onLogin(demoUser);
  };

  const handleAdminLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminEmail.trim().toLowerCase() !== 'cyber.kan587@gmail.com' || adminCode.trim() !== 'Mboka2107') {
      setAdminLoginError("Seul l'admin à le droit de se connecter ici");
      return;
    }
    setAdminLoginError('');
    const adminUser: Utilisateur = {
      ...user,
      nom: 'Cyber Kan (Admin Principal)',
      email: 'cyber.kan587@gmail.com',
      role: 'admin',
      ...({ poste: 'Administrateur Principal' } as any)
    };
    onLogin(adminUser);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-900 text-white flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-xl w-full mx-auto relative z-10 space-y-8">
        {/* Brand Header */}
        <div className="text-center space-y-3">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-400 to-yellow-300 text-blue-950 flex items-center justify-center font-black text-3xl shadow-2xl shadow-amber-500/30 mx-auto ring-4 ring-white/10">
            🎓
          </div>
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 border border-amber-400/40 px-3 py-1 rounded-full text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Plateforme Pédagogique Professionnelle
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              DO IT
            </h1>
            <p className="text-sm text-slate-300 max-w-md mx-auto mt-2">
              Domaines Objectifs Industriels & Techniques • 12 Spécialités, 15 Chapitres, Devoirs Notés & Certificats Sécurisés
            </p>
          </div>
        </div>

        {/* Login / Registration Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-6 sm:p-8 shadow-2xl space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <User className="w-5 h-5 text-amber-400" />
              Inscription & Paiement Sécurisé
            </h2>
            <span className="text-xs bg-red-500/20 text-red-300 border border-red-500/30 px-2.5 py-1 rounded-lg font-semibold">
              Airtel Money Requis
            </span>
          </div>

          <form onSubmit={handleFinalAccess} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Nom complet
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Jean Dupont"
                    className="w-full pl-10 pr-4 py-3 bg-slate-900/60 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm font-medium"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Adresse e-mail
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ex: jean@entreprise.fr"
                    className="w-full pl-10 pr-4 py-3 bg-slate-900/60 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm font-medium"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Rôle sur la plateforme
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value as any)}
                  className="w-full px-3.5 py-3 bg-slate-900/80 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm font-medium cursor-pointer"
                >
                  <option value="etudiant" className="bg-slate-900 text-white">Apprenant / Technicien</option>
                  <option value="entreprise" className="bg-slate-900 text-white">Responsable Entreprise (B2B)</option>
                  <option value="formateur" className="bg-slate-900 text-white">Formateur Industriel</option>
                  <option value="admin" className="bg-slate-900 text-white">Administrateur Académique</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Poste / Spécialité
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={poste}
                    onChange={(e) => setPoste(e.target.value)}
                    placeholder="Ex: Électrotechnicien"
                    className="w-full pl-10 pr-4 py-3 bg-slate-900/60 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm font-medium"
                  />
                </div>
              </div>
            </div>

            {/* Formation Catalog Selection */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-amber-400" />
                Catalogue de Formation Souhaité (Accès exclusif jusqu'à certification)
              </label>
              <select
                value={selectedCourseId}
                onChange={(e) => setSelectedCourseId(e.target.value)}
                className="w-full px-3.5 py-3 bg-slate-900/80 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm font-medium cursor-pointer"
              >
                {COURSES_DATA.map((c) => (
                  <option key={c.id} value={c.id} className="bg-slate-900 text-white">
                    {c.domaineNom} : {c.titre}
                  </option>
                ))}
              </select>
              <p className="text-[11px] text-slate-400 mt-1">
                Note : Vous ne verrez et suivrez que ce catalogue choisi jusqu'à son terme. Pour une autre formation, une nouvelle inscription est requise.
              </p>
            </div>

            {/* Airtel Money Payment Section */}
            <div className="bg-red-950/40 border border-red-500/30 rounded-2xl p-4 sm:p-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-600 text-white font-black flex items-center justify-center shadow-md">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    Paiement requis par Airtel Money
                  </div>
                  <div className="text-xs text-red-200">
                    Envoyez les frais d'inscription au numéro marchand : <strong className="text-amber-300 font-mono text-sm">053379774</strong>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Numéro de transaction Airtel Money
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={transactionId}
                    onChange={(e) => {
                      setTransactionId(e.target.value);
                      if (transactionError) setTransactionError('');
                    }}
                    placeholder="Ex: TR-984210375"
                    disabled={paymentStatus === 'validated'}
                    className="flex-1 px-4 py-2.5 bg-slate-900/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-400 text-sm font-mono"
                  />
                  {paymentStatus !== 'validated' && (
                    <button
                      type="button"
                      onClick={handleSumbitTransaction}
                      disabled={!transactionId.trim()}
                      className="px-4 py-2.5 bg-red-600 hover:bg-red-500 disabled:opacity-50 text-white font-bold text-xs rounded-xl transition cursor-pointer whitespace-nowrap"
                    >
                      Soumettre
                    </button>
                  )}
                </div>
                {transactionError && (
                  <div className="text-red-300 text-xs font-medium flex items-center gap-1.5 mt-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{transactionError}</span>
                  </div>
                )}
              </div>

              {/* Status feedback */}
              {paymentStatus === 'pending' && (
                <div className="flex items-center gap-2.5 bg-amber-500/20 border border-amber-500/40 p-3 rounded-xl text-amber-200 text-xs">
                  <Clock className="w-4 h-4 text-amber-400 animate-spin shrink-0" />
                  <span>Transaction soumise. En attente de validation par l'administrateur (053379774).</span>
                </div>
              )}

              {paymentStatus === 'validated' && (
                <div className="flex items-center gap-2.5 bg-emerald-500/20 border border-emerald-500/40 p-3 rounded-xl text-emerald-200 text-xs font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Paiement validé par l'administrateur ! Vous pouvez maintenant accéder à vos formations.</span>
                </div>
              )}

              {/* Admin Simulation Box for testing */}
              {paymentStatus === 'pending' && (
                <div className="bg-black/40 border border-amber-400/30 p-3 rounded-xl space-y-2 text-xs">
                  <div className="flex items-center gap-1.5 text-amber-300 font-bold">
                    <AlertCircle className="w-3.5 h-3.5" />
                    Simulation Espace Administrateur :
                  </div>
                  <p className="text-slate-300 text-[11px]">
                    En tant qu'administrateur, validez la transaction <strong>{transactionId}</strong> pour débloquer l'accès :
                  </p>
                  <button
                    type="button"
                    onClick={handleAdminValidate}
                    className="w-full py-2 bg-amber-500 hover:bg-amber-400 text-blue-950 font-bold rounded-lg transition text-xs cursor-pointer"
                  >
                    ✓ Valider le paiement (Admin)
                  </button>
                </div>
              )}
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={paymentStatus !== 'validated'}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-gradient-to-r from-amber-400 to-yellow-400 text-blue-950 font-black rounded-xl hover:from-amber-300 hover:to-yellow-300 disabled:opacity-40 disabled:cursor-not-allowed transition shadow-lg shadow-amber-500/20 cursor-pointer text-base"
              >
                <span>Accéder à mes formations</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>

          <div className="mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-semibold">
            <button
              onClick={handleQuickDemo}
              type="button"
              className="text-blue-200 hover:text-white underline underline-offset-4 transition cursor-pointer"
            >
              ⚡ Démo Apprenant (Déjà validé)
            </button>
            <span className="text-slate-500 hidden sm:inline">•</span>
            <button
              onClick={() => setShowAdminModal(true)}
              type="button"
              className="text-amber-300 hover:text-amber-200 underline underline-offset-4 transition cursor-pointer flex items-center gap-1"
            >
              👑 Connexion Espace Administrateur
            </button>
          </div>
        </div>

        {/* Admin Login Modal */}
        {showAdminModal && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-md w-full p-6 text-white shadow-2xl space-y-6 animate-in fade-in zoom-in duration-200">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2 font-bold text-lg text-amber-300">
                  <ShieldCheck className="w-5 h-5" />
                  Connexion Administrateur
                </div>
                <button
                  onClick={() => setShowAdminModal(false)}
                  className="text-slate-400 hover:text-white text-lg font-bold cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleAdminLoginSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                    Adresse e-mail administrateur
                  </label>
                  <input
                    type="email"
                    value={adminEmail}
                    onChange={(e) => setAdminEmail(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                    Mot de passe administrateur
                  </label>
                  <input
                    type="password"
                    value={adminCode}
                    onChange={(e) => {
                      setAdminCode(e.target.value);
                      if (adminLoginError) setAdminLoginError('');
                    }}
                    className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 font-mono"
                    required
                  />
                </div>

                {adminLoginError && (
                  <div className="text-red-400 text-xs font-medium bg-red-950/50 p-2.5 rounded-xl border border-red-500/30">
                    {adminLoginError}
                  </div>
                )}

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAdminModal(false)}
                    className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition cursor-pointer"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 text-sm font-bold text-blue-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 rounded-xl transition cursor-pointer shadow-md"
                  >
                    Se connecter en Admin
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Feature Highlights Footer */}
        <div className="grid grid-cols-3 gap-3 text-center text-xs text-slate-400">
          <div className="bg-white/5 backdrop-blur-md p-3 rounded-2xl border border-white/10">
            <BookOpen className="w-5 h-5 text-amber-400 mx-auto mb-1" />
            <span className="font-semibold text-white block">15 Chapitres</span>
            Parcours structurés
          </div>
          <div className="bg-white/5 backdrop-blur-md p-3 rounded-2xl border border-white/10">
            <Award className="w-5 h-5 text-amber-400 mx-auto mb-1" />
            <span className="font-semibold text-white block">Certificats</span>
            Vérifiables SHA-256
          </div>
          <div className="bg-white/5 backdrop-blur-md p-3 rounded-2xl border border-white/10">
            <ShieldCheck className="w-5 h-5 text-amber-400 mx-auto mb-1" />
            <span className="font-semibold text-white block">Suivi Pro</span>
            Devoirs & Examens
          </div>
        </div>
      </div>
    </div>
  );
};
