import { combineReducers } from "redux";

import finPlanReducer from "../pages/Apps/FinPlan/redux/reducer";
import budgetReducer from "../pages/Apps/Budget/redux/reducer";
import userReducer from "../pages/User/redux/reducer";

export default combineReducers({
  finPlan: finPlanReducer,
  budget: budgetReducer,
  user: userReducer
});
