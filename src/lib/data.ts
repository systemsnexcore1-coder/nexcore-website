export const contactEmail = "systemsnexcore1@gmail.com";

export const contactNumbers = [
  { label: "+233 55 058 1567", href: "tel:+233550581567" },
  { label: "+233 59 384 6713", href: "tel:+233593846713" },
  { label: "+233 59 959 2970", href: "tel:+233599592970" }
];

export const companyLocation = "Accra, Ghana";
export const companyLocationDisplay = "📍 Accra, Ghana";

export function createMailto(subject?: string, body?: string) {
  const params = [
    subject ? `subject=${encodeURIComponent(subject)}` : "",
    body ? `body=${encodeURIComponent(body)}` : ""
  ].filter(Boolean);

  return params.length ? `mailto:${contactEmail}?${params.join("&")}` : `mailto:${contactEmail}`;
}

export function createGmailComposeUrl(subject?: string) {
  const params = [
    "view=cm",
    "fs=1",
    `to=${encodeURIComponent(contactEmail)}`,
    subject ? `su=${encodeURIComponent(subject)}` : ""
  ].filter(Boolean);

  return `https://mail.google.com/mail/?${params.join("&")}`;
}

export const emailSubjects = {
  general: "Nexcore Website Enquiry",
  proposal: "Request for a Nexcore Proposal",
  consultation: "Nexcore Consultation Request",
  support: "Nexcore Support Request",
  vendor: "Nexcore Vendor Enquiry",
  partnership: "Nexcore Partnership Enquiry",
  privacy: "Nexcore Privacy Enquiry"
} as const;

export const enquiryLinks = [
  { label: "General enquiries", subject: "General Enquiry", href: createMailto(emailSubjects.general) },
  { label: "Project enquiries", subject: "Project Enquiry", href: createMailto(emailSubjects.proposal) },
  { label: "Vendor enquiries", subject: "Vendor Enquiry", href: createMailto(emailSubjects.vendor) },
  { label: "Partnership enquiries", subject: "Partnership Enquiry", href: createMailto(emailSubjects.partnership) },
  { label: "Privacy enquiries", subject: "Privacy Enquiry", href: createMailto(emailSubjects.privacy) }
];

export const siteConfig = {
  name: "Nexcore",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://nexcore.example",
  description:
    "Nexcore builds secure web platforms, CRM systems, ERP systems, IT support programs, and digital experiences for large organizations.",
  email: contactEmail,
  emailHref: createMailto(emailSubjects.general),
  gmailHref: createGmailComposeUrl(emailSubjects.general),
  phone: contactNumbers[0].label,
  phoneHref: contactNumbers[0].href,
  phones: contactNumbers,
  address: companyLocation,
  addressDisplay: companyLocationDisplay,
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Industries", href: "/industries" },
    { label: "Contact", href: "/contact" }
  ]
};

export const services = [
  {
    slug: "web-development",
    title: "Custom Web Development",
    summary: "Secure portals, dashboards, public websites, and enterprise applications built around real operational workflows.",
    problems: [
      "Legacy systems that slow down service delivery",
      "Manual approval chains and disconnected data",
      "Poor public-facing experiences that create support burden"
    ],
    features: [
      "Role-based dashboards and workflows",
      "API integrations and secure authentication",
      "Performance-focused frontends and maintainable backends"
    ],
    benefits: [
      "Reduce manual work across departments",
      "Improve service reliability and transparency",
      "Create a platform that can evolve with policy and business changes"
    ],
    idealClients: "Government programs, large service organizations, universities, NGOs, and regulated enterprises."
  },
  {
    slug: "crm-solutions",
    title: "CRM Solutions",
    summary: "Client, citizen, member, and partner relationship systems that turn fragmented interactions into accountable pipelines.",
    problems: [
      "Customer history spread across inboxes and spreadsheets",
      "Weak visibility into service requests and follow-ups",
      "Limited reporting for executive and operational teams"
    ],
    features: [
      "Lead, case, ticket, and account management",
      "Automated reminders, assignment rules, and escalation paths",
      "Executive reporting and team performance analytics"
    ],
    benefits: [
      "Create one reliable source of customer truth",
      "Shorten response times and reduce dropped requests",
      "Give leadership clear visibility into service outcomes"
    ],
    idealClients: "Financial institutions, public service agencies, healthcare networks, universities, and B2B enterprises."
  },
  {
    slug: "erp-solutions",
    title: "ERP Solutions",
    summary: "Integrated systems for procurement, stores, assets, fleet, HR, finance, and operations management.",
    problems: [
      "Critical processes handled through paper files or isolated spreadsheets",
      "Duplicate records across finance, procurement, and operations",
      "Slow audit preparation and limited controls"
    ],
    features: [
      "Procurement, inventory, assets, and approval modules",
      "Departmental access controls and audit trails",
      "Configurable reporting, exports, and notifications"
    ],
    benefits: [
      "Standardize operations across departments",
      "Improve compliance, visibility, and cost control",
      "Support long-term process automation without vendor lock-in"
    ],
    idealClients: "Manufacturing companies, ministries, hospitals, logistics operators, universities, and large NGOs."
  },
  {
    slug: "it-support",
    title: "IT Support & Consulting",
    summary: "Structured technology support, infrastructure planning, systems advisory, and operational improvement programs.",
    problems: [
      "Unclear ownership of recurring technology issues",
      "Reactive maintenance instead of planned improvement",
      "Security, uptime, and procurement decisions made without clear evidence"
    ],
    features: [
      "Helpdesk workflows and service-level reporting",
      "Infrastructure reviews and modernization roadmaps",
      "Cybersecurity, backup, monitoring, and continuity planning"
    ],
    benefits: [
      "Increase uptime and support accountability",
      "Make technology decisions with clearer risk and cost data",
      "Build internal capability through documentation and knowledge transfer"
    ],
    idealClients: "Organizations with distributed teams, regulated operations, aging infrastructure, or growing internal IT demand."
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    summary: "Research-led interfaces for complex workflows, public services, dashboards, and data-heavy enterprise tools.",
    problems: [
      "Systems that are functional but difficult to adopt",
      "High training burden caused by inconsistent interfaces",
      "Digital services that do not match user expectations"
    ],
    features: [
      "Stakeholder research and journey mapping",
      "Wireframes, prototypes, and accessible design systems",
      "Usability testing and product improvement roadmaps"
    ],
    benefits: [
      "Improve adoption and reduce training time",
      "Create consistent experiences across departments",
      "Make complex tasks clearer for both staff and end users"
    ],
    idealClients: "Large organizations planning new digital platforms, redesigns, or internal workflow modernization."
  }
];

export const projects = [
  {
    slug: "food-agriculture-laboratory-management-system",
    title: "Food & Agriculture Laboratory Management System",
    category: "Laboratory operations",
    summary:
      "A secure system for sample intake, testing workflows, quality review, certificate generation, and laboratory reporting.",
    challenge:
      "The laboratory relied on manual logs and disconnected spreadsheets to track samples, tests, analysts, and certificates. Management needed stronger traceability, faster reporting, and better control over regulated processes.",
    solution:
      "Nexcore designed a modular laboratory information platform with role-based workflows for reception, analysis, review, approval, reporting, and certificate issuance.",
    features: [
      "Sample registration and barcode-ready identifiers",
      "Test assignment and analyst workload tracking",
      "Quality review, approval, and certificate generation",
      "Turnaround-time dashboards and compliance reports"
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Node.js", "Role-based access control"],
    impact: [
      "Improved sample traceability from intake to certificate",
      "Reduced manual reporting effort for supervisors",
      "Strengthened audit readiness across laboratory units"
    ],
    gallery: ["Sample intake dashboard", "Testing workflow", "Certificate review"]
  },
  {
    slug: "procurement-management-system",
    title: "Procurement Management System",
    category: "Enterprise resource planning",
    summary:
      "A procurement platform for requisitions, approvals, vendor management, purchase orders, and executive visibility.",
    challenge:
      "Procurement requests moved slowly across departments, documents were difficult to track, and leadership lacked reliable visibility into spending stages.",
    solution:
      "Nexcore delivered a controlled procurement workflow with configurable approval routes, vendor records, order tracking, and management reporting.",
    features: [
      "Requisition creation and departmental approvals",
      "Vendor records and quotation comparison",
      "Purchase order lifecycle tracking",
      "Budget visibility and procurement analytics"
    ],
    technologies: ["React", "TypeScript", "REST APIs", "PostgreSQL", "Audit logging"],
    impact: [
      "Increased accountability across approval stages",
      "Reduced duplicate procurement documentation",
      "Improved leadership visibility into pending and completed requests"
    ],
    gallery: ["Requisition review", "Vendor comparison", "Procurement analytics"]
  },
  {
    slug: "stores-inventory-management-system",
    title: "Stores Inventory Management System",
    category: "Inventory and stores",
    summary:
      "A stock control platform for stores requests, receiving, issuing, stock counts, reorder levels, and reports.",
    challenge:
      "Stores teams needed accurate stock records, faster issue processing, and stronger controls around receiving, issuing, and reconciliation.",
    solution:
      "Nexcore created an inventory system that connects stores officers, departments, and finance teams through transparent stock movement workflows.",
    features: [
      "Goods receiving and stock issue workflows",
      "Reorder thresholds and low-stock alerts",
      "Stock adjustment approvals and audit trails",
      "Departmental consumption and valuation reports"
    ],
    technologies: ["Next.js", "TypeScript", "SQL", "Server actions", "Responsive dashboards"],
    impact: [
      "Reduced uncertainty around available stock",
      "Improved accountability for stock movements",
      "Enabled faster reporting for finance and operations"
    ],
    gallery: ["Stock levels", "Issue request", "Movement history"]
  },
  {
    slug: "it-inventory-management-system",
    title: "IT Inventory Management System",
    category: "IT operations",
    summary:
      "A technology asset system for devices, software, assignments, maintenance history, and lifecycle planning.",
    challenge:
      "IT teams lacked a reliable view of assigned devices, warranty status, software ownership, maintenance history, and replacement needs.",
    solution:
      "Nexcore implemented an IT asset registry with assignment workflows, maintenance records, audit history, and lifecycle reporting.",
    features: [
      "Device registry with serial numbers and ownership history",
      "Staff assignment and return workflows",
      "Warranty, maintenance, and replacement tracking",
      "Asset status dashboards and exportable reports"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "QR-ready asset tags", "Reporting APIs"],
    impact: [
      "Improved visibility into device ownership and condition",
      "Reduced asset loss and duplicate purchases",
      "Supported better budgeting for lifecycle replacement"
    ],
    gallery: ["Asset registry", "Assignment history", "Maintenance planning"]
  },
  {
    slug: "transport-management-system",
    title: "Transport Management System",
    category: "Fleet and logistics",
    summary:
      "A transport operations platform for vehicle records, trip requests, driver allocation, maintenance, and fuel reporting.",
    challenge:
      "Fleet coordination depended on phone calls and paper approvals, making it difficult to allocate vehicles, track trips, and plan maintenance.",
    solution:
      "Nexcore designed a fleet management system with trip request workflows, vehicle scheduling, driver assignment, maintenance logs, and analytics.",
    features: [
      "Trip requests, approvals, and vehicle allocation",
      "Driver scheduling and trip history",
      "Maintenance, fuel, and inspection tracking",
      "Fleet utilization and cost reporting"
    ],
    technologies: ["Next.js", "TypeScript", "Maps integration", "PostgreSQL", "Notification workflows"],
    impact: [
      "Improved utilization of available vehicles",
      "Reduced coordination delays for approved trips",
      "Created clearer records for maintenance and operating costs"
    ],
    gallery: ["Trip request queue", "Vehicle schedule", "Fleet report"]
  }
];

export const industries = [
  {
    title: "Government",
    summary:
      "Digital services, internal workflow systems, records management, and reporting platforms that improve accountability and service delivery.",
    capabilities: ["Citizen portals", "Case management", "Procurement controls", "Audit-ready reporting"]
  },
  {
    title: "Healthcare",
    summary:
      "Operational platforms for clinical administration, support services, asset management, and secure patient-adjacent workflows.",
    capabilities: ["Scheduling workflows", "Department dashboards", "Inventory controls", "Secure records"]
  },
  {
    title: "Finance",
    summary:
      "Reliable platforms for client operations, approvals, compliance reporting, support workflows, and internal productivity.",
    capabilities: ["CRM systems", "Approval automation", "Risk reporting", "Secure portals"]
  },
  {
    title: "Education",
    summary:
      "Systems for institutional administration, student services, research operations, stores, procurement, and stakeholder communication.",
    capabilities: ["Student service portals", "Department workflows", "Research systems", "Analytics"]
  },
  {
    title: "Logistics",
    summary:
      "Fleet, transport, asset, and inventory systems that bring structure to distributed operational environments.",
    capabilities: ["Fleet scheduling", "Transport requests", "Asset tracking", "Operational reporting"]
  },
  {
    title: "Manufacturing",
    summary:
      "ERP modules and dashboards that connect procurement, stores, assets, maintenance, quality, and production support workflows.",
    capabilities: ["Stores management", "Maintenance logs", "Procurement workflows", "Process dashboards"]
  },
  {
    title: "Laboratories",
    summary:
      "Traceable systems for sample intake, test assignment, quality review, certificate generation, and management reporting.",
    capabilities: ["Sample tracking", "Quality review", "Certificate workflows", "Turnaround analytics"]
  }
];

export const processSteps = [
  {
    title: "Discovery",
    summary: "Clarify business goals, stakeholders, constraints, risks, success metrics, and existing systems."
  },
  {
    title: "Solution Design",
    summary: "Map workflows, define architecture, plan integrations, and shape the implementation roadmap."
  },
  {
    title: "Delivery",
    summary: "Build in focused increments with demos, reviews, accessibility checks, and quality gates."
  },
  {
    title: "Adoption",
    summary: "Support rollout with documentation, training, data migration, and operational handover."
  },
  {
    title: "Continuous Improvement",
    summary: "Measure outcomes, refine workflows, and expand capabilities as organizational needs evolve."
  }
];

export const values = [
  "Business clarity before technology decisions",
  "Security and reliability as baseline requirements",
  "Design that respects complex enterprise workflows",
  "Transparent delivery and long-term partnership",
  "Maintainable systems that internal teams can understand"
];

export const team = [
  {
    name: "Brian Elom Alormene",
    initials: "BA",
    role: "Full-Stack Developer · Systems & Backend",
    summary:
      "Builds end-to-end business applications with a focus on system architecture, backend development, integrations, databases, and workflow automation. Experienced with PHP, MySQL, JavaScript, APIs, and developing operational systems for enterprise environments."
  },
  {
    name: "Emmanuel Kwame Danso",
    initials: "ED",
    role: "Full-Stack Developer · Frontend",
    summary:
      "Develops full-stack applications with a strong focus on frontend engineering, responsive interfaces, and translating system requirements into intuitive digital experiences. Works across modern web technologies including JavaScript, React/Next.js, HTML and CSS."
  },
  {
    name: "Michael Martey",
    initials: "MM",
    role: "Full-Stack Developer · UI/UX & Database",
    summary:
      "Combines full-stack development with UI/UX design and database expertise, focusing on intuitive interfaces, effective user journeys, data structures, and reliable application foundations. Works across interface design, web technologies, SQL and database development."
  }
];
