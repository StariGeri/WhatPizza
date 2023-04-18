const express = require("express");
const router = express.Router();

const renderingMW = require("../middleware/general/renderingMW");
const redirectMW = require("../middleware/general/redirectingMW");

const fetchRestByNameMW = require("../middleware/restaurant/fetchRestByNameMW");
const fetchRestByIdMW = require("../middleware/restaurant/fetchRestByIdMW");
const editRestaurantMW = require("../middleware/restaurant/editRestaurantMW");
const deleteRestaurantMW = require("../middleware/restaurant/deleteRestaurantMW");
const addNewRestaurantMW = require("../middleware/restaurant/addNewRestaurantMW");

const addNewPizzaMW = require("../middleware/pizzas/addNewPizzaMW");
const deletePizzaMW = require("../middleware/pizzas/deletePizzaMW");
const fetchPizzaByIdMW = require("../middleware/pizzas/fetchPizzaByIdMW");
const editPizzaMW = require("../middleware/pizzas/editPizzaMW");
const fetchPizzasFromRestMW = require("../middleware/pizzas/fetchPizzasFromRestMW");

const dataRepo = {};

//homepage
router.get('/', renderingMW(dataRepo,"index"));

//search results page for restaurants
router.get(
  "/search",
  fetchRestByNameMW(dataRepo),
  renderingMW(dataRepo, "search")
);
// add a new restaurant page
router.get("/newRest", renderingMW(dataRepo, "newRest"));
// post request for adding a new restaurant
router.post(
  "/restaurant/add",
  addNewRestaurantMW(dataRepo),
  redirectMW(dataRepo, "/search")
);
//pizzas of a restaurant
router.get(
  "/pizzas/:id",
  fetchPizzaByIdMW(dataRepo),
  renderingMW(dataRepo, "pizzas")
);
//edit a restaurant page
router.get(
  "/restaurant/edit/:id",
  fetchRestByIdMW(dataRepo),
  renderingMW(dataRepo, "editRest")
);
// post request for editing a restaurant
router.post(
  "/restaurant/edit/:restaurantId",
  editRestaurantMW(dataRepo),
  redirectMW(dataRepo, "/search")
);
// delete a restaurant
router.get(
  "/restaurant/delete/:restaurantId",
  deleteRestaurantMW(dataRepo),
  redirectMW(dataRepo, "/search")
);
// add a new pizza to a restaurant
router.get("pizzas/add/:restaurantId", renderingMW(dataRepo, "newPizza"));
// post request for adding a new pizza
router.post(
  "pizzas/add/:restaurantId",
  addNewPizzaMW(dataRepo),
  redirectMW(dataRepo, "/pizzas/:restaurantId")
);
//delete a pizza
router.get(
  "pizzas/delete/:pizzaId",
  deletePizzaMW(dataRepo),
  redirectMW(dataRepo, "/pizzas/:restaurantId")
);
// display the edit a pizza page
router.get(
  "pizzas/edit/:pizzaId",
  fetchPizzaByIdMW(dataRepo),
  renderingMW(dataRepo, "editPizza")
);
// post request for editing a pizza
router.post(
  "pizzas/edit/:pizzaId",
  editPizzaMW(dataRepo),
  redirectMW(dataRepo, "/pizzas/:restaurantId")
);

module.exports = router;