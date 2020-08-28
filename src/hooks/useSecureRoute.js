import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import { userSelector } from "../pages/User/redux/selectors";

export default function useSecureRoute() {
  const router = useRouter();
  const user = useSelector(userSelector);
  if (!user.isAuthenticated) {
    router.push("/login");
  }
}
