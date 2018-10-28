import React, { Component } from 'react';
import Landing from './sections/Landing.jsx';
import Introduction from './sections/Introduction.jsx';
import CallToAction from './sections/CallToAction.jsx';
import Partners from './sections/Partners.jsx';
import SubHeader from './sections/SubHeader.jsx';

export default class Index extends Component {
  render() {
    return (
      <React.Fragment>
        <Landing />
        <SubHeader />
        <Partners />
      </React.Fragment>
    );
  }
}
