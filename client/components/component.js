import React from 'react';
import ScriptHashInput from './scripthashinput.js';
import AddressToIDs from './addresstoids.js';


export default class HelloWorld extends React.Component {
  render() {
    return (
      <div>
      <h1>Hello World</h1>
      <ScriptHashInput />
      <AddressToIDs />
      </div>
    );
  }
}
