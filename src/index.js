// app.js
const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const path = require("path");

const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("combined"));

// cấu hình Handlebars
app.engine(
  "hbs",
  exphbs.engine({
    extname: ".hbs",
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "resources/views/layouts"),
    partialsDir: path.join(__dirname, "resources/views/partials"),
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// route demo render view
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.get("/search", (req, res) => {
  res.render("search");
});

app.post("/news", (req, res) => {
  res.render("news");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
