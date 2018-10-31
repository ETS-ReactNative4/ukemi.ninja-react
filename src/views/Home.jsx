import React, { Component } from 'react';
import Landing from '../components/pages/sections/Landing.jsx';
import Partners from '../components/pages/sections/Partners.jsx';
import SubHeader from '../components/pages/sections/SubHeader.jsx';
import ProjectShowcase from '../components/pages/sections/ProjectShowcase.jsx';
import Subscribe from '../components/pages/sections/Subscribe.jsx';

class Home extends Component {
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

export default Home;
