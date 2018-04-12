/*
 * 4.8 First Common Ancestor
 * Design an algorithm and write code to find the first
 * common ancestor of two nodes in a binary tree. Avoid
 * storing additional nodes in a data structure. NOTE:
 * this is not necessarily a binary search tree
 */

/*
 * @params {TreeNode, node, node} root, x, y
 * @return {TreeNode}
 */

// Runtime O(n) | Space O(n) - recursive stack
function LCA(root, x, y) {
  if (root === null) return null
  if (root.value == x || root.value == y) return root

  const left = LCA(root.left, x, y)
  const right = LCA(root.right, x, y)

  if (left && right) return root
  if (!left && !right) return null
  return left ? left : right
}

module.exports.LCA = LCA // least common ancestor