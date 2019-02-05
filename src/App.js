import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Navbar from "./components/Navbar/Navbar";
import getRoutes from "./routes";

import "./App.css";

class App extends Component {
  render() {
    let routes = getRoutes(false);
    return (
      <Router>
        <div className="App">
          <Navbar />
          <MuiThemeProvider>{routes}</MuiThemeProvider>
        </div>
      </Router>
    );
  }
}

export default App;
