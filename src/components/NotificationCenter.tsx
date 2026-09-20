import React, { useState, useRef, useEffect } from 'react';
import { 
  Bell, 
  CheckCheck, 
  Trash2, 
  FileText, 
  Award, 
  Wrench, 
  Sparkles, 
  ExternalLink, 
  X,
  Clock,
  CheckCircle2,
  ChevronRight,
  GraduationCap
} from 'lucide-react';
import { NotificationItem, Utilisateur } from '../types';
import { 
  markNotificationAsRead, 
  markAllNotificationsAsRead, 
  deleteNotification, 
  clearAllNotifications 
} from '../utils/notificationService';

interface NotificationCenterProps {
  user: Utilisateur;
  onUpdateUser: (updated: Utilisateur) => void;
  onNavigateTo: (tab: string, courseId?: string) => void;
}

export const NotificationCenter: React.FC<NotificationCenterProps> = ({
  user,
  onUpdateUser,
  onNavigateTo,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState<'all' | 'unread' | 'devoirs' | 'certifs'>('all');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const notifications = user.notifications || [];
  const unreadCount = notifications.filter((n) => !n.read).length;

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Filtering
  const filteredNotifications = notifications.filter((n) => {
    if (filter === 'unread') return !n.read;
    if (filter === 'devoirs') return n.type === 'devoir_corrige' || n.type === 'tp_evalue';
    if (filter === 'certifs') return n.type === 'certification_disponible' || n.type === 'brevet_disponible';
    return true;
  });

  const handleNotificationClick = (item: NotificationItem) => {
    // Mark as read
    if (!item.read) {
      const updated = markNotificationAsRead(user, item.id);
      onUpdateUser(updated);
    }

    // Navigate to target if specified
    if (item.linkTab) {
      onNavigateTo(item.linkTab, item.linkCourseId);
      setIsOpen(false);
    }
  };

  const handleMarkAllRead = () => {
    const updated = markAllNotificationsAsRead(user);
    onUpdateUser(updated);
  };

  const handleClearAll = () => {
    const updated = clearAllNotifications(user);
    onUpdateUser(updated);
  };

  const handleDeleteItem = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const updated = deleteNotification(user, id);
    onUpdateUser(updated);
  };

  // Type-specific icon and badge rendering
  const renderNotificationIcon = (type: NotificationItem['type']) => {
    switch (type) {
      case 'devoir_corrige':
        return (
          <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-400/40 flex items-center justify-center flex-shrink-0">
            <FileText className="w-5 h-5" />
          </div>
        );
      case 'certification_disponible':
        return (
          <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 flex items-center justify-center flex-shrink-0">
            <Award className="w-5 h-5" />
          </div>
        );
      case 'brevet_disponible':
        return (
          <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-400/40 flex items-center justify-center flex-shrink-0">
            <GraduationCap className="w-5 h-5" />
          </div>
        );
      case 'tp_evalue':
        return (
          <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-300 border border-blue-400/40 flex items-center justify-center flex-shrink-0">
            <Wrench className="w-5 h-5" />
          </div>
        );
      default:
        return (
          <div className="w-9 h-9 rounded-xl bg-slate-700 text-slate-300 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
        );
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Notification Bell Button */}
      <button
        id="notification-bell-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Centre de notifications"
        aria-expanded={isOpen}
        className={`relative p-2 sm:px-3 sm:py-1.5 rounded-xl border transition cursor-pointer flex items-center gap-1.5 ${
          isOpen
            ? 'bg-amber-400/20 text-amber-300 border-amber-400/50 ring-2 ring-amber-400/30'
            : unreadCount > 0
            ? 'bg-white/10 hover:bg-white/20 text-white border-amber-400/40'
            : 'bg-white/10 hover:bg-white/20 text-slate-200 border-white/15'
        }`}
        title={`${unreadCount} notification(s) non lue(s)`}
      >
        <div className="relative">
          <Bell className={`w-4 h-4 ${unreadCount > 0 ? 'text-amber-300' : 'text-slate-300'}`} />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400"></span>
            </span>
          )}
        </div>
        
        {/* Count Badge on desktop */}
        {unreadCount > 0 && (
          <span className="hidden sm:inline-flex items-center justify-center px-1.5 py-0.2 text-[10px] font-bold text-blue-950 bg-amber-400 rounded-full">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Notifications Dropdown Panel */}
      {isOpen && (
        <div className="absolute right-0 sm:right-auto sm:left-auto md:right-0 mt-2 w-[calc(100vw-24px)] sm:w-96 max-w-sm sm:max-w-md bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl z-50 overflow-hidden text-slate-200 animate-in fade-in zoom-in-95 duration-150 -translate-x-[60%] sm:translate-x-0">
          {/* Header */}
          <div className="p-3.5 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-300">
                <Bell className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-sm text-white">
                Notifications
              </h3>
              {unreadCount > 0 && (
                <span className="bg-amber-400/20 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-400/30">
                  {unreadCount} non lue{unreadCount > 1 ? 's' : ''}
                </span>
              )}
            </div>

            <div className="flex items-center gap-1.5">
              {unreadCount > 0 && (
                <button
                  onClick={handleMarkAllRead}
                  title="Tout marquer comme lu"
                  className="p-1.5 text-xs text-slate-400 hover:text-amber-300 hover:bg-slate-800 rounded-lg transition cursor-pointer flex items-center gap-1"
                >
                  <CheckCheck className="w-3.5 h-3.5" />
                  <span className="text-[11px] hidden sm:inline">Tout lire</span>
                </button>
              )}
              {notifications.length > 0 && (
                <button
                  onClick={handleClearAll}
                  title="Effacer l'historique"
                  className="p-1.5 text-xs text-slate-400 hover:text-red-400 hover:bg-slate-800 rounded-lg transition cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="px-3 py-2 bg-slate-900/90 border-b border-slate-800 flex items-center gap-1.5 overflow-x-auto text-[11px]">
            <button
              onClick={() => setFilter('all')}
              className={`px-2.5 py-1 rounded-lg font-medium transition cursor-pointer whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-amber-400 text-slate-950 font-bold'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Toutes ({notifications.length})
            </button>
            <button
              onClick={() => setFilter('unread')}
              className={`px-2.5 py-1 rounded-lg font-medium transition cursor-pointer whitespace-nowrap ${
                filter === 'unread'
                  ? 'bg-amber-400 text-slate-950 font-bold'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Non lues ({unreadCount})
            </button>
            <button
              onClick={() => setFilter('devoirs')}
              className={`px-2.5 py-1 rounded-lg font-medium transition cursor-pointer whitespace-nowrap ${
                filter === 'devoirs'
                  ? 'bg-amber-400 text-slate-950 font-bold'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              📝 Devoirs & TP
            </button>
            <button
              onClick={() => setFilter('certifs')}
              className={`px-2.5 py-1 rounded-lg font-medium transition cursor-pointer whitespace-nowrap ${
                filter === 'certifs'
                  ? 'bg-amber-400 text-slate-950 font-bold'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              🎓 Certifications
            </button>
          </div>

          {/* Notifications List Body */}
          <div className="max-h-80 overflow-y-auto divide-y divide-slate-800/80">
            {filteredNotifications.length === 0 ? (
              <div className="p-8 text-center text-slate-400 space-y-2">
                <div className="w-12 h-12 rounded-full bg-slate-800/80 flex items-center justify-center mx-auto text-slate-500">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="text-xs font-semibold text-slate-300">
                  {filter === 'unread'
                    ? 'Aucune notification non lue'
                    : 'Aucune notification enregistrée'}
                </div>
                <p className="text-[11px] text-slate-500 max-w-xs mx-auto">
                  Vos alertes de devoirs corrigés et de nouvelles certifications apparaîtront ici.
                </p>
              </div>
            ) : (
              filteredNotifications.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleNotificationClick(item)}
                  className={`p-3.5 transition flex items-start gap-3 cursor-pointer group relative ${
                    !item.read
                      ? 'bg-slate-800/60 hover:bg-slate-800'
                      : 'hover:bg-slate-800/40 opacity-85 hover:opacity-100'
                  }`}
                >
                  {/* Unread indicator dot */}
                  {!item.read && (
                    <div className="absolute top-3.5 left-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  )}

                  {/* Icon */}
                  {renderNotificationIcon(item.type)}

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <h4 className="text-xs font-bold text-white group-hover:text-amber-300 transition truncate">
                        {item.title}
                      </h4>
                      {item.badgeLabel && (
                        <span
                          className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded-md flex-shrink-0 ${
                            item.type === 'certification_disponible' || item.type === 'brevet_disponible'
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                              : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                          }`}
                        >
                          {item.badgeLabel}
                        </span>
                      )}
                    </div>

                    <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed mb-1.5">
                      {item.message}
                    </p>

                    <div className="flex items-center justify-between text-[10px] text-slate-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-500" />
                        {item.date}
                      </span>

                      <div className="flex items-center gap-2">
                        {item.linkTab && (
                          <span className="text-amber-400 font-semibold flex items-center gap-0.5 opacity-90 group-hover:opacity-100">
                            <span>Voir</span>
                            <ChevronRight className="w-3 h-3" />
                          </span>
                        )}
                        <button
                          onClick={(e) => handleDeleteItem(e, item.id)}
                          className="text-slate-500 hover:text-red-400 p-0.5 rounded transition opacity-0 group-hover:opacity-100"
                          title="Supprimer la notification"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer with quick action tip */}
          {notifications.length > 0 && (
            <div className="p-2.5 bg-slate-950/90 border-t border-slate-800 text-center text-[11px] text-slate-400 flex items-center justify-center gap-1">
              <span>💡 Cliquez sur une alerte pour accéder directement au corrigé ou à votre brevet.</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
