import { ErreurRemediation } from '../types';

const REMEDIATION_STORAGE_KEY = 'do_it_user_errors_v1';

export function loadAllErrors(): ErreurRemediation[] {
  try {
    const saved = localStorage.getItem(REMEDIATION_STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error('Failed to load error remediation data', e);
  }
  return [
    {
      id: 'err_demo_1',
      userId: 'user_123',
      coursId: 'elec_101',
      coursTitre: 'Électricité Industrielle & Réseaux Fondamentaux',
      chapitreId: 'elec_ch_2',
      chapitreTitre: '2. Lois de Kirchhoff & Associations de Résistances',
      questionId: 'ex_elec_2_2',
      question: 'Deux résistances de 100 Ω chacune sont montées en parallèle. Quelle est la résistance équivalente Req ?',
      reponseChoisie: '200 Ω',
      bonneReponse: '50 Ω',
      explicationProfesseur: 'Attention au piège classique ! En série, les résistances s\'additionnent (100 + 100 = 200 Ω). En parallèle, la conductance augmente, donc la résistance globale diminue : 1/Req = 1/100 + 1/100 = 2/100 => Req = 50 Ω.',
      dateErreur: '16/08/2026',
      resolu: false,
      tentatives: 1
    }
  ];
}

export function recordError(errorData: Omit<ErreurRemediation, 'id' | 'dateErreur' | 'resolu' | 'tentatives'>): ErreurRemediation[] {
  const errors = loadAllErrors();
  const existingIdx = errors.findIndex(
    (e) => e.coursId === errorData.coursId && e.questionId === errorData.questionId
  );

  if (existingIdx >= 0) {
    errors[existingIdx].reponseChoisie = errorData.reponseChoisie;
    errors[existingIdx].tentatives += 1;
    errors[existingIdx].resolu = false;
    errors[existingIdx].dateErreur = new Date().toLocaleDateString('fr-FR');
  } else {
    const newEntry: ErreurRemediation = {
      ...errorData,
      id: `err_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
      dateErreur: new Date().toLocaleDateString('fr-FR'),
      resolu: false,
      tentatives: 1
    };
    errors.unshift(newEntry);
  }

  try {
    localStorage.setItem(REMEDIATION_STORAGE_KEY, JSON.stringify(errors));
  } catch (e) {
    console.error('Failed to save error data', e);
  }
  return errors;
}

export function markErrorResolved(errorId: string): ErreurRemediation[] {
  const errors = loadAllErrors().map((err) => {
    if (err.id === errorId) {
      return { ...err, resolu: true };
    }
    return err;
  });

  try {
    localStorage.setItem(REMEDIATION_STORAGE_KEY, JSON.stringify(errors));
  } catch (e) {
    console.error('Failed to update error status', e);
  }
  return errors;
}

export function clearResolvedErrors(): ErreurRemediation[] {
  const errors = loadAllErrors().filter((e) => !e.resolu);
  try {
    localStorage.setItem(REMEDIATION_STORAGE_KEY, JSON.stringify(errors));
  } catch (e) {
    console.error('Failed to clear errors', e);
  }
  return errors;
}
