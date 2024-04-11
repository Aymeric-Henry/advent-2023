import { open } from 'node:fs/promises';

export async function getGamesFromFiles(filename) {
  let filehandle
  let games = []

  try {
    filehandle = await open(filename, 'r');
    const file = await filehandle.readFile()

    const values = file.toString()
    const lines = values.split("\n")

    const redRegex = /([0-9]*) red/
    const blueRegex = /([0-9]*) blue/
    const greenRegex = /([0-9]*) green/

    let red = 0;
    let blue = 0;
    let green = 0

    games = lines.filter(l => l).map((line) => {
      return line.split(";").map((game) => {
        red = 0;
        blue = 0;
        green = 0;
        const foundRed = redRegex.exec(game)?.[1]
        const foundGreen = greenRegex.exec(game)?.[1]
        const foundBlue = blueRegex.exec(game)?.[1]

        return [
          foundRed ? parseInt(foundRed) : red,
          foundGreen ? parseInt(foundGreen) : green,
          foundBlue ? parseInt(foundBlue) : blue,
        ]
      })
    })


  } finally {
    await filehandle?.close();
  }

  return games
}

export async function checkGamesFromFile(requirement, filename) {
  const games = await getGamesFromFiles(filename)
  return checkAllGames(requirement, games)

}

export function checkAllGames(requirement, games) {
  let total = 0;
  for (let i = 0; i < games.length; i++) {
    if (checkGame(requirement, games[i])) {
      total += i + 1
    }
  }

  return total
}

export function checkGame(requirement, draws) {
  let isValid = true;
  const maxRed = requirement[0]
  const maxGreen = requirement[1]
  const maxBlue = requirement[2]

  for (let i = 0; i < draws.length; i++) {
    if (draws[i].length < 3) {
      throw new Error("Malformated input in checkgames draws received draws is not size 3")
    }

    if (draws[i][0] > maxRed || draws[i][2] > maxBlue || draws[i][1] > maxGreen) {
      isValid = false
      break
    }
  }

  return isValid
}


// PART 2


export async function checkGamesFromFilePart2(filename) {
  const games = await getGamesFromFiles(filename)
  return checkAllGamesPart2(games)

}

export function checkAllGamesPart2(games) {
  let total = 0;

  for (let i = 0; i < games.length; i++) {
    total += checkGamePart2(games[i])
  }

  return total
}


export function checkGamePart2(games) {
  let minRed = 0;
  let minGreen = 0;
  let minBlue = 0;

  for (let i = 0; i < games.length; i++) {
    if (games[i][0] > minRed) {
      minRed = games[i][0]
    }
    if (games[i][1] > minGreen) {
      minGreen = games[i][1]
    }
    if (games[i][2] > minBlue) {
      minBlue = games[i][2]
    }
  }

  return minRed * minBlue * minGreen
}

