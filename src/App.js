import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Spinner from './components/common/Spinner.jsx';
import SideBox from './components/common/SideBox.jsx';
import Main from './components/layouts/Main.jsx';
import SearchContainer from './components/common/SearchContainer.jsx';
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Spinner />
        <SearchContainer />
        <SideBox />

        <Router>
          <Route exact path="/" component={Main} />
        </Router>
      </React.Fragment>
    );
  }
}
