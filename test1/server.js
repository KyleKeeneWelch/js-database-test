const db = require("./app.js");
const express = require("express");
const path = require("path");

const app = express();
app.use(express.static(__dirname + "/public")); //__dir and not _dir
const port = 8000; // you can use any port

// app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
  //   res.send(db());
});

app.listen(port);
console.log("Server on " + port);
