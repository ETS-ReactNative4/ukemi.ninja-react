import React, { Component } from 'react';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';

export default class Title extends Component {
  render() {
    return (
      <section className="section-title-bg pt-6 pb-2 mb-6">
        <Container>
          <Row>
            <Col lg="5">
              <Breadcrumb>
                <BreadcrumbItem className="bread_crumb">
                  <Link to="./">Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>{this.props.page}</BreadcrumbItem>
              </Breadcrumb>
              <h2 className="fz-32 mb-3 white fw-bold">{this.props.page}</h2>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
