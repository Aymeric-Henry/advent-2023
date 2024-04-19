import { describe, expect, test } from '@jest/globals';
import { createDownArray, getOasisPrediction, getOasisPredictionPart2, getSumOfOasisPrediction, solveDay9, solveDay9Part2 } from '.';

describe('Test create down array', () => {
  test('Check for first example', () => {
    expect(createDownArray([0, 3, 6, 9, 12, 15])).toEqual([
      [0, 3, 6, 9, 12, 15],
      [3, 3, 3, 3, 3],
      [0, 0, 0, 0],
    ])
  })

  test('Check for second example', () => {
    expect(createDownArray([1, 3, 6, 10, 15, 21])).toEqual([
      [1, 3, 6, 10, 15, 21],
      [2, 3, 4, 5, 6,],
      [1, 1, 1, 1,],
      [0, 0, 0,]
    ])
  })

});

describe('Test predicate on one input', () => {
  test('Check for first example', () => {
    expect(getOasisPrediction([0, 3, 6, 9, 12, 15])).toEqual(18)
  })

  test('Check for second example', () => {
    expect(getOasisPrediction([1, 3, 6, 10, 15, 21])).toEqual(28)
  })


  test('Check for second example', () => {
    expect(getOasisPrediction([10, 13, 16, 21, 30, 45])).toEqual(68)
  })
});
describe('Test predicate on array of input', () => {

  test('Check for first example', () => {
    expect(getSumOfOasisPrediction([
      [0, 3, 6, 9, 12, 15],
      [1, 3, 6, 10, 15, 21],
      [10, 13, 16, 21, 30, 45]
    ])).toEqual(114)
  })
});


describe("Test day 9 from a filename ", () => {
  test("check the test file", async () => {
    expect(await solveDay9(
      "./day9/test.txt"
    )).toBe(114)
  })
  test("check the data file", async () => {
    expect(await solveDay9(
      "./day9/data.txt"
    )).toBe(2101499000)
  })

})

describe('Test predicate on one input part 2', () => {
  test('Check for first example', () => {
    expect(getOasisPredictionPart2([0, 3, 6, 9, 12, 15])).toEqual(-3)
  })

  test('Check for second example', () => {
    expect(getOasisPredictionPart2([1, 3, 6, 10, 15, 21])).toEqual(0)
  })

  test('Check for third example', () => {
    expect(getOasisPredictionPart2([10,  13,  16,  21,  30,  45])).toEqual(5)
  })
});


describe("Test day 9 from a filename part 2", () => {
  test("check the test file", async () => {
    expect(await solveDay9Part2(
      "./day9/test.txt"
    )).toBe(2)
  })
  test("check the data file", async () => {
    expect(await solveDay9Part2(
      "./day9/data.txt"
    )).toBe(1089)
  })

})

