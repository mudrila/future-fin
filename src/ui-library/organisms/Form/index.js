import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

import useForm from "./hooks";

export default function Form({ fields, onSubmit }) {
  const { getComponentByFieldType, handleChange, handleSubmit } = useForm({
    fields,
    onSubmit
  });
  return (
    <Grid>
      <form name={formName} onSubmit={handleSubmit}>
        {fields.map((field) => {
          const Component = getComponentByFieldType(field.type);
          return (
            <Component key={field.name} {...field} onChange={handleChange} />
          );
        })}
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
  ),
  onSubmit: PropTypes.func.isRequired,
  formName: PropTypes.string.isRequired
};
