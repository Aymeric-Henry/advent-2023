import { describe, expect, test } from '@jest/globals';
import { exploreTree, exploreTreeFromFilename, exploreTreeFromFilenamePart2, exploreTreePart2 } from '.';

describe('Test recursion to find number', () => {
  test('Check for first example', () => {
    expect(exploreTree([
      ["AAA", "BBB", "CCC"],
      ["BBB", "DDD", "EEE"],
      ["CCC", "ZZZ", "GGG"],
      ["DDD", "DDD", "DDD"],
      ["EEE", "EEE", "EEE"],
      ["GGG", "GGG", "GGG"],
      ["ZZZ", "ZZZ", "ZZZ"],
    ], [1, 0])).toBe(2);
  });
  test('Check for test example', () => {
    expect(exploreTree([
      ["AAA", "BBB", "BBB"],
      ["BBB", "AAA", "ZZZ"],
      ["ZZZ", "ZZZ", "ZZZ"]], [0, 0, 1])).toBe(6);
  });

});

describe("Test day 8 from a filename ", () => {
  test("check the test file", async () => {
    expect(await exploreTreeFromFilename(
      "./day8/test.txt"
    )).toBe(2)
  })
  test("check the data file", async () => {
    expect(await exploreTreeFromFilename(
      "./day8/data.txt"
    )).toBe(20513)
  })

})

// PART 2
describe('Test recursion for part 2', () => {
  test('Check for test example', () => {
    expect(exploreTreePart2([
      ["11A", "11B", "XXX"],
      ["11B", "XXX", "11Z"],
      ["11Z", "11B", "XXX"],
      ["22A", "22B", "XXX"],
      ["22B", "22C", "22C"],
      ["22C", "22Z", "22Z"],
      ["22Z", "22B", "22B"],
      ["XXX", "XXX", "XXX"],
    ], [0, 1])).toBe(6);
  });

});


describe("Test day8 part 2 from a filename ", () => {
  test("check the data file", async () => {
    expect(await exploreTreeFromFilenamePart2(
      "./day8/data.txt"
    )).toBe(15995167053923)
  })

})


