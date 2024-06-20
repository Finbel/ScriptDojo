import { expect, test } from "vitest";
import { moduloNumbers } from "./moduloNumbers";

test("returns the remainder of the division of two numbers", () => {
  const result = moduloNumbers(10, 3);
  expect(result).toBe(1);
});

test("returns 0 when the first number is divisible by the second", () => {
  const result = moduloNumbers(9, 3);
  expect(result).toBe(0);
});

test("returns NaN when the second number is 0", () => {
  const result = moduloNumbers(10, 0);
  expect(result).toBeNaN();
});

test("returns NaN when the inputs are not numbers", () => {
  const result = moduloNumbers("10", "3");
  expect(result).toBeNaN();
});
