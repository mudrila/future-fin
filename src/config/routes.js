export default {
  HOME: {
    KEY: "HOME",
    PATH: "/",
    TITLE: "Dashboard"
  },
  APPS_DASHBOARD: {
    KEY: "APPS_DASHBOARD",
    PATH: "/apps",
    TITLE: "Apps Overview",
    children: ["BUDGET_DASHBOARD", "FINPLAN_DASHBOARD"]
  },
  BUDGET_DASHBOARD: {
    KEY: "BUDGET_DASHBOARD",
    PATH: "/apps/budget",
    TITLE: "Budget Overview"
  },
  FINPLAN_DASHBOARD: {
    KEY: "FINPLAN_DASHBOARD",
    PATH: "/apps/finplan",
    TITLE: "Financial Plan"
  }
};
