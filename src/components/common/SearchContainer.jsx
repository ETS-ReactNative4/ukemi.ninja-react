import React, { Component } from 'react';

export default class SearchContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="search-form-container-full">
          <div className="container">
            <div className="row">
              <div className="col-sm-7 offset-sm-3 search-wrap">
                <div className="text-center middle">
                  <form className="search-form">
                    <input
                      type="search"
                      className="search-field"
                      value=""
                      name="s"
                      placeholder="What are you searching for?"
                    />
                    <button className="button-search">
                      <i className="pe-7s-search" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
