const express = require("express");
const app = express();

app.listen(1111);

const path = require("path");
var root = __dirname;
app.set("views", path.join(root, "/views"));
app.set("view engine", "jade");
app.use("/", (req, res) => {
  res.render("content", { name: "Tanmay " });
});

app.get("/", (req, res) => {
});
