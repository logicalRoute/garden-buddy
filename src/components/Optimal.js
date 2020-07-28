import React, { Component } from 'react'

import './css/Optimal.css';

class Optimal extends Component {
  render(){
    let sunIcon = "";
    if(this.props.optimalSun){
      if(this.props.optimalSun.includes("Full Sun")){
        sunIcon = "fas fa-sun fa-5x orange";
      } else if(this.props.optimalSun.includes("Full-Part Sun")){
        sunIcon = "fas fa-cloud-sun fa-5x golden"
      } else {
        sunIcon = "fas fa-skull fa-5x"
      }
    }
    
    let soilType = "";
    if(this.props.optimalSoil){
      if(this.props.optimalSoil.includes("Loamy")){
        soilType = "fas fa-stop fa-3x brown ";
      } else if(this.props.optimalSoil.includes("Sandy")){
        soilType = "fas fa-stop fa-3x golden"
      } else {
        soilType = "fas fa-skull fa-3x"
      }
    }

    let soilPh = "";
    if(this.props.optimalSoil){
      if(this.props.optimalSoil.includes("Neutral")){
        soilPh = "fas fa-eye-dropper fa-3x green ";
      } else if(this.props.optimalSoil.includes("Mildly Acidic-Neutral")){
        soilPh = "fas fa-eye-dropper fa-3x light-green"
      } else if(this.props.optimalSoil.includes("Neutral-Mildly Alkaline")){
        soilPh = "fas fa-eye-dropper fa-3x blue"
      } else if(this.props.optimalSoil.includes("Acidic")){
        soilPh = "fas fa-eye-dropper fa-3x orange"
      } else {
        soilPh = "fas fa-skull fa-3x"
      }
    }
    
    return (
      <div className="Optimal">
        <h3>Optimal Conditions</h3>
        <p>Optimal Sunlight: {this.props.optimalSun}</p>
        <i className={sunIcon}></i>
        <p>Optimal Soil: {this.props.optimalSoil}</p>
        <p>Soil: &nbsp;&nbsp;<i className={soilType}></i></p>
        <p>pH: &nbsp;&nbsp;<i className={soilPh}></i></p>
      </div>
      
    );
  }
}

export default Optimal;