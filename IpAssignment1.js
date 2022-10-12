/* MY SQL */
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "vcet"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to mysql!");
  var sql = "CREATE TABLE students (RollNo int, FirstName VARCHAR(255), LastName VARCHAR(255), Address VARCHAR(255), ContactNo int)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});