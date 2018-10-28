import React, { Component } from 'react';
import Landing from './sections/Landing.jsx';
import Introduction from './sections/Introduction.jsx';
import CallToAction from './sections/CallToAction.jsx';
import Partners from './sections/Partners.jsx';

export default class Index extends Component {
  render() {
    return (
      <React.Fragment>
        <Landing />
        <Introduction />
        <Partners />
      </React.Fragment>
    );
  }
}
