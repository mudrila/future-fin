import { Button, CircularProgress } from "@material-ui/core";

import { Form } from "../../../ui-library";

import useStyles from "./styles";
import useAccountPage from "./hooks";

export default function AccountPage() {
  const classes = useStyles();
  const { formConfig, handleSubmit, user, handleDelete, t } = useAccountPage();
  return (
    <article className={classes.root}>
      {user.loading ? (
        <CircularProgress />
      ) : (
        <Form
          {...formConfig}
          submitButtonText={t("userAccount:form.submitButtonText")}
          onSubmit={handleSubmit}
          loading={user.loading}
          formClassName={classes.form}
        />
      )}
      <Button
        variant="contained"
        color="secondary"
        onClick={handleDelete}
        className={classes.deleteButton}
      >
        {t("userAccount:form.deleteButtonText")}
      </Button>
    </article>
  );
}
