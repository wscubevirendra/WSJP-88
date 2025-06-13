const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            unique: true,
            required: true
        },
        slug: {
            type: String,
            unique: true,
            required: true
        },
        description: {
            type: String,
        },
        logo: {
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

const brandModel = mongoose.model("brand", brandSchema);
module.exports = brandModel


