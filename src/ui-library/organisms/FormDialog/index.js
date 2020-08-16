import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
  onSubmit,
  sectionsSplitting = false
}) {
  let fields = formProps.fields;
  if (sectionsSplitting) {
    fields = [];
    formProps.sections.forEach((section) => {
      fields.push(...section.fields);
    });
  }
  const {
    getComponentByFieldType,
    getInputPropsByField,
    handleSubmit
  } = useForm({
    fields,
    onSubmit
  });
  const classes = useStyles();

  function renderFields(fields) {
    return fields.map((field) => {
      const Component = getComponentByFieldType(field.type);
      const inputProps = getInputPropsByField(field);
      return (
        <Component
          key={field.name}
          {...inputProps}
          className={classes.inputField}
        />
      );
    });
  }
  function renderSections() {
    return formProps.sections.map((section) => (
      <Accordion key={section.name} TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id={section.name}
        >
          {section.name}
        </AccordionSummary>
        <AccordionDetails>
          <Grid item xs={12}>
            {renderFields(section.fields)}
          </Grid>
        </AccordionDetails>
      </Accordion>
    ));
  }

  return (
    <>
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <DialogContent className={classes.dialogRoot}>
          {contentText && <DialogContentText>{contentText}</DialogContentText>}
          <Grid item xs={12}>
            <form name={formProps.formName} onSubmit={handleSubmit}>
              {sectionsSplitting
                ? renderSections()
                : renderFields(formProps.fields)}
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
  sectionsSplitting: PropTypes.bool
};
