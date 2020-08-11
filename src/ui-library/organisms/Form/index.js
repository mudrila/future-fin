import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

import useForm from "./hooks";

export default function Form({ fields }) {
  const { getComponentByFieldType, handleChange } = useForm();
  return (
    <Grid>
      {fields.map((field) => {
        const Component = getComponentByFieldType(field.type);
        return (
          <Component key={field.name} {...field} onChange={handleChange} />
        );
      })}
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
  )
};
