import { createLogger, format, transports } from 'winston';

const logger = className => createLogger({
  format: format.combine(
    format.label({ label: className }),
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.printf(info => (
      `[${info.level.toUpperCase()}] ${info.label} - ${info.message}`
    )),
  ),
  transports: [new transports.Console()],
});

export default logger;
