import { Dashboard } from "../../../ui-library";
import useBudgetDashboard from "./hooks";

function BudgetDashboard() {
  const {
    handleSubmit,
    entityName,
    entityParts,
    formsConfig
  } = useBudgetDashboard();

  return (
    <Dashboard
      entityName={entityName}
      entityParts={entityParts}
      formsConfig={formsConfig}
      onSubmit={handleSubmit}
      normalizeFormData={true}
    />
  );
}

export default BudgetDashboard;
