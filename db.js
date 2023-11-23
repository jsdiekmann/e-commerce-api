const Client = require('pg').Client;

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'e-commerce-project',
    password: 'postgres',
    port: 5432
})

module.exports = client;