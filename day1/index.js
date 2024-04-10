import { open } from 'node:fs/promises';


/**
 * Calculte the calibration of the file 
 * @param {string} file - the path from root project to the file
 * @returns {Number} Total extracted
 */
export async function extractCalibration(filename) {
  let filehandle
  let total = 0

  try {
    filehandle = await open(filename, 'r');
    const data = await filehandle.readFile()
    total = extractCalibrationFromBuffer(data)

  } finally {
    await filehandle?.close();
  }
  return total
}


export function extractCalibrationFromBuffer(buffer) {
  let startDigit = undefined;
  let endDigit = undefined;
  let total = 0
  let j = 0

  for (let i = 0; i < buffer.length; i++) {
    let bufferLetter = buffer[i]
    if (bufferLetter === 10) {
      j++

      total += 10 * startDigit + endDigit
      startDigit = undefined
      endDigit = undefined
    }

    // Find and set letter representing number 49=0 57=9
    if (bufferLetter < 58 && bufferLetter > 48) {
      if (startDigit === undefined) {
        startDigit = Number.parseInt(String.fromCharCode(bufferLetter))
        endDigit = Number.parseInt(String.fromCharCode(bufferLetter))
      }

      endDigit = Number.parseInt(String.fromCharCode(bufferLetter))
    }
  }

  // If buffer finish with the last value instea of EOF
  if (startDigit !== undefined) {
    total += 10 * startDigit + endDigit
  }
  return total
}


// ------ PART2
/**
 * Calculte the calibration of the file 
 * @param {string} file - the path from root project to the file
 * @returns {Number} Total extracted
 */
export async function extractCalibrationPart2(filename) {
  let filehandle
  let total = 0

  try {
    filehandle = await open(filename, 'r');
    const data = await filehandle.readFile()

    total = extractCalibrationFromString(data.toString())

  } finally {
    await filehandle?.close();
  }
  return total
}

/**
 * Calculte the calibration of the string passed
 * @param {string} data - the string who should be extracted
 * @returns {Number} Total extracted
 */

export function extractCalibrationFromString(data) {
  let total = 0;
  let temp = data.replaceAll(/one/g, "one1one")
    .replaceAll(/two/g, "two2two")
    .replaceAll(/three/g, "three3three")
    .replaceAll(/four/g, "four4four")
    .replaceAll(/five/g, "five5five")
    .replaceAll(/six/g, "six6six")
    .replaceAll(/seven/g, "seven7seven")
    .replaceAll(/eight/g, "eight8eight")
    .replaceAll(/nine/g, "nine9nine")

  temp = temp.replaceAll(/([a-z]|[A-Z])/g, "")
    .replaceAll(/([0-9])[0-9]*([0-9])/g, "$1$2")
    .replaceAll(/^([0-9])$/gm, "$1$1")

  const lines = temp.split("\n")
 
  for (let line of lines) {
    if (!Number.isNaN(Number.parseInt(line) )){
      total += Number.parseInt(line)
    }
  }

  return total
}
