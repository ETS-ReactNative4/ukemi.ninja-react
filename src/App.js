import React, { Component } from 'react';
import Spinner from './components/common/Spinner.jsx';
import SideBox from './components/common/SideBox.jsx';
import Main from './components/layouts/Main.jsx';
import BackToTop from './components/common/buttons/BackToTop.jsx';
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Spinner />
        <SideBox />
        <div className="site">
          <Main />
        </div>
        <BackToTop />
      </React.Fragment>
    );
  }
}
