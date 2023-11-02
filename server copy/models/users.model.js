const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = Schema({    

    username:{  type: String, required: true },

    password:{  type: String, required: true },

    Company:{
        type: Schema.ObjectId, required: true, ref:"Company"
              }
   
});

module.exports = mongoose.model('Users', userSchema);
