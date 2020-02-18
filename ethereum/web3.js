import Web3 from 'web3';
//const web3 = new Web3(window.web3.currentProvider); //because it isnt accessible to next js// verify by checking on browser then on cmd

let web3;
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
//we are in the browser and metamask is running
web3 = new Web3(window.web3.currentProvider);
 }
else{
  //we are on server OR the user is not running metamask
  const provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/fed7fb9fca9b481aaf7c352a63cff737');
  web3 = new Web3(provider);

}
export default web3;
