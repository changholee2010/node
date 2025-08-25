// fs_watch.js
const fs = require("fs");
const path = require("path");
let sql = require("./sql.js");

fs.watchFile(__dirname + "/sql.js", () => {
  console.log("재시작 없이 반영.");
  // cache 지우고 새롭게 읽어들이기.
  delete require.cache[require.resolve("./sql.js")];
  sql = require("./sql.js");
});
