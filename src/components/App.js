import React, { Component } from 'react'
import axios from 'axios';

import SearchBar from './SearchBar';
import MainInfo from './MainInfo';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { data: [], searchTerm: '', dataPass: {}};
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  componentDidMount = () => {
    axios.get('http://harvesthelper.herokuapp.com/api/v1/plants?api_key=4bd977e41e7468b5633f1111f82d50be')
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
    console.log(this.state.dataToPass);
    //Grab the data based upon search term
  }

  search = (nameKey, array) => {
    for(let i = 0; i < array.length; i++){
      if(array[i].name.toLowerCase() === nameKey) {
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
        data={this.dataPass}
      />
      {this.state.searchTerm}
    </div>
    );
  }
}
export default App;