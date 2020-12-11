require('dotenv').config()

// Web3.js: Client-side javascript that allows interaction with the Ethereum blockchain

// Instantiate instance of Web3 connected to Infura API endpoint
const Web3 = require('web3');
const infura_api = process.env.INFURA_API;
const web3 = new Web3(infura_api);

// 1 - Reading EOA Information
let address1 = '0xdba15b29149699b96404ccd342f380464dcb9150';

async function accountBalance(addr) {
    await web3.eth.getBalance(addr)
        .then(balance => console.log('Account Balance: ' + web3.utils.fromWei(balance)))
        .catch(err => console.log(err))
}

// 2 - Interacting with the Ethereum Blockchain

let TxHash1 = '0x50d56d94f7417e5bc0af53ac67caa34e2d872bbb2ad9a868a81006059ee9c2f7';

async function getCurrentBlockData() {
    const block = await web3.eth.getBlockNumber();
    await web3.eth.getBlock(block)
        .then(data => {
            console.log('Block Hash: ' + data.hash);
            console.log('Block Timestamp: ' + data.timestamp);
            console.log('Block Miner Address: ' + data.miner);
        })
        .catch(err => console.log(err))
}

async function getTxData(TxHash) {
    const tx = await web3.eth.getTransaction(TxHash)
        .then(data => {
            console.log('From Address: ' + data.from);
            console.log('To Address: ' + data.to);
            console.log('Value: ' + web3.utils.fromWei(data.value));
        })
        .catch(err => console.log(err))
}

accountBalance(address1)
getCurrentBlockData()
getTxData(TxHash1)
