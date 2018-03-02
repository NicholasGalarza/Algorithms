/* Problem Description: Given a formatted string, construct a 
 * tree from the parenthesis and integers.
 * const string = "4(2(3)(1))(6(5))"
 * Example: Input : treeToString(string)
 * Output:
 *          4
 *        /   \
 *       2     6
 *      / \   / 
 *     3   1 5   
 */
/*
 * @param {string} str
 * @return {tree}
 */
function treeToString(str) { return parseStringHelper(str, 0, str.length - 1) }
/*
 * @param {string, number, number} str, si, ei
 * @return {tree}
 */
function parseStringHelper(str, si, ei) {
  if (si > ei) return null
  const root = new Tree(str[si]) // start at root value
  let index = -1

  if (si + 1 <= ei && str[si + 1] == '(') {
    index = findIndex(str, si + 1, ei)
  }
  if (index != -1) {
    root.left = parseStringHelper(str, si + 2, index - 1)
    root.right = parseStringHelper(str, index + 2, ei - 1)
  }
  return root
}
/*
 * @param {string, number, number} str, si, ei
 * @return {tree}
 */
function findIndex(str, start, end) {
  const subtree = []

  for (let i = si; i < ei; i++) {
    if (str[i] == '(') {
      subtree.push(str[i])
    } else if (str[i] == ')') {
      if (subtree[subtree.length - 1] == '(') subtree.pop()
      if (!subtree.length) return i
    }
  }
  return -1
}

class Tree {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  preOrderTraversal(node) {
    if (node === null) return
    console.log(node.value)
    this.preOrderTraversal(node.left)
    this.preOrderTraversal(node.right)
  }
}