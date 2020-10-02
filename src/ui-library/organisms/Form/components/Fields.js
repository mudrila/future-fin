import useStyles from "../../FormDialog/styles";

export default function FormFields({
  fields,
  getComponentByFieldType,
  getInputPropsByField,
  formState
}) {
  const classes = useStyles();
  return fields.map((field) => {
    const Component = getComponentByFieldType(field.type);
    const inputProps = getInputPropsByField(field);
    return (
      <Component
        key={field.name}
        className={classes.inputField}
        {...inputProps}
        value={formState[field.name]}
      />
    );
  });
}
