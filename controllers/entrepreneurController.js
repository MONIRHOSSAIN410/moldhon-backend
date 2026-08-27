import { 
  entrepreneurMetrics, 
  applicationsList, 
  accountsList, 
  reachData 
} from '../models/entrepreneurModel.js';

export const getEntrepreneurDashboardData = (req, res) => {
  res.status(200).json({
    metrics: entrepreneurMetrics,
    applications: applicationsList,
    accounts: accountsList,
    reach: reachData
  });
};