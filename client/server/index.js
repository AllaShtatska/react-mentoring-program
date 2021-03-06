const express = require("express");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/", (req, res) => {
    return app.render(req, res, "/index", req.query);
  });

  server.get("/search/:searchQuery", (req, res) => {
    return app.render(req, res, "/search", {
      searchQuery: req.params.searchQuery
    });
  });

  server.get("/film/:id", (req, res) => {
    return app.render(req, res, "/film", {
      id: req.params.id
    });
  });

  server.get("*", (req, res) => {
    return app.render(req, res, "/other", req.query);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
