const Block = require('./block.js');

class Blockchain {
  constructor() {
    this.chain = [this.initialize()];
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
    block.predecessorHash = this.getLastBlock().getHash();
    block.hash = block.getHash();
    this.chain.push(block);
  }

  isValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const blockToCheck = this.chain[i];
      const predecessorBlock = this.chain[i - 1];
      console.log(
        i,
        blockToCheck.hash !== blockToCheck.getHash(),
        blockToCheck.hash !== predecessorBlock.hash
      );
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
