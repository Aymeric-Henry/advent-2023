import { open } from 'node:fs/promises';

export function exploreIndexForNumber(schematic, index) {
  let value = schematic.charCodeAt(index)

  if (Number.isNaN(value)) return 0
  if (value < 48) return 0
  if (value > 58) return 0

  let val = `${exploreLeftForNumber(schematic, index - 1)}${schematic[index]}${exploreRightForNumber(schematic, index + 1)}`

  return Number.parseInt(val)
}

function exploreLeftForNumber(schematic, index) {
  let value = schematic.charCodeAt(index)
  if (Number.isNaN(value)) return ""
  if (value < 48) return ""
  if (value > 58) return ""

  return `${exploreLeftForNumber(schematic, index - 1)}${schematic[index]}`
}

function exploreRightForNumber(schematic, index) {
  let value = schematic.charCodeAt(index)
  if (Number.isNaN(value)) {
    return ""
  }
  if (value < 48) return ""
  if (value > 58) return ""


  return `${schematic[index]}${exploreRightForNumber(schematic, index + 1)}`
}

export function getSpecialCharactersListIndex(schematic) {
  const indexes = []
  const regexSpecialCharacter = /[^(0123456789.\n)]/gm

  while (true) {
    let index = regexSpecialCharacter.exec(schematic)?.index
    if (index === undefined) break
    indexes.push(index)

  }
  return indexes
}

export function checkForSchematic(schematic) {
  const specialCharactersListIndex = getSpecialCharactersListIndex(schematic)
  const lineLength = (/[^\n]*/.exec(schematic)?.[0]?.length ?? schematic?.length) + 1
  let sum = 0
  let memoryMap = new Map()

  const regexSpecialCharacter = /[0-9]+/gm
  while (true) {
    let index = regexSpecialCharacter.exec(schematic);
    if (index === null) break
  }


  for (let index of specialCharactersListIndex) {
    // line
    for (let j = -1; j < 2; j++) {
      memoryMap.clear()
      // row
      for (let i = -1; i < 2; i++) {
        if (i === 0 && j === 0) {
          memoryMap.clear()
          continue
        }
        const val = exploreIndexForNumber(schematic, index + i + (j * lineLength))
        if (val === 0) {
          memoryMap.clear()
        }
        if (memoryMap.has(val)) {
          continue
        }
        memoryMap.set(val)
        sum += val
      }
    }
  }

  return sum
}

export async function getGamesFromFiles(filename) {
  let filehandle
  let sum = 0
  try {
    filehandle = await open(filename, 'r');
    const file = await filehandle.readFile()

    const values = file.toString()
    sum = checkForSchematic(values)

  } finally {
    await filehandle?.close();
  }

  return sum
}

// PART 2

export function getStarListIndex(schematic) {
  const indexes = []
  const regexSpecialCharacter = /\*/gm

  while (true) {
    let index = regexSpecialCharacter.exec(schematic)?.index
    if (index === undefined) break
    indexes.push(index)

  }
  return indexes
}

export function checkForSchematicPart2(schematic) {
  const specialCharactersListIndex = getStarListIndex(schematic)
  const lineLength = (/[^\n]*/.exec(schematic)?.[0]?.length ?? schematic?.length) + 1
  let sum = 0
  let temp = 0
  let memoryMap = new Map()

  const regexSpecialCharacter = /[0-9]+/gm
  while (true) {
    let index = regexSpecialCharacter.exec(schematic);
    if (index === null) break
  }


  for (let index of specialCharactersListIndex) {
    temp = []
    // line
    for (let j = -1; j < 2; j++) {
      memoryMap.clear()
      // row
      for (let i = -1; i < 2; i++) {
        if (i === 0 && j === 0) {
          memoryMap.clear()
          continue
        }
        const val = exploreIndexForNumber(schematic, index + i + (j * lineLength))
        if (val === 0) {
          memoryMap.clear()
        }
        if (memoryMap.has(val)) {
          continue
        }
        memoryMap.set(val)
        if (val) {
          temp.push(val)
        }
      }
    }
    if (temp.length === 2) {
      sum += temp[0] * temp[1]
    }
  }

  return sum
}

export async function getGamesFromFilesPart2(filename) {
  let filehandle
  let sum = 0
  try {
    filehandle = await open(filename, 'r');
    const file = await filehandle.readFile()

    const values = file.toString()
    sum = checkForSchematicPart2(values)

  } finally {
    await filehandle?.close();
  }

  return sum
}

