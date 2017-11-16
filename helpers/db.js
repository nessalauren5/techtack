var pg = require('pg');

var PGUSER = 'postgres';
var PGDATABASE = 'techtack';

const { Pool, Client } = require('pg');

var config = {
    user: PGUSER, // name of the user account
    host: 'nessalauren.com',
    password: 'wordp@55',
    database: 'techtack', // name of the database
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000 // how long a client is allowed to remain idle before being closed
};
const pool = new Pool(config);

module.exports = pool;