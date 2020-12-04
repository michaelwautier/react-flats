import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import flats from '../../data/flats';
import FlatList from './flat_list';
import Marker from './marker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats,
      selectedFlat: null
    };
  }

  selectFlat = (flat) => {
    this.setState({ selectedFlat: flat });
  }

  render() {
    let center = { lat: 48.864716, lng: 2.349014 };
    const { selectedFlat } = this.state;
    if (selectedFlat) {
      center = {
        lat: selectedFlat.lat,
        lng: selectedFlat.lng
      };
    }
    return (
      <div>
        <FlatList flats={flats} selectFlat={this.selectFlat} />
        <div className="map-container">
          <GoogleMapReact center={center} zoom={13}>
            {this.state.flats.map((flat) => {
              return <Marker lat={flat.lat} lng={flat.lng} text={flat.price} key={flat.name} selected={flat === selectedFlat} />;
            })}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
