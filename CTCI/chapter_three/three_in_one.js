/*
 * 3.1 Three In One
 * Describe how you could use a single array to implement
 * three stacks
 */

/*
 * Partition the single array into three buckets for each stack
 * Partitioning is accomplished by using three sets of pointers
 * to keep track of each subset which will be termed as a 
 * `bucket`. Each bucket has an upperbound{top},
 * lowerbound{bot}, an intermediary pointer to track where in the
 * stack the "top" is situated {current}.
 * 
 * Support for this class includes:
 * 1.) push()
 * 2.) peek()
 * 3.) pop()
 * 4.) _growContainer()
 * 
 * 
 * growContainer acts as a `private` method which is only used
 * to double the size of each bucket. It will save the elements
 * inside of each bucket, double the containing array in size,
 * update the top, lower, and current pointers for each bucket,
 * and place the saved elements in their new respective positions.
 * 
 * Formulas for keeping track of containers are:
 *  top:    {containerSize} / 3 * {bucket} - 1
 *  bottom: {containerSize} / 3 * {bucket - 1}
 */

class tripleStack {
  constructor() {
    this.container = Array(30).fill(null)
    // keep track of pointers for start & end of buckets
    this.top1 = this.container.length / 3 - 1      // 9
    this.current1 = this.top1
    this.bot1 = this.container.length / 3 * 0      // 0
    this.top2 = this.container.length / 3 * 2 - 1  // 19
    this.current2 = this.top2
    this.bot2 = this.container.length / 3 * 1      // 10
    this.top3 = this.container.length / 3 * 3 - 1  // 29
    this.current3 = this.top3
    this.bot3 = this.container.length / 3 * 2      // 20
  }

  /*
   * @params {integer, integer} bucket {1 - 3}, value
   * @return {this} // for chaining
   */
  push(bucket, value) {
    switch (bucket) {
      case 1:
        if (this.current1 === this.bot1) {
          this._growContainer()
          const idx = --this.current1
          this.container[idx] = value
        } else {
          const idx = --this.current1
          this.container[idx]
        }
        return this
      case 2:
        if (this.current2 === this.bot2) {
          this._growContainer()
          const idx = --this.current2
          this.container[idx] = value
        } else {
          const idx = --this.current2
          this.container[idx]
        }
        return this
      case 3:
        if (this.current3 === this.bot3) {
          this._growContainer()
          const idx = --this.current3
          this.container[idx] = value
        } else {
          const idx = --this.current3
          this.container[idx]
        }
        return this
      default:
        console.error("ERROR: Out of Bounds -- Bucket must be 1 - 3")
        return this
    }
  }

  /*
   * @params {integer} bucket {1 - 3}
   * @return {this}
   * Logs the top element in the bucket
   */
  peek(bucket) {
    if (bucket === 1) {
      console.log(this.container[this.current1])
    } else if (bucket === 2) {
      console.log(this.container[this.current2])
    } else if (bucket === 3) {
      console.log(this.container[this.current3])
    } else {
      console.error("ERROR: Out of Bounds - Bucket must be 1 - 3")
    }
    return this
  }

  /*
   * Private method to increase the length of all buckets
   * and shift values in each bucket to their new spaces.
   * Doubles the bucket length each time growContainer is 
   * invoked.
   * 
   * Runtime O(n) | Space O(3B)
   * 
   * Iterate through the entire array, space complexity for
   * each element inside of each bucket
   */
  _growContainer() {
    // store the values from each bucket into temporary arrays
    const bucket1 = this.container.slice(this.current1, this.top1 + 1)
    const bucket2 = this.container.slice(this.current2, this.top2 + 1)
    const bucket3 = this.container.slice(this.current3, this.top3 + 1)

    // implicitly double the size of each bucket {10, 20, 40, 80, ...}
    this.container = Array(this.container.length * 2).fill(null)

    // update the boundaries in the list now that container has increased capacity.
    this.top1 = this.container.length / 3 - 1
    this.bot1 = this.container.length / 3 * 0
    this.top2 = this.container.length / 3 * 2 - 1
    this.bot2 = this.container.length / 3 * 1
    this.top3 = this.container.length / 3 * 3 - 1
    this.bot3 = this.container.length / 3 * 2

    // update the current pointers after the upperbounds have been updated
    this.current1 = this.top1 - bucket1.length
    this.current2 = this.top2 - bucket2.length
    this.current3 = this.top3 - bucket3.length

    const repopulateContainer = (upperBound, lowerBound, bucket) => {
      for (let i = upperBound, bucketIdx = 0; i >= lowerBound; i-- , bucketIdx++) {
        this.container[i] = bucket[bucketIdx]
      }
    }

    // finally, place the previously removed elements in their new homes :)
    repopulateContainer(this.top1, this.current1, bucket1)
    repopulateContainer(this.top2, this.current2, bucket2)
    repopulateContainer(this.top3, this.current3, bucket3)
  }

  /* 
   * @params {integer} bucket {1 - 3}
   * @return {value} the value popped off from sub stack
   */
  pop(bucket) {
    // Two cases can occur for each bucket:
    // 1.) Is the current sub stack empty?
    // 2.) No? Then just delete the node at current{x}
    switch (bucket) {
      case 1:
        if (this.container[this.current1] === null) {
          console.error('Sub-bucket is empty')
          return null
        } else {
          const deletedValue = this.container[this.current1]
          this.container[this.current1] = null
          this.current1++
          return deletedValue
        }
      case 2:
        if (this.container[this.current1] === null) {
          console.error('Sub-bucket is empty')
          return null
        } else {
          const deletedValue = this.container[this.current2]
          this.container[this.current2] = null
          this.current2++
          return deletedValue
        }
      case 3:
        if (this.container[this.current1] === null) {
          console.error('Sub-bucket is empty')
          return null
        } else {
          const deletedValue = this.container[this.current3]
          this.container[this.current3] = null
          this.current3++
          return deletedValue
        }
      default:
        console.error("ERROR: Out of Bounds - Bucket must be 1 - 3")
        return null
    }
  }
}