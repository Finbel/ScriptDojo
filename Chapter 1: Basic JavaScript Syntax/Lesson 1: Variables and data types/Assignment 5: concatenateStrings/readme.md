1. The `concatenateStrings` function accepts two parameters `a` and `b`, which are expected to be strings or `null`. Based on the provided test cases:

   - `a` and `b` can be non-empty strings, empty strings, or `null`.

2. The expected return value of the function is a single string that is the concatenation of `a` and `b`.

3. To implement the `concatenateStrings` function:
   - **String Concatenation**: JavaScript provides multiple ways to concatenate strings. The most straightforward method is using the `+` operator or template literals (\`\${a}\${b}\`).
   - **Edge Cases**: Consider edge cases such as both `a` and `b` being empty strings, one being empty and the other being non-empty, or both being `null`. Each case should result in the expected concatenated string as per the provided test cases.
