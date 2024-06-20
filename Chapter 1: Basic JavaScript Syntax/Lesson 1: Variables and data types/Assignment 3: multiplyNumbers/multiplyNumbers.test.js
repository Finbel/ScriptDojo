import { expect, test } from "vitest";
import { multiplyNumbers } from "./multiplyNumbers";

test("multiplies 2 and 3 to equal 6", () => {
  expect(multiplyNumbers(2, 3)).toBe(6);
});

test("multiplies 5 and 5 to equal 25", () => {
  expect(multiplyNumbers(5, 5)).toBe(25);
});

test("multiplies 0 and 5 to equal 0", () => {
  expect(multiplyNumbers(0, 5)).toBe(0);
});

test("multiplies -2 and 3 to equal -6", () => {
  expect(multiplyNumbers(-2, 3)).toBe(-6);
});
