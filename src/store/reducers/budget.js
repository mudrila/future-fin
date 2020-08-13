import { v4 as uuidv4 } from "uuid";
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
      const newSource = {
        ...payload,
        id: uuidv4() // Temp
      };
      return {
        ...state,
        icnomes: {
          ...state.incomes,
          sources: [...state.icnomes.sources, newSource],
          loading: false
        }
      };
    default:
      return state;
  }
}
