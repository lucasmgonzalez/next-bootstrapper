const routes = require("next-routes");

module.exports = routes()
  .add("home", "/", "index") // Name, Route, Page(Component)
  .add("about", "/sobre") // Name|Page, Route
  .add("article", "/noticia/:slug", "article/_slug");
