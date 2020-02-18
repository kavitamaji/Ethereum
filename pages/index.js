import React, { Component } from 'react';
import corporation from '../ethereum/corporation';

class TrustFundIndex extends Component{
  static async getInitialProps(){
       const trustfunds =  await corporation.methods.getDeployedTrustfunds().call();
        console.log(trustfunds);
      return {trustfunds};
  }

  render(){
    return <div>{this.props.trustfunds[0]}</div>
  }
}
export default TrustFundIndex;
