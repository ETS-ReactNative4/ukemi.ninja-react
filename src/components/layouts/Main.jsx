import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../common/Navbar.jsx';
import Footer from '../common/Footer.jsx';
import MobileNav from '../common/MobileNav.jsx';
import Index from '../pages/Index.jsx';
export default class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="site">
          <Navbar />
          <MobileNav />
          <div id="main">
            <Router>
              <Route exact path="/" component={Index} />
              {/* <Route exact path="/about" component={about} /> */}
              {/* <Route exact path="" component={projectCards} /> */}
              {/* <Route exact path="/" component={projectParks} /> */}
              {/* <Route exact path="/" component={projectEvents} /> */}
              {/* <Route exact path="/" component={projectBooks} /> */}
              {/* <Route exact path="/" component={projectDesign} /> */}
              {/* <Route exact path="/" component={projectPerformance} /> */}
              {/* <Route exact path="/blog" component={blog} /> */}
              {/* <Route exact path="/store" component={store} /> */}
              {/* <Route exact path="/contact" component={contact} /> */}
            </Router>
          </div>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}
