module.exports = {
  client: {
    service: {
      name: "jiny-calendar",
      url: "http://localhost:4000/graphql",
      includes: ["./dist/*.js"],
    },
  },
};
