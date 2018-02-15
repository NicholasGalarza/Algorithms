/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function (root) {
  let head = null
  let previous = null
  let current = root

  while (current !== null) {
    while (current !== null) {
      if (current.left !== null) { // Left Child
        if (previous != null) previous.next = current.left
        else head = current.left
        previous = current.left
      }

      if (current.right !== null) { // right child
        if (previous !== null) previous.next = current.right
        else head = current.right
        previous = current.right
      }
      // next node
      current = current.next
    }
    current = head
    head = null
    previous = null
  }
};