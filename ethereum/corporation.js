import web3 from './web3';
import Corporation from './build/TrustfundCorporation.json';
let corporationabi = JSON.parse(JSON.stringify(Corporation.abi));
const corporationInstance = new web3.eth.Contract(corporationabi,'0xF6034e92EbBDC5708139e963b82b6E2a7595C172');
export default corporationInstance;
