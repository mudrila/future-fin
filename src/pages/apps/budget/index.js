import { Dashboard } from "../../../ui-library";
import { budgetDashbaordConfig } from "../../../config/dashboards";

function BudgetDashboard() {
  return (
    <Dashboard
      entityName={budgetDashbaordConfig.entityName}
      entityParts={budgetDashbaordConfig.entityParts}
    />
  );
}

export default BudgetDashboard;
