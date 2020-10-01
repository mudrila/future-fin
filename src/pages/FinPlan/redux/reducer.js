import {
  FIN_PLAN_GOALS_ACTION_TYPES,
  FIN_HEALTH_ACTION_TYPES
} from "./actions";

const INITIAL_STATE = {
  goals: {
    loading: false,
    items: []
  },
  finHealth: {
    loading: false,
    checkPoints: []
  }
};

export default function finPlanReducer(
  state = INITIAL_STATE,
  { type, payload }
) {
  switch (type) {
    case FIN_PLAN_GOALS_ACTION_TYPES.CREATE.SUCCESS:
      return {
        ...state,
        goals: {
          ...state.goals,
          items: [...state.goals.items, payload.newGoal],
          loading: false
        }
      };
    case FIN_PLAN_GOALS_ACTION_TYPES.READ.SUCCESS:
      return {
        ...state,
        goals: {
          ...state.goals,
          items: payload.goals,
          loading: false
        }
      };
    case FIN_PLAN_GOALS_ACTION_TYPES.UPDATE.SUCCESS:
      return {
        ...state,
        goals: {
          ...state.goals,
          items: state.goals.items.map((item) => {
            if (item._id === payload.goal._id) {
              return payload.goal;
            }
            return item;
          })
        }
      };
    case FIN_PLAN_GOALS_ACTION_TYPES.DELETE.SUCCESS:
      return {
        ...state,
        goals: {
          ...state.goals,
          items: state.goals.items.filter((goal) => goal._id !== payload._id),
          loading: false
        }
      };
    case FIN_HEALTH_ACTION_TYPES.SUCCESS:
      return {
        ...state,
        finHealth: {
          loading: false,
          ...payload
        }
      };
    case FIN_HEALTH_ACTION_TYPES.ERROR:
      return {
        ...state,
        finHealth: {
          ...state.finHealth,
          loading: false
        }
      };
    default:
      return state;
  }
}
