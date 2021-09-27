const express = require("express");
const app = express();
app.listen(1234);

function checkAdmin(req, res, next) {
  if (req.query.admin === "true") {
    next();
  } else {
    res.send("you're not admin");
  }
}

const AdminDashboard = (req, res) => {
  res.send("Hello admin");
};


app.get("/admin-dashboard", AdminDashboard);
app.use(checkAdmin);
app.get("/admin-dashboard2", AdminDashboard);

