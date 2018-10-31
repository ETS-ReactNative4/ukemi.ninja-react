import React, { Component } from 'react';
import Title from '../components/common/Title.jsx';
import ContactForm from '../components/pages/sections/ContactForm.jsx';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Title page="Contact Us" />
        <ContactForm />
      </React.Fragment>
    );
  }
}

export default Home;
