/**
 * This MW fetches a pizza by id from the database
 * @param {*} dataRepository
 * @returns
 */
module.exports = function (dataRepository) {
    return function (req, res, next) {
      //TODO: implement this MW
      // send request to the database to fetch the pizza with the given id
      res.locals.pizzas = [{
        name: "Quatro Stagioni",
        size: "32",
        price: "3200",
        sauce: "Tomato",
        pizzaId: 1,
        restId: 1,
      },
      {
        name: "Special Pizza",
        size: "28",
        price: "2800",
        sauce: "Spur Cream",
        pizzaId: 2,
        restId: 1,
      },];
      return next();
    };
  };