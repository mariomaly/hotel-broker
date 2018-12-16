// connection to mysql
const connect = require("./connect");

// our backend app
const app = require("./app");

// our database creation query
const dbQueries = require("./queries");

const hostname = "127.0.0.1";
const port = process.env.port || 3000;

app.listen(port, hostname, function() {
  console.log("server is up and running");

  connect();

  dbQueries.databaseCreate("hotel_reservation");
});
