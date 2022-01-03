/*
 * Ttile: Entry point
 * Description: Entry point of raw node
 * Author: Abu Raihan Mohammad Rubel
 * Date: 31/12/2021
 */
// dependencies

// module scaffoldings
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        message: 'Your requested url was not found!',
    });
};

module.exports = handler;
