import React, { Component } from 'react'

import './css/SearchBar.css';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { searchTerm: ""}
  }
  
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchTerm);
  }

  render(){
    return(
      <div className="SearchBar">
        <form onSubmit={this.onFormSubmit}>
          <label>Enter a veggie: </label>
          <input 
            type="text"
            value={this.state.searchTerm}
            onChange={(e) => this.setState({searchTerm: e.target.value})}
            disabled={!this.props.shouldLoad}
          />
          <p>{this.props.errorMessage}</p>
        </form>
      </div>
    );
  }
}

export default SearchBar;