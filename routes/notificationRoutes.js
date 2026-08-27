import express from 'express';
import { getNotifications, markAllAsRead, markSingleAsRead } from '../controllers/notificationController.js';

const router = express.Router();

router.get('/notifications', getNotifications);
router.patch('/notifications/mark-all', markAllAsRead);
router.patch('/notifications/:id/mark', markSingleAsRead);

export default router;