/*
 * Ttile: Entry point
 * Description: Entry point of raw node
 * Author: Abu Raihan Mohammad Rubel
 * Date: 31/12/2021
 */

// Dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const environment = require('./helpers/environments');
const data = require('./lib/data');

// app object - module scaffolding
const app = {};

// testing file system
// @TODO: will remove it later
// data.create('test', 'newFile', { name: 'Bangladesh', language: 'Bangla' }, (err) => {
//     console.log('error was', err);
// });

// data.read('test', 'newFile', (err, result) => {
//     console.log(err, result);
// });

// data.update('test', 'newFile', { name: 'England', language: 'English' }, (err, result) => {
//     console.log(err, result);
// });

data.delete('test', 'newFile', (err, result) => {
    console.log(err, result);
});

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        console.log(`Listening to port ${environment.port}`);
    });
};
// handle request and response

app.handleReqRes = handleReqRes;

app.createServer();
