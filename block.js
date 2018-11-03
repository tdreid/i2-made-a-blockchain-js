const hasher = require('crypto-js/sha256');

class Block {
  constructor(index, timestamp, payload, predecessorHash = '') {
    this.index = index;
    this.timestamp = timestamp;
    this.payload = payload;
    this.predecessorHash = predecessorHash;
    this.hash = this.getHash();
  }

  getHash() {
    return hasher(
      this.index + this.timestamp + JSON.stringify(this.payload)
    ).toString();
  }
}

module.exports = Block;
