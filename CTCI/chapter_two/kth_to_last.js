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
 */

const list = new SinglyLinkedList()
list.insert(3).insert(5).insert(7).insert(9).insert(11)

function removeLastK(list, k) {
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
  // (2) current = {first, anywhere else} in list
  if (ahead === null) {
    list.head = list.head.next
  } else {
    current.next = current.next.next
  }

  return list
}
// [3, 5, 7, 9, 11]
removeLastK(list, 1).values()