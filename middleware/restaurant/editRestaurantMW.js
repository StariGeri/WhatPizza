/**
 * This MW edits an existing restaurants data
 * @param {*} dataRepository
 * @returns
 */

const requireOption = require("../general/requireOption");
const ObjectId = require("mongoose").Schema.Types.ObjectId;

module.exports = function (dataRepository) {
  const RestaurantModel = requireOption(dataRepository, "RestaurantModel");
  return function (req, res, next) {
    //TODO: implement this MW
    // get the restaurants data from the database
    // display the restaurants data in the form
    // send the edited data to the database
  };
};
