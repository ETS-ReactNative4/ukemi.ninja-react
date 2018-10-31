import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
export default class Footer extends Component {
  render() {
    return (
      <footer className="footer pt-3 pb-3">
        <Container>
          <Row>
            <Col sm="12">
              <div className="text-center">
                <div className="social-icons">
                  <a
                    href="https://www.instagram.com/UkemiProject"
                    className="social-instagram">
                    <i className="fab fa-instagram" />
                  </a>
                  <a
                    href="https://facebook.com/UkemiProject"
                    className="social-facebook">
                    <i className="fab fa-facebook-square" />
                  </a>
                  <a
                    href="https://twitter.com/UkemiProject"
                    className="social-twitter">
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    href="https://pinterest.com/UkemiProject"
                    className="social-pintrest">
                    <i className="fab fa-pinterest" />
                  </a>
                </div>
                <div className="white mt-1">
                  © {new Date().getUTCFullYear()} Ukemi Project - All rights
                  reserved
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}
