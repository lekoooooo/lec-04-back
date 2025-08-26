const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plan" });
  res.end("hello world");
});
const PORT = process.env.PORT || 3000;
server.listen(3000, () => console.log(`server is running on port ${PORT}`));
