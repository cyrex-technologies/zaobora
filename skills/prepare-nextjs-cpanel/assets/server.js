"use strict";

const { createServer } = require("node:http");
const { parse } = require("node:url");
const next = require("next");

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    createServer((request, response) => {
      handle(request, response, parse(request.url, true));
    }).listen(port, () => {
      console.log(`Next.js listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to start Next.js", error);
    process.exit(1);
  });
