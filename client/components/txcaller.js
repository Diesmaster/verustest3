import React, { Component } from 'react';
import axios from 'axios';

class TXCaller extends Component{
  constructor(props){
    super(props);
    this.state = {
      PrimaryAddress: ''
    };
  }

onClick(){
  axios.get(`https://el0.veruscoin.io/api/gettransaction?ip=el0.veruscoin.io&port=17485&txid=${this.props.UTXO}&verbose=true&eprotocol=1.4`)
      .then(res => {
        console.log(res);

        this.setState({
          UTXO: res.data.result.vout[0].scriptPubKey.identityprimary.primaryaddresses[0]
        })
        console.log(this.state.UTXO);
      });

}


  render(){
    return(
      <div>
      <div>{this.props.UTXO}</div>
      <button onClick={this.onClick.bind(this)}>nextt!!!</button>
      </div>
    );
  }
}

export default TXCaller;
