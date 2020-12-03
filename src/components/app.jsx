import React, { Component } from 'react';

import flats from '../../data/flats';
import FlatList from './flat_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { flatList: flats };
  }

  render() {
    return (
      <div>
        <FlatList flats={flats} />
        <div className="map-container">Map</div>
      </div>
    );
  }
}

export default App;
