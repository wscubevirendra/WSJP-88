const express = require('express');
const BrandRouter = express.Router();
const { create, get, } = require('../controller/brand.controller');
const fileUpload = require('express-fileupload')


BrandRouter.post("/create", fileUpload({ createParentPath: true }), create);
BrandRouter.get("/:id?", get);

module.exports = BrandRouter