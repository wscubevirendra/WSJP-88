const mongoose = require('mongoose');

const colorSchema = new mongoose.Schema(
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
        hexcode: {
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

const colorModel = mongoose.model("color", colorSchema);

module.exports = colorModel
