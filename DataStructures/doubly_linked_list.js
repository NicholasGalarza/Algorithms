class Node {
  constructor(value) {
    this.value = value
    this.previous = null
    this.next = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }

  insert(value) {
    const node = new Node(value)
    this.length++

    if (this.head == null) {
      this.head = node
      this.tail = node
    } else if (this.head !== this.tail) {
      node.previous = this.tail
      this.tail.next = node
      this.tail = node
    }
  }

  search(value) {
    let current = this
    while (current !== null) {
      if (current.value === value) return true
      else current = current.next
    }
    return false
  }

  remove(value) {
    this.length--
    if (this.head === value) {
      this.head = this.head.next
      this.head.previous = null
      return
    }

    let current = this.head.next

    while (current !== null) {
      if (current.value === value) {
        if (current.next) {
          current.next.previous = current.previous
          current.previous.next = current.next
        } else {
          current.previous.next = null
        }
        return
      }
      current = current.next
    }
  }
}