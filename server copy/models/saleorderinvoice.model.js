const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const saleOrderInvoiceSchema = Schema({

    CodInvoice: {type: Number, required: true},
    total: {type: Number, required: true},
    Company: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
    CreationDate: {type: Date, required: true},
    User: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
    State: {type: String, required: true}


});

module.exports = mongoose.model('saleorderinvoice_Alfonso', saleOrderInvoiceSchema);