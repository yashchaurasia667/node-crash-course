import http from "http";

const server = http.createServer((req, res) => {
  // res.setHeader('Content-Type', 'text/html');
  // res.statusCode = 404;
  // res.write("<h1>Hello world!</h1>");

  // console.log(req.url);
  // console.log(req.method);

  try {
    // check if a GET req
    if (req.method === "GET") {
      if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Homepage</h1>");
      } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>About page </h1>");
      } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 page not found</h1>");
      }
    } else {
      throw new Error("Method not allowed");
    }
  } catch (err) {
    res.writeHead(500, "text/html");
    res.end("<h1>500 Internal Server Error</h1>");
  }

  //   res.writeHead(500, { "Content-Type": "application/json" });
  //   res.write(JSON.stringify({ message: "Internal Server Error..." }));
  //   res.end();
});

const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
