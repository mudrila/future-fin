import {
  generateCRUDActionTypes,
  generateCRUDActionCreators
} from "../../../../store/utils/actionUtils";

export const FIN_PLAN_GOALS_ACTION_TYPES = generateCRUDActionTypes(
  "FIN_PLAN_GOALS"
);

export const finPlanGoalsActionCreators = generateCRUDActionCreators(
  FIN_PLAN_GOALS_ACTION_TYPES
);
