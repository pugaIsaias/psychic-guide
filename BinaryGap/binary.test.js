const { expect, test } = require("@jest/globals");
const solution = require("./binary");

test("N=1041 gap to be 5", () => {
  expect(solution(1041)).toBe(5);
});

test("N=529 gap to be 4", () => {
  expect(solution(529)).toBe(4);
});

test("N=20 gap to be 1", () => {
  expect(solution(20)).toBe(1);
});

test("N= 15 gap to be 0", () => {
  expect(solution(15)).toBe(0);
});

test("N=32 gap to be 0", () => {
  expect(solution(32)).toBe(0);
});
