/**
 * This MW searches for restaurants by name
 * @param {*} dataRepository
 * @returns
 */

const requireOption = require("../general/requireOption");

module.exports = function (dataRepository) {
  const RestaurantModel = requireOption(dataRepository, "RestaurantModel");
  return function (req, res, next) {


    RestaurantModel.find({ name: req.params.name }, (err, restaurants) => {
      if (err || !restaurants) {
        return next(err);
      }

      res.locals.restaurants = restaurants;
      return next();
    });
  };
};
