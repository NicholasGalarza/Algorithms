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

    if (!this.head && !this.tail) {
      this.head = node
      this.tail = node
    } else if (this.length) {
      node.previous = this.tail
      this.tail.next = node
      this.tail = node
    }
    return this
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

    if (this.head.value === value) {
      this.head = this.head.next
      this.head.previous = null
      return this
    }

    let current = this.head.next

    while (current !== null) {
      if (current.value === value) {
        if (current.next) {
          current.next.previous = current.previous
          current.previous.next = current.next
        } else {
          current.previous.next = null
          this.tail = current.previous
        }
        return this
      }
      current = current.next
    }
    return this // if not found, just return context
  }

  printAll() {
    let current = this.head
    while (current !== null) {
      console.log(current)
      current = current.next
    }
    return this
  }

  values() {
    let current = this.head
    const cache = []
    while (current !== null) {
      cache.push(current.value)
      current = current.next
    }
    console.log('list', cache)
    return cache
  }
}

module.exports.DoublyLinkedList = DoublyLinkedList