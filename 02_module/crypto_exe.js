// crypto_exe.js
const crypto = require("crypto");
let pass = crypto.createHash("sha512").update("test1234").digest("base64");
// test1234 => dfkldfjkdlsa;fjkdslafjsdkalfsdkl
// test1234 => (salt) djfkladsfjkdsalfjksdlafjlasdkf
//                    sdfasdkflasdfdjskalfdjskalfjdksla
console.log(pass);

// salt값을 생성하는 함수.
// random 값이 만들어짐.
const createSalt = () => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(64, (err, buf) => {
      if (err) {
        // 실패.
        reject(err);
      }
      // 성공.
      resolve(buf.toString("base64"));
    });
  });
};

// createSalt(); // 함수호출.
// salt 값을 활용해서 평문 -> 암화화문 변경.
const createCryptoPassword = async (trPw) => {
  let salt = await createSalt();
  console.log(salt);
  salt =
    "K0d4RTk5wSIeWqJzz0EYEXyI4z9/rdLyneRq+UWnyrMtXtl7ZlQtS7/AVXVqkhofly3Vhz00PAV0/2tM0cSMpw==";
  pw =
    "rL0EgIarnV32V0Y8YCwqHiTnjiwwI4ync73owLSVppFLTRA9/nzIwM2YTSxwIPw73LUVhWLusWVfIqA6EPGlvA==";
  crypto.pbkdf2(trPw, salt, 100000, 64, "sha512", (err, buf) => {
    if (err) {
      console.log("err=>", err);
    }
    // console.log(buf.toString("base64"));
    let crPw = buf.toString("base64");
    if (pw == crPw) {
      console.log("비밀번호가 동일함.");
    } else {
      console.log("비밀번호를 확인하세요");
    }
  });
};
createCryptoPassword("test1234");
