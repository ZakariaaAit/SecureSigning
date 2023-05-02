"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./utils/constants");
var dateUtils_1 = require("./utils/dateUtils");
var getDefaultLogLevel = function () {
    return (process.env.VS_LOGGER_LEVEL || "info").toLowerCase() === "debug"
        ? "debug"
        : "info";
};
var CONSOLE_COLORS = constants_1.default.CONSOLE_COLORS, LOG_LEVEL_COLOR = constants_1.default.LOG_LEVEL_COLOR, LOG_LEVEL = constants_1.default.LOG_LEVEL;
var Logger = /** @class */ (function () {
    function Logger(_logLevel, loggerName) {
        if (_logLevel === void 0) { _logLevel = getDefaultLogLevel(); }
        this._logLevel = _logLevel;
        this.loggerName = loggerName || "";
    }
    Logger.prototype.formatMsg = function (msg, _logLevel, msgColor) {
        if (_logLevel === void 0) { _logLevel = this._logLevel; }
        if (msgColor === void 0) { msgColor = LOG_LEVEL_COLOR[LOG_LEVEL.info]; }
        //prettier-ignore
        return "[".concat((0, dateUtils_1.dateFormat)(), "] ").concat(CONSOLE_COLORS.green).concat(_logLevel.toUpperCase()).concat(CONSOLE_COLORS.reset, ":").concat(msgColor).concat(this.loggerName ? " ".concat(this.loggerName, ":") : "", " ").concat(msg.join("")).concat(CONSOLE_COLORS.reset);
    };
    Logger.prototype.getLoggerName = function () {
        return this.loggerName;
    };
    Logger.prototype.info = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        console.log(this.formatMsg(msg, "info"));
    };
    Logger.prototype.warn = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        console.warn(this.formatMsg(msg, "info", CONSOLE_COLORS.yellow));
    };
    Logger.prototype.error = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        console.error(this.formatMsg(msg, "info", CONSOLE_COLORS.red));
    };
    Logger.prototype.debug = function () {
        var _a;
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        if (((_a = this._logLevel) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== LOG_LEVEL.debug)
            return;
        console.log(this.formatMsg(msg), "debug");
    };
    Logger.prototype.cyan = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        console.log(this.formatMsg(msg), "info", CONSOLE_COLORS.cyan);
    };
    Logger.prototype.red = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        console.log(this.formatMsg(msg), "info", CONSOLE_COLORS.red);
    };
    Logger.prototype.green = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        console.log(this.formatMsg(msg), "info", CONSOLE_COLORS.green);
    };
    Logger.prototype.yellow = function () {
        var msg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            msg[_i] = arguments[_i];
        }
        console.log(this.formatMsg(msg), "info", CONSOLE_COLORS.yellow);
    };
    return Logger;
}());
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
var LoggerFactory = /** @class */ (function () {
    function LoggerFactory(__logLevel) {
        if (__logLevel === void 0) { __logLevel = getDefaultLogLevel(); }
        LoggerFactory._logLevel = __logLevel;
    }
    LoggerFactory.getInstance = function (_logLevel) {
        if (_logLevel === void 0) { _logLevel = getDefaultLogLevel(); }
        if (LoggerFactory.loggerInstance && LoggerFactory._logLevel === _logLevel) {
            return LoggerFactory.loggerInstance;
        }
        LoggerFactory.loggerInstance = new LoggerFactory(_logLevel);
        return LoggerFactory.loggerInstance;
    };
    LoggerFactory.prototype.getLogger = function (loggerName) {
        return new Logger(LoggerFactory._logLevel, loggerName);
    };
    LoggerFactory._logLevel = "info";
    return LoggerFactory;
}());
exports.default = LoggerFactory;
