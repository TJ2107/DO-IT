import React, { useState } from 'react';
import { Utilisateur } from '../types';
import { Award, BookOpen, Clock, Flame, GraduationCap, ShieldCheck, Sparkles, User, CheckCircle, TrendingUp } from 'lucide-react';

interface HeaderProps {
  user: Utilisateur;
  onUpdateUser: (updated: Utilisateur) => void;
  activeTab: string;
  onSelectTab: (tab: string) => void;
  onLogout?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ user, onUpdateUser, activeTab, onSelectTab, onLogout }) => {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [editName, setEditName] = useState(user.nom);
  const [editEmail, setEditEmail] = useState(user.email);
  const [editRole, setEditRole] = useState(user.role);
  const [editPoste, setEditPoste] = useState((user as any).poste || 'Technicien Supérieur / Apprenant');
  const [editRythme, setEditRythme] = useState((user as any).rythme || 'Régulier (30 min / jour)');

  // Compute stats
  const totalCourses = user.coursSuivis.length;
  const totalCertifs = user.certifications.length;
  const totalHours = Math.round(user.tempsApprentissageMinutes / 60);
  const avgScore = user.certifications.length > 0
    ? Math.round((user.certifications.reduce((acc, c) => acc + c.score, 0) / user.certifications.length) * 100)
    : 85;

  const xpForNextLevel = user.niveauGlobal * 1000;
  const currentLevelXp = user.xp % 1000;
  const progressPercent = Math.min(100, Math.round((currentLevelXp / 1000) * 100));

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateUser({
      ...user,
      nom: editName,
      email: editEmail,
      role: editRole,
      poste: editPoste,
      rythme: editRythme,
    } as any);
    setShowProfileModal(false);
  };

  return (
    <header className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white shadow-xl sticky top-0 z-40">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-400 to-yellow-300 text-blue-950 flex items-center justify-center font-black text-2xl shadow-lg shadow-amber-500/20 ring-2 ring-white/20">
            🎓
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-black tracking-tight text-white flex items-center gap-1.5">
                DO IT
                <span className="text-xs bg-amber-400/20 text-amber-300 border border-amber-400/40 px-2 py-0.5 rounded-full font-bold">
                  v1.0 Pro
                </span>
              </h1>
            </div>
            <p className="text-xs text-blue-200/90 font-medium tracking-wide">
              <strong>D</strong>omaines <strong>O</strong>bjectifs <strong>I</strong>ndustriels & <strong>T</strong>echniques
            </p>
          </div>
        </div>

        {/* User Profile Bar */}
        <div className="flex items-center gap-3 sm:gap-5 self-end md:self-auto">
          {/* Streak */}
          <div 
            title={`${user.streakJours} jours d'apprentissage consécutifs`}
            className="flex items-center gap-1.5 bg-amber-500/20 border border-amber-400/40 px-3 py-1.5 rounded-xl text-amber-300 font-semibold text-xs sm:text-sm cursor-help"
          >
            <Flame className="w-4 h-4 text-amber-400 animate-pulse fill-amber-400" />
            <span>{user.streakJours} j</span>
          </div>

          {/* XP & Level */}
          <div className="hidden sm:flex flex-col items-end">
            <div className="flex items-center gap-1.5 text-xs text-slate-200">
              <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
              <span className="font-bold text-white">Niveau {user.niveauGlobal}</span>
              <span className="text-slate-400">• {user.xp.toLocaleString('fr-FR')} XP</span>
            </div>
            <div className="w-28 h-2 bg-slate-800 rounded-full overflow-hidden mt-1 border border-slate-700">
              <div 
                className="h-full bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full transition-all duration-500" 
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* User Button */}
          <button
            id="user-profile-button"
            onClick={() => setShowProfileModal(true)}
            className="flex items-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/15 px-3 py-1.5 rounded-xl transition cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold flex items-center justify-center text-sm shadow-inner">
              {user.nom.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() || 'JD'}
            </div>
            <div className="text-left hidden md:block">
              <div className="text-xs font-bold leading-tight">{user.nom}</div>
              <div className="text-[10px] text-blue-200 capitalize">{user.role === 'entreprise' ? 'Compte B2B' : 'Apprenant'}</div>
            </div>
          </button>
        </div>
      </div>

      {/* KPI Stats Bar */}
      <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2.5">
              <div className="p-2 rounded-lg bg-blue-500/20 text-blue-300">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <div className="text-base font-black text-white">{totalCourses}</div>
                <div className="text-[11px] text-slate-300">Cours suivis</div>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-2.5">
              <div className="p-2 rounded-lg bg-amber-500/20 text-amber-300">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <div className="text-base font-black text-amber-300">{totalCertifs}</div>
                <div className="text-[11px] text-slate-300">Certifications</div>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-2.5">
              <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-300">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <div className="text-base font-black text-white">{totalHours}h</div>
                <div className="text-[11px] text-slate-300">Temps total</div>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-2.5">
              <div className="p-2 rounded-lg bg-purple-500/20 text-purple-300">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <div className="text-base font-black text-purple-300">{avgScore}%</div>
                <div className="text-[11px] text-slate-300">Score moyen</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Edit Modal */}
      {showProfileModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 text-slate-900 shadow-2xl border border-slate-200 animate-in fade-in zoom-in duration-200 my-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2 font-bold text-lg text-slate-800">
                <User className="w-5 h-5 text-blue-600" />
                Configuration du Profil Apprenant
              </div>
              <button
                onClick={() => setShowProfileModal(false)}
                className="text-slate-400 hover:text-slate-600 text-lg font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveProfile} className="space-y-4 mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                    Adresse e-mail
                  </label>
                  <input
                    type="email"
                    value={editEmail}
                    onChange={(e) => setEditEmail(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                    Rôle / Profil principal
                  </label>
                  <select
                    value={editRole}
                    onChange={(e) => setEditRole(e.target.value as any)}
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm bg-white"
                  >
                    <option value="etudiant">Apprenant / Technicien</option>
                    <option value="entreprise">Responsable Entreprise (B2B)</option>
                    <option value="formateur">Formateur / Tuteur</option>
                    <option value="admin">Administrateur Académique</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                    Poste / Spécialité métier
                  </label>
                  <input
                    type="text"
                    value={editPoste}
                    onChange={(e) => setEditPoste(e.target.value)}
                    placeholder="Ex: Électricien, Ingénieur Maintenance"
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                  Rythme d'apprentissage visé
                </label>
                <select
                  value={editRythme}
                  onChange={(e) => setEditRythme(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm bg-white"
                >
                  <option value="Intensif (1h - 2h / jour)">Intensif (1h - 2h / jour)</option>
                  <option value="Régulier (30 min / jour)">Régulier (30 min / jour)</option>
                  <option value="Flexible (Week-ends & Soirs)">Flexible (Week-ends & Soirs)</option>
                </select>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs space-y-2 text-slate-600">
                <div className="flex justify-between items-center">
                  <span>Identifiant unique :</span>
                  <span className="font-mono font-bold text-slate-800">{user.id}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Certifications obtenues :</span>
                  <span className="font-bold text-emerald-700">{user.certifications.length} valides</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Niveau global & XP :</span>
                  <span className="font-bold text-amber-600">Niveau {user.niveauGlobal} ({user.xp} XP)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Série de flammes active :</span>
                  <span className="font-bold text-orange-600">🔥 {user.streakJours} jours consécutifs</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-100">
                {onLogout && (
                  <button
                    type="button"
                    onClick={() => {
                      setShowProfileModal(false);
                      onLogout();
                    }}
                    className="px-3.5 py-2 text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition cursor-pointer"
                  >
                    Se déconnecter
                  </button>
                )}
                <div className="flex items-center gap-2 ml-auto">
                  <button
                    type="button"
                    onClick={() => setShowProfileModal(false)}
                    className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition cursor-pointer"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-sm font-bold text-white bg-blue-900 hover:bg-blue-800 rounded-lg shadow-sm transition cursor-pointer"
                  >
                    Enregistrer
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};
