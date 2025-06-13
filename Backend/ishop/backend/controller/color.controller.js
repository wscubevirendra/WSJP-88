const colorModel = require("../model/color.model");
const { createdResponse, errorResponse, successResponse, notFoundResponse, deletedResponse, updatedResponse } = require("../utils/response");

const color = {
    async create(req, res) {
        try {

            const { name, slug, hexcode } = req.body;
            await colorModel.create({
                name, slug, hexcode
            })
            return successResponse(res, "Color create")

        } catch (error) {
            console.log(error)
            return errorResponse(res, error.message)
        }

    },
    async get(req, res) {
        try {
            const id = req.params.id;
            let color = null;
            if (id) {
                color = await colorModel.findById(id)
            } else {
                color = await colorModel.find();
            }

            return successResponse(res, "Color found", color)
        } catch (error) {
            return errorResponse(res, error.message)
        }
    },


}

module.exports = color;