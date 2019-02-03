import React, { Component } from "react";
import { Link } from "react-router-dom";

import Card from "../../hoc/Card";
import './SignIn.css';

export default class SignIn extends Component {
  render() {
    return (
      <div style={{marginTop : 50}}>
        <h1 className="main-heading">Campus Recruitment System</h1>
        <div className="card-container">
          <Card>
            <h2 className="singin-heading">Sign In</h2>
            <p>
              Don't Have an Account? <Link to="/signup">Sign Up</Link>
            </p>
          </Card>
        </div>
      </div>
    );
  }
}
