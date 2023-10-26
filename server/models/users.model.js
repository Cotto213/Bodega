const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = Schema({    

    username:{  type: String, required: true },

    password:{  type: String, required: true },

    Company:{
        type: String, required: true
              }
   
});

module.exports = mongoose.model('Users', userSchema);
