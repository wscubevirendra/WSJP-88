const express = require('express');
const ColorRouter = express.Router();
const { create, get } = require('../controller/color.controller');

ColorRouter.post("/create", create);
ColorRouter.get("/:id?", get);


module.exports = ColorRouter