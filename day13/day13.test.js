import { describe, expect, test } from '@jest/globals';
import { fixSmudge, resolveMatrix, solveDay13, solveDay13Part2 } from "."

describe('Extact the mirror positions', () => {
  test('Vertical mirror', () => {
    expect(resolveMatrix([
      ["#", ".", "#", "#", ".", ".", "#", "#", "."],
      [".", ".", "#", ".", "#", "#", ".", "#", "."],
      ["#", "#", ".", ".", ".", ".", ".", ".", "#"],
      ["#", "#", ".", ".", ".", ".", ".", ".", "#"],
      [".", ".", "#", ".", "#", "#", ".", "#", "."],
      [".", ".", "#", "#", ".", ".", "#", "#", "."],
      ["#", ".", "#", ".", "#", "#", ".", "#", "."],
    ]
    )).toEqual(5)
  });

  test('Horizontal mirror', () => {
    expect(resolveMatrix([
      ["#", ".", ".", ".", "#", "#", ".", ".", "#"],
      ["#", ".", ".", ".", ".", "#", ".", ".", "#"],
      [".", ".", "#", "#", ".", ".", "#", "#", "#"],
      ["#", "#", "#", "#", "#", ".", "#", "#", "."],
      ["#", "#", "#", "#", "#", ".", "#", "#", "."],
      [".", ".", "#", "#", ".", ".", "#", "#", "#"],
      ["#", ".", ".", ".", ".", "#", ".", ".", "#"],
    ]
    )).toEqual(400)
  });
});

describe('Solve day 13', () => {
  test('test file', async () => {
    expect(await solveDay13("./day13/test.txt")).toBe(405)
  });

});

describe('Fix smudge', () => {
  test('test example 1', () => {
    expect(fixSmudge([
      ["#", ".", "#", "#", ".", ".", "#", "#", "."],
      [".", ".", "#", ".", "#", "#", ".", "#", "."],
      ["#", "#", ".", ".", ".", ".", ".", ".", "#"],
      ["#", "#", ".", ".", ".", ".", ".", ".", "#"],
      [".", ".", "#", ".", "#", "#", ".", "#", "."],
      [".", ".", "#", "#", ".", ".", "#", "#", "."],
      ["#", ".", "#", ".", "#", "#", ".", "#", "."],
    ]
    )).toEqual(300)
  });
  test('test example 2', () => {
    expect(fixSmudge([
      ["#", ".", ".", ".", "#", "#", ".", ".", "#"],
      ["#", ".", ".", ".", ".", "#", ".", ".", "#"],
      [".", ".", "#", "#", ".", ".", "#", "#", "#"],
      ["#", "#", "#", "#", "#", ".", "#", "#", "."],
      ["#", "#", "#", "#", "#", ".", "#", "#", "."],
      [".", ".", "#", "#", ".", ".", "#", "#", "#"],
      ["#", ".", ".", ".", ".", "#", ".", ".", "#"],
    ]
    )).toEqual(100)
  });
  test('test not fixed', () => {
    expect(fixSmudge
      (

        [
          ['#', '#', '.', '#', '#', '.', '.', '.', '.', '.', '.'],
          ['#', '#', '.', '.', '#', '.', '#', '.', '.', '#', '.'],
          ['.', '.', '#', '.', '.', '#', '.', '#', '#', '.', '#'],
          ['#', '#', '#', '.', '#', '#', '.', '#', '.', '.', '#'],
          ['.', '.', '.', '.', '#', '.', '#', '.', '.', '#', '.'],
          ['#', '#', '#', '#', '.', '.', '.', '.', '.', '.', '.'],
          ['.', '.', '#', '.', '.', '.', '#', '#', '#', '#', '.'],
        ]
      )).toEqual(8)
  })
});

describe('Solve day 13 part 2', () => {
  test('Vertical mirror', async () => {
    expect(await solveDay13Part2("./day13/test.txt")).toBe(400)
  });
});

