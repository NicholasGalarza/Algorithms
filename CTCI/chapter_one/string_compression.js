/* 
 * 1.6 String Compression
 * Implement a method to perform basic string
 * compression using counts of repeated chars
 * Example: 'aabccccaaa' => a2b1c5a3
 * If the original string is smaller than the
 * tentative solution, return the original
 * string instead. Uppercase chars only!
 */

/*
 * Temporary array solution
 * @params: {string} str
 * @return: {string}
 * Runtime O(n) | Space O(n)
 */
function compressString(str) {
  let temp = [], repeated = 0

  for (let i = 0; i < str.length; i++) {
    if (repeated === 0) {
      temp.push(str[i])
      repeated++
    } else if (str[i - 1] === str[i]) {
      repeated++
    } else {
      temp.push(repeated)
      repeated = 0
    }
  }

  return (str.length < temp.length) ? str : temp.join("")
}

module.exports.compressString = compressString
