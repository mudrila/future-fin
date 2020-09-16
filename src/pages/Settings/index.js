import { Form } from "../../ui-library";

import useAppSettings from "./hooks";
import useStyles from "./styles";

export default function SettingsPage() {
  const classes = useStyles();
  const { loading, formConfig, handleSubmit } = useAppSettings({
    financialProfileAllocationInputClassName: classes.numberInput
  });
  return (
    <article className={classes.root}>
      <Form
        fields={formConfig.fields}
        formName={formConfig.formName}
        loading={loading}
        submitButtonText="Update Application Settings"
        onSubmit={handleSubmit}
        formClassName={classes.form}
      />
    </article>
  );
}
