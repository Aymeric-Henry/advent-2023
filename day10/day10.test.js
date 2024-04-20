import { describe, expect, test } from '@jest/globals';
import { getAreaOfArray, getMainPath, solveDay10, solveDay10Part2, solveLongestNodeOnPath } from "."

describe('Test the resolve of a path', () => {
  test('Check for first example', () => {
    expect(getMainPath(
      [
        [".", ".", ".", ".", "."],
        [".", "S", "-", "7", "."],
        [".", "|", ".", "|", "."],
        [".", "L", "-", "J", "."],
        [".", ".", ".", ".", "."],
      ]
    )).toEqual(
      [
        { "x": 1, "y": 1 },
        { "x": 2, "y": 1 },
        { "x": 3, "y": 1 },
        { "x": 3, "y": 2 },
        { "x": 3, "y": 3 },
        { "x": 2, "y": 3 },
        { "x": 1, "y": 3 },
        { "x": 1, "y": 2 }
      ]
    );
  });

  test('Check for second example', () => {
    expect(getMainPath(
      [
        [".", ".", ".", ".", "."],
        [".", "F", "-", "7", "."],
        [".", "|", ".", "|", "."],
        [".", "L", "-", "S", "."],
        [".", ".", ".", ".", "."],
      ]
    )).toEqual(
      [
        { "x": 3, "y": 3 },
        { "x": 2, "y": 3 },
        { "x": 1, "y": 3 },
        { "x": 1, "y": 2 },
        { "x": 1, "y": 1 },
        { "x": 2, "y": 1 },
        { "x": 3, "y": 1 },
        { "x": 3, "y": 2 },
      ]
    );
  });
});

describe('Test resolve of furthest node', () => {
  test('Check for first example', () => {
    expect(solveLongestNodeOnPath(
      [
        [".", ".", ".", ".", "."],
        [".", "S", "-", "7", "."],
        [".", "|", ".", "|", "."],
        [".", "L", "-", "J", "."],
        [".", ".", ".", ".", "."],
      ]
    )).toEqual(
      4
    );
  })
  test('Check for second example', () => {
    expect(solveLongestNodeOnPath(
      [
        [".", ".", "F", "7", "."],
        [".", "F", "J", "|", "."],
        ["S", "J", ".", "L", "7"],
        ["|", "F", "-", "-", "J"],
        ["L", "J", ".", ".", "."],]
    )).toEqual(
      8
    );
  })

});

describe('Test resolve of furthest node filename', () => {
  test('Check for second example', async () => {
    expect(await solveDay10("./day10/test.txt")).toEqual(
      8
    );
  })

});

describe('Test resolve of furthest node filename', () => {
  test('Check for second example', async () => {
    expect(await solveDay10("./day10/data.txt")).toEqual(
      6738
    );
  })
});

describe('Test resolve of area', () => {
  test('Check for first example', () => {
    expect(getAreaOfArray(
      [
        [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", "S", "-", "-", "-", "-", "-", "-", "-", "7", "."],
        [".", "|", "F", "-", "-", "-", "-", "-", "7", "|", "."],
        [".", "|", "|", ".", ".", ".", ".", ".", "|", "|", "."],
        [".", "|", "|", ".", ".", ".", ".", ".", "|", "|", "."],
        [".", "|", "L", "-", "7", "V", "F", "-", "J", "|", "."],
        [".", "|", "I", "I", "|", "X", "|", "I", "I", "|", "."],
        [".", "L", "-", "-", "J", "Y", "L", "-", "-", "J", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
      ]
    )).toEqual(
      4
    );
  })
  test('Check for first example', () => {
    expect(getAreaOfArray(
      [
        ['O', 'F', '-', '-', '-', '-', '7', 'F', '7', 'F', '7', 'F', '7', 'F', '-', '7', 'O', 'O', 'O', 'O'],
        ['O', '|', 'F', '-', '-', '7', '|', '|', '|', '|', '|', '|', '|', '|', 'F', 'J', 'O', 'O', 'O', 'O'],
        ['O', '|', '|', 'O', 'F', 'J', '|', '|', '|', '|', '|', '|', '|', '|', 'L', '7', 'O', 'O', 'O', 'O'],
        ['F', 'J', 'L', '7', 'L', '7', 'L', 'J', 'L', 'J', '|', '|', 'L', 'J', 'I', 'L', '-', '7', 'O', 'O'],
        ['L', '-', '-', 'J', 'O', 'L', '7', 'I', 'I', 'I', 'L', 'J', 'S', '7', 'F', '-', '7', 'L', '7', 'O'],
        ['O', 'O', 'O', 'O', 'F', '-', 'J', 'I', 'I', 'F', '7', 'F', 'J', '|', 'L', '7', 'L', '7', 'L', '7'],
        ['O', 'O', 'O', 'O', 'L', '7', 'I', 'F', '7', '|', '|', 'L', '7', '|', 'I', 'L', '7', 'L', '7', '|'],
        ['O', 'O', 'O', 'O', 'O', '|', 'F', 'J', 'L', 'J', '|', 'F', 'J', '|', 'F', '7', '|', 'O', 'L', 'J'],
        ['O', 'O', 'O', 'O', 'F', 'J', 'L', '-', '7', 'O', '|', '|', 'O', '|', '|', '|', '|', 'O', 'O', 'O'],
        ['O', 'O', 'O', 'O', 'L', '-', '-', '-', 'J', 'O', 'L', 'J', 'O', 'L', 'J', 'L', 'J', 'O', 'O', 'O'],
      ])).toEqual(
        8
      );
  })

});

describe('Test resolve the area from filename', () => {
  test('Check for second example', async () => {
    expect(await solveDay10Part2("./day10/data.txt")).toEqual(
      6738
    );
  })
});

