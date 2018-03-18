/*
 * 2.8 Loop Detection
 * Given a cicular linked list, implement an
 * algorithm that returns the node at the
 * beginning of the loop.
 */

/*
 * Tortoise & Hare
 * @params {linked_list} list
 * @return {linked_list}
 */

function detectLoop(list) {
  let slow = list.next, fast = list.next.next

  while (slow !== fast) {
    slow = slow.next
    fast = (fast.next) ? fast.next.next : null
    if (fast === null || slow === null) return null
  }

  fast = list // reset to head of list

  while (slow !== fast) {
    slow = slow.next
    fast = fast.next
    console.log('hi')
  }

  return slow
}

module.exports.detectLoop = detectLoop