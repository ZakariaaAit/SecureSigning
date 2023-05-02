"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UPPERCASE_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var LOWERCASE_ALPHABETE = "abcdefghijklmnopqrstuvwxyz";
var NUMBERS = "0123456789";
var SYMBOLS = "!@#$%&*()<>?/[]{}.,;:^";
var RANDOM_CHAR_BASE = "".concat(UPPERCASE_ALPHABET).concat(LOWERCASE_ALPHABETE).concat(NUMBERS).concat(SYMBOLS);
exports.default = {
    RANDOM_CHAR_BASE: RANDOM_CHAR_BASE,
    UPPERCASE_ALPHABET: UPPERCASE_ALPHABET,
    LOWERCASE_ALPHABETE: LOWERCASE_ALPHABETE,
    SYMBOLS: SYMBOLS,
    NUMBERS: NUMBERS
};
