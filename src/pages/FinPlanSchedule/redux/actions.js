import {
  createBasicStateActionTypes,
  createBasicStateActionCreators
} from "../../../store/utils/actionUtils";

export const FIN_PLAN_SCHEDULE_ACTION_TYPES = createBasicStateActionTypes(
  "FIN_PLAN_SCHEDULE"
);

export const finPlanScheduleActionCreators = createBasicStateActionCreators(
  FIN_PLAN_SCHEDULE_ACTION_TYPES
);
