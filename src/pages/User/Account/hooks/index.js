import { useSelector } from "react-redux";

import { userSelector } from "../../redux/selectors";
import useSecureRoute from "../../../../hooks/useSecureRoute";

export default function useUserAccount() {
  useSecureRoute();
  const user = useSelector(userSelector);

  return { user };
}
