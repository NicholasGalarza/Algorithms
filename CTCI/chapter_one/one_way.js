/* 1.5 One Way
 * There are three types of edits that can
 * be performed on strings: insert, remove,
 * or replace a character. Given two strings,
 * write a function to check if they are one
 * edit (or zero) edits away.
 */

/*
 * Three Questions Approach
 * @params: {string, string} str1, str2
 * @return: {boolean}
 * Runtime O(n) | Space O(1)
 */
function isOneAway(first, second) {
  if (first.length === second.length) {
    return oneEditReplace(first, second)
  } else if (first.length + 1 === second.length) {
    return oneEditInsert(first, second)
  } else if (first.length - 1 === second.length) {
    return oneEditInsert(second, first)
  }
  return true
}

function oneEditReplace(str1, str2) {
  let update = false
  for (let idx = 0; idx < str1.length; idx++) {
    if (str1[idx] != str2[idx] & update) return false
    else if (str1[idx] != str2[idx]) update = true
  }
  return true
}

// @params: {string, string} s1, s2
// @note: smaller string must be s1 and larger s2
function oneEditInsert(s1, s2) {
  let left = 0, right = 0,
    inserted = false

  while (left < s1.length && right < s2.length) {
    if (s1[left] !== s2[right] && !inserted) {
      insert = true
      right = right + 1
    } else if (s1[left] !== s2[right] && inserted) {
      return false
    } else {
      left = left + 1
      right = right + 1
    }
  }

  return true
}

module.exports.isOneAway = isOneAway
