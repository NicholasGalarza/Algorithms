const { TreeNode } = require('../../DataStructures/tree_node')
/*
 * 4.2 Minimal Tree
 * Given a sorted (increasing order) array with unique
 * integer elements, write an algorithm to create a
 * binary search tree with minimal height. 
 */

/*
 * @params {array} array
 * @return {binary_search_tree}
 * Runtime: O(n) | Space: O(n)
 */
function minimalTree(array) {
  return buildSubTree(array, 0, array.length - 1)
}

function buildSubTree(array, start, end) {
  if (start > end) return null
  const mid = Math.floor((end + start) / 2)
  const root = new TreeNode(array[mid])
  root.left = buildSubTree(array, start, mid - 1)
  root.right = buildSubTree(array, mid + 1, end)
  return root
}

module.exports.minimalTree = minimalTree

// Explanation for this problem
// {https://www.youtube.com/watch?v=VCTP81Ij-EM&t=121s}