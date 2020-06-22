const winston = require('winston');
module.exports = winston.createLogger({
  level: 'error',
  format: winston.format.json(),
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log` 
    // - Write all logs error (and below) to `error.log`.
    //
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'info' }),
    new winston.transports.File({ filename: 'public/combined.log' })
  ]
});