import { open } from 'node:fs/promises';

const mapValueOfCard = {
  "A": 14,
  "K": 13,
  "Q": 12,
  "J": 11,
  "T": 10,
  "9": 9,
  "8": 8,
  "7": 7,
  "6": 6,
  "5": 5,
  "4": 4,
  "3": 3,
  "2": 2,
}

const mapValueOfCardPart2 = {
  "A": 14,
  "K": 13,
  "Q": 12,
  "J": 1,
  "T": 10,
  "9": 9,
  "8": 8,
  "7": 7,
  "6": 6,
  "5": 5,
  "4": 4,
  "3": 3,
  "2": 2,
}


export function getValueOfHand(hand) {
  const map = new Map()

  for (let card of hand) {
    if (!map.get(card)) { map.set(card, 0) }
    map.set(card, map.get(card) + 1)
  }

  const cards = [...map.entries()]
  cards.sort(([ka, vala], [kb, valb]) => {
    return valb - vala
  })

  let total = 0;


  const handBits = Math.pow(10, 10)
  total += cards[0][1] * handBits * 10000
  total += (cards?.[1]?.[1] ?? 0) * handBits * 100

  let multiply = handBits;
  for (let [key] of hand) {
    total += mapValueOfCard[key] * multiply
    multiply = multiply / 100
  }

  return total
}



export function calculateRewardCamelPoker(bids) {
  const localBids = [...bids].map(([hand, bid]) => [hand, bid, getValueOfHand(hand)])
  localBids.sort((a, b) => a[2] - b[2])

  return localBids.reduce((acc, val, i) => acc + val[1] * (i + 1), 0)
}


export async function parseFileDay7(filename) {
  let filehandle
  let bids = []

  try {
    filehandle = await open(filename, 'r');
    const file = await filehandle.readFile()

    const values = file.toString()
    const lines = values.split("\n")

    for (let i = 0; i < lines.length; i++) {
      const hand = lines[i].substring(0, 5)
      const bid = parseInt(lines[i].slice(6).trim())
      if (hand) {
        bids.push([hand, bid])
      }
    }

  } finally {
    await filehandle?.close();
  }

  return bids
}

export async function calculateRewardCamelPokerFromFile(filename) {
  const bids = await parseFileDay7(filename)
  return calculateRewardCamelPoker(bids)
}


// PART 2 
export function getValueOfHandPart2(hand) {
  const _hand = typeof hand === "string" ? hand.split("") : hand
  const handWithoutJoker = _hand.filter((c) => c !== "J")
  const jokers = _hand.filter((c) => c === "J").length
  const map = new Map()

  for (let card of handWithoutJoker) {
    if (!map.get(card)) { map.set(card, 0) }
    map.set(card, map.get(card) + 1)
  }

  const cards = [...map.entries()]
  cards.sort(([ka, vala], [kb, valb]) => {
    return valb - vala
  })

  let total = 0;


  const handBits = Math.pow(10, 10)

  total += ((cards?.[0]?.[1] ?? 0) + jokers) * handBits * 10000
  total += (cards?.[1]?.[1] ?? 0) * handBits * 100

  let multiply = handBits;
  for (let [key] of hand) {
    total += mapValueOfCardPart2[key] * multiply
    multiply = multiply / 100
  }

  return total
}

export function calculateRewardCamelPokerPart2(bids) {
  const localBids = [...bids].map(([hand, bid]) => [hand, bid, getValueOfHandPart2(hand)])
  localBids.sort((a, b) => a[2] - b[2])

  localBids.map(c => console.log(c))

  return localBids.reduce((acc, val, i) => acc + val[1] * (i + 1), 0)
}


export async function calculateRewardCamelPokerFromFilePart2(filename) {
  const bids = await parseFileDay7(filename)
  return calculateRewardCamelPokerPart2(bids)
}
