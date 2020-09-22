console.log("ENV VARS", process.env, process.env.API_URL);

export default {
  API_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080",
  CRUD_MAP_TO_METHODS: {
    CREATE: "post",
    READ: "get",
    UPDATE: "put",
    DELETE: "delete"
  }
};
