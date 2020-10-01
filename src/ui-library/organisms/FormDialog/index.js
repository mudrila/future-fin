import { useRef } from "react";
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

import Form from "../Form";
import { useTranslation } from "../../../i18n";
import useStyles from "./styles";

export default function FormDialog({
  formProps,
  submitButtonText,
  cancelButtonText,
  title,
  contentText,
  open,
  onClose,
  onSubmit,
  sectionsSplitting = false,
  fullScreen = false,
  additionalActionsContent = null,
  ...restProps
}) {
  let fields = formProps.fields;
  if (sectionsSplitting) {
    fields = [];
    formProps.sections.forEach((section) => {
      fields.push(...section.fields);
    });
  }
  const { t } = useTranslation();
  const formRef = useRef();
  const classes = useStyles({ fullScreen });

  const translatedButtonText = submitButtonText || t("submit");
  const translatedCancelButtonText = cancelButtonText || t("cancel");
  const translatedTitle = title || t("formDialogTitle");

  function handleSubmit(formValues) {
    onSubmit(formValues);
  }

  function handleSubmitButtonClick() {
    formRef.current.dispatchEvent(new Event("submit"));
  }

  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={onClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{translatedTitle}</DialogTitle>
        <DialogContent className={classes.dialogRoot}>
          {contentText && <DialogContentText>{contentText}</DialogContentText>}
          <Grid item xs={12}>
            <Form
              {...restProps}
              {...formProps}
              shouldRenderSubmitButton={false}
              sectionsSplitting={sectionsSplitting}
              sections={formProps.sections}
              fields={fields}
              onSubmit={handleSubmit}
              formRef={formRef}
            />
          </Grid>
        </DialogContent>
        <DialogActions>
          {additionalActionsContent}
          <Button onClick={onClose} color="primary" variant="outlined">
            {translatedCancelButtonText}
          </Button>
          <Button
            onClick={handleSubmitButtonClick}
            color="primary"
            type="submit"
            variant="contained"
            form={formProps.formName}
          >
            {translatedButtonText}
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
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        fields: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string,
            label: PropTypes.string,
            onChange: PropTypes.func,
            id: PropTypes.string
          })
        ).isRequired
      })
    ),
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        label: PropTypes.string,
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
  onSubmit: PropTypes.func.isRequired,
  sectionsSplitting: PropTypes.bool,
  additionalActionsContent: PropTypes.node,
  fullScreen: PropTypes.bool
};
