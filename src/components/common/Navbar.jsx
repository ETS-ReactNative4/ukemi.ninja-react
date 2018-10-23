import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <header className="header header-1 header-desktop header-transparent header-white">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12 col-xl-12 pl-0">
              <div className="row">
                <nav className="main-navigation full-width d-none d-lg-block">
                  <div className="primary-menu">
                    <ul className="main-menu text-center">
                      <li>
                        <a href="./">Home</a>
                      </li>
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Projects</a>
                        <ul className="sub-menu text-left">
                          <li>
                            <a href="cards.html">Card Game</a>
                          </li>
                          <li>
                            <a href="parks.html">Parks</a>
                          </li>
                          <li>
                            <a href="events.html">Events</a>
                          </li>
                          <li>
                            <a href="#">Books</a>
                          </li>
                          <li>
                            <a href="#">
                              Other <i className="fa fa-chevron-right" />
                            </a>
                            <ul className="sub-menu">
                              <li>
                                <a href="#">Design</a>
                              </li>
                              <li>
                                <a href="#">Performance</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                      <li>
                        <a href="#">Store</a>
                      </li>
                      <li>
                        <a href="#">Contact us</a>
                      </li>
                    </ul>
                  </div>
                </nav>
                <div className="header-column-icon-container">
                  <div className="header-icon header-icon-cart mini-cart d-none d-lg-block">
                    <div className="mini-cart__button">
                      <span className="mini-cart-icon" data-count="0" />
                    </div>
                    <div className="widget-shopping-cart-content">
                      <ul className="cart-list">
                        <li className="empty">No products in the cart.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="header-icon header-icon-canvas menu-button d-none d-lg-block">
                    <span />
                  </div>
                  <div
                    id="page-open-mobile-menu"
                    className="page-open-mobile-menu dark d-lg-none">
                    <div>
                      <i />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
