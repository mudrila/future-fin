import PropTypes from "prop-types";
import { Popover } from "@material-ui/core";
import { useHoverablePopover } from "./hooks";
import useStyles from "./styles";

export function HoverablePopover({
  TriggerComponent,
  children,
  ...TriggerComponentProps
}) {
  const {
    handlePopoverOpen,
    handlePopoverClose,
    popoverOpen,
    popoverAnchorEl
  } = useHoverablePopover();
  const classes = useStyles();
  return (
    <>
      <TriggerComponent
        {...TriggerComponentProps}
        aria-owns={popoverOpen ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      />
      <Popover
        className={classes.popover}
        classes={{
          paper: classes.paper
        }}
        open={popoverOpen}
        anchorEl={popoverAnchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        {children}
      </Popover>
    </>
  );
}

HoverablePopover.propTypes = {
  TriggerComponent: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.string
  ]).isRequired,
  children: PropTypes.node.isRequired
};
