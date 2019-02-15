import React, { Component } from 'react';
import './Blocked.css';

export default class Blocked extends Component {
  render() {
    return (
      <div>
          <h1 className="blocked-msg">Sorry! Your Account is Blocked By Admin.</h1>
      </div>
    )
  }
}
