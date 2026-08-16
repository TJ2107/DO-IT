import { Cours, Chapitre, Domaine } from '../types';

export interface ProfessorAdvice {
  professeurNom: string;
  titre: string;
  avatar: string;
  citationsBienveillance: string[];
  astucesRythme: string[];
}

export const PROFESSEUR_INFOS: ProfessorAdvice = {
  professeurNom: 'Professeur Alain & l\'Équipe Pédagogique DO IT',
  titre: 'Formateur Référent & Mentor Bienveillant',
  avatar: '👨‍🏫',
  citationsBienveillance: [
    "« L'apprentissage n'est pas une course de vitesse, c'est la construction patiente de fondations solides. »",
    "« Faire une erreur sur un exercice est une opportunité en or pour comprendre le mécanisme sous-jacent. »",
    "« Prenez le temps de visualiser le concept dans le monde réel avant de mémoriser la formule. »",
    "« Votre cerveau consolide les connaissances pendant les pauses : respirez et hydratez-vous régulièrement. »",
    "« Chaque grand ingénieur et technicien a commencé exactement là où vous vous trouvez aujourd'hui. »"
  ],
  astucesRythme: [
    "Conseil Rythme : Faites une pause de 5 minutes toutes les 25 minutes (méthode Pomodoro).",
    "Conseil Ancrage : Essayez d'expliquer ce concept avec vos propres mots avant de passer à la suite.",
    "Conseil Sérénité : Si une question vous semble ardue, relisez le paragraphe clé sans précipitation."
  ]
};

// Generates pedagogical summaries, previous recalls, and professor tips if not present in chapter
export function getChapterEnrichedData(course: Cours, chapterIndex: number) {
  const currentChapter = course.chapitres[chapterIndex];
  const previousChapter = chapterIndex > 0 ? course.chapitres[chapterIndex - 1] : null;

  // Key takeaways
  let pointsCles = currentChapter.pointsCles;
  if (!pointsCles || pointsCles.length === 0) {
    pointsCles = [
      `Assimilation des notions fondamentales de : "${currentChapter.titre}".`,
      `Maîtrise des mécanismes et des relations appliquées au domaine ${course.domaineNom}.`,
      `Application pratique à travers les exercices d'auto-évaluation immédiate.`
    ];
  }

  // Previous Chapter Recap
  let rappelPrecedent = currentChapter.rappelPrecedent;
  if (!rappelPrecedent && previousChapter) {
    rappelPrecedent = `Dans le chapitre précédent (${previousChapter.titre}), vous avez acquis les fondamentaux indispensables. Ces bases sont directement mobilisées ici pour comprendre et maîtriser les notions de "${currentChapter.titre}".`;
  }

  // Professor advice
  let conseilProfesseur = currentChapter.conseilProfesseur;
  if (!conseilProfesseur) {
    conseilProfesseur = `Prenez le temps d'expérimenter chaque calcul et notez les points clés à votre propre rythme. N'hésitez pas à relire les explications pour une mémorisation durable.`;
  }

  return {
    pointsCles,
    rappelPrecedent,
    conseilProfesseur,
    formuleCle: currentChapter.formuleCle,
    astuceTerrain: currentChapter.astuceTerrain
  };
}

export function getProfessorAnswer(queryType: string, course: Cours, chapter: Chapitre, userCustomQuestion?: string): string {
  const chapterTitle = chapter.titre;
  const domain = course.domaineNom;

  if (userCustomQuestion && userCustomQuestion.trim().length > 0) {
    return `Excellente question sur "${chapterTitle}" ! Dans le contexte de ${domain}, il est essentiel de garder en tête le principe fondamental : appliquez toujours la démarche logique étape par étape. Vérifiez d'abord vos données d'entrée, identifiez la règle ou formule applicable, puis validez les ordres de grandeur. Prenez le temps de faire le schéma mental de la situation.`;
  }

  switch (queryType) {
    case 'vulgarisation':
      return `💡 **Explication simplifiée du Professeur :** Imaginez le concept de "${chapterTitle}" comme un système du quotidien. Plutôt que de voir des équations abstraites, observez la circulation des flux (énergie, données, ressources). Tout s'équilibre naturellement selon les lois physiques et logiques.`;
    
    case 'terrain':
      return `🛠️ **Cas concret de terrain :** Dans l'industrie ou en entreprise, ce principe de "${chapterTitle}" est utilisé quotidiennement par les experts pour dimensionner les installations, diagnostiquer les pannes avant qu'elles ne surviennent et garantir une sécurité maximale des personnes et des équipements.`;

    case 'erreur':
      return `⚠️ **L'erreur classique à éviter :** La plupart des débutants se précipitent sur les calculs sans vérifier les unités et les hypothèses de départ. Conseil du professeur : posez toujours le schéma à plat, listez les grandeurs connues, et vérifiez que le résultat obtenu est physiquement et logiquement cohérent.`;

    case 'mnemotechnique':
      return `🧠 **Astuce de mémorisation du Professeur :** Pour retenir "${chapterTitle}", visualisez la règle des 3 piliers : 1) Observer l'état initial, 2) Appliquer la règle clé, 3) Vérifier l'équilibre final. En associant une image mentale à chaque formule, vous l'ancrerez pour des années !`;

    default:
      return `Bonjour ! Je suis à vos côtés tout au long de ce chapitre. Prenez tout votre temps, respirez calmement, et progressez pas à pas sans aucune pression.`;
  }
}
