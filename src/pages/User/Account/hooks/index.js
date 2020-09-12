import { useSelector } from "react-redux";

import useStyles from "../styles";
import { userSelector } from "../../redux/selectors";
import useSecureRoute from "../../../../hooks/useSecureRoute";
import createFormConfig from "../config/form";

export default function useUserAccount() {
  useSecureRoute();
  const { avatarClassName } = useStyles();
  const user = useSelector(userSelector);
  const formConfig = createFormConfig({
    name: user.name,
    email: user.email,
    avatarUrl: user.avatarUrl,
    avatarClassName
  });
  function handleSubmit(formValues) {
    console.log(formValues);
  }

  return { user, formConfig, handleSubmit };
}
