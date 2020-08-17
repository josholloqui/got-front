import React from 'react';
import '../App.css';
import ListItem from './ListItem.js';
import { fetchGOT } from '../got-api.js';

class App extends React.Component {
  state = {
    characters: []
  }

  componentDidMount = async () => {
    const gotData = await fetchGOT();

    this.setState({
      characters: gotData.body
    })
  }

  render() { 
    return (
        <ListItem characters={this.state.characters}/>
    );
  }
}
 
export default App;