import React, { Component } from 'react';

export default class SideBox extends Component {
  render() {
    return (
      <div id="side-box-container" className="sidr right">
        <div className="sidr-inner">
          <a href="#" className="button-side-box-close pe-7s-close" />
          <div className="side-box-inner">
            <div className="widget">
              <h3 className="widget-title">About</h3>
              <p>
                Donec euismod sem ac urna finibus, sit amet efficitur erat
                tempus. Ut dapibus dictum turpis, vel faucibus erat posu ere
                vitae onec euismod sem ac urna finius sit ametvel faucibus erat
                posuere vitae.
              </p>
            </div>
            <div className="widget">
              <h3 className="widget-title">Useful Links</h3>
              <ul>
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
            </div>
          </div>
          <ul className="side-box-social-list">
            <li>
              <a href="#">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-pinterest" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
