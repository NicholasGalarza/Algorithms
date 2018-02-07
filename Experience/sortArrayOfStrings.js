/* 
 * Problem Description: 
 * Given an array of strings, sort through them in 
 * alphabetical order. Remove any strings that aren't
 * characters of the alphabet.
 */

// O(n^2) Complexity | O(n^2) Space
class TrieNode {

  constructor() {
    this.parent = null
    this.children = Array.apply(null, Array(26))
    this.occurrences = 0
  }

  insert(string) {
    let currentNode = this

    // iterate though each letter in word
    for (let i = 0; i < string.length; i++) {
      let letter = string.charAt(i),
        idx = letter.charCodeAt() - 'a'.charCodeAt()

      if (currentNode.children[idx] == null) {
        currentNode.children[idx] = new TrieNode()
        currentNode.children[idx].parent = currentNode
      }
      currentNode = currentNode.children[idx]
    }

    currentNode.occurrences++
  }

  sort() { return this.preOrderTraverse(this).join("") }

  preOrderTraverse(tree = this, word = [], result = []) {

    if (tree.occurrences > 0) {
      for (let char of word) {
        result.push(char)
      }
      // Check and see how the tree traversal here
      // console.log(result)
    }

    for (let i = 0; i < 26; i++) {
      if (tree.children[i] != null) {
        let letter = String.fromCharCode('a'.charCodeAt() + i)

        word.push(letter)
        this.preOrderTraverse(tree.children[i], word, result)
        word.pop()
      }
    }

    return result
  }
}

const sortArrayOfStrings = (arr) => {
  let trie = new TrieNode()

  for (let word of arr) {
    trie.insert(word)
  }

  return trie.sort()
}

module.exports.sortArrayOfStrings = sortArrayOfStrings
