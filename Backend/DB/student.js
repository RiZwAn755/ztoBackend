const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    lastName: {
        type: String,        
    },

    phone: {
        type: String,
        required: true
    },

    email: {
        type: String,
    },

    password: {
        type: String,
        required: true
    }
});

const studentModel = mongoose.model("students", studentSchema);