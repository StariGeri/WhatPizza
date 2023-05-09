/**
 * This MW fetches the given restaurants data from the database using its id
 * @param {*} dataRepository
 * @returns
 */

const requireOption = require("../general/requireOption");


module.exports = function (dataRepository) {

  const RestaurantModel = requireOption(dataRepository, "RestaurantModel");
    return function (req, res, next) {

      RestaurantModel.findOne({ _id: req.params.restaurantId }, (err, restaurant) => {
        if (err || !restaurant) {
          return next(err);
        }

        res.locals.restaurant = restaurant;
        return next();
      });
    };
  };