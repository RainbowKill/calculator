import { Injectable } from "@nestjs/common";
import { format, Logger } from "winston";
import * as winston from "winston";
const { timestamp, printf, combine, errors } = format

@Injectable()
export class LogService {
  private readonly logger: Logger;
  constructor() {
    this.logger = winston.createLogger({
      format: combine(
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        errors({stack: true}),
        printf(({ level, message, timestamp }) => {
          return `${timestamp} [${level}] ${message}`;
        })
      ),
      transports: [
        new winston.transports.File({ filename: 'logs.log'}),
      ]
    })
    if (process.env.CONSOLE_LOGGER !== 'production') {
      this.logger.add(new winston.transports.Console());
    }
  }

  log(message: string): void {
    this.logger.log({ level: "info", message});
  }
  error(message: string, error ): void {
    this.logger.error( message, {stack: error.stack} );
  }
}