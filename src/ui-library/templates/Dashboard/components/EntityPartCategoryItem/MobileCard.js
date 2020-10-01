import PropTypes from "prop-types";
import clsx from "clsx";
import { Typography, Fab, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flex: "1 0 33%",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    height: 150
  },
  dropping: {
    border: "1px dashed black"
  },
  paragraph: {
    width: "100%",
    height: 45
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
  t,
  children,
  canDrop,
  isOver
}) {
  const classes = useStyles();
  return (
    <section
      ref={drop}
      className={clsx(classes.root, { [classes.dropping]: isOver && canDrop })}
    >
      <Typography variant="body2" className={classes.paragraph} align="center">
        {name}
      </Typography>
      <Fab ref={drag} onClick={onClick} color="primary">
        <Icon />
      </Fab>
      {expectedAmount ? (
        <Tooltip
          title={
            <Typography
              variant="body2"
              color="inherit"
              className={classes.paragraph}
              align="center"
            >
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
          <Typography
            variant="body2"
            className={classes.paragraph}
            align="center"
          >
            {(+balance || +amount).toFixed(2)} {currency}
          </Typography>
        </Tooltip>
      ) : (
        <Typography
          variant="body2"
          className={classes.paragraph}
          align="center"
        >
          {(+balance || +amount).toFixed(2)} {currency}
        </Typography>
      )}
      {children}
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
  }),
  children: PropTypes.node,
  canDrop: PropTypes.bool,
  isOver: PropTypes.bool
};
