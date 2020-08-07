import { combineReducers } from "redux";
import finPlanReducer from "./finplan";

export default combineReducers({
  finPlan: finPlanReducer
});
