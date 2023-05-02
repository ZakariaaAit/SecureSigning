import { RandomCharGeneratorOptions } from "./types/VsRandomTypes";
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
declare const random: (options: RandomCharGeneratorOptions) => string;
export default random;
