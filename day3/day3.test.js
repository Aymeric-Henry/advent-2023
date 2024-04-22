import { describe, expect, test } from '@jest/globals';
import { checkForSchematic, checkForSchematicPart2, exploreIndexForNumber, getGamesFromFiles, getGamesFromFilesPart2, getSpecialCharactersListIndex } from '.';

describe('Test recursion to find number', () => {
  test('Check for a number', () => {
    expect(exploreIndexForNumber("..2..", 2)).toBe(2);
  });
  test('Check for a number and recursion right', () => {
    expect(exploreIndexForNumber("..212..", 2)).toBe(212);
  });

  test('Check for a number and recursion left', () => {
    expect(exploreIndexForNumber("..112..", 2)).toBe(112);
  });

  test('Check for a number and recursion both sied', () => {
    expect(exploreIndexForNumber("51233", 3)).toBe(51233);
  });

  test('Check for a number and not found', () => {
    expect(exploreIndexForNumber("....", 3)).toBe(0);
  });
});

describe('Test pattern matching of special characters', () => {
  test('Check for a *', () => {
    expect(getSpecialCharactersListIndex("..2*.")).toEqual([3]);
  });
  test('Check for a &', () => {
    expect(getSpecialCharactersListIndex("..2&.")).toEqual([3]);
  });
  test('Check for a #', () => {
    expect(getSpecialCharactersListIndex("..2#.")).toEqual([3]);
  });
  test('Check for a the test data', () => {
    expect(getSpecialCharactersListIndex(`467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..
`)).toEqual([14, 39, 47, 60, 91, 93]);
  });
});


describe('Test calculation of part', () => {
  test('Check for the test data', () => {
    expect(checkForSchematic(`467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..
`)).toBe(4361);
  });
  test('Check edge case', () => {
    expect(checkForSchematic(`467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.592.
......755.
...$.*....
.664.598..
`)).toBe(4361 + 592);
  });

});




// PART 2
describe('Test calculation of part 2', () => {
  test('Check for the test data', () => {
    expect(checkForSchematicPart2(`467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`)).toBe(467835);
  });
});

