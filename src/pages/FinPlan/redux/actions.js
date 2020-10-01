import {
  createCRUDActionTypes,
  createCRUDActionCreators,
  createBasicStateActionTypes,
  createBasicStateActionCreators
} from "../../../store/utils/actionUtils";

export const FIN_PLAN_GOALS_ACTION_TYPES = createCRUDActionTypes(
  "FIN_PLAN_GOALS"
);

export const finPlanGoalsActionCreators = createCRUDActionCreators(
  FIN_PLAN_GOALS_ACTION_TYPES
);

export const FIN_HEALTH_ACTION_TYPES = createBasicStateActionTypes(
  "FIN_HEALTH"
);

export const finHealthActionCreators = createBasicStateActionCreators(
  FIN_HEALTH_ACTION_TYPES
);
