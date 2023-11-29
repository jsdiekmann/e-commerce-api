const {express, Router} = require('express');
const customersRouter = Router();
const client = require('../db');
const queries = require('./queries');

customersRouter.route('/')
    .get((req, res) => {
        client.query(queries.getCustomers, (err, results) => {
            if(!err) {
                res.status(200).json(results.rows);
            }
        });
    })
    .post((req, res) => {
        const {first_name, last_name, email, phone, street, street_2, city, state, zip} = req.body;

        client.query(queries.checkCustomerExists, [email], (err, results) => {
            if (results.rows.length) {
                res.send("That email is already registered to an existing cutomer.");
            }
            
            client.query(queries.addCustomer, [first_name, last_name, email, phone, street, street_2, city, state, zip], (err, results) => {
                if(!err) {
                    res.status(201).send("New user created!");
                }
            })
            
        })
    })

customersRouter.route('/:id')
    .get((req, res) => {
        const id = parseInt(req.params.id);

        client.query(queries.getCustomerById, [id] , (err, results) => {
            const customerDoesNotExist = !results.rows.length;

            if (customerDoesNotExist) {
                return res.status(404).send("That customer is not in the database!");
            }

            if(!err) {
                return res.status(200).json(results.rows);
            }
        });
    })
    .delete((req, res) => {
        const id = parseInt(req.params.id);

        client.query(queries.getCustomerById, [id], (err, results) => {
            const customerDoesNotExist = !results.rows.length;

            if (customerDoesNotExist) {
                return res.status(404).send("That customer is not in the database!");
            }
        
            client.query(queries.deleteCustomerById, [id], (err, results) => {
                if(!err) {
                    return res.status(200).send("Customer deleted!");
                }
            });
        })
    })
    .put((req, res) => {
        const id = parseInt(req.params.id);

        const {first_name, last_name, phone, street, street_2, city, state, zip} = req.body;

        client.query(queries.getCustomerById, [id], (err, results) => {
            const customerDoesNotExist = !results.rows.length;

            if (customerDoesNotExist) {
                return res.status(404).send("That customer is not in the database!");
            }
            
            client.query(queries.updateCustomerById, [first_name, last_name, phone, street, street_2, city, state, zip, id], (err, results) => {
                if(!err) {
                    return res.status(200).send("Customer successfully updated!");
                }
            });
        })
    })

module.exports = customersRouter;