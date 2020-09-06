import { CRUD_KEYS } from "../../config";
import API_CONFIG from "../../config/api";
import api from "../";

// Create all methods for CRUD
export function generateCRUDRequests(baseUrl) {
  let result = {};
  CRUD_KEYS.forEach((crudKey) => {
    async function request(payload, { path, ...requestOptions } = {}) {
      const method = API_CONFIG.CRUD_MAP_TO_METHODS[crudKey];
      const apiRequest = api[method];
      const url = path ? `${baseUrl}/${path}` : baseUrl;
      return await apiRequest(url, payload, { ...requestOptions }).then(
        (response) => response.data
      );
    }
    result[crudKey] = request;
  });
  return result;
}
