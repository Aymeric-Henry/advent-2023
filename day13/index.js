import { open } from 'node:fs/promises';

export function resolveMatrix(matrix) {
  let valuesX = new Array(matrix[0].length).fill(0)
  let valuesY = new Array(matrix.length).fill(0)

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      valuesY[i] += (matrix[i][j] === "#" ? 1 : 0) * Math.pow(10, j);
      valuesX[j] += (matrix[i][j] === "#" ? 1 : 0) * Math.pow(10, i);
    }
  }


  let val = 0
  for (let i = 0; i < valuesY.length - 1; i++) {
    let isMirror = true
    for (let j = 0; j <= i; j++) {
      if (i + j + 1 >= valuesY.length) break
      if (valuesY[i - j] !== valuesY[i + j + 1]) {
        isMirror = false
        break
      }
    }

    if (isMirror) {
      val += ((i + 1) * 100)
      break
    }
  }

  for (let i = 0; i < valuesX.length - 1; i++) {
    let isMirror = true
    for (let j = 0; j <= i; j++) {
      if (i + j + 1 >= valuesX.length) break
      if (valuesX[i - j] !== valuesX[i + j + 1]) {
        isMirror = false
        break
      }
    }
    if (isMirror) {
      val += (i + 1)
    }
  }

  return val
}

export async function parseFileDay13(filename) {
  let filehandle
  let arr = []
  let temp = []

  try {
    filehandle = await open(filename, 'r');
    const file = await filehandle.readFile()

    const values = file.toString()
    const lines = values.split("\n")

    for (let i = 0; i < lines.length; i++) {
      if (!lines[i]) {
        arr.push(temp)
        temp = []
        continue
      }
      temp.push(lines[i].split(""))
    }
    if (temp.length > 0) {
      arr.push(temp)
    }
  } finally {
    await filehandle?.close();
  }

  return arr
}

export async function solveDay13(filename) {
  const arr = await parseFileDay13(filename)

  return arr.reduce((acc, val) => acc + resolveMatrix(val), 0)
}


// PART 2
export function fixSmudge(matrix) {
  let val = 0
  const rows = Array(matrix.length).fill("").map((_, i) => matrix[i].join(""));
  const columns = Array(matrix[0].length).fill("").map((_, i) => matrix.map(x => x[i]).join(""));
  let potentialSmudge = []

  for (let i = 1; i < rows.length; i++) {
    const failedRow = []
    let x2 = i

    for (let x1 = i - 1; x1 >= 0; x1--) {
      if (x2 >= rows.length) break
      if (rows[x1] !== rows[x2]) {
        failedRow.push([x1, x2])
      }
      x2++
    }
    if (failedRow.length === 1) {
      let [x1, x2] = failedRow[0]
      let s1 = rows[x1].split("")
      let s2 = rows[x2].split("")

      if (s1.filter((_, i) => s1[i] !== s2[i]).length === 1) {
        let index = s1.findIndex((_, i) => s1[i] !== s2[i])
        if (potentialSmudge.length) {
          const index = s1.findIndex((_, i) => s1[i] !== s2[i])
          if (potentialSmudge.filter(([x, y]) => y === index && (x === x1 || x === x2)).length) {
            val += i * 100
            potentialSmudge = potentialSmudge.filter(([x, y]) => y === index && (x === x1 || y === x2))
          }

        } else {
          val += i * 100
          potentialSmudge.push([x1, index])
          potentialSmudge.push([x2, index])

        }
      }
    }
  }

  for (let i = 1; i < columns.length; i++) {
    const failedColumn = []
    let y2 = i

    for (let y1 = i - 1; y1 >= 0; y1--) {
      if (y2 >= columns.length) break
      if (columns[y1] !== columns[y2]) {
        failedColumn.push([y1, y2])
      }
      y2++
    }
    
    if (failedColumn.length === 1) {
      let [y1, y2] = failedColumn[0]
      let s1 = columns[y1].split("")
      let s2 = columns[y2].split("")

      if (s1.filter((_, i) => s1[i] !== s2[i]).length === 1) {
        const xIndex = s1.findIndex((_, i) => s1[i] !== s2[i])

        if (potentialSmudge.length) {
          if (potentialSmudge.filter(([x, y]) => x === xIndex && (y === y1 || y === y2)).length) {
            val += i
            potentialSmudge = potentialSmudge.filter(([x, y]) => x === xIndex && (y === y1 || y === y2))
          }

        } else {
          val += i
          potentialSmudge.push([xIndex, y2])
          potentialSmudge.push([xIndex, y1])
        }
      }
    }
  }




  return val
}
export async function solveDay13Part2(filename) {
  const arr = await parseFileDay13(filename)

  return arr.reduce((acc, val) => acc + fixSmudge(val), 0)
}


