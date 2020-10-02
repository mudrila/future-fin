import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Typography
} from "@material-ui/core";

import FormFields from "./Fields";
import useStyles from "../../FormDialog/styles";

export default function FormSections({
  sections,
  getComponentByFieldType,
  getInputPropsByField,
  formState
}) {
  const classes = useStyles();
  return sections.map((section, i) => (
    <Accordion
      key={section.name}
      TransitionProps={{ unmountOnExit: true }}
      defaultExpanded={i === 0}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id={section.name}
      >
        {section.name}
      </AccordionSummary>
      <AccordionDetails className={classes.detailsContainer}>
        {section.description && (
          <Grid item xs={12}>
            <Typography variant="body2">{section.description}</Typography>
          </Grid>
        )}
        <Grid item xs={12}>
          <FormFields
            fields={section.fields}
            getComponentByFieldType={getComponentByFieldType}
            getInputPropsByField={getInputPropsByField}
            formState={formState}
          />
        </Grid>
      </AccordionDetails>
    </Accordion>
  ));
}
