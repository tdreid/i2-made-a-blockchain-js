const Block = require('./block.js');

class Blockchain {
  constructor(difficulty = 3) {
    this.chain = [this.initialize()];
    this.difficulty = difficulty;
  }

  initialize() {
    return new Block(
      0,
      '2018-11-01',
      [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5],
      '3.1415926535'
    );
  }

  getLastBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(block) {
    block.predecessorHash = this.getLastBlock().hash;
    block.hash = block.getHash();
    this.chain.push(block);
  }

  isValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const blockToCheck = this.chain[i];
      const predecessorBlock = this.chain[i - 1];
      if (
        blockToCheck.hash !== blockToCheck.getHash() ||
        blockToCheck.predecessorHash !== predecessorBlock.hash
      ) {
        return false;
      }
    }

    return true;
  }
}

module.exports = Blockchain;
