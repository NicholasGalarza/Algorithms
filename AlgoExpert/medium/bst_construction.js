class BST {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  insert(value) {
    let current = this

    if (value < this.value) {
      if (this.left) {
        current = this.left
        current.insert(value)
      } else {
        current.left = new BST(value)
      }
    } else {
      if (this.right) {
        current = this.right
        current.insert(value)
      } else {
        current.right = new BST(value)
      }
    }
    return this
  }

  contains(value) {
    // Write your code here.
    if (this.value === value) return true

    const path = (value < this.value) ? "left" : "right",
      child = this[path]
    // the return stmt here is important
    if (child) return child.contains(value)
    return false
  }

  remove(value, parent = null) {
    // Find value
    let current = this

    while (current !== null) {
      if (value < current.value) {
        parent = current
        current = current.left
      } else if (value > current.value) {
        parent = current
        current = current.right
      } else {
        // Two Children Nodes
        if (current.left && current.right) {
          current.value = current.right.getMinValue()
          current.right.remove(current.value, current)
        } else if (parent === null) {
          if (current.left) {
            current.value = current.left.value
            current.right = current.left.right
            current.left = current.left.left
          } else if (current.right) {
            current.value = current.right.value
            current.left = current.right.left
            current.right = current.right.right
          } else { // if BST has only one node.
            current.value = null
          }
        } else if (parent.left === current) {
          parent.left = (current.left) ? current.left : current.right
        } else if (parent.right === current) {
          parent.right = (current.left) ? current.left : current.right
        }
        break
      }
    }
    return this
  }

  getMinValue() {
    if (this.left === null) {
      return this.value
    } else {
      return this.left.getMinValue()
    }
  }
}
