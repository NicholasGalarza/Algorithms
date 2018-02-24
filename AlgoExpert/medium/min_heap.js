/* A heap is a binary tree that has two properties:
 * 1.) The heap is populated by level-first insertions
 * 2.) Each child child to every node is either less than or 
 *  greater than each child node.
 */
class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  // Runtime O(n) | Space O(n)
  buildHeap(array) {
    const firstParent = this.getParent(array.length - 1)
    for (let currentIdx = firstParent; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, array.length, array)
    }
    return array
  }

  // Runtime O(log(n)) | Space O(1)
  siftDown(idx, heapSize, heap) {
    let childOneIdx = this.getChildOne(idx)

    while (childOneIdx < heapSize) {
      const childTwoIdx = (this.getChildTwo(idx) < heapSize) ? this.getChildTwo(idx) : null,
        idxToSwap = (childTwoIdx && heap[childTwoIdx] < heap[childOneIdx]) ? childTwoIdx : childOneIdx

      if (heap[idxToSwap] < heap[idx]) {
        this.swap(idx, idxToSwap, heap)
        idx = idxToSwap
        childOneIdx = this.getChildOne(idx)
      } else {
        break;
      }
    }
  }

  // Runtime O(log(n)) | Space O(1)
  siftUp(idx, heap) {
    let parentIdx = this.getParent(idx)
    while (idx > 0 && heap[idx] < heap[parentIdx]) {
      this.swap(idx, parentIdx, heap)
      idx = parentIdx
      parentIdx = this.getParent(idx)
    }
  }

  // Runtime O(1) | Space O(1)
  peek() { return this.heap[0] }

  // Runtime O(log(n)) | Space O(1)
  remove() {
    this.swap(0, this.heap.length - 1, this.heap)
    const deletedNode = this.heap.pop()
    this.siftDown(0, this.heap.length, this.heap)
    return deletedNode
  }

  // Runtime O(log(n)) | Space O(1)
  insert(value) {
    this.heap.push(value)
    this.siftUp(this.heap.length - 1, this.heap)
  }

  // Runtime O(1) | Space O(1)
  swap(i, j, heap) {
    const temp = heap[j]
    heap[j] = heap[i]
    heap[i] = temp
  }

  // Helper methods to calculate children & parent indices.
  getChildOne(idx) { return 2 * idx + 1 }
  getChildTwo(idx) { return 2 * idx + 2 }
  getParent(idx) { return Math.floor((idx - 1) / 2) }
}