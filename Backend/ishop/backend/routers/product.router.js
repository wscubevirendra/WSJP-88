const express = require('express');
const ProductRouter = express.Router();
const { create, get } = require('../controller/product.controller');
const fileUpload = require('express-fileupload');


ProductRouter.post("/create", fileUpload({ createParentPath: true }), create);
ProductRouter.get("/:id?", get);



module.exports = ProductRouter;