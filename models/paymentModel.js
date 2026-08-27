export const paymentMetrics = {
  totalEscrow: "12,45,000 BDT",
  escrowChange: "+12% this month",
  milestonePayouts: "620,000 BDT",
  payoutsChange: "-5% this month",
  commissionFees: "38,200 BDT"
};

export const masterEscrowLedger = [
  { id: 1, date: "12 Jul 2026", dealId: "#1092", investor: "Asif Karim", entrepreneur: "Delta Tech Ltd", amount: "25,000 BDT", status: "Refunded" },
  { id: 2, date: "05 Jul 2026", dealId: "#1091", investor: "Sabrina Khan", entrepreneur: "Apex Agri", amount: "50,000 BDT", status: "In Escrow" },
  { id: 3, date: "28 Jun 2026", dealId: "#1090", investor: "K. Rahman", entrepreneur: "GreenCo Dhaka", amount: "1,50,000 BDT", status: "Released" },
  { id: 4, date: "12 Jul 2026", dealId: "#1092", investor: "Asif Karim", entrepreneur: "Delta Tech Ltd", amount: "25,000 BDT", status: "Refunded" },
  { id: 5, date: "05 Jul 2026", dealId: "#1091", investor: "Sabrina Khan", entrepreneur: "Apex Agri", amount: "50,000 BDT", status: "In Escrow" },
  { id: 6, date: "28 Jun 2026", dealId: "#1090", investor: "K. Rahman", entrepreneur: "GreenCo Dhaka", amount: "1,50,000 BDT", status: "Released" },
  { id: 7, date: "12 Jul 2026", dealId: "#1092", investor: "Asif Karim", entrepreneur: "Delta Tech Ltd", amount: "25,000 BDT", status: "Refunded" },
  { id: 8, date: "05 Jul 2026", dealId: "#1091", investor: "Sabrina Khan", entrepreneur: "Apex Agri", amount: "50,000 BDT", status: "In Escrow" },
  { id: 9, date: "28 Jun 2026", dealId: "#1090", investor: "K. Rahman", entrepreneur: "GreenCo Dhaka", amount: "1,50,000 BDT", status: "Released" }
];

export const projectWiseInvestment = [
  { id: 1, name: "Delta Tech Ltd", fundsRaised: "5,00,000 BDT", investors: 14, status: "Active" },
  { id: 2, name: "Apex Agri Modernization", fundsRaised: "12,50,000 BDT", investors: 32, status: "Completed" },
  { id: 3, name: "GreenCo Eco Packaging", fundsRaised: "8,00,000 BDT", investors: 19, status: "Active" }
];

export const investorWiseInvestment = [
  { id: 1, name: "Asif Karim", totalInvested: "2,50,000 BDT", projectsCount: 4, lastPayment: "12 Jul 2026" },
  { id: 2, name: "Sabrina Khan", totalInvested: "5,00,000 BDT", projectsCount: 8, lastPayment: "05 Jul 2026" },
  { id: 3, name: "K. Rahman", totalInvested: "1,50,000 BDT", projectsCount: 2, lastPayment: "28 Jun 2026" }
];

export const adminInstructions = [
  {
    step: 1,
    icon: "🏦",
    title: "Check Platform Bank Statement:",
    description: "Open your corporate BRAC Bank dashboard and verify if 500,000 BDT with reference 'DEAL-DELTA-101' has cleared into our account."
  },
  {
    step: 2,
    icon: "🪪",
    title: "Verify Identity Match:",
    description: "Ensure the remitter name on the bank statement matches the investor name (Asif Karim)."
  },
  {
    step: 3,
    icon: "🚨",
    title: "Update Escrow Status Below:",
    description: "If the money is present, click 'Confirm Receipt' to lock it in escrow. If the money has not arrived after 48 hours, click 'Flag / Reject'."
  }
];