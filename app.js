const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;
const homeRoute = require("./routes/home.route");

//Register
app.engine(".hbs", exphbs({defaultLayout: "main", extname: ".hbs"}));
//User Handlebars
app.set("view engine", ".hbs");

app.get("/", homeRoute);

app.listen(port);

console.log("Server diary is running on: http://localhost:3000");