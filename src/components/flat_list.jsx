import React, { Component } from 'react';

import Flat from './flat';

class FlatList extends Component {
  handleClick = (flat) => {
    this.props.selectFlat(flat);
  }

  render() {
    const { flats } = this.props;
    return (
      <div className="flat-list">
        { flats.map((flat) => {
          return <Flat key={flat.name} flat={flat} handleClick={this.handleClick} />;
        })}
      </div>
    );
  }
}

export default FlatList;
