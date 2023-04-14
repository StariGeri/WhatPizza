/**
 * This MW redirects the user to the given endpoint
 * @param {*} dataRepository
 * @param {*} endPoint
 * @returns
 */

module.exports = (dataRepository, endPoint) => {
  return function (req, res, next) {
    return res.redirect(endpoint);
  };
};
