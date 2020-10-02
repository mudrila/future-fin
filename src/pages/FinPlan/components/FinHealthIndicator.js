import { Fragment } from "react";
import {
  Paper,
  Typography,
  Dialog,
  DialogContent,
  IconButton,
  AppBar
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import useMediaQuery from "@material-ui/core/useMediaQuery";
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

import { useTranslation } from "../../../i18n";
import useStyles from "./styles";
import useFinHealthIndicator from "./hooks";

export default function FinHealthIndicator({ checkPoints }) {
  const { t } = useTranslation();
  const {
    modalOpen,
    modalContent,
    handleOpen,
    handleClose
  } = useFinHealthIndicator();
  const isMobile = useMediaQuery("(max-width:768px)");
  const classes = useStyles({ isMobile });
  return (
    <Fragment>
      <Typography variant="h4" align="center" className={classes.heading}>
        {t("finHealth:header")}
      </Typography>
      <Timeline align={isMobile ? "right" : "alternate"}>
        {checkPoints
          .sort(function (x, y) {
            // true values first
            return x.achieved === y.achieved ? 0 : x.achieved ? -1 : 1;
          })
          .map((point, index) => (
            <TimelineItem key={point.key}>
              {!isMobile && (
                <TimelineOppositeContent>
                  <Typography
                    variant="body2"
                    className={
                      point.achieved ? classes.successText : classes.errorText
                    }
                  >
                    {t(`finHealth:${point.key}.name`)}
                  </Typography>
                </TimelineOppositeContent>
              )}
              <TimelineSeparator>
                <TimelineDot
                  onClick={() =>
                    isMobile &&
                    handleOpen(t(`finHealth:${point.key}.description`))
                  }
                  className={
                    point.achieved ? classes.successTile : classes.errorTile
                  }
                >
                  {point.achieved ? <CheckCircle /> : <CancelRounded />}
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
                  <Typography variant="h6">
                    {isMobile
                      ? t(`finHealth:${point.key}.name`)
                      : t(`finHealth:${point.key}.description`)}
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
      </Timeline>
      {isMobile && (
        <Dialog open={modalOpen} onClose={handleClose} fullScreen>
          <AppBar className={classes.dialogTitle}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              className={classes.closeDialogButton}
            >
              <CloseIcon />
            </IconButton>
          </AppBar>
          <DialogContent className={classes.dialogContent}>
            <Paper elevation={5} className={classes.dialogInnerContent}>
              {modalContent}
            </Paper>
          </DialogContent>
        </Dialog>
      )}
    </Fragment>
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
