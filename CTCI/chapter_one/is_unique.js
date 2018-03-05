/* CTCI 1.1
 * Problem: Implement an algorithm to determine if a string 
 * has all unique characters. What if you cannot use additional
 * data structures?
 */


/* Solution with HashMap
 * Runtime O(n) | Space O(n)
 */
function isUnique(string) {
  const set = {}
  for (let i = 0; i < string.length; i++) {
    const letter = string[i]
    if (letter in set) return false
    else set[letter] = true
  }
  return true
}