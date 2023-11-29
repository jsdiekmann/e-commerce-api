const getCustomers = "SELECT * FROM customers";
const getCustomerById = "SELECT * FROM customers WHERE id = $1";
const addCustomer = "INSERT INTO customers (first_name, last_name, email, phone, street, street_2, city, state, zip) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)";
const checkCustomerExists = "SELECT c FROM customers c WHERE c.email = $1";
const deleteCustomerById = "DELETE FROM customers WHERE id = $1";
const updateCustomerById = "UPDATE customers SET first_name = $1, last_name = $2,  phone = $3, street = $4, street_2 = $5, city = $6, state = $7, zip = $8 WHERE id = $9";

module.exports = {
    getCustomers,
    getCustomerById,
    addCustomer,
    checkCustomerExists,
    deleteCustomerById,
    updateCustomerById
}