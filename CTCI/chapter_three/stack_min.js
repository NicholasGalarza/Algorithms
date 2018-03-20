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

class StackMin {
  constructor() {
    this.stack = []
    this.minState = []
    this.curr = 0
  }

  push(value) {
    this.stack.push(value)
    
    if (this.minState.length > 0) {
      const previous = this.minState[this.curr - 1] 
      const min = Math.min(previous, this.stack[this.curr])
      this.minState.push(min)
    } else {
      this.minState.push(value)
    }

    this.curr++
    return this
  }

  pop() {
    const element = this.stack.pop()
    const min = this.stack.pop()
    this.curr--
    return { element, min }
  }

  min() { 
    const min = this.minState[this.curr - 1]
    return min ? min : null
  }
}

module.exports.StackMin = StackMin