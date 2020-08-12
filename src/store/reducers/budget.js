import { BUDGET_INCOME_SOURCES_ACTION_TYPES } from "../actions/types";

const INITIAL_STATE = {
  incomes: {
    loading: false,
    sources: [],
    items: []
  }
};
export default function budgetReducer(
  state = INITIAL_STATE,
  { type, payload }
) {
  switch (type) {
    case BUDGET_INCOME_SOURCES_ACTION_TYPES.CREATE.LOADING:
    case BUDGET_INCOME_SOURCES_ACTION_TYPES.READ.LOADING:
    case BUDGET_INCOME_SOURCES_ACTION_TYPES.UPDATE.LOADING:
    case BUDGET_INCOME_SOURCES_ACTION_TYPES.DELETE.LOADING:
      return { ...state, icnomes: { ...state.incomes, loading: true } };
    case BUDGET_INCOME_SOURCES_ACTION_TYPES.CREATE.SUCCESS:
      console.log("REDUCER", payload);
      return {
        ...state,
        icnomes: { ...state.incomes, sources: [], loading: false }
      };
    default:
      return state;
  }
}
