import React, { Component } from 'react';

class Flat extends Component {
  handleClick = () => {
    this.props.handleClick(this.props.flat);
  }

  render() {
    const { flat } = this.props;
    const style = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('${flat.imageUrl}')`
    };
    return (
      <div className="card" style={style} onClick={this.handleClick} role="button" tabIndex={0}>
        <div className="card-category">
          { flat.price } { flat.priceCurrency }
        </div>
        <div className="card-description">
          <h2>{ flat.name }</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
};

export default Flat;
