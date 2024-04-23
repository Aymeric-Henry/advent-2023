import { describe, expect, test } from '@jest/globals';
import { checkPermutation, findAllPossiblePermutation, solveDay12, solveDay12Part2 } from './indeX';

// describe('Test the resolve of a path', () => {
//   test('Check for first example', () => {
//     expect(findAllPossiblePermutation([
//       ["?", "?", "?", ".", "#", "#", "#"],
//       [1, 1, 3],
//     ])).toEqual(1);
//   });
//   test('Check for second example', () => {
//     expect(findAllPossiblePermutation([
//       [".", "?", "?", ".", ".", "?", "?", ".", ".", ".", "?", "#", "#"],
//       [1, 1, 3],
//     ])).toEqual(4);
//   });
//   test('Check for third example', () => {
//     expect(findAllPossiblePermutation(
//       [["?", "#", "?", "#", "?", "#", "?", "#", "?", "#", "?", "#", "?", "#", "?"], [1, 3, 1, 6]]
//     )).toEqual(1);
//   });
//   test('Check for fourth example', () => {
//     expect(findAllPossiblePermutation(
//       [["?", "?", "?", "?", ".", "#", ".", ".", ".", "#", ".", ".", "."], [4, 1, 1]]
//     )).toEqual(1);
//   });
//
//   test('Check for fiveth example', () => {
//     expect(findAllPossiblePermutation(
//       [["?", "?", "?", "?", ".", "#", "#", "#", "#", "#", "#", ".", ".", "#", "#", "#", "#", "#", "."], [1, 6, 5]]
//     )).toEqual(4);
//   });
//
//   test('Check for sixth example', () => {
//     expect(findAllPossiblePermutation(
//       [["?", "#", "#", "#", "?", "?", "?", "?", "?", "?", "?", "?"], [3, 2, 1]]
//     )).toEqual(10);
//   });
//   test("Bug in data", () => {
//     expect(findAllPossiblePermutation([
//       [
//         '?', '?', '#', '?', '?',
//         '?', '#', '?', '?', '.',
//         '#', '.', '?', '#', '?',
//         '?', '#', '?', '?', '?'
//       ], [3, 2, 1, 8]])).toEqual(5)
//   })
// })
//
//
// describe("check Permutation", () => {
//   test("check for example", () => {
//     expect(checkPermutation([
//       '.', '?', '?', '?', '.',
//       '#', '#', '#', '#', '#',
//       '#', '.', '.', '#', '#',
//       '#', '#', '#', '.'
//     ], [1, 6, 5], 12)).toBe(true)
//   })
//   test("check for anotehr example", () => {
//     expect(checkPermutation([
//       '.', '#', '#', '#',
//       '.', '.', '#', '.',
//       '.', '#', '.', '#'
//     ], [3, 2, 1], 6)).toBe(false)
//
//   })
//
//   test("check for trickiest example ", () => {
//     expect(checkPermutation(
//       ["?", "#", "?", "#", "?", "#", "?", "#", "?", "#", "?", "#", "?", "#", "?"], [1, 3, 1, 6], 11
//     )).toBe(true)
//   })
//
//   test("check for example 2", () => {
//     expect(checkPermutation(
//       [
//         '.', '#', '.', '.',
//         '.', '#', '#', '.',
//         '.', '.', '.', '#',
//         '#'
//       ], [1, 1, 3], 5)).toBe(false)
//   })
//   test("check for example 12", () => {
//     expect(checkPermutation([
//       '#', '#', '#', '?', '?',
//       '?', '#', '?', '?', '.',
//       '#', '.', '?', '#', '?',
//       '?', '#', '?', '?', '?'
//     ], [3, 2, 1, 8])).toEqual(true)
//   })
//
// })
//
// describe("Solve day 12", () => {
//   test("check for example", async () => {
//     expect(await solveDay12("./day12/test.txt")).toBe(21)
//   })
// })
//
describe("Solve day 12", () => {
  test("check for example", async () => {
    expect(await solveDay12Part2("./day12/test.txt")).toBe(525152)
  })
  test("check for data", async () => {
    expect(await solveDay12Part2("./day12/data.txt")).toBe(525152)
  })

})
