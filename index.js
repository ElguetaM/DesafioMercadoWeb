const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const PORT = 3000;

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
app.engine(
  "hbs",
  exphbs.engine({
    defaultLayaout: "main",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
    extname: "hbs",
  })
);

app.use(express.static("assets"));
app.use(
  "/bootstrap",
  express.static(__dirname + "/node_modules/bootstrap/dist/css")
);

app.get("/", (req, res) => {
  res.render("home", {
    producto: ["banana", "cebollas", "pimenton", "papas", "lechuga", "tomate"],
  });
});

app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);
