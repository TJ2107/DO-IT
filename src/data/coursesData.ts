import { Cours } from '../types';
import { COURSE_ELECTRICITE } from './courses/electricite';
import { COURSE_ELECTRONIQUE } from './courses/electronique';
import { COURSE_MECANIQUE } from './courses/mecanique';
import { COURSE_INFORMATIQUE } from './courses/informatique';
import { COURSE_PROGRAMMATION } from './courses/programmation';
import { COURSE_AUTOMATISME } from './courses/automatisme';
import { COURSE_MAINTENANCE } from './courses/maintenance';
import { COURSE_HSE } from './courses/hse';
import { COURSE_COMPTABILITE } from './courses/comptabilite';
import { COURSE_COMPLIANCE } from './courses/compliance';
import { COURSE_GESTION_PROJET } from './courses/gestionProjet';
import { COURSE_LEADERSHIP } from './courses/leadership';

export const COURSES_DATA: Cours[] = [
  COURSE_ELECTRICITE,
  COURSE_ELECTRONIQUE,
  COURSE_MECANIQUE,
  COURSE_INFORMATIQUE,
  COURSE_PROGRAMMATION,
  COURSE_AUTOMATISME,
  COURSE_MAINTENANCE,
  COURSE_HSE,
  COURSE_COMPTABILITE,
  COURSE_COMPLIANCE,
  COURSE_GESTION_PROJET,
  COURSE_LEADERSHIP
];
