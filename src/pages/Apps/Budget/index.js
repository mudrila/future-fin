import { Grid, Typography } from "@material-ui/core";

import { Dashboard } from "../../../ui-library";
import useBudgetDashboard from "./hooks";
import useStyles from "./styles";

function BudgetDashboard() {
  const classes = useStyles();
  const {
    handleSubmit,
    handleEdit,
    handleDelete,
    entityName,
    entityParts,
    formsConfig,
    totalIncome,
    currentBalance,
    totalSpendings
  } = useBudgetDashboard();

  return (
    <Dashboard
      entityName={entityName}
      entityParts={entityParts}
      formsConfig={formsConfig}
      onSubmit={handleSubmit}
      normalizeFormData={true}
      onEdit={handleEdit}
      onDelete={handleDelete}
      subHeader={
        <Grid container justify="center">
          <Grid container item xs={1} className={classes.subHeadingItem}>
            <Typography>Total Income</Typography>
            <Typography>{totalIncome} UAH</Typography>
          </Grid>
          <Grid container item xs={1} className={classes.subHeadingItem}>
            <Typography>Current Balance</Typography>
            <Typography>{currentBalance} UAH</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography>Total Spendings </Typography>
            <Typography>{totalSpendings} UAH</Typography>
          </Grid>
        </Grid>
      }
    />
  );
}

export default BudgetDashboard;
