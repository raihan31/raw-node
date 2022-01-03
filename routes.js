/*
 * Ttile: Entry point
 * Description: Entry point of raw node
 * Author: Abu Raihan Mohammad Rubel
 * Date: 31/12/2021
 */
// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/handler');

const routes = {
    sample: sampleHandler,
};

module.exports = routes;
