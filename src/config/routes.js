export default {
  PUBLIC_ROUTES: {
    LOGIN: {
      KEY: "LOGIN",
      PATH: "/login",
      TITLE: "Login"
    },
    SIGN_UP: {
      KEY: "SIGN_UP",
      PATH: "/sign-up",
      TITLE: "Sign Up"
    }
  },
  PROTECTED_ROUTES: {
    HOME: {
      KEY: "HOME",
      PATH: "/",
      TITLE: "Dashboard"
    },
    APPS_DASHBOARD: {
      KEY: "APPS_DASHBOARD",
      PATH: "/apps",
      TITLE: "Apps Overview",
      children: ["BUDGET_DASHBOARD", "FINPLAN_DASHBOARD", "FINPLAN_SCHEDULE"]
    },
    BUDGET_DASHBOARD: {
      KEY: "BUDGET_DASHBOARD",
      PATH: "/apps/budget",
      TITLE: "Budget Overview"
    },
    FINPLAN_DASHBOARD: {
      KEY: "FINPLAN_DASHBOARD",
      PATH: "/apps/finplan",
      TITLE: "Financial Plan Overview",
      children: ["FINPLAN_SCHEDULE"]
    },
    FINPLAN_SCHEDULE: {
      KEY: "FINPLAN_SCHEDULE",
      PATH: "/apps/finplan/schedule",
      TITLE: "Financial Plan Schedule"
    }
  }
};
