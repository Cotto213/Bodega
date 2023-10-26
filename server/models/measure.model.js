const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const measureSchema = Schema({

    Name: { type: String, required: true },
    Description: { type: String, required: true },
    Company: {
        type: Schema.Types.ObjectId, 
        ref: "Users", 
        required: true
    }
});

module.exports = mongoose.model('measure_Alfonso', measureSchema);