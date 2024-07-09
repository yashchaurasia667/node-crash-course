import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Get current path in commonJS
// __filename -> gets u the file name
// __dirname -> gets u the directory name

const server = http.createServer(async (req, res) => {
  // res.setHeader('Content-Type', 'text/html');
  // res.statusCode = 404;
  // res.write("<h1>Hello world!</h1>");

  // console.log(req.url);
  // console.log(req.method);

  try {
    // check if a GET req
    if (req.method === "GET") {
      let filePath;
      if (req.url === "/")
        filePath = path.join(__dirname, "public", "index.html");
      else if (req.url === "/about")
        filePath = path.join(__dirname, "public", "about.html");
      else throw new Error("404 Page Not Found...");

      const data = await fs.readFile(filePath);
      res.setHeader("Content-Type", "text/html");
      res.write(data);
  } else throw new Error("Method not allowed");
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
