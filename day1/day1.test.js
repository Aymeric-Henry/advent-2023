import { describe, expect, test } from '@jest/globals';
import { extractCalibration, extractCalibrationFromBuffer, extractCalibrationFromString, extractCalibrationPart2} from './index';

describe('Extact the calibration from the buffer (one line)', () => {
  test('Only two number in the line', () => {
    expect(extractCalibrationFromBuffer(Buffer.from("1abc2"))).toBe(12);
  });
  test('Only two number in the line case 2', () => {
    expect(extractCalibrationFromBuffer(Buffer.from("pqr3stu8vwx"))).toBe(38);
  });
  test('More than two number in the line', () => {
    expect(extractCalibrationFromBuffer(Buffer.from("a1b2c3d4e5f"))).toBe(15);
  });
  test('Only one number in the line', () => {
    expect(extractCalibrationFromBuffer(Buffer.from("treb7uchet"))).toBe(77);
  });
});


describe('Extact the calibration from the buffer (multiple lineis)', () => {
  test('Add the two previous line', () => {
    expect(extractCalibrationFromBuffer(Buffer.from("1abc2\npqr3stu8vwx"))).toBe(12 + 38);
  });
  test('Add the three previous line', () => {
    expect(extractCalibrationFromBuffer(Buffer.from("1abc2\npqr3stu8vwx\na1b2c3d4e5f"))).toBe(12 + 38 + 15);
  });
});

describe('Extact the calibration from a path', () => {
  test('Add the local test file', async () => {
    expect(await extractCalibration("./day1/test1.txt")).toBe(142);
  });
});


// PART TWO
describe('Extact the calibration from the string (one line)', () => {
  test('Should convert the number', () => {
    expect(extractCalibrationFromString("two1nine")).toBe(29)
  });
  test('Should convert the number even if two number overlap', () => {
    expect(extractCalibrationFromString("eightwothree")).toBe(83)
  });
  test('Only two number in the line', () => {
    expect(extractCalibrationFromBuffer(Buffer.from("a1b2c3d4e5f"))).toBe(15);
  });
  test('Only one number in the line', () => {
    expect(extractCalibrationFromBuffer(Buffer.from("treb7uchet"))).toBe(77);
  });
});

describe('Extact the calibration from the string (multiple lineis)', () => {
  test('Add the previous line', () => {
    expect(extractCalibrationFromString(`
two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen
`)).toBe(281)
  });
});




