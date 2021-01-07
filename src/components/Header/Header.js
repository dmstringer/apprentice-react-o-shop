/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [showDropDown, setShow] = useState(false);

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-label="Toggle navigation"
          aria-expanded="false"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/shoppingcart" className="nav-link">
                Shopping Cart
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdown01"
                aria-haspopup="true"
                aria-expanded={showDropDown === true ? 'true' : 'false'}
                onClick={() => setShow(!showDropDown)}
              >
                Username
              </a>
              <div
                className={
                  showDropDown === true ? 'dropdown-menu show' : 'dropdown-menu'
                }
                aria-labelledby="dropdown01"
                onClick={() => setShow(!showDropDown)}
              >
                <Link to="/orders" className="dropdown-item">
                  My Orders
                </Link>
                <Link to="/admin-orders" className="dropdown-item">
                  Manage Orders
                </Link>
                <Link to="/admin-products" className="dropdown-item">
                  Manage Products
                </Link>
                <a className="dropdown-item" href="#">
                  Log Out
                </a>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
}

export default Header;
