const { Router } = require('express');
const apiRouter = Router();

const customersRouter = require('./customers');
apiRouter.use('/customers', customersRouter);

module.exports = apiRouter;