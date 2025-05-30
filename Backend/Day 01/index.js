const http = require('http');
const url = require('url');

const categories = [
    {
        name: "mobile-phone",
        slug: "mobile-phone"
    },
    {
        name: "laptop",
        slug: "laptop"
    },
    {
        name: "smart-watch",
        slug: "smart-watch"
    },
    {
        name: "headphones",
        slug: "headphones"
    },
    {
        name: "camera",
        slug: "camera"
    }
];


const users = [
    {
        name: "Virendra Singh",
        username: "virendra_singh"
    },
    {
        name: "Anjali Mehta",
        username: "anjali_mehta"
    },
    {
        name: "Ravi Kumar",
        username: "ravi_kumar"
    },
    {
        name: "Sneha Sharma",
        username: "sneha_sharma"
    },
    {
        name: "Amit Patel",
        username: "amit_patel"
    }
];


const server = http.createServer((req, res) => {
    const urlParser = url.parse(req.url, true);
    if (urlParser.pathname == "/user") {
        res.end(JSON.stringify(users))
    } else if (urlParser.path === "/category") {
        res.end(JSON.stringify(categories))
    }else{
        res.end("404")
    }

});

server.listen(5000, () => {
    console.log("Server is running on port 3000");
});
