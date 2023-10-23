const http = require("http");

const port = 8000;

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("<h1>GET</h1>");
  } else if (req.method === "POST") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("<h1>Post</h1>");
    console.log("Post");
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
