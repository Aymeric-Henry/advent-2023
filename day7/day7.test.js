import { describe, expect, test } from '@jest/globals';
import { calculateRewardCamelPoker, calculateRewardCamelPokerFromFile, calculateRewardCamelPokerFromFilePart2, calculateRewardCamelPokerPart2, getValueOfHand } from '.';
//
describe('Test recursion to find number', () => {
  test('Check orders of hand', () => {
    const handFive = getValueOfHand(["A", "A", "A", "A", "A"]);
    const handFour = getValueOfHand(["A", "A", "A", "A", "J"]);
    const handFull = getValueOfHand(["A", "A", "A", "J", "J"]);
    const handThree = getValueOfHand(["A", "A", "A", "6", "5"]);
    const handDoublePair = getValueOfHand(["A", "A", "6", "6", "5"]);
    const handPair = getValueOfHand(["A", "A", "3", "6", "5"]);
    const hand = getValueOfHand(["A", "K", "3", "6", "5"]);

    const order = handFive > handFour
      && handFour > handFull
      && handFull > handThree
      && handThree > handDoublePair
      && handDoublePair > handPair
      && handPair > hand
    expect(order).toBe(true);
  });

  test('Check for a double pair with the camel rule', () => {
    const handDoublePair = getValueOfHand(["A", "A", "6", "6", "5"])
    const handDoublePair2 = getValueOfHand(["7", "7", "A", "A", "2"])


    expect(handDoublePair > handDoublePair2).toBe(true);
  });

  test('Check for a double pair same different last', () => {
    const handDoublePair = getValueOfHand(["A", "8", "6", "6", "8"])
    const handDoublePair2 = getValueOfHand(["2", "A", "6", "6", "A"])

    expect(handDoublePair > handDoublePair2).toBe(true);
  });

});

describe('Test reward calulation', () => {
  test('Check orders of hand', () => {

    expect(calculateRewardCamelPoker([[
      ["3", "2", "T", "3", "K"], 765],
    [["T", "5", "5", "J", "5"], 684],
    [["K", "K", "6", "7", "7"], 28],
    [["K", "T", "J", "J", "T"], 220],
    [["Q", "Q", "Q", "J", "A"], 483]])).toBe(6440);
  });

});

describe("Test reward from a filename ", () => {
  test("check the test file", async () => {
    expect(await calculateRewardCamelPokerFromFile(
      "./day7/test.txt"
    )).toBe(6440)
  })
  test("check the test file", async () => {
    expect(await calculateRewardCamelPokerFromFile(
      "./day7/data.txt"
    )).toBe(250370104)
  })
})

// PART 2
//
//

describe("Test reward from a filename ", () => {
  test("check the test file", () => {
    expect(calculateRewardCamelPokerPart2(
      [["32T3K", 765],
      ["T55J5", 684],
      ["KK677", 28],
      ["KTJJT", 220],
      ["QQQJA", 483],]
    )).toBe(5905)
  })
})

describe("Test reward part 2 from a filename ", () => {
  test("check the test file", async () => {
    expect(await calculateRewardCamelPokerFromFilePart2(
      "./day7/data.txt"
    )).toBe(250370104)
  })
})

// 251505508 <<<<

