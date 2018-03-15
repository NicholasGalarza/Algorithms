const { SinglyLinkedList } = require('../../DataStructures/singly_linked_list')

/* 
 * 2.2 Return Kth to Last
 * Implement an algorithm to find the kth to last
 * element of a singly linked list
 */

/*
 * Two Pointers Solutions
 * @params {singly_linked_list, int} list, k
 * @return {singly_linked_list}
 * Runtime O(n) | Space O(1)
 */

function removeKthLast(list, k) {
  let current = list.head,
    ahead = current

  // Return list if `k` is out of bounds.
  if (k < 1 || k > list.length) return list

  // Move `ahead` k positions to the right.
  for (let i = 0; i < k && k <= list.length; i++) {
    ahead = ahead.next
  }

  // Then move both pointers accordingly
  while (ahead !== null && ahead.next !== null) {
    current = current.next
    ahead = ahead.next
  }

  // Operation to remove kth to last
  if (ahead === null) { // if `current` is at start
    list.head = list.head.next
  } else { // anywhere else in the list
    current.next = current.next.next
  }

  return list
}

module.exports.removeKthLast = removeKthLast