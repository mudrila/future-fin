import PropTypes from "prop-types";
import {
  Typography,
  FormControl,
  FormControlLabel,
  FormGroup,
  Switch
} from "@material-ui/core";

export default function SwitchField({
  label,
  value,
  helperText,
  labelPlacement = "top",
  onChange,
  name,
  ...rest
}) {
  return (
    <FormControl component="fieldset" onChange={onChange} name={name}>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value={value}
          control={<Switch color="secondary" />}
          label={label}
          labelPlacement={labelPlacement}
          {...rest}
        />
        {helperText && <Typography variant="body2">{helperText}</Typography>}
      </FormGroup>
    </FormControl>
  );
}

SwitchField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  helperText: PropTypes.string,
  labelPlacement: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string
};
