const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserRouter = require('./router/userRouter');
const server = express();
server.use(express.json())
server.use(cors())
server.use("/user", UserRouter)

mongoose.connect("mongodb://localhost:27017/", { dbName: "wsjp88" }).then(
    () => {
        console.log("DataBase connnect")
        server.listen(
            5000,
            () => {
                console.log("SERVER START PORT NUMBER 5000")
            }
        )
    }

).catch(
    () => {
        console.log('Unable to connect dataBase')
    }
)

