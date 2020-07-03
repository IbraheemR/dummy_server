const PORT = 8000;

const { rword } = require("rword");

const express = require("express");
const app = express();

app.use(express.static("public"));
app.get("/word", (req, res) => {
  let word = rword.generate();
  res.send(JSON.stringify({ word }));
});

app.listen(PORT, () =>
  console.log(`Words wording on http://localhost:${PORT}`)
);

Array.prototype.sample = function () {
  return this[Math.floor(Math.random() * this.length)];
};
