import PropTypes from "prop-types";
import { Typography, Fab, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    width: "25%",
    display: "flex",
    flex: 1,
    flexWrap: "wrap"
  }
}));
export default function MobileCard({
  drag,
  drop,
  onClick,
  name,
  Icon,
  amount,
  expectedAmount,
  balance,
  frequency,
  deadline,
  currency,
  t
}) {
  const classes = useStyles();
  return (
    <section ref={drop} className={classes.root}>
      <Typography variant="body2">{name}</Typography>
      <Fab ref={drag} onClick={onClick} color="primary">
        <Icon />
      </Fab>
      {expectedAmount ? (
        <Tooltip
          title={
            <Typography variant="body2" color="inherit">
              {(+expectedAmount).toFixed(2)} /{" "}
              {/* Translated frequency, or formatted deadline. Or nothing */}
              {(frequency &&
                t(
                  `budget:form.incomes.sections.general.fields.frequency.options.${frequency}`
                )) ||
                (deadline && format(new Date(deadline), "dd.MM.yyyy"))}
            </Typography>
          }
        >
          <span>
            {(+balance || +amount).toFixed(2)} {currency}
          </span>
        </Tooltip>
      ) : (
        <Typography variant="body2">
          {(+balance || +amount).toFixed(2)} {currency}
        </Typography>
      )}
    </section>
  );
}

MobileCard.propTypes = {
  drag: PropTypes.func,
  drop: PropTypes.func,
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  Icon: PropTypes.node.isRequired,
  amount: PropTypes.number,
  balance: PropTypes.number,
  frequency: PropTypes.string,
  currency: PropTypes.string,
  deadline: PropTypes.Date,
  t: PropTypes.func.isRequired,
  expectedAmount: PropTypes.number,
  classes: PropTypes.shape({
    root: PropTypes.string
  })
};
