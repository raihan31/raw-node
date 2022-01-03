/*
 * Ttile: Entry point
 * Description: Entry point of raw node
 * Author: Abu Raihan Mohammad Rubel
 * Date: 31/12/2021
 */
// dependencies

// module scaffoldings
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    callback(200, {
        message: 'this is a sample code',
    });
};

module.exports = handler;
