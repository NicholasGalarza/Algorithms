/* Problem Description: 
 * When put together, nodes form a tree like structure. Traverse
 * the nodes in a depth-first manner which means, push each 
 * value into the resulting array and if it has any children, 
 * go to the first child and do the same thing until there are no 
 * more child nodes to explore. 
 */ 

 // n (nodes), m(children) - for child a node currently has
 // Runtime: O(n+m) | O(1) space
class Node {
  constructor(name) {
    this.name = name
    this.children = []
  }

  addChild(name) {
    this.children.push(new Node(name))
    return this
  }

  depthFirstSearch(array) {
    array.push(this.name)

    for (let i = 0; i < this.children.length; i++) {
      let child = this.children[i]
      child.depthFirstSearch(array)
    }

    return array
  }
}