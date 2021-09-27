const express = require("express"); 
const app = express(); 

app.listen(80);

const handleGet = (req, res) => {
  res.status(400);
  res.send(
    "Responding to a GET request made by the HTML GET Method. Works for both '/gt' and '/get'."
  );
};

app.get("/g(e)?t", handleGet);
