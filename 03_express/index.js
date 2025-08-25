const express = require("express");

const app = express(); // express 인스턴스 생성.

// url - 실행함수. => 라우팅.
app.get("/", (req, resp) => {
  resp.send("/ 경로 호출됨.");
});
app.get("/start", (req, resp) => {
  resp.send("/start 경로 호출됨.");
});
app.get("/json", (req, resp) => {
  resp.json({ id: "user01", pw: "1111" });
});
app.post("/main", (req, resp) => {
  resp.send("/main 경로를 post요청방식으로 호출함");
});

// 서버스타트.
app.listen(3000, () => {
  console.log("http://localhost:3000 서버실행.");
});
