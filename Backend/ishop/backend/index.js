require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const CategoryRouter = require('./routers/category.router');
const ColorRouter = require('./routers/color.router');
const BrandRouter = require('./routers/brand.router');
const ProductRouter = require('./routers/product.router');
const server = express();
server.use(express.json()); //
server.use(cors({
    origin: 'http://localhost:3000'
}));

server.use("/category", CategoryRouter);
server.use("/color", ColorRouter);
server.use("/brand", BrandRouter);
server.use("/product", ProductRouter);
server.use(express.static("./public"));


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

