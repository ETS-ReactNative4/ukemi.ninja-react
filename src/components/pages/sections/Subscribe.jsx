import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Button,
  Input,
} from 'reactst
export default 
  render() {
    return (
      <section 
        <Conta
          <Row>
            <Col sm={12} lg={4} md={4}>
              <h2 className="section-title fz-24 mt-1 mb-2 text-center-xs">
                <b>SUBSCRIBE</b>
                NOW
              </h2>
            </Col>
            <Col sm={12} lg={8} md={8}>
              <Form className="newsletter-form text-center-xs">
                <FormGroup>
                  <Input
                    type="email"
                    name="email"
                    id="formEmail"
                    placeholder="Your email address"
                    className="text-center-xs mb-1"
                  />
                </FormGroup>
                <Button className="btn btn-rounded btn-bg-dark btn-large mb-2">
                  <span>Subscribe </span>
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
