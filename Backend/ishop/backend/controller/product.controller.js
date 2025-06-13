const ProductModel = require("../model/product.model");
const { generateUniqueImageName } = require("../utils/helper");
const { createdResponse, errorResponse, successResponse, notFoundResponse, deletedResponse, updatedResponse } = require("../utils/response");
const { unlinkSync } = require('fs')

const product = {
    async create(req, res) {
        try {
            const thumbnail = req.files.thumbnail;
            const image = generateUniqueImageName(thumbnail.name)
            const destination = './public/images/product/' + image
            thumbnail.mv(
                destination,
                async (error) => {
                    if (error) {
                        return errorResponse(res, "Unable to upload file")
                    } else {
                        await categoryModel.create({ ...req.body, thumbnail: image });
                        return createdResponse(res, "Product create")

                    }

                }
            )

        } catch (error) {
            return errorResponse(res, error.message)
        }

    },
    async get(req, res) {
        try {
            const id = req.params.id;
            let product = null;
            if (id) {
                product = await ProductModel.findById(id)
            } else {
                product = await ProductModel.find();
            }

            return successResponse(res, "product found", product)
        } catch (error) {
            return errorResponse(res, error.message)
        }
    }


}

module.exports = product;