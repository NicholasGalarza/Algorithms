const { LinkedListNode, printAll, values } = require('../../DataStructures/linked_list_node')

/* 
 * 2.5 Sum Lists
 * You have two numbers represented by a linked_list,
 * where each node contains a single digit. The digits
 * are stored in `reverse` order, such that 1's digit
 * is at the head of the list. Write a function that
 * adds the two numbers and return sthe sum as a
 * linked_list. Example:
 * 
 * Input: 
 *  (7 -> 1 -> 6) + (5 -> 9 -> 2), thus 617 + 295
 * Output: 
 *  (2 -> 1 -> 9), resulting in 912
 */

/* In place solution
 * @params{linked_list, linked_list} L1, L2
 * @return {linked_list}
 * Runtime O(n) | Space O(1)
 */
function sumLists(L1, L2) {
  // Append zeros until both lists are equal
  let ptr1 = L1, ptr2 = L2
  while (ptr1 !== null && ptr2 !== null) {
    if (ptr1.next === null && ptr2.next !== null) {
      ptr1.next = new LinkedListNode(0)
    } else if (ptr2.next === null && ptr1.next !== null) {
      ptr2.next = new LinkedListNode(0)
    }
    ptr1 = ptr1.next
    ptr2 = ptr2.next
  }

  let sum = new LinkedListNode(0),
    sumPtr = sum,
    carry = 0

  while (L1 !== null && L2 !== null) {
    let x = L1 ? L1.value : 0
    let y = L2 ? L2.value : 0

    let currentSum = x + y + carry
    let valueToInsert = (currentSum >= 10) ? currentSum % 10 : currentSum
    carry = (currentSum >= 10) ? 1 : 0

    sumPtr.next = new LinkedListNode(valueToInsert)
    sumPtr = sumPtr.next

    L1 = L1.next
    L2 = L2.next
  }

  // edge case if both values are same length and carry over exists.
  if (carry > 0) {
    sumPtr.next = new LinkedListNode(carry)
    sumPtr = sumPtr.next
  }

  return sum.next
}

module.exports.sumLists = sumLists