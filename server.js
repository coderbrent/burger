require('dotenv').config();
const express = require('express')
const app = express();
const PORT = process.env.PORT || 8080;
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgers_controller");

app.listen(PORT, () => console.log(`Burgers App listening on port ${PORT}!`))

app.use(express.static("public"));// The directory we designate to deliver static pages/files from.

app.use(express.urlencoded({ extended: true }));
app.use(express.json());//Middleware for json parsing in express.

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars"); //Handlebars configuration lines.

 //define the routing to be used for this project.
app.use(routes); //<- use those routes defined above in Express.

