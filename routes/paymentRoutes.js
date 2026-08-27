import express from 'express';
import { getPaymentDashboardData } from '../controllers/paymentController.js';

const router = express.Router();

router.get('/payment', getPaymentDashboardData);

export default router;