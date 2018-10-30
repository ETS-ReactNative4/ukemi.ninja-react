import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';

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
                        <Link to="./">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="#">Projects</Link>
                        <ul className="sub-menu text-left">
                          <li>
                            <Link to="/cards">Card Game</Link>
                          </li>
                          <li>
                            <Link to="/parks">Parks</Link>
                          </li>
                          <li>
                            <Link to="/events">Events</Link>
                          </li>
                          <li>
                            <Link to="/books">Books</Link>
                          </li>
                          <li>
                            <Link to="#">
                              Other <i className="fa fa-chevron-right" />
                            </Link>
                            <ul className="sub-menu">
                              <li>
                                <Link to="/design">Design</Link>
                              </li>
                              <li>
                                <Link to="/performance">Performance</Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link to="/store">Store</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact us</Link>
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
