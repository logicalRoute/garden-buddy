import React, { Component } from 'react'

import './css/WatchFor.css';

class WatchFor extends Component {
  render(){
    return(
      <div className="WatchFor">
        <h2>Watch For</h2>
        <p><strong>Diseases: </strong>{this.props.diseases}</p>
        <p><strong>Pests: </strong>{this.props.pests}</p>
      </div>
    );
  }
}

export default WatchFor;