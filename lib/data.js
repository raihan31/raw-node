const fs = require('fs');
const path = require('path');

const lib = {};

lib.basedir = path.join(__dirname, '/../.data/');

lib.create = (dir, file, data, callback) => {
    fs.open(`${lib.basedir + dir}/${file}.json`, 'wx', (err, fileDescriptor) => {
        if (!err && fileDescriptor) {
            // convert data to string
            const stringData = JSON.stringify(data);
            // Write data to file and then close it
            fs.writeFile(fileDescriptor, stringData, (errW) => {
                if (!errW) {
                    fs.close(fileDescriptor, (errC) => {
                        if (!errC) {
                            callback(false);
                        } else {
                            callback('Error closing file!');
                        }
                    });
                } else {
                    callback('Error writting to new file!');
                }
            });
        } else {
            callback('Could not create new file, It may already exists');
        }
    });
};

lib.read = (dir, file, callback) => {
    fs.readFile(`${lib.basedir + dir}/${file}.json`, 'utf8', (err, data) => {
        callback(err, data);
    });
};

lib.update = (dir, file, data, callback) => {
    fs.open(`${lib.basedir + dir}/${file}.json`, 'r+', (err, fileDescriptor) => {
        if (!err && fileDescriptor) {
            console.log('==============================');
            console.log('File update error', err, fileDescriptor);
            const stringData = JSON.stringify(data);
            fs.ftruncate(fileDescriptor, (errt) => {
                if (!errt) {
                    fs.writeFile(fileDescriptor, stringData, (errW) => {
                        if (!errW) {
                            fs.close(fileDescriptor, (errC) => {
                                if (!errC) {
                                    console.log('Success ');
                                    callback(false);
                                } else {
                                    callback('Error Closing file');
                                }
                            });
                        } else {
                            callback('Error writing file');
                        }
                    });
                } else {
                    callback('Error truncating file!');
                }
            });
        } else {
            callback('Error updating . File may not exist');
        }
    });
};
lib.delete = (dir, file, callback) => {
    // unlink
    fs.unlink(`${lib.basedir + dir}/${file}.json`, (err) => {
        if (!err) {
            callback(false);
        } else {
            callback('Error deleting files');
        }
    });
};

module.exports = lib;
