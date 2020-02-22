import React, {Component} from 'react';
import {Form, Input, Message, Button} from 'semantic-ui-react';
import Trustfund from '../ethereum/trustfund';
import web3 from '../ethereum/web3';
import {Router} from '../routes';

class ContributeForm extends Component{
  state={
    value: ''
  };
  onSubmit = async event => {
    event.preventDefault();
    const trustfund = Trustfund(this.props.address);
    try{
      const accounts = await web3.eth.getAccounts();
      await trustfund.methods.contribute().send({
        from : accounts[0],
        value: web3.utils.toWei(this.state.value,'ether')
      });
      Router.replaceRoute(`/trustfunds/${this.props.address}`)
    }
    catch(err){

    }
  };
  render(){
    return(
        <Form onSubmit={this.onSubmit}>
        <Form.Field>
        <label>Amount to send to child account</label>
          <Input
            value={this.state.value}
            onChange={event => this.setState ({value: event.target.value})}
            label="ether" labelPosition="right"
          />
        </Form.Field>
        <Button primary>
          Send
        </Button>
        </Form>
    )
  }
}
export default ContributeForm;
