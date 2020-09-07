import { FIN_PLAN_GOALS_ACTION_TYPES } from "./actions";

const INITIAL_STATE = {
  goals: {
    loading: false,
    items: []
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
          items: [...state.goals.items, payload],
          loading: false
        }
      };
    case FIN_PLAN_GOALS_ACTION_TYPES.READ.SUCCESS:
      return {
        ...state,
        goals: {
          ...state.goals,
          items: payload,
          loading: false
        }
      };
    case FIN_PLAN_GOALS_ACTION_TYPES.UPDATE.SUCCESS:
      return {
        ...state,
        goals: {
          ...state.goals,
          items: state.goals.items.map((item) => {
            if (item._id === payload._id) {
              return payload;
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
    default:
      return state;
  }
}
