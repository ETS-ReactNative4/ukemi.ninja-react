import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Spinner from '../components/common/Spinner.jsx';
import SideBox from '../components/common/SideBox.jsx';
import SearchContainer from '../components/common/SearchContainer.jsx';
import Navbar from '../components/common/Navbar.jsx';
import Footer from '../components/common/Footer.jsx';
import MobileNav from '../components/common/MobileNav.jsx';

import indexRoutes from '../routes/Index.jsx';

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Spinner />
        <SearchContainer />
        <SideBox />
        <div className="site">
          <Navbar />
          <MobileNav />
          <div className="main">
            <Switch>
              {indexRoutes.map((prop, key) => {
                if (prop.collapse) {
                  return prop.views.map((prop2, key2) => {
                    return (
                      <Route
                        exact={prop2.exact}
                        path={prop2.path}
                        component={prop2.component}
                        key={key2}
                      />
                    );
                  });
                }
                if (prop.redirect)
                  return (
                    <Redirect from={prop.path} to={prop.pathTo} key={key} />
                  );
                return (
                  <Route
                    exact={prop.exact}
                    path={prop.path}
                    component={prop.component}
                    key={key}
                  />
                );
              })}
            </Switch>
          </div>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
