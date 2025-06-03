const categoryModel = require("../model/category.model");
const { createdResponse, errorResponse, successResponse, notFoundResponse, deletedResponse, updatedResponse } = require("../utils/response");

const category = {
    async create(req, res) {
        try {
            const { name, slug } = req.body;
            await categoryModel.create({ name, slug });
            return createdResponse(res, "Category create")
        } catch (error) {
            return errorResponse(res, error.message)
        }

    },
    async get(req, res) {
        try {
            const category = await categoryModel.find();
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
    }


}

module.exports = category;