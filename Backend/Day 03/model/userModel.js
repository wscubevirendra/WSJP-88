const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        require: true,
        maxlength: 20
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    contact: {
        type: String,
        default: null
    },
    status: {
        type: Boolean,
        default: true
    }
},
    {
        timestamps: true
    }
)

const UserModel = mongoose.model("User", userSchema)

module.exports = UserModel