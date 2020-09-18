export default {
  PUBLIC_ROUTES: {
    LOGIN: {
      KEY: "LOGIN",
      PATH: "/login",
      TR_KEY: "nav:login"
    },
    SIGN_UP: {
      KEY: "SIGN_UP",
      PATH: "/sign-up",
      TR_KEY: "nav:sign_up"
    }
  },
  PROTECTED_ROUTES: {
    HOME: {
      KEY: "HOME",
      PATH: "/",
      TR_KEY: "nav:home"
    },
    APPS_DASHBOARD: {
      KEY: "APPS_DASHBOARD",
      PATH: "/apps",
      TR_KEY: "nav:apps",
      children: ["BUDGET_DASHBOARD", "FINPLAN_DASHBOARD", "FINPLAN_SCHEDULE"]
    },
    BUDGET_DASHBOARD: {
      KEY: "BUDGET_DASHBOARD",
      PATH: "/apps/budget",
      TR_KEY: "nav:budget"
    },
    FINPLAN_DASHBOARD: {
      KEY: "FINPLAN_DASHBOARD",
      PATH: "/apps/finplan",
      TR_KEY: "nav:finplan",
      children: ["FINPLAN_SCHEDULE"]
    },
    FINPLAN_SCHEDULE: {
      KEY: "FINPLAN_SCHEDULE",
      PATH: "/apps/finplan/schedule",
      TR_KEY: "nav:finplan_schedule"
    }
  }
};
