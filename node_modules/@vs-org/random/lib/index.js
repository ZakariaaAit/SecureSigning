"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = __importDefault(require("crypto"));
var constants_1 = __importDefault(require("./utils/constants"));
/**
 * Used to generate random string with provided options options
 * @param options - {Object}
 * @param options.length - number of chars to generate
 * @param options.type - { "numbers" | "uppercase" | "lowercase" | "symbols" | "random" }
 * @param options.charset - custom char set to use for random chars generation
 * @returns {string} - random generator string
 *
 * Eg:
 *
 * const random = required("vs@random")
 *
 * 1. Generate random numbers
 *    const randomNumbers = random({ length: 6, type: "numbers" });
 *
 *    output: "063367"
 *
 * 2. Generate random string with upper case alphabet
 *    const randomString = random({ length: 6, type: "uppercase" });
 *
 *    output: "PJIBBA"
 *
 * 3. Generate random string with lower case alphabet
 *    const randomString = random({ length: 6, type: "lowercase" });
 *
 *    output: "ochdid"
 *
 * 4. Generate random string with default random charset
 *    const randomString = random({ length: 6, type: "random" });
 *
 *    output: "RCIhj/"
 *
 * 5. Generate random string with custom charset
 *    const randomString = random({ length: 6, charset: "ABCDuifj987)(.:" });
 *
 *    output: "jC8(i8"
 *
 */
var random = function (options) {
    var e_1, _a;
    var _b = options.type, type = _b === void 0 ? "numbers" : _b, _c = options.length, length = _c === void 0 ? 6 : _c, _d = options.charset, charset = _d === void 0 ? "" : _d;
    var randomChar = "";
    var randomBytes = crypto_1.default.randomBytes(length);
    var _charSet = charset || constants_1.default.RANDOM_CHAR_BASE;
    if (!charset) {
        switch (type) {
            case "lowercase":
                _charSet = constants_1.default.LOWERCASE_ALPHABETE;
                break;
            case "numbers":
                _charSet = constants_1.default.NUMBERS;
                break;
            case "symbols":
                _charSet = constants_1.default.SYMBOLS;
                break;
            case "uppercase":
                _charSet = constants_1.default.UPPERCASE_ALPHABET;
                break;
            default:
                break;
        }
    }
    try {
        for (var randomBytes_1 = __values(randomBytes), randomBytes_1_1 = randomBytes_1.next(); !randomBytes_1_1.done; randomBytes_1_1 = randomBytes_1.next()) {
            var element = randomBytes_1_1.value;
            randomChar +=
                _charSet[Math.floor((element / 255.0) * (_charSet.length - 1))];
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (randomBytes_1_1 && !randomBytes_1_1.done && (_a = randomBytes_1.return)) _a.call(randomBytes_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return randomChar;
};
exports.default = random;
