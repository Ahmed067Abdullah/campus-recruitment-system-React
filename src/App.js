import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import getRoutes from './routes';

import "./App.css";

class App extends Component {
  render() {
    let routes = getRoutes(false)
    return (
      <Router>
        <div className="App">
          <Navbar />
          {routes}
        </div>
      </Router>
    );
  }
}

export default App;
