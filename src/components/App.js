import React, { Component } from 'react'
import axios from 'axios';

import SearchBar from './SearchBar';
import MainInfo from './MainInfo';
import Optimal from './Optimal';
import Planting from './Planting';
import Care from './Care';
import WatchFor from './WatchFor';
import HarvestingStorage from './HarvestingStorage';

import './css/App.css'

class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      data: [], 
      searchTerm: '', 
      dataPass: {},
      errorMessage: 'Waiting for user input...'
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  componentDidMount = () => {
    axios.get('https://garden-buddy-backend.herokuapp.com/veggies')
    .then((response) => {
      this.setState({ data: response.data})
      console.log(this.state.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  onSubmit = (term) => {
    console.log('term:', term);
    let dataToPass = this.search(term, this.state.data);
    if(dataToPass){
      this.setState({ 
        searchTerm: term, 
        dataPass: dataToPass,
        errorMessage: `${dataToPass.name} was found in the database.`});
    } else {
      this.setState({ errorMessage: `${term} was not found. Please search again.`})
    }
  }

  search = (nameKey, array) => {
    let searchName = nameKey.toLowerCase();
    for(let i = 0; i < array.length; i++){
      let name = array[i].name.toLowerCase();
      if(name === searchName || name.includes(searchName)) {
        return array[i];
      }
    }
  }

  render() {
    
    return (
    <div className="App">
      <SearchBar 
        onSubmit={this.onSubmit}
        errorMessage={this.state.errorMessage}
      />
      {this.state.searchTerm &&
        <div className="container">
          <div className="row">
            <MainInfo 
                imageUrl={this.state.dataPass.image_url}
                name={this.state.dataPass.name}
                description={this.state.dataPass.description}
              />
            <Optimal 
              optimalSun={this.state.dataPass.optimal_sun}
              optimalSoil={this.state.dataPass.optimal_soil}
            />
            <Planting 
              name={this.state.dataPass.name}
              whenToPlant={this.state.dataPass.when_to_plant}  
              growingFromSeed={this.state.dataPass.growing_from_seed}  
              spacing={this.state.dataPass.spacing}  
              transplanting={this.state.dataPass.transplanting}  
            />
          </div>
          
            
          
          <div className="row">
            <Care 
              watering={this.state.dataPass.watering}
              feeding={this.state.dataPass.feeding}
              otherCare={this.state.dataPass.other_care}
            />
            <WatchFor 
              diseases={this.state.dataPass.diseases}
              pests={this.state.dataPass.pests}
            />
            <HarvestingStorage 
              harvesting={this.state.dataPass.harvesting}
              storageUse={this.state.dataPass.storage_use}
              harvestingDays={this.state.dataPass.harvesting_days}
            />
          </div>
        </div>}
    </div>
    );
  }
}
export default App;