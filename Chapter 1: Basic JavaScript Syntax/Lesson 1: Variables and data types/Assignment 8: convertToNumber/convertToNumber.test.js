import { expect, test } from "vitest";
import { convertToNumber } from "./convertToNumber";

test('converts string "123" to number 123', () => {
  expect(convertToNumber("123")).toBe(123);
});

test('converts string "0" to number 0', () => {
  expect(convertToNumber("0")).toBe(0);
});

test('converts string "-123" to number -123', () => {
  expect(convertToNumber("-123")).toBe(-123);
});

test("returns NaN for non-numeric strings", () => {
  expect(convertToNumber("abc")).toBeNaN();
});
