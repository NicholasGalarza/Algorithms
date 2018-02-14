/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// Iterative Solution
// Runtime O(n) | Space O(1)
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = (head) => {
  let previous = null,
    current = head

  while (current !== null) {
    const temp = current.next
    current.next = previous
    previous = current
    current = temp
  }
  return previous
}

// Recursive: Runtime O(n) | Space O(1)
const reverseList = head => {
  if (head === null || head.next === null) return head
  const start = reverseList(head.next)
  head.next.next = head
  head.next = null
  return start
}