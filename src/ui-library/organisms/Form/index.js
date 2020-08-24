import PropTypes from "prop-types";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@material-ui/core";

import useForm from "./hooks";

export default function Form({
  fields,
  onSubmit,
  sectionsSplitting = false,
  sections
}) {
  const { getComponentByFieldType, handleChange, handleSubmit } = useForm({
    fields,
    onSubmit
  });
  function renderFields(fields) {
    return fields.map((field) => {
      const Component = getComponentByFieldType(field.type);
      return <Component key={field.name} {...field} onChange={handleChange} />;
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
    <Grid>
      <form name={formName} onSubmit={handleSubmit}>
        {sectionsSplitting ? renderSections() : renderFields(fields)}
      </form>
    </Grid>
  );
}

Form.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired,
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
          onChange: PropTypes.func.isRequired,
          id: PropTypes.string
        })
      ).isRequired
    })
  )
};
