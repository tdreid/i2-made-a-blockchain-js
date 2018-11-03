const assert = require('assert');
const Block = require('./block.js');
const Blockchain = require('./blockchain.js');

let testchain = null;

describe('The Blockchain', function() {
  beforeEach(function(done) {
    testchain = new Blockchain();
    testchain.addBlock(new Block(1, new Date(), { test1: 1 }));
    testchain.addBlock(new Block(2, new Date(), { test2: 2 }));
    testchain.addBlock(new Block(3, new Date(), { test3: 3 }));
    testchain.addBlock(new Block(4, new Date(), { testF: 'F' }));
    testchain.addBlock(new Block(5, new Date(), { testF: 'F' }));
    done();
  });

  it('adds blocks to make a valid chain', function() {
    assert(testchain.isValid());
  });
  it('detects tampering in the chain', function() {
    testchain.chain[2].payload = 'I messed with your data. Muhahahahaha!';
    assert(!testchain.isValid());
  });
});
