import { Paper, Typography } from "@material-ui/core";

import { Form } from "../../../ui-library";
import useSignUp from "./hooks";
import useStyles from "./styles";

export default function SignUpPage() {
  const classes = useStyles();
  const { handleSubmit, fields, formName, loading, t } = useSignUp();
  return (
    <Paper vairant="outlined" className={classes.root}>
      <Typography variant="h5" align="center">
        {t("signUp:form.title")}
      </Typography>
      <Form
        sectionsSplitting={false}
        fields={fields}
        formName={formName}
        normalizeFormData={true}
        onSubmit={handleSubmit}
        loading={loading}
      />
    </Paper>
  );
}
