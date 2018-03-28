class BST {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  insert(value) {
    const node = new BST(value)
    let current = this

    if (value <= this.value) {
      if (this.left) {
        current = this.left
        current.insert(value)
      } else {
        this.left = node
      }
    } else {
      if (this.right) {
        current = this.right
        current.insert(value)
      } else {
        this.right = node
      }
    }

    return this
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

module.exports.BST = BST