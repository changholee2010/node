// app.js
const express = require("express");
const parser = require("body-parser");
const sql = require("./sql");
const prodSql = require("./sql/sql");
const cors = require("cors");
// console.log(prodSql["productMainImage"].query);

const app = express();
app.use(parser.urlencoded()); // x-www-form-urlencoded
app.use(parser.json());
app.use(cors());

app.get("/", (req, resp) => {
  resp.send("/ 실행");
});

// 파일을 복사한 후 (upload) 에 DB에 insert image 처리.
app.post("/uploads/:productId/:type/:fileName", async (req, res) => {
  let { productId, type, fileName } = req.params;
  const dir = `${__dirname}/uploads/${productId}`;
  const file = `${dir}/${fileName}`;
  if (!req.body.data)
    return fs.unlink(file, async (err) =>
      res.send({
        err,
      })
    );

  const data = req.body.data.slice(req.body.data.indexOf(";base64,") + 8);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
  fs.writeFile(file, data, "base64", async (error) => {
    // Origin.
    // await exec.db("productImageInsert", [
    //   {
    //     product_id: productId,
    //     type: type,
    //     path: fileName,
    //   },
    // ]);
    // Translate.
    await sql.execute("productImageInsert", {
      product_id: productId,
      type: type,
      path: fileName,
    });

    if (error) {
      res.send({
        error,
      });
    } else {
      res.send("ok");
    }
  });
});

// 이미지 다운로드.
app.get("/download/:productId/:fileName", (req, res) => {
  const { productId, type, fileName } = req.params;
  const filepath = `${__dirname}/uploads/${productId}/${fileName}`;
  res.header(
    "Content-Type",
    `image/${fileName.substring(fileName.lastIndexOf("."))}`
  );
  if (!fs.existsSync(filepath))
    res.send(404, {
      error: "Can not found file.",
    });
  else fs.createReadStream(filepath).pipe(res); // readable stream을 writable stream으로 연결. 즉 출력화면에 이미지 출력.
});

// 상품관련해서 만든 라우팅 정보.
app.post("/api/:alias", async (req, resp) => {
  let search = prodSql[req.params.alias].query; // alias: productDetail
  let param = req.body.param; // param: [2]
  try {
    let result = await sql.execute(search, param);
    resp.json(result);
  } catch (err) {
    console.log(err);
    resp.json({ retCode: "Error" });
  }
});

// 서버역할을 하는 mock 데이터가 필요해서 만든 라우팅 정보.
// 고객목록.
app.get("/customers", async (req, resp) => {
  try {
    let customerList = await sql.execute("select * from customers");
    resp.json(customerList);
  } catch (err) {
    resp.json({ retCode: "Error" });
  }
});
app.get("/products", async (req, resp) => {
  try {
    resp.json([
      {
        product_name: "기계식 키보드",
        price: 25000,
        category: "노트북/태블릿",
        delivery_price: 5000,
      },
      {
        product_name: "무선 마우스",
        price: 12000,
        category: "노트북/태블릿",
        delivery_price: 5000,
      },
      {
        product_name: "아이패드",
        price: 725000,
        category: "노트북/태블릿",
        delivery_price: 5000,
      },
      {
        product_name: "무선충전기",
        price: 42000,
        category: "노트북/태블릿",
        delivery_price: 5000,
      },
    ]);
  } catch (err) {
    resp.json({ retCode: "Error" });
  }
});
// post, put, delete 메소드를 실행해보도록 연습.
// 등록.
app.post("/customer", async (req, resp) => {
  try {
    let result = await sql.execute(
      "insert into customers set ?", //
      [req.body.param]
    );
    resp.json(result);
  } catch (err) {
    console.log(err);
    resp.json({ retCode: "Error" });
  }
});

// http://localhost:8080/boardList.do?page=3
// http://localhost:3000/customer/:id
app.delete("/customer/:id", async (req, resp) => {
  try {
    let result = await sql.execute(
      "delete from customers where id = ?", //
      [req.params.id]
    );
    resp.json(result);
  } catch (err) {
    resp.json({ retCode: "Error" });
  }
});

//수정.
app.put("/customer", async (req, resp) => {
  console.log(req.body);
  try {
    let result = await sql.execute(
      "update customers set name=?,email=?,phone=? where id = ?", //
      [req.body.name, req.body.email, req.body.phone, req.body.id]
    );
    resp.json(result);
  } catch (err) {
    console.log(err);
    resp.json({ retCode: "Error" });
  }
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
