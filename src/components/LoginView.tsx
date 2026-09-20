import React, { useState } from 'react';
import { Utilisateur } from '../types';
import { COURSES_DATA } from '../data/coursesData';
import { OnboardingGuideModal } from './OnboardingGuideModal';
import { 
  GraduationCap, 
  ShieldCheck, 
  Award, 
  BookOpen, 
  ArrowRight, 
  Sparkles, 
  User, 
  Mail, 
  Briefcase, 
  Phone, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  MessageSquare,
  Send,
  Copy,
  Check,
  Smartphone,
  Compass,
  Lock,
  ChevronRight,
  Zap,
  Layers,
  FileCode,
  Globe2
} from 'lucide-react';

interface LoginViewProps {
  user: Utilisateur;
  onLogin: (updatedUser: Utilisateur) => void;
}

export const LoginView: React.FC<LoginViewProps> = ({ user, onLogin }) => {
  // Start with empty fields so any new user can input their own details freely
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<'etudiant' | 'formateur' | 'entreprise' | 'admin'>('etudiant');
  const [poste, setPoste] = useState('');
  const [selectedCourseId, setSelectedCourseId] = useState<string>(COURSES_DATA[0].id);

  // Guide Modal State
  const [showGuideModal, setShowGuideModal] = useState(false);

  // Active step in registration
  const [activeStep, setActiveStep] = useState<'profile' | 'payment'>('profile');

  // USSD & WhatsApp Facturation Payment State
  const [selectedNetwork, setSelectedNetwork] = useState<'mtn' | 'airtel'>('mtn');
  const [transactionId, setTransactionId] = useState('');
  const [paymentStatus, setPaymentStatus] = useState<'none' | 'pending' | 'validated'>('none');
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null);

  // Admin Modal State
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [adminEmail, setAdminEmail] = useState('');
  const [adminCode, setAdminCode] = useState('');
  const [adminLoginError, setAdminLoginError] = useState('');

  // Operator configuration numbers
  const mtnNumber = '+242 06 944 35 68';
  const mtnCleanPhone = '242069443568';
  const mtnUssdCode = '*105*1*1*069443568*10000#';
  const mtnTelDialer = 'tel:*105*1*1*069443568*10000%23';

  const airtelNumber = '+242 05 388 68 17';
  const airtelCleanPhone = '242053886817';
  const airtelUssdCode = '*128*1*1*053886817*10000#';
  const airtelTelDialer = 'tel:*128*1*1*053886817*10000%23';

  const currentNumber = selectedNetwork === 'mtn' ? mtnNumber : airtelNumber;
  const currentCleanPhone = selectedNetwork === 'mtn' ? mtnCleanPhone : airtelCleanPhone;
  const currentUssdCode = selectedNetwork === 'mtn' ? mtnUssdCode : airtelUssdCode;
  const currentTelDialer = selectedNetwork === 'mtn' ? mtnTelDialer : airtelTelDialer;

  const selectedCourse = COURSES_DATA.find(c => c.id === selectedCourseId) || COURSES_DATA[0];

  // Order summary generator for WhatsApp & SMS
  const getOrderRecapText = () => {
    const courseTitle = `${selectedCourse.domaineNom} : ${selectedCourse.titre}`;
    const operatorLabel = selectedNetwork === 'mtn' ? `MTN Mobile Money (${mtnNumber})` : `Airtel Money (${airtelNumber})`;
    const nowStr = new Date().toLocaleDateString('fr-FR') + ' à ' + new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });

    return `🎓 FACTURATION DO IT - RECAPITULATIF DE COMMANDE\n` +
      `----------------------------------------\n` +
      `👤 Apprenant : ${name || 'Non renseigné'}\n` +
      `✉️ Email : ${email || 'Non renseigné'}\n` +
      `💼 Poste : ${poste || 'Technicien Supérieur'}\n` +
      `📚 Catalogue choisi : ${courseTitle}\n` +
      `💰 Montant : 10 000 FCFA\n` +
      `📱 Opérateur : ${operatorLabel}\n` +
      (transactionId.trim() ? `🔢 Code/Réf Transaction : ${transactionId.trim()}\n` : '') +
      `📅 Date : ${nowStr}\n` +
      `----------------------------------------\n` +
      `Bonjour l'équipe DO IT, merci de valider mon inscription et l'accès à mes cours !`;
  };

  const handleCopyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopyFeedback(label);
    setTimeout(() => setCopyFeedback(null), 3000);
  };

  const handleOpenWhatsApp = () => {
    const recap = getOrderRecapText();
    const url = `https://wa.me/${currentCleanPhone}?text=${encodeURIComponent(recap)}`;
    window.open(url, '_blank');
    setPaymentStatus('validated');
  };

  const handleOpenSMS = () => {
    const recap = getOrderRecapText();
    const url = `sms:+${currentCleanPhone}?body=${encodeURIComponent(recap)}`;
    window.open(url, '_self');
    setPaymentStatus('validated');
  };

  const handleDirectValidate = () => {
    setPaymentStatus('validated');
  };

  const handleFinalAccess = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setActiveStep('profile');
      return;
    }

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
      nom: 'Jean Dupont',
      email: 'jean.dupont@entreprise-tech.fr',
      role: 'etudiant',
      coursSuivis: ['elec_101', 'prog_101', 'hse_101'],
      ...({ poste: 'Technicien Supérieur / Apprenant' } as any)
    };
    onLogin(demoUser);
  };

  const handleAdminLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminEmail.trim().toLowerCase() !== 'cyber.kan587@gmail.com' || adminCode.trim() !== 'Mboka2107') {
      setAdminLoginError("Seul l'administrateur a le droit d'accéder à cet espace.");
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
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between p-3 sm:p-6 lg:p-8 relative selection:bg-amber-400 selection:text-slate-950 font-sans">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-900/20 via-indigo-950/10 to-transparent blur-3xl pointer-events-none" />

      {/* Top Header Bar */}
      <header className="max-w-6xl w-full mx-auto flex items-center justify-between gap-4 py-3 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-300 text-slate-950 flex items-center justify-center font-black text-xl shadow-lg shadow-amber-400/20 ring-1 ring-white/20">
            🎓
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-black text-xl tracking-tight text-white">DO IT</span>
              <span className="text-[10px] bg-amber-400/20 text-amber-300 font-bold px-2 py-0.5 rounded-full border border-amber-400/30">
                v1.0 Pro
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">
              Domaines Objectifs Industriels & Techniques
            </p>
          </div>
        </div>

        {/* Action Buttons Top Right */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            type="button"
            onClick={() => setShowGuideModal(true)}
            className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white px-3 py-1.5 rounded-xl border border-slate-700 text-xs font-semibold transition cursor-pointer"
            title="Guide pas à pas de la plateforme"
          >
            <Compass className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">Guide Apprenant</span>
            <span className="sm:hidden">Guide</span>
          </button>

          <button
            type="button"
            onClick={handleQuickDemo}
            className="flex items-center gap-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 px-3.5 py-1.5 rounded-xl font-bold text-xs transition shadow-md shadow-amber-400/20 cursor-pointer"
            title="Accéder immédiatement avec un profil complet"
          >
            <Zap className="w-3.5 h-3.5 fill-slate-950" />
            <span>Mode Démo</span>
          </button>
        </div>
      </header>

      {/* Main Content Layout Container */}
      <main className="max-w-6xl w-full mx-auto my-auto py-4 sm:py-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Informational Presentation & Value Props (Bottom on mobile/tablet, Left on desktop) */}
          <div className="order-2 lg:order-1 lg:col-span-5 space-y-6 lg:pt-2">
            <div className="hidden lg:block space-y-3">
              <div className="inline-flex items-center gap-2 bg-amber-400/10 text-amber-300 border border-amber-400/30 px-3 py-1 rounded-full text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Excellence Industrielle & Pédagogique</span>
              </div>
              
              <h2 className="text-2xl font-black tracking-tight text-white leading-tight">
                Plateforme Pédagogique DO IT
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                Apprenez à votre rythme à travers un cursus rigoureux, encadré par des professionnels du secteur technique et industriel.
              </p>
            </div>

            {/* Structured Value Props */}
            <div className="space-y-3">
              <div className="flex items-start gap-3.5 bg-slate-900/70 border border-slate-800/80 p-4 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-amber-400/15 text-amber-400 border border-amber-400/30 flex items-center justify-center shrink-0 mt-0.5">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">13 Filières & 15 Chapitres par Cursus</div>
                  <div className="text-xs text-slate-300 mt-0.5 leading-relaxed">Cours magistraux, synthèses, formules clés et exercices.</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 bg-slate-900/70 border border-slate-800/80 p-4 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-emerald-400/15 text-emerald-400 border border-emerald-400/30 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Devoirs & Rapports de TP Corrigés</div>
                  <div className="text-xs text-slate-300 mt-0.5 leading-relaxed">Évaluations continues notées sur 20 points avec annotations.</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 bg-slate-900/70 border border-slate-800/80 p-4 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-blue-400/15 text-blue-400 border border-blue-400/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Brevets Officiels Sécurisés SHA-256</div>
                  <div className="text-xs text-slate-300 mt-0.5 leading-relaxed">Diplômes infalsifiables vérifiables en ligne par les recruteurs.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Registration & Payment Sheet (Top on mobile/tablet, Right on desktop) */}
          <div className="order-1 lg:order-2 lg:col-span-7 space-y-4">
            
            {/* Main Header directly above registration card */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 sm:p-5 space-y-2">
              <div className="inline-flex items-center gap-2 bg-amber-400/10 text-amber-300 border border-amber-400/30 px-2.5 py-0.5 rounded-full text-[11px] font-semibold">
                <Sparkles className="w-3 h-3" />
                <span>Excellence Industrielle & Pédagogique</span>
              </div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-white leading-tight">
                Qualification & Titres Professionnels
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Accédez à des formations structurées et complètes pour développer vos compétences techniques, réussir vos devoirs notés et obtenir votre brevet officiel.
              </p>
            </div>

            {/* Registration Box */}
            <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-3xl p-5 sm:p-8 shadow-2xl space-y-6">
              
              {/* Form Navigation Tabs */}
              <div className="flex items-center p-1 bg-slate-950/80 rounded-xl border border-slate-800 gap-1 text-xs">
                <button
                  type="button"
                  onClick={() => setActiveStep('profile')}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg font-bold transition cursor-pointer ${
                    activeStep === 'profile'
                      ? 'bg-amber-400 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <User className="w-3.5 h-3.5" />
                  <span>1. Identité & Cursus</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveStep('payment')}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg font-bold transition cursor-pointer ${
                    activeStep === 'payment'
                      ? 'bg-amber-400 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>2. Règlement & Accès</span>
                  {paymentStatus === 'validated' && (
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  )}
                </button>
              </div>

              {/* Step 1 : Identité & Choix de la Spécialité */}
              {activeStep === 'profile' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Nom Complet */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Nom et Prénom <span className="text-amber-400">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Ex: Jean Dupont"
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-950/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm font-medium transition"
                          required
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Adresse E-mail <span className="text-amber-400">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Ex: jean.dupont@entreprise.fr"
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-950/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm font-medium transition"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Rôle */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Statut / Profil
                      </label>
                      <select
                        value={role}
                        onChange={(e) => setRole(e.target.value as any)}
                        className="w-full px-3.5 py-2.5 bg-slate-950/80 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm font-medium cursor-pointer"
                      >
                        <option value="etudiant">Apprenant / Technicien</option>
                        <option value="entreprise">Responsable Entreprise (B2B)</option>
                        <option value="formateur">Formateur Industriel</option>
                      </select>
                    </div>

                    {/* Poste / Spécialité */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Poste ou Fonction
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                          <Briefcase className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          value={poste}
                          onChange={(e) => setPoste(e.target.value)}
                          placeholder="Ex: Électrotechnicien, Apprenant, Ingénieur..."
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-950/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm font-medium"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Choix de la formation */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                        Cursus Professionnel à Suivre
                      </span>
                    </label>
                    <select
                      value={selectedCourseId}
                      onChange={(e) => setSelectedCourseId(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-950/80 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm font-medium cursor-pointer"
                    >
                      {COURSES_DATA.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.domaineNom} : {c.titre}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Boutons d'action */}
                  <div className="pt-3 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={handleQuickDemo}
                      className="text-xs text-slate-400 hover:text-amber-300 underline underline-offset-4 cursor-pointer transition"
                    >
                      ⚡ Passer en mode Démo immédiate
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        if (!name.trim() || !email.trim()) {
                          alert('Veuillez renseigner votre nom et votre adresse e-mail.');
                          return;
                        }
                        setActiveStep('payment');
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition shadow-md shadow-amber-400/20 cursor-pointer"
                    >
                      <span>Étape suivante : Paiement</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2 : Modalité de Paiement Mobile Money & Déblocage */}
              {activeStep === 'payment' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-4 space-y-3.5">
                    <div className="flex items-center justify-between pb-2.5 border-b border-slate-800">
                      <div className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                        <Smartphone className="w-4 h-4 text-amber-400" />
                        <span>Sélectionnez votre opérateur Mobile Money</span>
                      </div>
                      <div className="text-xs font-black text-amber-300 bg-amber-400/10 px-2.5 py-1 rounded-lg border border-amber-400/20">
                        10 000 FCFA
                      </div>
                    </div>

                    {/* Network Switcher */}
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedNetwork('mtn')}
                        className={`p-3 rounded-xl border text-left transition cursor-pointer flex flex-col justify-between ${
                          selectedNetwork === 'mtn'
                            ? 'bg-yellow-500/20 border-yellow-400 text-white ring-2 ring-yellow-400/40'
                            : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <span className="font-black text-xs sm:text-sm text-yellow-300">
                          🟡 MTN Mobile Money
                        </span>
                        <span className="font-mono text-[11px] text-slate-200 mt-1 font-bold">
                          {mtnNumber}
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedNetwork('airtel')}
                        className={`p-3 rounded-xl border text-left transition cursor-pointer flex flex-col justify-between ${
                          selectedNetwork === 'airtel'
                            ? 'bg-red-500/20 border-red-400 text-white ring-2 ring-red-400/40'
                            : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <span className="font-black text-xs sm:text-sm text-red-300">
                          🔴 Airtel Money
                        </span>
                        <span className="font-mono text-[11px] text-slate-200 mt-1 font-bold">
                          {airtelNumber}
                        </span>
                      </button>
                    </div>

                    {/* Quick USSD Dial Box */}
                    <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3">
                      <div className="text-xs text-slate-300 text-center sm:text-left">
                        <div className="text-[11px] text-slate-400">Syntaxe USSD directe :</div>
                        <div className="font-mono text-amber-300 font-bold text-xs">{currentUssdCode}</div>
                      </div>

                      <div className="flex items-center gap-2 w-full sm:w-auto">
                        <a
                          href={currentTelDialer}
                          className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 font-bold text-xs rounded-lg transition shadow cursor-pointer whitespace-nowrap"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>Appel USSD</span>
                        </a>
                        <button
                          type="button"
                          onClick={() => handleCopyText(currentUssdCode, 'Code USSD copié !')}
                          className="p-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold transition cursor-pointer"
                          title="Copier le code"
                        >
                          <Copy className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Reference ID input */}
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                        Numéro de référence / SMS (Facultatif) :
                      </label>
                      <input
                        type="text"
                        value={transactionId}
                        onChange={(e) => setTransactionId(e.target.value)}
                        placeholder="Ex: TR-984210375 ou ID reçu par SMS"
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-amber-400"
                      />
                    </div>

                    {/* WhatsApp & SMS Buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                      <button
                        type="button"
                        onClick={handleOpenWhatsApp}
                        className="flex items-center justify-center gap-2 px-3 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition shadow-md shadow-emerald-600/20 cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>WhatsApp Facturation</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleOpenSMS}
                        className="flex items-center justify-center gap-2 px-3 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl transition shadow-md shadow-blue-600/20 cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>SMS Instantané</span>
                      </button>
                    </div>

                    {copyFeedback && (
                      <div className="text-emerald-400 text-xs font-semibold flex items-center gap-1.5 bg-emerald-950/40 p-2 rounded-lg border border-emerald-500/30">
                        <Check className="w-3.5 h-3.5" />
                        <span>{copyFeedback}</span>
                      </div>
                    )}
                  </div>

                  {/* Validation confirmation */}
                  {paymentStatus === 'validated' ? (
                    <div className="flex items-center gap-2.5 bg-emerald-500/20 border border-emerald-500/40 p-3 rounded-xl text-emerald-200 text-xs">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      <div>
                        <div className="font-bold text-emerald-300">Demande enregistrée !</div>
                        <div className="text-[11px]">Votre accès est prêt. Cliquez ci-dessous pour démarrer vos cours.</div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between text-xs text-slate-400 bg-slate-950/40 p-2.5 rounded-xl border border-slate-800">
                      <span className="text-[11px]">
                        Débloquez l'accès après avoir effectué le transfert
                      </span>
                      <button
                        type="button"
                        onClick={handleDirectValidate}
                        className="text-amber-300 hover:underline font-bold cursor-pointer text-xs"
                      >
                        ✓ Confirmer le règlement
                      </button>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="pt-2 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveStep('profile')}
                      className="px-3 py-2 text-xs font-semibold text-slate-400 hover:text-white rounded-lg transition cursor-pointer"
                    >
                      ← Retour profil
                    </button>

                    <button
                      type="button"
                      onClick={() => handleFinalAccess()}
                      disabled={paymentStatus !== 'validated'}
                      className="flex-1 max-w-xs flex items-center justify-center gap-2 py-3 px-5 bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 font-black rounded-xl hover:from-amber-300 hover:to-yellow-300 disabled:opacity-40 disabled:cursor-not-allowed transition shadow-lg shadow-amber-400/20 cursor-pointer text-xs sm:text-sm"
                    >
                      <span>Accéder à la formation</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Bottom Admin & Quick Access */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                <button
                  type="button"
                  onClick={handleQuickDemo}
                  className="text-slate-400 hover:text-amber-300 transition flex items-center gap-1 cursor-pointer font-medium"
                >
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>Tester sans attendre (Mode Démo)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowAdminModal(true)}
                  className="text-slate-400 hover:text-amber-300 transition flex items-center gap-1 cursor-pointer font-medium"
                >
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Accès Administrateur</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl w-full mx-auto py-3 text-center text-[11px] text-slate-500 border-t border-slate-900 relative z-10">
        DO IT • Plateforme Pédagogique & Certifications Industrielles • Support Facturation Congo : +242 06 944 35 68 / +242 05 388 68 17
      </footer>

      {/* Admin Login Modal */}
      {showAdminModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-md w-full p-6 text-white shadow-2xl space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2 font-bold text-base text-amber-300">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                <span>Console Administrateur DO IT</span>
              </div>
              <button
                onClick={() => setShowAdminModal(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 text-sm font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAdminLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                  E-mail administrateur
                </label>
                <input
                  type="email"
                  value={adminEmail}
                  onChange={(e) => setAdminEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                  Code de sécurité maître
                </label>
                <input
                  type="password"
                  value={adminCode}
                  onChange={(e) => {
                    setAdminCode(e.target.value);
                    if (adminLoginError) setAdminLoginError('');
                  }}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 font-mono"
                  placeholder="••••••••"
                  required
                />
              </div>

              {adminLoginError && (
                <div className="text-red-400 text-xs font-medium bg-red-950/50 p-2.5 rounded-xl border border-red-500/30 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{adminLoginError}</span>
                </div>
              )}

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAdminModal(false)}
                  className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition cursor-pointer"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 rounded-xl transition cursor-pointer shadow-md"
                >
                  Connexion Console
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Guide Visuel Pas à Pas Modal */}
      <OnboardingGuideModal
        isOpen={showGuideModal}
        onClose={() => setShowGuideModal(false)}
      />
    </div>
  );
};
