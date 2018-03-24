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
}

const root = new BST(3)
root.insert(5).insert(2).insert(4).insert(6)
console.log(root)