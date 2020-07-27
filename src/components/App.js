import React, { Component } from 'react'
import axios from 'axios';

import SearchBar from './SearchBar';
import MainInfo from './MainInfo';

import './css/App.css'

class App extends Component {
  constructor(props){
    super(props);
    this.state = { data: [], searchTerm: '', dataPass: {}};
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
    console.log('dataToPass: ', dataToPass);
    this.setState({ searchTerm: term, dataPass: dataToPass});
    console.log('Individual veggie: ', this.state.dataToPass);
    //Grab the data based upon search term
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
    <div>
      <SearchBar 
        onSubmit={this.onSubmit}
      />
      <MainInfo 
        imageUrl={this.state.dataPass.image_url}
        name={this.state.dataPass.name}
        description={this.state.dataPass.description}
      />
      {this.state.searchTerm}
    </div>
    );
  }
}
export default App;