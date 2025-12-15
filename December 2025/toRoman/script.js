/*
PSEUDOCODE

FUNCTION toRoman(num)
    CREATE a list of Roman symbols and their values,
    ordered from largest to smallest, including subtraction cases

    INITIALIZE an empty result string

    FOR each value-symbol pair in the list
        WHILE num is greater than or equal to the value
            ADD the symbol to the result
            SUBTRACT the value from num
        END WHILE
    END FOR

    RETURN the result string
END FUNCTION
*/

/**
 * Converts an integer to its Roman numeral representation.
 *
 * Roman numerals are constructed using the following rules:
 * - Symbols are written from largest to smallest
 * - Addition is used when symbols decrease or stay the same
 * - Subtraction is used for values of 4 or 9 in any place value
 * - No symbol is repeated more than three times in a row
 *
 * Valid input range is 1 to 3999.
 *
 * @param {number} num - An integer between 1 and 3999
 * @returns {string} The Roman numeral representation of the number
 *
 * @example
 * toRoman(1464);
 * // returns "MCDLXIV"
 *
 * @example
 * toRoman(18);
 * // returns "XVIII"
 */
function toRoman(num) {
  const romanMap = [
    { value: 1000, symbol: "M" },
    { value: 900,  symbol: "CM" },
    { value: 500,  symbol: "D" },
    { value: 400,  symbol: "CD" },
    { value: 100,  symbol: "C" },
    { value: 90,   symbol: "XC" },
    { value: 50,   symbol: "L" },
    { value: 40,   symbol: "XL" },
    { value: 10,   symbol: "X" },
    { value: 9,    symbol: "IX" },
    { value: 5,    symbol: "V" },
    { value: 4,    symbol: "IV" },
    { value: 1,    symbol: "I" }
  ];

  let result = "";

  for (const { value, symbol } of romanMap) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}
