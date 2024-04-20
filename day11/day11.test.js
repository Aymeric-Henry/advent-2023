import { describe, expect, test } from '@jest/globals';
import { getDistanceBetweenPair, getPairListOfStars, getStarsPosistion, solveDay11, solveDay11Part2 } from '.';

describe('Extact star localization', () => {
  test('Test for the first example', () => {
    expect(getStarsPosistion([
      [".", ".", ".", "#", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", "#", ".", "."],
      ["#", ".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", "#", ".", ".", "."],
      [".", "#", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", ".", "#"],
      [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", "#", ".", "."],
      ["#", ".", ".", ".", "#", ".", ".", ".", ".", "."],
    ])).toEqual([
      { "x": 1, "y": 5 },
      { "x": 2, "y": 10 },
      { "x": 3, "y": 1 },
      { "x": 6, "y": 9 },
      { "x": 7, "y": 2 },
      { "x": 8, "y": 13 },
      { "x": 11, "y": 10 },
      { "x": 12, "y": 1 },
      { "x": 12, "y": 6 },
    ]);
  });
});

describe('Extact stars pairs', () => {
  test('Test for the first example', () => {
    expect(getPairListOfStars([
      [".", ".", ".", "#", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", "#", ".", "."],
      ["#", ".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", "#", ".", ".", "."],
      [".", "#", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", ".", "#"],
      [".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", "#", ".", "."],
      ["#", ".", ".", ".", "#", ".", ".", ".", ".", "."],
    ])).toEqual([
      [{ x: 1, y: 5 }, { x: 2, y: 10 }],
      [{ x: 1, y: 5 }, { x: 3, y: 1 }],
      [{ x: 1, y: 5 }, { x: 6, y: 9 }],
      [{ x: 1, y: 5 }, { x: 7, y: 2 }],
      [{ x: 1, y: 5 }, { x: 8, y: 13 }],
      [{ x: 1, y: 5 }, { x: 11, y: 10 }],
      [{ x: 1, y: 5 }, { x: 12, y: 1 }],
      [{ x: 1, y: 5 }, { x: 12, y: 6 }],
      [{ x: 2, y: 10 }, { x: 3, y: 1 }],
      [{ x: 2, y: 10 }, { x: 6, y: 9 }],
      [{ x: 2, y: 10 }, { x: 7, y: 2 }],
      [{ x: 2, y: 10 }, { x: 8, y: 13 }],
      [{ x: 2, y: 10 }, { x: 11, y: 10 }],
      [{ x: 2, y: 10 }, { x: 12, y: 1 }],
      [{ x: 2, y: 10 }, { x: 12, y: 6 }],
      [{ x: 3, y: 1 }, { x: 6, y: 9 }],
      [{ x: 3, y: 1 }, { x: 7, y: 2 }],
      [{ x: 3, y: 1 }, { x: 8, y: 13 }],
      [{ x: 3, y: 1 }, { x: 11, y: 10 }],
      [{ x: 3, y: 1 }, { x: 12, y: 1 }],
      [{ x: 3, y: 1 }, { x: 12, y: 6 }],
      [{ x: 6, y: 9 }, { x: 7, y: 2 }],
      [{ x: 6, y: 9 }, { x: 8, y: 13 }],
      [{ x: 6, y: 9 }, { x: 11, y: 10 }],
      [{ x: 6, y: 9 }, { x: 12, y: 1 }],
      [{ x: 6, y: 9 }, { x: 12, y: 6 }],
      [{ x: 7, y: 2 }, { x: 8, y: 13 }],
      [{ x: 7, y: 2 }, { x: 11, y: 10 }],
      [{ x: 7, y: 2 }, { x: 12, y: 1 }],
      [{ x: 7, y: 2 }, { x: 12, y: 6 }],
      [{ x: 8, y: 13 }, { x: 11, y: 10 }],
      [{ x: 8, y: 13 }, { x: 12, y: 1 }],
      [{ x: 8, y: 13 }, { x: 12, y: 6 }],
      [{ x: 11, y: 10 }, { x: 12, y: 1 }],
      [{ x: 11, y: 10 }, { x: 12, y: 6 }],
      [{ x: 12, y: 1 }, { x: 12, y: 6 }]
    ]);
  });
});

describe('Calculate distance between pair', () => {
  test('Test for the first example', () => {
    expect(getDistanceBetweenPair([{ x: 1, y: 5 }, { x: 11, y: 10 }])).toEqual(15);
  });
  test('Test for the second example', () => {
    expect(getDistanceBetweenPair([{ x: 3, y: 1 }, { x: 8, y: 13 }])).toEqual(17);
  });
  test('Test for the third example', () => {
    expect(getDistanceBetweenPair([{ x: 12, y: 1 }, { x: 12, y: 6 }])).toEqual(5);
  });
});

describe('Solve day 11', () => {
  test('Test for the example', async () => {
    expect(await solveDay11("./day11/test.txt")).toEqual(374);
  });
  test('Test for the data', async () => {
    expect(await solveDay11("./day11/data.txt")).toEqual(9605127);
  });

});

describe('Solve day 11 part2', () => {
  test('Test for the example', async () => {
    expect(await solveDay11Part2("./day11/test.txt", 10)).toEqual(1030);
  });
  test('Test for the example', async () => {
    expect(await solveDay11Part2("./day11/test.txt", 100)).toEqual(8410);
  });

  test('Test for the data', async () => {
    expect(await solveDay11Part2("./day11/data.txt", 1000000)).toEqual(9605127);
  });

});


