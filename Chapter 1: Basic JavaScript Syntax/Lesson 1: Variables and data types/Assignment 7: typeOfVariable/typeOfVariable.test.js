import { expect, test } from "vitest";
import { typeOfVariable } from "./typeOfVariable";

test('should return "number" for numbers', () => {
  expect(typeOfVariable(123)).toBe("number");
  expect(typeOfVariable(0)).toBe("number");
  expect(typeOfVariable(-123)).toBe("number");
});

test('should return "string" for strings', () => {
  expect(typeOfVariable("hello")).toBe("string");
  expect(typeOfVariable("")).toBe("string");
});

test('should return "boolean" for booleans', () => {
  expect(typeOfVariable(true)).toBe("boolean");
  expect(typeOfVariable(false)).toBe("boolean");
});

test('should return "object" for objects', () => {
  expect(typeOfVariable({})).toBe("object");
  expect(typeOfVariable([])).toBe("object");
  expect(typeOfVariable(null)).toBe("object");
});

test('should return "undefined" for undefined', () => {
  expect(typeOfVariable(undefined)).toBe("undefined");
});

test('should return "function" for functions', () => {
  expect(typeOfVariable(() => {})).toBe("function");
});
