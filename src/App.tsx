import React, { useState } from 'react';
import { Utilisateur, Cours, Certification } from './types';
import { loadUserData, saveUserData } from './utils/storage';
import { COURSES_DATA } from './data/coursesData';
import { Header } from './components/Header';
import { NavigationTabs } from './components/NavigationTabs';
import { CatalogueView } from './components/CatalogueView';
import { CourseViewer } from './components/CourseViewer';
import { TestViewer } from './components/TestViewer';
import { HomeworkViewer } from './components/HomeworkViewer';
import { CollectiveCorrectionView } from './components/CollectiveCorrectionView';
import { BrevetView } from './components/BrevetView';
import { CertificationsView } from './components/CertificationsView';
import { EnterpriseView } from './components/EnterpriseView';
import { SandboxView } from './components/SandboxView';
import { VerifyCertificateView } from './components/VerifyCertificateView';
import { CertificateModal } from './components/CertificateModal';
import { FlashcardsView } from './components/FlashcardsView';
import { GlossaryView } from './components/GlossaryView';
import { RemediationView } from './components/RemediationView';
import { LoginView } from './components/LoginView';
import { AdminView } from './components/AdminView';
import { OnboardingGuideModal } from './components/OnboardingGuideModal';

export default function App() {
  const [user, setUser] = useState<Utilisateur>(loadUserData);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('catalogue');
  const [selectedCourse, setSelectedCourse] = useState<Cours>(COURSES_DATA[0]);
  const [examCourse, setExamCourse] = useState<Cours | null>(null);
  const [modalCert, setModalCert] = useState<Certification | null>(null);
  const [showGuideModal, setShowGuideModal] = useState<boolean>(false);

  // Sync with local storage
  const handleUpdateUser = (updated: Utilisateur) => {
    setUser(updated);
    saveUserData(updated);
  };

  const handleSelectCourse = (course: Cours) => {
    setSelectedCourse(course);
    setActiveTab('cours');
  };

  const handleStartExam = (course: Cours) => {
    setSelectedCourse(course);
    setExamCourse(course);
    setActiveTab('test');
  };

  const handleViewCertification = (cert: Certification) => {
    setModalCert(cert);
  };

  if (!isAuthenticated) {
    return (
      <LoginView
        user={user}
        onLogin={(updatedUser) => {
          handleUpdateUser(updatedUser);
          if (updatedUser.role === 'admin') {
            setActiveTab('admin');
          } else {
            // Automatically open guide for learners on login if not seen
            const hasSeenGuide = localStorage.getItem('doit_has_seen_guide');
            if (!hasSeenGuide) {
              setShowGuideModal(true);
              localStorage.setItem('doit_has_seen_guide', 'true');
            }
          }
          setIsAuthenticated(true);
        }}
      />
    );
  }

  const isAdmin = user.role === 'admin' || user.email?.toLowerCase() === 'cyber.kan587@gmail.com';
  if (activeTab === 'admin' && !isAdmin) {
    setActiveTab('catalogue');
  }

  const handleNavigateFromNotification = (tab: string, courseId?: string) => {
    if (courseId) {
      const foundCourse = COURSES_DATA.find(c => c.id === courseId);
      if (foundCourse) {
        setSelectedCourse(foundCourse);
      }
    }
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 flex flex-col selection:bg-amber-300 selection:text-slate-950">
      {/* Header */}
      <Header
        user={user}
        onUpdateUser={handleUpdateUser}
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        onNavigateTo={handleNavigateFromNotification}
        onLogout={() => setIsAuthenticated(false)}
        onOpenGuide={() => setShowGuideModal(true)}
      />

      {/* Navigation Tabs */}
      <NavigationTabs
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        activeCourseTitle={selectedCourse?.titre}
        hasActiveTest={!!examCourse}
        user={user}
      />

      {/* Main App Content View Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeTab === 'catalogue' && (
          <CatalogueView
            user={user}
            onSelectCourse={handleSelectCourse}
            onStartExam={handleStartExam}
          />
        )}

        {activeTab === 'cours' && (
          <CourseViewer
            course={selectedCourse}
            user={user}
            onUpdateUser={handleUpdateUser}
            onStartExam={handleStartExam}
            onBackToCatalogue={() => setActiveTab('catalogue')}
            onOpenHomework={() => setActiveTab('devoirs')}
            onOpenCollectiveCorrection={() => setActiveTab('correction-ensemble')}
            onOpenBrevet={() => setActiveTab('brevet')}
          />
        )}

        {activeTab === 'devoirs' && (
          <HomeworkViewer
            cours={selectedCourse}
            utilisateur={user}
            onUpdateUser={handleUpdateUser}
            onNavigateToCollectiveCorrection={() => setActiveTab('correction-ensemble')}
            onBackToCourse={() => setActiveTab('cours')}
          />
        )}

        {activeTab === 'correction-ensemble' && (
          <CollectiveCorrectionView
            cours={selectedCourse}
            utilisateur={user}
            onUpdateUser={handleUpdateUser}
            onNavigateToBrevet={() => setActiveTab('brevet')}
            onNavigateToDevoirs={() => setActiveTab('devoirs')}
            onNavigateToExamen={() => handleStartExam(selectedCourse)}
            onBackToCourse={() => setActiveTab('cours')}
          />
        )}

        {activeTab === 'brevet' && (
          <BrevetView
            cours={selectedCourse}
            utilisateur={user}
            onBackToCourse={() => setActiveTab('cours')}
            onSelectOtherCourse={(courseId) => {
              const c = COURSES_DATA.find(item => item.id === courseId);
              if (c) setSelectedCourse(c);
            }}
          />
        )}

        {activeTab === 'test' && (
          <TestViewer
            course={examCourse || selectedCourse}
            user={user}
            onUpdateUser={handleUpdateUser}
            onViewCertification={handleViewCertification}
            onBackToCourse={() => setActiveTab('cours')}
          />
        )}

        {activeTab === 'flashcards' && (
          <FlashcardsView
            user={user}
            onUpdateUser={handleUpdateUser}
            onOpenCourse={(coursIdOrCourse: any) => {
              if (typeof coursIdOrCourse === 'string') {
                const c = COURSES_DATA.find(item => item.id === coursIdOrCourse);
                if (c) handleSelectCourse(c);
              } else if (coursIdOrCourse && coursIdOrCourse.id) {
                handleSelectCourse(coursIdOrCourse);
              }
            }}
          />
        )}

        {activeTab === 'glossaire' && (
          <GlossaryView
            onSelectTerm={() => {}}
            onClose={() => setActiveTab('cours')}
          />
        )}

        {activeTab === 'remediation' && (
          <RemediationView
            user={user}
            onReviewChapter={(coursId, chapitreId) => {
              const c = COURSES_DATA.find(item => item.id === coursId);
              if (c) {
                setSelectedCourse(c);
                setActiveTab('cours');
              }
            }}
            onBackToCourse={() => setActiveTab('cours')}
          />
        )}

        {activeTab === 'certifs' && (
          <CertificationsView
            user={user}
            onOpenVerifyTab={() => setActiveTab('verifier')}
          />
        )}

        {activeTab === 'entreprise' && <EnterpriseView />}

        {activeTab === 'sandbox' && <SandboxView />}

        {activeTab === 'verifier' && (
          <VerifyCertificateView
            certificationsList={user.certifications}
          />
        )}

        {activeTab === 'admin' && (
          <AdminView
            user={user}
            onUpdateUser={handleUpdateUser}
          />
        )}
      </main>

      {/* Global Certification Modal */}
      {modalCert && (
        <CertificateModal
          certification={modalCert}
          onClose={() => setModalCert(null)}
        />
      )}

      {/* Guide Visuel Pas à Pas Modal */}
      <OnboardingGuideModal
        isOpen={showGuideModal}
        onClose={() => setShowGuideModal(false)}
        onExploreCatalogue={() => setActiveTab('catalogue')}
      />

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800 text-xs mt-auto print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">🎓</span>
            <span className="font-bold text-white tracking-wide">DO IT</span>
            <span>— Plateforme Pédagogique Professionnelle : 15 Chapitres, Devoirs Notés, Correction d’Ensemble & Brevets Officiels</span>
          </div>

          <div className="flex flex-wrap gap-4 text-slate-400">
            <span>12 Spécialités Industrielles</span>
            <span>•</span>
            <span>15 Chapitres / Cours</span>
            <span>•</span>
            <span>Devoirs & Évaluations</span>
            <span>•</span>
            <span>Brevets Authentifiés SHA-256</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
