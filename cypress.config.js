const { defineConfig } = require("cypress");

module.exports = defineConfig({
    projectId: "nisdrq",
  e2e: {
    baseUrl: "https://petstore.swagger.io/v2/",
  },
});
