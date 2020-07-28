import React, { Component } from 'react'

import './css/Planting.css';

class Planting extends Component {
  render() {
    return (
      <div className="Planting">
        <h2>How to plant {this.props.name}</h2>
        <p><strong>When to Plant: </strong>{this.props.whenToPlant}</p>
        <p><strong>Growing from seed: </strong>{this.props.growingFromSeed}</p>
        <p><strong>Spacing: </strong>{this.props.spacing}</p>
        <p><strong>Transplanting: </strong>{this.props.transplanting}</p>
        <p><strong>Planting Considerations: </strong>{this.props.planting_considerations ? this.props.planting_considerations : 'None'}</p>

      </div>
    );

  }
}

export default Planting;