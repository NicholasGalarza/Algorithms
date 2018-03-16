/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

const partition = (head, x) => {
  const leftDummy = new ListNode(0),
    rightDummy = new ListNode(0)

  let left = leftDummy,
    right = rightDummy

  while (head) {
    if (head.val < x) {
      left.next = head
      left = left.next
    } else {
      right.next = head
      right = right.next
    }
    head = head.next
  }

  right.next = null
  left.next = rightDummy.next
  return leftDummy.next
}