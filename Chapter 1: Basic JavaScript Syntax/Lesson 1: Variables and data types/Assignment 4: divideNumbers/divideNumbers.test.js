import { expect, test } from "vitest";
import { divideNumbers } from "./divideNumbers";

test("divides 10 by 2 to equal 5", () => {
  expect(divideNumbers(10, 2)).toBe(5);
});

test("divides 9 by 3 to equal 3", () => {
  expect(divideNumbers(9, 3)).toBe(3);
});

test("divides 5 by 0 to equal Infinity", () => {
  expect(divideNumbers(5, 0)).toBe(Infinity);
});

test("divides 0 by 5 to equal 0", () => {
  expect(divideNumbers(0, 5)).toBe(0);
});

test("returns NaN when non-numeric strings are input", () => {
  expect(divideNumbers("a", "b")).toBeNaN();
});
