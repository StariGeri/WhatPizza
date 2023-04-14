const renderingMW = require("../middleware/general/renderingMW");
const redirectMW = require("../middleware/general/redirectingMW");

const fetchRestByNameMW = require("../middleware/restaurant/fetchRestByNameMW");
const fetchRestByIdMW = require("../middleware/restaurant/fetchRestByIdMW");
const editRestaurantMW = require("../middleware/restaurant/editRestaurantsMW");
const deleteRestaurantMW = require("../middleware/restaurant/deleteRestaurantMW");
const addNewRestaurantMW = require("../middleware/restaurant/addNewRestaurantMW");

const addNewPizzaMW = require("../middleware/pizzas/addNewPizzaMW");
const deletePizzaMW = require("../middleware/pizzas/deletePizzaMW");
const fetchPizzaByIdMW = require("../middleware/pizzas/fetchPizzaByIdMW");
const editPizzaMW = require("../middleware/pizzas/editPizzaMW");
const fetchPizzasFromRestMW = require("../middleware/pizzas/fetchPizzasFromRestMW");

//homepage
app.get("/", renderingMW(dataRepo, "index.html"));

//search results page for restaurants
app.get(
  "/search",
  fetchRestByNameMW(dataRepo),
  renderingMW(dataRepo, "search.html")
);
// add a new restaurant page
app.get("/restaurant/add", renderingMW(dataRepo, "newRest.html"));
// post request for adding a new restaurant
app.post(
  "/restaurant/add",
  addNewRestaurantMW(dataRepo),
  redirectMW(dataRepo, "/search")
);
//pizzas of a restaurant
app.get(
  "/pizzas/:restaurantId",
  fetchPizzasFromRestMW(dataRepo),
  renderingMW(dataRepo, "/pizzas/:restaurantId")
);
//edit a restaurant page
app.get(
  "/restaurant/edit/:restaurantId",
  fetchRestByIdMW(dataRepo),
  renderingMW(dataRepo, "editRest.html")
);
// post request for editing a restaurant
app.post(
  "/restaurant/edit/:restaurantId",
  editRestaurantMW(dataRepo),
  redirectMW(dataRepo, "/search")
);
// delete a restaurant
app.get(
  "/restaurant/delete/:restaurantId",
  deleteRestaurantMW(dataRepo),
  redirectMW(dataRepo, "/search")
);
// add a new pizza to a restaurant
app.get("pizzas/add/:restaurantId", renderingMW(dataRepo, "newPizza.html"));
// post request for adding a new pizza
app.post(
  "pizzas/add/:restaurantId",
  addNewPizzaMW(dataRepo),
  redirectMW(dataRepo, "/pizzas/:restaurantId")
);
//delete a pizza
app.get(
  "pizzas/delete/:pizzaId",
  deletePizzaMW(dataRepo),
  redirectMW(dataRepo, "/pizzas/:restaurantId")
);
// display the edit a pizza page
app.get(
  "pizzas/edit/:pizzaId",
  fetchPizzaByIdMW(dataRepo),
  renderingMW(dataRepo, "editPizza.html")
);
// post request for editing a pizza
app.post(
  "pizzas/edit/:pizzaId",
  editPizzaMW(dataRepo),
  redirectMW(dataRepo, "/pizzas/:restaurantId")
);
