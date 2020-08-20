import { Typography } from "@material-ui/core";

import { Dashboard } from "../../../ui-library";
import useFinPlanDashboard from "./hooks";

function FinPlanDashboard() {
  const {
    incomeSources,
    accounts,
    spendingCategories,
    entityName,
    entityParts,
    formsConfig
  } = useFinPlanDashboard();
  console.log(incomeSources, accounts, spendingCategories);
  return (
    <Dashboard
      entityName={entityName}
      entityParts={entityParts}
      formsConfig={formsConfig}
      childrenPositioning="top"
    >
      <Typography variant="body1">Your total income / month:</Typography>
      <Typography variant="body1">Your current ballance:</Typography>
      <Typography variant="body1"> Your total spendings / month:</Typography>
      <Typography variant="body1">
        Your projected positive ballance would be achieved in:
      </Typography>
    </Dashboard>
  );
}

export default FinPlanDashboard;
