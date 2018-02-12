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

// Optimal
// Runtime O(n) | Space O(m)
function longestSubstringWithoutDuplication(string) {
  let lastSeen = {},
    longestRange = [0, 1],
    startIdx = 0

  for (let i = 0; i < string.length; i++) {
    const char = string[i]

    if (char in lastSeen) {
      startIdx = Math.max(startIdx, lastSeen[char] + 1)
    }
    if (longestRange[1] - longestRange[0] < (i + 1) - startIdx) {
      longestRange = [startIdx, i + 1]
    }
    lastSeen[char] = i
  }
  return string.slice(longestRange[0], longestRange[1])
}