import { subtractNumbers } from "./subtractNumbers";
import { expect, test } from "vitest";

test("should return the correct subtraction of two positive numbers", () => {
  expect(subtractNumbers(5, 3)).toBe(2);
});

test("should return the correct subtraction of two negative numbers", () => {
  expect(subtractNumbers(-5, -3)).toBe(-2);
});

test("should return the correct subtraction when first number is negative and second is positive", () => {
  expect(subtractNumbers(-5, 3)).toBe(-8);
});

test("should return the correct subtraction when first number is positive and second is negative", () => {
  expect(subtractNumbers(5, -3)).toBe(8);
});

test("should return 0 when both numbers are the same", () => {
  expect(subtractNumbers(5, 5)).toBe(0);
});

test("should return the first number when the second number is 0", () => {
  expect(subtractNumbers(5, 0)).toBe(5);
});

test("should return the negative of the second number when the first number is 0", () => {
  expect(subtractNumbers(0, 5)).toBe(-5);
});
