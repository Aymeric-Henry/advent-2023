import { describe, expect, test } from '@jest/globals';
import { cacluateLoad, solveDay14, solveDay14Part2, tiltCycle, tiltTheMatrix, tiltTheMatrixEast, tiltTheMatrixNorth, tiltTheMatrixSouth, tiltTheMatrixWest } from '.';

// describe("Titlt the board", () => {
//   test("tilt north", () => {
//     expect(tiltTheMatrix([
//       ["O", ".", ".", ".", ".", "#", ".", ".", ".", "."],
//       ["O", ".", "O", "O", "#", ".", ".", ".", ".", "#"],
//       [".", ".", ".", ".", ".", "#", "#", ".", ".", "."],
//       ["O", "O", ".", "#", "O", ".", ".", ".", ".", "O"],
//       [".", "O", ".", ".", ".", ".", ".", "O", "#", "."],
//       ["O", ".", "#", ".", ".", "O", ".", "#", ".", "#"],
//       [".", ".", "O", ".", ".", "#", "O", ".", ".", "O"],
//       [".", ".", ".", ".", ".", ".", ".", "O", ".", "."],
//       ["#", ".", ".", ".", ".", "#", "#", "#", ".", "."],
//       ["#", "O", "O", ".", ".", "#", ".", ".", ".", "."],
//     ])).toEqual([
//       ["O", "O", "O", "O", ".", "#", ".", "O", ".", "."],
//       ["O", "O", ".", ".", "#", ".", ".", ".", ".", "#"],
//       ["O", "O", ".", ".", "O", "#", "#", ".", ".", "O"],
//       ["O", ".", ".", "#", ".", "O", "O", ".", ".", "."],
//       [".", ".", ".", ".", ".", ".", ".", ".", "#", "."],
//       [".", ".", "#", ".", ".", ".", ".", "#", ".", "#"],
//       [".", ".", "O", ".", ".", "#", ".", "O", ".", "O"],
//       [".", ".", "O", ".", ".", ".", ".", ".", ".", "."],
//       ["#", ".", ".", ".", ".", "#", "#", "#", ".", "."],
//       ["#", ".", ".", ".", ".", "#", ".", ".", ".", "."],
//     ])
//
//   })
//
// })
// describe('Test calulcation of load', () => {
//   test('Check for a number', () => {
//     expect(cacluateLoad([
//       ["O", "O", "O", "O", ".", "#", ".", "O", ".", "."],
//       ["O", "O", ".", ".", "#", ".", ".", ".", ".", "#"],
//       ["O", "O", ".", ".", "O", "#", "#", ".", ".", "O"],
//       ["O", ".", ".", "#", ".", "O", "O", ".", ".", "."],
//       [".", ".", ".", ".", ".", ".", ".", ".", "#", "."],
//       [".", ".", "#", ".", ".", ".", ".", "#", ".", "#"],
//       [".", ".", "O", ".", ".", "#", ".", "O", ".", "O"],
//       [".", ".", "O", ".", ".", ".", ".", ".", ".", "."],
//       ["#", ".", ".", ".", ".", "#", "#", "#", ".", "."],
//       ["#", ".", ".", ".", ".", "#", ".", ".", ".", "."],
//     ])).toBe(136);
//   });
// });
//
//
// describe('Test from file', () => {
//   test('Check test data', async () => {
//     expect(await solveDay14("./day14/test.txt")).toBe(136);
//   });
//   test('Check test data', async () => {
//     expect(await solveDay14("./day14/data.txt")).toBe(136);
//   });
//
// });
//
// PART 2
//
describe("Titlt the board", () => {
  test("tilt north", () => {
    const matrix = [
      ["O", ".", ".", ".", ".", "#", ".", ".", ".", "."],
      ["O", ".", "O", "O", "#", ".", ".", ".", ".", "#"],
      [".", ".", ".", ".", ".", "#", "#", ".", ".", "."],
      ["O", "O", ".", "#", "O", ".", ".", ".", ".", "O"],
      [".", "O", ".", ".", ".", ".", ".", "O", "#", "."],
      ["O", ".", "#", ".", ".", "O", ".", "#", ".", "#"],
      [".", ".", "O", ".", ".", "#", "O", ".", ".", "O"],
      [".", ".", ".", ".", ".", ".", ".", "O", ".", "."],
      ["#", ".", ".", ".", ".", "#", "#", "#", ".", "."],
      ["#", "O", "O", ".", ".", "#", ".", ".", ".", "."],
    ]
    tiltTheMatrixNorth(matrix)
    expect(matrix).toEqual([
      ["O", "O", "O", "O", ".", "#", ".", "O", ".", "."],
      ["O", "O", ".", ".", "#", ".", ".", ".", ".", "#"],
      ["O", "O", ".", ".", "O", "#", "#", ".", ".", "O"],
      ["O", ".", ".", "#", ".", "O", "O", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", ".", "#", "."],
      [".", ".", "#", ".", ".", ".", ".", "#", ".", "#"],
      [".", ".", "O", ".", ".", "#", ".", "O", ".", "O"],
      [".", ".", "O", ".", ".", ".", ".", ".", ".", "."],
      ["#", ".", ".", ".", ".", "#", "#", "#", ".", "."],
      ["#", ".", ".", ".", ".", "#", ".", ".", ".", "."],
    ])

  })
  test("tilt south", () => {
    const matrix = [
      ["O", ".", ".", ".", ".", "#", ".", ".", ".", "."],
      ["O", ".", "O", "O", "#", ".", ".", ".", ".", "#"],
      [".", ".", ".", ".", ".", "#", "#", ".", ".", "."],
      ["O", "O", ".", "#", "O", ".", ".", ".", ".", "O"],
      [".", "O", ".", ".", ".", ".", ".", "O", "#", "."],
      ["O", ".", "#", ".", ".", "O", ".", "#", ".", "#"],
      [".", ".", "O", ".", ".", "#", "O", ".", ".", "O"],
      [".", ".", ".", ".", ".", ".", ".", "O", ".", "."],
      ["#", ".", ".", ".", ".", "#", "#", "#", ".", "."],
      ["#", "O", "O", ".", ".", "#", ".", ".", ".", "."],
    ]
    tiltTheMatrixSouth(matrix)
    expect(matrix).toEqual([
      [".", ".", ".", ".", ".", "#", ".", ".", ".", "."],
      [".", ".", ".", ".", "#", ".", ".", ".", ".", "#"],
      [".", ".", ".", "O", ".", "#", "#", ".", ".", "."],
      [".", ".", ".", "#", ".", ".", ".", ".", ".", "."],
      ["O", ".", "O", ".", ".", ".", ".", "O", "#", "O"],
      ["O", ".", "#", ".", ".", "O", ".", "#", ".", "#"],
      ["O", ".", ".", ".", ".", "#", ".", ".", ".", "."],
      ["O", "O", ".", ".", ".", ".", "O", "O", ".", "."],
      ["#", "O", "O", ".", ".", "#", "#", "#", ".", "."],
      ["#", "O", "O", ".", "O", "#", ".", ".", ".", "O"],
    ])

  })
  test("tilt west", () => {
    const matrix = [
      ["O", ".", ".", ".", ".", "#", ".", ".", ".", "."],
      ["O", ".", "O", "O", "#", ".", ".", ".", ".", "#"],
      [".", ".", ".", ".", ".", "#", "#", ".", ".", "."],
      ["O", "O", ".", "#", "O", ".", ".", ".", ".", "O"],
      [".", "O", ".", ".", ".", ".", ".", "O", "#", "."],
      ["O", ".", "#", ".", ".", "O", ".", "#", ".", "#"],
      [".", ".", "O", ".", ".", "#", "O", ".", ".", "O"],
      [".", ".", ".", ".", ".", ".", ".", "O", ".", "."],
      ["#", ".", ".", ".", ".", "#", "#", "#", ".", "."],
      ["#", "O", "O", ".", ".", "#", ".", ".", ".", "."],
    ]
    tiltTheMatrixWest(matrix)
    expect(matrix).toEqual([
      ["O", ".", ".", ".", ".", "#", ".", ".", ".", "."],
      ["O", "O", "O", ".", "#", ".", ".", ".", ".", "#"],
      [".", ".", ".", ".", ".", "#", "#", ".", ".", "."],
      ["O", "O", ".", "#", "O", "O", ".", ".", ".", "."],
      ["O", "O", ".", ".", ".", ".", ".", ".", "#", "."],
      ["O", ".", "#", "O", ".", ".", ".", "#", ".", "#"],
      ["O", ".", ".", ".", ".", "#", "O", "O", ".", "."],
      ["O", ".", ".", ".", ".", ".", ".", ".", ".", "."],
      ["#", ".", ".", ".", ".", "#", "#", "#", ".", "."],
      ["#", "O", "O", ".", ".", "#", ".", ".", ".", "."],
    ])

  })
  test("tilt east", () => {
    const matrix = [
      ["O", ".", ".", ".", ".", "#", ".", ".", ".", "."],
      ["O", ".", "O", "O", "#", ".", ".", ".", ".", "#"],
      [".", ".", ".", ".", ".", "#", "#", ".", ".", "."],
      ["O", "O", ".", "#", "O", ".", ".", ".", ".", "O"],
      [".", "O", ".", ".", ".", ".", ".", "O", "#", "."],
      ["O", ".", "#", ".", ".", "O", ".", "#", ".", "#"],
      [".", ".", "O", ".", ".", "#", "O", ".", ".", "O"],
      [".", ".", ".", ".", ".", ".", ".", "O", ".", "."],
      ["#", ".", ".", ".", ".", "#", "#", "#", ".", "."],
      ["#", "O", "O", ".", ".", "#", ".", ".", ".", "."],
    ]
    tiltTheMatrixEast(matrix)
    expect(matrix).toEqual([
      [".", ".", ".", ".", "O", "#", ".", ".", ".", "."],
      [".", "O", "O", "O", "#", ".", ".", ".", ".", "#"],
      [".", ".", ".", ".", ".", "#", "#", ".", ".", "."],
      [".", "O", "O", "#", ".", ".", ".", ".", "O", "O"],
      [".", ".", ".", ".", ".", ".", "O", "O", "#", "."],
      [".", "O", "#", ".", ".", ".", "O", "#", ".", "#"],
      [".", ".", ".", ".", "O", "#", ".", ".", "O", "O"],
      [".", ".", ".", ".", ".", ".", ".", ".", ".", "O"],
      ["#", ".", ".", ".", ".", "#", "#", "#", ".", "."],
      ["#", ".", ".", "O", "O", "#", ".", ".", ".", "."],
    ])
  })
})

describe("Titlt the board n cycle", () => {
  test("tilt 1 cycle", () => {
    const matrix = [
      ["O", ".", ".", ".", ".", "#", ".", ".", ".", "."],
      ["O", ".", "O", "O", "#", ".", ".", ".", ".", "#"],
      [".", ".", ".", ".", ".", "#", "#", ".", ".", "."],
      ["O", "O", ".", "#", "O", ".", ".", ".", ".", "O"],
      [".", "O", ".", ".", ".", ".", ".", "O", "#", "."],
      ["O", ".", "#", ".", ".", "O", ".", "#", ".", "#"],
      [".", ".", "O", ".", ".", "#", "O", ".", ".", "O"],
      [".", ".", ".", ".", ".", ".", ".", "O", ".", "."],
      ["#", ".", ".", ".", ".", "#", "#", "#", ".", "."],
      ["#", "O", "O", ".", ".", "#", ".", ".", ".", "."],
    ]
    tiltCycle(matrix)
    expect(matrix).toEqual([

      [".", ".", ".", ".", ".", "#", ".", ".", ".", "."],
      [".", ".", ".", ".", "#", ".", ".", ".", "O", "#"],
      [".", ".", ".", "O", "O", "#", "#", ".", ".", "."],
      [".", "O", "O", "#", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", "O", "O", "O", "#", "."],
      [".", "O", "#", ".", ".", ".", "O", "#", ".", "#"],
      [".", ".", ".", ".", "O", "#", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", "O", "O", "O", "O"],
      ["#", ".", ".", ".", "O", "#", "#", "#", ".", "."],
      ["#", ".", ".", "O", "O", "#", ".", ".", ".", "."],
    ])

  })
  test("tilt 2 cycle", () => {
    const matrix = [
      ["O", ".", ".", ".", ".", "#", ".", ".", ".", "."],
      ["O", ".", "O", "O", "#", ".", ".", ".", ".", "#"],
      [".", ".", ".", ".", ".", "#", "#", ".", ".", "."],
      ["O", "O", ".", "#", "O", ".", ".", ".", ".", "O"],
      [".", "O", ".", ".", ".", ".", ".", "O", "#", "."],
      ["O", ".", "#", ".", ".", "O", ".", "#", ".", "#"],
      [".", ".", "O", ".", ".", "#", "O", ".", ".", "O"],
      [".", ".", ".", ".", ".", ".", ".", "O", ".", "."],
      ["#", ".", ".", ".", ".", "#", "#", "#", ".", "."],
      ["#", "O", "O", ".", ".", "#", ".", ".", ".", "."],
    ]
    tiltCycle(matrix)
    tiltCycle(matrix)
    expect(matrix).toEqual([
      [".", ".", ".", ".", ".", "#", ".", ".", ".", "."],
      [".", ".", ".", ".", "#", ".", ".", ".", "O", "#"],
      [".", ".", ".", ".", ".", "#", "#", ".", ".", "."],
      [".", ".", "O", "#", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", "O", "O", "O", "#", "."],
      [".", "O", "#", ".", ".", ".", "O", "#", ".", "#"],
      [".", ".", ".", ".", "O", "#", ".", ".", ".", "O"],
      [".", ".", ".", ".", ".", ".", ".", "O", "O", "O"],
      ["#", ".", ".", "O", "O", "#", "#", "#", ".", "."],
      ["#", ".", "O", "O", "O", "#", ".", ".", ".", "O"],
    ])

  })

  test("tilt 3 cycle", () => {
    const matrix = [
      ["O", ".", ".", ".", ".", "#", ".", ".", ".", "."],
      ["O", ".", "O", "O", "#", ".", ".", ".", ".", "#"],
      [".", ".", ".", ".", ".", "#", "#", ".", ".", "."],
      ["O", "O", ".", "#", "O", ".", ".", ".", ".", "O"],
      [".", "O", ".", ".", ".", ".", ".", "O", "#", "."],
      ["O", ".", "#", ".", ".", "O", ".", "#", ".", "#"],
      [".", ".", "O", ".", ".", "#", "O", ".", ".", "O"],
      [".", ".", ".", ".", ".", ".", ".", "O", ".", "."],
      ["#", ".", ".", ".", ".", "#", "#", "#", ".", "."],
      ["#", "O", "O", ".", ".", "#", ".", ".", ".", "."],
    ]
    tiltCycle(matrix)
    tiltCycle(matrix)
    tiltCycle(matrix)
    expect(matrix).toEqual([
      [".", ".", ".", ".", ".", "#", ".", ".", ".", "."],
      [".", ".", ".", ".", "#", ".", ".", ".", "O", "#"],
      [".", ".", ".", ".", ".", "#", "#", ".", ".", "."],
      [".", ".", "O", "#", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", "O", "O", "O", "#", "."],
      [".", "O", "#", ".", ".", ".", "O", "#", ".", "#"],
      [".", ".", ".", ".", "O", "#", ".", ".", ".", "O"],
      [".", ".", ".", ".", ".", ".", ".", "O", "O", "O"],
      ["#", ".", ".", ".", "O", "#", "#", "#", ".", "O"],
      ["#", ".", "O", "O", "O", "#", ".", ".", ".", "O"],
    ])

  })

})

describe('Test from file', () => {
  test('Check test data', async () => {
    expect(await solveDay14Part2("./day14/test.txt")).toBe(64);
  });

});

