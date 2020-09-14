import { Dashboard } from "../../../ui-library";
import useFinPlanDashboard from "./hooks";

function FinPlanDashboard() {
  const {
    entityName,
    entityParts,
    formsConfig,
    handleSubmit,
    handleEdit,
    handleDelete,
    finHealth
  } = useFinPlanDashboard();

  console.log(finHealth);
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

export default FinPlanDashboard;
