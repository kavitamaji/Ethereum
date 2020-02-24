import web3 from './web3';
import Corporation from './build/TrustfundCorporation.json';
let corporationabi = JSON.parse(JSON.stringify(Corporation.abi));
const corporationInstance = new web3.eth.Contract(corporationabi,'0x5a8D646558d2686ab557002F56A5b03F7E46eA13');
export default corporationInstance;
