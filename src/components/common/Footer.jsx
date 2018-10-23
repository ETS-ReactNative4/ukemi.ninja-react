import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12">
                <img src="images/logo2.svg" alt="Heli" />
                <div className="office">
                  <p>
                    <i className="pe-7s-call" /> (61 2) 9251 5600{' '}
                  </p>
                  <p>
                    <i className="pe-7s-mail-open-file" /> email@domain.com
                  </p>
                  <p>
                    <i className="pe-7s-map-2" /> No.200 Josecph, Canada 10020
                  </p>
                </div>
                <div className="mb-5 d-block d-md-block d-lg-none" />
              </div>
              <div className="col-lg-2 col-md-6">
                <h3 className="widget-title uppercase">Company</h3>
                <ul className="menu">
                  <li>
                    <a href="about-us.html">About us</a>
                  </li>
                  <li>
                    <a href="portfolio.html">Portfolio</a>
                  </li>
                  <li>
                    <a href="contact-us.html">Contact us</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQ</a>
                  </li>
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                </ul>
                <div className="mb-5 d-block d-md-block d-lg-none" />
              </div>
              <div className="col-lg-3 col-md-6">
                <h3 className="widget-title uppercase">News</h3>
                <ul className="widget-recent-entries">
                  <li>
                    <a href="blog-detail.html">Beautiful Typography</a>
                  </li>
                  <li>
                    <a href="blog-detail.html">Responsive Design Process</a>
                  </li>
                  <li>
                    <a href="blog-detail.html">A Little Journey</a>
                  </li>
                  <li>
                    <a href="blog-detail.html">Powerful Workflow Tips</a>
                  </li>
                </ul>
                <div className="mb-5 d-block d-md-block d-lg-none" />
              </div>
            </div>
          </div>
        </footer>
        <div className="copyright text-center">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                © {new Date().getUTCFullYear()} UKEMI - All rights reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
