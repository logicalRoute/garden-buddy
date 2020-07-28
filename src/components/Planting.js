import React, { Component } from 'react'

import './css/Planting.css';

class Planting extends Component {
  render() {
    return (
      <div className="Planting">
        <h3>How to plant {this.props.name}</h3>
        <p>When to Plant: {this.props.whenToPlant}</p>
        <p>Growing from seed: {this.props.growingFromSeed}</p>
        <p>Spacing: {this.props.spacing}</p>
        <p>Transplanting: {this.props.transplanting}</p>
        <p>Planting Considerations: {this.props.planting_considerations ? this.props.planting_considerations : 'None'}</p>

      </div>
    );

  }
}

export default Planting;