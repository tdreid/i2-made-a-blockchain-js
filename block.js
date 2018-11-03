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

  mineBlock(difficulty) {
    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')
    ) {
      this.nonce++;
      this.hash = this.getHash();
    }
    console.log(`BLOCK MINED: ${this.hash}`);
  }
}

module.exports = Block;
