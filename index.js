const hash = require('crypto-js/sha256')
class Block {
	constructor(prevHash, data){
		this.prevHash = prevHash
		this.data = data
		this.timeStamp = new Date()
		this.hash = this.caculatorHash()
	}
	caculatorHash = ()=>{
		return hash(this.prevHash + JSON.stringify(this.data) + this.timeStamp).toString()
	}
}

class Blockchain {
	constructor() {
		const blockFirst = new Block('0000000000000000000000000000000000000000000000000000000000000000', {data: Math.random()})
		this.chain = [blockFirst]
	}
	getLastBlock = ()=>{
		return this.chain[this.chain.length - 1]
	}
	addBlock = ()=>{
		const lastBlock = this.getLastBlock()
		const blockNext = new Block(lastBlock.hash, {data: Math.random()})
		this.chain.push(blockNext)
	}
}

const myChain  = new Blockchain()
setInterval(()=>{
	myChain.addBlock()
	console.log(myChain.getLastBlock())
}, 3000)

