const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
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
        image: {
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

const categoryModel = mongoose.model("category", categorySchema);

module.exports = categoryModel
