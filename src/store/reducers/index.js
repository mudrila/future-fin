import { combineReducers } from "redux";

import finPlanReducer from "./finplan";
import budgetReducer from "./budget";

export default combineReducers({
  finPlan: finPlanReducer,
  budget: budgetReducer
});
