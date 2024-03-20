const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const PORT = 3000;

// Configurción de motor de plantillas
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

// Static
app.use(express.static("assets"));
app.use('/jquery', express.static('node_modules/jquery/dist'));
app.use('/bootstrap-js', express.static('node_modules/bootstrap/dist/js'));
app.use(
  "/bootstrap",
  express.static(__dirname + "/node_modules/bootstrap/dist/css")
);

// Rutas
app.get("/", (req, res) => {
  const producto = [
    { name: 'banana', unit: 1, price: 590 },
    { name: 'cebollas', unit: 1, price: 690 },
    { name: 'pimenton', unit: 1, price: 990 },
    { name: 'papas', unit: 1, price: 590 },
    { name: 'lechuga', unit: 1, price: 1290 },
    { name: 'tomate', unit: 1, price: 790 }
  ];

  res.render("home", {producto});
});

// Correr el servidor
app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);
