import express from 'express';
import { getProjectsDashboardData } from '../controllers/projectController.js';

const router = express.Router();

router.get('/projects', getProjectsDashboardData);

export default router;