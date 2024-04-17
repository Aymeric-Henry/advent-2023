import { open } from 'node:fs/promises';

export function exploreTree(tree, instructions) {
  const mapNode = new Map()
  let i = 0;
  let repetition = 0;

  for (let i = 0; i < tree.length; i++) {
    mapNode.set(tree[i][0], [tree[i][1], tree[i][2]])
  }

  let currentNode = mapNode.get("AAA")



  while (true) {
    repetition++
    if (i >= instructions.length) {
      i = 0;
    }

    const newKey = currentNode[instructions[i]]
    if (newKey === "ZZZ") {
      break
    }
    currentNode = mapNode.get(newKey)
    i++;
  }
  return repetition
}

export async function parseFileDay8(filename) {
  let filehandle
  let nodes = []
  let instructions = []

  try {
    filehandle = await open(filename, 'r');
    const file = await filehandle.readFile()

    const values = file.toString()
    const lines = values.split("\n")

    instructions = [...lines[0]].map((l) => l === "R" ? 1 : 0);

    for (let i = 2; i < lines.length; i++) {
      const key = lines[i].substring(0, 3)
      const left = lines[i].substring(7, 10)
      const right = lines[i].substring(12, 15)
      if (key) {
        nodes.push([key, left, right])
      }
    }

  } finally {
    await filehandle?.close();
  }
  return [nodes, instructions]
}

export async function exploreTreeFromFilename(filename) {
  const [nodes, instructions] = await parseFileDay8(filename)
  return exploreTree(nodes, instructions)
}



export function exploreTreePart2(tree, instructions) {
  const mapNode = new Map()
  let i = 0;
  let shortestSolution = []

  for (let i = 0; i < tree.length; i++) {
    mapNode.set(tree[i][0], [tree[i][1], tree[i][2]])
  }

  let nodes = [...mapNode.keys()].filter(k => k[2] === "A").map((k) => mapNode.get(k))

  for (let j = 0; j < nodes.length; j++) {
    let currentNode = nodes[j]
    let repetition = 0;

    i = 0;
    while (true) {
      repetition++
      if (i >= instructions.length) {
        i = 0;
      }

      const newKey = currentNode[instructions[i]]
      if (newKey[2] === "Z") {
        break
      }
      currentNode = mapNode.get(newKey)
      i++;
    }

    shortestSolution.push(repetition)
  }

  // You should understand with the data that all the path have one start and one end and loop 
  // didn't get it before browsing for help
  return shortestSolution.reduce(getLeastCommonMutltiplcator)
}

export async function exploreTreeFromFilenamePart2(filename) {
  const [nodes, instructions] = await parseFileDay8(filename)
  return exploreTreePart2(nodes, instructions)
}

const getGreatestCommonDivider= (a, b) => a ? getGreatestCommonDivider(b % a, a) : b;

const getLeastCommonMutltiplcator= (a, b) => a * b / getGreatestCommonDivider(a, b);
