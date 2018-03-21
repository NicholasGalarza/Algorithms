/*
 * 3.5 Sort Stack
 * Write a program to sort a stack such that the
 * smallest items are on the top. You can use an
 * additional temporary stack, but you may not
 * copy the elements into any other data structure
 * (such as an array). The stack supports the
 * following operations: push, pop, peek, and
 * isEmpty
 */

class MinStack {
  constructor() {
    this.storage = []
    this.temp = []
  }

  push(value) {
    // base case
    if (this.storage.length === 0) {
      this.storage.push(value)
    } else {
      // push values onto temp until value is placed in storage
      while (value > this.peek() && this.storage.length > 0) {
        const smaller = this.storage.pop()
        this.temp.push(smaller) // [ 2, 3, 5]
      }
      
      this.storage.push(value)

      // push values from temp back into storage
      while (this.temp.length !== 0) {
        const element = this.temp.pop()
        this.storage.push(element)
      }
    }

    return this
  }
  pop() { return this.storage.pop() }
  peek() { return (this.storage.length) ? this.storage[this.storage.length - 1] : [] }
  isEmpty() { return this.storage.length === 0 }
}

module.exports.MinStack = MinStack