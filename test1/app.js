const mysql = require("mysql");

const db = () => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "kkeene",
    password: "M0b1l3Appl!c@t10n",
    database: "jsmysql",
  });

  connection.connect((error) => {
    if (error) {
      console.log("Error connecting to the MySQL Database" + error.stack);
      return;
    }
  });

  connection.query("SELECT * FROM workers", (error, results, fields) => {
    if (error) throw error;
    console.log(results[0].name);
  });

  connection.end((error) => {});
};

module.exports = db;
