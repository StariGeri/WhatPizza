/**
 * This MW deletes an existing restaurant from the database
 * @param {*} dataRepository
 * @returns
 */
const requireOption = require("../general/requireOption");
module.exports = function (dataRepository) {
    return function (req, res, next) {

      if (typeof res.locals.restaurant === "undefined") {
        return next();
      }

      res.locals.restaurant.remove(err => {
        if (err) {
            return next(err);
        }

        return res.redirect('/search');
      })
    };
  };