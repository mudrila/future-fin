import { Fragment } from "react";
import PropTypes from "prop-types";
import { Typography, Divider } from "@material-ui/core";

import { capitalizeString } from "../../utils";
import { AddButton } from "../../";
import useStyles from "./styles";

export default function Dashboard({ entityName, entityParts }) {
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
            <AddButton />
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
  ).isRequired
};
