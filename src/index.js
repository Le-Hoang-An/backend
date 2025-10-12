// app.js
const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const path = require("path");

// Connect to DB
const db = require("./config/db");
db.connect();



const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("combined"));
const routes = require("./routes");
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


routes(app);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
