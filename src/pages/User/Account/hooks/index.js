import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "notistack";

import useStyles from "../styles";
import { userActionCreators } from "../../redux/actions";
import { userSelector } from "../../redux/selectors";
import createFormConfig from "../config/form";

export default function useUserAccount() {
  const { avatarClassName } = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const user = useSelector(userSelector);
  const dispatch = useDispatch();

  const formConfig = createFormConfig({
    name: user.name,
    email: user.email,
    avatarUrl: user.avatarUrl,
    hasLifeInsurance: user.hasLifeInsurance,
    hasMedicalInsurance: user.hasMedicalInsurance,
    country: user.country,
    avatarClassName
  });

  function handleSubmit(formValues) {
    console.log(formValues);
    const updateUserRequest = userActionCreators.UPDATE.REQUEST(
      formValues,
      enqueueSnackbar
    );
    dispatch(updateUserRequest);
  }

  function handleDelete() {
    const deleteUserRequest = userActionCreators.DELETE.REQUEST(
      null,
      enqueueSnackbar
    );
    dispatch(deleteUserRequest);
  }
  return { user, formConfig, handleSubmit, handleDelete };
}
