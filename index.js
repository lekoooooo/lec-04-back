// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plan" });
//   res.end("hello world");
// });
// const PORT = process.env.PORT || 3000;
// server.listen(3000, () => console.log(`server is running on port ${PORT}`));
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

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

// app.get("/", (req, res) => {
//   res.json({ message: "welcome", author: "tata" });
// });
///////////////////////////////////////////////////////////////////////////
app.use(express.json());

// app.use(express.static("public"));
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//third party
// /assets/new text document.txt ანუ app.use(express.static("public"));
// ^^ უყურებს public-ში მყოფ ელემენტებს ^^
// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// app.use(morgan("dev"));

// app.use(cors());
// app.use((req, res, next) => {
//   console.log(`[custom] ${req.method}, ${req.originalUrl}`);
//   next();
// });

// app.get(
//   "/about",
//   (req, res, next) => {
//     console.log("hello from middleware");
//     next();
//   },
//   (req, res) => {
//     res.send("welcome");
//   }
// );

const adminAuthMiddleware = (req, res, next) => {
  const users = [
    { id: 1, username: "zo", role: "user" },
    { id: 2, username: "tata", role: "admin" },
  ];
  const user = users[1];
  if (user.role !== "admin") {
    return res.status(403).json({ message: "access denied ! admins only" });
  }
  next();
};
app.get("/admin", adminAuthMiddleware, (req, res) => {
  res.send("ADMIN PAGE");
});
app.use((err, req, res, next) => {
  res.json({
    message: err,
  });
});
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
