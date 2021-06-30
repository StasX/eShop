const http = require("http");
const app = require("./app");
const db = require("./db/dbConnect");

process.env.__basedir = __dirname;

db.connect();

const server = http.createServer();

server(app).listen(80);
