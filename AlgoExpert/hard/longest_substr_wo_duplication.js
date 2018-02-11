// Runtime O(n+m) where m represent the resets | Space O(1)
function longestSubstringWithoutDuplication(string) {
  let tracker = {}, current = "", longest = string[0]

  for (let i = 0; i < string.length; i++) {
    const char = string[i]
    if (!(char in tracker)) {
      tracker[char] = i
      current += char
      if (current.length > longest.length) longest = current
    } else {
      i = tracker[char] // move the iterator back to previous appearance.
      tracker = {}
      current = ""
    }
  }
  return longest
}