import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';

const options = {
  autoplay: true,
  items: 1,
  nav: true,
  dots: false,
  navText: [
    '<i class="fa fa-angle-left"></i>',
    '<i class="fa fa-angle-right"></i>',
  ],
};

export default class ProjectShowcase extends Component {
  render() {
    return (
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="text-center">
                <h1 className="section-title-bold mb-0">Recent Projects</h1>
                <h2 className="section-title fz-16 fw-normal ls-16 mb-8">
                  Recent Projects
                </h2>
              </div>
              <OwlCarousel
                className="service-carousel navi-carousel"
                style={{ opacity: 1, display: 'block' }}
                {...options}>
                <div className="service-item row">
                  <div className="col-md-6 p-0">
                    <img src="images/service/service_1.jpg" alt="" />
                  </div>
                  <div className="col-md-6 p-6">
                    <div className="title white">SELECTIVE RELOAD</div>
                    <div className="content">
                      Have you heard about selective reloading? Heli now allows
                      you to preview the change instantly without doing any
                      server-side communication at all.
                    </div>
                    <ul className="heli-listing mt-4">
                      <li>Selective reloading</li>
                      <li>Updated homepages</li>
                      <li>No coding required</li>
                    </ul>
                  </div>
                </div>
                <div className="service-item row">
                  <div className="col-md-6 p-0">
                    <img src="images/service/service_2.jpg" alt="" />
                  </div>
                  <div className="col-md-6 p-6">
                    <div className="title white">UPDATED HOMEPAGES</div>
                    <div className="content">
                      There are at least 30 homepages counted at this time. And
                      we constantly create new ones. A great offer: Tell us your
                      desired niche theme, you’ll have it!
                    </div>
                    <ul className="heli-listing mt-4">
                      <li>Selective reloading</li>
                      <li>Updated homepages</li>
                      <li>No coding required</li>
                    </ul>
                  </div>
                </div>
                <div className="service-item row">
                  <div className="col-md-6 p-0">
                    <img src="images/service/service_3.jpg" alt="" />
                  </div>
                  <div className="col-md-6 p-6">
                    <div className="title white">NO CODING REQUIRED</div>
                    <div className="content">
                      It is now easier than ever to establish your site using
                      Heli’s most intuitive options panel, without having to
                      modify the code. Setting up shouldn’t have any hassle.
                    </div>
                    <ul className="heli-listing mt-4">
                      <li>Selective reloading</li>
                      <li>Updated homepages</li>
                      <li>No coding required</li>
                    </ul>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
