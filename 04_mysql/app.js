// app.js
const express = require("express");
const mysql = require("mysql2");
const parser = require("body-parser");

// connect pool 생성.
const pool = mysql.createPool({
  host: "127.0.0.1",
  port: 3306,
  user: "dev01",
  password: "dev01",
  database: "dev",
  connectionLimit: 10,
});

const app = express();
app.use(parser.urlencoded()); // x-www-form-urlencoded
app.use(parser.json());

app.get("/", (req, resp) => {
  resp.send("/ 실행");
});

// 고객목록.
app.get("/customers", (req, resp) => {
  pool.getConnection((err, connection) => {
    // getConnection => connection 객체 획득.
    if (err) {
      console.log(err);
      return;
    }
    connection.query("select * from customers", (err, results) => {
      if (err) {
        console.log(err);
        resp.send("쿼리실행중 에러");
        return;
      }
      console.log(results);
      // resp.send("실행완료.");
      resp.json(results);
      connection.release(); // connection => pool 환원.
    }); // end of query().
  }); // end of getConnection().
});

// 등록.
app.post("/customer", (req, resp) => {
  console.log(req.body.param);
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(err);
      return;
    }
    connection.query(
      "insert into customers set ?",
      [req.body.param], // [{name:'방재우', email:'ban@email', phone:'010-11'}]
      (err, results) => {
        if (err) {
          console.log(err);
          resp.send("쿼리실행중 에러");
          return;
        }
        console.log(results);
        // resp.send("실행완료.");
        resp.json(results);
        connection.release(); // connection => pool 환원.
      }
    ); // end of query().
  }); // end of getConnection().
});

// http://localhost:8080/boardList.do?page=3
// http://localhost:3000/customer/:id
app.delete("/customer/:id", (req, resp) => {
  console.dir(req.params);
  //
  resp.send("OK");
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
