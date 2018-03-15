const { SinglyLinkedList } = require('../../DataStructures/singly_linked_list')
/*
 * 2.1 Remove Duplicates
 * Remove duplicates from an unsorted linked list
 */

/* With Buffer Solution
 * @params {singly_linked_list}, list
 * @return {singly_linked_list}
 */
const list = new SinglyLinkedList()
list.insert(5).insert(6).insert(7).insert(6)

function removeDuplicates(LL) {
  let current = LL.head
  const set = {}

  while (current !== null) {
    if (!(current.value in set)) {
      set[current.value] = false
    } else {
      set[current.value] = true
    }
    current = current.next
  }

  current = LL.head // reset

  while (current !== null) {
    if (set[current.value]) {
      LL.remove(current.value)
    }
    current = current.next
  }

  LL.printAll()
}

removeDuplicates(list)

/* Without Buffer Solution
 * @params {singly_linked_list}, list
 * @return {singly_linked_list}
 */