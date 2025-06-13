const express = require('express');
const ProductRouter = express.Router();
const { create, get, status, update } = require('../controller/category.controller');
const fileUpload = require('express-fileupload');


ProductRouter.post("/create", fileUpload({ createParentPath: true }), create);
ProductRouter.get("/:id?", get);
ProductRouter.patch("/status-update/:id", status);
ProductRouter.put("/update/:id", fileUpload({ createParentPath: true }), update);


module.exports = ProductRouter;