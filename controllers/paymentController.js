import { 
  paymentMetrics, 
  masterEscrowLedger, 
  projectWiseInvestment, 
  investorWiseInvestment, 
  adminInstructions 
} from '../models/paymentModel.js';

export const getPaymentDashboardData = (req, res) => {
  res.status(200).json({
    metrics: paymentMetrics,
    ledger: masterEscrowLedger,
    projectInvestments: projectWiseInvestment,
    investorInvestments: investorWiseInvestment,
    instructions: adminInstructions
  });
};