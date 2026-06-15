const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use((req, res, next) => {
  const delay = 2000; // Delay in milliseconds (2 seconds)
  setTimeout(() => {
    next();
  }, delay);
});

server.use(middlewares);
server.use(router);

server.listen(4000, () => {
  console.log("JSON Server is running on port 4000");
});
