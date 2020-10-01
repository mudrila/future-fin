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
    BUDGET_DASHBOARD: {
      KEY: "BUDGET_DASHBOARD",
      PATH: "/budget",
      TR_KEY: "nav:budget"
    },
    FINPLAN_DASHBOARD: {
      KEY: "FINPLAN_DASHBOARD",
      PATH: "/finplan",
      TR_KEY: "nav:finplan",
      children: ["FINPLAN_SCHEDULE"]
    },
    FINPLAN_SCHEDULE: {
      KEY: "FINPLAN_SCHEDULE",
      PATH: "/finplan/schedule",
      TR_KEY: "nav:finplan_schedule"
    }
  }
};
