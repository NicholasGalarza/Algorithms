/*
 * 3.3 Stack of Plates
 * Imagine a (literal) stack of plates. If the stack
 * gets too high, it might topple. Therefore, in real
 * life, we would likely start a new stack when the
 * previous stack exceeds soe composed of several 
 * stacks and should create a new stack once the
 * previous one exceeds capacity. SetOfStacks.push()
 * and SetOfStacks.pop() should behave identically
 * to a single stack.
 * 
 * FOLLOW UP
 * Implement a function popAt(int idx) which performs
 * a pop operation on a specific sub-stack.
 */

class StackOfPlates {
  constructor(cap) {
    this.capacity = cap
    this.piles = [[]]
    this.currentPile = 0
  }

  _findOldestEmptyStack() {
    for (let i = 0; i < this.piles.length; i++) {
      const currentPile = this.piles[i]
      if (currentPile.length < this.capacity) {
        this.currentPile = i
        return true
      }
    }
    return false
  }

  push(value) {
    // update pointer to oldest incomplete stack
    this._findOldestEmptyStack()

    if (this.piles[this.currentPile].length < this.capacity) {
      this.piles[this.currentPile].push(value)
    } else {
      this.currentPile++
      this.piles.push([]) // add new array
      this.piles[this.currentPile].push(value)
    }
    return this
  }

  pop() {
    // cycle down until popable stack is found
    for (let i = this.currentPile; i >= 0; i--) {
      if (this.piles[i].length) {
        this.currentPile = i
        return this.piles[this.currentPile].pop()
      }
    }
    return []
  }

  popAt(idx) {
    return (idx < this.piles.length) ? this.piles[idx].pop() : null
  }
}

module.exports.StackOfPlates = StackOfPlates