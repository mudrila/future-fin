import { Fab, Typography, Divider, makeStyles } from "@material-ui/core";
import { Add } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%"
  }
}));

function BudgetDashboard(props) {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Typography variant="h4">Budget Dashboard</Typography>
      <Divider />
      <section>
        <Typography variant="h5">Incomes</Typography>
        <Fab color="primary" aria-label="Add Income">
          <Add />
        </Fab>
      </section>
      <Divider />
      <section>
        <Typography variant="h5">Accounts</Typography>
        <Fab color="primary" aria-label="Add Account">
          <Add />
        </Fab>
      </section>
      <Divider />
      <section>
        <Typography variant="h5">Spendings</Typography>
        <Fab color="primary" aria-label="Add Spending Category">
          <Add />
        </Fab>
      </section>
      <Divider />
    </section>
  );
}

export default BudgetDashboard;
