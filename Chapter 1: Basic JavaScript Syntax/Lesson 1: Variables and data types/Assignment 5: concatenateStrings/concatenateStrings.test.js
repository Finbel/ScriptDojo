import { expect, test } from "vitest";
import { concatenateStrings } from "./concatenateStrings";

test("should return a single string that is a concatenation of the two inputs", () => {
  expect(concatenateStrings("Hello", "World")).toBe("HelloWorld");
  expect(concatenateStrings("JavaScript", "ES6")).toBe("JavaScriptES6");
  expect(concatenateStrings("React", "JS")).toBe("ReactJS");
});

test("should handle empty strings", () => {
  expect(concatenateStrings("", "")).toBe("");
  expect(concatenateStrings("Hello", "")).toBe("Hello");
  expect(concatenateStrings("", "World")).toBe("World");
});

test("should handle null values", () => {
  expect(concatenateStrings(null, null)).toBe("nullnull");
  expect(concatenateStrings("Hello", null)).toBe("Hellonull");
  expect(concatenateStrings(null, "World")).toBe("nullWorld");
});
