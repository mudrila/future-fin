import {
  createCRUDActionTypes,
  createCRUDActionCreators
} from "../../../../store/utils/actionUtils";

export const FIN_PLAN_GOALS_ACTION_TYPES = createCRUDActionTypes(
  "FIN_PLAN_GOALS"
);

export const finPlanGoalsActionCreators = createCRUDActionCreators(
  FIN_PLAN_GOALS_ACTION_TYPES
);
