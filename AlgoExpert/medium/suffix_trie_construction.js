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