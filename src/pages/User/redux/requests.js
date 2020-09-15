import {
  baseRequest,
  createCRUDRequests
} from "../../../api/utils/requestUtils";

export async function loginRequest(payload) {
  return baseRequest({ method: "post", url: "/public/login", payload });
}

export async function logoutRequest(payload) {
  return baseRequest({ method: "post", url: "/public/logout", payload });
}

export const userCRUDRequests = createCRUDRequests("/user");
