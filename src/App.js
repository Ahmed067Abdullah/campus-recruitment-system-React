import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";

import Navbar from "./components/Navbar/Navbar";
import getRoutes from "./routes";

import "./App.css";

class App extends Component {
  render() {
    let routes = getRoutes(this.props.status);
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div style={{ marginTop: 70 }}>{routes}</div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    status: state.auth.status
  };
};

export default connect(mapStateToProps)(App);
