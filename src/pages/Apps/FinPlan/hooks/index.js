import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "notistack";

import useSecureRoute from "../../../../hooks/useSecureRoute";

import finplanDashboardConfig from "../config/dashboard";
import { finPlanGoalsActionCreators } from "../redux/actions";
import { finPlanGoalsSelector } from "../redux/selectors";

export default function useFinPlanDashboard() {
  useSecureRoute();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const finPlanGoals = useSelector(finPlanGoalsSelector);
  const finPlanDataMapping = {
    goals: finPlanGoals
  };

  const entityParts = finplanDashboardConfig.entityParts.map((entityPart) => ({
    ...entityPart,
    items: finPlanDataMapping[entityPart.name] || []
  }));

  function handleSubmit(formName, formValues) {
    let action = null;
    if (formName === "goals") {
      action = finPlanGoalsActionCreators.CREATE.REQUEST(
        formValues,
        enqueueSnackbar
      );
    }
    dispatch(action);
  }

  function handleEdit({ entityPartName, item }) {
    let action = null;
    if (entityPartName === "goals") {
      action = finPlanGoalsActionCreators.UPDATE.REQUEST(item, enqueueSnackbar);
    }
    action && dispatch(action);
  }

  function handleDelete({ entityPartName, item }) {
    let action = null;
    if (entityPartName === "goals") {
      action = finPlanGoalsActionCreators.DELETE.REQUEST(item, enqueueSnackbar);
    }
    action && dispatch(action);
  }

  useEffect(() => {
    const loadFinPlanGoals = finPlanGoalsActionCreators.READ.REQUEST(
      null,
      enqueueSnackbar
    );
    dispatch(loadFinPlanGoals);
  }, []);

  return {
    entityParts,
    entityName: finplanDashboardConfig.entityName,
    formsConfig: finplanDashboardConfig.formsConfig,
    handleDelete,
    handleEdit,
    handleSubmit
  };
}
