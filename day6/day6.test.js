import { describe, expect, test } from '@jest/globals';
import { computeGames, getNumberOfPossibleRecord } from '.';

describe('Test the number of possible record', () => {
  test('Check for firstt example', () => {
    expect(getNumberOfPossibleRecord(7, 9)).toBe(4);
  });

  test('Check for secondth example', () => {
    expect(getNumberOfPossibleRecord(15, 40)).toBe(8);
  });

  test('Check for thrid example', () => {
    expect(getNumberOfPossibleRecord(30, 200)).toBe(9);
  });

  test('Check for thrid example', () => {

    expect(getNumberOfPossibleRecord(62649190, 553101014731074)).toBe(41382569);
  });

});

describe('Test for a all game', () => {
  test('Check example', () => {
    expect(computeGames([[7, 9], [15, 40], [30, 200]])).toBe(288);
  });
  test('Check test', () => {
    expect(computeGames([[62, 553], [64, 1010], [91, 1473], [90, 1074]])).toBe(840336);
  });

});

