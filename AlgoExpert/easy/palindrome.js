/* Problem: 
 * Given a string, determine if it is read the same when 
 * its characters are reversed.
 */

// Runtime O(n) | O(1) space
const isPalindrome = (string) => string.split("").reverse().join("") === string

// Runtime O(n) | O(1) space
// The solution is a lot faster because you are really only moving 
// half way through the string but n/2 is still O(n) anyway. 
function isPalindrome(string) {
  for (let front = 0, back = string.length - 1; front < back; front++ , back--) {
    if (string[front] !== string[back]) return false;
  }
  return true
}