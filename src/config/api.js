export default {
  API_URL: process.env.API_URL || "http://localhost:8080",
  CRUD_MAP_TO_METHODS: {
    CREATE: "post",
    READ: "get",
    UPDATE: "put",
    DELETE: "delete"
  }
};
