import { BUDGET_INCOME_ACTION_TYPES } from "../actions/types";

export default function budgetReducer(state = {}, { type, payload }) {
  switch (type) {
    case BUDGET_INCOME_ACTION_TYPES.CREATE.REQUEST:
      console.log("REDUCER", payload);
      return state;
    default:
      return state;
  }
}
