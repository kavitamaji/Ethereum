const HDWalletProvider= require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledCorporation = require('../ethereum/build/TrustfundCorporation.json');

let corporationabi = JSON.parse(JSON.stringify(compiledCorporation.abi));
let corporationbytecode = '0x' + compiledCorporation.evm.bytecode.object;
const provider = new HDWalletProvider ('ripple dragon mobile bulb follow pill guilt wine memory grace spirit puppy',
'https://rinkeby.infura.io/v3/fed7fb9fca9b481aaf7c352a63cff737');

const web3 = new Web3(provider);
const deploy = async()=>{
const accounts = await web3.eth.getAccounts();
console.log('attempting to deploy from account:',accounts[0]);
const result = await new web3.eth.Contract(corporationabi)
.deploy({data: corporationbytecode})
.send({from: accounts[0]});
console.log('contract deployed to ', result.options.address);
};
deploy();
