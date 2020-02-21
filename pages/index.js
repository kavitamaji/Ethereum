import React, { Component } from 'react';
import {Card , Button} from 'semantic-ui-react';
import corporation from '../ethereum/corporation';
import Layout from '../components/Layout';
import {Link} from '../routes';

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
        description: (
            <Link route={`/trustfunds/${address}`}>
              <a>View Trustfunds</a>
              </Link>),
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

      <Link route="/trustfunds/new">
          <a>
              <Button floated="right"
              content="Create Trust Fund"
              icon ="add circle"
              primary
              />
          </a>
        </Link>
        {this.renderTrustfunds()}
      </div>
    </Layout>
  );
  }
}
export default TrustFundIndex;
