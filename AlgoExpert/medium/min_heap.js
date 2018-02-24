class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    const firstParent = Math.floor((array.length - 2) / 2)
    for (let currentIdx = firstParent; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, array.length, array)
    }
    return array
  }

  siftDown(idx, heapSize, heap) {
    let childOneIdx = this.getChildOne(idx)

    while (childOneIdx < heapSize) {
      const tempChildTwoIdx = this.getChildTwo(idx),
        childTwoIdx = (tempChildTwoIdx < heapSize) ? tempChildTwoIdx : -1,
        idxToSwap = (childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) ? childTwoIdx : childOneIdx

      if (heap[idxToSwap] < heap[idx]) {
        this.swap(idx, idxToSwap, heap)
        idx = idxToSwap
        childOneIdx = this.getChildOne(idx)
      } else {
        break;
      }
    }
  }

  siftUp(idx, heap) {
    let parentIdx = this.getParent(idx)
    while (idx > 0 && heap[idx] < heap[parentIdx]) {
      this.swap(idx, parentIdx, heap)
      idx = parentIdx
      parentIdx = this.getParent(idx)
    }
  }

  peek() { return this.heap[0] }

  remove() {
    this.swap(0, this.heap.length - 1, this.heap)
    const deletedNode = this.heap.pop()
    this.siftDown(0, this.heap.length, this.heap)
    return deletedNode
  }

  insert(value) {
    this.heap.push(value)
    this.siftUp(this.heap.length - 1, this.heap)
  }

  swap(i, j, heap) {
    const temp = heap[j]
    heap[j] = heap[i]
    heap[i] = temp
  }

  getChildOne(idx) { return 2 * idx + 1 }
  getChildTwo(idx) { return 2 * idx + 2 }
  getParent(idx) { return Math.floor((idx - 1) / 2) }
}