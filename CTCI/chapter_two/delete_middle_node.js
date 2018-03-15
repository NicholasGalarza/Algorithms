/*
 * 2.3 Delete Middle Node
 * Implement an algorithm to delete a node in the 
 * middle (any node but the first & last node) of
 * a singly linked list, given only access to 
 * that node.
 */

/*
 * @params {singly_linked_list, value} list, node
 * @return {singly_linked_list}
 * Runtime O(n) | Space O(1)
 */
function removeMiddleNode(list, value) {

  let current = list.head
  let ahead = current.next

  while (ahead.next.next !== null) {
    if (ahead.value === value) {
      current.next = ahead.next
      break
    }
    ahead = ahead.next
    current = current.next
  }
  return list
}

module.exports.removeMiddleNode = removeMiddleNode