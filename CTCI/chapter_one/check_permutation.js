/* Input
 * @params: (string, string) str1, str2
 * @return: boolean
 * Runtime O(n) | Space O(n)
 */
function permutation(str1, str2) {
  if (str1.length !== str2.length) return false

  const set = {}

  for (const char of str1) {
    if (!(char in set)) set[char] = 1
    else set[char] += 1
  }

  for (const char of str2) {
    if (char in set) {
      set[char]--
      if (set[char] <= 0) return false
    } else { return false }
  }

  return true
}