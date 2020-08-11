import { Dashboard } from "../../../ui-library";
import { finplanDashboardConfig } from "../../../config/dashboards";

function FinPlanDashboard() {
  return (
    <Dashboard
      entityName={finplanDashboardConfig.entityName}
      entityParts={finplanDashboardConfig.entityParts}
    />
  );
}

export default FinPlanDashboard;
