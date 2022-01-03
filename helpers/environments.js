/*
 * Ttile: Entry point
 * Description: Entry point of raw node
 * Author: Abu Raihan Mohammad Rubel
 * Date: 01/01/2022
 */
const environments = {};

environments.staging = {
    port: 3000,
    envName: 'staging',
};

environments.production = {
    port: 5000,
    envName: 'production',
};
// determine whiche enviroment was passed

const currentEnvironment =
    typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

// export corresponsing environments

const environmentToExport =
    typeof environments[currentEnvironment] === 'object'
        ? environments[currentEnvironment]
        : environments.staging;

module.exports = environmentToExport;
