const { BST } = require('../../DataStructures/binary_search_tree')
/*
 * 4.5 Check Balanced
 * Implement a function to check if a binary tree is balanced.
 * For the purpose of this question, a balanced tree is defined
 * to be a tree such that the heights of the two subtrees of
 * any node never differ by more than one.
 */

function checkBalanced(tree) {
  return checkHeight(tree) !== -1
}

function checkHeight(root) {
  if (root === null) return -1

  let leftHeight = checkHeight(root.left)
  if (leftHeight === -1) return -1
  
  let rightHeight = checkHeight(root.right)
  if (rightHeight === -1) return -1

  if (Math.abs(leftHeight - rightHeight) > 1) return -1
  return 1 + Math.max(leftHeight, rightHeight)
}

const balanced = new BST(3)
balanced.insert(1).insert(0).insert(2).insert(5).insert(4)
const unbalanced = new BST(5)
unbalanced.insert(4).insert(3).insert(2).insert(6)

console.log('BFS of balanced tree', balanced.breadthFirstSearch())
console.log('is BST Balanced?', checkBalanced(balanced))

console.log('BFS of unbalanced tree', unbalanced.breadthFirstSearch())
console.log('is BST Balanced?', checkBalanced(unbalanced))

module.exports.checkBalanced = checkBalanced