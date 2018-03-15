const { SinglyLinkedList } = require('../../DataStructures/singly_linked_list')
/*
 * 2.1 Remove Duplicates
 * Remove duplicates from an unsorted linked list
 */

/* With Buffer Solution
 * @params {singly_linked_list}, list
 * @return {singly_linked_list}
 * Runtime O(n) | Space O(n)
 */
const list = new SinglyLinkedList()
list.insert(5).insert(6).insert(7).insert(6)

// function removeDuplicates(LL) {
//   let current = LL.head,
//     behind = null

//   const set = {}

//   while (current !== null) {
//     const value = current.value
//     if (!(value in set)) {
//       set[value] = false
//       behind = current
//     } else {
//       set[value] = true
//       behind.next = current.next
//     }
//     current = current.next
//   }
//   LL.printAll()
// }


/* Without Buffer Solution
 * @params {singly_linked_list}, list
 * @return {singly_linked_list}
 * Runtime O(n^2) | Space O(1)
 */

function removeDuplicates(LL) {
  let current = LL.head

  while (current !== null) {
    let runner = current

    while (runner.next !== null) {
      if (runner.next.value === current.value) {
        runner.next = runner.next.next
      } else {
        runner = runner.next
      }
    }
    current = current.next
  }
  return LL
}

removeDuplicates(list).printAll()
