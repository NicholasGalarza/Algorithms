// Runtime O(str1 + str2) | Space O(str1 + str2)
function levenshteinDistance(str1, str2) {
  const editTable = []
  for (let r = 0; r < str1.length + 1; r++) {
    const row = []
    for (let c = 0; c < str2.length + 1; c++) {
      row.push(c)
    }
    row[0] = r
    editTable.push(row)
  }

  for (let i = 1; i < str1.length + 1; i++) {
    for (let j = 1; j < str2.length + 1; j++) {
      const diagonal = editTable[i - 1][j - 1]
      if (str1[i - 1] === str2[j - 1]) {
        editTable[i][j] = diagonal
      } else {
        const left = editTable[i - 1][j],
          above = editTable[i][j - 1]
        editTable[i][j] = Math.min(left, diagonal, above) + 1
      }
    }
  }

  return editTable[str1.length][str2.length]
}