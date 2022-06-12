const Operation = require('../models/operation.model');

// Create and Save a new operation
exports.create = (req, res) => {
    // Validate request
    if(!req.body.account) {
        return res.status(400).send({
            message: "operation account can not be empty"
        });
    }

    // Create a operation
    const operation = new Operation({
        account: req.body.account || "a1235", 
        type: req.body.type || "loan",
        amount: req.body.amount || 10000 ,
        payements: req.body.payements || 36 ,
        interest: req.body.interest || 3.6 ,
        OperationDate:req.body.OperationDate || "6/12/2022" ,
    });

    // Save operation in the database
    operation.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Operation."
        });
    });
};

// Retrieve and return all operation from the database.
exports.findAll = (req, res) => {
    Operation.find().then(operation => {
        res.send(operation);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving operations."
        });
    });
};

// Find a single operation with a operationId
exports.findOne = (req, res) => {
    Operation.findById(req.params.operationId)
    .then(operation => {
        if(!operation) {
            return res.status(404).send({
                message: "operation not found with id " + req.params.operationId
            });            
        }
        res.send(operation);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "operation not found with id " + req.params.operationId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving operation with id " + req.params.operationId
        });
    });
};

// Update a operation identified by the operationId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.loan) {
        return res.status(400).send({
            message: "operation model can not be empty"
        });
    }

    // Find operation and update it with the request body
    Operation.findByIdAndUpdate(req.params.operationId, {
        account: req.body.account || "a1235", 
        type: req.body.type || "loan",
        amount: req.body.amount || 10000 ,
        payements: req.body.payements || 36 ,
        interest: req.body.interest || 3.6 ,
        OperationDate:req.body.OperationDate || "6/12/2022" ,
    }, {new: true})
    .then(operation => {
        if(!operation) {
            return res.status(404).send({
                message: "operation not found with id " + req.params.operationId
            });
        }
        res.send(operation);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "operation not found with id " + req.params.operationId
            });                
        }
        return res.status(500).send({
            message: "Error updating operation with id " + req.params.operationId
        });
    });
};

// Delete a operation with the specified userId in the request
exports.delete = (req, res) => {
    Operation.findByIdAndRemove(req.params.operationId)
    .then(operation => {
        if(!operation) {
            return res.status(404).send({
                message: "Operation not found with id " + req.params.operationId
            });
        }
        res.send({message: "operation deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Operation not found with id " + req.params.operationId
            });                
        }
        return res.status(500).send({
            message: "Could not delete operation with id " + req.params.operationId
        });
    });
};