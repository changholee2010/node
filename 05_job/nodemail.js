// nodemail.js
const nodemail = require("nodemailer");

let transporter = nodemail.createTransport({
  host: "smtp.daum.net",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SEND_MAIL,
    pass: process.env.DAUM_PASS,
  },
});

const mailSend = async (data = {}) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail(data, (err, result) => {
      if (err) {
        console.log(err);
        return reject(err);
      }
      console.log(result.messageId + "를 확인하세요.");
      return resolve(result.messageId + "를 확인");
    });
  });
};

module.exports = {
  mailSend,
};
