const { LinkedListNode, printAll, values } = require('../../DataStructures/linked_list_node')

/*
 * 2.4 Partition
 * Write code to partition a linked list around a value x,
 * such that all nodes less than x come before all nodes 
 * greater than or equal to x. If x is contained within
 * the list, the values of x only need to be after the 
 * elements less than x. The partition element x can appear
 * anywhere in the `right partition`; it does not need to
 * appear between the left and right partitions.
 */

/*
 * @params {linked_list, value} head, pp
 * @return {linked_list}
 */
function partition(head, pp) {
  let leftList = new LinkedListNode(0),
    rightList = new LinkedListNode(0)

  let leftPtr = leftList, rightPtr = rightList

  while (head !== null) {
    if (head.value < pp) {
      leftPtr.next = head
      leftPtr = leftPtr.next
    } else {
      rightPtr.next = head
      rightPtr = rightPtr.next
    }
    head = head.next
  }
  // Move lists up from the inital dummy value of `0`
  leftList = leftList.next
  rightList = rightList.next
  // Then link their references.
  leftPtr.next = rightList
  rightPtr.next = null
  //console.log('left', values(leftList))
  //console.log('right', values(rightList))
  return leftList
}

module.exports.partition = partition