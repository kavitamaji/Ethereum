import React, {Component} from 'react';
import Layout from '../../components/Layout';
import Trustfund from '../../ethereum/trustfund';

class TrustfundShow extends Component{
    static async getInitialProps(props){
      const trustfund = Trustfund(props.query.address);
      const summary = await trustfund.methods.getSummary().call();
      console.log(summary);
      return{
        minimumcontribution: summary[0],
        balance: summary[1],
        requestsCount: summary[2],
        approversCount: summary[3],
        manager: summary[4]
      };
    }

render() {
      return (
        <Layout>
            <h3>Trust Fund show</h3>
        </Layout>
      );
    }
}
export default TrustfundShow;
