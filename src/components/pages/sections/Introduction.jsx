import React, { Component } from 'react';

export default class Introduction extends Component {
  render() {
    return (
      <div className="section pt-10 pb-10">
        <div className="container">
          <div className="row justify-content-center text-center mb-60">
            <div className="col-lg-12">
              <h2 className="section-title dark pt-3 mb-2">
                We are <b>Ukemi</b>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7 pb-sm-20">
              <p>
                Ukemi promote activity in highly urbanised areas and encourage a
                healthier society through digital design, product creation, and
                community arts development. Each company member has practised
                Parkour for over a decade and this is the lens in which we see
                the world and project our ideas onto.
              </p>
              <p>
                We create experiences in response to and in collaboration with
                communities to reclaim the city for free and open activity. Our
                aim is to tackle health and safety culture to encourage play and
                demystify fitness and movement to make it more accessible
                through our products and services.
              </p>
            </div>
            <div className="col-lg-5">
              <div className="w-100 d-block">
                <img
                  className="img-fluid d-block ml-auto mr-auto"
                  src="/images/finger.png"
                  alt="Ukemi Project Team"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
