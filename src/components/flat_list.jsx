import React from 'react';

import Flat from './flat';

const FlatList = ({ flats }) => {
  return (
    <div className="flat-list">
      { flats.map(flat =>
        <Flat
          key={flat.name}
          name={flat.name}
          imageUrl={flat.imageUrl}
          price={flat.price}
          priceCurrency={flat.priceCurrency}
          lat={flat.lat}
          lng={flat.lng}
        />) }
    </div>
  );
};

export default FlatList;
