import { useSelector } from "react-redux";
import finplanDashboardConfig from "../config/dashboard";

import {
  incomeSourcesSelector,
  accountsSelector,
  spendingCategoriesSelector
} from "../../Budget/redux/selectors";

export default function useFinPlanDashboard() {
  const incomeSources = useSelector(incomeSourcesSelector);
  const accounts = useSelector(accountsSelector);
  const spendingCategories = useSelector(spendingCategoriesSelector);

  const finPlanDataMapping = {};

  const entityParts = finplanDashboardConfig.entityParts.map((entityPart) => ({
    ...entityPart,
    items: finPlanDataMapping[entityPart.name] || []
  }));

  return {
    incomeSources,
    accounts,
    spendingCategories,
    entityParts,
    entityName: finplanDashboardConfig.entityName,
    formsConfig: finplanDashboardConfig.formsConfig
  };
}
