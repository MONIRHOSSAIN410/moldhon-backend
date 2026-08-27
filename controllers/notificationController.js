import { notifications } from '../models/notificationModel.js';

export const getNotifications = (req, res) => {
  res.status(200).json(notifications);
};

export const markAllAsRead = (req, res) => {
  notifications.forEach(n => n.isRead = true);
  res.status(200).json({ message: "All notifications marked as read", notifications });
};

export const markSingleAsRead = (req, res) => {
  const { id } = req.params;
  const notification = notifications.find(n => n.id === parseInt(id));
  if (notification) {
    notification.isRead = true;
    res.status(200).json(notification);
  } else {
    res.status(404).json({ message: "Notification not found" });
  }
};