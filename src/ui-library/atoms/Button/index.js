import PropTypes from "prop-types";
import { Fab } from "@material-ui/core";
import { Add } from "@material-ui/icons";

export function AddButton({ color = "primary", ariaLabel = "Add", onClick }) {
  return (
    <Fab color={color} aria-label={ariaLabel} onClick={onClick}>
      <Add />
    </Fab>
  );
}

AddButton.propTypes = {
  color: PropTypes.string,
  ariaLabel: PropTypes.string,
  onClick: PropTypes.func
};
