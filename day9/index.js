import { open } from 'node:fs/promises';

export function createDownArray(source) {
  let newArray = []
  for (let i = 1; i < source.length; i++) {
    newArray.push(source[i] - source[i - 1])
  }

  if (newArray.some((val) => val !== 0)) {
    return [source, ...createDownArray(newArray)]
  }

  return [source, newArray]
}

export function getOasisPrediction(source) {
  const downArray = createDownArray(source)
  let oldValue = 0
  let lastIndex

  for (let i = downArray.length - 2; i >= 0; i--) {
    lastIndex = downArray[i].length - 1
    oldValue = oldValue + downArray[i][lastIndex]
  }

  return oldValue
}

export function getSumOfOasisPrediction(sources) {
  return sources.map(getOasisPrediction).reduce((acc, val) => acc + val, 0)
}

export async function parseFileDay9(filename) {
  let filehandle
  let surveys = []

  try {
    filehandle = await open(filename, 'r');
    const file = await filehandle.readFile()

    const values = file.toString()
    const lines = values.split("\n")

    for (let i = 0; i < lines.length; i++) {
      if (!lines[i]) { continue }
      const numbers = lines[i].split(" ").map((n) => n && Number.parseInt(n, 10))
      if (numbers.length) {
        surveys.push(numbers)
      }
    }


  } finally {
    await filehandle?.close();
  }

  return surveys
}

export async function solveDay9(filename) {
  const sources = await parseFileDay9(filename)
  return getSumOfOasisPrediction(sources)
}

export function getOasisPredictionPart2(source) {
  const downArray = createDownArray(source)
  let oldValue = 0

  for (let i = downArray.length - 2; i >= 0; i--) {
    oldValue = downArray[i][0] - oldValue
  }


  return oldValue
}

export async function solveDay9Part2(filename) {
  const sources = await parseFileDay9(filename)
  return sources.map(getOasisPredictionPart2).reduce((acc, val) => acc + val, 0)

}
