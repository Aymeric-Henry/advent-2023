import { open } from 'node:fs/promises';

export function propagateLight(matrix, startSteps = [[0, -1, 0, 1]]) {
  let steps = startSteps
  let newSteps = []
  let resultArray = [...matrix.map((arr) => new Array(arr.length).fill(0))]
  let stepHistory = new Map()

  while (steps.length > 0) {
    newSteps = []
    for (let i = 0; i < steps.length; i++) {
      const [fromY, fromX, deltaY, deltaX] = steps[i]
      let newY = fromY + deltaY
      let newX = fromX + deltaX
      stepHistory.set(steps[i].join("|"), true)


      if (newX >= matrix[0].length) continue
      if (newY >= matrix.length) continue
      if (newX < 0) continue
      if (newY < 0) continue

      resultArray[newY][newX] = 1

      // Propagate
      const isEmptySpace = matrix[newY][newX] === "."
      const isSplitWrongAngle = (matrix[newY][newX] === "|" && deltaX === 0) || (matrix[newY][newX] === "-" && deltaY === 0)


      if (isEmptySpace || isSplitWrongAngle) {
        newSteps.push([newY, newX, deltaY, deltaX])
      }

      if (matrix[newY][newX] === "\\") {
        if (deltaY < 0) {
          newSteps.push([newY, newX, 0, -1])
        }

        if (deltaY > 0) {
          newSteps.push([newY, newX, 0, 1])
        }

        if (deltaX > 0) {
          newSteps.push([newY, newX, 1, 0])
        }
        if (deltaX < 0) {
          newSteps.push([newY, newX, -1, 0])
        }
      }

      if (matrix[newY][newX] === "/") {
        if (deltaY < 0) {
          newSteps.push([newY, newX, 0, 1])
        }

        if (deltaY > 0) {
          newSteps.push([newY, newX, 0, -1])
        }
        if (deltaX < 0) {
          newSteps.push([newY, newX, 1, 0])
        }
        if (deltaX > 0) {
          newSteps.push([newY, newX, -1, 0])
        }
      }
      if (matrix[newY][newX] === "|" && deltaX !== 0) {
        newSteps.push([newY, newX, 1, 0])
        newSteps.push([newY, newX, -1, 0])
      }

      if (matrix[newY][newX] === "-" && deltaY !== 0) {
        newSteps.push([newY, newX, 0, 1])
        newSteps.push([newY, newX, 0, -1])
      }
    }

    steps = newSteps.filter((s) => !stepHistory.get(s.join("|"))
    )
  }

  return resultArray
}


export function sumPower(matrix, start = [[0, -1, 0, 1]]) {

  const lightArr = propagateLight(matrix, start)

  return lightArr.reduce((acc, arr) => acc + arr.reduce((a, v) => a + v, 0), 0)
}

export async function parseFileDay16(filename) {
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

export async function solveDay16(filename) {
  const matrix = await parseFileDay16(filename)
  return sumPower(matrix)
}


export function findMaxSumPower(matrix) {

  const result = []
  const allEntryPoint = []

  for (let i = 0; i < matrix[0].length; i++) {
    allEntryPoint.push([-1, i, 1, 0])
    allEntryPoint.push([matrix.length, i, -1, 0])
  }
  for (let i = 0; i < matrix.length; i++) {
    allEntryPoint.push([i, -1, 0, 1])
    allEntryPoint.push([i, matrix[0].length, 0, -1])
  }


  for (let i = 0; i < allEntryPoint.length; i++) {
    const lightArr = propagateLight(matrix, [allEntryPoint[i]])

    result.push(lightArr.reduce((acc, arr) => acc + arr.reduce((a, v) => a + v, 0), 0))

  }
  return Math.max(...result)
}

export async function solveDay16Part2(filename) {
  const matrix = await parseFileDay16(filename)
  return findMaxSumPower(matrix)
}
