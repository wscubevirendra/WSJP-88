const http = require("http");
const { readFileSync } = require("fs");
const url = require("url");



// console.log(data)

const server = http.createServer(
    (req, res) => {
        const urlParser = url.parse(req.url, true);

        if (urlParser.path == "/about") {
            const data = readFileSync("about.html", "utf-8");
            res.end(data)

        } else if (urlParser.path == "/") {
            const data = readFileSync("index.html", "utf-8");
            res.end(data)

        } else {
            res.end("404")
        }

    }
)

server.listen(
    5000,
    () => {
        console.log("server start")
    }
)