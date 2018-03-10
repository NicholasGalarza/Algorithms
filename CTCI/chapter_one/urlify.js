/* 
 * Problem Description: Write a method 
 * to replace all spaces in a string 
 * with '%20'.
 * 
 * @params: {string, int} str, tSize
 * @return: {string}, url
 * Runtime: O(n) | Space: O(n)
 */
function URLify(str, tSize) {
  const url = []

  for (let i = 0; i < tSize; i++) {
    const symbol = str[i]
    if (symbol === " ") {
      url.push('%', '2', '0')
    } else {
      url.push(symbol)
    }
  }

  return url.join("")
}
/* In-place Solution
 * @params: {string, int} str, tSize
 * @return: {string}, url
 * Runtime: O(n) | Space: O(1)
 */
function URLify(str, tSize) {
  let pivot = str.length - 1
  str = str.split("")

  for (let curr = tSize - 1; curr >= 0; curr--) {
    if (str[curr] !== " ") {
      str[pivot] = str[curr]
      pivot = pivot - 1
    } else {
      str[pivot] = '0'
      str[pivot - 1] = '2'
      str[pivot - 2] = '%'
      pivot = pivot - 3
    }
  }

  return str.join("")
}