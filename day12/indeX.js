import { open } from 'node:fs/promises';

export function findAllPossiblePermutation(row) {
  const [record, damagedList] = row

  if (!record.some((p) => p === "?")) return 0
  let permutations = [[...record]]
  const numberDamaged = damagedList.reduce((acc, val) => acc + val, 0)

  for (let i = 0; i < record.filter((p) => p === "?").length; i++) {
    let newPermutations = []
    const index = permutations[0].findIndex((p) => p === "?")

    for (let j = 0; j < permutations.length; j++) {
      const permutBroken = [...permutations[j].slice(0, index), "#", ...permutations[j].slice(index + 1)]
      if (checkPermutation(permutBroken, damagedList, numberDamaged)) {
        newPermutations.push(permutBroken)
      }
      const permutSane = [...permutations[j].slice(0, index), ".", ...permutations[j].slice(index + 1)]
      if (checkPermutation(permutSane, damagedList, numberDamaged)) {
        newPermutations.push(permutSane)
      }
    }
    permutations = newPermutations
  }

  return permutations.length
}

export function checkPermutation(value, damagedList, numberDamaged) {
  // let base = "^(\\.|\\?)*"
  //
  // damagedList.forEach((n, i) => {
  //   if (i !== 0) {
  //     base += "(\\.|\\?)+"
  //   }
  //   base += `(#|\\?){${n},${n}}`
  // })
  // base += "(\\.|\\?)*$"
  // const regex = new RegExp(base)
  //
  // return !!regex.exec(value.join(""))


  // Old non regexy technique

  const damagedLength = value.filter((p) => p === "#").length
  if (damagedLength > numberDamaged) return false

  let count = 0
  let countUnknow = 0
  let cursor = 0
  let isValid = true
  for (let i = 0; i < value.length; i++) {
    if (value[i] === "#") {
      count++
    }
    if (value[i] === "?") {
      countUnknow++

    }

    if (count > 0 && (value[i] === "." || i === value.length - 1)) {
      if (countUnknow > 0) { }
      if (cursor === damagedList.length) {
        isValid = false
        break
      }

      if (count > damagedList[cursor]) {
        count -= countUnknow
        const index = damagedList.slice(cursor).findIndex((p) => p >= count)

        if (index === -1) {
          // impossible to know yet
          if (count < numberDamaged && countUnknow > 0) {
            break
          }
          isValid = false
          break
        }
        cursor += index
      }

      cursor++;
      count = 0
      countUnknow = 0
    }
  }

  const maxPotential = value.filter((x) => x === "?" || x === "#").length

  if (numberDamaged > maxPotential) { return false }

  return isValid
}

export async function parseFileDay11(filename) {
  let filehandle
  let arr = []

  try {
    filehandle = await open(filename, 'r');
    const file = await filehandle.readFile()

    const values = file.toString()
    const lines = values.split("\n")

    for (let i = 0; i < lines.length; i++) {
      if (!lines[i]) { continue }
      let [string, damage] = lines[i].split(" ")

      arr.push([string.split(""), damage.split(",").map((n) => Number.parseInt(n, 10))])
    }


  } finally {
    await filehandle?.close();
  }

  return arr
}


export async function solveDay12(filename) {
  const values = await parseFileDay11(filename)
  const perms = values.map(findAllPossiblePermutation)

  return perms.reduce((acc, val) => acc + val, 0)
}
function customTrim(arr) {
  let i = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== ".") {
      break
    }
  }

  return arr.slice(i)
}


let cache = {}
export function findAllPossiblePermutationPart2(record, damagedList) {
  const key = record.join("") + "-" + damagedList.join("")
  if (cache[key] !== undefined) return cache[key]


  if (damagedList.length <= 0) {
    const isInvalid = record.some((r) => r === "#")
    return isInvalid ? 0 : 1
  }

  const brokens = damagedList.reduce((acc, val) => acc + val, 0)
  const brokensDelimiter = damagedList.length
  if ((record.length - brokens - brokensDelimiter + 1) < 0) {
    return 0
  }

  const firstGroupIsValid = !record.slice(0, damagedList[0]).some(p => p === ".")
  if (record.length === damagedList[0]) {
    return firstGroupIsValid ? 1 : 0
  }


  let val = 0


  if (record[0] !== "#") {
    // try for next possible solution in the same group

    val += findAllPossiblePermutationPart2(
      customTrim(record.slice(1)),
      damagedList
    )

  }

  // if group is valid and have a potential stop after it
  if (firstGroupIsValid && record[damagedList[0]] !== "#") {
    // continue to next group
    val += findAllPossiblePermutationPart2(
      customTrim(record.slice(damagedList[0] + 1)),
      damagedList.slice(1)
    )
  }


  cache[key] = val
  return cache[key]
}

export async function solveDay12Part2(filename) {
  const values = await parseFileDay11(filename)
  const unfold = values.map(([record, damagedList]) =>
    [
      [...record, "?", ...record, "?", ...record, "?", ...record, "?", ...record],
      [...damagedList, ...damagedList, ...damagedList, ...damagedList, ...damagedList]
    ]
  )
  const perms = unfold.map(([r, b]) => findAllPossiblePermutationPart2(r, b))


  return perms.reduce((acc, val) => acc + val, 0)
}
