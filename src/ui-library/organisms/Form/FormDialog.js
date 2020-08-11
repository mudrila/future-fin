import React from "react";
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
import useFormDialog from "./hooks/useFormDialog";

export default function FormDialog({
  formProps,
  submitButtonText = "Submit",
  cancelButtonText = "Cancel",
  title = "Create new",
  contentText
}) {
  const { handleClose, open, handleSubmit } = useFormDialog();
  const { getComponentByFieldType, handleChange } = useForm({
    fields,
    onSubmit
  });
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <DialogContent>
          {contentText && <DialogContentText>{contentText}</DialogContentText>}
          <Grid>
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
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {cancelButtonText}
          </Button>
          <Button onClick={handleSubmit} color="primary">
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
    onSubmit: PropTypes.func.isRequired
  }).isRequired,
  title: PropTypes.string,
  contentText: PropTypes.string
};
