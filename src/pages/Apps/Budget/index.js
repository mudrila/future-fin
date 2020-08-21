import { Dashboard } from "../../../ui-library";
import useBudgetDashboard from "./hooks";

function BudgetDashboard() {
  const {
    handleSubmit,
    handleEdit,
    handleDelete,
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
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
}

export default BudgetDashboard;
