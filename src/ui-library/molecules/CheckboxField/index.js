import PropTypes from "prop-types";
import clsx from "clsx";
import {
  Checkbox,
  FormControlLabel,
  FormControl,
  Typography
} from "@material-ui/core";

import useStyles from "./styles";

export default function CheckboxField({
  label,
  checked,
  onChange,
  helperText,
  fullWidth,
  bordered,
  ...rest
}) {
  const classes = useStyles();
  return (
    <FormControl
      component="fieldset"
      fullWidth={fullWidth}
      className={clsx({ [classes.bordered]: bordered })}
    >
      <FormControlLabel
        {...rest}
        checked={checked}
        control={<Checkbox color="primary" />}
        label={label}
        onChange={onChange}
      />
      {helperText && <Typography variant="body2">{helperText}</Typography>}
    </FormControl>
  );
}

CheckboxField.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  helperText: PropTypes.string,
  fullWidth: PropTypes.bool,
  bordered: PropTypes.bool
};
