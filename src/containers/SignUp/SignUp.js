import React, { Component } from "react";
import {Link} from 'react-router-dom';

import Card from "../../hoc/Card";

export default class SignUp extends Component {
  render() {
    return (

        <div style={{marginTop : 50}}>
        <h1 className="main-heading">Campus Recruitment System</h1>
        <div className="card-container">
          <Card>
            <h2 className="singin-heading">Sign Up</h2>
            <p>
            Already Have an Account? <Link to="/signin">Sign In</Link>
            </p>
          </Card>
        </div>
      </div>
    );
  }
}
