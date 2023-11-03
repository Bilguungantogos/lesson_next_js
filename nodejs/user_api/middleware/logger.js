const winston = require("winston");

const logger = (req, res, next) => {
  const logWinston = winston.createLogger({
    format: winston.format.json(),
    transports: [new winston.transports.File({ filename: "combined.log" })],
  });
  logWinston.log(
    "info",
    `${new Date().toLocaleDateString()} - ${req.originalUrl} - ${req.method}`,
    () => {}
  );
  next();
};

module.exports = { logger };
