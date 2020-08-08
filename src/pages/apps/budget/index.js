import { Typography, Divider, makeStyles } from "@material-ui/core";
import { AddButton } from "../../../ui-library";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    flexWrap: "wrap"
  },
  section: {
    display: "flex",
    width: "100%",
    flexWrap: "wrap"
  },
  heading: {
    width: "100%",
    margin: theme.spacing(3)
  },
  divider: {
    width: "90%",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}));

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
