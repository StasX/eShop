const http = require("http");
const app = require("./app");
const db = require("./db/db.connect");

process.env.__basedir = __dirname;

db.connect();

const server = http.createServer(app);

server.listen(80);
