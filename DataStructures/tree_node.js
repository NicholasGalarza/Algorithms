class TreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  breadthFirstSearch() {
    const values = []
    const queue = [this]

    while (queue.length > 0) {
      const current = queue.shift()
      values.push(current.value)
      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
    }

    return values
  }
}

module.exports.TreeNode = TreeNode