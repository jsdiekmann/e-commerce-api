const {Pool, Client} = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'e-commerce-project',
    password: 'postgres',
    port: 5432
})

module.exports = client;