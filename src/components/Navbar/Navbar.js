import React, { Component } from "react";
// import { connect } from "react-redux";
// import { NavLink } from "react-router-dom";

import Aux from "../../hoc/Auxiliary";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    // let links = "";
    let navbarContent = "";
    const isAthenticated = false;
    if (isAthenticated) {
      navbarContent = (
        <Aux>
          <p className="navbar-brand  nav-item-color">Recruitment Portal</p>
          <button
            className="navbar-toggler toggle-button"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="hamburger" />
            <div className="hamburger" />
            <div className="hamburger" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <p className="nav-link nav-item-color">
                  Home <span className="sr-only">(current)</span>
                </p>
              </li>
              <li className="nav-item">
                <p className="nav-link nav-item-color">Features</p>
              </li>
              <li className="nav-item">
                <p className="nav-link nav-item-color">Pricing</p>
              </li>
            </ul>
          </div>
        </Aux>
      );
    }
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light navbar-bg"
        style={{ height: 55 }}
      >
        {navbarContent}
      </nav>
    );
  }
}


  /* <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link nav-item-color" to="/home">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-item-color" to="/homeas">
                Features
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link nav-item-color" to="/homez">
                Pricing
              </NavLink>
            </li>
          </ul> */

export default Navbar;
