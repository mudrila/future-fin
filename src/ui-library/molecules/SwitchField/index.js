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
  ...rest
}) {
  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value={value}
          control={<Switch color="secondary" {...rest} />}
          label={label}
          labelPlacement={labelPlacement}
        />
        <Typography variant="body2">{helperText}</Typography>
      </FormGroup>
    </FormControl>
  );
}

SwitchField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.bool,
  helperText: PropTypes.string,
  labelPlacement: PropTypes.string
};
