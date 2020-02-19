import React, { Component } from 'react';
import {Card , Button} from 'semantic-ui-react';
import corporation from '../ethereum/corporation';
import Layout from '../components/Layout';

class TrustFundIndex extends Component{
  static async getInitialProps(){
       const trustfunds =  await corporation.methods.getDeployedTrustfunds().call();
        console.log(trustfunds);
      return {trustfunds};
  }
  renderTrustfunds(){
    const items = this.props.trustfunds.map(address =>{
      return {
        header: address,
        description: <a>View Trustfunds</a>,
        fluid : true
      };
    });

    return <Card.Group items={items}/>;
  }
  render(){
    return (
    <Layout>
      <div>
      <h3>Open Trust Funds</h3>

      <Button floated="right"
      content="Create Trust Fund"
      icon ="add circle"
      primary
      />
        {this.renderTrustfunds()}
      </div>
    </Layout>
  );
  }
}
export default TrustFundIndex;
