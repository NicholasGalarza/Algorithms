/*
 * 4.6 Successor
 * Write an algorithm to find the `next` node 
 * (i.e., in-order successor) of a given node
 * in a binary search tree. You may assume
 * that each node has a link to its parent.
 */

/*
 * Tree {
 *  constructor(value) {
 *    this.value = value
 *    this.left = null
 *    this.right = null
 *    this.parent = null
 *  }
 * }
 */
// screw this problem :/
function successor(tree, target) {
  console.log(tree.value)
  return findSuccessorHelper(tree, target, tree.value)
}

function findSuccessorHelper(tree, target, succ) {
  if (tree === null) return null

  if (tree.value === target) {
    switch (tree) {
      case (tree.right === null):
        succ = getAncestor(tree)
        break
      default:
        succ = getMin(tree)
        break
    }
    return succ
  }

  successor(tree.left, target)
  successor(tree.right, target)
  return succ
}

function getMin(root) {
  let current = root
  if (current.right) {
    while (current.left !== null) {
      current = current.left
    }
  }
  return current.value
}

function getAncestor(current) {
  let ancestor = current.parent
  while (ancestor.left !== current) {
    current = ancestor
    ancestor = current.parent
  }
  return ancestor.value
}

module.exports.successor = successor