const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const inventorySchema = Schema({

    Stock: {type: Number, required: true},
    Company: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
    bodega_Alfonso:{

        type: Schema.Types.ObjectId,
        ref: "bodega_Alfonso",
        required: true
    },
    products_Alfonso:{

        type: Schema.Types.ObjectId,
        ref: "products_Alfonso",
        required: true
    },
    
    
    }
);

module.exports = mongoose.model('inventory_Alfonso', inventorySchema);