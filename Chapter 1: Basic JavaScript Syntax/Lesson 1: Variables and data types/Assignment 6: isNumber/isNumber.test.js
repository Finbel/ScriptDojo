import { expect, test } from "vitest";
import { isNumber } from "./isNumber";

test("should return true when the input is a number", () => {
  expect(isNumber(1)).toBe(true);
  expect(isNumber(0)).toBe(true);
  expect(isNumber(-1)).toBe(true);
  expect(isNumber(1.1)).toBe(true);
});

test("should return false when the input is not a number", () => {
  expect(isNumber("1")).toBe(false);
  expect(isNumber("0")).toBe(false);
  expect(isNumber("-1")).toBe(false);
  expect(isNumber("1.1")).toBe(false);
  expect(isNumber([])).toBe(false);
  expect(isNumber({})).toBe(false);
  expect(isNumber(null)).toBe(false);
  expect(isNumber(undefined)).toBe(false);
  expect(isNumber(NaN)).toBe(false);
});
