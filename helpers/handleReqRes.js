/*
 * Ttile: Entry point
 * Description: Entry point of raw node
 * Author: Abu Raihan Mohammad Rubel
 * Date: 31/12/2021
 */
// depnendencies
const url = require('url');
const { StringDecoder } = require('string_decoder');
const routes = require('../routes');
const { notFoundHandler } = require('../handlers/routeHandlers/notFoundHandler');

// module scafolding
const handler = {};

handler.handleReqRes = (req, res) => {
    // request handle
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headersObj = req.headers;
    // decode
    const decoder = new StringDecoder('utf-8');
    let realData = '';
    // requestProperties
    const requestProperties = {
        parsedUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headersObj,
    };
    // chosen handler
    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;

    // request buffer handle
    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });

    req.on('end', () => {
        realData += decoder.end();
        chosenHandler(requestProperties, (statusCode, payload) => {
            const finalStatusCode = typeof statusCode === 'number' ? statusCode : 500;
            const finalPayload = typeof payload === 'object' ? payload : {};

            const payloadString = JSON.stringify(finalPayload);

            res.writeHead(finalStatusCode);
            res.end(payloadString);
        });
    });
};
// Module exports
module.exports = handler;
