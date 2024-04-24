import { describe, expect, test } from '@jest/globals';
import { caculateLensesPower, generateLensesBox, hash, solveDay15, solveDay15Part2, sumOfHash } from '.';

describe('Test hash function', () => {
  test('Check for a number', () => {
    expect(hash("HASH")).toBe(52);
  });
});

describe("Sum of hash", () => {
  test("Sum of hash", () => {
    expect(sumOfHash("rn=1,cm-,qp=3,cm=2,qp-,pc=4,ot=9,ab=5,pc-,pc=6,ot=7".split(","))).toBe(1320)
  })
})

describe("Solve day 15", () => {
  test("Sum of hash", async () => {
    expect(await solveDay15("./day15/test.txt")).toBe(1320)
  })
})

describe("Generate lenses", () => {
  test("Generate lenses", () => {
    const arr = new Array(256).fill([])
    arr[0] = [["rn", 1], ["cm", 2]]
    arr[3] = [["ot", 7], ["ab", 5], ["pc", 6]]
    expect(generateLensesBox("rn=1,cm-,qp=3,cm=2,qp-,pc=4,ot=9,ab=5,pc-,pc=6,ot=7".split(","))).toEqual(arr)
  })
})

describe("Calculate lenses", () => {
  test("Generate lenses", () => {
    const arr = new Array(256).fill([])
    arr[0] = [["rn", 1], ["cm", 2]]
    arr[3] = [["ot", 7], ["ab", 5], ["pc", 6]]
    expect(caculateLensesPower(arr)).toEqual(145)
  })
})

describe("Solve day 15 Part 2", () => {
  test("Solve est", async () => {
    expect(await solveDay15Part2("./day15/test.txt")).toBe(145)
  })
})

