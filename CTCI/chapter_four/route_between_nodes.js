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
  const nodes = depthFirstTraverse(graph, [], [start, end])
  return nodes.includes(start) && nodes.includes(end)
}

function depthFirstTraverse(root, array = [], values) {
  if (root === null) return

  array.push(root.value)
  for (const child of root.children) {
    depthFirstTraverse(child, array)
  }

  return array
}

module.exports.routeFinder = routeFinder