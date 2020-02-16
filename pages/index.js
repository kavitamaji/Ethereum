import React, { Component } from 'react';
import corporation from '../ethereum/corporation';

class TrustFundIndex extends Component{
  async componentDidMount(){
    const trustfunds = await corporation.methods.getDeployedTrustfunds().call();
    console.log(trustfunds);
  }
  render(){
    return <div>Trust Funds Index</div>
  }
}
export default TrustFundIndex;
