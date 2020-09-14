import { Dashboard } from "../../../ui-library";
import useFinPlanDashboard from "./hooks";
import useStyles from "./styles";

import FinHealthIndicator from "./components/FinHealthIndicator";
import { Typography } from "@material-ui/core";

function FinPlanDashboard() {
  const classes = useStyles();
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
      childrenPositioning="top"
    >
      <Typography variant="h4" align="center" className={classes.heading}>
        Your Financial Health Indication
      </Typography>
      <FinHealthIndicator checkPoints={finHealth.checkPoints} />
    </Dashboard>
  );
}

export default FinPlanDashboard;
