/*
 * 2.6 Palindrome
 * Implement a function to check if a
 * linked list is a palindrome.
 */

/*
 * Using a stack
 * @params {linked_list} list
 * @return {linked_list}
 * Runtime O(n) | Space O(n)
 */

function isPalindrome(list) {
  const stack = []

  let ptr, iter
  ptr = iter = list.head
  
  while (ptr !== null) {
    stack.push(ptr.value)
    ptr = ptr.next
  }
 
  while (stack.length > 0) {
    if (stack.pop() != iter.value) return false
    iter = iter.next
  }

  return true
}

module.exports.isPalindrome = isPalindrome