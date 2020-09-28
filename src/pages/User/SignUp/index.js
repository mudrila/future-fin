import { Paper, Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { Form } from "../../../ui-library";
import useSignUp from "./hooks";
import useStyles from "./styles";

export default function SignUpPage() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const classes = useStyles({ isMobile });
  const {
    handleSubmit,
    fields,
    formName,
    loading,
    t,
    validateForm
  } = useSignUp();
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
        validateForm={validateForm}
      />
    </Paper>
  );
}
