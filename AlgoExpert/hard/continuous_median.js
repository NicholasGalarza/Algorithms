// Do not edit the class below except for
// the insert method. Feel free to add new
// properties and methods to the class.
class ContinuousMedianHandler {
  constructor(value) {
    this.lowerHalf = new Heap(this.MAX_HEAP, [])
    this.greaterHalf = new Heap(this.MIN_HEAP, [])
    this.median = null
  }

  insert(number) {
    if (!this.lowerHalf.heapSize || number < this.lowerHalf.peek()) {
      this.lowerHalf.insert(number)
    } else {
      this.greaterHalf.insert(number)
    }

    if (Math.abs(this.lowerHalf.heapSize - this.lowerHalf.heapSize) === 2) {
      this.rebalanceHeaps(this.lowerHalf, this.greaterHalf)
    }

    this.updateMedian(this.lowerHalf, this.greaterHalf)
  }

  rebalanceHeaps(minHeap, maxHeap) {
    if (minHeap.heapSize > maxHeap.heapSize) {
      const value = minHeap.remove()
      maxHeap.insert(value)
    } else {
      const value = maxHeap.remove()
      minHeap.insert(value)
    }
  }

  updateMedian(minHeap, maxHeap) {
    if (minHeap.heapSize === maxHeap.heapSize) {
      this.median = this.calculateAverage(minHeap.peek(), maxHeap.peek())
    } else if (minHeap.heapSize > maxHeap.heapSize) {
      this.median = minHeap.peek()
    } else {
      this.median = maxHeap.peek()
    }
  }

  getMedian() { return this.median }
  calculateAverage(a, b) { return (a + b) / 2 }
  MIN_HEAP(a, b) { return a < b }
  MAX_HEAP(a, b) { return a > b }
}

class Heap {
  constructor(comparator, array) {
    this.comparator = comparator
    this.heap = this.buildHeap(array)
    this.heapSize = array.length
  }

  buildHeap(array) {
    const firstParent = this.getParent(array.length - 1)
    for (let i = firstParent; i >= 0; i--) {
      this.siftDown(i, array.length, array)
    }
    return array
  }

  siftDown(idx, heapSize, heap) {
    let childOneIdx = this.getFirstChild(idx)

    while (childOneIdx < heapSize) {
      const childTwoIdx = (this.getSecondChild(idx) < heapSize) ? this.getSecondChild(idx) : null,
        idxToSwap = (childTwoIdx && this.comparator(heap[childTwoIdx], heap[childOneIdx])) ? childTwoIdx : childOneIdx

      if (this.comparator(heap[idxToSwap], heap[idx])) {
        this.swapElements(idx, idxToSwap, heap)
        idx = idxToSwap
        childOneIdx = this.getFirstChild(idx)
      } else { break }
    }
  }

  siftUp(idx, heap) {
    let parentIdx = this.getParent(idx)
    while (idx > 0 && this.comparator(heap[idx], heap[parentIdx])) {
      this.swapElements(idx, parentIdx, heap)
      idx = parentIdx
      parentIdx = this.getParent(idx)
    }
  }

  peek() { return this.heap[0] }

  remove() {
    this.swapElements(0, this.heap.length - 1, this.heap)
    const deletedNode = this.heap.pop()
    this.heapSize--
    this.siftDown(0, this.heap.length, this.heap)
    return deletedNode
  }

  insert(value) {
    this.heap.push(value)
    this.heapSize++
    this.siftUp(this.heap.length - 1, this.heap)
  }

  swapElements(left, right, heap) {
    const temp = heap[left]
    heap[left] = heap[right]
    heap[right] = temp
  }

  getFirstChild(idx) { return 2 * idx + 1 }
  getSecondChild(idx) { return 2 * idx + 2 }
  getParent(idx) { return Math.floor((idx - 1) / 2) }
}

// Do not edit the line below.
exports.ContinuousMedianHandler = ContinuousMedianHandler;
