import finplanDashboardConfig from "../config/dashboard";

export default function useFinPlanDashboard() {
  const finPlanDataMapping = {};

  const entityParts = finplanDashboardConfig.entityParts.map((entityPart) => ({
    ...entityPart,
    items: finPlanDataMapping[entityPart.name] || []
  }));
  return {
    entityParts,
    entityName: finplanDashboardConfig.entityName,
    formsConfig: finplanDashboardConfig.formsConfig
  };
}
