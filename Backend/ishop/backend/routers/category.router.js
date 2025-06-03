const express = require('express');
const CategoryRouter = express.Router();
const { create, get, deleteCategory, status } = require('../controller/category.controller')


CategoryRouter.post("/create", create);
CategoryRouter.get("/get-data", get);
CategoryRouter.delete("/delete/:id", deleteCategory);
CategoryRouter.patch("/status-update/:id", status);


module.exports = CategoryRouter