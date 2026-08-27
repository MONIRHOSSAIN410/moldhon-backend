import { projectMetrics, projectList } from '../models/projectModel.js';

export const getProjectsDashboardData = (req, res) => {
  res.status(200).json({
    metrics: projectMetrics,
    projects: projectList
  });
};