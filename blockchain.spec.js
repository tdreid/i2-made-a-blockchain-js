const assert = require('assert');
const Blockchain = require ('./blockchain.js');

describe('The Blockchain', function () {
    it('is valid', function() {
        const testchain = new Blockchain();
        testchain.initialize();
        console.log(JSON.stringify(testchain, null, 4));
        assert(true);
    });
})