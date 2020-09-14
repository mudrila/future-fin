import api from "../../../api";
import { baseRequest } from "../../../api/utils/requestUtils";

export async function signUpRequest(payload) {
  return await api
    .post("/public/sign-up", payload)
    .then((response) => response.data);
}

export async function loginRequest(payload) {
  return await api
    .post("/public/login", payload)
    .then((response) => response.data);
}

export async function logoutRequest(payload) {
  return await api
    .post("/public/logout", payload)
    .then((response) => response.data);
}

export async function updateUserRequest(payload) {
  return baseRequest({ method: "put", url: `/user`, payload });
}
