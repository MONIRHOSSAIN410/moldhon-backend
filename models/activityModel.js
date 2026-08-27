export const initialMetrics = {
  totalActivities: 12842,
  today: 284,
  adminActions: 86,
  totalCanceled: 17
};

export const sampleActivities = [
  { id: 1, name: "Marvin McKinney", email: "sam.m.cr@example.com", avatar: "https://i.pravatar.cc/150?img=11", activity: "Updated project", module: "Projects", date: "Jan 20, 2026 10:30 AM", status: "Success" },
  { id: 2, name: "Jane Cooper", email: "debbie.baker@example.com", avatar: "https://i.pravatar.cc/150?img=5", activity: "Updated project", module: "Projects", date: "Jan 20, 2026 10:30 AM", status: "Success" },
  { id: 3, name: "Robert Fox", email: "felicia.reid@example.com", avatar: "https://i.pravatar.cc/150?img=12", activity: "Updated project", module: "Projects", date: "Jan 20, 2026 10:30 AM", status: "Success" },
  { 
    id: 4, 
    name: "Tawhidul Islam", 
    email: "tawhidulislam@mail.com", 
    avatar: "https://i.pravatar.cc/150?img=13", 
    activity: "Project payment", 
    module: "Payments", 
    date: "Jan 20, 2026 10:30 AM", 
    status: "Success",
    details: {
      user: "Tawhidul Islam",
      role: "Administrator",
      module: "Payments",
      dateTime: "Jan 20, 2026 10:30 AM",
      projectId: "TI-11",
      changes: [
        { field: "Payment status", from: "Pending", to: "Active" },
        { field: "Investment target", from: "500,000", to: "750,000" },
        { field: "Deadline", from: "Aug 25, 2026", to: "25, Sep26" }
      ],
      description: "Project details & investment target updated. All requirements are matched."
    }
  },
  { id: 5, name: "Dany Russell", email: "georgia.young@example.com", avatar: "https://i.pravatar.cc/150?img=14", activity: "Updated project", module: "Projects", date: "Jan 20, 2026 10:30 AM", status: "Success" },
  { id: 6, name: "Darlene Robertson", email: "willie.jennings@example.com", avatar: "https://i.pravatar.cc/150?img=15", activity: "Updated project", module: "Projects", date: "Jan 20, 2026 10:30 AM", status: "Success" },
  { id: 7, name: "Emma Hawkins", email: "terri.lawson@example.com", avatar: "https://i.pravatar.cc/150?img=9", activity: "Failed project", module: "Projects", date: "Jan 20, 2026 10:30 AM", status: "Failed" }
];