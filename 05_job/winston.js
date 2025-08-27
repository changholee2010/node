// winston.js
const winston = require("winston");

const logger = winston.createLogger({
  level: "info", // info, warn, error
  format: winston.format.combine(
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    winston.format.printf(
      (info) =>
        `${info.timestamp} [${info.level.toUpperCase()}]: ${info.message}`
    )
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs/sample.log" }),
  ],
});

// logger.info("로그인 성공");
// logger.warn("잘못된 요청입니다");
// logger.error("데이터베이스 연결 오류");

module.exports = {
  logger,
};
