import React, { Component } from 'react'
import axios from 'axios';

import SearchBar from './SearchBar';
import MainInfo from './MainInfo';
import Optimal from './Optimal';
import Planting from './Planting';

import './css/App.css'

class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      data: [], 
      searchTerm: '', 
      dataPass: {},
      errorMessage: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  componentDidMount = () => {
    axios.get('https://harvesthelper.herokuapp.com/api/v1/plants?api_key=4bd977e41e7468b5633f1111f82d50be')
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
      <div className="App-top">
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
      
      {this.state.searchTerm}
    </div>
    );
  }
}
export default App;