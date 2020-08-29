import api from "../../../api";

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
