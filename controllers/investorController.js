import { 
  investorMetrics, 
  applicationsList, 
  accountsList, 
  topInvestorsList 
} from '../models/investorModel.js';

export const getInvestorsDashboardData = (req, res) => {
  res.status(200).json({
    metrics: investorMetrics,
    applications: applicationsList,
    accounts: accountsList,
    topInvestors: topInvestorsList
  });
};