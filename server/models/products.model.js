const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productsSchema = Schema({ 


    product_Name : {type: String, required: true},
    Company: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required:true

    },
    BuyPrice: {type: Number, required: true},
    Active: {type: Boolean, required: true},
    Inventariable: {type: Boolean, required: true},
    measure_alfonso:{

        type: Schema.Types.ObjectId,
        ref: "measure_Alfonso",
        required: true
    },

    });

    module.exports = mongoose.model('products_Alfonso', productsSchema);