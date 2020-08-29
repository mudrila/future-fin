import { Paper, Typography } from "@material-ui/core";

import { Form } from "../../../ui-library";
import useLogin from "./hooks";
import useStyles from "./styles";

export default function LoginPage() {
  const classes = useStyles();
  const { handleSubmit, fields, formName, loading } = useLogin();
  return (
    <Paper vairant="outlined" className={classes.root}>
      <Typography variant="h5" align="center">
        Login
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
