const express = require("express");
require("dotenv").config({
  path: "./.env",
});
const nodemail = require("./nodemail");

const app = express();
app.use(express.urlencoded());

// 라우팅.
app.get("/", (req, resp) => {
  resp.send("/");
});

app.get("/mail", (req, resp) => {
  resp.send(`<form action="mail" method="post">
      <table>
        <tr>
          <th>보내는이:</th>
          <td><input type="email" name="sender" value="leadon@daum.net" /></td>
        </tr>
        <tr>
          <th>받는이:</th>
          <td><input type="email" name="receiver" value="cholee@yedam.ac" /></td>
        </tr>
        <tr>
          <th>제목:</th>
          <td><input type="text" name="subject" /></td>
        </tr>
        <tr>
          <th>내용:</th>
          <td><textarea cols="23" rows="3" name="content"></textarea></td>
        </tr>
        <tr>
          <td colspan="2" align="center">
            <input type="submit" value="메일보내기" />
          </td>
        </tr>
      </table>
    </form>`);
});

app.post("/mail", async (req, resp) => {
  let data = {
    from: req.body.sender,
    to: req.body.receiver,
    subject: req.body.subject,
    html: "<div>" + req.body.content.replace(/\n/g, "<br>") + "</div>",
  }; // from, to, subject, text(html)
  let result = "Done";
  result = await nodemail.mailSend(data);
  resp.send(result);
});

// "/excel_down" => customers 테이블의 데이터를 logs/customer2.xlsx로 저장.
app.get("/excel_down", (req, resp) => {});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
