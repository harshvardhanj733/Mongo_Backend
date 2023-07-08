const mongoose = require('mongoose');

const Schema = mongoose.Schema

const UserSchema = new Schema({
    Email: {
        type: String,
        required: [true, "Email is required"]
    },
    Age: {
        type: Number,
        required: [true, "Age is required"]
    },
    Contact: {
        type: String,
        required: [true, "Contact is required"]
    },
    Gender: {
        type: String,
        required: [true, "Gender is required"]
    }
})

const UserModel = mongoose.model("UserDetails", UserSchema)

module.exports = UserModel;