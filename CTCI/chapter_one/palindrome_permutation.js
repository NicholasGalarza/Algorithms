/* 1.4 Palindrome Permutation
 * Given a string, write a function to
 * check if it is a permutation of a 
 * palindrome.
 * 
 * @params: {string}, str
 * @return: {boolean}
 * 
 * Runtime O(n) | Space O(n)
 */

function isPermutationPalindrome(str) {
  const map = {}

  for (const symbol of str) {
    if (symbol === " ") continue
    else if (!(symbol in map)) map[symbol] = 1
    else map[symbol] += 1
  }
  let oddCounter = 0

  for (const key in map) {
    if (map[key] % 2 === 1) oddCounter++
    if (oddCounter > 1) return false
  }

  return true
}