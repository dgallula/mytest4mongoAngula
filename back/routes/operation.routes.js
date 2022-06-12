module.exports = (app) => {
    const operations = require('../controllers/operation.controller');

     app.post('/operations', operations.create);

    // Retrieve all users
    app.get('/operations', operations.findAll);

    // Retrieve a single car with carId
    app.get('/operations/:operationId', operations.findOne);

    // Update a car with carId
    app.put('/operations/:operationId', operations.update);

    // Delete a car with carId
    app.delete('/operations/:operationId', operations.delete);
}