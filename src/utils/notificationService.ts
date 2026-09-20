import { NotificationItem, Utilisateur } from '../types';

/**
 * Creates and formats a new notification item
 */
export function createNotification(
  params: Omit<NotificationItem, 'id' | 'date' | 'read'> & { date?: string }
): NotificationItem {
  const now = new Date();
  const pad = (n: number) => n.toString().padStart(2, '0');
  const dateStr = params.date || `${pad(now.getDate())}/${pad(now.getMonth() + 1)}/${now.getFullYear()} à ${pad(now.getHours())}:${pad(now.getMinutes())}`;

  return {
    id: `notif_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    date: dateStr,
    read: false,
    ...params,
  };
}

/**
 * Notification creation helpers for specific events
 */
export function createHomeworkGradedNotification(
  courseTitle: string,
  homeworkTitle: string,
  noteSur20: number,
  courseId: string
): NotificationItem {
  const isGoodGrade = noteSur20 >= 14;
  return createNotification({
    type: 'devoir_corrige',
    title: `Devoir corrigé : ${homeworkTitle}`,
    message: `Votre devoir pour le cours « ${courseTitle} » a été noté ${noteSur20}/20. ${
      isGoodGrade ? 'Excellent travail ! Le corrigé détaillé est disponible.' : 'Consultez les explications du formateur et le corrigé type.'
    }`,
    linkTab: 'devoirs',
    linkCourseId: courseId,
    score: noteSur20,
    scoreMax: 20,
    badgeLabel: `${noteSur20}/20`,
  });
}

export function createCertificationReadyNotification(
  courseTitle: string,
  mention: string,
  scorePct: number,
  courseId: string
): NotificationItem {
  return createNotification({
    type: 'certification_disponible',
    title: `🎉 Nouvelle certification disponible !`,
    message: `Félicitations ! Vous avez validé avec succès le cursus « ${courseTitle} » (${Math.round(scorePct * 100)}% - Mention ${mention}). Votre certificat sécurisé est prêt.`,
    linkTab: 'certifs',
    linkCourseId: courseId,
    score: Math.round(scorePct * 100),
    badgeLabel: 'Certifié',
  });
}

export function createBrevetReadyNotification(
  brevetTitle: string,
  mention: string,
  noteSur20: number,
  courseId: string
): NotificationItem {
  return createNotification({
    type: 'brevet_disponible',
    title: `🏆 Brevet Professionnel Officiel Délivré !`,
    message: `Le jury académique a validé votre « ${brevetTitle} » avec une note globale de ${noteSur20}/20 (Mention ${mention}). Votre attestation signée SHA-256 est disponible.`,
    linkTab: 'brevet',
    linkCourseId: courseId,
    score: noteSur20,
    scoreMax: 20,
    badgeLabel: 'Brevet d’État',
  });
}

export function createTPGradedNotification(
  tpTitle: string,
  courseTitle: string,
  noteSur20: number,
  courseId: string
): NotificationItem {
  return createNotification({
    type: 'tp_evalue',
    title: `Rapport TP évalué : ${tpTitle}`,
    message: `Le formateur a évalué votre compte-rendu de travaux pratiques (« ${courseTitle} »). Note attribuée : ${noteSur20}/20.`,
    linkTab: 'cours',
    linkCourseId: courseId,
    score: noteSur20,
    scoreMax: 20,
    badgeLabel: `TP ${noteSur20}/20`,
  });
}

/**
 * Add a notification to a user object (immutable helper)
 */
export function addNotificationToUser(
  user: Utilisateur,
  notification: NotificationItem
): Utilisateur {
  const currentNotifications = user.notifications || [];
  // Prepend new notification to the top
  const updatedNotifications = [notification, ...currentNotifications];
  return {
    ...user,
    notifications: updatedNotifications,
  };
}

/**
 * Mark a single notification as read
 */
export function markNotificationAsRead(
  user: Utilisateur,
  notificationId: string
): Utilisateur {
  const currentNotifications = user.notifications || [];
  const updatedNotifications = currentNotifications.map((n) =>
    n.id === notificationId ? { ...n, read: true } : n
  );
  return {
    ...user,
    notifications: updatedNotifications,
  };
}

/**
 * Mark all notifications as read
 */
export function markAllNotificationsAsRead(user: Utilisateur): Utilisateur {
  const currentNotifications = user.notifications || [];
  const updatedNotifications = currentNotifications.map((n) => ({
    ...n,
    read: true,
  }));
  return {
    ...user,
    notifications: updatedNotifications,
  };
}

/**
 * Clear all notifications or delete a single one
 */
export function deleteNotification(
  user: Utilisateur,
  notificationId: string
): Utilisateur {
  const currentNotifications = user.notifications || [];
  return {
    ...user,
    notifications: currentNotifications.filter((n) => n.id !== notificationId),
  };
}

export function clearAllNotifications(user: Utilisateur): Utilisateur {
  return {
    ...user,
    notifications: [],
  };
}
