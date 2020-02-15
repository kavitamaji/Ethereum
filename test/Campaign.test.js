const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const compiledCorporation = require('../ethereum/build/TrustfundCorporation.json');
const compiledTrustfund = require('../ethereum/build/Trustfund.json');

let accounts;
let corporation;
let trustfundAddress;
let trustfund;
//console.log(JSON.stringify(compiledCorporation.abi));
let corporationabi = JSON.parse(JSON.stringify(compiledCorporation.abi));
let corporationbytecode = '0x' + compiledCorporation.evm.bytecode.object;

console.log(corporationabi);
console.log(corporationbytecode);

 beforeEach(async()=> {
  accounts = await web3.eth.getAccounts();
  //console.log(compiledCorporation.interface); // used to work in in versions <4.25
  corporation = await new web3.eth.Contract(corporationabi)
  .deploy({data : corporationbytecode })
  .send ({from : accounts[0], gas: '1000000'});

 await factory.methods.createTrustfund('100').send({
    from : accounts[0],
    gas : '1000000'
  });
//take first element from output and put it in array[0]
 [trustfundAddress] = await factory.methods.getDeployedTrustfunds().call();
  console.log(trustfundAddress);
    trustfund = await new web3.eth.Contract(
    JSON.parse(compiledTrustfund),
    trustfundAddress
  );
});

describe ('TrustFunds', () => {
  it('deploys a trustfund and corporation', () => {
    assert.ok(corporation.options.address);
    assert.ok(trustfund.options.address);
  })
})
