
// The problem get be simplified as a quadractic expression
// the records cand be  calutated by f(x) = (time -x) x - distance if f(x) > 0
// simplifed as the quadratic expression = -time x^2 + x - distance
export function getNumberOfPossibleRecord(time, distance) {

  const delta = Math.pow(time, 2) - (4 * distance)

  // No new record possible
  if (delta <= 0) return 0
  let x1 = (time - Math.sqrt(delta)) / 2
  let x2 = (time + Math.sqrt(delta)) / 2

  // record tied
  if (parseInt(x1) === x1) x1++
  if (parseInt(x2) === x2) x2--
  x1 = Math.ceil(x1)
  x2 = Math.floor(x2)


  if (x1 === x2) return 1

  return (x2 + 1) - x1
}

export function computeGames(games) {
  const result = games.map(([time, distance]) => getNumberOfPossibleRecord(time, distance))
 
  return result.reduce((acc, val) => acc * val, 1)
}

