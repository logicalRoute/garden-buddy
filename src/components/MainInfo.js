import React, { Component } from 'react'

import './css/MainInfo.css'

class MainInfo extends Component {
  render()
  {
    let formattedUrl;
    if(this.props.name){
      let url = 'https://raw.githubusercontent.com/damwhit/harvest_helper/master/data/vegetable_photos'
      let test = this.props.imageUrl.slice(25);
      formattedUrl = url + test + ".jpg"
    }
    return(
      <div className="MainInfo">
        <div className="MainInfo-header">
          <img src={formattedUrl} alt={this.props.name} />
          <h2>{this.props.name}</h2>
        </div>
        <p>{this.props.description}</p>
      </div>
    );
  
  }
}
export default MainInfo;