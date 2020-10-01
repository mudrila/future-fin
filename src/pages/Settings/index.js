import useMediaQuery from "@material-ui/core/useMediaQuery";

import { Form } from "../../ui-library";

import useAppSettings from "./hooks";
import useStyles from "./styles";

export default function SettingsPage() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const classes = useStyles({ isMobile });
  const { loading, formConfig, handleSubmit, t } = useAppSettings({
    financialProfileAllocationInputClassName: classes.numberInput
  });
  return (
    <article className={classes.root}>
      <Form
        fields={formConfig.fields}
        formName={formConfig.formName}
        loading={loading}
        submitButtonText={t("appSettings:form.submitButtonText")}
        onSubmit={handleSubmit}
        formClassName={classes.form}
      />
    </article>
  );
}
