/* 1.9 String Rotation
 * Assume you have a method `isSubstring` which
 * checks if one word is a substring of another.
 * Given 2 strings, write code to check if s2 is
 * a rotation of s1 using only one call to 
 * isSubstring()
 * Ex: 'waterbottle', 'erbottlewat' => true
 */

/*
 * @params {string, string} s1, s2
 * @return {boolean}
 */
function isRotation(s1, s2) {
  if (s1.length !== s2.length) return false
  const xy = s2.concat(s2)
  return isSubstring(xy, s1)
}

function isSubstring(s1, s2) {
  return s1.includes(s2)
}

module.exports.isRotation = isRotation