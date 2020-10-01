import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "notistack";

import createFinPlanDashboardConfig from "../config/dashboard";
import {
  finPlanGoalsActionCreators,
  finHealthActionCreators
} from "../redux/actions";
import { finPlanGoalsSelector, finHealthSelector } from "../redux/selectors";
import { appSettingsSelector } from "../../Settings/redux/selectors";
import { useTranslation } from "../../../i18n";

import sumReducer from "../../utils/sumReducer";

export default function useFinPlanDashboard() {
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const {
    settings: { defaultCurrency }
  } = useSelector(appSettingsSelector);
  const dispatch = useDispatch();
  const finPlanGoals = useSelector(finPlanGoalsSelector);
  const finHealth = useSelector(finHealthSelector);

  const finplanDashboardConfig = createFinPlanDashboardConfig(t);
  const finPlanDataMapping = {
    goals: finPlanGoals
  };

  const entityParts = finplanDashboardConfig.entityParts.map((entityPart) => ({
    ...entityPart,
    items: finPlanDataMapping[entityPart.name] || []
  }));

  const totalFinancialGoalsPrice = finPlanGoals.reduce(
    (prev, curr) => sumReducer(prev, curr, defaultCurrency),
    0
  );
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
    const loadFinHealth = finHealthActionCreators.REQUEST(
      null,
      enqueueSnackbar
    );
    dispatch(loadFinPlanGoals);
    dispatch(loadFinHealth);
  }, []);

  return {
    entityParts,
    entityName: finplanDashboardConfig.entityName,
    formsConfig: finplanDashboardConfig.formsConfig,
    handleDelete,
    handleEdit,
    handleSubmit,
    finHealth,
    totalFinancialGoalsPrice,
    t,
    defaultCurrency
  };
}
