import { Fragment } from "react";
import { Typography, Divider, Grid } from "@material-ui/core";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

import { CheckboxField } from "../../ui-library";
import { CustomTooltip } from "./components";
import useBalanceProjection from "./hooks";
import useStyles from "./styles";

export default function FinPlanSchedule() {
  // TODO: Apply translations once this page would be updated with proper UI
  const classes = useStyles();
  const {
    totalIncome,
    currentBalance,
    totalSpendings,
    monthsToPositiveBalance,
    finPlanSchedule,
    possibleReducing,
    reducedCategories,
    handlePossibleReducingChange,
    totalFinancialGoalsPrice,
    monthsToAchieveAllFinancialGoals
  } = useBalanceProjection();
  return (
    <Fragment>
      <Grid container>
        <Typography variant="h4" className={classes.fullWidth}>
          Balance Projection (3 years)
        </Typography>
        <LineChart
          width={1200}
          height={600}
          data={finPlanSchedule.slice(0, 36)}
        >
          <XAxis dataKey="date" />
          <YAxis
            dataKey="totalBalance"
            type="number"
            domain={["dataMin", "dataMax"]}
          />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="totalBalance" stroke="#8884d8" />
          <Tooltip content={<CustomTooltip />} />
        </LineChart>
      </Grid>
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
      {currentBalance < 0 ? (
        <Typography variant="body1" className={classes.fullWidth}>
          Your projected positive ballance would be achieved in:{" "}
          {monthsToPositiveBalance} months (
          {Math.round(monthsToPositiveBalance / 12)} years)
        </Typography>
      ) : null}
      <Divider className={classes.fullWidth} />
      <Typography variant="body1" className={classes.fullWidth}>
        Your total financial goals price: {totalFinancialGoalsPrice}
      </Typography>
      <Typography variant="body1" className={classes.fullWidth}>
        Your financial goals would be achieved in:{" "}
        {monthsToAchieveAllFinancialGoals} months (
        {Math.round(monthsToAchieveAllFinancialGoals / 12)} years)
      </Typography>
      <Divider className={classes.fullWidth} />
      <Typography variant="h4" className={classes.fullWidth} align="center">
        Your financial plan schedule:
      </Typography>
      {finPlanSchedule.map((item, i) => (
        <Grid container key={i}>
          <Grid item xs={3}>
            <Typography variant="body1" className={classes.fullWidth}>
              {item.month} {item.year}
            </Typography>
          </Grid>
          <Grid item xs={8}>
            {item.payments.map((paidDebt, i) => (
              <Typography key={i} variant="body1" className={classes.fullWidth}>
                {paidDebt.name}: {paidDebt.balance} {paidDebt.currency}
              </Typography>
            ))}
          </Grid>
          <Grid item xs={1}>
            <Typography variant="body1" className={classes.fullWidth}>
              {item.totalBalance} UAH
            </Typography>
          </Grid>
          <Divider className={classes.fullWidth} />
        </Grid>
      ))}
    </Fragment>
  );
}
