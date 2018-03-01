// Runtime O(n*log(n)) | Space O(1)
function heapSort(array) {

  const maxHeap = new Heap(array) 

  for (let end = array.length - 1; end > 0; end--) {
    maxHeap.swapElements(0, end, array)
    maxHeap.siftDown(0, end, array)
  }
  return array
}

class Heap {
  constructor(array) {
    this.heap = this.buildHeap(array)
  }

  buildHeap(array) {
    const firstParent = this.getParent(array.length - 1)
    for (let i = firstParent; i >= 0; i--) {
      this.siftDown(i, array.length, array)
    }
    return array
  }

  siftDown(idx, endPoint, heap) {
    let childOneIdx = this.getChildOne(idx)

    while (childOneIdx < endPoint) {
      const childTwoIdx = (this.getChildTwo(idx) < endPoint) ? this.getChildTwo(idx) : null
      const idxToSwap = (childTwoIdx && heap[childTwoIdx] > heap[childOneIdx]) ? childTwoIdx : childOneIdx

      if (heap[idxToSwap] > heap[idx]) {
        this.swapElements(idx, idxToSwap, heap)
        idx = idxToSwap
        childOneIdx = this.getChildOne(idx)
      } else { return }
    }
  }

  swapElements(left, right, heap) {
    const temp = heap[left]
    heap[left] = heap[right]
    heap[right] = temp
  }

  getChildOne(idx) { return idx * 2 + 1 }
  getChildTwo(idx) { return idx * 2 + 2 }
  getParent(idx) { return Math.floor((idx - 1) / 2) }
}