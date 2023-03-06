const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  return res.send("Hello ne");
});
console.log("a and b");

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
);
