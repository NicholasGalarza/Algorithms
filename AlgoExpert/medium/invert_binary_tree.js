// Runtime O(n) | Space O(n)
function invertBinaryTree(tree) {

  const invert = node => {
    let saveLeft = node.left
    node.left = node.right
    node.right = saveLeft
    return node
  }

  const queue = [tree]

  while (queue.length > 0) {
    let current = queue.shift()
    current = invert(current)
    if (current.left) queue.push(current.left)
    if (current.right) queue.push(current.right)
  }
  return tree
}
