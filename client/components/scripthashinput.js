import React, { Component } from 'react';
import AddressCaller from './addresscaller.js';
import TXCaller from './txcaller.js';

class ScriptHashInput extends Component{
constructor(props){
  super(props);

  this.state = {
    scripthash: ''
  };
}


onClick(){
  this.setState({
    scripthash: document.getElementById('scripthash').value
  })
}


  render(){

    return(
        <div>
        <h4>Hier je ScriptHash</h4>
        <input id="scripthash"></input>
        <button onClick={this.onClick.bind(this)}>geef door</button>
        <AddressCaller scripthash={this.state.scripthash}/>
        </div>
    );
  }
}

export default ScriptHashInput;
