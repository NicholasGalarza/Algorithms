/* 
 * 1.6 String Compression
 * Implement a method to perform basic string
 * compression using counts of repeated chars
 * Example: 'aabcccccaaa' => a2b1c5a3
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
  let temp = [str[0]], repeated = 1

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === str[i]) {
      repeated++
    } else {
      temp.push(repeated)
      temp.push(str[i])
      repeated = 1
    }
  }
  // edge: push repeated to result since loop 
  // exists before adding the count
  temp.push(repeated)

  return (str.length < temp.length) ? str : temp.join("")
}

module.exports.compressString = compressString
