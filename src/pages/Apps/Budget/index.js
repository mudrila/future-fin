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
    totalSpendings,
    t,
    defaultCurrency
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
            <Typography>{t("budget:totalIncome")}</Typography>
            <Typography>
              {totalIncome} {defaultCurrency}
            </Typography>
          </Grid>
          <Grid container item xs={1} className={classes.subHeadingItem}>
            <Typography>{t("budget:currentBalance")}</Typography>
            <Typography>
              {currentBalance} {defaultCurrency}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography>{t("budget:totalSpendings")}</Typography>
            <Typography>
              {totalSpendings} {defaultCurrency}
            </Typography>
          </Grid>
        </Grid>
      }
    />
  );
}

export default BudgetDashboard;
