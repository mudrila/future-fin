import PropTypes from "prop-types";
import {
  Checkbox,
  FormControlLabel,
  FormControl,
  Typography
} from "@material-ui/core";

export default function CheckboxField({
  label,
  checked,
  onChange,
  helperText,
  ...rest
}) {
  return (
    <FormControl component="fieldset">
      <FormControlLabel
        {...rest}
        checked={checked}
        control={<Checkbox color="primary" />}
        label={label}
        labelPlacement="top"
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
  helperText: PropTypes.string
};
