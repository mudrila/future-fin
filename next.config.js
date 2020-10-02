const withPWA = require("next-pwa");

module.exports = withPWA({
  env: {
    API_URL: process.env.API_URL
  },
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    register: true
  }
});
