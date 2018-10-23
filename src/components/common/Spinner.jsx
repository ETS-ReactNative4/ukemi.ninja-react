import React, { Component } from 'react';

export default class Spinner extends Component {
  render() {
    return (
      <div className="noo-spinner">
        <div className="spinner">
          <div className="cube1" />
          <div className="cube2" />
        </div>
      </div>
    );
  }
}
