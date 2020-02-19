import React, {Component} from 'react';
import {Form, Button, Input, Message} from 'semantic-ui-react';
import Layout from '../../components/Layout';
import corporation from '../../ethereum/corporation';
import web3 from '../../ethereum/web3';

class TrustfundNew extends Component{
  state={
    minimumContribution:'',
    errorMessage:'',
    loading: false
  };
  onSubmit = async (event) =>{
    event.preventDefault();//stop browser from submitting to backend server
    this.setState({loading: true , errorMessage: ''});
    try{
      const accounts = await web3.eth.getAccounts();
      await corporation.methods
      .createTrustfund(this.state.minimumContribution)
      .send({
          from: accounts[0]
          });
      } catch (err){
        this.setState({errorMessage: err.message});
    }
    this.setState({loading: false});
  };
  //!!this.state.errorMessage}>inverse of boolean of string
  render(){
    return (
<Layout>
       <h3>Create a new Trust fund </h3>
       <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
             <Form.Field>
               <label>Minimum Contribution</label>
               <Input
               label="wei"
               labelPosition="right"
               value={this.state.minimumContribution}
               onChange={event => this.setState({minimumContribution : event.target.value})}
               />
             </Form.Field>
             <Message error header="Something went wrong" content={this.state.errorMessage}/>
             <Button loading={this.state.loading} primary>Create</Button>
           </Form>
</Layout>
     );
  }
}
export default TrustfundNew
