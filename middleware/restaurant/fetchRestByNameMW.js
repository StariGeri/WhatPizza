/**
 * This MW searches for restaurants by name
 * @param {*} dataRepository
 * @returns
 */
module.exports = function (dataRepository) {
    return function (req, res, next) {
      //TODO: implement this MW
      // get the restaurants data from the database by name
      res.locals.restaurants = [{
        name: "McDonalds",
        address: "Budapest",
        parking: "Yes",
        delivery: "Yes - Wolt",
        id: 1,
      },
      {
        name: "KFC",
        address: "Budapest",
        parking: "Yes",
        delivery: "Yes - Foodpanda",
        id: 2,
      },];
      return next();
    };
  };