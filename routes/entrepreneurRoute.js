import express from 'express';
import { getEntrepreneurDashboardData } from '../controllers/entrepreneurController.js';

const router = express.Router();

router.get('/entrepreneurs', getEntrepreneurDashboardData);

export default router;