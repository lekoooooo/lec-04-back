// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plan" });
//   res.end("hello world");
// });
// const PORT = process.env.PORT || 3000;
// server.listen(3000, () => console.log(`server is running on port ${PORT}`));
const express = require("express");

const app = express();
const PORT = 3000;

// app.get("/", (req, res) => {
//   res.send("hello from express");
// });

// app.get("/about", (req, res) => {
//   res.send("hello from about page");
// });
// app.get("/contact", (req, res) => {
//   res.send("hello from contact page");
// });

// app.get("/product/:id", (req, res) => {
//   console.log(req.params.id);
//   res.send(`your requested product with id:${req.params.id}`);
// });

// app.get("/product/search", (req, res) => {
//   console.log(req.query);
//   res.send("query string");
// });

app.get("/", (req, res) => {
  res.json({ message: "welcome", author: "tata" });
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
