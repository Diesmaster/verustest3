import React, { Component } from 'react';
import TXCaller from './txcaller.js';
import axios from 'axios';

class AddressCaller extends Component{
constructor(props){
  super(props);
  this.state = {
    UTXO: ''
  };
}

onClick(){
  axios.get(`https://el0.veruscoin.io/api/listunspent?ip=el0.veruscoin.io&port=17485&address=${this.props.scripthash}&eprotocol=1.4`)
      .then(res => {
        console.log(res);

        this.setState({
          UTXO: res.data.result[0].tx_hash
        })
        console.log(this.state.UTXO);
      });
}

  render(){
    return(
      <div>
      <div>{this.props.scripthash}</div>
      <button onClick={this.onClick.bind(this)}>Callserver</button>
      <TXCaller UTXO={this.state.UTXO}/>
      </div>
    );
  }
}

export default AddressCaller;

/*
import React, { Component } from 'react';

class AddressCaller extends Component{
  render(){
    return(
      <div>testtest</div>
    );
  }
}

export default AddressCaller;
*/
