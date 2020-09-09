import PropTypes from "prop-types";
import { Grid, Typography, Paper } from "@material-ui/core";

export function CustomTooltip({ payload, active }) {
  if (active) {
    const data = payload[0] ? payload[0].payload : { paidDebts: [] }; // Lol. Thanks recharts.
    return (
      <Paper>
        <Grid container>
          <Grid item xs={2}>
            <Typography variant="body1">Date: {data.date}</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body1">Payments:</Typography>
            {data.paidDebts.map((payment, i) => (
              <Grid container key={i}>
                <Grid item xs={6}>
                  {payment.name} {payment.paid && "(Fully Paid!)"}
                </Grid>
                <Grid item xs={6}>
                  {payment.balance}
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body1">
              End of Month Balance: {data.totalBalance}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    );
  }
  return null;
}

CustomTooltip.propTypes = {
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      payload: PropTypes.shape({
        date: PropTypes.string,
        totalBalance: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        paidDebts: PropTypes.arrayOf(
          PropTypes.shape({
            balance: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
              .isRequired,
            name: PropTypes.string.isRequired
          })
        ).isRequired
      }).isRequired
    })
  ),
  active: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired
};
