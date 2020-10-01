import { FIN_PLAN_SCHEDULE_ACTION_TYPES } from "./actions";

const INITIAL_STATE = {
  loading: false,
  items: [],
  totalIncome: 0,
  currentBalance: 0,
  totalSpendings: 0,
  monthsToPositiveBalance: 0,
  totalFinancialGoalsPrice: 0,
  reducedCategories: []
};

export default function finPlanScheduleReducer(
  state = INITIAL_STATE,
  { type, payload }
) {
  switch (type) {
    case FIN_PLAN_SCHEDULE_ACTION_TYPES.LOADING:
      return {
        ...state,
        loading: true
      };
    case FIN_PLAN_SCHEDULE_ACTION_TYPES.SUCCESS:
      return {
        ...state,
        loading: false,
        ...payload.finPlanSchedule
      };
    case FIN_PLAN_SCHEDULE_ACTION_TYPES.ERROR:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
