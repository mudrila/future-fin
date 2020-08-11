import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid
} from "@material-ui/core";

import useForm from "./hooks";

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
  const { getComponentByFieldType, handleChange, handleSubmit } = useForm({
    fields: formProps.fields,
    onSubmit
  });
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
                return (
                  <Component
                    key={field.name}
                    {...field}
                    onChange={handleChange}
                  />
                );
              })}
            </form>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            {cancelButtonText}
          </Button>
          <Button onClick={handleSubmit} color="primary" type="submit">
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
        onChange: PropTypes.func.isRequired,
        id: PropTypes.string
      })
    ),
    onSubmit: PropTypes.func.isRequired,
    formName: PropTypes.string.isRequired
  }).isRequired,
  title: PropTypes.string,
  contentText: PropTypes.string,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};
