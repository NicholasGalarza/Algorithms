// constructor for linked_list node
function LinkedListNode(value) {
  this.value = value
  this.next = null
}

// @params {linked_list_node} node
function printAll(node) {
  while (node !== null) {
    console.log(node.value);
    node = node.next;
  }
}

// @params {linked_list_node} node
// @return {array}
function values(node) {
  const temp = []
  while (node !== null) {
    temp.push(node.value)
    node = node.next
  }
  return temp
}

module.exports = {
  LinkedListNode,
  printAll,
  values
}