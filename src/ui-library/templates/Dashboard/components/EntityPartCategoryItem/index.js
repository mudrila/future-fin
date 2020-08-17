import PropTypes from "prop-types";
import { useState } from "react";
import {
  Fab,
  Typography,
  Card,
  CardContent,
  CardHeader
} from "@material-ui/core";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";

import { capitalizeString } from "../../../../utils";
import useStyles from "./styles";
import { allIconsMap } from "../../../../molecules/IconSelector";

export default function EntityPartCategoryItem({
  expectedAmount,
  amount = 0,
  frequency,
  icon,
  name,
  currency
}) {
  const classes = useStyles();
  const Icon = allIconsMap[icon].Icon;
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader
        className={classes.cardHeader}
        title={name}
        titleTypographyProps={{
          color: "primary",
          className: classes.textHeader
        }}
        action={
          <SpeedDial
            ariaLabel="Manage"
            icon={<allIconsMap.Settings.Icon />}
            onClose={handleClose}
            onOpen={handleOpen}
            open={open}
            direction={"down"}
          >
            <SpeedDialAction
              icon={<allIconsMap.Edit.Icon />}
              tooltipTitle={"Edit"}
              onClick={handleClose}
            />
            <SpeedDialAction
              icon={<allIconsMap.Delete.Icon />}
              tooltipTitle={"Delete"}
              onClick={handleClose}
            />
          </SpeedDial>
        }
      />
      <CardContent className={classes.cardContent}>
        <Fab color="primary" className={classes.actionIcon}>
          <Icon />
        </Fab>
        <Typography variant="body1">
          {(+amount).toFixed(2)} {currency}
        </Typography>
        <Typography variant="body1">
          {(+expectedAmount).toFixed(2)} / {capitalizeString(frequency)}
        </Typography>
      </CardContent>
    </Card>
  );
}

EntityPartCategoryItem.propTypes = {
  expectedAmount: PropTypes.string.isRequired,
  amount: PropTypes.string,
  frequency: PropTypes.string,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  frequency: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired
};
