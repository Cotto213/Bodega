const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bodegaSchema= Schema({

    bodegaName: {type: String, required: true},
    Company: {
        type: Schema.Types.ObjectId,
        ref: "Company",
        required: true
    }

});
module.exports = mongoose.model('bodega_Alfonso', bodegaSchema);