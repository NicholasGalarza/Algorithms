/* 
 * Basic implementation of a suffix-trie.
 * 
 * Explanation:
 * populateSuffixTrie: O(n^2) Complexity | O(n^2) Space
 * Iterate through each letter in the initial string.
 * Then call a subroutine to populate the trie structure. 
 * This subroutine will hashtables with each subsequent 
 * hastable pointing to an empty hashtable. If the next 
 * character is not present within the subsequent node, 
 * create the next node based of that letter. Otherwise, 
 * assign the next letter as a branch to the subsequent 
 * node.
 * 
 */
class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = "*";
    this.populateSuffixTrieFrom(string);
  }

  populateSuffixTrieFrom(string) {
    for (let i = 0; i < string.length; i++) {
      this.populateSuffixTrieAt(i, string)
    }
    console.log(this)
  }

  populateSuffixTrieAt(idx, string) {
    let node = this.root
    for (let pos = idx; pos < string.length; pos++) {
      let letter = string[pos]
      if (!node.hasOwnProperty(letter)) node[letter] = {}
      node = node[letter]
    }
    node[this.endSymbol] = true
  }

  contains(string) {
    let node = this.root
    for (let i = 0; i < string.length; i++) {
      let letter = string[i]
      if (!node.hasOwnProperty(letter)) return false
      node = node[letter]
    }
    return node.hasOwnProperty(this.endSymbol)
  }
}