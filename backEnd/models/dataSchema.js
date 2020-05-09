var mongoose = require('mongoose');

var veiculoSchema = mongoose.Schema({

    vehicle: {type: String},
    brand: {type: String},
    year: {type: Number},
    description: {type: String},
    created: {type: Date},
    updated:  {type: Date},

    });

    module.exports = mongoose.model('veiculo', veiculoSchema);