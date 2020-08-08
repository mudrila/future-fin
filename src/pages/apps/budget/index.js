import { Typography, Divider } from "@material-ui/core";

import { AddButton } from "../../../ui-library";
import useStyles from "./styles";

function BudgetDashboard() {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Typography variant="h4" className={classes.heading} align="center">
        Budget Dashboard
      </Typography>
      <Divider className={classes.divider} />
      <section className={classes.section}>
        <Typography variant="h5" className={classes.heading} align="center">
          Incomes
        </Typography>
        <AddButton />
      </section>
      <Divider className={classes.divider} />
      <section className={classes.section}>
        <Typography variant="h5" className={classes.heading} align="center">
          Accounts
        </Typography>
        <AddButton />
      </section>
      <Divider className={classes.divider} />
      <section className={classes.section}>
        <Typography variant="h5" className={classes.heading} align="center">
          Spendings
        </Typography>
        <AddButton />
      </section>
      <Divider className={classes.divider} />
    </section>
  );
}

export default BudgetDashboard;
