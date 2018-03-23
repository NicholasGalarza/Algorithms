/*
 * 4.1 Route Between Nodes
 * Given a directed graph, design an algorithm to find
 * out whether there is a route between two nodes.
 */

/*
 * @params {node, string, string} graph, start, end
 * @return {boolean}
 */
function routeFinder(graph, start, end) {
  const found = depthFirstTraverse(graph, [start, end], [false, false])
  return found[0] && found[1]
}

function depthFirstTraverse(root, values = [], found) {
  if (root === null) return

  if (values[0] == root.value) found[0] = true
  else if (values[1] == root.value) found[1] = true

  for (const child of root.children) {
    depthFirstTraverse(child, values, found)
  }

  return found
}

module.exports.routeFinder = routeFinder