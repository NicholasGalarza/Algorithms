/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = (s) => {
  // split string into char array
  s = s.split("")

  let vowels = [],
    position = [],
    counter = 0

  // iterate from back to front, using an array to store location and char
  for (let i = 0; i < s.length; i++) {
    if (/[aeiouAEIOU]/.test(s[i])) {
      vowels[counter] = s[i]
      position[counter] = i
      counter++
    }
  }

  // iterate from back and front of vowels to perform swapping of vowels
  for (let left = 0, right = vowels.length - 1; left < right; left++ , right--) {
    let pLeft = position[left], pRight = position[right]
    s[pLeft] = vowels[right]
    s[pRight] = vowels[left]
  }

  return s.join("")
};