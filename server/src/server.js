const http = require("http");
const app = require("./app");
const db = require("./db/dbConnect");

db.connect();

const server = http.createServer();

server(app).listen(80);
