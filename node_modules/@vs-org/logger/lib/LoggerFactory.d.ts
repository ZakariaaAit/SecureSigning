import { LOG_LEVEL_TYPES } from "./types/LoggerTypes";
declare class Logger {
    private _logLevel;
    private loggerName;
    constructor(_logLevel?: LOG_LEVEL_TYPES, loggerName?: string);
    private formatMsg;
    getLoggerName(): string;
    info(...msg: string[]): void;
    warn(...msg: string[]): void;
    error(...msg: string[]): void;
    debug(...msg: string[]): void;
    cyan(...msg: string[]): void;
    red(...msg: string[]): void;
    green(...msg: string[]): void;
    yellow(...msg: string[]): void;
}
/**
 * Logger to use when method names are required in log along with msg.
 *
 * Eg:
 * import { Logger } from "vs-logger";
 * const logger = Logger.getInstance("info");
 * const log = Logger.getLogger("methodName");
 * log.info(`some msg`);
 *
 * output: [2022-8-20 T14:42:1:740 UTC+02:00] INFO: methodName: some msg
 *
 * const log2 = Logger.getLogger();
 * log2.info(`some msg`);
 *
 * output: [2022-8-20 T14:42:1:740 UTC+02:00] INFO: some msg
 *
 * // Control log level with env variable
 * process.env.VS_LOGGER_LEVEL="info";
 *
 * const logger = Logger.getInstance();
 * const log = Logger.getLogger("MethodName");
 * log.info(`some msg`);
 *
 * output: [2022-8-20 T14:42:1:740 UTC+02:00] INFO: methodName: some msg
 */
declare class LoggerFactory {
    private static _logLevel;
    private static loggerInstance;
    private constructor();
    static getInstance(_logLevel?: LOG_LEVEL_TYPES): LoggerFactory;
    getLogger(loggerName?: string): Logger;
}
export default LoggerFactory;
