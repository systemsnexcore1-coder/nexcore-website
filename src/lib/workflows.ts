// Illustrative workflows derived from the existing service and project descriptions.
export const industryWorkflows = [
  ["Citizen portals", "Case management", "Internal workflows", "Records", "Reporting"],
  ["Scheduling", "Administration", "Inventory", "Secure records", "Support"],
  ["Client operations", "Approvals", "Risk reporting", "Secure portals", "Support"],
  ["Student services", "Department workflows", "Research", "Procurement", "Analytics"],
  ["Trip requests", "Fleet scheduling", "Asset tracking", "Transport", "Reporting"],
  ["Procurement", "Stores", "Maintenance", "Quality", "Operations"],
  ["Sample intake", "Test assignment", "Quality review", "Certificate", "Reporting"]
];

export const projectWorkflows: Record<string, { name: string; steps: string[]; icon: "lab" | "procurement" | "stores" | "assets" | "fleet" }> = {
  "food-agriculture-laboratory-management-system": {
    name: "Laboratory operations", icon: "lab",
    steps: ["Sample intake", "Test assignment", "Analysis", "Quality review", "Certificate"]
  },
  "procurement-management-system": {
    name: "Procurement controls", icon: "procurement",
    steps: ["Requisition", "Approval", "Vendor review", "Purchase order", "Reporting"]
  },
  "stores-inventory-management-system": {
    name: "Stock movement", icon: "stores",
    steps: ["Goods received", "Inventory", "Stock issue", "Monitoring", "Reorder"]
  },
  "it-inventory-management-system": {
    name: "Asset lifecycle", icon: "assets",
    steps: ["Registration", "Assignment", "Maintenance", "Audit history", "Replacement"]
  },
  "transport-management-system": {
    name: "Fleet operations", icon: "fleet",
    steps: ["Trip request", "Approval", "Vehicle allocation", "Trip history", "Reporting"]
  }
};
