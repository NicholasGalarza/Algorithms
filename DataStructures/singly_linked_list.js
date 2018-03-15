class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class SinglyLinkedList {
  constructor(value) {
    this.head = null
  }

  insert(value) {
    const node = new Node(value)
    // base case if list is empty
    if (this.head === null) {
      this.head = node
      return this
    }

    let current = this.head
    // navigate to the end of the list
    while (current.next !== null) {
      current = current.next
    }

    current.next = node
    return this
  }

  remove(value) {
    let current = this.head

    if (value === current.value) {
      this.head = this.head.next
      return this
    }

    while (current.next !== null) {
      if (current.next.value === value) {
        current.next = current.next.next
        return this
      }
      current = current.next
    }
    return this
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

module.exports.SinglyLinkedList = SinglyLinkedList