import web3 from './web3';
import Corporation from './build/TrustfundCorporation.json';
let corporationabi = JSON.parse(JSON.stringify(Corporation.abi));
const corporationInstance = new web3.eth.Contract(corporationabi,'0xE1764B81545F9bc1dE39DE1eeF7da04c2B69b3e2');
export default corporationInstance;
