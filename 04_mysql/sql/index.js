// sql/index.js
const mysql = require("mysql2");

// connect pool 생성.
const pool = mysql.createPool({
  host: "127.0.0.1",
  port: 3306,
  user: "dev01",
  password: "dev01",
  database: "dev",
  connectionLimit: 10,
});

function execute(sql = "select * from customers", param = []) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        return reject(err);
      }
      connection.query(sql, param, (queryErr, results) => {
        connection.release(); // connection => pool 환원.
        if (queryErr) {
          return reject(queryErr);
        }
        resolve(results);
      }); // end of query().
    }); // end of getConnection().
  });
} // end of execute().

module.exports = {
  execute,
};
