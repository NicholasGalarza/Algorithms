/* 
 * 4.5 Validate BST
 * Implement a function to check if a binary tree is a
 * binary search tree.
 */

/*
 * @params {tree} tree
 * @return {boolean}
 * Runtime O(n) | Space O(n)
 */
function validateBST(tree) {
  return validateBSTHelper(tree, -Infinity, Infinity)
}

function validateBSTHelper(root, min, max) {
  if (root === null) return true
  if (min > root.value || max <= root.value) return false

  const left = validateBSTHelper(root.left, min, root.value),
    right = validateBSTHelper(root.right, root.value, max)

  return left && right
}


module.exports.validateBST = validateBST