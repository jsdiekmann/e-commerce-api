const {express, Router} = require('express');
const customersRouter = Router();
const client = require('../db');

customersRouter.route('/')
    .get((req, res) => {
        client.query('Select * from customers', (err, results) => {
            if(!err) {
                res.status(200).json(results.rows);
            }
        });
    })

    customersRouter.route('/{:id}')
    .get((req, res) => {

    })

module.exports = customersRouter;