const { LinkedListNode, printAll, values } = require('../../DataStructures/linked_list_node')

/*
 * 2.7 Intersection
 * Given two (singly) linked-lists, determine if the
 * two lists intersect. Return the intersecting node.
 * Note that the intersection is defined based on
 * reference, not value. That is, if the kty node of
 * the first linked list is the exact same node (by
 * reference) as the jth node of the second linked
 * list, then they are intersecting.
 */

/* 
 * Two Passes: Find Difference, Then start search
 * @params {singly_linked_list, singly_linked_list} list1, list2
 * @return {linked_list_node}
 */
function intersect(list1, list2) {

  let ptr1 = list1, ptr2 = list2

  while (ptr1 !== null && ptr2 !== null) {
    ptr1 = ptr1.next
    ptr2 = ptr2.next
  }

  if (ptr1 === null && ptr2 !== null) { // (L2 > l1)
    list2 = updateListPointer(ptr2, list2)
  } else if (ptr2 === null && ptr1 !== null) { // (L1 > L2)
    list1 = updateListPointer(ptr1, list1)
  }

  while (list1 !== null) {
    if (list1 === list2) return list1
    list1 = list1.next
    list2 = list2.next
  }

  return null
}

/*
 * @params {*list_node, linked_list}, ptr list
 * @return {linked_list}
 */
function updateListPointer(ptr, list) {
  let diff = 0

  while (ptr !== null) {
    diff++
    ptr = ptr.next
  }

  for (let i = 0; i < diff; i++) {
    list = list.next
  }
  return list
}



module.exports.intersect = intersect