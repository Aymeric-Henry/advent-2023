import { open } from 'node:fs/promises';

export function hash(str) {
  let val = 0;

  for (let i = 0; i < str.length; i++) {
    val += str.charCodeAt(i)
    val *= 17
    val = val % 256
  }

  return val
}

export function sumOfHash(arr) {
  return arr.reduce((acc, val) => acc + hash(val), 0)

}

export async function parseFileDay15(filename) {
  let filehandle
  let arr = []

  try {
    filehandle = await open(filename, 'r');
    const file = await filehandle.readFile()

    const values = file.toString()
    const lines = values.replaceAll("\n", "")
    arr = lines.split(",")
  } finally {
    await filehandle?.close();
  }

  return arr
}


export async function solveDay15(filename) {
  const arr = await parseFileDay15(filename)
  return sumOfHash(arr)
}


// PART 2

export function generateLensesBox(arr) {
  const lenses = new Array(256).fill(0).map(() => [])

  for (let i = 0; i < arr.length; i++) {
    const [label, _, lens] = arr[i].split(/(-|=)/g)
    const hashResult = hash(label)
    const op = arr[i].match(/(-|=)/g)[0]

    if (op === "=") {
      const lenseNumber = parseInt(lens)
      
      
      const index = lenses[hashResult].findIndex(([l]) => l === label)
      if (index !== -1) {
        lenses[hashResult][index] = [label, lenseNumber]
      } else {
        lenses[hashResult].push([label, lenseNumber])
      }
    }
    if (op === "-") {
      const index = lenses[hashResult].findIndex(([l]) => l === label)
      if (index !== -1) {
        lenses[hashResult] = [...lenses[hashResult].slice(0, index), ...lenses[hashResult].slice(index + 1)]
      }
    }
  }

  return lenses
}

export function caculateLensesPower(arr) {
  let val = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      val += (i + 1) * (j + 1) * arr[i][j][1]
    }
  }
  return val
}

export async function solveDay15Part2(filename) {
  let arr = await parseFileDay15(filename)
  const lenses = generateLensesBox(arr)

  return caculateLensesPower(lenses)
}
