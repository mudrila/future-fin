import { Typography, Grid } from "@material-ui/core";

import { Dashboard } from "../../../ui-library";

import FinHealthIndicator from "./components/FinHealthIndicator";

import useFinPlanDashboard from "./hooks";
import useStyles from "./styles";

function FinPlanDashboard() {
  const classes = useStyles();
  const {
    entityName,
    entityParts,
    formsConfig,
    handleSubmit,
    handleEdit,
    handleDelete,
    finHealth,
    totalFinancialGoalsPrice
  } = useFinPlanDashboard();
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
      subHeader={
        <Grid container justify="center">
          <Grid container item xs={2}>
            <Typography className={classes.heading} align="center">
              Total Goals Price
            </Typography>
            <Typography className={classes.heading} align="center">
              {totalFinancialGoalsPrice} UAH
            </Typography>
          </Grid>
        </Grid>
      }
    >
      <Typography variant="h4" align="center" className={classes.heading}>
        Your Financial Health Indication
      </Typography>
      <FinHealthIndicator checkPoints={finHealth.checkPoints} />
    </Dashboard>
  );
}

export default FinPlanDashboard;
