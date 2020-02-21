import web3 from './web3';
import Trustfund from './build/Trustfund.json';
let trustfundabi = JSON.parse(JSON.stringify(Trustfund.abi));
export default (address) => {
  return new web3.eth.Contract(trustfundabi, address);
};
