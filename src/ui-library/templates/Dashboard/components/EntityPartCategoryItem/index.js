import PropTypes from "prop-types";
import { useState } from "react";
import { format } from "date-fns";
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
import { useTranslation } from "../../../../../i18n";

export default function EntityPartCategoryItem({
  expectedAmount,
  balance,
  amount = 0,
  frequency,
  icon,
  name,
  currency,
  onDelete,
  onEdit,
  deadline
}) {
  const classes = useStyles();
  const Icon = allIconsMap[icon].Icon;
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleDelete = () => {
    onDelete();
    handleClose();
  };
  const handleEdit = () => {
    onEdit();
    handleClose();
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
            FabProps={{
              className: classes.settingsIcon
            }}
            onClose={handleClose}
            onOpen={handleOpen}
            open={open}
            direction={"down"}
          >
            <SpeedDialAction
              icon={<allIconsMap.Edit.Icon />}
              tooltipTitle={t("edit")}
              onClick={handleEdit}
            />
            <SpeedDialAction
              icon={<allIconsMap.Delete.Icon />}
              tooltipTitle={t("delete")}
              onClick={handleDelete}
            />
          </SpeedDial>
        }
      />
      <CardContent className={classes.cardContent}>
        <Fab color="primary" className={classes.actionIcon}>
          <Icon />
        </Fab>
        <Typography variant="body1">
          {(+balance || +amount).toFixed(2)} {currency}
        </Typography>
        {expectedAmount && (
          <Typography variant="body1">
            {(+expectedAmount).toFixed(2)} /{" "}
            {/* Translated frequency, or formatted deadline. Or nothing */}
            {(frequency &&
              t(
                `budget:form.incomes.sections.general.frequency.options${frequency}`
              )) ||
              (deadline && format(new Date(deadline), "dd.MM.yyyy"))}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

EntityPartCategoryItem.propTypes = {
  expectedAmount: PropTypes.string,
  amount: PropTypes.string,
  frequency: PropTypes.string,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  frequency: PropTypes.string,
  currency: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  balance: PropTypes.string,
  deadline: PropTypes.string
};
