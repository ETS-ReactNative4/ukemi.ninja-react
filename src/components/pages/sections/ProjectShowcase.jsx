import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';

const options = {
  autoplay: true,
  items: 1,
  dots: false,
  navText: [
    '<i class="fa fa-angle-left"></i>',
    '<i class="fa fa-angle-right"></i>',
  ],
  responsive: {
    0: { nav: false },
    479: { nav: false },
    768: { nav: false },
    979: { nav: false },
    1199: { nav: true },
  },
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
                    <img
                      src="images/project/recent/yug2018.jpg"
                      alt="Youth Urban Games 2018"
                    />
                  </div>
                  <div className="col-md-6 p-4">
                    <div className="title white">Youth Urban Games 2018</div>
                    <div className="content">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Commodi a rerum odio quisquam aspernatur molestias id sed,
                      eos voluptatibus, doloremque quidem amet est? Obcaecati
                      voluptates exercitationem itaque, repudiandae consequuntur
                      voluptatum?
                    </div>
                    <ul className="heli-listing mt-4">
                      <li>Bloop bleep blep</li>
                      <li>Is this even real?</li>
                      <li>Probably not...</li>
                    </ul>
                  </div>
                </div>
                <div className="service-item row">
                  <div className="col-md-6 p-0">
                    <img
                      src="images/project/recent/ukemi_cards.jpg"
                      alt="Ukemi Card Game"
                    />
                  </div>
                  <div className="col-md-6 p-4">
                    <div className="title white">Ukemi Card Game</div>
                    <div className="content">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates perspiciatis consectetur iusto soluta
                      cupiditate odio incidunt, praesentium accusantium
                      accusamus eum ducimus, nihil iste, repellendus nisi illum
                      nostrum a ullam ratione.
                    </div>
                    <ul className="heli-listing mt-4">
                      <li>What a time to be alive</li>
                      <li>Updated deck design</li>
                      <li>We captured a feral swan!</li>
                    </ul>
                  </div>
                </div>
                <div className="service-item row">
                  <div className="col-md-6 p-0">
                    <img
                      src="images/project/recent/greatest_park.jpg"
                      alt="Rottenrow Gardens Glasgow"
                    />
                  </div>
                  <div className="col-md-6 p-4">
                    <div className="title white">
                      The Greatest Park Never Built
                    </div>
                    <div className="content">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sit dolores rerum non rem commodi esse excepturi, aperiam,
                      distinctio suscipit, reprehenderit corrupti ad eligendi
                      blanditiis earum quisquam sequi necessitatibus. Deleniti,
                      molestiae! Deleniti, molestiae!
                    </div>
                    <ul className="heli-listing mt-4">
                      <li>something something dark side</li>
                      <li>something something dark side</li>
                      <li>something something dark side</li>
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
