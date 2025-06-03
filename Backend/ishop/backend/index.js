require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const CategoryRouter = require('./routers/category.router');
const server = express();
server.use(express.json());
server.use("/category", CategoryRouter)

mongoose.connect(process.env.MONGODB_URL, { dbName: "WSJP88" }).then(
    () => {
        server.listen(
            "5000",
            () => {
                console.log('Server starte')
            }
        )
        console.log('Database connected')

    }

).catch(
    (err) => {
        console.log("Unable to connect Database")
    }
)

