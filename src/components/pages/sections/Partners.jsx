import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Container, Row, Col } from 'reactstrap';

const options = {
  autoplay: true,
  items: 6,
  dots: false,
  loop: true,
  responsive: {
    0: { items: 2 },
    479: { items: 2 },
    768: { items: 3, center: true },
    979: { items: 4 },
    1199: { items: 6 },
  },
};

export default class Partners extends Component {
  render() {
    return (
      <section>
        <Container>
          <Row>
            <Col sm={12}>
              <OwlCarousel className="client-carousel" {...options}>
                <div className="item text-center">
                  <img src="images/client/client_1.jpg" alt="Sport Inspired" />
                  <div className="overlay-wrapper">
                    <div className="overlay" />
                    <div className="text">
                      <div className="text-inner">Sport Inspired</div>
                    </div>
                  </div>
                </div>
                <div className="item text-center">
                  <img src="images/client/client_2.jpg" alt="Scottish Canals" />
                  <div className="overlay-wrapper">
                    <div className="overlay" />
                    <div className="text">
                      <div className="text-inner">Scottish Canals</div>
                    </div>
                  </div>
                </div>
                <div className="item text-center">
                  <img
                    src="images/client/client_3.jpg"
                    alt="Parkour Scotland"
                  />
                  <div className="overlay-wrapper">
                    <div className="overlay" />
                    <div className="text">
                      <div className="text-inner">Parkour Scotland</div>
                    </div>
                  </div>
                </div>
                <div className="item text-center">
                  <img src="images/client/client_4.jpg" alt="Access Parkour" />
                  <div className="overlay-wrapper">
                    <div className="overlay" />
                    <div className="text">
                      <div className="text-inner">Access Parkour</div>
                    </div>
                  </div>
                </div>
                <div className="item text-center">
                  <img
                    src="images/client/client_5.jpg"
                    alt="AIM Sports Academy"
                  />
                  <div className="overlay-wrapper">
                    <div className="overlay" />
                    <div className="text">
                      <div className="text-inner">AIM Sports Academy</div>
                    </div>
                  </div>
                </div>
                <div className="item text-center">
                  <img
                    src="images/client/client_6.jpg"
                    alt="Parkour Generations"
                  />
                  <div className="overlay-wrapper">
                    <div className="overlay" />
                    <div className="text">
                      <div className="text-inner">Parkour Generations</div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
