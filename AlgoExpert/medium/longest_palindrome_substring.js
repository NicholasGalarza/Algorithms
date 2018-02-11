// Brute Force: Runtime O(n^3) | Space O(1)
function longestPalindromicSubstring(string) {
  // Helper: Generate all substrings of string
  const generateAllSubstrings = (str) => {
    let subs = []
    for (let i = 0; i < str.length; i++)
      for (let len = 1; len <= str.length - i; len++)
        subs.push(str.substr(i, len))
    return subs
  }

  // Helper: Check if inputted string is a palindrome
  const isPalindrome = (str) => str.split("").reverse().join("") === str

  const subs = generateAllSubstrings(string)

  let longestPalindrome = ''

  for (const sub of subs) {
    if (isPalindrome(sub) && sub.length > longestPalindrome.length) {
      longestPalindrome = sub
    }
  }

  return longestPalindrome
}