import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import ROUTES from "../config/routes";
import { userSelector } from "../pages/User/redux/selectors";

export default function useSecureRoute() {
  const router = useRouter();
  const { isAuthenticated } = useSelector(userSelector);
  if (
    isAuthenticated &&
    (router.route === ROUTES.PUBLIC_ROUTES.LOGIN.PATH ||
      router.route === ROUTES.PUBLIC_ROUTES.SIGN_UP.PATH)
  ) {
    router.push("/");
  } else if (
    !isAuthenticated &&
    router.route !== ROUTES.PUBLIC_ROUTES.LOGIN.PATH &&
    router.route !== ROUTES.PUBLIC_ROUTES.SIGN_UP.PATH
  ) {
    router.push("/login");
  }
  return { isAuthenticated };
}
