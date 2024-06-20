1. The `convertToNumber` function takes a single parameter `a`, which is expected to be a string representation of a number. Based on the provided test cases:

   - It should support converting strings representing positive numbers like "123".
   - It should correctly handle the string "0" and convert it to the number 0.
   - It should handle negative numbers like "-123".
   - Any non-numeric strings such as "abc" should result in returning `NaN`.

2. The expected return value from `convertToNumber` depends on the input:

   - If `a` is a valid numeric string like "123", the function should return the corresponding number `123`.
   - For the string "0", it should return the number `0`.
   - For "-123", it should return `-123`.
   - If `a` is not a valid numeric string, such as "abc", the function should return `NaN`.

3. Concepts needed to implement `convertToNumber`:
   - Type conversion in JavaScript: Understanding how to convert a string to a number using built-in functions like `parseInt` or `parseFloat`.
   - Handling edge cases: Consider scenarios like empty strings, strings with leading/trailing spaces, or strings that include non-numeric characters.
   - Validation: Ensure that the input string is properly validated before attempting conversion to prevent unexpected behavior or errors.
   - JavaScript's `NaN`: Understand why `NaN` is returned for non-numeric strings and how to utilize this behavior in testing.
