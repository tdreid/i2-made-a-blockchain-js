const Block = require('./block.js');

class Blockchain
{
    constructor()
    {
        this.chain = [];
        this.initialize();
    }
    
    initialize()
    {
        return new Block(0, '2018-11-01', [3,1,4,1,5,9,2,6,5,3,5], '3.1415926535');
    }
    
    getLastBlock()
    {
        return this.chain[this.chain.length - 1];
    }
    
    addBlock(block)
    {
        block.predecessorHash = this.getLastBlock().getHash();
        block.hash = block.getHash();
        this.chain.push(block);
    }
}

module.exports = Blockchain;
