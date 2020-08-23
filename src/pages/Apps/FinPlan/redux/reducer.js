import { v4 as uuidv4 } from "uuid";
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
      const newGoal = {
        ...payload,
        id: uuidv4() // Temp
      };
      return {
        ...state,
        goals: {
          ...state.goals,
          items: [...state.goals.items, newGoal],
          loading: false
        }
      };
    case FIN_PLAN_GOALS_ACTION_TYPES.UPDATE.SUCCESS:
      return {
        ...state,
        goals: {
          ...state.goals,
          items: state.goals.items.map((item) => {
            if (item.id === payload.id) {
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
          items: state.goals.items.filter((goal) => goal.id !== payload.id),
          loading: false
        }
      };
    default:
      return state;
  }
}
