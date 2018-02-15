/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  const stack = []
  let current = root

  while (current !== null || stack.length) {
    if (current.right) stack.push(current.right)
    if (current.left) {
      current.right = current.left
      current.left = null
    } else if (stack.length) {
      const temp = stack.pop()
      current.right = temp
    }
    current = current.right
  }
};