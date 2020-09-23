import PropTypes from "prop-types";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  CircularProgress
} from "@material-ui/core";

import useForm from "./hooks";
import useStyles from "../FormDialog/styles";

export default function Form({
  fields,
  onSubmit,
  sectionsSplitting = false,
  sections,
  formName,
  submitButtonText,
  loading = false,
  formClassName
}) {
  const classes = useStyles();
  const {
    getComponentByFieldType,
    getInputPropsByField,
    handleSubmit,
    t
  } = useForm({
    fields,
    onSubmit
  });
  let translatedSubmitButtonText = submitButtonText || t("submit");
  function renderFields(fields) {
    return fields.map((field) => {
      const Component = getComponentByFieldType(field.type);
      const inputProps = getInputPropsByField(field);
      return (
        <Component
          key={field.name}
          className={classes.inputField}
          {...inputProps}
        />
      );
    });
  }
  function renderSections() {
    return sections.map((section, i) => {
      return (
        <Accordion key={section.name} defaultExpanded={i === 0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id={section.name}
          >
            {section.name}
          </AccordionSummary>
          <AccordionDetails>{renderFields(section.fields)}</AccordionDetails>
        </Accordion>
      );
    });
  }
  return (
    <form name={formName} onSubmit={handleSubmit} className={formClassName}>
      {sectionsSplitting ? renderSections() : renderFields(fields)}
      <Button
        color="primary"
        type="submit"
        variant="contained"
        fullWidth
        disabled={loading}
      >
        {loading ? <CircularProgress /> : translatedSubmitButtonText}
      </Button>
    </form>
  );
}

Form.propTypes = {
  formClassName: PropTypes.string,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      onChange: PropTypes.func,
      id: PropTypes.string
    })
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
  formName: PropTypes.string.isRequired,
  sectionsSplitting: PropTypes.bool,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      fields: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          onChange: PropTypes.func,
          id: PropTypes.string
        })
      ).isRequired
    })
  ),
  submitButtonText: PropTypes.string,
  loading: PropTypes.bool
};
