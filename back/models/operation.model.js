const mongoose = require('mongoose');

const OperationsSchema = mongoose.Schema({
    deposit: Number,
    loan: Number,
    withdraw:Number,
}, {
    timestamps: true
});

module.exports = mongoose.model('Operation', OperationsSchema);