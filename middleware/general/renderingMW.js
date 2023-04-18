/**
 * This MW renders an HTML page
 * @param {*} dataRepository 
 * @param {*} pageName 
 * @returns 
 */
module.exports = function (dataRepository, pageName) {
    return function (req, res, next) {
        res.render(pageName,res.locals);
    };
};