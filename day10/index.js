import { open } from 'node:fs/promises';

const PipeType = {
  "EtW": "-",
  "NtE": "L",
  "NtW": "J",
  "StN": "|",
  "StW": "7",
  "StE": "F",
}

const availableTopPipes = [PipeType.StN, PipeType.StE, PipeType.StW]
const availableBottomPipes = [PipeType.StN, PipeType.NtE, PipeType.NtW]
const availableLeftPipes = [PipeType.StW, PipeType.NtW, PipeType.EtW]
const availableRightPipes = [PipeType.NtE, PipeType.StE, PipeType.EtW]

const PossibleMovesByPipe = {
  [PipeType.EtW]: [[0, 1], [0, -1]],
  [PipeType.StN]: [[1, 0], [-1, 0]],
  [PipeType.NtE]: [[-1, 0], [0, 1]],
  [PipeType.NtW]: [[-1, 0], [0, -1]],
  [PipeType.StW]: [[1, 0], [0, -1]],
  [PipeType.StE]: [[1, 0], [0, 1]],

}

function exploreFromPipe(arr, fromX, fromY, direction) {
  let x = fromX + 0
  let y = fromY + 0
  let oldX = x + 0
  let oldY = y + 0
  let path = [{ x, y }]

  switch (direction) {
    case "north": {
      x--
      break
    }
    case "south": { x++; break }
    case "west": { y--; break }
    case "east": { y++; break }
  }

  while (arr[x][y] !== "S") {
    path.push({ x, y })
    const [[deltaX, deltaY]] = PossibleMovesByPipe[arr[x][y]].filter(([deltaX, deltaY]) => {
      return (x + deltaX) !== oldX || (y + deltaY) !== oldY
    })

    oldX = x + 0
    oldY = y + 0
    x += deltaX
    y += deltaY
  }

  return path

}

export function getMainPath(arr) {
  const x = arr.findIndex((yArr) => yArr.some((y) => y === "S"))
  const y = arr[x].findIndex((y) => y === "S")

  // test high
  if (x > 0 && availableTopPipes.includes(arr[x - 1][y])) {
    return exploreFromPipe(arr, x, y, "north")

  }

  // test bottom
  if (x < arr.length - 1 && availableBottomPipes.includes(arr[x + 1][y])) {
    return exploreFromPipe(arr, x, y, "south")
  }

  // test left
  if (y > 0 && availableLeftPipes.includes(arr[x][y - 1])) {
    return exploreFromPipe(arr, x, y, "east")
  }

  // test right
  if (y < arr[x].length - 1 && availableRightPipes.includes(arr[x][y + 1])) {
    return exploreFromPipe(arr, x, y, "west")
  }
}

export function solveLongestNodeOnPath(arr) {
  const path = getMainPath(arr)

  return path.length / 2 + (path.length % 2 ? 1 : 0)
}


export async function parseFileDay10(filename) {
  let filehandle
  let arr = []

  try {
    filehandle = await open(filename, 'r');
    const file = await filehandle.readFile()

    const values = file.toString()
    const lines = values.split("\n")

    for (let i = 0; i < lines.length; i++) {
      if (!lines[i]) { continue }
      const values = lines[i].split("")
      if (values.length) {
        arr.push(values)
      }
    }


  } finally {
    await filehandle?.close();
  }

  return arr
}

export async function solveDay10(filename) {
  const arr = await parseFileDay10(filename)
  return solveLongestNodeOnPath(arr)
}

// PART 2 
//
export function getAreaOfArray(arr) {
  const path = getMainPath(arr)

  const vertices = path.filter(({ x, y }) => arr[x][y] !== PipeType.EtW && arr[x][y] !== PipeType.StN)
  let area = 0

  // Shoelace formula
  for (let i = 0; i < vertices.length; i++) {
    if (i === (vertices.length - 1)) {
      area += (vertices[i].x * vertices[0].y) - (vertices[i].y * vertices[0].x)
      continue
    }
    area += (vertices[i].x * vertices[i + 1].y) - (vertices[i].y * vertices[i + 1].x)

  }

  area = 0.5 * Math.abs(area)

  // Pick theorem
  area = area - (path.length / 2) + 1

  return area
}

export async function solveDay10Part2(filename) {
  const arr = await parseFileDay10(filename)
  return getAreaOfArray(arr)
}
