import web3 from './web3';
import Corporation from './build/TrustfundCorporation.json';
let corporationabi = JSON.parse(JSON.stringify(Corporation.abi));
const corporationInstance = new web3.eth.Contract(corporationabi,'0xd9DA1c066322BAad9496E01DB3959DdF49Ea7Ad5');
export default corporationInstance;
