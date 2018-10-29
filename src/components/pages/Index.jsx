import React, { Component } from 'react';
import Landing from './sections/Landing.jsx';
import Partners from './sections/Partners.jsx';
import SubHeader from './sections/SubHeader.jsx';
import ProjectShowcase from './sections/ProjectShowcase.jsx';
import Subscribe from './sections/Subscribe.jsx';
// npm st
// import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class Index extends Component {
  render() {
    return (
      <React.Fragment>
        <Landing />
        <SubHeader />
        <ProjectShowcase />
        <Subscribe />
        <Partners />
      </React.Fragment>
    );
  }
}
