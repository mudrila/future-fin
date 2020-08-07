export default {
  HOME: {
    ROUTE_NAME: "HOME",
    PATH: "/",
    TITLE: "Dashboard"
  },
  APPS_DASHBOARD: {
    ROUTE_NAME: "APPS_DASHBOARD",
    PATH: "/apps",
    TITLE: "Apps Overview",
    children: ["BUDGET_DASHBOARD", "FINPLAN_DASHBOARD"]
  },
  BUDGET_DASHBOARD: {
    ROUTE_NAME: "BUDGET_DASHBOARD",
    PATH: "/apps/budget/dashboard",
    TITLE: "Budget Overview"
  },
  FINPLAN_DASHBOARD: {
    ROUTE_NAME: "FINPLAN_DASHBOARD",
    PATH: "/apps/finplan/dashboard",
    TITLE: "Financial Plan Overview"
  }
};
