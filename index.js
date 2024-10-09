// server.js
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!\n");
});

app.listen(port, "127.0.0.1", () => {
  console.log(`Listening on 127.0.0.1:${port}`);
});

// run with `node server.js`
