const brandModel = require("../model/brand.model");
const { generateUniqueImageName } = require("../utils/helper");
const { createdResponse, errorResponse, successResponse, notFoundResponse, deletedResponse, updatedResponse } = require("../utils/response");

const brand = {
    async create(req, res) {
        try {
            const { name, slug, description } = req.body;
            const brandImage = req.files.logo;
            const logo = generateUniqueImageName(brandImage.name)
            const destination = './public/images/brand/' + logo
            brandImage.mv(
                destination,
                async (error) => {
                    if (error) {
                        return errorResponse(res, "Unable to upload file")
                    } else {
                        await brandModel.create({ name, slug, logo, description });
                        return createdResponse(res, "Brand create");
                    }
                }
            )

        } catch (error) {
            console.log(error)
            return errorResponse(res, error.message)
        }

    },
    async get(req, res) {
        try {
            const id = req.params.id;
            let brand = null;
            if (id) {
                brand = await brandModel.findById(id)
            } else {
                brand = await brandModel.find();
            }

            return successResponse(res, "brand found", brand)
        } catch (error) {
            return errorResponse(res, error.message)
        }
    }


}

module.exports = brand;