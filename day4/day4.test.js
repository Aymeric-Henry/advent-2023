import { describe, expect, test } from '@jest/globals';
import { computeDay4, computeDay4Part2, getValueOfCard, getValuesOfCards, getValuesOfCardsPart2, parseFileDay4 } from '.';

describe('Test a draw of one card', () => {
  test('Check for one card at 8 point', () => {
    expect(getValueOfCard([41, 48, 83, 86, 17], [83, 86, 6, 31, 17, 9, 48, 53])).toBe(8);
  });

  test('Check for one card at 2 point', () => {
    expect(getValueOfCard(
      [13, 32, 20, 16, 61], [61, 30, 68, 82, 17, 32, 24, 19]
    )).toBe(2);
  });

  test('Check for one card at 0 point', () => {
    expect(getValueOfCard(
      [87, 83, 26, 28, 32], [88, 30, 70, 12, 93, 22, 82, 36]
    )).toBe(0);
  });
});


describe("Test the file", () => {
  test("check the compute of a game", () => {
    expect(getValuesOfCards([
      [[41, 48, 83, 86, 17], [83, 86, 6, 31, 17, 9, 48, 53]],
      [[13, 32, 20, 16, 61], [61, 30, 68, 82, 17, 32, 24, 19]],
      [[1, 21, 53, 59, 44], [69, 82, 63, 72, 16, 21, 14, 1]],
      [[41, 92, 73, 84, 69], [59, 84, 76, 51, 58, 5, 54, 83]],
      [[87, 83, 26, 28, 32], [88, 30, 70, 12, 93, 22, 82, 36]],
      [[31, 18, 13, 56, 72], [74, 77, 10, 23, 35, 67, 36, 11]],
    ])).toEqual(13)
  })
})


describe("Test the file parser", () => {
  test("check the parsing of the file", async () => {
    expect(await parseFileDay4(
      "./day4/test.txt"
    )).toEqual([
      [[41, 48, 83, 86, 17], [83, 86, 6, 31, 17, 9, 48, 53]],
      [[13, 32, 20, 16, 61], [61, 30, 68, 82, 17, 32, 24, 19]],
      [[1, 21, 53, 59, 44], [69, 82, 63, 72, 16, 21, 14, 1]],
      [[41, 92, 73, 84, 69], [59, 84, 76, 51, 58, 5, 54, 83]],
      [[87, 83, 26, 28, 32], [88, 30, 70, 12, 93, 22, 82, 36]],
      [[31, 18, 13, 56, 72], [74, 77, 10, 23, 35, 67, 36, 11]],
    ])
  })
})

describe("Compute the file", () => {
  test("Check for the result", async () => {
    expect(await computeDay4(
      "./day4/data.txt"
    )).toEqual(21485)
  })
})


// PART 2
describe("Test the part 2 game", () => {
  test("check the compute of a game", () => {
    expect(getValuesOfCardsPart2([
      [[41, 48, 83, 86, 17], [83, 86, 6, 31, 17, 9, 48, 53]],
      [[13, 32, 20, 16, 61], [61, 30, 68, 82, 17, 32, 24, 19]],
      [[1, 21, 53, 59, 44], [69, 82, 63, 72, 16, 21, 14, 1]],
      [[41, 92, 73, 84, 69], [59, 84, 76, 51, 58, 5, 54, 83]],
      [[87, 83, 26, 28, 32], [88, 30, 70, 12, 93, 22, 82, 36]],
      [[31, 18, 13, 56, 72], [74, 77, 10, 23, 35, 67, 36, 11]],
    ], 0)).toEqual(30)
  })
})


describe("Compute the file part 2", () => {
  test("Check for the result", async () => {
    expect(await computeDay4Part2(
      "./day4/data.txt"
    )).toEqual(11024379)
  })
})


