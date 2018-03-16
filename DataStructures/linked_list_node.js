// constructor for linked_list node
export function LinkedListNode(value) {
  this.value = value
  this.next = null
}

// @params {linked_list_node} node
export function printAll(node) {
  while (node !== null) {
    console.log(node.value);
    node = node.next;
  }
}

// @params {linked_list_node} node
// @return {array}
export function values(node) {
  const temp = []
  while (node !== null) {
    temp.push(node.value)
  }
  return temp
}

export default { LinkedListNode, printAll, values }