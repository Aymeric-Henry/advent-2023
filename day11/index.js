import { open } from 'node:fs/promises';

export function getStarsPosistion(arr, expansionCoef = 2) {
  const adjustedX = []
  const adjustedY = []
  const stars = []

  for (let y = 0; y < arr[0].length; y++) {
    const prevY = y > 0 ? adjustedY[y - 1] : 0
    let isEmpty = true
    for (let x = 0; x < arr.length; x++) {
      if (arr[x][y] === "#") {
        isEmpty = false
        break
      }
    }
    adjustedY[y] = prevY + (isEmpty ? expansionCoef : 1)
  }



  for (let x = 0; x < arr.length; x++) {
    const prevX = x > 0 ? adjustedX[x - 1] : 0
    adjustedX[x] = prevX + (arr[x].some((l) => l !== ".") ? 1 : expansionCoef)

    for (let y = 0; y < arr[0].length; y++) {
      if (arr[x][y] === "#") {
        stars.push({
          x: adjustedX[x],
          y: adjustedY[y],
        })

      }
    }
  }

  return stars
}

export function getPairListOfStars(arr, expansionCoef = 2) {
  const stars = getStarsPosistion(arr, expansionCoef)

  const pairStarList = stars.flatMap((star, i) => {
    return stars.slice(i + 1).map((pstar) => [star, pstar])
  }).filter((v) => v)

  return pairStarList
}

export function getDistanceBetweenPair(pair) {
  const [starA, starB] = pair

  const xLength = Math.max(starA.x, starB.x) - Math.min(starA.x, starB.x)
  const yLength = Math.max(starA.y, starB.y) - Math.min(starA.y, starB.y)
  return xLength + yLength
}

export async function parseFileDay11(filename) {
  let filehandle
  let skyPosition = []

  try {
    filehandle = await open(filename, 'r');
    const file = await filehandle.readFile()

    const values = file.toString()
    const lines = values.split("\n")
    for (let i = 0; i < lines.length; i++) {
      const value = lines[i].split("")
      if (value.length) {
        skyPosition.push(value)
      }
    }

  } finally {
    await filehandle?.close();
  }

  return skyPosition
}

export async function solveDay11(filename) {
  const arr = await parseFileDay11(filename)

  const starsPair = getPairListOfStars(arr)
  return starsPair.map(getDistanceBetweenPair).reduce((acc, val) => acc + val, 0)
}


export async function solveDay11Part2(filename, expansionCoef) {
  const arr = await parseFileDay11(filename)

  const starsPair = getPairListOfStars(arr, expansionCoef)
  return starsPair.map(getDistanceBetweenPair).reduce((acc, val) => acc + val, 0)
}
