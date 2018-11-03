const hasher = require('crypto-js/sha256');

class Block {
  constructor(index, timestamp, payload, predecessorHash = '') {
    this.index = index;
    this.timestamp = timestamp;
    this.payload = payload;
    this.predecessorHash = predecessorHash;
    this.hash = this.getHash();
    this.nonce = 0;
  }

  getHash() {
    return hasher(
      this.index + this.timestamp + JSON.stringify(this.payload) + this.nonce
    ).toString();
  }
}

module.exports = Block;
