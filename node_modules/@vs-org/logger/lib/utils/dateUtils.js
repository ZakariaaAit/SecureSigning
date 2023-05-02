"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateFormat = void 0;
var dateFormat = function () {
    var currentDateTime = new Date();
    var date = [
        currentDateTime.getFullYear(),
        currentDateTime.getMonth(),
        currentDateTime.getDate()
    ]
        .join("-")
        .toString();
    var time = [
        currentDateTime.getHours(),
        currentDateTime.getMinutes(),
        currentDateTime.getSeconds(),
        currentDateTime.getMilliseconds()
    ]
        .join(":")
        .toString();
    var utcOffset = currentDateTime.getTimezoneOffset();
    var hourOffset = String(Math.abs(utcOffset) / 60);
    var minOffset = String(Math.abs(utcOffset) % 60);
    return "".concat(date, " T").concat(time, " UTC").concat(utcOffset <= 0 ? "+" : "-").concat(hourOffset.padStart(2, "0"), ":").concat(minOffset.padStart(2, "0"));
};
exports.dateFormat = dateFormat;
