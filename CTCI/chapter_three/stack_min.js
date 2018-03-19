/*
 * 3.2 Stack Min
 * How would you design a stack which, in addition to
 * push & pop, has a function min which returns the
 * minimum element? Push, pop, and min should all operate
 * in O(1) time.
 */

/*
 * Each time an element is added onto the stack, using
 * another stack which keeps track of the previous
 * minimum value is saved in parallel.
 */

class stackMin {
  constructor() {
    this.stack = []
    this.minState = []
    this.curr = 0
  }

  push(value) {
    this.stack.push(value)
    this.curr++

    if (this.minState.length) {
      const previous = this.minState[curr - 1]
      const min = previous < this.stack[curr]
      this.minState.push(value)
    } else {
      this.minState.push(value)
    }
    return this
  }

  pop() {
    const lastElement = this.stack.pop()
    const min = this.stack.pop()
    this.curr--
    return { lastElement, min }
  }

  min() { return this.minState[this.curr] }
}

module.exports.stackMin = stackMin