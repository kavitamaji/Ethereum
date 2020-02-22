import React, {Component} from 'react';
import { Card , Grid } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Trustfund from '../../ethereum/trustfund';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';

class TrustfundShow extends Component{
    static async getInitialProps(props){
      const trustfund = Trustfund(props.query.address);
      const summary = await trustfund.methods.getSummary().call();
      console.log(summary);

      return{
        address: props.query.address,
        minimumcontribution: summary[0],
        balance: summary[1],
        requestsCount: summary[2],
        approversCount: summary[3],
        manager: summary[4]
      };
    }

  renderCards(){
    const {
      balance,
      manager,
      minimumcontribution,
      requestsCount,
      approversCount
    } = this.props;

    const items = [
      {
        header: manager,
        meta: 'Address of Guardian',
        description: 'The guardian created this trust fund and can create request to withdraw money',
        style:{overflowWrap: 'break-word'}
      },
      {
        header: minimumcontribution,
        meta: 'Minimum Contribution (wei)',
        description: 'You must send at least this much wei to become an approver on the child account'
      },
      {
        header: requestsCount,
        meta:'Number of spends requests made by guardian',
        description:'A request tries to withdraw money from the fund. Request must be approved by an approver.'
      },
      {
        header: approversCount,
        meta: 'Benefactors',
        description: 'Benefactors'
      },
      {
        header: web3.utils.fromWei(balance,'ether'),
        meta: 'Fund balance (ether)',
        description: 'The balance is how much money the trust fund has left to spend'
      }
    ];

    return <Card.Group items = {items}/>;
  }

render() {
      return (
        <Layout>
            <h3>Trust Fund show</h3>
            <Grid>
              <Grid.Column width={10}>{this.renderCards()}</Grid.Column>
              <Grid.Column width={6}>  <ContributeForm address={this.props.address}/></Grid.Column>
            </Grid>
        </Layout>
      );
    }
}
export default TrustfundShow;
