const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.redirect("/objectives");
});

app.get("/objectives", (req, res) => {
  res.sendFile(path.join(__dirname, "./pages/objectives.html"));
});

app.listen(port, "127.0.0.1", () => {
  console.log(`Listening on http://localhost:${port}`);
});
