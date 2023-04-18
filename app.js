const express = require("express");
const app = express();
const routes = require("./routing/routing");
const PORT = 3000;

app.use(express.static('public'));
app.set("view engine", "ejs");

// use the routes defined in the routing.js file
app.use(routes);

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running,and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});