const path = require('path');
const solc = require('solc');
const fs = require('fs-extra'); //for accessing the file system

const buildPath = path.resolve(__dirname,'build');
fs.removeSync(buildPath);//delete the build folder to start a new compile process

const trustfundPath = path.resolve(__dirname,'contracts','Trustfund.sol');
const source = fs.readFileSync(trustfundPath,'utf8');
//console.log(source);
var input = {
  language: 'Solidity',
  sources: {
    'Trustfund.sol': {
      content: source
    }
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*']
      }
    }
  }
};
const output = JSON.parse(solc.compile(JSON.stringify(input,1))); //for solc verison 0.6.2
//const output = solc.compile(source, 1).contracts; // for solc version 0.4.25
console.log(output);
fs.ensureDirSync(buildPath);

/*for(let contract in output){
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(':','')+'.json'),
    output[contract]
  );
}*/
//we used this new syntax because we provided input in a different way
for (let contract in output.contracts["Trustfund.sol"]) {
   fs.outputJSONSync(
     path.resolve(buildPath, contract.replace(':','')+'.json'),
     output.contracts["Trustfund.sol"][contract]
   );
 }
