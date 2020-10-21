// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    
    host: "vrk7xcrab1wsx4r1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "eunr5tk4v1y7c5jt",
    password: "gaplih0h9luuu3c2",
    database: "y5dfx6zon3frlaaz"
  });
};

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "C!ive.1804",
//   database: "burgers_db"
// });

// Make connection.
connection.connect();
// Export connection for our ORM to use.
module.exports = connection;
