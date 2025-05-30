const express = require("express");
const UserRouter = express.Router()
const userController = require("../controller/userController")
UserRouter.post("/create", userController.create);
UserRouter.get("/get-data", userController.get);
UserRouter.delete("/delete/:id", userController.delete)
UserRouter.patch("/status-update/:id", userController.status)


module.exports = UserRouter;