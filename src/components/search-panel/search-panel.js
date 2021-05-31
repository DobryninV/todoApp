import { Component } from "react";

export default class SearchPanel extends Component {
  
  render () {
    const searchText = 'Type here to Search'; 

    const { onSearchInput } = this.props;

    const searchStyle = {
      fontSize: '20px'
    }

    return <input
      style = { searchStyle } 
      placeholder={ searchText }
      onChange={ (e) => onSearchInput(e.target.value) }
    />;
  }
};
