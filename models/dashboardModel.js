export const dashboardMetrics = {
  regInvestors: { value: 500, change: "+12% this month" },
  regEntrepreneurs: { value: 500, change: "-2% this month" },
  activeInvestors: { value: 500 },
  pending: { value: 500 },
  totalProject: { value: 500 },
  rejectedProject: { value: 500 },
  totalInvestment: { amount: "5000000 BDT", description: "+25% increased than the last month" }
};

export const investmentGrowthData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
  data: [1200000, 1800000, 1500000, 1100000, 2400000, 3100000, 3800000, 5000000]
};

export const latestProjects = [
  { id: 1, name: "Organic Agro farming", budget: "150,000 BDT", user: "Mr. Khaled Hasan", status: "Pending" },
  { id: 2, name: "Green Tech Solution", budget: "250,000 BDT", user: "MD. Farid Chowdhury", status: "Pending" },
  { id: 3, name: "Bangladesh IT Institution for future", budget: "100,000 BDT", user: "Mr. Badrul Alam", status: "Pending" },
  { id: 4, name: "Bangladesh Agriculture Association", budget: "500,000 BDT", user: "Mrs. Tasnim Jahan", status: "Pending" }
];

export const recentActivities = [
  { id: 1, text: "new project has been approved", time: "2 days ago" },
  { id: 2, text: "new transection 2 lac BDT has been made", time: "2 days ago" },
  { id: 3, text: "new intrapreneur has been added by milan", time: "2 days ago" },
  { id: 4, text: "new project has been approved", time: "2 days ago" }
];

export const projectStatusSummary = [
  { status: "Pending", count: 100 },
  { status: "Approved", count: 50 },
  { status: "Live", count: 10 },
  { status: "Closed", count: 40 }
];

export const systemStatusSummary = {
  totalUsers: 2000,
  activeUsers: 1000,
  maintenanceMode: false,
  serverStatus: "Online"
};