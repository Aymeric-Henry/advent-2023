import { open } from 'node:fs/promises';

export function getValueOfCard(expected, list) {
  const expectedMap = new Map(expected.map((val) => [val, 0]));

  for (let val of list) {
    if (expectedMap.has(val)) {
      expectedMap.set(val, expectedMap.get(val) + 1)
    }
  }

  const founded = [...expectedMap.values()].reduce((acc, val) => acc + val, 0)

  if (founded < 1) return 0

  return 1 * Math.pow(2, founded - 1)
}


export function getValuesOfCards(cards) {
  let sum = 0;

  for (let i = 0; i < cards.length; i++) {
    sum += getValueOfCard(cards[i][0], cards[i][1])
  }

  return sum
}

export async function parseFileDay4(filename) {
  let filehandle
  let games = []

  try {
    filehandle = await open(filename, 'r');
    const file = await filehandle.readFile()
    const values = file.toString()
    const lines = values.split("\n")

    for (let line of lines) {
      const [_, data] = line.split(":")
      if (!data) break

      const [expected, value] = data.split("|").map((str) => {
        const numbers = []
        const val = /([0-9])+/g
        while (true) {
          const result = val.exec(str)
          if (result === null) {
            break
          }
          numbers.push(Number.parseInt(result?.[0], 10))
        }
        return numbers
      })
      games.push([expected, value])
    }
  } finally {
    await filehandle?.close();
  }

  return games
}

export async function computeDay4(filename) {
  const games = await parseFileDay4(filename)
  return getValuesOfCards(games)
}


// PART 2
//
export function getValueOfCardPart2(cards, index, memo = {}) {
  if (memo[index]) {
    return memo[index]
  }


  const expectedMap = new Map(cards[index][0].map((val) => [val, 0]));
  for (let val of cards[index][1]) {
    if (expectedMap.has(val)) {
      expectedMap.set(val, 1)
    }
  }


  const val = [...expectedMap.values()].reduce((acc, val) => acc + val, 0)
  let total = 1 

  for (let i = 1; i < val + 1; i++) {
    if (i + index > cards.length) break
    total += getValueOfCardPart2(cards, index + i, memo)
  }

  memo[index] = total
  return total

}

export function getValuesOfCardsPart2(cards) {
  let sum = 0;
  let memo = {}

  for (let i = 0; i < cards.length; i++) {
    sum += getValueOfCardPart2(cards, i, memo)
  }
  return sum
}

export async function computeDay4Part2(filename) {
  const games = await parseFileDay4(filename)
  return getValuesOfCardsPart2(games)
}
