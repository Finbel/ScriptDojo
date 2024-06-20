import { expect, test } from "vitest";
import { addNumbers } from "./addNumbers";

test("should return the sum of two numbers", () => {
  expect(addNumbers(1, 2)).toBe(3);
  expect(addNumbers(-1, 2)).toBe(1);
  expect(addNumbers(0, 0)).toBe(0);
});
