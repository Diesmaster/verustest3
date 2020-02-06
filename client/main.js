import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import HelloWorld from './components/component.js';

Meteor.startup(() => {
  render(<HelloWorld />, document.getElementById('app'));
});
