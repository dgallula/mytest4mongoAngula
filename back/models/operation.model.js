const mongoose = require('mongoose');

const OperationsSchema = mongoose.Schema({
    account: String,
    type: String,
    amount: Number,
    payements: Number,
    interest:Number,
    OperationDate: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Operation', OperationsSchema);