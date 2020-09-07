import { CRUD_KEYS } from "../../config";
import API_CONFIG from "../../config/api";
import api from "../";

export function baseRequest({ method, payload, url }) {
  const payloadFieldName = method === "get" ? "query" : "data";
  return api({
    method,
    url,
    [payloadFieldName]: payload,
    headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` }
  }).then((response) => response.data);
}
// Create all methods for CRUD
export function createCRUDRequests(baseUrl) {
  let result = {};
  CRUD_KEYS.forEach((crudKey) => {
    function request(payload, { path, ...requestOptions } = {}) {
      const method = API_CONFIG.CRUD_MAP_TO_METHODS[crudKey];
      const url = path ? `${baseUrl}/${path}` : baseUrl;
      return baseRequest({ method, url, payload, ...requestOptions });
    }
    result[crudKey] = request;
  });
  return result;
}
