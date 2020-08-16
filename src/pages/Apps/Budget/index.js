import { useDispatch } from "react-redux";

import { Dashboard } from "../../../ui-library";
import { budgetDashbaordConfig } from "../../../config/dashboards";
import { budgetIncomesActionCreators } from "../../../store/actions/actionCreators";

function BudgetDashboard() {
  const dispatch = useDispatch();

  function handleSubmit(formName, formValues) {
    if (formName === "incomes") {
      const action = budgetIncomesActionCreators.CREATE.REQUEST(formValues);
      dispatch(action);
    }
  }
  return (
    <Dashboard
      entityName={budgetDashbaordConfig.entityName}
      entityParts={budgetDashbaordConfig.entityParts}
      formsConfig={budgetDashbaordConfig.formsConfig}
      onSubmit={handleSubmit}
      normalizeFormData={true}
    />
  );
}

export default BudgetDashboard;
