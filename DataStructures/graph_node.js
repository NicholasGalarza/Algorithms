// constructor for linked_list node
class GraphNode {
  constructor(value) {
    this.value = value
    this.children = []
  }

  addChild(value) {
    const node = new GraphNode(value)
    this.children.push(node)
    return this
  }

  depthFirstSearch(array) {
    array.push(this.value)
    for (const child of this.children) {
      child.depthFirstSearch(array)
    }
    return array
  }

  breadthFirstSearch(array = []) {
    const queue = [this]
    while (queue.length > 0) {
      const node = queue.shift()
      array.push(node.value)
      for (const child of node.children) {
        queue.push(child)
      }
    }
    return array
  }
}

module.exports.GraphNode = GraphNode