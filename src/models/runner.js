const express = require('express');
const mongoose  = require('mongoose');

const femaleSchema = new mongoose.Schema({
    Ranking: {
        type: Number,
        require: true,
        unique: true
    },

    Name: {
        type: String,
        required: [true,'Name is Required'],
        trim : true,
        unique: true,
    },

    DOB: {
        type: String,
        default: "Unknown",
        require: true
    },

    NativeCountry: {
        type:String,
        required: [true,'Native Country is Required'],
        trim: true
    },

    Score: {
        type:Number,
        required: [true,'Score is Required']
    },

    EventList: {
        type: String,
        default : "100m"
    }
});

const FemaleRank = new mongoose.model("FemaleRank", femaleSchema);

module.exports = FemaleRank;