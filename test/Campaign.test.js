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
var deployedCorporation;
let corporationabi = JSON.parse(JSON.stringify(compiledCorporation.abi));
let corporationbytecode = '0x' + compiledCorporation.evm.bytecode.object;
let trustfundabi = JSON.parse(JSON.stringify(compiledTrustfund.abi));
let trustfundbytecode = '0x' + compiledTrustfund.evm.bytecode.object;

 beforeEach(async()=> {
 accounts = await web3.eth.getAccounts();
corporation = await new web3.eth.Contract(corporationabi);
await corporation.deploy({
    data: corporationbytecode
  })
.send({
    from: accounts[0],
    gas: 1000000

})
.then(function(result){
  //  console.log('deployed at address'+result.options.address);
    deployedCorporation = result;
    });

await deployedCorporation.methods.createTrustfund('100').send({
   from : accounts[0],
   gas : '1000000'
});

//take first element from output and put it in array[0]
 [trustfundAddress] = await deployedCorporation.methods.getDeployedTrustfunds().call();
    trustfund = await new web3.eth.Contract(
  //  JSON.parse(compiledTrustfund),
    trustfundabi,
    trustfundAddress
  );
});

describe ('TrustFunds', () => {
  it('deploys a trustfund and corporation', () => {
    assert.ok(deployedCorporation.options.address);
    assert.ok(trustfund.options.address);
});

  it('marks the caller as manager', async () =>{
    const manager = await trustfund.methods.manager().call();
    assert.equal(accounts[0], manager);
  });

  it('lets parents send money to contract and marks them as approvers', async () =>{
    await trustfund.methods.contribute().send({
    value: '200',
    from: accounts[1]
    });
    const isContributer = await trustfund.methods.approvers(accounts[1]).call();
    assert(isContributer);
  });

  it('require minimum contribution to become approver' , async() =>{
    try{
    await trustfund.methods.contribute().send({
      value: '5',
      from: accounts[1]
    });
    assert(false);
    }
    catch (err){
      assert(err);
    }
  });

  it('allows guardian to make a payment request', async() =>{
    await trustfund.methods
    .createRequest('Buy books','100', accounts[1])
    .send({
      from: accounts[0],
      gas: '1000000'
    });
    const request = await trustfund.methods.requests(0).call();
    assert.equal('Buy books',request.description);
  });

  it('processes requests', async() =>{
    await trustfund.methods.contribute().send({
      value: web3.utils.toWei('10','ether'),
      from: accounts[0]
    });

    await trustfund.methods
    .createRequest('Pay admission fees', web3.utils.toWei('5','ether'),accounts[1])
    .send({
      from: accounts[0],
      gas: '1000000'
    });

    await trustfund.methods.approveRequest(0).send({
      from: accounts[0],
      gas: '1000000'
    });

    await trustfund.methods.finalizeRequest(0).send({
      from: accounts[0],
      gas: '1000000'
    });
    let balance = await web3.eth.getBalance(accounts[1]);
    balance = web3.utils.fromWei(balance,'ether');
    balance = parseFloat(balance);
    console.log(balance);
    assert (balance > 104);
  });
});
