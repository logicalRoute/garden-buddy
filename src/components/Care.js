import React, { Component } from 'react'

import './css/Care.css';

class Care extends Component {
  render() {
    return(
      <div className="Care">
        <h2>Care</h2>
        <p><strong>Watering: </strong>{this.props.watering}</p>
        <p><strong>Feeding: </strong>{this.props.feeding}</p>
        <p><strong>Other Care: </strong>{this.props.otherCare}</p>
      </div>
    );
  }
}

export default Care;