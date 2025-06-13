const express = require('express');
const CategoryRouter = express.Router();
const { create, get, deleteCategory, status,update } = require('../controller/category.controller');
const fileUpload = require('express-fileupload')


CategoryRouter.post("/create", fileUpload({ createParentPath: true }), create);
CategoryRouter.get("/:id?", get);
CategoryRouter.delete("/delete/:id", deleteCategory);
CategoryRouter.patch("/status-update/:id", status);
CategoryRouter.put("/update/:id", fileUpload({ createParentPath: true }), update);


module.exports = CategoryRouter