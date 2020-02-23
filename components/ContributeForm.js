import React, {Component} from 'react';
import {Form, Input, Message, Button} from 'semantic-ui-react';
import Trustfund from '../ethereum/trustfund';
import web3 from '../ethereum/web3';
import {Router} from '../routes';

class ContributeForm extends Component{
  state={
    value: '',
    errorMessage:'',
    loading: false
  };
  onSubmit = async event => {
    event.preventDefault();
    const trustfund = Trustfund(this.props.address);
    this.setState({loading:true, errorMessage:''});
    try{
      const accounts = await web3.eth.getAccounts();
      await trustfund.methods.contribute().send({
        from : accounts[0],
        value: web3.utils.toWei(this.state.value,'ether')
      });
      Router.replaceRoute(`/trustfunds/${this.props.address}`)
    }
    catch(err){
      this.setState({errorMessage:err.message});
    }
    this.setState({loading:false, value:''});
  };
  render(){
    return(
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
        <label>Amount to send to child account</label>
          <Input
            value={this.state.value}
            onChange={event => this.setState ({value: event.target.value})}
            label="ether" labelPosition="right"
          />
        </Form.Field>
        <Message error header="error occurred" content={this.state.errorMessage}/>
        <Button loading ={this.state.loading} primary >
          Send
        </Button>
        </Form>
    )
  }
}
export default ContributeForm;
