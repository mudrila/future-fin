import { Dashboard } from "../../../ui-library";

function BudgetDashboard() {
  const entityParts = [
    {
      name: "incomes"
    },
    {
      name: "accounts"
    },
    {
      name: "spendings"
    }
  ];
  return <Dashboard entityName="budget" entityParts={entityParts} />;
}

export default BudgetDashboard;
