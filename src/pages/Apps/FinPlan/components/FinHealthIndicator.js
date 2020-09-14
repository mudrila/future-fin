import { Paper, Typography } from "@material-ui/core";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
  TimelineContent,
  TimelineOppositeContent
} from "@material-ui/lab";
import { CheckCircle, CancelRounded } from "@material-ui/icons";
import PropTypes from "prop-types";

import useStyles from "./styles";

export default function FinHealthIndicator({ checkPoints }) {
  const classes = useStyles();
  return (
    <Timeline align="alternate">
      {checkPoints
        .sort(function (x, y) {
          // true values first
          return x.achieved === y.achieved ? 0 : x.achieved ? -1 : 1;
        })
        .map((point, index) => (
          <TimelineItem key={point.key}>
            <TimelineOppositeContent>
              <Typography
                variant="body2"
                className={
                  point.achieved ? classes.successText : classes.errorText
                }
              >
                {point.name}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot
                className={
                  point.achieved ? classes.successTile : classes.errorTile
                }
              >
                {point.achieved ? (
                  <CheckCircle color="green" />
                ) : (
                  <CancelRounded color="error" />
                )}
              </TimelineDot>
              {index !== checkPoints.length - 1 && (
                <TimelineConnector
                  className={
                    point.achieved ? classes.successTile : classes.errorTile
                  }
                />
              )}
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6">{point.description}</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
    </Timeline>
  );
}

FinHealthIndicator.propTypes = {
  checkPoints: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      achieved: PropTypes.bool.isRequired
    })
  )
};
