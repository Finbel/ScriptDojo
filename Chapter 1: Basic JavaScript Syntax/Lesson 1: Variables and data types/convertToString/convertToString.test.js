import { expect, test } from "vitest";
import { convertToString } from "./convertToString";

test("should convert a number to a string", () => {
  expect(convertToString(123)).toBe("123");
  expect(convertToString(0)).toBe("0");
});

test("should convert a boolean to a string", () => {
  expect(convertToString(true)).toBe("true");
  expect(convertToString(false)).toBe("false");
});

test("should convert null to a string", () => {
  expect(convertToString(null)).toBe("null");
});

test("should convert undefined to a string", () => {
  expect(convertToString(undefined)).toBe("undefined");
});

test("should return the same string if a string is passed", () => {
  expect(convertToString("Hello")).toBe("Hello");
});
