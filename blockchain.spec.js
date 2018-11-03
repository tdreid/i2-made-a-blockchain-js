const assert = require('assert');
const Block = require('./block.js');
const Blockchain = require('./blockchain.js');

describe('The Blockchain', function() {
  it('adds blocks to make a valid chain', function() {
    const testchain = new Blockchain();
    testchain.initialize();
    testchain.addBlock(new Block(1, new Date(), { test1: 1 }));
    testchain.addBlock(new Block(2, new Date(), { test2: 2 }));
    testchain.addBlock(new Block(3, new Date(), { test3: 3 }));
    testchain.addBlock(new Block(4, new Date(), { testF: 'F' }));
    testchain.addBlock(new Block(5, new Date(), { testF: 'F' }));
    console.log(JSON.stringify(testchain, null, 2));
    assert(testchain.isValid());
  });
});
