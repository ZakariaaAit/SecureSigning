declare type RandomCharTypes = "numbers" | "uppercase" | "lowercase" | "symbols" | "random";
export declare type RecoverCodesOptions = {
    codeType: RandomCharTypes;
    codeLength: number;
    numberOfCodes: number;
    charset?: string;
};
interface RandomCharGeneratorOptionsBase {
    length: number;
}
interface RandomCharGeneratorOptionsWithType extends RandomCharGeneratorOptionsBase {
    type: RandomCharTypes;
    charset?: never;
}
interface RandomCharGeneratorOptionsWithCharSet extends RandomCharGeneratorOptionsBase {
    type?: never;
    charset: string;
}
export declare type RandomCharGeneratorOptions = RandomCharGeneratorOptionsWithType | RandomCharGeneratorOptionsWithCharSet;
export {};
