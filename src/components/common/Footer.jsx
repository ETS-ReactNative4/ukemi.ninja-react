import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    return (
      <footer className="footer pt-4 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="text-center">
                <div className="social-icons">
                  <a href="https://facebook.com">
                    <i className="fa fa-facebook-square" />
                  </a>
                  <a href="https://twitter.com">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="https://pinterest.com">
                    <i className="fa fa-pinterest" />
                  </a>
                  <a href="https://www.instagram.com">
                    <i className="fa fa-instagram" />
                  </a>
                </div>
                <div className="white mt-1">
                  © {new Date().getUTCFullYear()} UKEMI - All rights reserved
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
