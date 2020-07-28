import React, { Component } from 'react'
import moment from 'moment';
import './css/HarvestingStorage.css';

class HarvestingStorage extends Component{
  render(){
    let harvestDateText;
    let harvestDate = moment().add(this.props.harvestingDays, 'days').calendar();
    if(this.props.harvestingDays !== 1 && this.props.harvestingDays !== -1){
      harvestDateText = `Est. Harvest Date if planted today: ${harvestDate}`
    }
    return(
      <div className="HarvestingStorage">
        <h2>Harvesting and Storage</h2>
        <p><strong>Harvesting: </strong>{this.props.harvesting}</p>
        <p><strong>Storage: </strong>{this.props.storage ? this.props.storage : "None"}</p>
        <h2>{harvestDateText}</h2>
      </div>
    );
  }
}

export default HarvestingStorage;