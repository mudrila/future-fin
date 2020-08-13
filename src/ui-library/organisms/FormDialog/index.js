import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField
} from "@material-ui/core";

import useForm from "../Form/hooks";
import useStyles from "./styles";

// This components partially repeat Form component
// Since submit handled in a bit different way
// TODO: Find better way to keep it DRY.
export default function FormDialog({
  formProps,
  submitButtonText = "Submit",
  cancelButtonText = "Cancel",
  title = "Create new",
  contentText,
  open,
  onClose,
  onSubmit
}) {
  const {
    getComponentByFieldType,
    getInputPropsByField,
    handleSubmit
  } = useForm({
    fields: formProps.fields,
    onSubmit
  });
  const classes = useStyles();
  return (
    <>
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <DialogContent>
          {contentText && <DialogContentText>{contentText}</DialogContentText>}
          <Grid>
            <form name={formProps.formName} onSubmit={handleSubmit}>
              {formProps.fields.map((field) => {
                const Component = getComponentByFieldType(field.type);
                const inputProps = getInputPropsByField(field);
                return (
                  <Component
                    key={field.name}
                    {...inputProps}
                    className={classes.inputField}
                  />
                );
              })}
            </form>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary" variant="contained">
            {cancelButtonText}
          </Button>
          <Button
            onClick={handleSubmit}
            color="primary"
            type="submit"
            variant="contained"
          >
            {submitButtonText}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

FormDialog.propTypes = {
  submitButtonText: PropTypes.string,
  cancelButtonText: PropTypes.string,
  formProps: PropTypes.shape({
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onChange: PropTypes.func,
        id: PropTypes.string
      })
    ),
    formName: PropTypes.string.isRequired
  }).isRequired,
  title: PropTypes.string,
  contentText: PropTypes.string,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};
