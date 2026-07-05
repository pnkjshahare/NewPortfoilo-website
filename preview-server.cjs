const fs = require("fs");
const http = require("http");
const path = require("path");

const root = path.join(process.cwd(), "build");
const port = Number(process.env.PORT || 4173);
const types = {
  ".css": "text/css",
  ".html": "text/html",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".svg": "image/svg+xml",
};

http
  .createServer((req, res) => {
    let requestPath = decodeURI(req.url.split("?")[0]);
    if (requestPath === "/") requestPath = "/index.html";

    let filePath = path.join(root, requestPath);
    if (!filePath.startsWith(root)) {
      res.writeHead(403);
      res.end("Forbidden");
      return;
    }

    fs.stat(filePath, (statError, stat) => {
      if (statError || !stat.isFile()) filePath = path.join(root, "index.html");

      fs.readFile(filePath, (readError, data) => {
        if (readError) {
          res.writeHead(404);
          res.end("Not found");
          return;
        }

        res.writeHead(200, {
          "Content-Type": types[path.extname(filePath)] || "application/octet-stream",
        });
        res.end(data);
      });
    });
  })
  .listen(port, "127.0.0.1", () => {
    console.log(`Portfolio preview: http://127.0.0.1:${port}`);
  });
