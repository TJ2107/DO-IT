import React, { useState } from 'react';
import { Domaine, Cours, NiveauDifficulte, Utilisateur } from '../types';
import { COURSES_DATA } from '../data/coursesData';
import { formatNiveau } from '../utils/storage';
import { Search, Filter, Clock, Award, CheckCircle2, ChevronRight, Sparkles, BookOpen } from 'lucide-react';

interface CatalogueViewProps {
  user: Utilisateur;
  onSelectCourse: (course: Cours) => void;
  onStartExam: (course: Cours) => void;
}

export const CatalogueView: React.FC<CatalogueViewProps> = ({
  user,
  onSelectCourse,
  onStartExam,
}) => {
  const [selectedDomaine, setSelectedDomaine] = useState<Domaine | 'all'>('all');
  const [selectedNiveau, setSelectedNiveau] = useState<NiveauDifficulte | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const domainsList = [
    { id: 'all', name: 'Tous les domaines', icon: '🌐' },
    { id: Domaine.ELECTRICITE, name: 'Électricité', icon: '⚡' },
    { id: Domaine.ELECTRONIQUE, name: 'Électronique', icon: '🔌' },
    { id: Domaine.MECANIQUE, name: 'Mécanique', icon: '⚙️' },
    { id: Domaine.INFORMATIQUE_FONDAMENTALE, name: 'IT Fondamentale', icon: '💻' },
    { id: Domaine.PROGRAMMATION, name: 'Programmation', icon: '🐍' },
    { id: Domaine.COMPTABILITE, name: 'Comptabilité', icon: '📊' },
    { id: Domaine.COMPLIANCE_REGLEMENTAIRE, name: 'Compliance', icon: '📜' },
    { id: Domaine.HSE, name: 'HSE Sécurité', icon: '🦺' },
    { id: Domaine.AUTOMATISME_INDUSTRIEL, name: 'Automatisme', icon: '🤖' },
    { id: Domaine.MAINTENANCE_INDUSTRIELLE, name: 'Maintenance', icon: '🔧' },
    { id: Domaine.GESTION_PROJET, name: 'Gestion Projet', icon: '📋' },
    { id: Domaine.LEADERSHIP_TECHNIQUE, name: 'Leadership Tech', icon: '👔' },
    { id: Domaine.ANGLAIS_TOEFL, name: 'Anglais TOEFL', icon: '🇬🇧' },
  ];

  const isStudent = user.role === 'etudiant';
  const registeredCourseIds = user.coursSuivis || [];

  const filteredCourses = COURSES_DATA.filter((course) => {
    if (isStudent && registeredCourseIds.length > 0 && !registeredCourseIds.includes(course.id)) {
      return false;
    }
    const matchDomaine = selectedDomaine === 'all' || course.domaine === selectedDomaine;
    const matchNiveau = selectedNiveau === 'all' || course.niveau === selectedNiveau;
    const matchSearch =
      searchQuery === '' ||
      course.titre.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.competences.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchDomaine && matchNiveau && matchSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header section */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-blue-900 font-bold text-sm tracking-wide uppercase">
            <BookOpen className="w-4 h-4 text-blue-600" />
            Catalogue Pédagogique Industriel
          </div>
          <h2 className="text-2xl font-black text-slate-900 mt-1">
            Formations & Certifications Métiers
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Découvrez nos parcours structurés avec cours théoriques, exercices pratiques et examens de certification validés.
          </p>
        </div>

        {/* Search */}
        <div className="relative min-w-[280px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Rechercher un cours, compétence, formule..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
          />
        </div>
      </div>

      {isStudent && (
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 flex items-center justify-between gap-4 text-blue-900 text-xs sm:text-sm shadow-xs">
          <div className="flex items-center gap-2.5 font-medium">
            <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
            <span>
              <strong>Parcours actif :</strong> Vous êtes inscrit à ce catalogue de formation exclusif que vous suivez jusqu'à son terme et l'obtention de votre brevet/certification. Pour suivre un autre domaine, une nouvelle inscription est requise.
            </span>
          </div>
        </div>
      )}

      {/* Filter Chips - Domains */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            {domainsList.length - 1} Domaines d'Expertise Technique
          </span>
          <span className="text-xs font-semibold text-slate-500">
            {filteredCourses.length} formation{filteredCourses.length > 1 ? 's' : ''} disponible{filteredCourses.length > 1 ? 's' : ''}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {domainsList.map((dom) => {
            const isSelected = selectedDomaine === dom.id;
            return (
              <button
                key={dom.name}
                onClick={() => setSelectedDomaine(dom.id as any)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium transition cursor-pointer ${
                  isSelected
                    ? 'bg-blue-900 text-white shadow-xs font-bold ring-1 ring-blue-950'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <span>{dom.icon}</span>
                <span>{dom.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Secondary filter: Difficulty */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        <span className="text-slate-400 font-medium flex items-center gap-1">
          <Filter className="w-3.5 h-3.5" /> Niveau :
        </span>
        <button
          onClick={() => setSelectedNiveau('all')}
          className={`px-2.5 py-1 rounded-lg border text-xs font-medium transition ${
            selectedNiveau === 'all'
              ? 'bg-slate-800 text-white border-slate-800'
              : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
          }`}
        >
          Tous
        </button>
        <button
          onClick={() => setSelectedNiveau(NiveauDifficulte.DEBUTANT)}
          className={`px-2.5 py-1 rounded-lg border text-xs font-medium transition ${
            selectedNiveau === NiveauDifficulte.DEBUTANT
              ? 'bg-emerald-700 text-white border-emerald-700'
              : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
          }`}
        >
          Débutant
        </button>
        <button
          onClick={() => setSelectedNiveau(NiveauDifficulte.INTERMEDIAIRE)}
          className={`px-2.5 py-1 rounded-lg border text-xs font-medium transition ${
            selectedNiveau === NiveauDifficulte.INTERMEDIAIRE
              ? 'bg-blue-700 text-white border-blue-700'
              : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
          }`}
        >
          Intermédiaire
        </button>
        <button
          onClick={() => setSelectedNiveau(NiveauDifficulte.AVANCE)}
          className={`px-2.5 py-1 rounded-lg border text-xs font-medium transition ${
            selectedNiveau === NiveauDifficulte.AVANCE
              ? 'bg-purple-700 text-white border-purple-700'
              : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
          }`}
        >
          Avancé
        </button>
      </div>

      {/* Grid of Courses */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredCourses.map((course) => {
          const userProgress = user.progressionParCours[course.id] || 0;
          const isCertified = user.certifications.some((c) => c.coursId === course.id);

          return (
            <div
              key={course.id}
              id={`card-course-${course.id}`}
              className="bg-white rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition duration-200 flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-5">
                {/* Top badges */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl p-2 rounded-xl bg-slate-100">{course.icon}</span>
                    <div>
                      <span className="text-xs font-bold text-blue-900 uppercase tracking-wider block">
                        {course.domaineNom}
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium">
                        Niveau {formatNiveau(course.niveau)}
                      </span>
                    </div>
                  </div>

                  {isCertified ? (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-amber-900 bg-amber-100 border border-amber-300 px-2.5 py-1 rounded-full">
                      <Award className="w-3.5 h-3.5 text-amber-600" />
                      Certifié
                    </span>
                  ) : course.certifiant ? (
                    <span className="text-[11px] font-bold text-blue-800 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full">
                      🎓 Certifiant
                    </span>
                  ) : null}
                </div>

                {/* Title and desc */}
                <h3 className="text-lg font-black text-slate-900 leading-snug group-hover:text-blue-700 transition">
                  {course.titre}
                </h3>
                <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                  {course.description}
                </p>

                {/* Competencies */}
                <div className="mt-3.5 flex flex-wrap gap-1.5">
                  {course.competences.slice(0, 3).map((comp) => (
                    <span
                      key={comp}
                      className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-medium"
                    >
                      {comp}
                    </span>
                  ))}
                  {course.competences.length > 3 && (
                    <span className="text-[10px] bg-slate-50 text-slate-400 px-1.5 py-0.5 rounded-md font-mono">
                      +{course.competences.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer with Progress & CTA */}
              <div className="p-4 bg-slate-50/70 border-t border-slate-100 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    {course.dureeHeures}h estimées
                  </span>
                  <span className="font-semibold text-slate-700">
                    {course.chapitres.length} chapitre{course.chapitres.length > 1 ? 's' : ''}
                  </span>
                </div>

                {/* Progress bar if started */}
                {userProgress > 0 && (
                  <div>
                    <div className="flex justify-between text-[11px] font-bold text-slate-600 mb-1">
                      <span>Progression</span>
                      <span className={userProgress === 100 ? 'text-emerald-600' : 'text-blue-600'}>
                        {userProgress}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          userProgress === 100 ? 'bg-emerald-500' : 'bg-blue-600'
                        }`}
                        style={{ width: `${userProgress}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={() => onSelectCourse(course)}
                    className="w-full py-2 px-3 text-xs font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>{userProgress > 0 ? 'Continuer' : 'Consulter'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onStartExam(course)}
                    className="w-full py-2 px-3 text-xs font-bold text-white bg-blue-900 hover:bg-blue-950 rounded-xl transition flex items-center justify-center gap-1 shadow-xs cursor-pointer"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Passer Test</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
