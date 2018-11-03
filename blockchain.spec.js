const assert = require('assert');
const Block = require('./block.js');
const moment = require('moment');
const Blockchain = require('./blockchain.js');

let testchain = null;

describe('The Blockchain', function() {
  beforeEach(function(done) {
    this.timeout(5000);
    testchain = new Blockchain();
    testchain.addBlock(
      new Block(1, moment.utc().format('YYYY-MM-DD HH:mm:ss.SSSS'), {
        test1: 1
      })
    );
    testchain.addBlock(
      new Block(2, moment.utc().format('YYYY-MM-DD HH:mm:ss.SSSS'), {
        test2: 2
      })
    );
    testchain.addBlock(
      new Block(3, moment.utc().format('YYYY-MM-DD HH:mm:ss.SSSS'), {
        test3: 3
      })
    );
    testchain.addBlock(
      new Block(4, moment.utc().format('YYYY-MM-DD HH:mm:ss.SSSS'), {
        testF: 'F'
      })
    );
    testchain.addBlock(
      new Block(5, moment.utc().format('YYYY-MM-DD HH:mm:ss.SSSS'), {
        testF: 'F'
      })
    );
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
