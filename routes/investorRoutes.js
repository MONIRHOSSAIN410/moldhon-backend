import express from 'express';
import { getInvestorsDashboardData } from '../controllers/investorController.js';

const router = express.Router();

router.get('/investors', getInvestorsDashboardData);

export default router;