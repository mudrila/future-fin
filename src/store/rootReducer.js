import { combineReducers } from "redux";

import finPlanReducer from "../pages/Apps/FinPlan/redux/reducer";
import finPlanScheduleReducer from "../pages/Apps/FinPlanSchedule/redux/reducer";
import budgetReducer from "../pages/Apps/Budget/redux/reducer";
import userReducer from "../pages/User/redux/reducer";
import appSettingsReducer from "../pages/Settings/redux/reducer";

export default combineReducers({
  finPlan: finPlanReducer,
  finPlanSchedule: finPlanScheduleReducer,
  budget: budgetReducer,
  user: userReducer,
  appSettings: appSettingsReducer
});
