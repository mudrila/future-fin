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
    totalFinancialGoalsPrice,
    t,
    defaultCurrency
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
              {t("finPlan:totalGoals")}
            </Typography>
            <Typography className={classes.heading} align="center">
              {totalFinancialGoalsPrice} {defaultCurrency}
            </Typography>
          </Grid>
        </Grid>
      }
    >
      <FinHealthIndicator checkPoints={finHealth.checkPoints} />
    </Dashboard>
  );
}

export default FinPlanDashboard;
