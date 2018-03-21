/*
 * 3.4 Queue via Stacks
 * Implement a MyQueue class which implements a queue
 * using two stacks
 */

class Queue2Stacks {
  constructor() {
    this.O = []
    this.N = []
  }

  enqueue(value) {
    this.N.push(value)
    return this
  }

  _shift() {
    if (!this.O.length) {
      while (this.N.length > 0) {
        const element = this.N.pop()
        this.O.push(element)
      }
    }
  }

  peek() {
    this._shift()
    return this.O[this.O.length - 1]
  }

  dequeue() {
    this._shift()
    return this.O[0].pop()
  }
}