import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Button,
  Label,
  Input,
  FormText,
} from 'reactstrap';

export default class ContactForm extends Component {
  render() {
    return (
      <section className="pt-2 pb-10">
        <Container>
          <Row>
            <Col lg={2} />
            <Col lg={8}>
              <div className="text-center">
                <h2 className="fz-48">
                  <b>KEEP</b> IN TOUCH
                </h2>
                <p>
                  Use the form below to send us a message, we would love to hear
                  from you!
                </p>
                <div className="mb-3" />
              </div>
              <Form>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Input
                        type="text"
                        name="name"
                        id="formName"
                        placeholder="Your name"
                        className="form-control"
                        size={40}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Input
                        type="email"
                        name="email"
                        id="formEmail"
                        size={40}
                        className="form-control"
                        placeholder="Your email"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Input
                        type="text"
                        name="subject"
                        id="formSubject"
                        size={40}
                        className="form-control"
                        placeholder="Subject"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Input
                        type="text"
                        name="phone"
                        id="formPhone"
                        size={40}
                        className="form-control"
                        placeholder="Phone number"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={12}>
                    <FormGroup>
                      <Input
                        type="textarea"
                        name="message"
                        cols={40}
                        rows={10}
                        className="form-control"
                        placeholder="Your message"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={12}>
                    <Button>Submit</Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
