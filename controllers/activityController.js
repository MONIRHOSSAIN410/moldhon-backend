import { initialMetrics, sampleActivities } from '../models/activityModel.js';

export const getDashboardData = (req, res) => {
  res.status(200).json({
    metrics: initialMetrics,
    activities: sampleActivities
  });
};