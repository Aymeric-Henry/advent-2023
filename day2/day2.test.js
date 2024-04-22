import { describe, expect, test } from '@jest/globals';
import { checkGame, checkAllGames, checkGamesFromFile, checkGamePart2, checkAllGamesPart2, checkGamesFromFilePart2 } from './index';

describe('Test validy of one draw ', () => {
  test('Check for a valid game', () => {
    expect(checkGame([12, 13, 14], [
      [0, 4, 3],
      [1, 2, 6],
      [0, 2, 0]
    ])).toBe(true);
  });

  test('Check for a wrong game', () => {
    expect(checkGame([12, 13, 14],
      [[20, 8, 6], [0, 13, 0], [1, 0, 0]],
    )).toBe(false);
  });
});

describe("Test validity for multiple games", () => {
  test('Check for a full game', () => {
    expect(checkAllGames([12, 13, 14],
      [
        [[4, 0, 3], [0, 2, 6], [0, 0, 0]],
        [[0, 2, 1], [1, 0, 0], [0, 1, 1]],
        [[20, 8, 6], [0, 13, 0], [1, 0, 0]],
        [[3, 1, 6], [0, 0, 0], [14, 3, 15]],
        [[0, 3, 0], [1, 0, 2]]
      ]
    )).toBe(8)
  })
})

describe("Test validity from a filename", () => {
  test("check the test file", async () => {

    expect(await checkGamesFromFile([12, 13, 14],
      "./day2/test1.txt"
    )).toBe(8)
  })


})


describe('Test validy of one draw part2 ', () => {
  test('Check for a game', () => {
    expect(checkGamePart2([[4, 0, 3], [1, 2, 6], [0, 2, 0]])).toBe(48);
  });

  test('Check for a game', () => {
    expect(checkGamePart2([[0, 2, 1], [1, 3, 4], [0, 1, 1]])).toBe(12);
  });
});

describe("Test validy for one entire game", () => {
  test("Check for the example", () => {
    expect(checkAllGamesPart2([
      [[4, 0, 3], [1, 2, 6], [0, 2, 0]],
      [[0, 2, 1], [1, 3, 4], [0, 1, 1]],
      [[20, 8, 6], [4, 13, 5], [1, 5, 0]],
      [[3, 1, 6], [6, 3, 0], [14, 3, 15]],
      [[6, 3, 1], [1, 2, 2]]
    ])).toBe(2286)
  })
})

describe("Test validity from a filename part 2", () => {
  test("check the test file", async () => {

    expect(await checkGamesFromFilePart2(
      "./day2/test1.txt"
    )).toBe(2286)
  })

})

