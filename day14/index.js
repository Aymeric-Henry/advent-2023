import { open } from 'node:fs/promises';

export function tiltTheMatrix(matrix) {
  let newMatrix = [...matrix.map((m) => [...m])]

  for (let y = 0; y < matrix[0].length; y++) {
    let firstAvailableSpace = 0
    for (let x = 0; x < matrix.length; x++) {
      if (matrix[x][y] === "O") {
        newMatrix[x][y] = "."
        newMatrix[firstAvailableSpace][y] = "O"
        firstAvailableSpace++
      }
      if (matrix[x][y] === "#") {
        firstAvailableSpace = x + 1
      }
    }

  }

  return newMatrix
}

export function cacluateLoad(matrix) {
  let sum = 0

  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[0].length; y++) {
      if (matrix[x][y] === "O") {
        sum += matrix.length - x
      }
    }
  }

  return sum
}


export async function parseFileDay14(filename) {
  let filehandle
  let arr = []

  try {
    filehandle = await open(filename, 'r');
    const file = await filehandle.readFile()

    const values = file.toString()
    const lines = values.split("\n")

    for (let i = 0; i < lines.length; i++) {
      if (lines[i]) {
        arr.push(lines[i].split(""))
      }
    }
  } finally {
    await filehandle?.close();
  }

  return arr
}

export async function solveDay14(filename) {
  const matrix = await parseFileDay14(filename)
  return cacluateLoad(tiltTheMatrix(matrix))
}


// PART 2
export function tiltTheMatrixNorth(matrix) {
  for (let y = 0; y < matrix[0].length; y++) {
    let firstAvailableSpace = 0
    for (let x = 0; x < matrix.length; x++) {
      if (matrix[x][y] === "O") {
        matrix[x][y] = "."
        matrix[firstAvailableSpace][y] = "O"
        firstAvailableSpace++
      }
      if (matrix[x][y] === "#") {
        firstAvailableSpace = x + 1
      }
    }
  }
  return matrix
}

export function tiltTheMatrixSouth(matrix) {
  for (let y = 0; y < matrix[0].length; y++) {
    let firstAvailableSpace = matrix.length - 1
    for (let x = matrix.length - 1; x >= 0; x--) {
      if (matrix[x][y] === "O") {
        matrix[x][y] = "."
        matrix[firstAvailableSpace][y] = "O"
        firstAvailableSpace--
      }
      if (matrix[x][y] === "#") {
        firstAvailableSpace = x - 1
      }
    }
  }
  return matrix
}

export function tiltTheMatrixWest(matrix) {
  for (let x = 0; x < matrix.length; x++) {
    let firstAvailableSpace = 0
    for (let y = 0; y < matrix[0].length; y++) {
      if (matrix[x][y] === "O") {
        matrix[x][y] = "."
        matrix[x][firstAvailableSpace] = "O"
        firstAvailableSpace++
      }
      if (matrix[x][y] === "#") {
        firstAvailableSpace = y + 1
      }
    }
  }
  return matrix
}


export function tiltTheMatrixEast(matrix) {
  for (let x = 0; x < matrix.length; x++) {
    let firstAvailableSpace = matrix[0].length - 1
    for (let y = matrix[0].length - 1; y >= 0; y--) {
      if (matrix[x][y] === "O") {
        matrix[x][y] = "."
        matrix[x][firstAvailableSpace] = "O"
        firstAvailableSpace--
      }
      if (matrix[x][y] === "#") {
        firstAvailableSpace = y - 1
      }
    }
  }
  return matrix
}

export function tiltCycle(matrix) {
  tiltTheMatrixNorth(matrix)
  tiltTheMatrixWest(matrix)
  tiltTheMatrixSouth(matrix)
  tiltTheMatrixEast(matrix)
}

function makeSnap(matrix) {
  return matrix.map((m) => m.join("")).join("-")

}

export async function solveDay14Part2(filename) {
  const matrix = await parseFileDay14(filename)
  let snapHistory = [makeSnap(matrix)]
  let maxIt = 1000000000;
  for (let i = 0; i < maxIt; i++) {
    tiltCycle(matrix)

    if (snapHistory.includes(makeSnap(matrix))) {
      const index = snapHistory.findIndex((v) => v === makeSnap(matrix))
      let cycleLength = (i + 1 - index)
      let rest = maxIt - cycleLength - i 
      let todoMore = rest % cycleLength
      i = maxIt - todoMore
      snapHistory = []

    }
    snapHistory.push(makeSnap(matrix))
  }

  return cacluateLoad(matrix)
}

// 68
