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
  let current = LL.head,
    behind = null

  const set = {}

  while (current !== null) {
    const value = current.value
    if (!(value in set)) {
      set[value] = false
      behind = current
    } else {
      set[value] = true
      behind.next = current.next
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