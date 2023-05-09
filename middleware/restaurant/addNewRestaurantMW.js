/**
 * This MW adds a new restaurant to the database
 * @param {*} dataRepository
 * @returns
 */

const requireOption = require("../general/requireOption");

module.exports = function (dataRepository) {
  const RestaurantModel = requireOption(dataRepository, "RestaurantModel");
  return function (req, res, next) {

    if (
      typeof req.body.name === "undefined" ||
      typeof req.body.address === "undefined" ||
      typeof req.body.parking === "undefined" ||
      typeof req.body.delivery === "undefined" ||
      typeof req.body.pizzas === "undefined"
    ) {
      return next();
    }

    if (typeof res.locals.restaurant === "undefined") {
      res.locals.restaurant = new RestaurantModel();
    }
    res.locals.restaurant.save(err => {
      if (err) {
          return next(err);
      }

      return res.redirect('/search');
  });
  };
};
