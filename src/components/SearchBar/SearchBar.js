import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };

    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  // Sets the state of the term to the value the user enters in input
  handleTermChange(event) {
    this.setState({ term: event.target.value });
  }

  //Sets the argument for the search method in App.js to the state of the term
  search() {
    this.props.onSearch(this.state.term);
  }

  render() {
    return(
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
        <button onClick={this.search} className="SearchButton">SEARCH</button>
      </div>
    )
  }
};

export default SearchBar;