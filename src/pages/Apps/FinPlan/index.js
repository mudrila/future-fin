import { Typography, Divider, Grid } from "@material-ui/core";

import { Dashboard } from "../../../ui-library";
import useFinPlanDashboard from "./hooks";
import useStyles from "./styles";
import { Fragment } from "react";

function FinPlanDashboard() {
  const {
    incomeSources,
    accounts,
    spendingCategories,
    entityName,
    entityParts,
    formsConfig,
    totalIncome,
    currentBalance,
    totalSpendings,
    monthsToPositiveBalance,
    payoutSchedule
  } = useFinPlanDashboard();
  const classes = useStyles();
  return (
    <Dashboard
      entityName={entityName}
      entityParts={entityParts}
      formsConfig={formsConfig}
      childrenPositioning="top"
    >
      <Typography variant="body1" className={classes.fullWidth}>
        Your total income(UAH) / month: {totalIncome}
      </Typography>
      <Typography variant="body1" className={classes.fullWidth}>
        Your current ballance: {currentBalance}
      </Typography>
      <Typography variant="body1" className={classes.fullWidth}>
        Your total spendings / month: {totalSpendings}
      </Typography>
      <Typography variant="body1" className={classes.fullWidth}>
        Your projected positive ballance would be achieved in:{" "}
        {monthsToPositiveBalance} months
      </Typography>
      <Divider className={classes.fullWidth} />
      <Typography variant="body1" className={classes.fullWidth}>
        Your debts payout schedule:
      </Typography>
      {payoutSchedule.map((item, i) => (
        <Grid container key={i}>
          <Grid item xs={6}>
            <Typography variant="body1" className={classes.fullWidth}>
              {item.month}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            {item.paidDebts.map((paidDebt, i) => (
              <Typography key={i} variant="body1" className={classes.fullWidth}>
                {paidDebt.name}: {paidDebt.balance} UAH
              </Typography>
            ))}
          </Grid>
        </Grid>
      ))}
    </Dashboard>
  );
}

export default FinPlanDashboard;
