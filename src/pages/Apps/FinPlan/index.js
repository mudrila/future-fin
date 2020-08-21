import { Dashboard } from "../../../ui-library";
import useFinPlanDashboard from "./hooks";
import BalanceProjection from "./components/BalanceProjection";

function FinPlanDashboard() {
  const {
    entityName,
    entityParts,
    formsConfig,
    handleSubmit,
    handleEdit,
    handleDelete
  } = useFinPlanDashboard();

  return (
    <Dashboard
      entityName={entityName}
      entityParts={entityParts}
      formsConfig={formsConfig}
      childrenPositioning="top"
      onSubmit={handleSubmit}
      normalizeFormData={true}
      onEdit={handleEdit}
      onDelete={handleDelete}
    >
      <BalanceProjection />
    </Dashboard>
  );
}

export default FinPlanDashboard;
