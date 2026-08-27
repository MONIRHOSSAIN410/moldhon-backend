import { 
  reportMetrics, 
  topClients, 
  activePercentage, 
  investmentByCategory, 
  visitChartData 
} from '../models/reportModel.js';

export const getReportData = (req, res) => {
  res.status(200).json({
    metrics: reportMetrics,
    topClients,
    activePercentage,
    investmentByCategory,
    visitChartData
  });
};