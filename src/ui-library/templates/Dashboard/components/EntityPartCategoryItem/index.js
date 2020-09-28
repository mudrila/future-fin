import PropTypes from "prop-types";
import clsx from "clsx";
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

import useStyles from "./styles";
import { allIconsMap } from "../../../../molecules/IconSelector";

import useEntityPartCategoryItem from "./hooks";
import { ItemTypes } from "../../config/dnd";
import DragPreview from "../DragPreview";

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
  deadline,
  dragItemType,
  acceptDropItemTypes,
  _id,
  onTransactionPerform,
  isMobile
}) {
  const {
    t,
    handleClose,
    handleEdit,
    handleDelete,
    open,
    handleOpen,
    Icon,
    drag,
    isDragging,
    drop,
    isOver,
    canDrop,
    preview
  } = useEntityPartCategoryItem({
    onDelete,
    onEdit,
    icon,
    dragItemType,
    acceptDropItemTypes,
    _id,
    onTransactionPerform
  });
  const classes = useStyles({ isMobile });
  return (
    <Card
      className={clsx(classes.root, { [classes.dropping]: isOver && canDrop })}
      variant="outlined"
      ref={dragItemType !== ItemTypes.INCOME ? drop : null}
    >
      <CardHeader
        className={classes.cardHeader}
        title={name}
        titleTypographyProps={{
          color: "primary",
          className: classes.textHeader
        }}
        action={
          !isMobile && (
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
          )
        }
      />
      <CardContent className={classes.cardContent}>
        <Fab
          color="primary"
          className={clsx(classes.actionIcon, {
            [classes.dragging]: isDragging
          })}
          ref={dragItemType !== ItemTypes.SPENDING ? drag : null}
          onClick={isMobile ? handleEdit : null}
        >
          <DragPreview connect={preview} isMobile={isMobile} />
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
                `budget:form.incomes.sections.general.fields.frequency.options.${frequency}`
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
  deadline: PropTypes.string,
  dragItemType: PropTypes.string,
  acceptDropItemTypes: PropTypes.arrayOf(PropTypes.string),
  _id: PropTypes.string.isRequired,
  onTransactionPerform: PropTypes.func,
  isMobile: PropTypes.bool.isRequired
};
