module.exports = (app) => {
    const users = require('../controllers/user.controller');

    // Create a new car
    app.post('/users', users.create);

    // Retrieve all users
    app.get('/users', users.findAll);

    // Retrieve a single car with carId
    app.get('/users/:userId', users.findOne);

    // Update a car with carId
    app.put('/users/:userId', users.update);

    // Delete a car with carId
    app.delete('/users/:userId', users.delete);
}