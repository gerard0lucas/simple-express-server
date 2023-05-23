const express = require("express");
const app = express();
const port = 3000;
const data = require("./data")

app.get("/post", (req, res) => {
  res.json(data);
});
app.listen(port, () => {
  console.log(`App running on http://localhost:${port} `);
});
