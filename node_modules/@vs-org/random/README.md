# VS Random

This is simple random character generator utility

## Usage

1. Generate random numbers

```
   const random = required("@vs/random");
   const randomNumbers = random({ length: 6, type: "numbers" });

   output: "063367"

```

2. Generate random string with upper case alphabet

```
   const random = required("@vs/random");
   const randomString = random({ length: 6, type: "uppercase" });

   output: "PJIBBA"
```

3. Generate random string with lower case alphabet

```
   const random = required("@vs/random");
   const randomString = random({ length: 6, type: "lowercase" });

   output: "ochdid"
```

4. Generate random string with default random charset

```
   const random = required("@vs/random");
   const randomString = random({ length: 6, type: "random" });

   output: "RCIhj/"
```

5. Generate random string with custom charset

```
   const random = required("@vs/random");
   const randomString = random({ length: 6, charset: "ABCDuifj987)(.:" });

   output: "jC8(i8"
```

## Options

| option                              | Description                                                                                                                                                           |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type: numbers`                     | Generate random number, but returns as string                                                                                                                         |
| `type: uppercase`                   | Generate randomg string with only upper case alphabet                                                                                                                 |
| `type: lowercase`                   | Genearte random string with only lowercase alphabet                                                                                                                   |
| `type: symbols`                     | Generate random stgring with only symbols (from default charset)                                                                                                      |
| `type: random`                      | Generate random string with all above values (depends on length of string to include all chars). It does not mean it will atleast include one char from above options |
| `charset: {custom char set}`        | Generates random string from custom, note if charset is provided it takes priority over above options charset                                                         |
| `length: {length of random string}` | Generates random string with above options of this length                                                                                                             |

## License

MIT (see [LICENSE](https://github.com/vaibhav-sarwade-404/vs-random/blob/main/LICENSE))
