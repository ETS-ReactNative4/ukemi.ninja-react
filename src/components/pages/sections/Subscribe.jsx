import React, { Component } from 'react';

export default class Subscribe extends Component {
  render() {
    return (
      <div className="section bg-gray pt-8 pb-8">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-4 col-md-4">
              <h2 className="section-title fz-24 mt-1 mb-2 text-center-xs">
                <b>SUBSCRIBE</b>
                NOW
              </h2>
            </div>
            <div className="col-sm-12 col-lg-8 col-md-8">
              <form className="newsletter-form text-center-xs">
                <input
                  type="email"
                  name="EMAIL"
                  placeholder="Your email address"
                  className="text-center-xs mb-1"
                />
                <input type="submit" value="subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
