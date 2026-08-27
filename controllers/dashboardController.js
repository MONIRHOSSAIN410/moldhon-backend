import { 
  dashboardMetrics, 
  investmentGrowthData, 
  latestProjects, 
  recentActivities, 
  projectStatusSummary, 
  systemStatusSummary 
} from '../models/dashboardModel.js';

export const getDashboardData = (req, res) => {
  res.status(200).json({
    metrics: dashboardMetrics,
    investmentGrowth: investmentGrowthData,
    projects: latestProjects,
    activities: recentActivities,
    projectStatus: projectStatusSummary,
    systemStatus: systemStatusSummary
  });
};