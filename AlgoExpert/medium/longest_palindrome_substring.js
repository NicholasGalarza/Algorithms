// Brute Force: Runtime O(n^3) | Space O(1)
// function longestPalindromicSubstring(string) {
//   // Helper: Generate all substrings of string
//   const generateAllSubstrings = (str) => {
//     let subs = []
//     for (let i = 0; i < str.length; i++)
//       for (let len = 1; len <= str.length - i; len++)
//         subs.push(str.substr(i, len))
//     return subs
//   }

//   // Helper: Check if inputted string is a palindrome
//   const isPalindrome = (str) => str.split("").reverse().join("") === str

//   const subs = generateAllSubstrings(string)

//   let longestPalindrome = ''

//   for (const sub of subs) {
//     if (isPalindrome(sub) && sub.length > longestPalindrome.length) {
//       longestPalindrome = sub
//     }
//   }

//   return longestPalindrome
// }

// Runtime O(n^2) | Space O(1)
function longestPalindromicSubstring(string) {

  let longestRange = [0, 1]

  const isPalindromeAt = (left, right) => {
    while (left >= 0 && right < string.length) {
      if (string[left] !== string[right]) break
      left--
      right++
    }
    return [left + 1, right]
  }

  for (let i = 1; i < string.length; i++) {
    const odd = isPalindromeAt(i - 1, i + 1),
      even = isPalindromeAt(i - 1, i),
      currentRange = (odd[1] - odd[0] > even[1] - even[0]) ? odd : even

    longestRange = (currentRange[1] - currentRange[0] > longestRange[1] - longestRange[0]) ? currentRange : longestRange
  }

  return string.slice(longestRange[0], longestRange[1])
}