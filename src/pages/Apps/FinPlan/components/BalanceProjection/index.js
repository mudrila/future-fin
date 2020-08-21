import { Fragment } from "react";
import { Typography, Divider, Grid } from "@material-ui/core";

import { CheckboxField } from "../../../../../ui-library";
import useBalanceProjection from "./hooks";
import useStyles from "./styles";

export default function BalanceProjection() {
  const classes = useStyles();
  const {
    totalIncome,
    currentBalance,
    totalSpendings,
    monthsToPositiveBalance,
    payoutSchedule,
    possibleReducing,
    reducedCategories,
    handlePossibleReducingChange
  } = useBalanceProjection();
  return (
    <Fragment>
      <Grid container>
        <Typography variant="h4" className={classes.fullWidth}>
          Check how your fin plan would look like, if you will reduce those
          spendings:
          <CheckboxField
            checked={possibleReducing}
            onChange={handlePossibleReducingChange}
          />
        </Typography>
        {reducedCategories.map((category, i) => (
          <Fragment key={i}>
            <Grid item xs={6}>
              {category.name}
            </Grid>
            <Grid item xs={6}>
              {category.expectedAmount} {category.currency}
            </Grid>
          </Fragment>
        ))}
      </Grid>
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
      <Typography variant="h4" className={classes.fullWidth} align="center">
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
    </Fragment>
  );
}
