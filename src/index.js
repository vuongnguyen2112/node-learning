const express = require("express");
const app = express();
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const path = require("path");
const port = 3000;

app.use(morgan("combined"));

app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
console.log("Path: ", __dirname);

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
);
