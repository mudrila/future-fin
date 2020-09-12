import { Form } from "../../../ui-library";

import useStyles from "./styles";
import useAccountPage from "./hooks";

export default function AccountPage() {
  const classes = useStyles();
  const { formConfig, handleSubmit, user } = useAccountPage();
  return (
    <article className={classes.root}>
      <Form
        {...formConfig}
        submitButtonText="Save"
        onSubmit={handleSubmit}
        loading={user.loading}
        formClassName={classes.form}
      />
    </article>
  );
}
