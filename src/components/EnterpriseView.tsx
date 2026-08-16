import React, { useState } from 'react';
import { CollaborateurB2B } from '../types';
import { MOCK_B2B_COLLABORATEURS } from '../data/mockUser';
import { COURSES_DATA } from '../data/coursesData';
import { 
  Building2, Users, CheckCircle2, TrendingUp, DollarSign, 
  Send, PhoneCall, ShieldCheck, Plus, Sparkles, FileSpreadsheet
} from 'lucide-react';

export const EnterpriseView: React.FC = () => {
  const [collaborateurs, setCollaborateurs] = useState<CollaborateurB2B[]>(MOCK_B2B_COLLABORATEURS);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showAddMemberModal, setShowAddMemberModal] = useState(false);
  const [demoSubmitted, setDemoSubmitted] = useState(false);

  // Pricing calculator state
  const [userCount, setUserCount] = useState(10);
  const pricePerUser = userCount >= 20 ? 39 : 49;
  const monthlyTotal = userCount * pricePerUser;

  // New member form
  const [newNom, setNewNom] = useState('');
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
    message: '',
  });

  const handleAddMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNom.trim()) return;

    const newCollab: CollaborateurB2B = {
      id: `emp_${Date.now()}`,
      nom: newNom,
      poste: newPoste || 'Technicien Spécialisé',
      departement: newDept,
      coursAssignes: [newCourseId],
      certificationsObtenues: 0,
      progressionMoyenne: 0,
      scoreMoyen: 0,
      statut: 'En attente',
    };

    setCollaborateurs([newCollab, ...collaborateurs]);
    setNewNom('');
    setNewPoste('');
    setShowAddMemberModal(false);
  };

  const handleSendDemo = (e: React.FormEvent) => {
    e.preventDefault();
    setDemoSubmitted(true);
    setTimeout(() => {
      setDemoSubmitted(false);
      setShowDemoModal(false);
      setDemoForm({
        nom: '',
        entreprise: '',
        email: '',
        telephone: '',
        effectif: '20-50',
        message: '',
      });
    }, 2500);
  };

  return (
    <div className="space-y-8">
      {/* Enterprise Hero Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-4 h-4" />
            DO IT for Enterprise & Industry
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Montez les Compétences Techniques de vos Équipes
          </h2>
          <p className="text-sm text-slate-300 max-w-xl">
            Pilotez les plans de formation de vos techniciens, ingénieurs et opérateurs. Matrice de polyvalence, certifications officielles et conformité OPCO/ISO.
          </p>
        </div>

        <button
          onClick={() => setShowDemoModal(true)}
          className="px-6 py-3.5 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-lg transition flex items-center gap-2 self-start md:self-auto cursor-pointer"
        >
          <PhoneCall className="w-4 h-4" />
          <span>Demander une démo B2B personnalisée</span>
        </button>
      </div>

      {/* Key Corporate Value Props */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-lg">
            🎯
          </div>
          <h3 className="text-base font-bold text-slate-900">Parcours Métiers Sur-Mesure</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Assignez des cursus spécialisés en Électricité, Automatisme, HSE ou Programmation avec des tests obligatoires de validation d'acquis.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-lg">
            📊
          </div>
          <h3 className="text-base font-bold text-slate-900">Tableau de Bord RH & SIRH</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Suivez les temps de connexion, les taux de complétion et exportez les rapports certifiés pour vos audits qualité (ISO 9001, Qualiopi).
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-lg">
            🔒
          </div>
          <h3 className="text-base font-bold text-slate-900">Diplômes Vérifiables par Tiers</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Chaque certificat délivré possède un hash d'authenticité unique consultable en un clic pour justifier des habilitations en entreprise.
          </p>
        </div>
      </div>

      {/* Live Team Dashboard Matrix */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-700" />
              Matrice des Collaborateurs en Formation ({collaborateurs.length})
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Suivi en temps réel des apprenants de votre organisation.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowAddMemberModal(true)}
              className="px-4 py-2 bg-blue-900 hover:bg-blue-950 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Inscrire un collaborateur</span>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 text-slate-500 font-bold uppercase text-[11px] border-y border-slate-200">
              <tr>
                <th className="py-3 px-4">Collaborateur</th>
                <th className="py-3 px-4">Département</th>
                <th className="py-3 px-4">Formations assignées</th>
                <th className="py-3 px-4">Progression</th>
                <th className="py-3 px-4">Score Moyen</th>
                <th className="py-3 px-4">Certifications</th>
                <th className="py-3 px-4">Statut</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {collaborateurs.map((collab) => (
                <tr key={collab.id} className="hover:bg-slate-50/80 transition">
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-slate-900">{collab.nom}</div>
                    <div className="text-[11px] text-slate-400">{collab.poste}</div>
                  </td>
                  <td className="py-3.5 px-4 text-xs">{collab.departement}</td>
                  <td className="py-3.5 px-4">
                    <div className="flex flex-wrap gap-1">
                      {collab.coursAssignes.map((cId) => (
                        <span key={cId} className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-mono text-slate-700">
                          {cId}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="w-24">
                      <div className="flex justify-between text-[10px] font-bold mb-1">
                        <span>{collab.progressionMoyenne}%</span>
                      </div>
                      <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            collab.progressionMoyenne === 100 ? 'bg-emerald-500' : 'bg-blue-600'
                          }`}
                          style={{ width: `${collab.progressionMoyenne}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="font-bold text-slate-900">
                      {collab.scoreMoyen > 0 ? `${collab.scoreMoyen}%` : '-'}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="font-bold text-amber-600 flex items-center gap-1">
                      🎓 {collab.certificationsObtenues}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                      collab.statut === 'Certifié'
                        ? 'bg-emerald-100 text-emerald-800'
                        : collab.statut === 'Actif'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      {collab.statut}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Interactive Pricing Calculator */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">
              Calculateur d'Abonnement B2B
            </span>
            <h3 className="text-xl font-black text-slate-900 mt-0.5">
              Simulez votre investissement formation d'équipe
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Accès illimité aux 12 domaines, certifications illimitées et support dédié.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-blue-200 shadow-sm text-right">
            <div className="text-xs text-slate-500 font-medium">Investissement mensuel HT</div>
            <div className="text-3xl font-black text-blue-900">{monthlyTotal} € <span className="text-sm font-normal text-slate-500">/ mois</span></div>
            <div className="text-[11px] text-emerald-700 font-bold mt-0.5">Soit {pricePerUser}€ / collaborateur / mois</div>
          </div>
        </div>

        {/* Range slider */}
        <div className="space-y-2 bg-white p-5 rounded-xl border border-slate-200">
          <div className="flex justify-between text-sm font-bold text-slate-800">
            <span>Nombre de collaborateurs à former :</span>
            <span className="text-blue-900 font-mono text-base">{userCount} utilisateurs</span>
          </div>
          <input
            type="range"
            min="5"
            max="100"
            step="1"
            value={userCount}
            onChange={(e) => setUserCount(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-900"
          />
          <div className="flex justify-between text-[11px] text-slate-400 font-mono">
            <span>5 (Pack Launch)</span>
            <span>20 (Remise Volume 39€/u)</span>
            <span>50</span>
            <span>100+ (Grand Compte)</span>
          </div>
        </div>
      </div>

      {/* Add Member Modal */}
      {showAddMemberModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 text-slate-900 shadow-2xl border border-slate-200 animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h4 className="font-bold text-base text-slate-900">Inscrire un nouveau collaborateur</h4>
              <button onClick={() => setShowAddMemberModal(false)} className="text-slate-400 text-lg">✕</button>
            </div>

            <form onSubmit={handleAddMember} className="space-y-4 mt-4 text-xs sm:text-sm">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Nom et Prénom</label>
                <input
                  type="text"
                  placeholder="Ex : Lucas Martin"
                  value={newNom}
                  onChange={(e) => setNewNom(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Intitulé du poste</label>
                <input
                  type="text"
                  placeholder="Ex : Technicien d'Électronique"
                  value={newPoste}
                  onChange={(e) => setNewPoste(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Département / Service</label>
                <select
                  value={newDept}
                  onChange={(e) => setNewDept(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white"
                >
                  <option>Production Industrielle</option>
                  <option>Maintenance & Travaux Neufs</option>
                  <option>Qualité & HSE</option>
                  <option>Bureau d'Études / R&D</option>
                  <option>IT & Systèmes</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Parcours certifiant assigné</label>
                <select
                  value={newCourseId}
                  onChange={(e) => setNewCourseId(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white"
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
                  className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 font-bold text-white bg-blue-900 hover:bg-blue-950 rounded-lg"
                >
                  Inscrire
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Demo Request Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 text-slate-900 shadow-2xl border border-slate-200 animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <div className="text-xs font-bold text-blue-900 uppercase">Espace Entreprise B2B</div>
                <h4 className="font-black text-xl text-slate-900">Demande de Démonstration</h4>
              </div>
              <button onClick={() => setShowDemoModal(false)} className="text-slate-400 text-lg">✕</button>
            </div>

            {demoSubmitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto text-2xl">
                  ✓
                </div>
                <h4 className="text-xl font-bold text-slate-900">Demande bien reçue !</h4>
                <p className="text-xs text-slate-600">
                  Un conseiller formation DO IT prendra contact avec vous sous 24h ouvrées pour configurer votre environnement de test.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSendDemo} className="space-y-3.5 mt-4 text-xs sm:text-sm">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Votre Nom</label>
                    <input
                      type="text"
                      placeholder="Jean Dupont"
                      value={demoForm.nom}
                      onChange={(e) => setDemoForm({ ...demoForm, nom: e.target.value })}
                      className="w-full p-2.5 rounded-lg border border-slate-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Entreprise</label>
                    <input
                      type="text"
                      placeholder="Tech Industries SAS"
                      value={demoForm.entreprise}
                      onChange={(e) => setDemoForm({ ...demoForm, entreprise: e.target.value })}
                      className="w-full p-2.5 rounded-lg border border-slate-300"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Email Professionnel</label>
                    <input
                      type="email"
                      placeholder="jean.dupont@entreprise.fr"
                      value={demoForm.email}
                      onChange={(e) => setDemoForm({ ...demoForm, email: e.target.value })}
                      className="w-full p-2.5 rounded-lg border border-slate-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Téléphone</label>
                    <input
                      type="tel"
                      placeholder="06 12 34 56 78"
                      value={demoForm.telephone}
                      onChange={(e) => setDemoForm({ ...demoForm, telephone: e.target.value })}
                      className="w-full p-2.5 rounded-lg border border-slate-300"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Effectif à former</label>
                  <select
                    value={demoForm.effectif}
                    onChange={(e) => setDemoForm({ ...demoForm, effectif: e.target.value })}
                    className="w-full p-2.5 rounded-lg border border-slate-300 bg-white"
                  >
                    <option value="5-10">5 à 10 collaborateurs</option>
                    <option value="20-50">20 à 50 collaborateurs</option>
                    <option value="50-200">50 à 200 collaborateurs</option>
                    <option value="200+">Plus de 200 collaborateurs</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Besoins spécifiques</label>
                  <textarea
                    rows={3}
                    placeholder="Quels sont les domaines prioritaires (ex: Électricité, HSE, Automatisme) ?"
                    value={demoForm.message}
                    onChange={(e) => setDemoForm({ ...demoForm, message: e.target.value })}
                    className="w-full p-2.5 rounded-lg border border-slate-300"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowDemoModal(false)}
                    className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm"
                  >
                    Envoyer ma demande
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
