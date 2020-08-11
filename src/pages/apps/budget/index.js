import { Dashboard } from "../../../ui-library";
import { budgetDashbaordConfig } from "../../../config/dashboards";

function BudgetDashboard() {
  return (
    <Dashboard
      entityName={budgetDashbaordConfig.entityName}
      entityParts={budgetDashbaordConfig.entityParts}
      formsConfig={budgetDashbaordConfig.formsConfig}
      onSubmit={(formName, formValues) => console.log(formName, formValues)}
    />
  );
}

export default BudgetDashboard;
