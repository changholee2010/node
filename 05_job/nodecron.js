// nodecron.js
const cron = require("node-cron");
const { logger } = require("./winston");

cron.schedule("1,11,21,31,41,51 * * * * *", () => {
  let current = new Date();
  logger.info(" => cron실행됨.");
});
