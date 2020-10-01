import { combineReducers } from "redux";

import { LOGOUT_ACTION_TYPES } from "../pages/User/redux/actions";

import finPlanReducer from "../pages/FinPlan/redux/reducer";
import finPlanScheduleReducer from "../pages/FinPlanSchedule/redux/reducer";
import budgetReducer from "../pages/Budget/redux/reducer";
import userReducer from "../pages/User/redux/reducer";
import appSettingsReducer from "../pages/Settings/redux/reducer";

const appReducer = combineReducers({
  finPlan: finPlanReducer,
  finPlanSchedule: finPlanScheduleReducer,
  budget: budgetReducer,
  user: userReducer,
  appSettings: appSettingsReducer
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT_ACTION_TYPES.SUCCESS) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
