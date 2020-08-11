import { Fragment } from "react";
import PropTypes from "prop-types";
import { Typography, Divider } from "@material-ui/core";

import { capitalizeString } from "../../utils";
import { AddButton, FormDialog } from "../../";
import useStyles from "./styles";
import useDashboard from "./hooks";

export default function Dashboard({
  entityName,
  entityParts,
  formsConfig,
  onSubmit
}) {
  const {
    modalsState,
    handleModalOpen,
    handleModalClose,
    handleSubmit
  } = useDashboard({
    formsConfig,
    onSubmit
  });
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Typography variant="h4" className={classes.heading} align="center">
        {capitalizeString(entityName)} Dashboard
      </Typography>
      <Divider className={classes.divider} />
      {entityParts.map((entityPart) => (
        <Fragment key={entityPart.name}>
          <section className={classes.section}>
            <Typography variant="h5" className={classes.heading} align="center">
              {capitalizeString(entityPart.name)}
            </Typography>
            <AddButton onClick={() => handleModalOpen(entityPart.name)} />
            <FormDialog
              formProps={formsConfig[entityPart.name]}
              open={modalsState[entityPart.name].isModalOpen}
              onClose={() => handleModalClose(entityPart.name)}
              onSubmit={(formValues) =>
                handleSubmit(formsConfig[entityPart.name], formValues)
              }
            />
          </section>
          <Divider className={classes.divider} />
        </Fragment>
      ))}
    </section>
  );
}

Dashboard.propTypes = {
  entityName: PropTypes.string.isRequired,
  entityParts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  formsConfig: PropTypes.object,
  onSubmit: PropTypes.func.isRequired
};
