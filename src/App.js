import React from 'react';
import Header from './Header.js';
import './App.css';
import List from './List.js';
import Footer from './Footer.js'
import { fetchGOT } from './got-api.js';

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
      <body>
        <Header />
        <List characters={this.state.characters}/>
        <Footer />
      </body>
    );
  }
}
 
export default App;