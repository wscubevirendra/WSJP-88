const categoryModel = require("../model/category.model");
const { generateUniqueImageName } = require("../utils/helper");
const { createdResponse, errorResponse, successResponse, notFoundResponse, deletedResponse, updatedResponse } = require("../utils/response");
const { unlinkSync } = require('fs')

const category = {
    async create(req, res) {
        try {
            const { name, slug } = req.body;
            const categoryImage = req.files.image;
            const image = generateUniqueImageName(categoryImage.name)
            const destination = './public/images/categories/' + image
            categoryImage.mv(
                destination,
                async (error) => {
                    if (error) {
                        return errorResponse(res, "Unable to upload file")
                    } else {
                        await categoryModel.create({ name, slug, image });
                        return createdResponse(res, "Category create")

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
            let category = null;
            if (id) {
                category = await categoryModel.findById(id)
            } else {
                category = await categoryModel.find();
            }

            return successResponse(res, "Category found", category)
        } catch (error) {
            return errorResponse(res, error.message)
        }
    },
    async deleteCategory(req, res) {
        try {
            const id = req.params.id;
            const category = await categoryModel.findById(id);
            if (!category) {
                return notFoundResponse(res, "Category")
            }

            await categoryModel.findByIdAndDelete(id);
            return deletedResponse(res, "Category")


        } catch (error) {
            return errorResponse(res, error.message)

        }

    },
    async status(req, res) {
        try {
            const id = req.params.id;
            const category = await categoryModel.findById(id);
            console.log(category)
            if (!category) {
                return notFoundResponse(res, "Category")
            }
            await categoryModel.updateOne({ _id: id }, { status: !category.status });
            return updatedResponse(res)


        } catch (error) {
            return errorResponse(res, error.message)

        }
    },

    async update(req, res) {
        try {
            const { name, slug } = req.body
            const id = req.params.id;
            const categorydata = await categoryModel.findById(id)
            const categoryImage = req.files.image;
            const image = generateUniqueImageName(categoryImage.name)
            const destination = './public/images/categories/' + image
            categoryImage.mv(
                destination,
                async (error) => {
                    if (error) {
                        return errorResponse(res, "Unable to edit file")
                    } else {
                        unlinkSync('./public/images/categories/' + categorydata.image)
                        await categoryModel.findByIdAndUpdate(
                            {
                                _id: id
                            },
                            {
                                $set: {
                                    name: name,
                                    slug: slug,
                                    image: image
                                }
                            }
                        )

                        return successResponse(res, "Category Edit")


                    }

                }
            )



        } catch (error) {
            return errorResponse(res, error.message)

        }
    }


}

module.exports = category;