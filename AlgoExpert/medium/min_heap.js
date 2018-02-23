class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  // Runtime O(n) | Space O(1)
  buildHeap(array) {
    const firstParent = Math.floor((array.length - 2) / 2)
    for (let currentIdx = firstParent; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, array.length - 1, array)
    }
    return array
  }

  // Runtime O(log(n)) | Space O(1)
  siftDown(idx, end, heap) {
    let childOne = 2 * idx + 1

    while (childOne <= end) {
      const childTwo = (2 * idx + 2 <= end) ? 2 * idx + 2 : -1,
        swapIdx = (childTwo !== -1 && heap[childTwo] < heap[childOne]) ? childTwo : childOne

      if (heap[swapIdx] < heap[idx]) {
        this.swap(idx, swapIdx, heap)
        idx = swapIdx
        childOne = idx * 2 + 1
      } else {
        return;
      }
    }
  }

  // Runtime O(log(n)) | Space O(1)
  siftUp(idx, heap) {
    let parentIdx = Math.floor((idx - 1) / 2)
    while (idx > 0 && heap[idx] < heap[parentIdx]) {
      this.swap(idx, parentIdx, heap)
      idx = parentIdx
      parentIdx = Math.floor((idx - 1) / 2)
    }
  }

  // Runtime O(1) | Space O(1)
  peek() { return this.heap[0] }

  // Runtime O(log(n)) | Space O(1)
  remove() {
    this.swap(0, this.heap.length - 1, this.heap)
    const deletedNode = this.heap.pop()
    this.siftDown(0, this.heap.length - 1, this.heap)
    return deletedNode
  }

  // Runtime O(log(n)) | Space O(1)
  insert(value) {
    this.heap.push(value)
    this.siftUp(this.heap.length - 1, this.heap)
  }

  swap(i, j, heap) {
    const temp = heap[j]
    heap[j] = heap[i]
    heap[i] = temp
  }
}