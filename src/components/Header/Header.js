/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
//import { Link } from 'react-router-dom';

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
              <a className="nav-link" href="/">
                Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/shoppingcart">
                Shopping Cart
              </a>
            </li>
            {/* <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li> */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdown01"
                data-toggle="dropdown"
                aria-haspopup="true"
                //   using a hook to control dropdown behaviour instead of bootstraps js
                aria-expanded={showDropDown === true ? 'true' : 'false'}
                onClick={() => setShow(!showDropDown)}
              >
                Username
              </a>
              <div
                //   using a hook to control dropdown behaviour instead of bootstraps js
                className={
                  showDropDown === true ? 'dropdown-menu show' : 'dropdown-menu'
                }
                aria-labelledby="dropdown01"
                onClick={() => setShow(!showDropDown)}
              >
                <a className="dropdown-item" href="/orders">
                  My Orders
                </a>
                <a className="dropdown-item" href="/adminorders">
                  Manage Orders
                </a>
                <a className="dropdown-item" href="/adminproducts">
                  Manage Products
                </a>
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
