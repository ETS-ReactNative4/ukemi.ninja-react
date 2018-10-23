import React, { Component } from 'react';
import Navbar from '../common/Navbar.jsx';
import Footer from '../common/Footer.jsx';
import MobileNav from '../common/MobileNav.jsx';

export default class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <MobileNav />
        {/* Page */}
        <Footer />
      </React.Fragment>
    );
  }
}
