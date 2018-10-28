import React, { Component } from 'react';

export default class CallToAction extends Component {
  render() {
    return (
      <div className="section bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="call-to-action pt-7 pb-6">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="fz-32 white mb-0">
                      Find out more about Ukemi
                    </h2>
                    <div className="mb-3 d-block d-md-block d-lg-none" />
                  </div>
                  <div className="col-sm-4">
                    <a href="#" className="btn btn-rounded btn-white mb-2">
                      <span>FULL FEATURES</span>
                    </a>
                    &nbsp;&nbsp;
                    <a href="#" className="btn btn-rounded btn-bg-white mb-2">
                      <span>LIVE DEMO</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
