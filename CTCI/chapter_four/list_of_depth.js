/*
 * 4.3 List of Depths
 * Given a binary tree, design an algorithm which creates
 * a linked list of all the nodes at each depth (e.g., if
 * you have a tree with depth D, you'll have D linked 
 * lists)
 */

/*
 * Runtime O(n) | Space O(n)
 */
function listOfDepth(tree) {
  console.log(traverseAndLink(0, tree, {}))
  return traverseAndLink(0, tree, {})
}

// preorder traverse and build or add elements to a
// linked list at each level
function traverseAndLink(level, root, container) {
  if (root === null) return container

  if (!(level in container)) {
    container[level] = new SinglyLinkedList(root.value)
  } else {
    container[level].insert(root.value)
  }

  traverseAndLink(level + 1, root.left, container)
  traverseAndLink(level + 1, root.right, container)

  return container
}

class SinglyLinkedList {
  constructor(value) {
    this.value = value
    this.next = null
  }

  insert(value) {
    const node = new SinglyLinkedList(value)
    let current = this
    while (current.next !== null) {
      current = current.next
    }
    current.next = node
    return this
  }
}

module.exports.listOfDepth = listOfDepth