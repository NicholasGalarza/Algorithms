function balancedBrackets(string) {
  const leftBrackets = "([{",
    rightBrackets = ")]}",
    matching = { '(': ')', '[': ']', '{': '}' }

  let stack = []

  for (const char of string) {
    let last = stack.length - 1

    if (leftBrackets.includes(char)) {
      stack.push(char)
    } else if (rightBrackets.includes(char) && stack.length > 0) {
      let current = stack.pop()
      if (matching[current] !== char) return false
    } else {
      return false
    }
  }
  return stack.length === 0
}